import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'When to Pursue an Autism Evaluation | WeBearish',
  description: 'Signs that it\'s time to pursue a formal autism evaluation — for children and adults. How to know when the question deserves a real answer.',
  alternates: { canonical: 'https://webearish.com/is-this-autism/when-to-evaluate' },
};

export default function WhenToEvaluatePage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/is-this-autism" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Is This Autism?</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>IS THIS AUTISM?</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          When to Pursue an Evaluation
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          There is no age that is too young or too old to pursue an autism evaluation. The question of when to evaluate often comes with gatekeeping — from pediatricians, from schools, from well-meaning people who say "wait and see." Here is what actually warrants action.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>For Children: When to Pursue Evaluation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Developmental concerns at any age', desc: 'Speech delay, limited eye contact, no pointing by 12 months, no words by 16 months, no two-word phrases by 24 months — any of these warrant early evaluation, not waiting.' },
              { label: 'You notice the signs and something feels off', desc: 'Parent observation is clinically significant. If you feel something is different in how your child connects, communicates, or responds to the world, pursue evaluation. Don\'t wait to be told.' },
              { label: 'School is struggling despite effort', desc: 'A child who is working very hard and still struggling socially, academically, or behaviorally deserves evaluation. "She\'s just immature" or "boys are just like that" are not answers.' },
              { label: 'The meltdowns or shutdowns are frequent and significant', desc: 'Intense, frequent emotional dysregulation that is out of proportion to apparent triggers — and doesn\'t respond to typical parenting approaches — warrants investigation.' },
              { label: 'Current diagnoses don\'t fully explain the picture', desc: 'If your child has ADHD or anxiety diagnoses but something still seems incomplete, autism may be part of the picture.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>For Adults: When to Pursue Evaluation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'You have always felt fundamentally different', desc: 'Not different as in shy or introverted — different as in operating by a different set of rules that everyone else seems to have and you were never taught.' },
              { label: 'Social navigation is exhausting', desc: 'Every interaction requires analysis, preparation, or debriefing. You are significantly more tired after social situations than others seem to be.' },
              { label: 'You have a pattern of mental health treatment that hasn\'t helped much', desc: 'Years of anxiety or depression treatment with partial results may suggest an underlying cause that hasn\'t been identified.' },
              { label: 'A family member is diagnosed', desc: 'Autism is heritable. A child\'s diagnosis frequently leads to parental self-recognition. Pursue evaluation if you see yourself in your child\'s traits.' },
              { label: 'You recognize yourself in autism descriptions', desc: 'Reading about autism in adults and finding that it describes your internal experience more accurately than anything else has is a reasonable basis for pursuing evaluation.' },
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
            We are not doctors. We are advocates. If the question is in your head, it deserves a real answer. Pursuing evaluation is not overreacting. It is taking your observations seriously.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Getting a Diagnosis →</Link>
            <Link href="/is-this-autism/checklist" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Signs Checklist →</Link>
            <Link href="/getting-a-diagnosis/finding-evaluators" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Finding Evaluators →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
