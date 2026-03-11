"use client";
import Link from "next/link";
import Image from "next/image";

const TIMELINE = [
  { year:"1943", title:"Kanner Describes Autism", body:"Leo Kanner first describes autism as 'early infantile autism' — framed as a disorder, not a difference." },
  { year:"1944", title:"Asperger's Work", body:"Hans Asperger documents 'autistic psychopathy' in Vienna — his work suppressed for decades." },
  { year:"1980", title:"DSM-III Recognition", body:"Autism added to DSM-III as a distinct diagnosis, separating it from childhood schizophrenia." },
  { year:"1990", title:"ADA Signed", body:"Americans with Disabilities Act signed — a landmark for disability rights, but autism still widely misunderstood." },
  { year:"1994", title:"Spectrum Widened", body:"Asperger syndrome enters DSM-IV, acknowledging a broader spectrum of autistic experience." },
  { year:"2006", title:"ASAN Founded", body:"Autistic Self Advocacy Network founded by autistic people, for autistic people. Nothing about us without us." },
  { year:"2007", title:"Awareness Day", body:"UN designates April 2 as World Autism Awareness Day. The movement says: awareness is not enough." },
  { year:"2013", title:"DSM-5 Unifies", body:"DSM-5 consolidates autism diagnoses under one umbrella: Autism Spectrum Disorder." },
  { year:"2023", title:"1 in 36", body:"CDC reports 1 in 36 US children are autistic — up from 1 in 150 in 2000. The world must adapt." },
  { year:"Now",  title:"WeBearish", body:"A movement rises. Not for awareness. For full acceptance, belonging, and a world built for every child." },
];

export default function Footer() {
  return (
    <footer style={{ background:"var(--dark)" }}>

      {/* ── TOP GRID ───────────────────────────────── */}
      <div style={{ borderBottom:"1px solid rgba(184,232,135,0.08)", padding:"64px 32px 48px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr 1fr 1fr", gap:40 }}>

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
              <Image src="/bear-logo.png" alt="WeBearish" width={36} height={36} />
              <span style={{ fontWeight:900, fontSize:20, color:"var(--lime)", letterSpacing:"-0.5px" }}>WeBearish</span>
            </div>
            <p style={{ fontSize:14, fontWeight:700, lineHeight:1.75, color:"rgba(255,255,255,0.4)", maxWidth:240, marginBottom:24 }}>
              A movement rooted in love, built to grow. Everything we make, we put back into building more.
            </p>
            <div style={{ display:"flex", gap:12 }}>
              <a href="https://x.com/webearish" target="_blank" rel="noopener noreferrer" style={{ width:36, height:36, background:"rgba(184,232,135,0.08)", border:"1px solid rgba(184,232,135,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(184,232,135,0.6)", textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="rgba(184,232,135,0.15)";(e.currentTarget as HTMLAnchorElement).style.color="var(--lime)"}}
                onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="rgba(184,232,135,0.08)";(e.currentTarget as HTMLAnchorElement).style.color="rgba(184,232,135,0.6)"}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.facebook.com/webearish" target="_blank" rel="noopener noreferrer" style={{ width:36, height:36, background:"rgba(184,232,135,0.08)", border:"1px solid rgba(184,232,135,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(184,232,135,0.6)", textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="rgba(184,232,135,0.15)";(e.currentTarget as HTMLAnchorElement).style.color="var(--lime)"}}
                onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="rgba(184,232,135,0.08)";(e.currentTarget as HTMLAnchorElement).style.color="rgba(184,232,135,0.6)"}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p style={{ fontSize:11, fontWeight:900, color:"var(--lime)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:20 }}>Navigate</p>
            {([{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Shop",href:"/shop"},{label:"Blog",href:"/blog"},{label:"Resources",href:"/resources"},{label:"Contact",href:"/contact"}]).map(l => (
              <Link key={l.href} href={l.href} style={{ display:"block", color:"rgba(255,255,255,0.4)", fontWeight:700, fontSize:14, textDecoration:"none", marginBottom:10, transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--lime)")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.4)")}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mission */}
          <div>
            <p style={{ fontSize:11, fontWeight:900, color:"var(--lime)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:20 }}>The Cause</p>
            <p style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.35)", lineHeight:1.7, marginBottom:16 }}>Every dollar earned goes back into autism acceptance programs, events, and resources.</p>
            <div style={{ padding:"14px 16px", background:"rgba(184,232,135,0.06)", borderLeft:"3px solid var(--lime)" }}>
              <span style={{ fontSize:11, fontWeight:900, letterSpacing:"1.5px", textTransform:"uppercase", color:"var(--lime)" }}>We Reinvest Everything</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize:11, fontWeight:900, color:"var(--lime)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:20 }}>Connect</p>
            <a href="mailto:hello@webearish.com" style={{ display:"block", color:"rgba(255,255,255,0.4)", fontWeight:700, fontSize:14, textDecoration:"none", marginBottom:10 }}>hello@webearish.com</a>
            <p style={{ fontSize:13, fontWeight:700, color:"rgba(184,232,135,0.4)", marginTop:20, lineHeight:1.5 }}>#AutismAcceptance<br />#WeBearish</p>
          </div>

          {/* Our Network */}
          <div>
            <p style={{ fontSize:11, fontWeight:900, color:"var(--lime)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:20 }}>Our Network</p>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <a href="https://www.thevoiceofcash.com" target="_blank" rel="noopener noreferrer" style={{ color:"rgba(255,255,255,0.4)", fontWeight:700, fontSize:13, textDecoration:"none" }}>The Voice of Cash</a>
              <a href="https://u-god.com" target="_blank" rel="noopener noreferrer" style={{ color:"rgba(255,255,255,0.4)", fontWeight:700, fontSize:13, textDecoration:"none" }}>U-God Sacred Texts</a>
              <a href="https://aiskillsagents.com" target="_blank" rel="noopener noreferrer" style={{ color:"rgba(255,255,255,0.4)", fontWeight:700, fontSize:13, textDecoration:"none" }}>AI Skills Agents</a>
              <a href="https://autismacceptance.world" target="_blank" rel="noopener noreferrer" style={{ color:"rgba(255,255,255,0.4)", fontWeight:700, fontSize:13, textDecoration:"none" }}>Autism Acceptance World</a>
              <a href="https://jewsa.com" target="_blank" rel="noopener noreferrer" style={{ color:"rgba(255,255,255,0.4)", fontWeight:700, fontSize:13, textDecoration:"none" }}>JewSA</a>
            </div>
          </div>
        </div>
      </div>


      {/* ── BOTTOM BAR ──────────────────────────────── */}
      <div style={{ borderTop:"1px solid rgba(184,232,135,0.06)", padding:"20px 32px", maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
        <p style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.25)" }}>
          2026 WeBearish. A movement, not just a brand.
        </p>
        <p style={{ fontSize:13, fontWeight:700, color:"rgba(184,232,135,0.35)" }}>
          Baby steps. Big dreams.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .wb-footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .wb-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
