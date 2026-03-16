import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'After a Meltdown: Recovery | WeBearish',
  description: 'What to do after an autistic meltdown — supporting recovery, reconnecting with your child, and learning from what happened.',
  alternates: { canonical: 'https://webearish.com/meltdown-vs-tantrum/after' },
};

export default function AfterMeltdownPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/meltdown-vs-tantrum" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Meltdowns</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>After a Meltdown</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>MELTDOWNS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          After a Meltdown: Recovery
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          The meltdown has ended. Now what? The recovery phase is critically important — it shapes how your child feels about themselves, how quickly their nervous system returns to baseline, and what you can learn to prevent the next escalation. Recovery is not about accountability or consequences. It is about safety, reconnection, and restoration.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. Work with professionals who understand your child for individualized support plans.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Immediately After: The Fragile Window</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The period immediately after a meltdown peaks is a fragile, vulnerable state. The nervous system is exhausted and depleted. Your child may appear calm but is not yet at baseline. A second trigger during early recovery can restart the escalation cycle.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Maintain the low-input environment', desc: 'Do not rush back to normal activity, demands, or conversation. Keep the environment quiet and calm. Continue to limit sensory input until the child shows genuine signs of return to baseline — normal responsiveness, regulated body posture, returning to preferred activities.' },
              { label: 'Offer comfort without demands', desc: 'Some children want physical closeness after a meltdown; others need continued space. Follow the child\'s lead. Offer quietly — "Do you want a hug?" without requiring an answer or reaction.' },
              { label: 'Provide water, food, and rest if needed', desc: 'Meltdowns are physically exhausting. The physiological stress response consumes significant energy. Hydration and light food support physical recovery. Some children sleep after meltdowns and this should be allowed.' },
              { label: 'Do not process immediately', desc: 'The brain is not ready for reflection directly after a meltdown. The prefrontal cortex that handles language, reasoning, and insight is recovering. Do not attempt to have "the talk" about what happened, what they should do next time, or consequences — not yet.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Reconnecting After the Storm</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Reconnect without shame', desc: 'When your child is genuinely back to baseline, reconnect warmly. Do not reference the meltdown with shame or disappointment. A simple "I love you. I\'m glad you\'re okay." is the right message. Shame is neurologically counterproductive and emotionally harmful.' },
              { label: 'Address any harm that occurred', desc: 'If the child hurt themselves, hurt someone else, or broke something during the meltdown, address that matter-of-factly when they are truly regulated. "When you were really upset, you broke the window. We need to talk about that." This is different from shaming the meltdown itself.' },
              { label: 'Return to preferred activity', desc: 'Allowing the child to return to a preferred, regulating activity after a meltdown is appropriate. This is not rewarding bad behavior — a meltdown is not a behavior choice. Preferred activities rebuild the nervous system to baseline.' },
              { label: 'Check in with yourself', desc: 'Meltdowns are hard on parents too. After your child is safe, check your own state. Are you still dysregulated? Hungry, exhausted, emotionally depleted? Your needs matter. What happened was hard. Give yourself the same compassion.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Learning from What Happened</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Once everyone is genuinely recovered — often hours or the following day — reflect on the meltdown as data:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'What was the antecedent? What happened in the hours before the meltdown that may have loaded the sensory tank?',
              'What was the trigger? Was it identifiable?',
              'What warning signs appeared? Were they caught?',
              'What helped? What made it worse?',
              'Is there a pattern? Same time of day, same location, same trigger type?',
              'What environmental changes could reduce the likelihood of this specific trigger occurring?',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginTop: 16 }}>
            Keep a simple log. Patterns often reveal preventable triggers. Knowing what fills the sensory tank and what drains it gives you the ability to manage load across the day — not just respond to the moment of overflow.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum/before" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Warning Signs →</Link>
            <Link href="/meltdown-vs-tantrum/shutdown" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Shutdowns →</Link>
            <Link href="/meltdown-vs-tantrum/in-public" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdowns in Public →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown Hub →</Link>
            <Link href="/parents/self-care" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parent Self-Care →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
