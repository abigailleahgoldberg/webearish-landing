import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sensory Sleep Tools for Autistic Children | WeBearish',
  description: 'Sensory tools that support sleep for autistic children — weighted blankets, white noise, compression bedding, light therapy, and more.',
  alternates: { canonical: 'https://webearish.com/autism-sleep-guide/sensory-tools' },
};

export default function SleepSensoryToolsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-sleep-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sleep Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Sensory Sleep Tools</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SLEEP GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Sensory Sleep Tools
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Sensory processing differences are at the core of many autistic sleep difficulties. A hyperactive nervous system that is still processing the day's sensory input, or one that is seeking additional input to feel regulated, will not transition to sleep easily. Sensory tools address the physiological barriers to sleep rather than trying to push through them.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Speak with a qualified professional for sleep concerns.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Deep Pressure Tools</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Deep pressure — consistent, firm pressure applied to the body — activates the parasympathetic nervous system and reduces arousal. It is one of the most effective sensory sleep interventions.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Weighted blankets', desc: 'The most widely used deep pressure sleep tool. Typically weighted at 10 percent of the child\'s body weight. Research supports their use for autistic children, with studies showing improved sleep onset, reduced nighttime waking, and increased overall sleep time. Always ensure the child can remove the blanket independently — never use on infants or children who cannot lift the blanket.' },
              { label: 'Compression sheets', desc: 'A fitted sheet system that provides full-body compression without the weight of a weighted blanket. Better for children who want deep pressure but find heavy blankets too hot or restricting. Often more effective for children who move a lot in their sleep.' },
              { label: 'Sleeping pods and cocoon-style beds', desc: 'Enclosed sleeping spaces that wrap around the child provide proprioceptive input and reduce the anxiety of open space. Some children sleep better in a smaller, enclosed area than in a standard bed. This can be achieved with a low-cost bed tent or pod over an existing bed.' },
              { label: 'Pre-sleep deep pressure activities', desc: 'A brief session of deep pressure activities before bed — joint compressions, firm massage, time under cushions, or a "burrito" rolled in a blanket — can significantly reduce nervous system arousal and make falling asleep easier. An occupational therapist can teach you specific techniques.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Auditory Sleep Tools</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'White noise machines', desc: 'Mask unpredictable environmental sounds with consistent background noise. Particularly useful in apartments, shared walls, or homes where nighttime household sounds are unpredictable. The goal is a consistent soundscape, not silence.' },
              { label: 'Brown or pink noise', desc: 'Deeper, more bass-heavy than white noise. Many children (and adults) find it more soothing. Worth experimenting with different frequencies to find what calms your child\'s auditory system.' },
              { label: 'Audiobooks or calm music', desc: 'For children who cannot tolerate silence, a very quiet audiobook or instrumental music can provide auditory input that grounds the brain without stimulating it. Keep volume very low.' },
              { label: 'Noise-canceling headphones or earplugs', desc: 'For children with extreme auditory sensitivity, noise-canceling headphones during the sleep onset period can reduce auditory overwhelm. Some children sleep comfortably with them through the night. Soft foam earplugs are an alternative for older children.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Tactile and Comfort Tools</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Seamless, tag-free pajamas eliminate constant tactile irritation that prevents sleep in children with tactile hypersensitivity',
              'A consistent comfort object — a specific stuffed animal, a familiar blanket — provides predictable tactile input and emotional security',
              'Smooth, high thread-count sheets for tactile-sensitive children; textured bedding for children who seek more tactile input',
              'Hand fidgets or textured objects to hold during sleep onset can meet sensory seeking needs that otherwise keep children from settling',
              'A body pillow provides bilateral pressure and may reduce the restlessness of children who seek proprioceptive input during sleep',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-sleep-guide/environment" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Environment →</Link>
            <Link href="/autism-sleep-guide/routines" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Bedtime Routines →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Full Sensory Tools Guide →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide Hub →</Link>
            <Link href="/sensory-tools-guide/tactile" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Tactile Sensory Tools →</Link>
            <Link href="/sensory-tools-guide/auditory" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Auditory Sensory Tools →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
