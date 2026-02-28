"use client";
import { useState } from "react";
import Link from "next/link";

const PRODUCTS = [
  { id:1,  name:"Bear Pride Tee",              category:"Apparel",     price:24.99, desc:"Soft organic cotton. Wear the movement." },
  { id:2,  name:"Acceptance Crew Hoodie",       category:"Apparel",     price:44.99, desc:"Heavyweight fleece. Built for belonging." },
  { id:3,  name:"We Are Enough Long Sleeve",    category:"Apparel",     price:29.99, desc:"A reminder that needs no explanation." },
  { id:4,  name:"WeBearish Dad Hat",            category:"Apparel",     price:22.99, desc:"Unstructured low-profile. Classic fit." },
  { id:5,  name:"Bear Outline Tee",             category:"Apparel",     price:24.99, desc:"Minimalist. The message does the work." },
  { id:6,  name:"Neurodivergent & Proud Tee",   category:"Apparel",     price:24.99, desc:"Say it loud. Wear it proud." },
  { id:7,  name:"Acceptance Not Awareness Hoodie", category:"Apparel",  price:44.99, desc:"The distinction that matters most." },
  { id:8,  name:"Bear Pack Crewneck",           category:"Apparel",     price:39.99, desc:"For the whole pack. Family cut." },
  { id:9,  name:"We Are Enough Mug",            category:"Accessories", price:18.99, desc:"11oz ceramic. Morning reminder." },
  { id:10, name:"WeBearish Tote Bag",           category:"Accessories", price:16.99, desc:"Canvas. Roomy. Mission-forward." },
  { id:11, name:"Acceptance Sticker Pack",      category:"Accessories", price:8.99,  desc:"5 die-cut vinyl stickers." },
  { id:12, name:"Bear Pride Water Bottle",      category:"Accessories", price:27.99, desc:"32oz insulated stainless. BPA-free." },
  { id:13, name:"WeBearish Enamel Pin",         category:"Accessories", price:11.99, desc:"Hard enamel. Lapel-ready." },
  { id:14, name:"Bear Cub Onesie",              category:"Kids",        price:19.99, desc:"100% cotton. Newborn to 18M." },
  { id:15, name:"Youth Acceptance Tee",         category:"Kids",        price:19.99, desc:"Kids XS-XL. Same message, smaller human." },
  { id:16, name:"Kids Bear Hoodie",             category:"Kids",        price:32.99, desc:"Soft fleece. Kids S-XL." },
  { id:17, name:"Baby Bear Bib",                category:"Kids",        price:12.99, desc:"Waterproof. Adjustable snaps." },
  { id:18, name:"Toddler Bear Tee",             category:"Kids",        price:17.99, desc:"2T-5T. Extra soft jersey." },
  { id:19, name:"Kids WeBearish Cap",           category:"Kids",        price:18.99, desc:"Adjustable fit. Ages 4 and up." },
  { id:20, name:"Acceptance Poster 18x24",      category:"Home",        price:19.99, desc:"Matte print. Frame-ready." },
  { id:21, name:"WeBearish Throw Pillow",       category:"Home",        price:32.99, desc:"18x18 insert included." },
  { id:22, name:"Bear Pride Throw Blanket",     category:"Home",        price:44.99, desc:"50x60 woven fleece. Ultra soft." },
  { id:23, name:"We Are Enough Candle",         category:"Home",        price:22.99, desc:"Soy wax. 45hr burn. Calming cedar." },
  { id:24, name:"WeBearish Wall Art Set",       category:"Home",        price:34.99, desc:"3-piece print set. 5x7 each." },
];

const CATS = ["All","Apparel","Accessories","Kids","Home"];
const HUE: Record<string,string> = {
  Apparel:"linear-gradient(135deg,#B8E887 0%,#4B7C2F 100%)",
  Accessories:"linear-gradient(135deg,#F5C5C7 0%,#C4797C 100%)",
  Kids:"linear-gradient(135deg,#A8D4C8 0%,#4A7C6F 100%)",
  Home:"linear-gradient(135deg,#FEF9F2 0%,#F0E6D6 100%)",
};

export default function ShopPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  return (
    <>
      <style>{`
        .sm-bar{background:#2E5C17;padding:12px 24px;text-align:center;font-size:13px;font-weight:800;color:#FEF9F2;letter-spacing:.5px;}
        .sm-hero{background:#141410;padding:80px 24px 56px;text-align:center;}
        .sm-hero h1{font-size:clamp(36px,7vw,72px);font-weight:900;color:#FEF9F2;letter-spacing:-2px;line-height:1.05;margin-bottom:14px;}
        .sm-hero p{font-size:17px;color:rgba(254,249,242,.6);font-weight:600;max-width:520px;margin:0 auto;}
        .sm-filters{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;padding:36px 24px 4px;}
        .sm-fb{padding:10px 24px;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;border:2px solid #4B7C2F;background:transparent;color:#4B7C2F;cursor:pointer;transition:all .2s;font-family:'Nunito',sans-serif;}
        .sm-fb.on,.sm-fb:hover{background:#4B7C2F;color:#FEF9F2;}
        .sm-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;padding:28px 24px 64px;max-width:1200px;margin:0 auto;}
        .sm-card{background:#fff;border:1.5px solid #F0E6D6;overflow:hidden;display:flex;flex-direction:column;transition:transform .2s,box-shadow .2s;}
        .sm-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(75,124,47,.12);}
        .sm-img{width:100%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;position:relative;}
        .sm-donated{position:absolute;top:10px;left:10px;background:#2E5C17;color:#FEF9F2;font-size:9px;font-weight:800;letter-spacing:1px;text-transform:uppercase;padding:4px 8px;}
        .sm-body{padding:14px;flex:1;display:flex;flex-direction:column;gap:6px;}
        .sm-cat{font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#4B7C2F;}
        .sm-name{font-size:14px;font-weight:900;color:#141410;line-height:1.3;}
        .sm-desc{font-size:12px;color:#6B5E4E;font-weight:600;line-height:1.5;flex:1;}
        .sm-price{font-size:19px;font-weight:900;color:#4B7C2F;}
        .sm-btn{width:100%;padding:11px;background:#141410;color:#FEF9F2;font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;border:none;cursor:not-allowed;font-family:'Nunito',sans-serif;opacity:.7;}
        @media(max-width:960px){.sm-grid{grid-template-columns:repeat(3,1fr);}}
        @media(max-width:640px){.sm-grid{grid-template-columns:repeat(2,1fr);gap:14px;padding:20px 16px 48px;}.sm-hero{padding:56px 20px 40px;}.sm-filters{padding:24px 16px 4px;gap:8px;}}
        @media(max-width:380px){.sm-grid{grid-template-columns:1fr;}}
      `}</style>
      <div className="sm-bar">Built for autistic children and their families — every purchase grows the movement</div>
      <section className="sm-hero">
        <h1>Shop The <span style={{color:"#B8E887"}}>Movement</span></h1>
        <p>Every item puts money directly into autism acceptance initiatives. No exceptions.</p>
      </section>
      <div className="sm-filters">
        {CATS.map(c => <button key={c} className={`sm-fb${active===c?" on":""}`} onClick={()=>setActive(c)}>{c}</button>)}
      </div>
      <div className="sm-grid">
        {filtered.map(p => (
          <div key={p.id} className="sm-card">
            <div className="sm-img" style={{background:HUE[p.category]}}>
              <div className="sm-donated">100% donated</div>
              <div style={{width:56,height:56,background:"rgba(255,255,255,0.35)",borderRadius:"50%"}} />
            </div>
            <div className="sm-body">
              <div className="sm-cat">{p.category}</div>
              <div className="sm-name">{p.name}</div>
              <div className="sm-desc">{p.desc}</div>
              <div className="sm-price">${p.price.toFixed(2)}</div>
              <button className="sm-btn" title="Store launching soon">Coming Soon</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{textAlign:"center",padding:"0 24px 64px"}}>
        <p style={{fontSize:14,fontWeight:700,color:"#6B5E4E",marginBottom:14}}>Store integration launching soon. Want early access?</p>
        <Link href="/contact" style={{display:"inline-block",padding:"13px 32px",background:"#4B7C2F",color:"#FEF9F2",fontWeight:800,textDecoration:"none",letterSpacing:"1px",fontSize:12,textTransform:"uppercase"}}>Notify Me</Link>
      </div>
    </>
  );
}
