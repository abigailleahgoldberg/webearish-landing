"use client";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./blog/data";

const FEATURED_PRODUCTS = [
  { name:"Bear Pride Tee",           price:"$24.99", cat:"Apparel",     bg:"#2D5A2D" },
  { name:"Acceptance Crew Hoodie",    price:"$44.99", cat:"Apparel",     bg:"#1A3A1A" },
  { name:"We Are Enough Mug",         price:"$18.99", cat:"Accessories", bg:"#3A1A2D" },
  { name:"Bear Cub Onesie",           price:"$19.99", cat:"Kids",        bg:"#1A2D3A" },
];

const BELIEFS = [
  { label:"Acceptance", headline:"Not just awareness.", body:"Knowing autism exists is not enough. Belonging, inclusion, and genuine understanding — that is the standard we hold." },
  { label:"Identity", headline:"Every child is whole.", body:"Autistic children are not broken. They are not missing something. They are exactly who they are meant to be." },
  { label:"Action", headline:"We reinvest everything we make.", body:"Every dollar we make goes back into building this — the store, the events, the community. We are not a charity. We are a brand with a mission." },
];

const STATS = [
  { num:"1 in 36", sub:"children in the US are autistic" },
  { num:"178%",    sub:"increase in diagnoses since 2000" },
  { num:"100%",    sub:"reinvested into the movement" },
];

const RECENT = blogPosts.slice(0, 3);

const TICKER_TEXT = "ACCEPTANCE NOT AWARENESS  •  FOR THE CHILDREN  •  MISSION REINVESTED  •  USA MOVEMENT  •  EVERY CHILD BELONGS  •  1 IN 36  •  ";

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section style={{ background:"var(--forest)", position:"relative", overflow:"visible", zIndex:1 }}>
        {/* Flickering bear mascots in background */}
        <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
          {[
            { top:"8%",   left:"6%",   size:80,  delay:0,    dur:3.2 },
            { top:"40%",  left:"2%",   size:64,  delay:1.1,  dur:4.5 },
            { top:"65%",  left:"8%",   size:96,  delay:2.3,  dur:3.8 },
            { top:"75%",  left:"18%",  size:72,  delay:0.7,  dur:5.1 },
            { top:"15%",  left:"48%",  size:88,  delay:1.8,  dur:4.0 },
            { top:"5%",   left:"34%",  size:60,  delay:3.0,  dur:3.5 },
            { top:"80%",  left:"38%",  size:76,  delay:0.4,  dur:4.8 },
            { top:"50%",  left:"44%",  size:100, delay:2.0,  dur:3.3 },
          ].map((b, i) => (
            <div key={i} style={{
              position:"absolute", top:b.top, left:b.left,
              width:b.size, height:b.size, opacity:0,
              animation:`wb-flicker ${b.dur}s ${b.delay}s ease-in-out infinite`,
            }}>
              <img src="/bear-logo.png" alt="" style={{ width:"100%", height:"100%", objectFit:"contain", filter:"brightness(0) invert(1) opacity(0.18)" }} />
            </div>
          ))}
        </div>
        {/* Ticker — sits between nav and hero content */}
        <div className="wb-ticker">
          <div className="wb-ticker-inner">
            {[0,1].map(i => (
              <span key={i} className="wb-ticker-text">{TICKER_TEXT}</span>
            ))}
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"55% 45%", minHeight:680, position:"relative", zIndex:1 }} className="wb-hero-grid">

          {/* LEFT — copy */}
          <div style={{ padding:"60px 40px 60px max(48px,6vw)", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            {/* Top: label + H1 */}
            <div>
              <div className="wb-fadeup-1" style={{ marginBottom:24 }}>
                <span style={{ background:"var(--lime)", color:"var(--forest)", fontWeight:900, fontSize:11, letterSpacing:"2.5px", textTransform:"uppercase", padding:"6px 16px", display:"inline-block" }}>Autism Acceptance Movement</span>
              </div>
              <h1 className="wb-fadeup-2" style={{ fontSize:"clamp(38px,6.2vw,96px)", color:"#fff", fontWeight:900, lineHeight:0.94, letterSpacing:"-3px", marginBottom:0 }}>
                We are<br />bearish on<br />the idea<br /><span style={{color:"var(--lime)"}}>any child<br />is less than.</span>
              </h1>
            </div>

            {/* Middle: divider + body copy */}
            <div>
              <div style={{ width:56, height:4, background:"var(--coral)", margin:"0 0 16px" }} />
              <p className="wb-fadeup-3" style={{ fontSize:"clamp(16px,1.6vw,20px)", color:"rgba(255,255,255,0.65)", fontWeight:700, maxWidth:420, marginBottom:10, lineHeight:1.65 }}>
                A movement rooted in love, built on acceptance.
              </p>
              <p className="wb-fadeup-3" style={{ fontSize:"clamp(15px,1.4vw,17px)", color:"rgba(255,255,255,0.4)", fontWeight:700, maxWidth:400, marginBottom:0, lineHeight:1.65 }}>
                These kids deserve more than a month. They deserve belonging — and a world that is built for them too.
              </p>
            </div>

            {/* Bottom: CTAs + social */}
            <div>
              <div className="wb-fadeup-4" style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:28 }}>
                <Link href="/contact" style={{ background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:15, padding:"16px 36px", textDecoration:"none", letterSpacing:"0.5px", display:"inline-block", transition:"background 0.2s" }}
                  onMouseEnter={e=>(e.currentTarget.style.background="var(--coral-dark)")} onMouseLeave={e=>(e.currentTarget.style.background="var(--coral)")}>Join the Movement</Link>
                <Link href="/shop" style={{ background:"transparent", color:"rgba(255,255,255,0.8)", fontWeight:900, fontSize:15, padding:"14px 32px", textDecoration:"none", letterSpacing:"0.5px", border:"2px solid rgba(255,255,255,0.25)", display:"inline-block", transition:"all 0.2s" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.7)";e.currentTarget.style.color="#fff"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.25)";e.currentTarget.style.color="rgba(255,255,255,0.8)"}}>Shop the Cause</Link>
              </div>
              <div className="wb-fadeup-5" style={{ display:"flex", gap:24, alignItems:"center", flexWrap:"wrap" }}>
                <span style={{ fontSize:11, fontWeight:800, color:"rgba(255,255,255,0.2)", letterSpacing:"2px", textTransform:"uppercase" }}>Follow</span>
                {[["https://x.com/webearish","@webearish on X"],["https://www.facebook.com/webearish","Facebook"]].map(([h,l])=>(
                  <a key={h} href={h} target="_blank" rel="noopener noreferrer" style={{ color:"rgba(184,232,135,0.5)", fontWeight:800, fontSize:13, textDecoration:"none", borderBottom:"1px solid rgba(184,232,135,0.2)", paddingBottom:2, transition:"color 0.2s" }}
                    onMouseEnter={e=>(e.currentTarget.style.color="var(--lime)")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(184,232,135,0.5)")}>{l}</a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — framed bear photo */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:"40px 48px 40px 20px" }}>
            <div style={{
              width:"100%",
              border:"4px solid var(--lime)",
              boxShadow:"0 0 48px rgba(184,232,135,0.18), 0 0 16px rgba(184,232,135,0.1)",
              overflow:"hidden",
              position:"relative",
              aspectRatio:"3/4",
            }}>
              {/* Bear photo */}
              <div style={{
                position:"absolute", inset:0,
                backgroundImage:"url('/bears/bear-standing.jpg')",
                backgroundSize:"cover",
                backgroundPosition:"center 20%",
              }} />
              {/* Light overlay */}
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,rgba(26,58,26,0.15) 0%,transparent 50%,rgba(26,58,26,0.25) 100%)" }} />
              {/* Mascot badge bottom-right */}
              <div className="wb-float" style={{ position:"absolute", bottom:16, right:16, zIndex:5 }}>
                <Image src="/bear-logo.png" alt="WeBearish" width={72} height={72} style={{ filter:"drop-shadow(0 4px 16px rgba(0,0,0,0.6))", display:"block" }} />
              </div>
              {/* Corner label */}
              <div style={{ position:"absolute", top:14, left:14, background:"rgba(0,0,0,0.6)", padding:"5px 12px", border:"1px solid rgba(184,232,135,0.35)" }}>
                <span style={{ fontSize:10, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"var(--lime)" }}>WeBearish</span>
              </div>
            </div>
          </div>
        </div>

      </section>



      {/* ── WHAT WE BELIEVE ───────────────────────────── */}
      <section style={{ background:"var(--cream)", padding:"72px 32px" }}>
        <div className="wb-container">
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <span className="wb-label wb-label-dark">What We Stand For</span>
            <h2 style={{ fontSize:"clamp(36px,5.5vw,72px)", letterSpacing:"-2.5px" }}>This is not a campaign.<br /><span style={{color:"var(--lime-dark)"}}>This is a movement.</span></h2>
          </div>
          <div style={{ display:"grid", gap:24 }} className="wb-beliefs-grid">
            {BELIEFS.map((b,i) => (
              <div key={i} style={{ background:"#fff", padding:"44px 36px", borderTop:`4px solid ${["var(--lime-dark)","var(--coral)","var(--yellow-dark)"][i]}`, boxShadow:"0 2px 0 rgba(0,0,0,0.04)", transition:"transform 0.2s, box-shadow 0.2s" }} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(0,0,0,0.08)"}} onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 2px 0 rgba(0,0,0,0.04)"}}>
                <div style={{ fontWeight:900, fontSize:11, letterSpacing:3, textTransform:"uppercase", color:["var(--lime-dark)","var(--coral)","var(--yellow-dark)"][i], marginBottom:16 }}>{b.label}</div>
                <h3 style={{ fontSize:"clamp(20px,2.5vw,28px)", marginBottom:16, lineHeight:1.15, letterSpacing:"-0.5px" }}>{b.headline}</h3>
                <p style={{ fontSize:15, color:"var(--muted)", fontWeight:700, lineHeight:1.7 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── THE ROAD TO ACCEPTANCE — Timeline ──────────── */}
      <section style={{ background:"var(--yellow)", padding:"64px 0 56px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px 0", marginBottom:28 }}>
          <div style={{ display:"flex", alignItems:"center", gap:16 }}>
            <span style={{ fontSize:11, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--dark)", opacity:0.5 }}>The Road To Acceptance</span>
            <div style={{ flex:1, height:1, background:"rgba(15,26,15,0.15)" }} />
          </div>
        </div>
        <div style={{ overflowX:"auto", paddingBottom:24, height:300 }}>
          <div style={{ display:"flex", gap:0, minWidth:"max-content", padding:"0 32px", position:"relative" }}>
            <div style={{ position:"absolute", top:28, left:32, right:32, height:2, background:"rgba(15,26,15,0.15)" }} />
            {[
              { year:"1943", title:"Kanner Describes Autism",    body:"Leo Kanner first describes autism as 'early infantile autism' — framed as a disorder, not a difference." },
              { year:"1944", title:"Asperger's Work",            body:"Hans Asperger documents 'autistic psychopathy' in Vienna — his work suppressed for decades." },
              { year:"1980", title:"DSM-III Recognition",        body:"Autism added to DSM-III as a distinct diagnosis, separating it from childhood schizophrenia." },
              { year:"1990", title:"ADA Signed",                 body:"Americans with Disabilities Act signed — a landmark for disability rights, but autism still widely misunderstood." },
              { year:"1994", title:"Spectrum Widened",           body:"Asperger syndrome enters DSM-IV, acknowledging a broader spectrum of autistic experience." },
              { year:"2006", title:"ASAN Founded",               body:"Autistic Self Advocacy Network founded by autistic people, for autistic people. Nothing about us without us." },
              { year:"2007", title:"Awareness Day",              body:"UN designates April 2 as World Autism Awareness Day. The movement says: awareness is not enough." },
              { year:"2013", title:"DSM-5 Unifies",              body:"DSM-5 consolidates autism diagnoses under one umbrella: Autism Spectrum Disorder." },
              { year:"2023", title:"1 in 36",                    body:"CDC reports 1 in 36 US children are autistic — up from 1 in 150 in 2000. The world must adapt." },
              { year:"Now",  title:"WeBearish",                  body:"A movement rises. Not for awareness. For full acceptance, belonging, and a world built for every child." },
            ].map((m, i) => {
              const isLast = i === 9;
              return (
                <div key={m.year} style={{ width:210, flexShrink:0, padding:"0 12px" }}>
                  <div style={{ position:"relative", zIndex:1, marginBottom:20, display:"flex", justifyContent:"center" }}>
                    <div style={{ width:14, height:14, borderRadius:"50%", background: isLast ? "var(--coral)" : "var(--yellow)", border:`2.5px solid ${isLast ? "var(--coral-dark)" : "rgba(15,26,15,0.3)"}`, boxShadow: isLast ? "0 0 16px rgba(255,123,92,0.6)" : "none" }} />
                  </div>
                  <div style={{ background: isLast ? "var(--coral)" : "rgba(15,26,15,0.07)", border:`1px solid ${isLast ? "transparent" : "rgba(15,26,15,0.1)"}`, padding:"18px 16px" }}>
                    <div style={{ fontSize:22, fontWeight:900, color: isLast ? "#fff" : "var(--dark)", letterSpacing:"-1px", marginBottom:4, lineHeight:1 }}>{m.year}</div>
                    <div style={{ fontSize:12, fontWeight:900, color: isLast ? "rgba(255,255,255,0.9)" : "var(--dark)", marginBottom:8, lineHeight:1.3 }}>{m.title}</div>
                    <p style={{ fontSize:11, fontWeight:700, color: isLast ? "rgba(255,255,255,0.75)" : "rgba(15,26,15,0.55)", lineHeight:1.6 }}>{m.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AWARENESS vs ACCEPTANCE ───────────────────── */}
      <section style={{ background:"var(--dark)", padding:"0" }}>
        <div style={{ textAlign:"center", padding:"72px 32px 48px" }}>
          <span className="wb-label wb-label-lime">The Distinction That Matters</span>
          <h2 style={{ fontSize:"clamp(32px,5vw,68px)", color:"#fff", letterSpacing:"-2.5px" }}>There is a difference.</h2>
        </div>
        <div style={{ display:"grid" }} className="wb-aa-grid">
          {/* Awareness — muted, subdued */}
          <div className="wb-awareness-card" style={{ background:"#1E1E1E", padding:"64px 48px" }}>
            <div style={{ fontWeight:900, fontSize:13, letterSpacing:4, textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:24 }}>Awareness</div>
            <h3 style={{ fontSize:"clamp(36px,4vw,64px)", color:"rgba(255,255,255,0.25)", letterSpacing:"-2px", marginBottom:32, lineHeight:1 }}>Knowing it exists.</h3>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:14 }}>
              {["Puzzle pieces and blue lights","One month a year","Pity and charity framing","The world asking autistic people to mask","Campaigns that speak about, not to"].map(t => (
                <li key={t} style={{ fontSize:15, color:"rgba(255,255,255,0.3)", fontWeight:700, display:"flex", alignItems:"flex-start", gap:10 }}>
                  <span style={{ color:"rgba(255,255,255,0.15)", marginTop:2 }}>—</span>{t}
                </li>
              ))}
            </ul>
          </div>

          {/* Acceptance — dominant, glowing */}
          <div className="wb-acceptance-card" style={{ padding:"64px 48px" }}>
            <div style={{ fontWeight:900, fontSize:13, letterSpacing:4, textTransform:"uppercase", color:"var(--lime)", marginBottom:24 }}>Acceptance</div>
            <h3 style={{ fontSize:"clamp(36px,4vw,64px)", color:"var(--lime)", letterSpacing:"-2px", marginBottom:32, lineHeight:1 }}>Full belonging.</h3>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:14 }}>
              {["Identity honored year-round","Autistic voices leading the conversation","Environments built for everyone","Understanding differences as strengths","Every child seen, included, and celebrated"].map(t => (
                <li key={t} style={{ fontSize:15, color:"rgba(255,255,255,0.85)", fontWeight:700, display:"flex", alignItems:"flex-start", gap:10 }}>
                  <span style={{ color:"var(--lime)" }}>✓</span>{t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop:48, padding:"28px 32px", background:"rgba(184,232,135,0.08)", borderLeft:"4px solid var(--lime)" }}>
              <p style={{ fontSize:"clamp(18px,2.2vw,24px)", color:"#fff", fontWeight:800, lineHeight:1.5, letterSpacing:"-0.5px" }}>
                "Acceptance means belonging. Not despite who you are. Because of who you are."
              </p>
            </div>
          </div>
        </div>
        {/* Bottom spacer — mirrors top padding for symmetry */}
        <div style={{ height:48, borderTop:"1px solid rgba(255,255,255,0.06)", background:"var(--dark)" }} />

      </section>

      {/* ── THE WORLD THEY DESERVE — Coral full section ─ */}
      <section style={{ background:"var(--coral)", padding:"80px 32px" }}>
        <div className="wb-container" style={{ maxWidth:1100 }}>

          {/* Header */}
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <span style={{ fontSize:11, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(255,255,255,0.6)", display:"block", marginBottom:16 }}>The Reality</span>
            <h2 style={{ fontSize:"clamp(32px,5.5vw,76px)", color:"#fff", letterSpacing:"-2.5px", lineHeight:1.0, marginBottom:24, whiteSpace:"nowrap" }}>
              1 in 36 children are autistic.
            </h2>
            <div style={{ width:64, height:4, background:"rgba(255,255,255,0.4)", margin:"0 auto 28px" }} />
            <p style={{ fontSize:"clamp(18px,2.5vw,24px)", color:"rgba(255,255,255,0.9)", fontWeight:900, maxWidth:680, margin:"0 auto", lineHeight:1.4 }}>
              They do not need fixing.<br />They need a world built for them too.
            </p>
            <p style={{ fontSize:11, color:"rgba(255,255,255,0.45)", fontWeight:700, marginTop:16, letterSpacing:"0.5px" }}>
              Source: CDC MMWR Surveillance Summary, March 2023 — Autism and Developmental Disabilities Monitoring Network, 11 Sites, United States (2020 data). <a href="https://www.cdc.gov/mmwr/volumes/72/ss/ss7202a1.htm" target="_blank" rel="noopener noreferrer" style={{ color:"rgba(255,255,255,0.6)", textDecoration:"underline" }}>cdc.gov</a>
            </p>
          </div>

          {/* 2-col: copy left, video right */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"stretch" }} className="wb-coral-grid">

            {/* Left — supporting copy */}
            <div>
              <p style={{ fontSize:17, color:"rgba(255,255,255,0.85)", fontWeight:700, lineHeight:1.8, marginBottom:28 }}>
                Autism is not a tragedy. Stigma is. Exclusion is. A world designed as if autistic people don't exist — that's the problem we're solving.
              </p>
              <p style={{ fontSize:17, color:"rgba(255,255,255,0.85)", fontWeight:700, lineHeight:1.8, marginBottom:40 }}>
                WeBearish exists because every autistic child deserves to feel like they belong — not despite who they are, but because of it. Everything we build, we build for them — and we pour everything we make back into building more.
              </p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <Link href="/contact" style={{ display:"inline-block", background:"#fff", color:"var(--coral)", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 28px", textDecoration:"none" }}>Join The Movement</Link>
                <Link href="/shop" style={{ display:"inline-block", background:"transparent", color:"#fff", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 28px", border:"2px solid rgba(255,255,255,0.5)", textDecoration:"none" }}>Shop The Cause</Link>
              </div>
            </div>

            {/* Right — YouTube video — full column fill */}
            <div style={{ display:"flex", flexDirection:"column", height:"100%", minHeight:420 }}>
              <div style={{ flex:1, position:"relative", background:"rgba(0,0,0,0.3)", border:"3px solid rgba(255,255,255,0.25)", overflow:"hidden", minHeight:360 }}>
                {/* Replace src with actual YouTube embed URL when ready */}
                <iframe
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", display:"block" }}
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="WeBearish — The Commercial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Placeholder overlay — remove once real video is ready */}
                <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.52)", pointerEvents:"none" }}>
                  <div style={{ width:88, height:88, borderRadius:"50%", background:"rgba(255,255,255,0.12)", border:"2.5px solid rgba(255,255,255,0.5)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20 }}>
                    <div style={{ width:0, height:0, borderTop:"18px solid transparent", borderBottom:"18px solid transparent", borderLeft:"28px solid #fff", marginLeft:6 }} />
                  </div>
                  <p style={{ color:"#fff", fontSize:16, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase" }}>WeBearish Commercial</p>
                  <p style={{ color:"rgba(255,255,255,0.45)", fontSize:12, fontWeight:700, marginTop:8, letterSpacing:"1px" }}>Coming Soon — Drop your YouTube link here</p>
                </div>
              </div>
              <p style={{ fontSize:10, fontWeight:900, color:"rgba(255,255,255,0.3)", marginTop:10, textTransform:"uppercase", letterSpacing:"2px", textAlign:"center" }}>Drop your YouTube URL into the iframe src to go live</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SHOP THE MOVEMENT ─────────────────────────── */}
      <section style={{ background:"var(--yellow)", padding:"72px 32px" }}>
        <div className="wb-container">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:20 }}>
            <div>
              <span className="wb-label wb-label-dark">The Store</span>
              <h2 style={{ fontSize:"clamp(32px,5vw,60px)", letterSpacing:"-2px", color:"var(--dark)" }}>Shop The Movement</h2>
              <p style={{ fontSize:16, fontWeight:700, color:"rgba(15,26,15,0.6)", marginTop:8, maxWidth:480 }}>Every purchase builds the movement. Gear for the cause, made to last.</p>
            </div>
            <Link href="/shop" style={{ fontWeight:900, fontSize:14, color:"var(--dark)", textDecoration:"none", letterSpacing:"1px", textTransform:"uppercase", borderBottom:"2.5px solid var(--dark)", paddingBottom:3, whiteSpace:"nowrap" }}>View All 24 Products</Link>
          </div>
          <div style={{ display:"grid", gap:16 }} className="wb-shop-grid">
            {FEATURED_PRODUCTS.map((p,i) => (
              <div key={i} className="wb-product-card">
                <div style={{ aspectRatio:"1", background:p.bg, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                  <div style={{ position:"absolute", top:10, left:10, background:"var(--lime)", color:"var(--forest)", fontSize:9, fontWeight:900, letterSpacing:"1.5px", textTransform:"uppercase", padding:"3px 8px" }}>100% donated</div>
                  <div style={{ width:64, height:64, background:"rgba(255,255,255,0.12)", borderRadius:"50%" }} />
                </div>
                <div style={{ padding:"16px 18px" }}>
                  <div style={{ fontSize:10, fontWeight:900, letterSpacing:"1.5px", textTransform:"uppercase", color:"var(--lime)", marginBottom:6 }}>{p.cat}</div>
                  <div style={{ fontSize:14, fontWeight:900, color:"#fff", marginBottom:8, lineHeight:1.3 }}>{p.name}</div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <span style={{ fontSize:18, fontWeight:900, color:"var(--yellow)" }}>{p.price}</span>
                    <Link href="/shop" style={{ fontSize:11, fontWeight:900, color:"var(--lime)", textDecoration:"none", letterSpacing:"1px", textTransform:"uppercase" }}>Shop</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BY THE NUMBERS ────────────────────────────── */}
      <section style={{ background:"var(--dark)", padding:"48px 32px" }}>
        <div className="wb-container">
          <div style={{ display:"grid", gap:1, background:"rgba(184,232,135,0.08)" }} className="wb-stats-row">
            {STATS.map((s,i) => (
              <div key={i} style={{ padding:"40px 32px", textAlign:"center", background:"var(--dark)" }}>
                <div style={{ fontSize:"clamp(40px,6vw,72px)", fontWeight:900, color:"var(--lime)", letterSpacing:"-3px", lineHeight:1, marginBottom:12 }}>{s.num}</div>
                <div style={{ fontSize:14, fontWeight:800, color:"rgba(255,255,255,0.5)", letterSpacing:"1px", textTransform:"uppercase", lineHeight:1.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ──────────────────────────────────────── */}
      <section style={{ background:"var(--sky)", padding:"72px 32px" }}>
        <div className="wb-container">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:20 }}>
            <div>
              <span className="wb-label wb-label-dark">The Blog</span>
              <h2 style={{ fontSize:"clamp(30px,4.5vw,56px)", letterSpacing:"-2px", color:"var(--dark)" }}>Words for the movement.</h2>
            </div>
            <Link href="/blog" style={{ fontWeight:900, fontSize:14, color:"var(--dark)", textDecoration:"none", letterSpacing:"1px", textTransform:"uppercase", borderBottom:"2.5px solid var(--dark)", paddingBottom:3 }}>All Articles</Link>
          </div>
          <div style={{ display:"grid", gap:20 }} className="wb-blog-grid">
            {RECENT.map((post,i) => (
              <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration:"none" }}>
                <div className="wb-blog-card">
                  <div style={{ fontWeight:900, fontSize:10, letterSpacing:"2px", textTransform:"uppercase", color:"var(--lime-dark)", marginBottom:14 }}>{post.category}</div>
                  <h3 style={{ fontSize:"clamp(16px,1.8vw,20px)", color:"var(--dark)", fontWeight:900, lineHeight:1.3, marginBottom:14, letterSpacing:"-0.3px" }}>{post.title}</h3>
                  <p style={{ fontSize:14, color:"var(--muted)", fontWeight:700, lineHeight:1.6, display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", overflow:"hidden" }}>{post.description}</p>
                  <div style={{ marginTop:20, fontWeight:900, fontSize:13, color:"var(--lime-dark)", letterSpacing:"0.5px" }}>Read More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* ── FINAL CTA — 55/45 split ───────────────────── */}
      <section style={{ background:"var(--forest)", overflow:"hidden" }}>
        <div style={{ display:"grid", gridTemplateColumns:"55% 45%", minHeight:600 }} className="wb-cta-grid">

          {/* LEFT — copy */}
          <div style={{ padding:"80px 48px 80px max(48px,6vw)", display:"flex", flexDirection:"column", justifyContent:"center", height:"100%" }}>
            <h2 style={{ fontSize:"clamp(40px,5.5vw,80px)", color:"#fff", letterSpacing:"-3px", marginBottom:0, lineHeight:1.0 }}>
              Ready to stand<br /><span style={{ color:"var(--lime)" }}>for the children?</span>
            </h2>
            <div style={{ width:48, height:4, background:"var(--coral)", margin:"24px 0" }} />
            <p style={{ fontSize:18, color:"rgba(255,255,255,0.6)", fontWeight:700, marginBottom:40, lineHeight:1.7, maxWidth:420 }}>
              Join the movement. Share it. Wear it. Live it. These kids deserve more than a campaign — they deserve a world built for them.
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <Link href="/contact" className="wb-btn-coral" style={{ outline:"2px solid rgba(255,255,255,0.25)", outlineOffset:2 }}>Get Involved</Link>
              <Link href="/shop" className="wb-btn-yellow">Shop the Cause</Link>
            </div>
          </div>

          {/* RIGHT — bear photo framed */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:"40px 48px 40px 20px" }}>
            <div style={{
              width:"100%",
              border:"4px solid var(--lime)",
              boxShadow:"0 0 48px rgba(184,232,135,0.18)",
              overflow:"hidden",
              position:"relative",
              aspectRatio:"4/3",
            }}>
              <div style={{
                position:"absolute", inset:0,
                backgroundImage:"url('/bears/bears-cubs2.jpg')",
                backgroundSize:"cover",
                backgroundPosition:"center 30%",
              }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,rgba(26,58,26,0.15) 0%,transparent 50%,rgba(26,58,26,0.35) 100%)" }} />
              <div style={{ position:"absolute", top:14, left:14, background:"rgba(0,0,0,0.6)", padding:"5px 12px", border:"1px solid rgba(184,232,135,0.35)" }}>
                <span style={{ fontSize:10, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"var(--lime)" }}>Every Child Belongs</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MOBILE RESPONSIVE ─────────────────────────── */}
      <style>{`
        .wb-hero-grid { grid-template-columns: 55% 45%; }
        .wb-cta-grid { grid-template-columns: 55% 45%; }
        .wb-how-grid { grid-template-columns: repeat(5,1fr); }
        @media (max-width: 860px) {
          .wb-hero-grid { grid-template-columns: 1fr !important; }
          .wb-hero-grid > div:last-child { min-height: 320px; }
          .wb-cta-grid { grid-template-columns: 1fr !important; }
          .wb-how-grid { grid-template-columns: 1fr 1fr !important; }
          .wb-cta-grid > div:last-child { min-height: 300px; padding: 24px 28px 40px !important; }
          .wb-stat-strip { grid-template-columns: 1fr 1fr !important; text-align: center !important; }
        }
        @media (max-width: 900px) {
          .wb-beliefs-grid { grid-template-columns: 1fr 1fr !important; }
          .wb-shop-grid { grid-template-columns: 1fr 1fr !important; }
          .wb-stats-row { grid-template-columns: 1fr !important; }
          .wb-blog-grid { grid-template-columns: 1fr 1fr !important; }
          .wb-aa-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .wb-beliefs-grid { grid-template-columns: 1fr !important; }
          .wb-blog-grid { grid-template-columns: 1fr !important; }
          .wb-shop-grid { grid-template-columns: 1fr 1fr !important; }
          .wb-stat-strip { grid-template-columns: 1fr 1fr !important; text-align: center !important; }
          .wb-awareness-card, .wb-acceptance-card { padding: 36px 24px !important; }
        }
        @media (max-width: 440px) {
          .wb-shop-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
