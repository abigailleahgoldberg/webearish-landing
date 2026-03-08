import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism and Sleep: A Guide for Parents | WeBearish',
  description: 'Why sleep is harder for many autistic children (melatonin, sensory, routine), practical strategies, sleep hygiene adaptations for autistic children, and when to see a doctor.',
  alternates: { canonical: 'https://webearish.com/autism-sleep-guide' },
};

export default function AutismSleepGuidePage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>DAILY LIFE AND HEALTH</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Autism and Sleep: A Guide for Parents
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Between 50 and 80 percent of autistic children experience significant sleep problems -- compared to about 30 percent of neurotypical children. Sleep difficulties are not a parenting failure. They are connected to the neurology of autism itself. Understanding why sleep is harder for many autistic children is the first step to finding approaches that actually help.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Sleep Is Harder for Many Autistic Children</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'Melatonin differences', desc: 'Research suggests that many autistic people have irregular melatonin production -- the hormone that signals the body it is time to sleep. The timing, amount, or rhythm of melatonin release may be different, making it genuinely harder to feel sleepy at typical bedtimes.' },
              { title: 'Sensory processing at night', desc: 'The sensory sensitivities that affect autistic children during the day do not turn off at bedtime. Sheets that feel scratchy, room temperature that is slightly off, ambient noise, light from outside -- any of these can make falling asleep genuinely difficult rather than a behavioral choice.' },
              { title: 'Heightened arousal and difficulty transitioning', desc: 'The transition from wakefulness to sleep requires the nervous system to downregulate. Many autistic children have nervous systems that remain highly aroused. The shift from activity to sleep is a transition, and transitions are often harder for autistic children.' },
              { title: 'Anxiety', desc: 'Anxiety -- which is very common in autistic children -- significantly disrupts sleep. Racing thoughts, worries, and a nervous system on alert are not compatible with sleep onset.' },
              { title: 'Irregular sleep architecture', desc: 'Some research suggests autistic people spend less time in REM sleep and have more frequent night waking. The structure of sleep itself may be different, not just the difficulty falling asleep.' },
              { title: 'Gastrointestinal issues', desc: 'GI problems are significantly more common in autistic people. Pain, discomfort, or irregular gut function can interrupt sleep in ways that are not visible from outside.' },
            ].map(item => (
              <div key={item.title} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Sleep Hygiene Adapted for Autistic Children</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Standard sleep hygiene advice is often not specific enough for autistic children. These adaptations address the specific barriers autistic children face:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Consistent bedtime routine with visual support', desc: 'Autistic children often need a clear, predictable, step-by-step routine. A visual schedule of the bedtime routine (brush teeth, pajamas, one book, lights out) reduces the anxiety of transitions and helps the nervous system anticipate sleep.' },
              { label: 'Sensory audit of the sleep environment', desc: 'Go through the bedroom with sensory sensitivity in mind. Bedding texture, pillow firmness, room temperature, light from windows, sounds from outside -- assess and adjust each factor. What seems minor to you may be significant for your child.' },
              { label: 'Weighted blanket', desc: 'Deep pressure from a weighted blanket is associated with reduced anxiety and improved sleep onset in many autistic children. Research supports use. Blankets should be approximately 10 percent of body weight for children.' },
              { label: 'Blackout curtains', desc: 'Light sensitivity is common. Blackout curtains create a consistent, dark sleep environment that does not shift with seasons or time of sunset.' },
              { label: 'White noise or specific sound environments', desc: 'For children sensitive to ambient noise, white noise machines or consistent background sound masks unpredictable sounds. Some autistic children sleep better with certain music or audiobooks at low volume.' },
              { label: 'Screen cutoff and blue light', desc: 'Screens suppress melatonin through blue light exposure. For autistic children with melatonin timing differences, this effect may be stronger. A screen cutoff of one to two hours before bed, or blue light blocking glasses if screens are used in the evening, is worth implementing.' },
              { label: 'Predictable wake time', desc: 'Consistent wake time helps anchor the circadian rhythm. Even on weekends, keeping wake time within an hour of the weekday time helps maintain sleep rhythm.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Melatonin Supplementation</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Melatonin is one of the most researched sleep interventions for autistic children, and it has good evidence for improving sleep onset time and sleep duration. It is available over the counter in the United States. However, there are important considerations:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Melatonin is a hormone, not a standard supplement. Discuss use with your child\'s pediatrician before starting.',
              'Dosing for children is often lower than adult doses. Many doctors recommend starting with 0.5mg to 1mg and adjusting.',
              'Timing matters. Melatonin works best taken 30 to 60 minutes before the desired bedtime, not right at lights out.',
              'Melatonin is most helpful for sleep onset (falling asleep) rather than night waking.',
              'Quality and labeling of OTC melatonin varies widely. Studies have found actual content differing significantly from labeled amounts. Pharmaceutical-grade products may be more consistent.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Addressing Night Waking</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Night waking is common in autistic children and has different causes than sleep onset problems. Some strategies that help:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'If the child wakes and cannot return to sleep, investigate possible physical causes -- GI discomfort, temperature regulation, pain.',
              'A "pass" system for older children -- one coupon to come to the parent\'s room per night -- can reduce anxiety about waking without creating a pattern of repeated night visits.',
              'Consider whether the sleep environment changes after the child falls asleep. If a sound or light turns off that was present at sleep onset, the change itself can cause waking.',
              'Create a calm, low-stimulation response when the child wakes. Turning on bright lights, extensive conversation, or reactive responses can make returning to sleep harder.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When to See a Doctor</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Sleep problems that significantly affect functioning -- yours or your child's -- deserve medical attention. Seek evaluation when:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Your child is sleeping fewer than 8 hours consistently (varies by age) despite consistent routines.',
              'There are signs of sleep apnea -- loud snoring, gasping, stopped breathing during sleep, or unexplained daytime fatigue.',
              'Meltdowns, behavior, or concentration have significantly worsened and sleep is poor.',
              'Behavioral and environmental strategies have not improved sleep after several consistent weeks of implementation.',
              'You suspect a co-occurring condition (anxiety, GI issues, pain) may be disrupting sleep.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.55)', marginTop: 16, lineHeight: 1.7 }}>
            A pediatric sleep specialist or developmental pediatrician with autism experience is the best resource. Ask your child's pediatrician for a referral.
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
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown vs. Tantrum →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
