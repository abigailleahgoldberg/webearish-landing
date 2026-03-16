import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Managing Anxiety at School for Autistic Children | WeBearish',
  description: 'Practical strategies for managing anxiety at school — accommodations, communication with teachers, morning transitions, and building a safety plan.',
  alternates: { canonical: 'https://webearish.com/autism-and-anxiety/at-school' },
};

export default function AnxietyAtSchoolPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-and-anxiety" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Autism &amp; Anxiety</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>Anxiety at School</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM &amp; ANXIETY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Managing Anxiety at School
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          School is one of the most anxiety-producing environments for many autistic children. Unpredictable social dynamics, sensory demands, academic pressure, transitions, and limited control all stack on top of each other across a six-hour day. The result is often a child who holds it together at school and falls apart at home — or one who cannot get through the school door at all. Here is how to address school anxiety systematically.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Speak with a qualified professional for diagnosis and treatment.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The Morning Transition Problem</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Morning meltdowns before school are often anxiety, not defiance. The anticipatory anxiety about the school day peaks at departure time. Strategies that help:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Preview the day', desc: 'The night before or morning of, walk through the day\'s schedule together. Identify any changes or unusual events. Knowing what to expect reduces the uncertainty that feeds anticipatory anxiety.' },
              { label: 'Consistent morning routines', desc: 'A predictable morning sequence — same order, same timing, same foods — keeps the nervous system calm before the unpredictable school day begins. Minimize decisions and surprises in the morning window.' },
              { label: 'Transition objects', desc: 'A small object from home carried in a pocket or backpack creates a psychological anchor to safety. A stone, a small toy, a photo — anything that represents safety and familiarity.' },
              { label: 'Arrival supports', desc: 'Ask the school whether your child can arrive early (before the chaos of the bell), arrive slightly late (after the hallway rush), or have a specific trusted adult greet them at the door. The transition into the building is often the hardest moment.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>IEP and 504 Accommodations for Anxiety</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Anxiety accommodations in an IEP or 504 plan can be legally enforceable supports. Push for these to be included if your child's anxiety affects school functioning:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Access to a quiet break space — a designated calming corner or sensory room the child can use without requiring teacher permission each time',
              'Advance notice of schedule changes — written or verbal notification of disruptions to routine at least 24 hours in advance when possible',
              'Modified or eliminated oral presentations — which are a common high-anxiety trigger',
              'Flexible seating — away from high-traffic areas, near an exit, away from sensory triggers',
              'Extended time on tests and assignments — anxiety impairs processing speed and performance',
              'Check-in/check-out with a trusted adult each morning and afternoon',
              'A designated safe person the child can request to see during peak anxiety',
              'Permission to use fidgets, headphones, or other sensory tools during class',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.07)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Building a School Anxiety Safety Plan</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            A written plan that all school staff know and follow is more effective than informal accommodations that depend on individual teachers. A good school anxiety plan includes:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Early warning sign recognition', desc: 'What does your child look like in the early stages of anxiety before it becomes a meltdown? List specific behaviors teachers should watch for: pacing, asking repeated questions, becoming very quiet, seeking a specific item, covering ears.' },
              { label: 'The response sequence', desc: 'Exactly what should a teacher or aide do when they observe early warning signs? (Offer the break card? Reduce demands? Allow movement? Contact parents?) The clearer this is, the more consistently it will be followed.' },
              { label: 'De-escalation strategies that work for this child', desc: 'Every child is different. List the specific strategies that actually work for your child — and what makes things worse. Do not let staff improvise when your child is already distressed.' },
              { label: 'Parent contact protocol', desc: 'Under what circumstances should the school call or text? What information should they give? This prevents miscommunication and ensures parents are informed without being called for every minor difficulty.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>The "Afterschool Meltdown" Is Real</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Many autistic children hold their anxiety together all day at school — masking, suppressing, and managing — and then release all of that built-up stress the moment they arrive home in a safe environment. This is called "afterschool restraint collapse." It is not bad behavior. It is a sign your child is working very hard all day. Build in decompression time: no demands, no screens, no conversations if the child needs quiet — for as long as it takes.
          </p>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/autism-and-anxiety/at-home" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Low-Anxiety Home →</Link>
            <Link href="/autism-and-anxiety/coping" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Coping Strategies →</Link>
            <Link href="/iep" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Guide →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/school-rights" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Rights →</Link>
            <Link href="/autism-school-accommodations" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Accommodations →</Link>
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown vs. Tantrum →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
