import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bedtime Routines for Autistic Children That Work | WeBearish',
  description: 'How to build a consistent bedtime routine that helps autistic children wind down and sleep — what to include, what to avoid, and how to troubleshoot.',
  alternates: { canonical: 'https://webearish.com/autism-sleep-guide/routines' },
};

export default function SleepRoutinesPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-sleep-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sleep Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Bedtime Routines</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SLEEP GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Bedtime Routines That Work
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          For autistic children, a predictable bedtime routine is not a luxury — it is a neurological necessity. The transition from wakefulness to sleep is a state change, and autistic children often struggle with state changes. A consistent routine gives the brain a clear signal that sleep is coming, reduces the uncertainty and anxiety that delay sleep onset, and builds the behavioral and physiological patterns that make sleep accessible.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Speak with a qualified professional for sleep concerns.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Wind-Down Window: Starting Early</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Most autistic children need more time to wind down than neurotypical children. A wind-down window of 60-90 minutes before target sleep time is realistic. This window is not just about getting ready for bed — it is about systematically reducing stimulation so the nervous system can shift into sleep mode.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              '60-90 min before bed: screens off, shift to calm activities (not rough play, not high-stimulation content)',
              '60 min before bed: dim lights in the bedroom and common areas',
              '45 min before bed: begin physical bedtime routine (bath or shower, pajamas, teeth brushing)',
              '30 min before bed: in bedroom, quiet winding down activities (reading, calm music, special interest at low intensity)',
              '15 min before bed: lights very dim, final settling in bed, last connection with caregiver',
              'Target sleep time: consistent across weekdays and weekends as much as possible',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Visual Routine Supports</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            A visual bedtime chart — posted in the bedroom or bathroom — gives children a concrete reference for the sequence, reduces the need for verbal reminders (which are a demand), and builds independence in the routine. These elements make visual supports work:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Use images or icons alongside words', desc: 'Even children who can read benefit from visual images paired with text. The image is processed faster and does not require the same cognitive effort as reading text when tired.' },
              { label: 'Make the steps small and concrete', desc: '"Get ready for bed" is too abstract. "Put on pajamas, brush teeth, wash face, choose one book" gives the brain clear checkpoints. The more concrete each step, the less anxiety about what comes next.' },
              { label: 'Include a checkbox or velcro system', desc: 'Allow the child to check off or move completed steps. This gives a sense of accomplishment, makes progress visible, and maintains the routine\'s momentum.' },
              { label: 'Laminate it', desc: 'A laminated chart survives the bedroom environment. Let the child help create it — their investment in the routine improves compliance significantly.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Sensory Elements to Include</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Building regulatory sensory experiences into the routine helps the nervous system move toward sleep. Different children need different inputs:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'A warm bath or shower before bed raises then drops core body temperature, signaling sleep readiness — particularly effective for children with body temperature regulation differences',
              'Deep pressure massage or joint compressions from a willing caregiver can help calm the nervous system after a high-stimulation day',
              'A weighted blanket during the wind-down period before lights-out provides proprioceptive input that reduces arousal',
              'Calm, consistent music or a specific audiobook creates an auditory anchor for sleep',
              'A familiar scent — a specific lotion, a specific soap — can become associated with sleep through conditioning and reinforce the routine signal',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What to Avoid in the Bedtime Window</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Screens — blue light, stimulating content, and social media all delay sleep onset',
              'Rough play or highly stimulating physical activity in the hour before bed',
              'New, unpredictable activities that break the routine and create anxiety',
              'Difficult conversations or conflict — address those earlier in the evening',
              'High-demand tasks that create frustration (homework, practicing challenging skills)',
              'Offering too many choices — decision fatigue at bedtime creates friction, not calm',
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
            <Link href="/autism-sleep-guide/environment" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Environment →</Link>
            <Link href="/autism-sleep-guide/sensory-tools" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Sleep Tools →</Link>
            <Link href="/autism-sleep-guide/by-age" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep by Age →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide Hub →</Link>
            <Link href="/autism-and-anxiety/at-home" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Low-Anxiety Home →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Guide →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
