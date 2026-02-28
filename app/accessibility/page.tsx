import type { Metadata } from "next";
export const metadata: Metadata = { title: "Accessibility Statement — WeBearish" };
export default function Accessibility() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Commitment</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>Accessibility Statement</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: February 28, 2026</p>
        <div style={{ background:"var(--forest)", border:"4px solid var(--lime)", padding:"28px", marginBottom:40 }}>
          <p style={{ fontSize:16, fontWeight:900, color:"#fff", lineHeight:1.7 }}>
            WeBearish exists for autistic children and their families. Accessibility is not optional for us — it is the point. We are committed to ensuring this Site is usable by everyone, including people with disabilities.
          </p>
        </div>
        {[
          { h:"Our Standard", b:"We aim to conform to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. This includes providing text alternatives for non-text content, ensuring sufficient color contrast, making all functionality available via keyboard, and ensuring content is understandable and navigable." },
          { h:"What We've Done", b:"This Site uses semantic HTML elements, ARIA roles and labels on interactive elements, sufficient color contrast ratios across all text elements, keyboard-navigable navigation, responsive design that works at 400% zoom, and no content that flashes more than 3 times per second." },
          { h:"Known Limitations", b:"Some background-image elements (bear photos) may not be fully accessible to screen readers. We are actively working to convert these to proper image elements with descriptive alt text. Product images in the shop are currently placeholder images without full alt text — this will be resolved before full launch." },
          { h:"The Autism Traits Reflection Tool", b:"The /quiz tool is designed to be keyboard-navigable. All questions and answer options are accessible via tab and enter. Results are presented as text that is compatible with screen readers." },
          { h:"Feedback", b:"If you encounter any accessibility barrier on this Site, please contact us: hello@webearish.com. Please describe the issue and include the page URL. We commit to responding within 5 business days and resolving confirmed issues as quickly as possible." },
          { h:"Enforcement", b:"If you are dissatisfied with our response, you may contact the US Department of Justice's ADA Information Line at 1-800-514-0301 or visit ada.gov." },
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
