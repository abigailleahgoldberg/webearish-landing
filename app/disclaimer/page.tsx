import type { Metadata } from "next";
export const metadata: Metadata = { title: "Disclaimer — WeBearish" };
const LAST = "March 2026";
export default function Disclaimer() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Legal</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>Disclaimer</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: {LAST}</p>
        {[
          { h:"Medical Disclaimer", b:"The information provided on WeBearish is for general informational and educational purposes only. It is NOT intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition, therapy, or treatment plan.\n\nWeBearish does not provide medical diagnoses, therapeutic recommendations, or treatment plans. We are not doctors, therapists, psychologists, or licensed healthcare providers. Content about autism spectrum disorder, neurodiversity, and related topics reflects community perspectives and publicly available information.\n\nNever disregard professional medical advice or delay seeking it because of something you have read on this website." },
          { h:"Educational Content Disclaimer", b:"Content on this site is created for educational and awareness purposes. While we strive for accuracy, we make no representations or warranties about the completeness, reliability, or accuracy of this information." },
          { h:"AI-Generated Content", b:"Portions of this website's content are generated or assisted by artificial intelligence. While we review AI-generated content for accuracy, it may contain errors or outdated information. AI-generated content should not be relied upon as professional advice." },
          { h:"External Links", b:"This site may contain links to external websites. We are not responsible for the content, privacy practices, or accuracy of external sites." },
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
