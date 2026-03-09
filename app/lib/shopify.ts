// Shopify public JSON API client for WeBearish
// Uses the public /products.json endpoint -- no token required
// Checkout links go to shop.webearish.com

export const STORE_URL = "https://shop.webearish.com";
const PUBLIC_PRODUCTS_URL = "https://shop.webearish.com/products.json";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ShopifyVariant {
  id: string;
  title: string;
  price: string;
  availableForSale: boolean;
  selectedOptions: { name: string; value: string }[];
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  productType: string;
  tags: string[];
  images: { url: string; altText: string | null }[];
  variants: ShopifyVariant[];
  minPrice: string;
  maxPrice: string;
}

// ─── Blocklist -- handles excluded from webearish.com/shop display ────────────
const BLOCKED_HANDLES = new Set([
  "dark-maga-make-abearica-great-again-tshirt",
  "dark-maga-make-abearica-great-again-dad-hat",
  "make-abearica-great-again-dad-hat",
]);

// Also filter any product whose title contains these strings (case-insensitive)
const BLOCKED_TITLE_TERMS = ["abearica", "maga"];

function isAllowed(p: ShopifyProduct): boolean {
  if (BLOCKED_HANDLES.has(p.handle)) return false;
  const titleLower = p.title.toLowerCase();
  if (BLOCKED_TITLE_TERMS.some(term => titleLower.includes(term))) return false;
  return true;
}

// ─── Public fetch (no credentials needed) ────────────────────────────────────

export async function fetchProducts(): Promise<ShopifyProduct[]> {
  try {
    // Shopify allows 250 products per page via the public endpoint
    const pages = await Promise.all([
      fetchPage(1),
      fetchPage(2),
    ]);
    return pages.flat().filter(isAllowed);
  } catch (err) {
    console.error("[shopify] fetchProducts failed:", err);
    return [];
  }
}

async function fetchPage(page: number): Promise<ShopifyProduct[]> {
  const res = await fetch(
    `${PUBLIC_PRODUCTS_URL}?limit=250&page=${page}`,
    { next: { revalidate: 300 } }
  );
  if (!res.ok) return [];
  const { products } = await res.json();
  if (!products || products.length === 0) return [];
  return products.map(normalizeProduct);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeProduct(p: any): ShopifyProduct {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const variants = (p.variants || []).map((v: any) => ({
    id: String(v.id),
    title: v.title,
    price: v.price,
    availableForSale: v.available !== false,
    selectedOptions: [
      v.option1 ? { name: "Option1", value: v.option1 } : null,
      v.option2 ? { name: "Option2", value: v.option2 } : null,
      v.option3 ? { name: "Option3", value: v.option3 } : null,
    ].filter(Boolean),
  }));

  const prices = variants.map((v: ShopifyVariant) => parseFloat(v.price)).filter(Boolean);
  const minP = prices.length ? Math.min(...prices) : 0;
  const maxP = prices.length ? Math.max(...prices) : 0;

  // Normalize tags -- Shopify returns them as array in public API
  const rawTags = Array.isArray(p.tags) ? p.tags : (typeof p.tags === "string" ? p.tags.split(", ") : []);
  const tags = rawTags.map((t: string) => t.trim()).filter(Boolean);

  return {
    id: String(p.id),
    handle: p.handle,
    title: p.title,
    description: (p.body_html || "").replace(/<[^>]*>/g, "").trim(),
    productType: p.product_type || "",
    tags,
    images: (p.images || []).map((img: any) => ({
      url: img.src,
      altText: img.alt || null,
    })),
    variants,
    minPrice: minP.toFixed(2),
    maxPrice: maxP.toFixed(2),
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function formatPrice(amount: string): string {
  return `$${parseFloat(amount).toFixed(2)}`;
}

export function getProductCategory(p: ShopifyProduct): string {
  if (p.productType) return p.productType;
  const tags = p.tags.map(t => t.toLowerCase());
  if (tags.some(t => ["kids", "children", "youth", "toddler", "baby", "kids hoodie"].includes(t))) return "Kids";
  if (tags.some(t => ["womens", "women"].includes(t))) return "Womens";
  if (tags.some(t => ["mens", "men"].includes(t))) return "Mens";
  if (tags.some(t => ["headwear", "hats", "hat", "beanie", "beanies", "headwear"].includes(t))) return "Headwear";
  if (tags.some(t => ["accessories", "bags", "drinkware", "tech", "stickers", "patches"].includes(t))) return "Accessories";
  if (tags.some(t => ["hoodies", "hoodie", "sweatshirt"].includes(t))) return "Hoodies";
  return "Apparel";
}

export function productStoreUrl(handle: string): string {
  return `${STORE_URL}/products/${handle}`;
}
