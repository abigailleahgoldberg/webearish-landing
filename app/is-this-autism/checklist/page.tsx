import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism Signs Checklist: What to Look For | WeBearish',
  description: 'A practical checklist of autism signs across social communication, sensory, behavioral, and daily living domains — for children and adults.',
  alternates: { canonical: 'https://webearish.com/is-this-autism/checklist' },
};

export default function ChecklistPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Is This Autism?</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>IS THIS AUTISM?</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Autism Signs: What to Look For
        </h1>
        <div style={{ margin: '0 0 32px', padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>
          This checklist is not a diagnostic tool. It is a starting point for conversations with evaluators. No checklist can diagnose autism — only a comprehensive evaluation can do that. We are not doctors. We are advocates.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Social Communication and Interaction</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Difficulty with back-and-forth conversation — may dominate with their own interests or not engage in reciprocal exchange',
              'Limited or atypical use of eye contact — may avoid it, may use it in an unusual way, or may use it mechanically',
              'Challenges understanding nonverbal communication — facial expressions, body language, tone',
              'Difficulty making and keeping friendships — may want friendships but struggle with the navigation',
              'Little spontaneous sharing of interests, emotions, or observations with others',
              'May appear to prefer solitude, or may seek connection but in ways that seem one-sided to others',
              'May take language very literally — misses sarcasm, figures of speech, or implied meaning',
              'Difficulty adjusting communication for different social contexts',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Restricted and Repetitive Behaviors</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Intense, focused interests in specific topics — knowing an unusual amount about a narrow subject',
              'Insistence on sameness, routines, and predictability — significant distress when routines change',
              'Repetitive movements (stimming) — hand-flapping, rocking, spinning, lining up objects, repeating sounds or words',
              'Rigid thinking — difficulty with flexibility, gray areas, or unexpected changes',
              'Repetitive play patterns — playing with toys in a specific way rather than imaginatively',
              'Strong preference for specific foods, textures, clothing, or environments',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Sensory Differences</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Hypersensitivity to sounds, lights, smells, textures, or tastes — may cover ears, avoid certain environments',
              'Hyposensitivity — seeking intense sensory input, high pain tolerance, not noticing sensory stimuli others react to',
              'Sensory overwhelm in busy environments — malls, crowds, loud events',
              'Strong reactions to clothing textures, seams, or physical sensations',
              'Unusual visual attention — fascination with lights, patterns, spinning objects',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>□</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            If several items across multiple categories feel familiar — especially if these traits have been present from early childhood and affect daily functioning — it may be worth pursuing a formal evaluation. The checklist is not a diagnosis. It is a starting point.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Is This Autism? →</Link>
            <Link href="/is-this-autism/when-to-evaluate" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>When to Evaluate →</Link>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Getting a Diagnosis →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
