import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Prepare for an Autism Evaluation | WeBearish',
  description: 'What to bring, what to document, how to prepare your child, and how to advocate during the evaluation process for the best outcome.',
  alternates: { canonical: 'https://webearish.com/getting-a-diagnosis/preparing' },
};

export default function PreparingPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Getting a Diagnosis</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM DIAGNOSIS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Preparing for the Evaluation
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Preparation makes a real difference in evaluation quality. The more information you bring, the more complete the picture the evaluator can form. This is especially true for children who mask in new settings — where your documentation of home behavior may be the most important data in the room.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What to Bring</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Developmental history notes', desc: 'When did your child walk, talk, use words, use phrases, point, make eye contact? Were there any developmental regressions? Notes you take before the appointment are better than trying to recall in the moment.' },
              { label: 'Previous school records and reports', desc: 'IEP evaluations, 504 documentation, teacher notes, report cards with behavioral comments — all of this is relevant context.' },
              { label: 'Any prior evaluations or diagnoses', desc: 'ADHD evaluations, speech reports, occupational therapy assessments, previous psychological testing — bring everything.' },
              { label: 'A written parent statement', desc: 'Write out what you observe at home. Be specific: "She holds it together at school but has 1-2 hour meltdowns every afternoon." "He has 12 foods he will eat." "She has one friend and rehearses conversations in advance." Specificity matters.' },
              { label: 'Video if available', desc: 'Video of meltdowns, sensory reactions, stimming, communication patterns, or behavior in different settings can provide context that clinic observation misses.' },
              { label: 'Your child\'s comfort items', desc: 'Bring whatever helps your child regulate — a favorite toy, headphones, a fidget. Tell the evaluator what helps your child and what to avoid.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Preparing Your Child</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Explain what will happen', desc: 'Use age-appropriate language: "We\'re going to talk to a doctor who helps understand how your brain works. They\'re going to ask you some questions and play some games with you. It\'s not a test you can pass or fail."' },
              { label: 'Use social stories if helpful', desc: 'A social story about visiting an evaluation clinic, what the room looks like, and what might happen helps autistic children prepare for new environments.' },
              { label: 'Don\'t coach responses', desc: 'Don\'t tell your child what to say or encourage them to perform. The evaluation is most useful when it reflects your child\'s natural presentation.' },
              { label: 'Plan for afterward', desc: 'Evaluations are exhausting. Plan a low-demand, preferred activity for after the appointment. A child who knows there\'s something good waiting is more regulated during.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. You are the expert on your child. The evaluator needs your knowledge to do their job well. Don't minimize what you've observed.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/getting-a-diagnosis/what-to-expect" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>What to Expect →</Link>
            <Link href="/getting-a-diagnosis/finding-evaluators" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Finding Evaluators →</Link>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Diagnosis Overview →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
