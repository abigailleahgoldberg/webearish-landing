import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy — WeBearish" };
const LAST = "March 2026";
export default function Privacy() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Legal</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>Privacy Policy</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: {LAST}</p>
        {[
          { h:"1. Who We Are", b:"WeBearish is operated by The Voice of Cash Agent Clan (DBA WeBearish). We are a mission-driven brand focused on autism acceptance. Contact us at thevoiceofcash@gmail.com." },
          { h:"2. What We Collect", b:"We collect information you provide directly: name and email address when you subscribe to our newsletter (processed via Brevo). If you make a purchase, payment, shipping, and order information is collected and processed by Shopify — we do not store credit card data on our servers. We may also collect name, email, and message content when you submit a contact form." },
          { h:"3. How We Use Your Information", b:"We use your information to: fulfill orders, respond to inquiries, send transactional and marketing emails via Brevo, and improve our Site. We do not sell, rent, or share your personal information with third parties for their marketing purposes." },
          { h:"4. Third-Party Services", b:"We use Brevo for email list management and marketing communications. We use Shopify for e-commerce processing. Each of these providers has their own privacy policy governing data they collect and process on our behalf. By using this Site, you acknowledge these third-party data relationships." },
          { h:"5. Cookies", b:"We use cookies for essential Site functionality and basic analytics (page views, traffic sources). We do not use cookies for behavioral advertising. See our Cookie Policy at /cookies for full details." },
          { h:"6. The Autism Traits Reflection Tool", b:"Responses to our /quiz Autism Traits Reflection Guide are not stored, linked to your identity, or shared with any third party. The tool uses an AI language model (OpenAI) to generate your narrative — your answers are sent to that API and not retained after processing." },
          { h:"7. Children's Privacy", b:"WeBearish is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such data, contact us immediately at thevoiceofcash@gmail.com and we will delete it." },
          { h:"8. Data Retention", b:"Email list subscribers may unsubscribe at any time via the link in any email. Contact form submissions are retained for up to 12 months for customer service purposes." },
          { h:"9. Your Rights", b:"You may request access to, correction of, or deletion of your personal data at any time by emailing thevoiceofcash@gmail.com. California residents have additional rights under CCPA including the right to know what data is collected and the right to opt out of sale (we do not sell data)." },
          { h:"10. Security", b:"We use industry-standard encryption (HTTPS/TLS) for all data transmitted to and from this Site. No method of transmission over the Internet is 100% secure; we cannot guarantee absolute security." },
          { h:"11. Changes", b:"We may update this policy. We will notify you of significant changes by posting a notice on the Site and updating the date above." },
          { h:"12. Contact", b:"Privacy questions: thevoiceofcash@gmail.com" },
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
