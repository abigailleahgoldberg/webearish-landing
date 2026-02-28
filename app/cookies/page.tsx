import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cookie Policy — WeBearish" };
export default function Cookies() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Legal</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>Cookie Policy</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: February 28, 2026</p>
        {[
          { h:"What Are Cookies", b:"Cookies are small text files stored on your device when you visit a website. They help sites remember preferences and understand how visitors use them." },
          { h:"What We Use", b:"Essential cookies: Required for the Site to function (session state, navigation). Analytics cookies: We use Vercel Analytics to understand aggregate traffic — no personal data is linked, no cross-site tracking. We do not use advertising or behavioral tracking cookies." },
          { h:"What We Don't Use", b:"We do not use third-party advertising cookies. We do not use Facebook Pixel, Google Ads remarketing, or any behavioral advertising technology. We do not sell cookie data to any third party." },
          { h:"Your Choices", b:"Most browsers allow you to refuse cookies or delete existing cookies via browser settings. Disabling essential cookies may affect Site functionality (e.g. shopping cart). Disabling analytics cookies has no impact on your experience." },
          { h:"Contact", b:"Cookie questions: hello@webearish.com" },
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
