import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Autistic Burnout: Causes, Signs, and Recovery | WeBearish",
  description: "What autistic burnout is, how it differs from depression and occupational burnout, what causes it, and how recovery works.",
  alternates: { canonical: "https://webearish.com/adults/burnout" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/adults" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Adults Hub
        </Link>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>Autistic Burnout</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Autistic Burnout Is</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Autistic burnout is a state of profound physical, mental, and emotional exhaustion caused by sustained masking, chronic sensory overload, and long-term demands that exceed the nervous system's capacity. It is distinct from occupational burnout and distinct from depression, though it can occur alongside either.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Signs of Autistic Burnout</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Common signs include: significant increase in sensory sensitivity, loss of previously held skills (language, cooking, reading, self-care), withdrawal, inability to mask or maintain social performance, exhaustion that sleep does not resolve, increase in meltdowns or shutdowns, and feeling fundamentally unable to function in ways that previously felt manageable.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How It Differs from Depression</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Autistic burnout and depression share some features but are different. Burnout is specifically caused by sustained demands and masking. Depression is a mood disorder with different neurological mechanisms. The key practical difference: reducing demands and masking requirements is the treatment for burnout. This may or may not address depression. Both can be present simultaneously.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Recovery</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Recovery from autistic burnout requires removing demands, not adding coping strategies. The primary intervention is rest: reduced social demands, reduced sensory load, permission to stop masking, and reduced performance expectations. Recovery takes longer than most people expect, often months. Burnout that is pushed through without recovery typically worsens.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Prevention</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Burnout is preventable. The conditions that cause it are identifiable: too much masking, too many sensory demands, too little recovery time. Building in protected recovery time, reducing the need to mask in at least some environments, and having honest relationships with at least some people who know your autistic needs significantly reduce burnout risk.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Resource Library →</Link>
          <Link href="/voices" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Autistic Voices →</Link>
        </div>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginTop: 40 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/adults/late-diagnosis" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Late Diagnosis Hub →</Link>
            <Link href="/safety/crisis" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Crisis Resources →</Link>
            <Link href="/voices" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Autistic Voices →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
