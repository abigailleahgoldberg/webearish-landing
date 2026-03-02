import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Autism Signs in Boys and Men | WeBearish",
  description: "How autism presents in boys and men. The signs most often recognized and the ones frequently missed.",
  alternates: { canonical: "https://webearish.com/is-this-autism/signs-in-boys" },
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
        <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 32px' }}>Autism Signs in Boys and Men</h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Boys and men are more likely to receive an autism diagnosis than girls and women, partly because the diagnostic criteria were developed primarily from research on male-presenting autism. However, autism in boys is still frequently missed when it does not match the most stereotypical presentation.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Common presentations in autistic boys and men include: intense, narrow special interests; preference for structure and routine; difficulty with unstructured social situations; direct or literal communication style that may be misread as rudeness; difficulty reading subtle social cues; stimming behaviors that are visible (rocking, hand-flapping, pacing); sensory sensitivities; and meltdowns or shutdowns that may be labeled as behavioral problems.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Boys who mask effectively — particularly those who are academically successful or have strong verbal skills — may be missed entirely until challenges become more apparent in adolescence or adulthood. Social demands increase significantly in middle and high school, and many autistic boys who appeared to manage in elementary school encounter significant difficulty as peer dynamics become more complex.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>This page is for informational purposes only. These traits do not confirm autism. A licensed professional must make any diagnosis.</p>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="/diagnosis/getting-assessed" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>How to Get Assessed →</a>
          <a href="/ages/teen" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autism in Teens →</a>
          <a href="/glossary/masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>What Is Masking? →</a>
        </div>
      </div>
    </div>
  );
}
