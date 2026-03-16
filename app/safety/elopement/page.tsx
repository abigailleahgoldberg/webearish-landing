import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism Elopement: Prevention and Safety Strategies | WeBearish',
  description: 'Understanding why autistic children elope, evidence-based prevention strategies, safety tools, and what to do when elopement happens.',
  alternates: { canonical: 'https://webearish.com/safety/elopement' },
};

export default function ElopementPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Safety Guide</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>SAFETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Elopement: Why It Happens and How to Prevent It
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Elopement — when an autistic person wanders or bolts from a safe environment — is one of the most serious safety risks for autistic children. Nearly half of autistic children have eloped at some point. Understanding why it happens is the first step to preventing it.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Autistic Children Elope</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Goal-directed elopement', desc: 'The child is heading toward something — a water source, a familiar place, a special interest destination. This is the most common type. The child has a destination in mind.' },
              { label: 'Escape-motivated elopement', desc: 'The child is moving away from something — sensory overload, a demand, an overwhelming environment. This often happens in busy or unpredictable settings.' },
              { label: 'Sensory-seeking', desc: 'Running, spinning, and moving through open space can be deeply regulating for some autistic people. Elopement may be a bid for proprioceptive or vestibular input.' },
              { label: 'Limited awareness of danger', desc: 'Many autistic children have not yet developed the concept of traffic, drowning risk, or getting lost. Safety awareness is a skill, not an instinct, and it requires explicit teaching.' },
              { label: 'Communication breakdown', desc: 'An autistic child who cannot communicate a need verbally may elope to meet that need directly — particularly toward water, food, or familiar places.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Prevention Strategies</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Environmental barriers', desc: 'Door alarms, high locks, door knob covers, fencing with self-closing gates, and pool barriers are the highest-impact physical interventions. Layer them — no single barrier is reliable.' },
              { label: 'GPS tracking devices', desc: 'Wearable GPS devices designed for elopement situations provide real-time location. Angel Sense, Jiobit, and Apple AirTags (in shoes or backpacks) are options families use.' },
              { label: 'Medical ID', desc: 'Emergency ID bracelets or shoe tags with name, emergency contact, and "autism/nonverbal" information are critical. Many autistic children will not be able to provide this information themselves in a crisis.' },
              { label: 'Notify neighbors and community', desc: 'Neighbors who know about elopement risk become a safety net. Local police departments can often register autistic children in vulnerable persons registries.' },
              { label: 'Address the underlying trigger', desc: 'If elopement is consistently toward water, increase supervised water access. If it\'s escape-motivated, identify and reduce the specific triggers. Meeting the underlying need reduces elopement attempts.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>If Your Child Elopes: What to Do</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Call 911 immediately. Autistic children near water or traffic are in immediate danger. Do not wait.',
              'Check water first. Drowning is the leading cause of death in elopement incidents. Check all nearby water sources before anywhere else.',
              'Share a recent photo and communication information — "may not respond to name," "attracted to water," "responds to [specific phrase]."',
              'Notify school immediately if elopement occurred from school grounds. Request a safety plan update.',
              'After the child is safe: do not punish. Focus on understanding what triggered the elopement and strengthening prevention.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>{i + 1}.</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. Elopement is a safety emergency that requires practical preparation, not shame. Every family with an elopement-risk child should have a written safety plan before it is needed.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/safety" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Safety Guide →</Link>
            <Link href="/safety/water" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Water Safety →</Link>
            <Link href="/safety/emergency-id" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Emergency ID →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
