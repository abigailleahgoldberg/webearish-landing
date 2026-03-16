import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Camouflage in Autistic Girls | WeBearish',
  description: 'How autistic girls use social camouflage to blend in, why it works so well that professionals miss the autism, and the hidden toll it takes.',
  alternates: { canonical: 'https://webearish.com/autism-in-girls/social-camouflage' },
};

export default function SocialCamouflagePage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/autism-in-girls" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Autism in Girls</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM IN GIRLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Social Camouflage: Blending In at All Costs
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Social camouflage goes beyond masking. Where masking suppresses autistic traits, camouflage is an active performance — observing, learning, and replicating social behavior with such accuracy that even trained clinicians miss the autism underneath. Many autistic girls become experts at this by age 8.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Components of Social Camouflage</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Mimicry', desc: 'Directly copying the speech patterns, mannerisms, vocabulary, and social habits of neurotypical peers. Autistic girls often shift their presentation to match whoever they are spending time with — chameleon-like adaptation that reads as social ease.' },
              { label: 'Scripting', desc: 'Building a mental library of social scripts for common situations — how to greet someone, how to respond to "how are you?", how to behave at a birthday party. Scripts fill the gap where intuitive social processing isn\'t happening.' },
              { label: 'Retrospective analysis', desc: 'Spending significant mental energy after social interactions analyzing what happened, what was said, what it meant, what should have been said differently. This is the work that makes the next interaction look more natural.' },
              { label: 'Strategic friendship', desc: 'Autistic girls sometimes consciously choose one or two close friends who are easy to read, predictable, or dominant — reducing the cognitive load of social navigation.' },
              { label: 'Self-monitoring', desc: 'Constant internal checking of facial expression, posture, eye contact level, tone, and topic — running a background process that neurotypical people run automatically, but autistic girls must run consciously.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why This Gets Missed in Assessment</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Clinical autism assessments observe behavior. They cannot observe the internal effort required to produce it. An autistic girl who presents as socially competent in a clinic setting may have spent weeks preparing for the appointment, exhausted herself maintaining the performance, and crashed completely on the drive home.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            This is why parent and self-report is critical in evaluation — not just structured observation. Assessors who only use observation tools and don't ask "how much effort does this take?" will miss the autism hidden behind a successful camouflage.
          </p>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. "She seemed fine in the office" is not evidence that she is fine. Ask how hard she was working to seem fine.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/autism-in-girls/masking" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Masking →</Link>
            <Link href="/autism-in-girls/late-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Late Diagnosis →</Link>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Getting a Diagnosis →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
