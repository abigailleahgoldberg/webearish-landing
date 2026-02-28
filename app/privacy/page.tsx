import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy — WeBearish" };
const LAST = "February 28, 2026";
export default function Privacy() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Legal</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>Privacy Policy</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: {LAST}</p>
        {[
          { h:"1. What We Collect", b:"We collect information you provide directly: name, email address, and message content when you submit a contact form. If you make a purchase, payment and shipping information is collected and processed by our third-party payment and fulfillment partners — we do not store credit card data on our servers." },
          { h:"2. How We Use Your Information", b:"We use your information to: fulfill orders, respond to inquiries, send transactional emails, and improve our Site. We do not sell, rent, or share your personal information with third parties for their marketing purposes." },
          { h:"3. Cookies", b:"We use cookies for essential Site functionality and basic analytics (page views, traffic sources). We do not use cookies for behavioral advertising. See our Cookie Policy at /cookies for full details." },
          { h:"4. The Autism Traits Reflection Tool", b:"Responses to our /quiz Autism Traits Reflection Guide are not stored, linked to your identity, or shared with any third party. The tool uses an AI language model (OpenAI) to generate your narrative — your answers are sent to that API and not retained after processing." },
          { h:"5. Children's Privacy", b:"WeBearish is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such data, contact us immediately at hello@webearish.com and we will delete it. See our full COPPA notice at /coppa." },
          { h:"6. Data Retention", b:"Contact form submissions are retained for up to 12 months for customer service purposes. Email list subscribers may unsubscribe at any time via the link in any email." },
          { h:"7. Your Rights", b:"You may request access to, correction of, or deletion of your personal data at any time by emailing hello@webearish.com. California residents have additional rights under CCPA including the right to know what data is collected and the right to opt out of sale (we do not sell data)." },
          { h:"8. Security", b:"We use industry-standard encryption (HTTPS/TLS) for all data transmitted to and from this Site. No method of transmission over the Internet is 100% secure; we cannot guarantee absolute security." },
          { h:"9. Changes", b:"We may update this policy. We will notify you of significant changes by posting a notice on the Site and updating the date above." },
          { h:"10. Contact", b:"Privacy questions: hello@webearish.com" },
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
