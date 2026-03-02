import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Autism School Rights: IDEA, IEP, FAPE, LRE | WeBearish",
  description: "Your child's legal rights in school: IDEA, FAPE, LRE, Section 504 vs IEP, evaluation rights, and how to dispute school decisions.",
  alternates: { canonical: "https://webearish.com/school-rights" },
};
export default function SchoolRightsPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>SCHOOL RIGHTS</span>
        <h1 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", margin: "12px 0 40px" }}>
          Your Child's Legal Rights in School
        </h1>
        {[
          { h: "IDEA: The Foundation", b: "The Individuals with Disabilities Education Act (IDEA) is the federal law governing special education in the US. It guarantees eligible students with disabilities the right to a free appropriate public education (FAPE) in the least restrictive environment (LRE). IDEA covers children from birth through age 21. It applies to all public schools. It is the foundation of every IEP." },
          { h: "FAPE: Free Appropriate Public Education", b: "FAPE means education that is free, appropriate to the child's individual needs, and reasonably calculated to enable educational progress. Courts have clarified that FAPE means more than minimal progress. The Endrew F. v. Douglas County School District decision (US Supreme Court, 2017) raised the standard: schools must provide programs reasonably calculated to enable progress appropriate in light of the child's circumstances." },
          { h: "LRE: Least Restrictive Environment", b: "LRE requires that students with disabilities be educated alongside non-disabled students to the maximum extent appropriate. Removal to a more restrictive setting is only allowed when the nature or severity of the disability is such that education in general education classes cannot be achieved satisfactorily with supplementary aids and services. LRE is frequently misapplied. Schools may default to restrictive placements without demonstrating they tried inclusion with appropriate supports." },
          { h: "Section 504 vs IEP: Key Differences", b: "A Section 504 plan is an accommodation plan under Section 504 of the Rehabilitation Act. It provides accommodations (changes to how students access learning) without specialized instruction. A 504 is appropriate when a student needs accommodations but not specialized instruction. An IEP provides both specialized instruction and accommodations. It is more legally binding and more resource-intensive. A student who does not qualify for an IEP may qualify for a 504." },
          { h: "Your Evaluation Rights", b: "You have the right to request an evaluation for special education services in writing at any time. The school has 60 days to evaluate and determine eligibility. The evaluation must be comprehensive and address all areas of suspected disability. You have the right to an independent educational evaluation (IEE) at public expense if you disagree with the school's evaluation." },
          { h: "When the School Says No: Your Options", b: "When a school refuses a request, they must provide prior written notice explaining why. Your options: request an informal meeting to discuss concerns; request mediation (neutral third party, free in most states); file a state complaint for procedural violations (within one year); request a due process hearing (formal legal proceeding before an impartial hearing officer). Each level escalates time, cost, and formality. Document everything in writing throughout." },
          { h: "Documentation Advice", b: "Document everything. Send important requests and communications via email. Follow up verbal conversations with written summaries. Keep copies of all evaluations, IEPs, and school correspondence. Note dates, who was present, and what was said in meetings. Parents who document consistently are far better positioned when disputes arise." },
        ].map(s => (
          <section key={s.h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>{s.h}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(250,250,248,0.75)" }}>{s.b}</p>
          </section>
        ))}
        <div style={{ borderTop: "1px solid rgba(184,232,135,0.1)", paddingTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/iep" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>IEP Resource Center →</Link>
          <Link href="/resources/by-state" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Resources by State →</Link>
          <a href="https://parentcenterhub.org/find-your-center" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Find Parent Advocate →</a>
        </div>
      </div>
    </div>
  );
}
