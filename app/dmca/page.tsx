import type { Metadata } from "next";
export const metadata: Metadata = { title: "DMCA Notice — WeBearish" };
const LAST = "March 2026";
export default function DMCA() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Legal</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>DMCA Notice &amp; Takedown Policy</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: {LAST}</p>
        <div style={{ marginBottom:36 }}>
          <p style={{ fontSize:15, color:"var(--muted)", fontWeight:700, lineHeight:1.8 }}>
            WeBearish respects intellectual property rights. If you believe content on this site infringes your copyright, please send a DMCA takedown notice to:
          </p>
        </div>
        <div style={{ background:"var(--forest)", padding:"24px 28px", marginBottom:36, border:"1px solid rgba(184,232,135,0.15)" }}>
          <p style={{ fontSize:14, fontWeight:900, color:"var(--lime)", marginBottom:6 }}>DMCA Agent: The Voice of Cash</p>
          <p style={{ fontSize:14, fontWeight:700, color:"rgba(255,255,255,0.7)" }}>Email: <a href="mailto:thevoiceofcash@gmail.com" style={{ color:"var(--lime)", textDecoration:"none" }}>thevoiceofcash@gmail.com</a></p>
        </div>
        {[
          { h:"Your Notice Must Include", b:"1. Identification of the copyrighted work claimed to be infringed\n2. Identification of the material to be removed, with sufficient detail to locate it\n3. Your contact information (name, address, phone, email)\n4. A statement that you have a good faith belief the use is not authorized\n5. A statement under penalty of perjury that the information is accurate\n6. Your physical or electronic signature" },
          { h:"Counter-Notification", b:"If you believe your content was wrongly removed, you may submit a counter-notification with the required information under 17 U.S.C. § 512(g)." },
        ].map(s => (
          <div key={s.h} style={{ marginBottom:36 }}>
            <h2 style={{ fontSize:18, fontWeight:900, color:"var(--dark)", letterSpacing:"-0.5px", marginBottom:10 }}>{s.h}</h2>
            <p style={{ fontSize:15, color:"var(--muted)", fontWeight:700, lineHeight:1.8, whiteSpace:"pre-line" }}>{s.b}</p>
          </div>
        ))}
        <div style={{ marginTop:48, paddingTop:32, borderTop:"2px solid var(--gray-light)" }}>
          <a href="/" style={{ fontSize:14, fontWeight:900, color:"var(--forest)", textDecoration:"none", letterSpacing:"0.5px" }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
