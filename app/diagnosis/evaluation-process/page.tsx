import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "What Happens in an Autism Evaluation | WeBearish",
  description: "A clear walkthrough of the autism evaluation process: who conducts it, what assessments are used, what to expect, and what to bring.",
  alternates: { canonical: "https://webearish.com/diagnosis/evaluation-process" },
};
export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>
          ← Diagnosis Guide
        </Link>
        <div style={{ marginTop: 24, marginBottom: 20, padding: '14px 20px', background: 'rgba(255,209,102,0.08)', border: '1px solid rgba(255,209,102,0.2)', fontSize: 13, color: 'rgba(250,250,248,0.6)', lineHeight: 1.6 }}>
          For informational purposes only. Not medical advice. Consult a licensed professional.
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '28px 0 40px' }}>The Autism Evaluation Process</h1>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Who Conducts Evaluations</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Autism evaluations are conducted by developmental pediatricians, child psychiatrists, pediatric neurologists, or neuropsychologists. The most comprehensive evaluations involve multidisciplinary teams including speech-language pathologists and occupational therapists alongside psychologists.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What the Evaluation Involves</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>A comprehensive evaluation typically includes a detailed developmental and medical history, direct observation of the child, standardized tools such as the ADOS-2, cognitive and adaptive behavior testing, and speech and language assessment. No single test diagnoses autism. The diagnosis is based on the pattern of findings across multiple areas.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Prepare</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>Bring prior evaluations, school reports, and teacher observations. Write specific examples of what you have observed with context. Include both challenges and strengths. Bring your child's full medical history. Ask about the timeline for the written report.</p>
        </section>
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>After the Evaluation</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>You should receive a written report with findings, a diagnosis if one is made, and recommendations. If autism is diagnosed, the report will typically recommend services and supports. You can share this report with your child's school to begin requesting special education services.</p>
        </section>
        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/diagnosis/dsm-5-criteria" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>DSM-5 Criteria →</a>
            <a href="/diagnosis/after-diagnosis" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>After the Diagnosis →</a>
            <a href="/iep" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>IEP Resource Center →</a>
        </div>
      </div>
    </div>
  );
}
