import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Does Insurance Cover Autism Evaluations? | WeBearish',
  description: 'What insurance covers for autism evaluations, how to navigate prior authorization, what to do when coverage is denied, and tips for maximizing benefits.',
  alternates: { canonical: 'https://webearish.com/getting-a-diagnosis/insurance' },
};

export default function InsurancePage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Getting a Diagnosis</Link>
        <span style={{ display: 'block', fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700, marginTop: 24 }}>AUTISM DIAGNOSIS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Insurance Coverage for Autism Evaluations
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Insurance coverage for autism evaluations varies by plan, state, and how the evaluation is coded. Many families are surprised to learn they have coverage they didn't know about — or denied coverage they should have received. Understanding how the system works helps you get what you're entitled to.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Federal Law Requires</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The Mental Health Parity and Addiction Equity Act (MHPAEA) requires most insurance plans that cover mental health and behavioral health services to provide those benefits at the same level as medical and surgical benefits. Autism evaluations typically fall under behavioral health — meaning plans cannot impose more restrictive limitations on autism evaluation than on other medical evaluations.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Additionally, all 50 states have autism insurance mandates requiring insurers to cover autism diagnosis and treatment, though the specifics vary by state.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Navigating Your Insurance</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Call your insurance before scheduling', desc: 'Ask specifically: "Does my plan cover autism diagnostic evaluations? What diagnosis codes are covered? Do I need a referral or prior authorization? What is my out-of-pocket after coverage?"' },
              { label: 'Get the referral if required', desc: 'Some plans require a referral from a primary care physician before an evaluation will be covered. Get this in writing before the appointment.' },
              { label: 'Prior authorization', desc: 'Many plans require prior authorization for psychological testing. The evaluator\'s office typically handles this — but confirm before the appointment, or you may receive an unexpected bill.' },
              { label: 'In-network vs out-of-network', desc: 'Using an in-network evaluator dramatically reduces out-of-pocket cost. Ask for the plan\'s in-network autism evaluation providers specifically. The general "find a provider" tool often misses specialists.' },
              { label: 'Superbills from out-of-network providers', desc: 'If your preferred evaluator is out-of-network, ask for a superbill after the evaluation and submit it to your insurance for out-of-network reimbursement. Reimbursement rates vary, but something is better than nothing.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When Coverage Is Denied</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Request the denial in writing, including the specific reason and the plan language being applied.',
              'File an appeal. Most denials that are appealed are reversed, particularly when a physician or evaluator supports medical necessity.',
              'Request a peer-to-peer review — your child\'s doctor calls the insurance medical director directly. This often resolves denials faster than formal appeals.',
              'Contact your state insurance commissioner if you believe the denial violates the mental health parity law or your state\'s autism mandate.',
              'Patient advocacy organizations like the Autism Society of America have insurance navigation resources.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>{i + 1}.</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 8 }}>A NOTE FROM WEBEARISH</div>
          <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7, margin: 0 }}>
            We are not doctors. We are advocates. Insurance denial is not the end of the road. Most first denials are reversed on appeal. Keep pushing.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/getting-a-diagnosis/cost-breakdown" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Cost Breakdown →</Link>
            <Link href="/getting-a-diagnosis/finding-evaluators" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Finding Evaluators →</Link>
            <Link href="/getting-a-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Diagnosis Overview →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
