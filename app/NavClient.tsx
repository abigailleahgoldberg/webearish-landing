"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const LINKS = [
  { href:"/about",     label:"About" },
  { href:"/shop",      label:"Shop" },
  { href:"/blog",      label:"Blog" },
  { href:"/resources", label:"Resources" },
  { href:"/quiz",      label:"Traits Quiz" },
];

export default function NavClient() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="wb-nav">
        <Link href="/" className="wb-nav-logo" style={{ display:"flex", alignItems:"center", gap:10 }}>
          <Image src="/bear-logo.png" alt="WeBearish Bear" width={36} height={36} style={{ display:"block" }} />
          WeBearish
        </Link>
        <div className="wb-nav-links">
          {LINKS.map(l => <Link key={l.href} href={l.href} className="wb-nav-link">{l.label}</Link>)}
          <Link href="/contact" className="wb-nav-link wb-nav-cta">Contact</Link>
          <Link href="/contact" style={{ background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:13, letterSpacing:"1px", textTransform:"uppercase", padding:"10px 20px", textDecoration:"none", whiteSpace:"nowrap" }}>Get Involved</Link>
        </div>
        {/* Mobile hamburger */}
        <button onClick={()=>setOpen(!open)} style={{ display:"none", background:"none", border:"none", cursor:"pointer", padding:8 }} className="wb-hamburger" aria-label="Menu">
          <div style={{ width:24, height:2, background:"var(--lime)", marginBottom:5 }} />
          <div style={{ width:24, height:2, background:"var(--lime)", marginBottom:5 }} />
          <div style={{ width:24, height:2, background:"var(--lime)" }} />
        </button>
      </nav>
      {/* Mobile drawer */}
      {open && (
        <div style={{ position:"fixed", top:64, left:0, right:0, bottom:0, background:"var(--forest)", zIndex:99, padding:"40px 24px", display:"flex", flexDirection:"column", gap:8 }}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{ fontWeight:900, fontSize:24, color:"rgba(255,255,255,0.85)", textDecoration:"none", padding:"16px 0", borderBottom:"1px solid rgba(184,232,135,0.08)", letterSpacing:"-0.5px" }}>{l.label}</Link>
          ))}
          <Link href="/contact" onClick={()=>setOpen(false)} style={{ display:"block", fontWeight:900, fontSize:24, color:"rgba(255,255,255,0.85)", textDecoration:"none", padding:"16px 0", borderBottom:"1px solid rgba(184,232,135,0.08)", letterSpacing:"-0.5px" }}>Contact</Link>
          <Link href="/contact" onClick={()=>setOpen(false)} style={{ marginTop:16, display:"block", padding:"18px 24px", background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:18, textDecoration:"none", textAlign:"center", letterSpacing:"1px", textTransform:"uppercase" }}>Get Involved</Link>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .wb-nav-links { display: none !important; }
          .wb-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
