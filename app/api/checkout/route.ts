import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-02-25.clover" });

const PRODUCTS: Record<string, { name: string; price: number; printfulVariantId: number; img: string }[]> = {
  "youth-logo-hoodie": [
    { name: "Youth Basic Logo Hoodie / XS", price: 4000, printfulVariantId: 5217059887, img: "https://files.cdn.printful.com/files/a82/a82250a249cf968e5c826cda7bde8f5c_preview.png" },
    { name: "Youth Basic Logo Hoodie / S",  price: 4000, printfulVariantId: 5217059888, img: "https://files.cdn.printful.com/files/a82/a82250a249cf968e5c826cda7bde8f5c_preview.png" },
    { name: "Youth Basic Logo Hoodie / M",  price: 4000, printfulVariantId: 5217059889, img: "https://files.cdn.printful.com/files/a82/a82250a249cf968e5c826cda7bde8f5c_preview.png" },
    { name: "Youth Basic Logo Hoodie / L",  price: 4000, printfulVariantId: 5217059890, img: "https://files.cdn.printful.com/files/a82/a82250a249cf968e5c826cda7bde8f5c_preview.png" },
    { name: "Youth Basic Logo Hoodie / XL", price: 4000, printfulVariantId: 5217059891, img: "https://files.cdn.printful.com/files/a82/a82250a249cf968e5c826cda7bde8f5c_preview.png" },
  ],
  "acceptance-tee": [
    { name: "Acceptance Tee / Black / S",  price: 2500, printfulVariantId: 5217052195, img: "https://files.cdn.printful.com/files/9e1/9e133533eabc4181213fcea3e7540bfe_preview.png" },
    { name: "Acceptance Tee / Black / M",  price: 2500, printfulVariantId: 5217052196, img: "https://files.cdn.printful.com/files/9e1/9e133533eabc4181213fcea3e7540bfe_preview.png" },
    { name: "Acceptance Tee / Black / L",  price: 2500, printfulVariantId: 5217052197, img: "https://files.cdn.printful.com/files/9e1/9e133533eabc4181213fcea3e7540bfe_preview.png" },
    { name: "Acceptance Tee / Black / XL", price: 2500, printfulVariantId: 5217052198, img: "https://files.cdn.printful.com/files/9e1/9e133533eabc4181213fcea3e7540bfe_preview.png" },
    { name: "Acceptance Tee / White / S",  price: 2500, printfulVariantId: 5217052199, img: "https://files.cdn.printful.com/files/9e1/9e133533eabc4181213fcea3e7540bfe_preview.png" },
    { name: "Acceptance Tee / White / M",  price: 2500, printfulVariantId: 5217052210, img: "https://files.cdn.printful.com/files/9e1/9e133533eabc4181213fcea3e7540bfe_preview.png" },
    { name: "Acceptance Tee / White / L",  price: 2500, printfulVariantId: 5217052211, img: "https://files.cdn.printful.com/files/9e1/9e133533eabc4181213fcea3e7540bfe_preview.png" },
    { name: "Acceptance Tee / White / XL", price: 2500, printfulVariantId: 5217052212, img: "https://files.cdn.printful.com/files/9e1/9e133533eabc4181213fcea3e7540bfe_preview.png" },
  ],
};

export async function POST(req: NextRequest) {
  try {
    const { slug, variantId, variantLabel } = await req.json();
    const variants = PRODUCTS[slug];
    if (!variants) return NextResponse.json({ error: "Product not found" }, { status: 404 });
    const variant = variants.find(v => v.printfulVariantId === variantId);
    if (!variant) return NextResponse.json({ error: "Variant not found" }, { status: 404 });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price_data: { currency: "usd", product_data: { name: variant.name, images: [variant.img] }, unit_amount: variant.price }, quantity: 1 }],
      shipping_address_collection: { allowed_countries: ["US"] },
      mode: "payment",
      success_url: `${req.headers.get("origin")}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/products/${slug}`,
      metadata: { slug, variantId: String(variantId), variantLabel },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
