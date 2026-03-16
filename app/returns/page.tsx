import type { Metadata } from "next";
export const metadata: Metadata = { title: "Return & Refund Policy — WeBearish" };
const LAST = "March 2026";
export default function Returns() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Legal</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>Return &amp; Refund Policy</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: {LAST}</p>
        {[
          { h:"Our Products", b:"Our products are printed on demand by our fulfillment partner, Printful. Because each item is custom-made to order, our return policy follows specific guidelines." },
          { h:"Returns & Exchanges", b:"We accept returns for damaged or defective items within 30 days of delivery. To initiate a return, contact us at thevoiceofcash@gmail.com with your order number and photos of the issue." },
          { h:"We Do NOT Accept Returns For", b:"— Items that are not damaged or defective\n— Items washed or worn\n— Items where the wrong size was ordered (please check our size guides)" },
          { h:"Refund Process", b:"Once we receive and verify your return, refunds will be processed to your original payment method within 5–10 business days." },
          { h:"Shipping Issues", b:"If your order is lost in transit, contact us within 30 days of the expected delivery date. We will work with our shipping partner to resolve the issue." },
          { h:"Contact", b:"Email: thevoiceofcash@gmail.com" },
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
