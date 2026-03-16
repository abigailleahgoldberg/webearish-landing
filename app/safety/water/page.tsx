import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism and Water Safety | WeBearish',
  description: 'Water is the leading cause of death in autistic elopement. Learn why autistic children are drawn to water, how to build water safety skills, and what prevention looks like.',
  alternates: { canonical: 'https://webearish.com/safety/water' },
};

export default function WaterSafetyPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Safety Guide</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>SAFETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Water Safety for Autistic Children
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Drowning is the leading cause of accidental death in autistic children, accounting for approximately 91% of deaths following elopement incidents in children under age 15. Autistic children are drawn to water — and water is everywhere. This requires active, ongoing safety planning, not hope.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Autistic Children Are Drawn to Water</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Sensory regulation', desc: 'Water is deeply regulating for many autistic people. The visual movement, the sound, the tactile input, and the proprioceptive feedback of water immersion can be intensely satisfying.' },
              { label: 'Special interest', desc: 'Some autistic children develop water as a specific intense interest — watching it, splashing, exploring drainage, streams, and puddles.' },
              { label: 'Predictability', desc: 'Water behaves consistently. It responds to touch in the same way every time. For a child who finds social environments unpredictable, water is reliable.' },
              { label: 'Lack of perceived danger', desc: 'Autistic children may not have developed awareness of drowning risk — particularly if they have had positive water experiences. The danger is not intuitive.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Prevention: Layers of Protection</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Water safety for autistic children requires layered protection. No single intervention is enough.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Physical barriers', desc: 'Four-sided pool fencing with self-latching, self-closing gates. Door alarms for any door that leads toward water. Pool covers and alarms. These are the most immediately impactful interventions.' },
              { label: 'Swimming lessons', desc: 'Autistic children can and should learn to swim. Look for instructors with autism experience — many programs exist specifically for this. The ability to swim is a survival skill, not a luxury.' },
              { label: 'Life jackets', desc: 'A properly fitted Coast Guard-approved life jacket should be worn any time your child is near open water — not just on boats. Build it into the routine before resistance develops.' },
              { label: 'Active supervision', desc: '"Touch supervision" — staying within arm\'s reach — is the standard for autistic children near water. Passive supervision (watching from across the pool) is not adequate.' },
              { label: 'GPS devices', desc: 'A wearable GPS device provides real-time location if your child elopes toward water.' },
              { label: 'Teaching water safety concepts', desc: 'Use social stories, visual supports, and practice scenarios to teach "water is for swimming with a grown-up only." Repeat, reinforce, practice.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Water Sources to Account For</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            "Water safety" is not just about pools. Any water source presents risk.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Pools — at home, at neighbors\' homes, community centers',
              'Ponds, lakes, and retention ponds — including decorative HOA ponds',
              'Streams, creeks, and rivers near the home',
              'Bathtubs — drowning risk exists at any depth for young children',
              'Drainage ditches following rain',
              'Buckets and containers of standing water',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>--</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. Water safety planning is one of the most important things you can do for an autistic child who is drawn to water. Start now.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Safety Guide →</Link>
            <Link href="/safety/elopement" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Elopement →</Link>
            <Link href="/safety/emergency-id" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Emergency ID →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
