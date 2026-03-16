import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Building the Perfect Sleep Environment for Autistic Children | WeBearish',
  description: 'How to set up a sleep environment that works for autistic children — lighting, sound, temperature, bedding, and sensory considerations for better sleep.',
  alternates: { canonical: 'https://webearish.com/autism-sleep-guide/environment' },
};

export default function SleepEnvironmentPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-sleep-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sleep Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Sleep Environment</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SLEEP GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Building the Perfect Sleep Environment
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Sleep problems affect between 40 and 80 percent of autistic children. While there are many contributors to autistic sleep difficulties — melatonin dysregulation, anxiety, sensory processing — the sleep environment is one of the most controllable factors. An environment built around your child's specific sensory needs can significantly improve sleep onset time and sleep quality.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Speak with a qualified professional for sleep concerns.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Light: The Most Powerful Environmental Factor</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Light is the primary regulator of the sleep-wake cycle. For autistic children who may already have melatonin production irregularities, light management in the sleep environment is critical.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Blackout curtains', desc: 'These are non-negotiable for many autistic children. Light coming in from streetlights, car headlights, or early morning sun can prevent sleep onset and cause early waking. Heavy blackout curtains — secured around all edges to prevent light leaking — create a dark environment regardless of outdoor conditions.' },
              { label: 'No screens one hour before bed', desc: 'Blue light from screens suppresses melatonin production. For autistic children who may already have low melatonin levels, screen use close to bedtime further delays sleep. The transition away from screens is often difficult — build it into the routine with a clear visual signal of screen-off time.' },
              { label: 'Dim warm lighting in the hour before bed', desc: 'Switch to warm, dim lighting (red-spectrum or amber bulbs) in the bedroom for the hour before sleep. This signals to the body that sleep is approaching. Smart bulbs that automatically dim on a schedule are useful for children who resist manual changes.' },
              { label: 'Night lights that do not disrupt sleep', desc: 'If your child needs a night light, choose one that emits red or amber light rather than white or blue light. Red-spectrum light has the least impact on melatonin production and is a good compromise for children who are afraid of complete darkness.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Sound Management</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Auditory hypersensitivity is one of the most common sensory profiles in autistic children, and nighttime sounds are a major sleep disruptor. The goal is not silence — it is predictable, consistent sound.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'White noise machines mask unpredictable environmental sounds (traffic, siblings, household sounds) with consistent background noise that the brain filters out',
              'Pink noise or brown noise may be preferable to white noise for some children — experiment with different frequencies',
              'A fan provides both white noise and temperature regulation',
              'If the child wears noise-canceling headphones comfortably, these can be used for sleep onset — some children sleep with them through the night',
              'Minimize household noise outside the bedroom during sleep onset — other family members with TVs or loud conversation can prevent sleep even through closed doors',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Temperature and Bedding</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Temperature sensitivity is common in autistic children. The right bedding and room temperature dramatically affects sleep quality.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Room temperature', desc: 'Most sleep research recommends 65-68°F (18-20°C) for optimal sleep. For autistic children who run hot, a slightly cooler room or a fan may be necessary. For children who are temperature-sensitive and cold, extra blankets or warmer pajamas are preferable to heating the whole room.' },
              { label: 'Weighted blankets', desc: 'Weighted blankets provide deep pressure input that calms the nervous system for many autistic children. The appropriate weight is approximately 10 percent of the child\'s body weight. Not all autistic children respond positively — some find pressure aversive. Introduce during daytime first to test the response before using for sleep.' },
              { label: 'Seam-free and tag-free bedding and pajamas', desc: 'Tactile sensitivity means that seams, tags, or rough textures in sleepwear and bedding can prevent sleep even when everything else is perfect. Seamless socks, tagless pajamas, and smooth-weave sheets address these specific triggers.' },
              { label: 'Consistent bedding', desc: 'The same pillow, the same blanket, in the same position matters for many autistic children. Routines extend to the physical sleep setup. Changing bedding unexpectedly — even washing sheets changes the smell — can disrupt sleep for days for some children.' },
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
            <Link href="/autism-sleep-guide/routines" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Bedtime Routines →</Link>
            <Link href="/autism-sleep-guide/sensory-tools" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Sleep Tools →</Link>
            <Link href="/autism-sleep-guide/melatonin" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Melatonin Guide →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide Hub →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Guide →</Link>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism &amp; Anxiety →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
