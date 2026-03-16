import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Find an Autism Evaluator | WeBearish',
  description: 'Where to find qualified autism evaluators, what questions to ask, how to get on waitlists, and red flags to watch for during the search.',
  alternates: { canonical: 'https://webearish.com/getting-a-diagnosis/finding-evaluators' },
};

export default function FindingEvaluatorsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Getting a Diagnosis</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM DIAGNOSIS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Finding an Autism Evaluator
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Finding a qualified autism evaluator is often harder than families expect. Waitlists of 6 to 18 months are common in many areas. Starting the search early, using multiple channels simultaneously, and knowing what questions to ask makes the process more manageable.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Where to Start Your Search</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Your pediatrician', desc: 'Ask your pediatrician for a referral to a developmental pediatrician or neuropsychologist with autism expertise. Pediatricians often have relationships with local evaluators and may know current waitlist status.' },
              { label: 'Your state\'s autism society chapter', desc: 'Local autism organizations maintain evaluator referral lists and are often more current than online directories. They also know the local reputation of providers.' },
              { label: 'Autism Speaks provider directory', desc: 'Online directory searchable by zip code and specialty. Use as a starting point, not a definitive resource.' },
              { label: 'Psychology Today therapist finder', desc: 'Filter by "autism" and "psychological testing" to identify local providers. Call before committing — not all listed providers actively do full evaluations.' },
              { label: 'University hospital systems', desc: 'Academic medical centers often have autism evaluation programs with higher diagnostic accuracy, though also longer waits.' },
              { label: 'Parent community groups', desc: 'Local Facebook groups and autism parent communities often have the most current, experience-based recommendations for evaluators in your area.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Questions to Ask Before Scheduling</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'What is the current waitlist time for a new evaluation appointment?',
              'What tools and measures do you use? (Look for ADOS-2 and ADI-R as gold standard tools)',
              'What age range do you evaluate, and how many autism evaluations do you do per year?',
              'Do you have experience evaluating [girls / adults / people with significant masking / nonspeaking individuals] if relevant?',
              'Do you accept my insurance, and do you handle prior authorization?',
              'Will the evaluation result in a formal written report, and what does it typically include?',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Managing Long Waitlists</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Get on multiple waitlists simultaneously. The first available appointment wins.',
              'Ask to be called for cancellation slots — same-week openings often go unclaimed.',
              'Consider telehealth evaluation options, which have expanded significantly and may have shorter waits.',
              'Pursue a school evaluation in parallel for school-age children — it will not provide a clinical diagnosis but can qualify your child for services while you wait.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. Start the search now. Waitlists are real, and starting earlier gives you more options.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/getting-a-diagnosis/preparing" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Preparing →</Link>
            <Link href="/getting-a-diagnosis/cost-breakdown" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Cost Breakdown →</Link>
            <Link href="/getting-a-diagnosis/what-to-expect" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>What to Expect →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
