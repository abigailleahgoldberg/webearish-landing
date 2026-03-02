import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Late Autism Diagnosis: What to Know | WeBearish",
  description: "What a late autism diagnosis means, why it happens, and what comes next. For adults who are exploring whether they may be autistic.",
  alternates: { canonical: "https://webearish.com/is-this-autism/late-diagnosis" },
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
        <h1 style={{ fontSize: 'clamp(24px,4vw,44px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 32px' }}>Late Autism Diagnosis</h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Late autism diagnosis — receiving a diagnosis in adulthood — is far more common than is often recognized. It is particularly common in women, gender-diverse people, people of color, and anyone who developed strong masking abilities early in life.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Why diagnosis is missed: the autism diagnostic criteria were developed from research on young white boys. Clinicians trained on those criteria may not recognize autism in adults, women, people of color, or anyone who does not match the stereotype. Masking — the practice of suppressing autistic traits to fit in — can make autism invisible to observers while remaining very real in lived experience.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Common experiences of late-diagnosed autistic adults include: decades of anxiety, depression, or burnout without a satisfying explanation; a history of "almost fitting in" but never quite; sensory sensitivities dismissed as overreaction; social exhaustion that others do not seem to experience; a sense of performing in social situations rather than being natural; intense interests that generated shame or confusion; and relief at finally having language for lifelong experiences.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>Self-identification is recognized in many autistic communities as valid, particularly where formal diagnosis is inaccessible due to cost or waitlists. Formal diagnosis provides access to accommodations and services.</p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 24 }}>This page is for informational purposes only. These experiences do not confirm autism. A licensed professional can make a formal diagnosis.</p>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="/adults/late-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Adults: Late Diagnosis Guide →</a>
          <a href="/diagnosis/getting-assessed" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>How to Get Assessed as an Adult →</a>
          <a href="/is-this-autism/high-masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>High-Masking Autism →</a>
        </div>
      </div>
    </div>
  );
}
