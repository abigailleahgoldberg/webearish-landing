"use client";
import { useState, use } from "react";
import Link from "next/link";

const GREEN = "#4B7C2F";
const DARK = "#141410";
const CREAM = "#FEF9F2";

const PRODUCTS: Record<string, {
  name: string; price: number; description: string; img: string;
  variants: { label: string; id: number; color?: string; size?: string }[];
  hasColor: boolean;
}> = {
  "youth-logo-hoodie": {
    name: "Youth Basic Logo Hoodie", price: 40,
    description: "Soft fleece hoodie with the WeBearish bear logo. Built for belonging. Youth sizes XS through XL. Every purchase supports autism acceptance programs.",
    img: "https://files.cdn.printful.com/files/a82/a82250a249cf968e5c826cda7bde8f5c_preview.png",
    hasColor: false,
    variants: [
      { label: "XS", id: 5217059887 }, { label: "S", id: 5217059888 },
      { label: "M", id: 5217059889 }, { label: "L", id: 5217059890 },
      { label: "XL", id: 5217059891 },
    ],
  },
  "acceptance-tee": {
    name: "WeBearish Acceptance Tee", price: 25,
    description: "100% cotton tee with the WeBearish acceptance logo. Available in Black and White. Sizes S through XL. Wear the message.",
    img: "https://files.cdn.printful.com/files/9e1/9e133533eabc4181213fcea3e7540bfe_preview.png",
    hasColor: true,
    variants: [
      { label: "Black / S",  id: 5217052195, color: "Black", size: "S" },
      { label: "Black / M",  id: 5217052196, color: "Black", size: "M" },
      { label: "Black / L",  id: 5217052197, color: "Black", size: "L" },
      { label: "Black / XL", id: 5217052198, color: "Black", size: "XL" },
      { label: "White / S",  id: 5217052199, color: "White", size: "S" },
      { label: "White / M",  id: 5217052210, color: "White", size: "M" },
      { label: "White / L",  id: 5217052211, color: "White", size: "L" },
      { label: "White / XL", id: 5217052212, color: "White", size: "XL" },
    ],
  },
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS[slug];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!product) return (
    <div style={{ background: DARK, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", color: CREAM }}>
        <h1 style={{ color: GREEN, fontSize: 32, marginBottom: 16 }}>Product not found</h1>
        <Link href="/shop" style={{ color: GREEN }}>Back to shop</Link>
      </div>
    </div>
  );

  const colors = product.hasColor ? [...new Set(product.variants.map(v => v.color!))] : [];
  const sizes = product.hasColor
    ? product.variants.filter(v => v.color === selectedColor).map(v => v.size!)
    : product.variants.map(v => v.label);

  const getVariantId = () => {
    if (!product.hasColor) {
      return product.variants.find(v => v.label === selectedSize)?.id || null;
    }
    return product.variants.find(v => v.color === selectedColor && v.size === selectedSize)?.id || null;
  };

  const variantId = getVariantId();
  const variantLabel = product.hasColor ? `${selectedColor} / ${selectedSize}` : selectedSize || "";
  const canBuy = product.hasColor ? !!(selectedColor && selectedSize) : !!selectedSize;

  const handleBuy = async () => {
    if (!canBuy || !variantId) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, variantId, variantLabel }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert("Checkout error. Please try again.");
    } catch { alert("Checkout error. Please try again."); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ background: CREAM, minHeight: "100vh", color: DARK, fontFamily: "'Nunito', sans-serif" }}>
      <nav style={{ background: "#fff", padding: "16px max(24px,5vw)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #F0E6D6" }}>
        <Link href="/" style={{ color: GREEN, fontWeight: 900, fontSize: 20, textDecoration: "none" }}>WeBearish</Link>
        <Link href="/shop" style={{ color: GREEN, fontSize: 13, fontWeight: 800, textDecoration: "none" }}>BACK TO SHOP</Link>
      </nav>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px max(24px,5vw)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        <div style={{ background: "#fff", borderRadius: 12, padding: 40, border: "2px solid #F0E6D6", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={product.img} alt={product.name} style={{ width: "100%", maxWidth: 360, objectFit: "contain" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <p style={{ color: GREEN, fontSize: 12, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 8px" }}>WeBearish Collection</p>
            <h1 style={{ fontSize: 32, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.1 }}>{product.name}</h1>
            <p style={{ fontSize: 28, fontWeight: 900, color: GREEN, margin: 0 }}>${product.price}</p>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6B5E4E", margin: 0 }}>{product.description}</p>

          {product.hasColor && (
            <div>
              <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 10, color: "#6B5E4E" }}>Color</p>
              <div style={{ display: "flex", gap: 10 }}>
                {colors.map(c => (
                  <button key={c} onClick={() => { setSelectedColor(c); setSelectedSize(null); }} style={{
                    padding: "10px 24px", fontWeight: 800, fontSize: 13,
                    border: selectedColor === c ? `2px solid ${GREEN}` : "2px solid #F0E6D6",
                    background: selectedColor === c ? "#E8F5E0" : "#fff",
                    color: selectedColor === c ? GREEN : DARK,
                    borderRadius: 6, cursor: "pointer", fontFamily: "'Nunito', sans-serif",
                  }}>{c}</button>
                ))}
              </div>
            </div>
          )}

          <div>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 10, color: "#6B5E4E" }}>Size</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {sizes.map(s => (
                <button key={s} onClick={() => setSelectedSize(s)} disabled={product.hasColor && !selectedColor} style={{
                  padding: "10px 18px", fontWeight: 800, fontSize: 13,
                  border: selectedSize === s ? `2px solid ${GREEN}` : "2px solid #F0E6D6",
                  background: selectedSize === s ? "#E8F5E0" : "#fff",
                  color: selectedSize === s ? GREEN : DARK,
                  borderRadius: 6, cursor: product.hasColor && !selectedColor ? "not-allowed" : "pointer",
                  opacity: product.hasColor && !selectedColor ? 0.4 : 1,
                  fontFamily: "'Nunito', sans-serif",
                }}>{s}</button>
              ))}
            </div>
          </div>

          <button onClick={handleBuy} disabled={!canBuy || loading} style={{
            background: canBuy && !loading ? GREEN : "#B8D4A8",
            color: "#fff", border: "none", borderRadius: 8,
            padding: "18px 36px", fontSize: 16, fontWeight: 900,
            letterSpacing: "1px", textTransform: "uppercase",
            cursor: canBuy && !loading ? "pointer" : "not-allowed",
            fontFamily: "'Nunito', sans-serif",
          }}>
            {loading ? "Loading..." : canBuy ? `Buy Now — $${product.price}` : "Select Options First"}
          </button>

          <div style={{ background: "#E8F5E0", borderRadius: 8, padding: "14px 18px", fontSize: 13, color: GREEN, fontWeight: 700 }}>
            Every purchase supports autism acceptance programs and WeBearish community initiatives.
          </div>

          <p style={{ fontSize: 12, color: "#9B8E82", margin: 0 }}>Secure checkout via Stripe. Ships in 3-7 business days.</p>
        </div>
      </div>
      <style>{`@media(max-width:640px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
    </div>
  );
}
