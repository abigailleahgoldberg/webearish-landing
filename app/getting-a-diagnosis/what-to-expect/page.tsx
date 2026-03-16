import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Expect During an Autism Evaluation | WeBearish',
  description: 'A walkthrough of what happens during an autism evaluation — who is involved, what tests are used, how long it takes, and what the report means.',
  alternates: { canonical: 'https://webearish.com/getting-a-diagnosis/what-to-expect' },
};

export default function WhatToExpectPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Getting a Diagnosis</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM DIAGNOSIS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          What to Expect During an Autism Evaluation
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          An autism evaluation is a multi-part process that looks different depending on the provider, your child's age, and the setting. Knowing what to expect before you walk in reduces anxiety for both parent and child — and helps you participate more effectively.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Who Does Autism Evaluations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Developmental pediatricians', desc: 'Physicians with specialized training in developmental disabilities. Often the fastest route to diagnosis for young children through pediatric practices.' },
              { label: 'Neuropsychologists', desc: 'Psychologists specializing in brain-behavior relationships. Provide the most comprehensive evaluations, including cognitive and academic testing alongside autism assessment.' },
              { label: 'Child psychologists', desc: 'Clinical psychologists who can administer autism diagnostic tools. Quality varies significantly — ask specifically about autism expertise.' },
              { label: 'Psychiatrists', desc: 'Can diagnose autism and are particularly valuable when mental health co-occurrences (anxiety, depression, ADHD) need to be assessed alongside autism.' },
              { label: 'Multidisciplinary teams', desc: 'Hospital-based programs may involve a team — psychologist, speech-language pathologist, and occupational therapist — providing the most comprehensive picture.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Happens During the Evaluation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Parent/caregiver interview', desc: 'Detailed developmental history — pregnancy, birth, motor milestones, language milestones, behavior, social development, family history. This is often the longest part of the evaluation.' },
              { label: 'Standardized parent questionnaires', desc: 'Instruments like the Autism Diagnostic Interview-Revised (ADI-R) or ADOS-2 parent questionnaires gather systematic information about development and current behavior.' },
              { label: 'Direct observation and structured assessment', desc: 'The ADOS-2 (Autism Diagnostic Observation Schedule) is the gold standard direct observation tool. The evaluator engages the child in structured and semi-structured activities while observing communication, social behavior, and restricted/repetitive behaviors.' },
              { label: 'Cognitive and adaptive testing', desc: 'Intelligence testing and adaptive behavior measures (like the Vineland) assess how the child functions across settings. These are not required for diagnosis but inform support planning.' },
              { label: 'Report and feedback session', desc: 'The evaluator produces a written report and typically meets with parents to discuss findings, diagnosis, and recommendations. This session is important — come with questions.' },
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
            We are not doctors. We are advocates. A comprehensive evaluation typically takes 4-8 hours spread across one or two appointments. It is worth doing thoroughly.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Diagnosis Overview →</Link>
            <Link href="/getting-a-diagnosis/preparing" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Preparing for Evaluation →</Link>
            <Link href="/getting-a-diagnosis/cost-breakdown" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Cost Breakdown →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
