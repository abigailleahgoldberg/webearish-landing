"use client";
import Link from "next/link";
import Image from "next/image";

export default function NavClient() {
  return (
    <nav className="wb-nav">
      <Link href="/" className="wb-nav-logo" style={{ display:"flex", alignItems:"center", gap:10 }}>
        <Image src="/bear-logo.png" alt="WeBearish Bear" width={36} height={36} style={{ display:"block" }} />
        WeBearish
      </Link>
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <Link href="/shop" style={{ color:"rgba(255,255,255,0.75)", fontWeight:700, fontSize:14, textDecoration:"none", letterSpacing:"0.5px" }}>Shop</Link>
        <Link href="/contact" style={{ background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:13, letterSpacing:"1px", textTransform:"uppercase", padding:"10px 20px", textDecoration:"none", whiteSpace:"nowrap" }}>Get Involved</Link>
      </div>
    </nav>
  );
}
