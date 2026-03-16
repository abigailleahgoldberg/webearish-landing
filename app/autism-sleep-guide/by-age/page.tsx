import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sleep Strategies by Age for Autistic Children | WeBearish',
  description: 'Age-specific sleep strategies for autistic toddlers, school-age children, and teenagers — what works at each stage and how sleep needs change.',
  alternates: { canonical: 'https://webearish.com/autism-sleep-guide/by-age' },
};

export default function SleepByAgePage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-sleep-guide" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Sleep Guide</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Sleep by Age</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SLEEP GUIDE</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Sleep Strategies by Age
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          Sleep needs and sleep challenges shift significantly as autistic children move through developmental stages. The strategies that work for a three-year-old will not necessarily work for a ten-year-old, and a teenager's sleep biology is fundamentally different from a young child's. Here is what to know at each stage.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Speak with a qualified professional for sleep concerns.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Toddlers (Ages 2-4): Establishing the Foundation</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Toddlers need 11-14 hours of sleep per day. For autistic toddlers, sleep difficulties often show up as extreme resistance to the transition to sleep, frequent night waking, or very early morning rising. The foundation you build now matters.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Prioritize a consistent bedtime above all else — the body clock responds to timing consistency more than any other factor',
              'Keep the bedtime routine short (15-20 minutes), predictable, and the same every night — the same steps in the same order',
              'Address sensory barriers first: blackout curtains, white noise, comfortable pajamas, familiar bedding',
              'Co-sleeping is common in this age group for autistic children and their families — if it works for your family, it is a valid approach',
              'If your toddler is not yet toilet trained, middle-of-the-night waking for discomfort is common — consider overnight protection',
              'For extreme cases, consult a pediatrician before using any supplements',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>School Age (Ages 5-12): Anxiety and the School Day</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            School-age autistic children need 9-11 hours of sleep. This is the age when school-related anxiety begins to significantly affect sleep — the worried mind at bedtime is often processing the challenges of the day and anticipating tomorrow's.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Address afterschool decompression', desc: 'School demands significant masking effort from many autistic children. Building in unstructured, no-demand time immediately after school reduces the anxiety load that children bring to bedtime. A child who has had 60 minutes of special interest time and calm activity falls asleep more easily than one who went from school to homework to dinner to bed with no recovery time.' },
              { label: 'Worry time before bed', desc: 'For children who lie awake worrying, a designated 10-minute "worry dump" earlier in the evening — writing or drawing worries, or telling a caregiver — contains the anxiety so it does not expand into the full bedtime window.' },
              { label: 'Maintain a consistent sleep schedule across weekdays and weekends', desc: 'The temptation to let children stay up late on weekends and sleep in is understandable, but the resulting "social jet lag" — a shifted body clock — makes Monday morning significantly harder. Limit weekend schedule drift to one hour.' },
              { label: 'Technology boundaries', desc: 'School-age children often have increasing access to devices. Charge devices outside the bedroom. Make the bedroom a no-screen space. This is more effective as a consistent rule than trying to negotiate screen-off time each night.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Teenagers (Ages 13+): The Circadian Shift</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Teenagers experience a biological shift in their circadian rhythm that delays their natural sleep onset time by 1-2 hours. Combined with already-delayed melatonin onset in autistic individuals, autistic teenagers often genuinely cannot fall asleep before 11pm or midnight — not because they are being defiant, but because of biology.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Advocate for later school start times if possible — early starts are biologically at odds with teen sleep patterns',
              'Light therapy in the morning (10,000 lux light box for 20-30 minutes) can help advance a delayed circadian clock',
              'Low-dose melatonin taken 2-3 hours before target sleep time can shift sleep onset earlier in teens with extreme phase delay',
              'Teach your teenager about sleep hygiene as self-advocacy — they will be making their own sleep decisions increasingly',
              'Depression and anxiety are common in autistic teenagers and significantly affect sleep — monitor for signs and seek professional support if needed',
              'Address sleep problems early — sleep deprivation significantly affects mental health, behavior, and academic performance in autistic teens',
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
            <Link href="/autism-sleep-guide/melatonin" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Melatonin Guide →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/ages" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism by Age →</Link>
            <Link href="/autism-and-anxiety" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autism &amp; Anxiety →</Link>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide Hub →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
