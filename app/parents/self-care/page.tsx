import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Autism Parent Self-Care and Caregiver Support | WeBearish",
  description: "Caregiver burnout is real. Respite care, support groups, financial planning, and the resources parents need to sustain themselves.",
  alternates: { canonical: "https://webearish.com/parents/self-care" },
};
export default function ParentSelfCarePage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px 80px" }}>
        <Link href="/parents" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>
          ← Parent Hub
        </Link>
        <h1 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", margin: "28px 0 40px" }}>
          Parent Self-Care
        </h1>
        {[
          { h: "Caregiver Burnout Is Real", b: "Parenting an autistic child is not the same as parenting a non-autistic child. The system navigation, the advocacy work, the sensory management, the emotional availability required — it adds up. Caregiver burnout is a documented phenomenon. It is not weakness. It is a predictable response to sustained, intensive caregiving without adequate support." },
          { h: "Respite Care: What It Is and How to Access It", b: "Respite care provides temporary relief for primary caregivers. It can be in-home (a trained respite worker comes to you) or out-of-home (the child goes to a respite facility or host family). Medicaid waivers in most states fund respite care for eligible families. Contact your state's developmental disability agency to learn what is available. Waitlists exist. Start the process early." },
          { h: "Support Groups", b: "Connection with other parents who understand is one of the most consistently helpful resources parents describe. Options: local parent support groups (often through your regional autism center or school district), online communities (Facebook groups, Reddit communities), and AANE, ASAN, and other organizations that host parent programs. You are not alone." },
          { h: "Grief and Acceptance", b: "The grief cycle in autism parenting is real and does not follow a tidy path. You may grieve expectations. You may grieve the time before diagnosis. You may grieve the gap between what your child needs and what the system provides. Grief does not mean you do not love your child or accept their autism. It means you are human and the circumstances are genuinely difficult. Therapy that acknowledges the specific demands of disability parenting is worth seeking." },
          { h: "Financial Planning", b: "ABLE accounts allow families to save money for disability-related expenses without affecting government benefit eligibility. Special needs trusts protect assets while preserving eligibility for Medicaid and SSI. Supplemental Security Income (SSI) may be available for autistic individuals with significant support needs. Contact a special needs financial planner for guidance on your specific situation." },
        ].map(s => (
          <section key={s.h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>{s.h}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(250,250,248,0.75)" }}>{s.b}</p>
          </section>
        ))}
        <div style={{ borderTop: "1px solid rgba(184,232,135,0.1)", paddingTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/resources" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Resource Library →</Link>
          <Link href="/siblings" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Sibling Resources →</Link>
        </div>
      </div>
    </div>
  );
}
