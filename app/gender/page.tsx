import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism and Gender Identity: What the Research Shows | WeBearish',
  description: "Autistic people are significantly more likely to be gender-diverse. An honest, research-informed look at the intersection of autism and gender identity.",
  alternates: { canonical: 'https://webearish.com/gender' },
};

export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--coral)', marginBottom: 12 }}>IDENTITY</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontFamily: "'Nunito', sans-serif", fontWeight: 900, marginBottom: 20 }}>Autism and Gender Identity</h1>
        <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.65)', lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
          Autistic people are significantly more likely to be gender-diverse than the general population. This intersection is underserved in clinical settings and largely invisible in mainstream autism resources. WeBearish covers it directly.
        </p>

        {[
          { h: 'What the Research Shows', body: "Multiple peer-reviewed studies have found that autistic people are gender-diverse at significantly higher rates than the general population. Estimates range from 15% to over 25% of autistic adults identifying as non-binary, transgender, or gender non-conforming, compared to approximately 0.5-5% in non-autistic populations. This is a consistent finding across multiple independent studies in multiple countries." },
          { h: 'Why the Overlap Exists', body: "Researchers have proposed several explanations. Autistic people may be less influenced by social pressure to conform to gender norms — the same social pattern recognition that makes gender roles feel intuitive to many neurotypical people may feel arbitrary or inconsistent to autistic people. Some researchers propose shared neurological pathways. Others note that autistic people may be more attentive to their own internal experiences and less likely to suppress or dismiss gender identity questions. No single explanation has consensus." },
          { h: 'What This Means Clinically', body: "Many autistic people are navigating both an autism identity and a gender identity — often simultaneously, often without adequate professional support. Clinicians with autism expertise often lack gender-affirming training. Gender-affirming providers often lack autism expertise. The result is that autistic gender-diverse people frequently fall through gaps in both systems. If you are seeking support at this intersection, ask specifically about both competencies when evaluating providers." },
          { h: 'Language and Identity', body: "WeBearish uses identity-first language by default for both autism ('autistic person') and generally affirms the language individuals use to describe their gender identity. Gender identity, like autistic identity, is not a phase, a trend, or a symptom. Research consistently shows that affirming gender identity — in autistic and non-autistic people alike — improves wellbeing outcomes." },
          { h: 'For Parents', body: "If your autistic child is exploring or expressing gender identity, the evidence-based recommendation is affirmation and support. Research on gender-affirming care consistently shows better mental health outcomes. Avoid interpreting gender exploration as a symptom of autism or a phase driven by social contagion — these framings are not supported by the research. Connect with providers experienced in both autism and gender identity. Find autistic LGBTQ+ community where possible." },
          { h: 'Resources', body: "ASAN (Autistic Self Advocacy Network) publishes resources at the intersection of autism and LGBTQ+ identity. Gender Spectrum, PFLAG, and The Trevor Project offer support for gender-diverse youth and families. When evaluating any provider, ask directly: 'Do you have experience with autistic people who are also gender-diverse?' The answer will tell you a great deal." },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid rgba(184,232,135,0.08)' }}>
            <h2 style={{ fontSize: 20, fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: 'var(--lime)', marginBottom: 12 }}>{s.h}</h2>
            <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.75)', lineHeight: 1.8 }}>{s.body}</p>
          </div>
        ))}


        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginTop: 40 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14, fontWeight: 800 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/research" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Research Hub →</Link>
            <Link href="/adults/late-diagnosis" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Late Diagnosis →</Link>
            <Link href="/voices" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Autistic Voices →</Link>
            <Link href="/blog/autism-and-identity" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Autism and Identity →</Link>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          {[['Research Hub', '/research'], ['Late Diagnosis', '/adults/late-diagnosis'], ['Autistic Voices', '/voices'], ['Acceptance', '/acceptance']].map(([l, h]) => (
            <Link key={h} href={h} style={{ padding: '10px 20px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
