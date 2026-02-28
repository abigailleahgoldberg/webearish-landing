import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service — WeBearish" };
const LAST = "February 28, 2026";
export default function Terms() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Legal</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>Terms of Service</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: {LAST}</p>
        {[
          { h:"1. Acceptance of Terms", b:"By accessing or using webearish.com (the 'Site'), you agree to be bound by these Terms of Service. If you do not agree, do not use the Site. WeBearish LLC ('WeBearish,' 'we,' 'us') reserves the right to update these Terms at any time. Continued use of the Site after changes constitutes acceptance." },
          { h:"2. Use of the Site", b:"You must be 13 or older to use this Site without parental supervision. You agree not to use the Site for any unlawful purpose, to harass others, to impersonate any person or entity, or to transmit harmful or offensive content. We reserve the right to terminate access for violations." },
          { h:"3. Products and Purchases", b:"WeBearish sells merchandise through this Site. All prices are in USD. We reserve the right to refuse or cancel orders at our discretion. Products are fulfilled via third-party partners (e.g. Printful). Availability, shipping times, and product specifications may vary. Sales are final unless a product arrives damaged or defective." },
          { h:"4. Intellectual Property", b:"All content on this Site — including text, graphics, logos, images, and the WeBearish brand — is the property of WeBearish LLC and protected by US copyright and trademark law. You may not reproduce, distribute, or create derivative works without our express written permission." },
          { h:"5. Autism Traits Reflection Tool Disclaimer", b:"The Autism Traits Reflection Guide available at /quiz is for educational and self-reflection purposes only. It is not a medical diagnostic tool. WeBearish is not a medical provider. Nothing on this Site constitutes medical advice. Always consult a licensed clinician for diagnostic evaluation." },
          { h:"6. Third-Party Links", b:"The Site may contain links to third-party websites. WeBearish is not responsible for the content, privacy practices, or accuracy of any third-party site. Links do not constitute endorsement." },
          { h:"7. Limitation of Liability", b:"To the fullest extent permitted by law, WeBearish shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or products purchased through it. Our total liability shall not exceed the amount you paid for the product at issue." },
          { h:"8. Governing Law", b:"These Terms are governed by the laws of the State of Nevada. Any dispute arising under these Terms shall be subject to binding arbitration in Clark County, Nevada, in accordance with the American Arbitration Association rules." },
          { h:"9. Contact", b:"Questions about these Terms: hello@webearish.com" },
        ].map(s => (
          <div key={s.h} style={{ marginBottom:36 }}>
            <h2 style={{ fontSize:18, fontWeight:900, color:"var(--dark)", letterSpacing:"-0.5px", marginBottom:10 }}>{s.h}</h2>
            <p style={{ fontSize:15, color:"var(--muted)", fontWeight:700, lineHeight:1.8 }}>{s.b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
