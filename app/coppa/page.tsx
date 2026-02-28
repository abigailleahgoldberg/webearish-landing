import type { Metadata } from "next";
export const metadata: Metadata = { title: "Children's Privacy (COPPA) — WeBearish" };
export default function Coppa() {
  return (
    <div style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
      <div style={{ maxWidth:760, margin:"0 auto" }}>
        <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:16 }}>Legal</span>
        <h1 style={{ fontSize:"clamp(32px,4.5vw,54px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-2px", marginBottom:8 }}>Children's Privacy Notice (COPPA)</h1>
        <p style={{ fontSize:13, color:"var(--muted)", fontWeight:700, marginBottom:48 }}>Last updated: February 28, 2026</p>
        <div style={{ background:"var(--forest)", border:"4px solid var(--lime)", padding:"28px", marginBottom:40 }}>
          <p style={{ fontSize:16, fontWeight:900, color:"#fff", lineHeight:1.7 }}>
            WeBearish serves autistic children and their families. The protection of children's personal information is something we take with the utmost seriousness.
          </p>
        </div>
        {[
          { h:"Our Commitment Under COPPA", b:"The Children's Online Privacy Protection Act (COPPA) requires website operators to protect the privacy of children under 13. WeBearish does not knowingly collect personal information from children under 13 without verifiable parental consent." },
          { h:"Who Uses This Site", b:"This Site is intended to be used by parents, guardians, and adults (18+) on behalf of autistic children and families. Children under 13 should not create accounts, submit forms, or provide personal information directly." },
          { h:"What We Collect From Minors", b:"We do not knowingly collect any personal information directly from children under 13. Our contact forms, email signup, and quiz tool are intended for adults. If a parent or guardian believes their child has submitted personal information to our Site, contact us immediately." },
          { h:"Parental Rights", b:"Parents and guardians have the right to: review any personal information we have collected about their child, request deletion of that information, and refuse further collection. To exercise these rights, contact hello@webearish.com with 'COPPA Request' in the subject line." },
          { h:"The Autism Traits Reflection Tool", b:"Our /quiz tool is intended for adults exploring their own experiences, or for parents reflecting on patterns they observe in themselves or seeking to understand autistic experiences. It is not designed for or directed at children under 13." },
          { h:"Inadvertent Collection", b:"If we discover we have collected personal information from a child under 13 without verifiable parental consent, we will delete that information immediately. Contact hello@webearish.com to report a concern." },
          { h:"Contact the FTC", b:"For more information about COPPA, visit the Federal Trade Commission at ftc.gov/coppa." },
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
