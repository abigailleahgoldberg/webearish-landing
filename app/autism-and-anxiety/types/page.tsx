import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Types of Anxiety in Autistic Children | WeBearish',
  description: 'Social anxiety, sensory anxiety, anticipatory anxiety, separation anxiety, and generalized anxiety in autistic children — what each looks like and how to recognize them.',
  alternates: { canonical: 'https://webearish.com/autism-and-anxiety/types' },
};

export default function AnxietyTypesPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-and-anxiety" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Autism &amp; Anxiety</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Types of Anxiety</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM &amp; ANXIETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Types of Anxiety in Autistic Children
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Anxiety is one of the most common co-occurring experiences in autistic children. Research suggests that between 40 and 80 percent of autistic children experience anxiety significant enough to affect daily functioning. But anxiety in autistic children does not always look like what parents expect — it often shows up as meltdowns, refusal, physical complaints, or heightened rigidity rather than visible worry.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Speak with a qualified professional for diagnosis and treatment.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Anxiety Runs High in Autistic Children</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The autistic nervous system is wired for heightened threat detection. Unpredictability, sensory overwhelm, and social confusion all activate the same stress response systems. When the world constantly presents unexpected input, the baseline anxiety level rises. Understanding the specific type of anxiety your child experiences points you toward the right support.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Five Main Types</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                label: 'Social Anxiety',
                desc: 'Fear and avoidance of social situations — not shyness. Autistic children with social anxiety may refuse school events, become physically ill before parties, or shut down in group settings. The difference between autistic social preference (enjoying alone time) and social anxiety (fearing social judgment or getting things "wrong") matters for how you support your child. Social anxiety involves distress about social interaction, not just preference to avoid it.',
                tips: ['Validate the fear without avoiding all social situations', 'Prepare in advance with detailed explanations of what will happen', 'Give your child a defined role or job at social events', 'Practice social scripts for common situations at home first'],
              },
              {
                label: 'Sensory Anxiety',
                desc: 'Anxiety triggered by sensory environments — loud places, crowded spaces, unpredictable textures or sounds. This type is often missed because it presents as avoidance of specific environments rather than "worry." A child who refuses to go to the grocery store may not be being difficult — they may be experiencing genuine dread of the sensory overload that awaits them. Sensory anxiety and sensory processing differences are closely linked.',
                tips: ['Identify the specific sensory triggers (sound? smell? crowds? lighting?)', 'Use sensory tools proactively before entering difficult environments', 'Create clear exit plans so your child knows they can leave', 'Map out which environments are high-stress and reduce unnecessary exposure'],
              },
              {
                label: 'Anticipatory Anxiety',
                desc: 'Intense anxiety about upcoming events — often disproportionate to the event itself. This is the anxiety that starts days before a school picture day, a doctor\'s appointment, or a birthday party. The anticipation period can be more distressing than the event. Autistic children often have difficulty with time perception and predicting how future events will feel, which amplifies anticipatory anxiety.',
                tips: ['Use visual schedules showing what happens leading up to and through the event', 'Give just enough notice — not too far in advance for high-anxiety children', 'Walk through the event step by step in conversation or visual form', 'Celebrate completion of difficult events to build positive associations'],
              },
              {
                label: 'Separation Anxiety',
                desc: 'Intense distress when separated from primary caregivers or familiar environments. While developmentally normal at young ages, persistent separation anxiety in autistic children often reflects a genuine safety concern — the caregiver is the person who understands the child\'s needs, communicates for them, or manages sensory accommodations. The separation represents a real loss of their regulatory support system.',
                tips: ['Create transition objects that carry the caregiver\'s scent or image', 'Build in goodbye rituals that are consistent and brief', 'Practice short separations with positive outcomes before longer ones', 'Work with school staff on how to support the child during transitions'],
              },
              {
                label: 'Generalized Anxiety',
                desc: 'Pervasive, unfocused worry about many different things. Autistic children with generalized anxiety may worry about health, safety, the future, whether people like them, whether rules will change, or whether their routines will be disrupted. This anxiety is wide-ranging and shifts between topics. It often intensifies during periods of change or transition and may manifest as repetitive questioning — asking the same question many times seeking reassurance.',
                tips: ['Avoid giving excessive reassurance that perpetuates the cycle', 'Teach your child to externalize worry ("put the worry in a box")', 'Maintain predictable routines during high-anxiety periods', 'Work with a professional who understands anxiety in autistic children'],
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: '20px 22px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.1)', marginBottom: 4 }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                  <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0, fontSize: 18 }}>→</span>
                  <span style={{ fontWeight: 800, fontSize: 17, color: 'rgba(250,250,248,0.95)' }}>{item.label}</span>
                </div>
                <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.75, marginBottom: 14, paddingLeft: 30 }}>{item.desc}</p>
                <div style={{ paddingLeft: 30 }}>
                  <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', marginBottom: 8, fontWeight: 700 }}>WHAT HELPS</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {item.tips.map((tip, j) => (
                      <div key={j} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--coral)', flexShrink: 0 }}>–</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Anxiety Looks Like in Autistic Children</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Anxiety in autistic children often does not look like visible worry or crying. Watch for these expressions:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Increased rigidity — demanding more routine, more sameness, more control over the environment',
              'Increased stimming — more frequent or intense repetitive movements or sounds',
              'Meltdowns that seem disproportionate — which are often anxiety breaking through after a long buildup',
              'Physical complaints — stomachaches, headaches, nausea that do not have a medical cause',
              'Repetitive questioning — seeking reassurance about the same topic many times',
              'Refusal behaviors — refusing to go to school, to eat, or to engage in previously enjoyed activities',
              'Sleep disruption — difficulty falling asleep, waking in the night, nightmares',
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
            <Link href="/autism-and-anxiety/coping" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Coping Strategies →</Link>
            <Link href="/autism-and-anxiety/at-school" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Anxiety at School →</Link>
            <Link href="/autism-and-anxiety/when-to-seek-help" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>When to Seek Help →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism &amp; Anxiety Hub →</Link>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown vs. Tantrum →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Guide →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
