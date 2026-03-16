import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Navigating the Playground for Autistic Children | WeBearish',
  description: 'Why the playground is hard for autistic children and practical strategies for navigating unstructured social time — for parents and for children.',
  alternates: { canonical: 'https://webearish.com/autism-social-skills/playground' },
};

export default function PlaygroundPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>

        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/autism-social-skills" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Social Skills</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>The Playground</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM SOCIAL SKILLS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Navigating the Playground
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          The playground is one of the most socially and sensorially complex environments autistic children encounter. Unstructured time, shifting rules, unpredictable social dynamics, high noise levels, sensory overload from equipment and crowds, and the expectation to spontaneously join play — all at the same time. It is not surprising that many autistic children struggle at recess. Here is how to understand and address it.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes and reflects a neurodiversity-affirming perspective.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why the Playground Is Hard</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Unwritten rules and shifting games', desc: 'Playground games have complex, often unspoken rules that change constantly. What is allowed in tag today is different from yesterday. The social hierarchy determines who plays what role. For autistic children who prefer explicit, consistent rules, this constantly shifting landscape is genuinely confusing and anxiety-producing.' },
              { label: 'Sensory overwhelm', desc: 'Playgrounds are loud, chaotic, and unpredictable. Screaming, crowd movement, unexpected physical contact from other children, sun glare, and the sensory properties of the equipment itself (hot metal, splinters, rough surfaces) all stack up. A child who is sensory overwhelmed cannot engage socially.' },
              { label: 'Initiating play is its own skill', desc: 'Walking up to a group of children and asking to join requires reading multiple social signals simultaneously, knowing the right words, timing the approach, and managing rejection. For autistic children who process social information differently, this is genuinely difficult — not because they do not want to connect but because the execution requires skills they may not yet have.' },
              { label: 'Recess as academic consequence', desc: 'When recess is taken away as punishment for academic difficulties or behavior, autistic children lose the one unstructured break in their day. For a child already at capacity, losing recess can trigger afternoon meltdowns.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Strategies That Actually Help</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Give the child a job or role', desc: 'A child with a defined role — the official ball monitor, the person who holds the equipment bag, the scorekeeper — has structure in an unstructured environment. A role provides a reason to be present, a clear function, and a social anchor.' },
              { label: 'Access to a quieter option', desc: 'Advocate at school for your child to have access to a quieter space during recess — a library, a classroom, or a supervised smaller outdoor area. Some autistic children need recess to be a recovery period, not a social demand period. This is a legitimate accommodation.' },
              { label: 'Playground scripts and pre-teaching', desc: 'Before school, practice the specific phrases and situations your child is likely to encounter: "Can I play with you?" "What are the rules of your game?" "I want to be it next." Concrete rehearsal of specific language gives children something to draw on in the moment.' },
              { label: 'Buddy systems', desc: 'A pairing with a socially patient peer who can facilitate connection — arranged quietly by a teacher — can help autistic children access the playground community. This works best when it is not publicly announced and when the buddy is genuinely kind rather than assigned reluctantly.' },
              { label: 'Respect the child who plays alone', desc: 'Not all autistic children want to play with other children at recess. Some are genuinely content to walk around the perimeter, stim, or engage in parallel play. An autistic child playing happily alone is not a problem to be solved — unless they are lonely, which requires a direct conversation with the child.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Advocating at School</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Include recess support in the IEP or 504 — a specific adult checking in at recess, a buddy assignment, or quiet space access',
              'Communicate to teachers that recess must not be taken away as a consequence — the sensory and regulatory function of recess is essential',
              'Ask about lunch recess monitoring for autistic children who are vulnerable to social exclusion or bullying during unstructured time',
              'Request that a paraprofessional supports your child during the playground transition — the shift from classroom to outdoor is often where difficulties begin',
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
            <Link href="/autism-social-skills/making-friends" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Making Friends →</Link>
            <Link href="/autism-social-skills/structured-vs-unstructured" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Structured vs Unstructured →</Link>
            <Link href="/autism-social-skills/scripts" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Social Scripts →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Guide →</Link>
            <Link href="/autism-and-anxiety/at-school" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Anxiety at School →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
