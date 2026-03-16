import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IEP Goals That Actually Matter | WeBearish',
  description: 'What makes IEP goals meaningful versus performative — how to write, evaluate, and advocate for goals that reflect your child\'s real needs.',
  alternates: { canonical: 'https://webearish.com/iep/goals' },
};

export default function IEPGoalsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/iep" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>IEP</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>IEP Goals</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>IEP</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          IEP Goals That Actually Matter
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          IEP goals are supposed to reflect what your child needs to make meaningful educational progress. In practice, IEP goals are often vague, unmeasurable, recycled from previous years, or disconnected from how your child actually experiences school. Learning to evaluate IEP goals — and to advocate for ones that actually reflect your child's needs — is one of the most important skills an autism parent can develop.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. For specific legal questions about IEP goals, consult a special education advocate or attorney.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Makes a Good IEP Goal</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            A meaningful IEP goal has these qualities:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Specific', desc: 'Not "improve communication skills" but "will use AAC device to request a preferred item in 4 out of 5 opportunities across 3 school settings." The more specific, the more useful.' },
              { label: 'Measurable', desc: 'You should be able to answer, with data, whether the goal was met. Goals that cannot be measured with data cannot be evaluated, which means the school can claim progress without demonstrating it.' },
              { label: 'Meaningful', desc: 'The goal should reflect something that actually matters for your child\'s life and participation — not something that is convenient to teach or easy to measure. Ask: if this goal is met, how does my child\'s life get better?' },
              { label: 'Achievable and ambitious', desc: 'A good goal is achievable in a year but requires real growth. Goals that are too easy (the child can already do it) or too hard (there is no realistic path to it in 12 months) are both problematic.' },
              { label: 'Based on present levels', desc: 'Goals should be anchored to the Present Levels of Academic and Functional Performance (PLAAFP) section of the IEP, which describes where the child is right now. If the PLAAFP is vague, the goals cannot be precise.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Red Flags in IEP Goals</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Goals copied from the previous year without revision — this suggests no meaningful assessment of actual growth occurred.',
              'Goals focused on compliance rather than skills: "will follow directions with two or fewer prompts." Compliance goals are not functional skills goals.',
              'Unmeasurable goals: "will improve social skills." What social skills? How measured? In what context?',
              'Goals that are already in your child\'s repertoire — goals the child can already meet are not growth goals.',
              'An absence of goals in areas of clear need. If your child struggles with self-regulation and the IEP has no regulation goal, that is a problem.',
              'Goals without identified service providers or service minutes — who is responsible for working on this goal, and for how many minutes per week?',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>–</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Key Goal Areas to Advocate For</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Communication goals', desc: 'For any autistic child, communication goals should be present and reflect the child\'s actual communication system — not just speech. If your child uses AAC, the goals should address AAC use specifically.' },
              { label: 'Self-regulation and sensory goals', desc: 'Regulation is foundational to learning. Many IEPs overlook it entirely. Advocate for goals that address the sensory and emotional regulation skills your child needs to access education.' },
              { label: 'Executive function and independence goals', desc: 'For school-age children, goals around organization, task initiation, transitions, and self-monitoring are critical for long-term independence and do not often appear in IEPs without parent advocacy.' },
              { label: 'Generalization goals', desc: 'Skills learned in a therapy room that do not generalize to classroom and community are not functional. Advocate for goals that explicitly address skill use across multiple settings.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/iep/meeting-prep" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meeting Prep →</Link>
            <Link href="/iep/disputes" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Disputes →</Link>
            <Link href="/iep/transition" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Transition Planning →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Hub →</Link>
            <Link href="/school-rights" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Rights →</Link>
            <Link href="/autism-school-accommodations" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Accommodations →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
