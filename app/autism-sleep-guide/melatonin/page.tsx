import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Melatonin Guide for Parents of Autistic Children | WeBearish',
  description: 'What parents need to know about melatonin for autistic children — how it works, dosing considerations, timing, forms, and when to talk to your doctor.',
  alternates: { canonical: 'https://webearish.com/autism-sleep-guide/melatonin' },
};

export default function SleepMelatoninPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-sleep-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sleep Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Melatonin Guide</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SLEEP GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          The Melatonin Guide for Parents
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Melatonin is one of the most commonly used sleep supports for autistic children. Research suggests that many autistic people have differences in their melatonin production — lower levels overall, later timing of release, or irregular patterns. This helps explain why sleep onset is so difficult for so many autistic children, even when the environment and routine are good. Melatonin can be a genuinely useful tool, but it works best when used correctly.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. Always consult your child's pediatrician before starting melatonin, particularly for young children or those on other medications.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How Melatonin Works</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Melatonin is a hormone produced by the pineal gland that signals to the body that nighttime has arrived. It does not directly cause sleep — it shifts the circadian clock and creates the physiological conditions where sleep becomes accessible. Supplemental melatonin works by adding to what the body produces, and its timing relative to the desired sleep time matters more than the dose.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Melatonin as a timing signal, not a sedative', desc: 'Many parents give melatonin like a sleep medication — at bedtime, in higher doses to ensure effect. But melatonin works best given 30-60 minutes before target sleep time, in low doses, to signal to the circadian system that sleep is approaching. Giving too much too late does not help and can cause grogginess the next morning.' },
              { label: 'Low doses are often more effective', desc: 'Standard melatonin products in the US contain far more melatonin than is physiologically effective. Research suggests 0.5-1mg is often sufficient for children. Higher doses (3-5mg, which are commonly sold) can suppress the body\'s own melatonin production over time and cause next-day grogginess. Start low.' },
              { label: 'Consistent timing is more important than dose', desc: 'Giving melatonin at the same time each night, timed to the desired sleep onset, builds a consistent circadian signal. Giving it irregularly or at different times each night reduces its effectiveness even if the dose is appropriate.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Forms and Administration</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Getting melatonin into an autistic child who is selective about foods, textures, and tastes is its own challenge. These forms exist:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Gummies', desc: 'The most accepted form for many children due to taste and texture. Watch for added sugars and artificial dyes that can affect behavior. Look for gummies that are as clean-ingredient as possible.' },
              { label: 'Liquid drops', desc: 'Allows precise low dosing. Can be added to a small amount of food or drink the child will accept. Taste varies by brand — some are more tolerable than others.' },
              { label: 'Chewable tablets', desc: 'Available in very low doses and often flavored. A good option for children who accept tablet textures.' },
              { label: 'Regular tablets', desc: 'Appropriate for older children and teens who can swallow tablets. More precise dosing than gummies.' },
              { label: 'Extended-release formulations', desc: 'May help with night waking rather than just sleep onset. If your child falls asleep normally but wakes repeatedly, extended-release melatonin is worth discussing with your doctor.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Melatonin Is a Tool, Not the Whole Solution</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Melatonin works best alongside good sleep hygiene. If the environment, routine, and behavioral factors are not addressed, melatonin alone will not produce lasting improvement. Think of it as a tool that makes the other work more effective, not a substitute for it.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Use melatonin alongside a consistent bedtime routine, not instead of one',
              'Reduce light exposure in the hour before giving melatonin — light blunts melatonin\'s effects',
              'Monitor for next-day grogginess, which suggests the dose is too high or the timing is off',
              'Do not increase the dose without professional guidance if the current dose is not working — timing and other factors are more likely the issue',
              'Discuss longer-term use with your pediatrician — most research on pediatric melatonin is for short to medium-term use',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-sleep-guide/environment" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Environment →</Link>
            <Link href="/autism-sleep-guide/routines" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Bedtime Routines →</Link>
            <Link href="/autism-sleep-guide/by-age" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep by Age →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide Hub →</Link>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism &amp; Anxiety →</Link>
            <Link href="/resources" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>All Resources →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
