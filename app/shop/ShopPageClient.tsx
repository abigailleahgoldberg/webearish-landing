"use client";
import { useState } from "react";
import { ShopifyProduct, getProductCategory, productStoreUrl } from "../lib/shopify";

type ProductWithBadge = ShopifyProduct & { badge?: string };

const CATEGORIES = ["All", "Kids", "Apparel", "Accessories", "Home"];

interface Props {
  products: ProductWithBadge[];
  isLive: boolean;
  storeUrl: string;
  kidsCount?: number;
}

export default function ShopPageClient({ products, isLive, storeUrl, kidsCount = 0 }: Props) {
  const [cat, setCat] = useState("Kids");

  const filtered = cat === "All"
    ? products
    : products.filter(p => (p.productType || getProductCategory(p)) === cat);

  return (
    <div style={{ minHeight: "100vh", background: "var(--dark,#0F1A0F)", fontFamily: "system-ui,sans-serif" }}>
      {/* Mission banner */}
      <div style={{ background: "#B8E887", padding: "12px 5vw", textAlign: "center" }}>
        <p style={{ color: "#0F1A0F", fontWeight: 800, fontSize: 13, margin: 0, letterSpacing: "0.5px" }}>
          100% of profits reinvested into the autism acceptance movement. Every purchase is the mission.
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 5vw" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 11, letterSpacing: "3px", color: "#B8E887", fontWeight: 700, marginBottom: 16 }}>THE SHOP</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, color: "#FAFAF8", margin: "0 0 16px", letterSpacing: "-1px" }}>
            Wear the Movement
          </h1>
          <p style={{ color: "rgba(250,250,248,0.45)", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
            Identity-first. Bear-approved. Every item funds what we believe.
          </p>
          {isLive && (
            <div style={{ marginTop: 12, fontSize: 12, color: "rgba(184,232,135,0.6)", fontWeight: 700 }}>
              ✓ Live store — real products
            </div>
          )}
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)}
              style={{ padding: "8px 20px", border: "1px solid", borderColor: cat === c ? "#B8E887" : "rgba(184,232,135,0.2)", background: cat === c ? "#B8E887" : "transparent", color: cat === c ? "#0F1A0F" : "#B8E887", fontWeight: 700, fontSize: 12, letterSpacing: "1px", cursor: "pointer" }}>
              {c === "Kids" ? "KIDS FIRST" : c.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Kids callout */}
        {(cat === "All" || cat === "Kids") && (
          <div style={{ background: "rgba(184,232,135,0.08)", border: "1px solid rgba(184,232,135,0.25)", padding: "20px 24px", marginBottom: 32, display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 28 }}>🐻</span>
            <div>
              <div style={{ fontWeight: 800, color: "#B8E887", fontSize: 14, marginBottom: 4 }}>The Children Come First</div>
              <div style={{ color: "rgba(250,250,248,0.5)", fontSize: 13 }}>Our kids line is sensory-considerate — soft fabrics, no scratchy tags, no loud prints. Built for the kids we are fighting for.</div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
          {filtered.map(p => {
            const img = p.images?.[0];
            const price = p.minPrice
              ? (p.minPrice === p.maxPrice ? `$${p.minPrice}` : `$${p.minPrice} - $${p.maxPrice}`)
              : null;
            const href = isLive ? productStoreUrl(p.handle) : storeUrl;

            return (
              <div key={p.id} style={{ background: "rgba(184,232,135,0.04)", border: "1px solid rgba(184,232,135,0.1)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                {/* Product image */}
                {img ? (
                  <div style={{ width: "100%", aspectRatio: "1", overflow: "hidden" }}>
                    <img src={img.url} alt={img.altText || p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ) : (
                  <div style={{ width: "100%", aspectRatio: "1", background: "linear-gradient(135deg, rgba(184,232,135,0.06) 0%, rgba(15,26,15,0.4) 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    {/* Product type label */}
                    <div style={{ position: "absolute", top: 12, left: 12, fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", color: "rgba(184,232,135,0.5)", textTransform: "uppercase" }}>{p.productType}</div>
                    {/* Bear SVG */}
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "52%", opacity: 0.18 }}>
                      <circle cx="28" cy="28" r="14" fill="#B8E887"/>
                      <circle cx="72" cy="28" r="14" fill="#B8E887"/>
                      <circle cx="50" cy="52" r="30" fill="#B8E887"/>
                      <ellipse cx="50" cy="88" rx="22" ry="14" fill="#B8E887"/>
                      <circle cx="42" cy="48" r="4" fill="#0F1A0F"/>
                      <circle cx="58" cy="48" r="4" fill="#0F1A0F"/>
                      <ellipse cx="50" cy="57" rx="6" ry="4" fill="#0F1A0F"/>
                    </svg>
                    {/* Price watermark */}
                    <div style={{ position: "absolute", bottom: 12, right: 14, fontSize: 18, fontWeight: 900, color: "rgba(184,232,135,0.35)", letterSpacing: "-0.5px" }}>${p.minPrice}</div>
                  </div>
                )}

                <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
                  {p.badge && (
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#0F1A0F", background: "#B8E887", padding: "3px 10px", alignSelf: "flex-start", marginBottom: 10, letterSpacing: "1px" }}>
                      {p.badge}
                    </div>
                  )}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#FAFAF8", marginBottom: 8, lineHeight: 1.3 }}>{p.title}</div>
                    {p.description && (
                      <div style={{ fontSize: 12, color: "rgba(250,250,248,0.4)", lineHeight: 1.6, marginBottom: 16 }}>{p.description.slice(0, 100)}</div>
                    )}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                    {price && <span style={{ fontSize: 18, fontWeight: 900, color: "#B8E887" }}>{price}</span>}
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      style={{ background: "#B8E887", color: "#0F1A0F", fontWeight: 900, fontSize: 11, padding: "9px 18px", textDecoration: "none", letterSpacing: "1px", marginLeft: "auto" }}>
                      {isLive ? "BUY NOW" : "SHOP"}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission footer */}
        <div style={{ marginTop: 64, padding: "40px", background: "rgba(184,232,135,0.06)", border: "1px solid rgba(184,232,135,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: "#FAFAF8", marginBottom: 12 }}>The mission is the business.</div>
          <p style={{ color: "rgba(250,250,248,0.4)", fontSize: 14, maxWidth: 500, margin: "0 auto 20px", lineHeight: 1.7 }}>
            Every dollar from this shop goes back into autism acceptance. We are building the world's greatest resource hub for autistic people and their families. The shop funds the work.
          </p>
          <a href="/contact" style={{ display: "inline-block", border: "1px solid rgba(184,232,135,0.3)", color: "#B8E887", fontWeight: 700, fontSize: 12, padding: "12px 28px", textDecoration: "none", letterSpacing: "1px" }}>
            GET INVOLVED
          </a>
        </div>
      </div>
    </div>
  );
}
