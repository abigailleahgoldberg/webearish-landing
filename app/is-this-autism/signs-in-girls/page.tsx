import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Autism Signs in Girls and Women | WeBearish",
  description: "How autism presents differently in girls and women. Why diagnosis is often missed or delayed, and what to look for.",
  alternates: { canonical: "https://webearish.com/is-this-autism/signs-in-girls" },
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
        <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 32px' }}>Autism Signs in Girls and Women</h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Girls and women are significantly underdiagnosed for autism. Research consistently shows that the autism criteria were developed primarily from studies of young white boys — and that autism presents differently in girls and women in ways the traditional criteria do not capture well.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Common presentations in autistic girls and women include: strong ability to mask and mirror social behavior (camouflaging); intense special interests that may appear more socially acceptable (celebrities, animals, books, relationships) rather than stereotypically male interests like trains or video games; difficulty that appears in social situations but is not visible in academic performance; exhaustion and burnout after social interaction; sensory sensitivities that may be attributed to anxiety or sensory processing disorder without an autism connection; and a history of being described as "too sensitive," "intense," or "socially awkward" without a clear explanation.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Late diagnosis is common: many autistic women receive their diagnosis in adulthood, often following a child's diagnosis or a period of burnout that removes the capacity to mask. The masking that delays diagnosis is also what puts autistic women at higher risk for burnout, anxiety, and depression.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>This page is for informational purposes only. These traits do not confirm autism. A licensed professional must make any diagnosis.</p>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="/diagnosis/getting-assessed" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>How to Get Assessed →</a>
          <a href="/is-this-autism/high-masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>High-Masking Autism →</a>
          <a href="/glossary/masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>What Is Masking? →</a>
        </div>
      </div>
    </div>
  );
}
