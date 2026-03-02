import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "High-Masking Autism: What It Is and Why It Matters | WeBearish",
  description: "What high-masking autism is, why it is frequently undiagnosed, and what the cost of masking actually is.",
  alternates: { canonical: "https://webearish.com/is-this-autism/high-masking" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Is This Autism?
        </Link>
        <div style={{ marginTop: 24, marginBottom: 20, padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)' }}>
          For informational purposes only. Not medical advice. Consult a licensed professional.
        </div>
        <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 32px' }}>High-Masking Autism</h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>High-masking autism describes autistic people who are particularly skilled at concealing their autistic traits in social situations. High-maskers often receive diagnoses later in life, if at all. They are told they "don't look autistic." They are frequently women, gender-diverse, or highly verbal individuals with strong social observation skills.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Masking involves: learning and performing scripts for social situations; suppressing stims in public; forcing eye contact; mirroring others' facial expressions and body language; rehearsing conversations in advance; performing emotions that feel expected rather than genuine; and monitoring one's own behavior constantly for traits that might draw negative attention.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>High masking does not mean mild autism. The energy spent masking is invisible to observers but profoundly costly. Research links high masking to later diagnosis, significantly higher rates of anxiety and depression, and greater risk of autistic burnout. Many high-maskers describe the experience of burnout as the point where they could no longer maintain the mask — and simultaneously the point where diagnosis finally became possible.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>If you resonate with descriptions of masking and have wondered whether you may be autistic, that question is worth pursuing with a professional. High-masking autism is real, it is underdiagnosed, and it has significant impact on wellbeing.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>This page is for informational purposes only. Not medical advice.</p>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="/diagnosis/getting-assessed" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>How to Get Assessed →</a>
          <a href="/glossary/masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>What Is Masking? →</a>
          <a href="/glossary/autistic-burnout" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autistic Burnout →</a>
          <a href="/adults/late-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Late Diagnosis →</a>
        </div>
      </div>
    </div>
  );
}
