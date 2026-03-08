// Shopify Storefront API client for WeBearish
// Fetches live product data from the Shopify store
// Checkout links go to store.webearish.com

const SHOPIFY_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || "webearish.myshopify.com";
const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN || "";
const SHOPIFY_ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN || process.env.SHOPIFY_API_KEY || "";

export const STORE_URL = "https://store.webearish.com";

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

// ─── Admin REST API fetch ─────────────────────────────────────────────────────

export async function fetchProducts(): Promise<ShopifyProduct[]> {
  if (!SHOPIFY_ADMIN_TOKEN && !SHOPIFY_STOREFRONT_TOKEN) return [];

  try {
    if (SHOPIFY_STOREFRONT_TOKEN) {
      return fetchProductsStorefront();
    }
    return fetchProductsAdmin();
  } catch (err) {
    console.error("[shopify] fetchProducts failed:", err);
    return [];
  }
}

async function fetchProductsAdmin(): Promise<ShopifyProduct[]> {
  const res = await fetch(
    `https://${SHOPIFY_DOMAIN}/admin/api/2024-01/products.json?status=active&limit=50`,
    {
      headers: { "X-Shopify-Access-Token": SHOPIFY_ADMIN_TOKEN },
      next: { revalidate: 300 },
    }
  );
  if (!res.ok) return [];
  const { products } = await res.json();
  return (products || []).map(normalizeAdminProduct);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeAdminProduct(p: any): ShopifyProduct {
  const variants = (p.variants || []).map((v: any) => ({
    id: String(v.id),
    title: v.title,
    price: v.price,
    availableForSale: v.inventory_quantity !== 0,
    selectedOptions: [
      v.option1 ? { name: "Option1", value: v.option1 } : null,
      v.option2 ? { name: "Option2", value: v.option2 } : null,
    ].filter(Boolean),
  }));

  const prices = variants.map((v: ShopifyVariant) => parseFloat(v.price));
  return {
    id: String(p.id),
    handle: p.handle,
    title: p.title,
    description: (p.body_html || "").replace(/<[^>]*>/g, "").trim(),
    productType: p.product_type || "",
    tags: typeof p.tags === "string" ? p.tags.split(", ").filter(Boolean) : [],
    images: (p.images || []).map((img: any) => ({ url: img.src, altText: img.alt })),
    variants,
    minPrice: Math.min(...prices).toFixed(2),
    maxPrice: Math.max(...prices).toFixed(2),
  };
}

// ─── Storefront GraphQL fetch ─────────────────────────────────────────────────

async function fetchProductsStorefront(): Promise<ShopifyProduct[]> {
  const query = `{
    products(first: 50) {
      edges { node {
        id handle title description productType tags
        images(first: 3) { edges { node { url altText } } }
        variants(first: 20) { edges { node {
          id title availableForSale
          price { amount }
          selectedOptions { name value }
        } } }
        priceRange {
          minVariantPrice { amount }
          maxVariantPrice { amount }
        }
      } }
    }
  }`;

  const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`, {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 300 },
  });

  if (!res.ok) return [];
  const { data } = await res.json();

  return (data?.products?.edges || []).map(({ node }: any) => ({
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    productType: node.productType,
    tags: node.tags,
    images: node.images.edges.map((e: any) => e.node),
    variants: node.variants.edges.map((e: any) => ({
      id: e.node.id,
      title: e.node.title,
      price: e.node.price.amount,
      availableForSale: e.node.availableForSale,
      selectedOptions: e.node.selectedOptions,
    })),
    minPrice: parseFloat(node.priceRange.minVariantPrice.amount).toFixed(2),
    maxPrice: parseFloat(node.priceRange.maxVariantPrice.amount).toFixed(2),
  }));
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function formatPrice(amount: string): string {
  return `$${parseFloat(amount).toFixed(2)}`;
}

export function getProductCategory(p: ShopifyProduct): string {
  if (p.productType) return p.productType;
  const tags = p.tags.map(t => t.toLowerCase());
  if (tags.some(t => ["kids","children","youth","toddler","baby"].includes(t))) return "Kids";
  if (tags.some(t => ["apparel","shirt","hoodie","tee"].includes(t))) return "Apparel";
  if (tags.some(t => ["accessories","accessory"].includes(t))) return "Accessories";
  if (tags.some(t => ["home","decor"].includes(t))) return "Home";
  return "Apparel";
}

export function productStoreUrl(handle: string): string {
  return `${STORE_URL}/products/${handle}`;
}
