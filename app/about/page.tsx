import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — WeBearish",
  description: "WeBearish was founded by parents raising autistic children in the United States. Not researchers. Not clinicians. Parents who believe every child belongs.",
};

const TIMELINE = [
  { year:"2023", title:"WeBearish Founded", body:"Two parents raising autistic children decide awareness isn't enough. The movement begins." },
  { year:"2024", title:"Bouncy World Event", body:"WeBearish hosts an Autism Acceptance Week party. Fox 5 News covers it. Families show up." },
  { year:"2024", title:"Fox 5 Coverage", body:"A local news story becomes a national conversation about what acceptance actually looks like." },
  { year:"2025", title:"Legislative Action", body:"A parent-driven bill pushes for additional ABA paraprofessionals at CCSD for students on the spectrum. WeBearish parents at the front of the fight. Covered by 8 News Now." },
  { year:"Now",  title:"Going National", body:"webearish.com launches. A bearish serious hub for autistic children — merch, community, and everything that grows the movement." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background:"var(--forest)", padding:"100px 32px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"url('/bears/bear-forest.webp')", backgroundSize:"cover", backgroundPosition:"center", opacity:0.07, pointerEvents:"none" }} />
        <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"55% 45%", gap:48, alignItems:"center" }} className="wb-about-hero-grid">
          <div>
            <span style={{ fontSize:11, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(184,232,135,0.6)", display:"block", marginBottom:20 }}>Our Story</span>
            <h1 style={{ fontSize:"clamp(44px,6.5vw,84px)", fontWeight:900, color:"#fff", letterSpacing:"-3px", lineHeight:1.0, marginBottom:24 }}>
              Parents first.<br /><span style={{ color:"var(--lime)" }}>Movement second.</span>
            </h1>
            <div style={{ width:48, height:4, background:"var(--coral)", marginBottom:24 }} />
            <p style={{ fontSize:18, color:"rgba(255,255,255,0.65)", fontWeight:700, lineHeight:1.75, maxWidth:500 }}>
              WeBearish was founded by parents raising autistic children in the United States. Not researchers. Not clinicians. Parents — the people who see what acceptance actually looks like, and what happens when it is absent.
            </p>
            <div style={{ marginTop:36, display:"flex", gap:12, flexWrap:"wrap" }}>
              <Link href="/contact" style={{ background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 28px", textDecoration:"none" }}>Join The Movement</Link>
              <Link href="/shop" style={{ background:"transparent", color:"#fff", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 28px", border:"2px solid rgba(255,255,255,0.3)", textDecoration:"none" }}>Shop The Cause</Link>
            </div>
          </div>
          <div style={{ position:"relative" }}>
            <div style={{ border:"4px solid var(--lime)", boxShadow:"0 0 0 8px var(--forest), 0 0 48px rgba(184,232,135,0.2)", overflow:"hidden", aspectRatio:"4/3", position:"relative" }}>
              <div role="img" aria-label="Bear cubs together in nature — WeBearish" style={{ position:"absolute", inset:0, backgroundImage:"url('/bears/bears-together.jpg')", backgroundSize:"cover", backgroundPosition:"center" }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRESS */}
      <div style={{ background:"var(--dark)", borderBottom:"1px solid rgba(255,255,255,0.06)", padding:"20px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", alignItems:"center", gap:24, flexWrap:"wrap", justifyContent:"center" }}>
          <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(255,255,255,0.25)", whiteSpace:"nowrap" }}>As Seen On</span>
          <div style={{ height:1, flex:1, background:"rgba(255,255,255,0.06)", minWidth:24 }} />
          <span style={{ fontSize:18, fontWeight:900, color:"rgba(255,255,255,0.5)", letterSpacing:"-0.5px" }}>FOX 5 News</span>
          <span style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.2)" }}>|</span>
          <span style={{ fontSize:14, fontWeight:900, color:"rgba(255,255,255,0.35)", letterSpacing:"1px", textTransform:"uppercase" }}>Autism Acceptance Week 2024</span>
          <div style={{ height:1, flex:1, background:"rgba(255,255,255,0.06)", minWidth:24 }} />
        </div>
      </div>

      {/* MISSION */}
      <section style={{ background:"var(--cream)", padding:"96px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }} className="wb-about-mission-grid">
          <div>
            <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:20 }}>Why We Exist</span>
            <h2 style={{ fontSize:"clamp(32px,4.5vw,56px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", lineHeight:1.05, marginBottom:24 }}>
              Awareness is not enough.
            </h2>
            <div style={{ width:40, height:4, background:"var(--coral)", marginBottom:24 }} />
            <p style={{ fontSize:17, color:"var(--muted)", fontWeight:700, lineHeight:1.8, marginBottom:20 }}>
              The puzzle piece. The blue lights. The month of "awareness." We have had all of that for decades and autistic people still face exclusion, discrimination, and a world not designed with them in mind.
            </p>
            <p style={{ fontSize:17, color:"var(--muted)", fontWeight:700, lineHeight:1.8 }}>
              WeBearish is not about awareness. It is about acceptance. Not tolerating autistic people. Celebrating them. Building a world where 1 in 36 children can thrive — not in spite of who they are, but because of it.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            {[
              { num:"1 in 36", label:"US children are autistic (CDC, 2023)" },
              { num:"100%",    label:"Reinvested into growing the brand" },
              { num:"2024",    label:"Fox 5 covered our community event" },
              { num:"∞",      label:"Children who deserve to feel they belong" },
            ].map((s,i) => (
              <div key={i} style={{ background:"var(--forest)", padding:"28px 24px", border:"1px solid rgba(184,232,135,0.1)" }}>
                <div style={{ fontSize:"clamp(28px,3.5vw,44px)", fontWeight:900, color:"var(--lime)", letterSpacing:"-2px", lineHeight:1, marginBottom:8 }}>{s.num}</div>
                <p style={{ fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.5)", lineHeight:1.5 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section style={{ background:"var(--yellow)", padding:"80px 32px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(15,26,15,0.45)", display:"block", marginBottom:16 }}>Our Journey</span>
          <h2 style={{ fontSize:"clamp(32px,4.5vw,56px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:48 }}>How we got here.</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:16 }} className="wb-timeline-row">
            {TIMELINE.map((t,i) => (
              <div key={i} style={{ background: i===TIMELINE.length-1 ? "var(--coral)" : "var(--forest)", padding:"28px 24px", border:`1px solid ${i===TIMELINE.length-1 ? "transparent" : "rgba(255,255,255,0.06)"}` }}>
                <div style={{ fontSize:28, fontWeight:900, color: i===TIMELINE.length-1 ? "#fff" : "var(--lime)", letterSpacing:"-1.5px", marginBottom:10 }}>{t.year}</div>
                <div style={{ fontSize:13, fontWeight:900, color:"#fff", marginBottom:10, lineHeight:1.3 }}>{t.title}</div>
                <p style={{ fontSize:12, fontWeight:700, color: i===TIMELINE.length-1 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.5)", lineHeight:1.6 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:"var(--forest)", padding:"96px 32px", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(36px,5vw,64px)", fontWeight:900, color:"#fff", letterSpacing:"-2.5px", marginBottom:16 }}>
          Stand with us.
        </h2>
        <div style={{ width:48, height:4, background:"var(--lime)", margin:"0 auto 24px" }} />
        <p style={{ fontSize:18, color:"rgba(255,255,255,0.55)", fontWeight:700, maxWidth:520, margin:"0 auto 40px", lineHeight:1.7 }}>
          Every purchase builds something real. A store, a community, a movement — all of it growing for autistic children across the United States.
        </p>
        <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
          <Link href="/contact" style={{ background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:14, letterSpacing:"1.5px", textTransform:"uppercase", padding:"16px 32px", textDecoration:"none" }}>Get Involved</Link>
          <Link href="/shop" style={{ background:"var(--yellow)", color:"var(--dark)", fontWeight:900, fontSize:14, letterSpacing:"1.5px", textTransform:"uppercase", padding:"16px 32px", textDecoration:"none" }}>Shop The Cause</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .wb-about-hero-grid, .wb-about-mission-grid { grid-template-columns: 1fr !important; }
          .wb-about-hero-grid > div:last-child { display: none; }
          .wb-timeline-row { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .wb-timeline-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
