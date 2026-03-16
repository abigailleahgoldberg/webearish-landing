import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'During a Meltdown: What to Do | WeBearish',
  description: 'What to do — and what not to do — when your autistic child is in the middle of a meltdown. Safety, de-escalation, and keeping your own calm.',
  alternates: { canonical: 'https://webearish.com/meltdown-vs-tantrum/during' },
};

export default function DuringMeltdownPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/meltdown-vs-tantrum" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Meltdowns</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>During a Meltdown</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>MELTDOWNS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          During a Meltdown: What to Do
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          When an autistic meltdown is in full progress, the nervous system has exceeded its capacity to self-regulate. Your child is not choosing their behavior — they are in a neurological storm. The goal is not to stop the meltdown faster or teach a lesson. The goal is to keep everyone safe, reduce sensory input as much as possible, and wait. Understanding what is happening in your child's brain during a meltdown changes everything about how you respond.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is informational only. If your child's meltdowns involve significant self-injury, consult a professional familiar with autism.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Is Happening During a Meltdown</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            A meltdown is a nervous system overwhelm event. The brain's threat response is activated. The prefrontal cortex — the part responsible for reasoning, decision-making, and impulse control — is effectively offline. Your child cannot think their way out of a meltdown, comply with instructions, or learn anything in this state. This is not defiance. It is neurology.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Reasoning does not work', desc: 'Verbal reasoning requires prefrontal cortex access. During a meltdown, that access is cut off. Arguing, explaining consequences, or asking your child to "calm down and talk about this" adds language processing demand to an already overloaded system and makes the meltdown worse.' },
              { label: 'The child is in genuine distress', desc: 'Meltdowns are not pleasant for the autistic child. They are frightening, exhausting, and often followed by shame or emotional hangover. The behavior is not manipulative — it is the expression of a system in crisis.' },
              { label: 'Duration varies widely', desc: 'Meltdowns can last anywhere from a few minutes to an hour or more. Attempting to shorten a meltdown through escalating interventions often lengthens it. The fastest path through is usually the path of least additional input.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What to Do</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Ensure safety first', desc: 'Remove objects the child could be hurt by. Create physical space around the child. If there are other children nearby, move them away — not as punishment for the child having the meltdown, but to reduce audience-related pressure and protect everyone.' },
              { label: 'Reduce all sensory input', desc: 'Turn off lights if possible. Lower or remove sounds. Get other people to leave the space. Remove competing visual information. The nervous system is flooded — every additional input extends the meltdown.' },
              { label: 'Stay physically calm', desc: 'Your nervous system is regulated. Your child\'s is not. The presence of a calm adult body — slow breathing, soft movements, quiet voice or no voice — helps. An escalated adult response escalates the child further.' },
              { label: 'Use minimal language', desc: 'One or two short phrases at most, delivered calmly, then silence. "I\'m here. You\'re safe." No more than that. Repeated verbal prompts, questions, or reasoning add cognitive and auditory load to an overwhelmed system.' },
              { label: 'Do not use physical restraint unless safety requires it', desc: 'Unless the child is in immediate physical danger, avoid restraint. For many autistic children, unexpected physical contact during a meltdown intensifies panic and extends duration. If restraint is ever necessary, it should be trained, not improvised.' },
              { label: 'Let the meltdown complete', desc: 'There is no shortcut through a nervous system overload event. Attempting to contain, redirect, or punish the meltdown in progress typically prolongs it. Your job is safety and presence, not speed.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Not to Do</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Do not demand compliance, eye contact, or verbal responses.',
              'Do not raise your voice — volume adds auditory overwhelm.',
              'Do not threaten consequences during the meltdown.',
              'Do not try to hold a processing conversation about what happened.',
              'Do not put the child in time-out or isolate them punitively.',
              'Do not use the phrase "calm down" — it adds a demand the child cannot currently meet.',
              'Do not shame or lecture — the child will likely have no memory of parts of the meltdown and cannot integrate lessons learned during one.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>–</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Managing Your Own Regulation</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Watching your child in a meltdown is genuinely distressing. You may feel helpless, embarrassed, afraid, or angry — all of these are human responses. Your ability to stay regulated during your child's meltdown is the most important tool you have, and it needs to be actively cultivated. Deep breathing, physical grounding, knowing the meltdown will end — these are your resources. Your calm is the environment your child's nervous system is returning to.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum/before" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Warning Signs →</Link>
            <Link href="/meltdown-vs-tantrum/after" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>After a Meltdown →</Link>
            <Link href="/meltdown-vs-tantrum/in-public" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdowns in Public →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown Hub →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools →</Link>
            <Link href="/parents/self-care" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parent Self-Care →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
