import type { Metadata } from 'next';
import Link from 'next/link';
import { stateResources } from '../../../data/state-resources';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return stateResources.map(s => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const s = stateResources.find(s => s.slug === state);
  if (!s) return {};
  return {
    title: `Autism Resources in ${s.name} | WeBearish`,
    description: `Find autism resources, Medicaid waivers, insurance coverage, and support organizations in ${s.name}. State-specific information for autistic individuals and families.`,
    alternates: { canonical: `https://webearish.com/resources/by-state/${state}` },
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const s = stateResources.find(s => s.slug === state);
  if (!s) notFound();

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/resources/by-state" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← All States
        </Link>

        <div style={{ marginTop: 32, marginBottom: 40 }}>
          <span style={{ fontSize: 11, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700 }}>STATE RESOURCES</span>
          <h1 style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, letterSpacing: '-2px', margin: '12px 0 8px' }}>
            Autism Resources in {s.name}
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.5)', lineHeight: 1.6 }}>
            State-specific Medicaid programs, insurance coverage, and support organizations for autistic individuals and families in {s.name}.
          </p>
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>Medicaid Waiver Programs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {s.medicaidWaivers.map((w, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.1)', padding: '18px 20px' }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--lime)', marginBottom: 8 }}>{w.name}</div>
                <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6, margin: 0 }}>{w.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>Insurance Mandate</h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12, padding: '6px 14px', background: s.insuranceMandate ? 'rgba(184,232,135,0.1)' : 'rgba(255,123,92,0.1)', border: `1px solid ${s.insuranceMandate ? 'rgba(184,232,135,0.3)' : 'rgba(255,123,92,0.3)'}` }}>
            <span style={{ fontWeight: 900, fontSize: 13, color: s.insuranceMandate ? 'var(--lime)' : 'var(--coral)' }}>
              {s.insuranceMandate ? 'Mandate in effect' : 'No state mandate'}
            </span>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.65 }}>{s.insuranceMandateDetails}</p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>School Rights</h2>
          <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.7 }}>{s.schoolRightsNote}</p>
        </section>

        <section style={{ marginBottom: 36, background: 'rgba(255,123,92,0.06)', border: '1px solid rgba(255,123,92,0.2)', padding: '20px 24px' }}>
          <h2 style={{ fontSize: 16, fontWeight: 900, color: 'var(--coral)', marginBottom: 10 }}>Crisis Resources</h2>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.65)', lineHeight: 1.65, margin: 0 }}>{s.crisisLine}</p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 16 }}>Organizations in {s.name}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {s.notableOrgs.map(org => (
              <a key={org.url} href={org.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: 'var(--lime)', fontWeight: 700, textDecoration: 'none' }}>
                {org.name} →
              </a>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/iep" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>IEP Resource Center →</Link>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Full Resource Library →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
