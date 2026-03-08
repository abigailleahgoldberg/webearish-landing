import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Meltdown vs. Tantrum: What Is the Difference? | WeBearish',
  description: 'Understand the neurological difference between autism meltdowns and tantrums. Learn what triggers each, how to respond, and effective de-escalation strategies for parents.',
  alternates: { canonical: 'https://webearish.com/meltdown-vs-tantrum' },
};

export default function MeltdownVsTantrumPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>UNDERSTANDING BEHAVIOR</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Meltdown vs. Tantrum: What Is the Difference?
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          The terms are used interchangeably in everyday conversation, but they describe two very different experiences. For parents of autistic children, understanding that difference is one of the most practically useful things you can learn. According to the CDC MMWR 2023 report, 1 in 36 children in the United States is autistic -- and meltdowns are among the most commonly misunderstood parts of autistic neurology.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Neurological Difference</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            A tantrum is a behavioral response to not getting something a child wants. It is goal-directed. The child wants an outcome -- a toy, more screen time, a different food -- and the behavior is aimed at achieving that outcome. Tantrums tend to stop when the goal is met or when the child realizes the behavior is not working.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            A meltdown is a nervous system response to overwhelm. It is not goal-directed. The autistic person is not trying to get something or manipulate a situation. Their nervous system has exceeded its capacity to process sensory input, emotional load, or environmental demands. A meltdown is the body's involuntary response -- similar to how a computer crashes when it cannot handle the processing load.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Many autistic children cannot stop a meltdown through willpower any more than they could stop a sneeze. This is not defiance. It is neurology.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>How to Tell Them Apart</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ padding: '20px', background: 'rgba(184,232,135,0.05)', border: '1px solid rgba(184,232,135,0.15)' }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--lime)', letterSpacing: '2px', marginBottom: 14 }}>TANTRUM</div>
              {[
                'Child is aware of audience',
                'Behavior adjusts based on reaction',
                'Child can negotiate or be distracted',
                'Stops when goal is achieved',
                'Child maintains some control',
                'Often tied to a specific "want"',
                'Child can usually say what they want',
              ].map((item, i) => (
                <div key={i} style={{ fontSize: 14, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6, padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{item}</div>
              ))}
            </div>
            <div style={{ padding: '20px', background: 'rgba(255,123,92,0.05)', border: '1px solid rgba(255,123,92,0.2)' }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--coral)', letterSpacing: '2px', marginBottom: 14 }}>MELTDOWN</div>
              {[
                'Child is not managing the audience',
                'Behavior does not adjust -- it escalates',
                'Child cannot be reasoned with mid-meltdown',
                'Does not stop when a want is met',
                'Child has lost regulatory control',
                'Often no clear single trigger',
                'Child may be nonverbal during episode',
              ].map((item, i) => (
                <div key={i} style={{ fontSize: 14, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6, padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Triggers a Meltdown</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Meltdowns rarely come out of nowhere, even when they appear sudden to observers. They are usually the result of accumulated stress that finally tips over a threshold. Common contributors include:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Sensory overload', desc: 'Bright lights, loud sounds, crowded spaces, scratchy clothing, unexpected touch -- sensory input stacks up throughout the day.' },
              { label: 'Routine disruption', desc: 'Unexpected changes to plans, schedules, or environments create significant cognitive and emotional load for many autistic people.' },
              { label: 'Communication barriers', desc: 'Difficulty expressing needs or not being understood creates frustration that accumulates over time.' },
              { label: 'Emotional or social demands', desc: 'Masking, navigating social situations, or suppressing natural behaviors throughout the day is exhausting.' },
              { label: 'Physical needs', desc: 'Hunger, thirst, pain, illness, or fatigue lower the threshold. An autistic child who is hungry and in a loud environment may melt down faster.' },
              { label: 'Transitions', desc: 'Moving from one activity to another -- especially a preferred one -- without adequate preparation is a frequent trigger.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Respond to a Meltdown</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 20 }}>
            The goal during a meltdown is safety and reducing sensory load -- not correction, not teaching, not consequences. The nervous system cannot learn during a meltdown state. Anything that looks like teaching during that moment will not be absorbed and may make things worse.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Lower your own voice and body language -- calm is contagious.',
              'Reduce sensory input: dim lights, turn off sounds, move to a quieter space if possible.',
              'Give physical space. Do not crowd or restrain unless safety requires it.',
              'Limit verbal demands. Short phrases or silence is usually better than talking.',
              'Do not try to reason, explain, or discuss consequences during the meltdown.',
              'Wait it out. Meltdowns have a natural end when the nervous system reregulates.',
              'After the meltdown, once the child is calm, offer comfort -- not punishment.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0, fontSize: 13 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Respond to a Tantrum</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Because tantrums are goal-directed, different strategies apply. Consistency matters more here. Giving in to avoid the discomfort can reinforce the pattern. Calm, predictable responses work better than reactive ones. You can:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Stay calm and acknowledge the feeling without giving in to the demand.',
              'Be consistent. If the answer is no, keep it no.',
              'Avoid negotiating once limits are set. Changing the rules mid-tantrum teaches that escalation works.',
              'Name the emotion: "I can see you are really disappointed." Validation does not mean giving what was demanded.',
              'Follow through with whatever limit was stated.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>De-escalation Strategies Before the Breaking Point</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The most effective meltdown intervention happens before the meltdown. Learning your child's early warning signs -- the specific signals that precede full overwhelm -- lets you act when intervention is still possible. Common early signs include:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8, marginBottom: 20 }}>
            {[
              'Increased stimming',
              'Covering ears or eyes',
              'Shorter responses',
              'Withdrawing from activity',
              'Rigid refusal',
              'Increased clumsiness',
              'Flushed face or sweating',
              'Pupils dilating',
            ].map((sign, i) => (
              <div key={i} style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.08)', fontSize: 13, color: 'rgba(250,250,248,0.6)' }}>
                {sign}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            When you see early signs, de-escalation strategies include: offering a sensory break, reducing demands, moving to a quieter space, providing a preferred item, or simply staying nearby without speaking. The earlier you intervene, the easier it is.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>A Note on Public Meltdowns</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Public meltdowns are among the most stressful experiences for autistic families. Strangers stare. People offer unsolicited comments. Parents feel judged. None of that changes what your child needs in that moment, which is the same thing they would need at home: safety, reduced input, and time.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            You do not owe anyone an explanation. You do not need to manage their discomfort. Focus on your child. If it helps, carry a simple card that explains your child is autistic and experiencing sensory overload. Some parents find this reduces the social pressure enough to focus on what matters.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>All Resources →</Link>
            <Link href="/blog" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>WeBearish Blog →</Link>
            <Link href="/contact" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Contact Us →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Guide →</Link>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism and Anxiety →</Link>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
