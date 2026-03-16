import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'When to Seek Help for Autism Anxiety | WeBearish',
  description: 'How to know when your autistic child\'s anxiety needs professional support — what signs to watch for, what kind of help to look for, and what to avoid.',
  alternates: { canonical: 'https://webearish.com/autism-and-anxiety/when-to-seek-help' },
};

export default function AnxietyWhenToSeekHelpPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-and-anxiety" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Autism &amp; Anxiety</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>When to Seek Help</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM &amp; ANXIETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          When to Seek Help for Anxiety
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Some level of anxiety is part of the autistic experience for many children. But there is a threshold where anxiety stops being a manageable part of life and starts significantly limiting your child's ability to function, connect, and grow. Knowing when to reach out for professional support — and what kind of support to look for — can make a real difference.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Speak with a qualified professional for diagnosis and treatment.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Clear Signs It Is Time to Seek Professional Support</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            These are not exhaustive indicators — any concern you have as a parent is worth discussing with a professional. But these specific signs suggest anxiety has crossed into territory that warrants evaluation:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'School avoidance or refusal', desc: 'When anxiety causes your child to regularly refuse to attend school, to experience meltdowns every morning before school, or to be unable to stay in school for a full day, this significantly affects their education and social development. School refusal driven by anxiety is one of the clearest signals for professional intervention.' },
              { label: 'Shrinking life', desc: 'If the list of places your child can tolerate and activities they can participate in is getting shorter over time, anxiety is winning. When a child\'s world narrows — fewer foods, fewer places, fewer activities, fewer relationships — the trajectory needs to be addressed.' },
              { label: 'Self-harm or expressions of self-harm', desc: 'Any self-harm behavior — head-banging, biting themselves, scratching, statements about wanting to hurt themselves — warrants immediate professional consultation. This is not a wait-and-see situation. Contact your pediatrician or a mental health professional promptly.' },
              { label: 'Physical symptoms with no medical cause', desc: 'Frequent stomachaches, headaches, chest tightness, or nausea that medical providers cannot attribute to a physical cause are common anxiety symptoms in autistic children. When physical complaints are regularly preventing participation in daily activities, professional support is warranted.' },
              { label: 'Meltdowns that are increasing in frequency or intensity', desc: 'While meltdowns are a communication of overwhelm rather than a behavior problem, an escalating pattern of meltdowns — especially ones that become harder to recover from — suggests anxiety is compounding and the child needs more support than current strategies provide.' },
              { label: 'Anxiety that prevents sleep', desc: 'Anxiety-driven sleep disruption that persists beyond a few weeks significantly affects physical health, cognitive function, and emotional regulation. If your child cannot fall asleep due to worry, wakes frequently with fear, or refuses to sleep alone to a degree that affects the whole family, this warrants evaluation.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                  <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                  <span style={{ fontWeight: 800, fontSize: 16, color: 'rgba(250,250,248,0.95)' }}>{item.label}</span>
                </div>
                <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.75, paddingLeft: 24 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Kind of Professional to Look For</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Not all mental health support is the same quality for autistic children. The professional's knowledge of autism matters as much as their credentials.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Psychologists with autism specialization', desc: 'A licensed psychologist who specializes in autism can conduct a comprehensive anxiety evaluation and distinguish anxiety from autistic traits — something that is surprisingly difficult and requires genuine expertise. They can also provide evidence-based therapy adapted for autistic children.' },
              { label: 'Autism-adapted Cognitive Behavioral Therapy (CBT)', desc: 'Standard CBT has been adapted for autistic children with good results — but the adaptation matters. Look for a therapist who uses visual supports, concrete language, moves at the child\'s pace, and understands the role of sensory experience in autistic anxiety. CBT adapted for autistic children is different from standard CBT.' },
              { label: 'Occupational therapists who address anxiety', desc: 'When anxiety is significantly driven by sensory experiences, an occupational therapist with sensory integration training can address the underlying sensory contributions to anxiety. This is especially relevant for sensory anxiety and anxiety triggered by sensory environments.' },
              { label: 'Pediatric psychiatrists for medication evaluation', desc: 'Medication is not the right answer for every child, but for children whose anxiety is significantly impairing function, medication can provide the regulated baseline needed to benefit from other supports. Pediatric psychiatrists with autism experience can evaluate whether medication is appropriate and monitor its effects carefully.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What to Avoid</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Providers who dismiss anxiety as "just autism" without evaluating and treating it — anxiety and autism are distinct and anxiety is treatable',
              'Programs that use punishment, food restriction, or forced exposure as core anxiety intervention components',
              'Therapists who have no autism-specific training and apply generic anxiety protocols unchanged',
              'Providers who focus on compliance and behavior modification rather than understanding the underlying anxiety drivers',
              'Waiting without seeking evaluation if your gut tells you something is significantly wrong — trust your observations of your child',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>–</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-and-anxiety/types" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Types of Anxiety →</Link>
            <Link href="/autism-and-anxiety/coping" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Coping Strategies →</Link>
            <Link href="/autism-and-anxiety/at-home" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Low-Anxiety Home →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism &amp; Anxiety Hub →</Link>
            <Link href="/therapies" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Therapies Guide →</Link>
            <Link href="/resources" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>All Resources →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
