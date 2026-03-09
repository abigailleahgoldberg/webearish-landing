import { fetchProducts, ShopifyProduct, formatPrice, getProductCategory, productStoreUrl, STORE_URL } from "../lib/shopify";
import ShopPageClient from "./ShopPageClient";

export const revalidate = 300;

// Static fallback — used when Shopify credentials are not yet configured
const STATIC_PRODUCTS = [
  { id:"s14", handle:"bear-cub-onesie",              title:"Bear Cub Onesie",                 productType:"Kids",        badge:"Children First", description:"100% cotton. Newborn to 18M. Soft on sensitive skin.",     minPrice:"19.99", maxPrice:"19.99", images:[], tags:[], variants:[] },
  { id:"s15", handle:"youth-acceptance-tee",         title:"Youth Acceptance Tee",            productType:"Kids",        badge:"",               description:"Kids XS-XL. Identity-first message. Extra soft jersey.",   minPrice:"19.99", maxPrice:"19.99", images:[], tags:[], variants:[] },
  { id:"s16", handle:"kids-bear-hoodie",             title:"Kids Bear Hoodie",                productType:"Kids",        badge:"",               description:"Soft fleece. Kids S-XL. The movement starts young.",        minPrice:"32.99", maxPrice:"32.99", images:[], tags:[], variants:[] },
  { id:"s18", handle:"toddler-bear-tee",             title:"Toddler Bear Tee",                productType:"Kids",        badge:"",               description:"2T-5T. Extra soft. Bears belong everywhere.",               minPrice:"17.99", maxPrice:"17.99", images:[], tags:[], variants:[] },
  { id:"s19", handle:"kids-webearish-cap",           title:"Kids WeBearish Cap",              productType:"Kids",        badge:"",               description:"Adjustable fit. Ages 4 and up.",                           minPrice:"18.99", maxPrice:"18.99", images:[], tags:[], variants:[] },
  { id:"s17", handle:"baby-bear-bib",                title:"Baby Bear Bib",                   productType:"Kids",        badge:"",               description:"Waterproof. Adjustable snaps. Perfect shower gift.",        minPrice:"12.99", maxPrice:"12.99", images:[], tags:[], variants:[] },
  { id:"s1",  handle:"bear-pride-tee",               title:"Bear Pride Tee",                  productType:"Apparel",     badge:"Bestseller",     description:"Soft organic cotton. Wear the movement.",                  minPrice:"24.99", maxPrice:"24.99", images:[], tags:[], variants:[] },
  { id:"s7",  handle:"acceptance-not-awareness-hoodie", title:"Acceptance Not Awareness Hoodie", productType:"Apparel", badge:"",               description:"The distinction that matters most.",                        minPrice:"44.99", maxPrice:"44.99", images:[], tags:[], variants:[] },
  { id:"s2",  handle:"acceptance-crew-hoodie",       title:"Acceptance Crew Hoodie",          productType:"Apparel",     badge:"",               description:"Heavyweight fleece. Built for belonging.",                  minPrice:"44.99", maxPrice:"44.99", images:[], tags:[], variants:[] },
  { id:"s6",  handle:"neurodivergent-proud-tee",     title:"Neurodivergent & Proud Tee",      productType:"Apparel",     badge:"",               description:"Say it loud. Wear it proud.",                              minPrice:"24.99", maxPrice:"24.99", images:[], tags:[], variants:[] },
  { id:"s3",  handle:"we-are-enough-long-sleeve",    title:"We Are Enough Long Sleeve",       productType:"Apparel",     badge:"",               description:"A reminder that needs no explanation.",                    minPrice:"29.99", maxPrice:"29.99", images:[], tags:[], variants:[] },
  { id:"s4",  handle:"webearish-dad-hat",            title:"WeBearish Dad Hat",               productType:"Apparel",     badge:"",               description:"Unstructured low-profile. Classic fit.",                   minPrice:"22.99", maxPrice:"22.99", images:[], tags:[], variants:[] },
  { id:"s9",  handle:"we-are-enough-mug",            title:"We Are Enough Mug",               productType:"Accessories", badge:"",               description:"11oz ceramic. Morning reminder.",                          minPrice:"18.99", maxPrice:"18.99", images:[], tags:[], variants:[] },
  { id:"s10", handle:"webearish-tote-bag",           title:"WeBearish Tote Bag",              productType:"Accessories", badge:"",               description:"Canvas. Roomy. Mission-forward.",                          minPrice:"16.99", maxPrice:"16.99", images:[], tags:[], variants:[] },
  { id:"s11", handle:"acceptance-sticker-pack",      title:"Acceptance Sticker Pack",         productType:"Accessories", badge:"",               description:"5 die-cut vinyl stickers.",                                minPrice:"8.99",  maxPrice:"8.99",  images:[], tags:[], variants:[] },
  { id:"s20", handle:"acceptance-poster",            title:"Acceptance Poster 18x24",         productType:"Home",        badge:"",               description:"Matte print. Frame-ready.",                                minPrice:"19.99", maxPrice:"19.99", images:[], tags:[], variants:[] },
  { id:"s22", handle:"bear-pride-throw-blanket",     title:"Bear Pride Throw Blanket",        productType:"Home",        badge:"",               description:"50x60 woven fleece. Ultra soft.",                          minPrice:"44.99", maxPrice:"44.99", images:[], tags:[], variants:[] },
] as (ShopifyProduct & { badge: string })[];

const KIDS_TAGS = ["kids", "kids hoodie", "children", "youth", "toddler", "baby"];

function isKidsProduct(p: ShopifyProduct): boolean {
  const tags = p.tags.map(t => t.toLowerCase());
  const title = p.title.toLowerCase();
  return (
    tags.some(t => KIDS_TAGS.includes(t)) ||
    title.includes("toddler") ||
    title.includes("youth") ||
    title.includes("baby") ||
    title.includes("onesie") ||
    title.includes("kids")
  );
}

export default async function ShopPage() {
  const liveProducts = await fetchProducts();
  const isLive = liveProducts.length > 0;
  const allProducts = isLive ? liveProducts : STATIC_PRODUCTS;

  // First wave: kids items first, then everything else
  const kidsProducts = allProducts.filter(isKidsProduct);
  const otherProducts = allProducts.filter(p => !isKidsProduct(p));
  const products = [...kidsProducts, ...otherProducts];

  return <ShopPageClient products={products} isLive={isLive} storeUrl={STORE_URL} kidsCount={kidsProducts.length} />;
}
