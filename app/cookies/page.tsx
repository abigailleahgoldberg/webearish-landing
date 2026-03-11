import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cookie Policy — WeBearish" };
const LAST = "March 2026";
export default function Cookies() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Legal</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>Cookie Policy</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: {LAST}</p>
        <p style={{ fontSize:15, color:"var(--muted)", fontWeight:700, lineHeight:1.8, marginBottom:48 }}>
          This Cookie Policy is issued by The Voice of Cash Agent Clan (DBA WeBearish). It explains what cookies we use on webearish.com and why.
        </p>
        {[
          { h:"1. What Are Cookies", b:"Cookies are small text files stored on your device when you visit a website. They help sites remember preferences and understand how visitors use them." },
          { h:"2. Cookies We Use", b:"Essential cookies: Required for the Site to function (session state, navigation, shopping cart). Analytics cookies: We use Vercel Analytics to understand aggregate traffic — no personal data is linked, no cross-site tracking. No behavioral advertising cookies are used on this Site." },
          { h:"3. Shopify Cookies", b:"If you make a purchase, Shopify may set cookies necessary for order processing, cart state, and fraud prevention. These are subject to Shopify's own Cookie Policy." },
          { h:"4. Email Tracking", b:"Our email provider, Brevo, may use pixel tracking to measure open and click rates in marketing emails. You can disable image loading in your email client to prevent this. You can unsubscribe from marketing emails at any time." },
          { h:"5. What We Don't Use", b:"We do not use Facebook Pixel, Google Ads remarketing, or any behavioral advertising technology. We do not sell cookie data to any third party." },
          { h:"6. Your Choices", b:"Most browsers allow you to refuse or delete cookies via browser settings. Disabling essential cookies may affect Site functionality (e.g. shopping cart). Disabling analytics cookies has no impact on your experience." },
          { h:"7. Contact", b:"Cookie questions: thevoiceofcash@gmail.com" },
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
