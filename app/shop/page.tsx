"use client";
import { useState } from "react";

const STORE_URL = "https://store.webearish.com";

const PRODUCTS = [
  { id:14, name:"Bear Cub Onesie",             category:"Kids", price:19.99, badge:"Children First", desc:"100% cotton. Newborn to 18M. Soft on sensitive skin.", link: STORE_URL },
  { id:15, name:"Youth Acceptance Tee",         category:"Kids", price:19.99, badge:"",  desc:"Kids XS-XL. Identity-first message. Extra soft jersey.", link: STORE_URL },
  { id:16, name:"Kids Bear Hoodie",             category:"Kids", price:32.99, badge:"",  desc:"Soft fleece. Kids S-XL. The movement starts young.", link: STORE_URL },
  { id:18, name:"Toddler Bear Tee",             category:"Kids", price:17.99, badge:"",  desc:"2T-5T. Extra soft. Bears belong everywhere.", link: STORE_URL },
  { id:19, name:"Kids WeBearish Cap",           category:"Kids", price:18.99, badge:"",  desc:"Adjustable fit. Ages 4 and up.", link: STORE_URL },
  { id:17, name:"Baby Bear Bib",                category:"Kids", price:12.99, badge:"",  desc:"Waterproof. Adjustable snaps. Perfect shower gift.", link: STORE_URL },
  { id:1,  name:"Bear Pride Tee",               category:"Apparel", price:24.99, badge:"Bestseller", desc:"Soft organic cotton. Wear the movement.", link: STORE_URL },
  { id:7,  name:"Acceptance Not Awareness Hoodie", category:"Apparel", price:44.99, badge:"", desc:"The distinction that matters most.", link: STORE_URL },
  { id:2,  name:"Acceptance Crew Hoodie",       category:"Apparel", price:44.99, badge:"", desc:"Heavyweight fleece. Built for belonging.", link: STORE_URL },
  { id:6,  name:"Neurodivergent & Proud Tee",   category:"Apparel", price:24.99, badge:"", desc:"Say it loud. Wear it proud.", link: STORE_URL },
  { id:3,  name:"We Are Enough Long Sleeve",    category:"Apparel", price:29.99, badge:"", desc:"A reminder that needs no explanation.", link: STORE_URL },
  { id:4,  name:"WeBearish Dad Hat",            category:"Apparel", price:22.99, badge:"", desc:"Unstructured low-profile. Classic fit.", link: STORE_URL },
  { id:9,  name:"We Are Enough Mug",            category:"Accessories", price:18.99, badge:"", desc:"11oz ceramic. Morning reminder.", link: STORE_URL },
  { id:10, name:"WeBearish Tote Bag",           category:"Accessories", price:16.99, badge:"", desc:"Canvas. Roomy. Mission-forward.", link: STORE_URL },
  { id:11, name:"Acceptance Sticker Pack",      category:"Accessories", price:8.99,  badge:"", desc:"5 die-cut vinyl stickers.", link: STORE_URL },
  { id:20, name:"Acceptance Poster 18x24",      category:"Home", price:19.99, badge:"", desc:"Matte print. Frame-ready.", link: STORE_URL },
  { id:22, name:"Bear Pride Throw Blanket",     category:"Home", price:44.99, badge:"", desc:"50x60 woven fleece. Ultra soft.", link: STORE_URL },
];

const CATEGORIES = ["All", "Kids", "Apparel", "Accessories", "Home"];

export default function ShopPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);

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
              <div style={{ color: "rgba(250,250,248,0.5)", fontSize: 13 }}>Our kids line is sensory-considerate -- soft fabrics, no scratchy tags, no loud prints. Built for the kids we are fighting for.</div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
          {filtered.map(p => (
            <div key={p.id} style={{ background: "rgba(184,232,135,0.04)", border: "1px solid rgba(184,232,135,0.1)", padding: "20px", display: "flex", flexDirection: "column" }}>
              {p.badge && (
                <div style={{ fontSize: 10, fontWeight: 800, color: "#0F1A0F", background: "#B8E887", padding: "3px 10px", alignSelf: "flex-start", marginBottom: 12, letterSpacing: "1px" }}>
                  {p.badge}
                </div>
              )}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#FAFAF8", marginBottom: 8, lineHeight: 1.3 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "rgba(250,250,248,0.4)", lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: "#B8E887" }}>${p.price}</span>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  style={{ background: "#B8E887", color: "#0F1A0F", fontWeight: 900, fontSize: 11, padding: "9px 18px", textDecoration: "none", letterSpacing: "1px" }}>
                  BUY NOW
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mission footer */}
        <div style={{ marginTop: 64, padding: "40px", background: "rgba(184,232,135,0.06)", border: "1px solid rgba(184,232,135,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: "#FAFAF8", marginBottom: 12 }}>The mission is the business.</div>
          <p style={{ color: "rgba(250,250,248,0.4)", fontSize: 14, maxWidth: 500, margin: "0 auto 20px", lineHeight: 1.7 }}>
            Every dollar from this shop goes back into autism acceptance. We are building the world greatest resource hub for autistic people and their families. The shop funds the work.
          </p>
          <a href="/contact" style={{ display: "inline-block", border: "1px solid rgba(184,232,135,0.3)", color: "#B8E887", fontWeight: 700, fontSize: 12, padding: "12px 28px", textDecoration: "none", letterSpacing: "1px" }}>
            GET INVOLVED
          </a>
        </div>
      </div>
    </div>
  );
}
