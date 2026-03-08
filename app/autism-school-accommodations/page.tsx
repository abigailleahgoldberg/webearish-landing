import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism School Accommodations: A Complete Parent Guide | WeBearish',
  description: 'Full list of autism school accommodations, how to request them, and the difference between a 504 plan and an IEP. A practical guide for parents advocating in school.',
  alternates: { canonical: 'https://webearish.com/autism-school-accommodations' },
};

const ACCOMMODATIONS = [
  { category: 'Time and Workload', items: ['Extended time on tests and in-class assignments', 'Extended deadlines for homework with prior arrangement', 'Reduced assignment length (same content, fewer problems)', 'Chunked or segmented multi-step assignments', 'Frequent check-ins on progress and understanding'] },
  { category: 'Sensory Environment', items: ['Noise-canceling headphones during independent work', 'Preferential seating away from high-traffic areas', 'Dimmed lighting or natural light alternatives', 'Access to a designated quiet space or sensory room', 'Permission to wear sunglasses or hat for light sensitivity', 'Use of a fidget tool or sensory items at desk', 'Flexible seating (floor, standing desk, wobble chair)'] },
  { category: 'Communication and Instruction', items: ['Written instructions provided in addition to verbal', 'Simplified or broken-down directions', 'Copy of class notes provided', 'Teacher check-in before, during, and after assignments', 'Visual schedule posted at desk or shared digitally', 'Pre-warning before transitions or schedule changes', 'Use of visual timers during timed activities'] },
  { category: 'Social and Behavioral', items: ['Access to a trusted adult check-in (daily or as needed)', 'Structured break time between classes or during stress', 'Permission to take self-regulated sensory breaks', 'Reduced unstructured social time requirements (if distressing)', 'Lunch in a quieter setting as needed', 'Early dismissal from class to avoid hallway crowding', 'Buddy system or peer support during transitions'] },
  { category: 'Testing and Assessment', items: ['Tests in a quiet room or small group setting', 'Oral examination option for written assessments', 'Tests read aloud by examiner or text-to-speech', 'Elimination of multiple-choice question groupings that increase anxiety', 'Breaks during longer tests', 'Use of word processor for written exams', 'Speech-to-text software allowed'] },
  { category: 'Communication Supports (AAC and Language)', items: ['AAC device accessible in all settings', 'Communication board available at desk and in common areas', 'Permission to type or write instead of speaking verbally', 'Speech-language support during classroom activities'] },
];

export default function AutismSchoolAccommodationsPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>SCHOOL ADVOCACY</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Autism School Accommodations: A Complete Parent Guide
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          School accommodations are changes to how your child accesses education -- not changes to the content or expectations. They level a playing field that is not currently level. This guide covers the most common accommodations for autistic students, how to request them, and the difference between the two main legal frameworks that make them possible.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>504 Plan vs. IEP: The Key Difference</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 20 }}>
            Two federal laws govern school accommodations and services for students with disabilities. Understanding the difference matters because it determines what you can request, how legally binding it is, and what process you go through to get it.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div style={{ padding: '20px', background: 'rgba(184,232,135,0.05)', border: '1px solid rgba(184,232,135,0.2)' }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--lime)', letterSpacing: '2px', marginBottom: 12 }}>504 PLAN</div>
              <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.65)', lineHeight: 1.7 }}>Under Section 504 of the Rehabilitation Act. Provides accommodations (how the student accesses learning) without specialized instruction. Lower eligibility threshold. Often faster to obtain. Does not include specialized instruction or related services. Monitored by general education, not special education.</div>
            </div>
            <div style={{ padding: '20px', background: 'rgba(255,209,102,0.05)', border: '1px solid rgba(255,209,102,0.15)' }}>
              <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--yellow)', letterSpacing: '2px', marginBottom: 12 }}>IEP</div>
              <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.65)', lineHeight: 1.7 }}>Under IDEA. Includes both accommodations AND specialized instruction and related services (speech, OT, PT, counseling). More legally binding and more resource-intensive. Requires formal evaluation and eligibility determination. Annual review required. Stronger legal protections for parents.</div>
            </div>
          </div>
          <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.55)', lineHeight: 1.7 }}>
            A student who needs only accommodations may be well-served by a 504. A student who needs specialized instruction -- a different way of being taught, not just a different way of accessing the classroom -- needs an IEP. You can read more about IEPs in the <Link href="/iep" style={{ color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>IEP Resource Center</Link>.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>Full List of Common Accommodations</h2>
          <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.5)', marginBottom: 20 }}>
            This is a starting point, not a prescription. Accommodations should be tailored to your specific child's needs. Every item here has been used by autistic students in real schools.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {ACCOMMODATIONS.map(cat => (
              <div key={cat.category}>
                <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--lime)', letterSpacing: '2px', marginBottom: 10 }}>{cat.category.toUpperCase()}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
                  {cat.items.map((item, i) => (
                    <div key={i} style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.08)', fontSize: 13, color: 'rgba(250,250,248,0.65)', lineHeight: 1.5 }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>How to Request Accommodations</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            For a 504 plan, contact your child's school counselor or the Section 504 coordinator (every public school must have one). For an IEP, your child must first be evaluated for special education eligibility. Request the evaluation in writing to the school principal and special education director.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { step: '01', text: 'Put your request in writing. Email is fine. Send to both the school principal and the special education director (for IEP) or 504 coordinator.' },
              { step: '02', text: 'State specifically that you are requesting accommodations under Section 504 or a comprehensive evaluation under IDEA. Name the law.' },
              { step: '03', text: 'Include a brief description of your concerns -- not a diagnosis requirement, just your observations.' },
              { step: '04', text: 'Keep copies of all correspondence. Note dates. Follow up in writing after any verbal conversations.' },
              { step: '05', text: 'The school must respond in writing. If they deny your request, they must provide a written explanation. You can appeal.' },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: 16, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)', alignItems: 'flex-start' }}>
                <span style={{ fontWeight: 900, fontSize: 13, color: 'var(--lime)', flexShrink: 0 }}>{item.step}</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When Schools Resist</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Schools sometimes resist providing accommodations -- citing cost, feasibility, or suggesting the child does not need them. You have rights. The school cannot simply refuse to provide reasonable accommodations to a student with a documented disability. If you encounter resistance:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Ask for the refusal in writing with the specific reason.',
              'Request to speak with the special education director or district administrator.',
              'Contact your state\'s Parent Training and Information (PTI) center -- these are federally funded and free.',
              'File a complaint with your state education department for IDEA violations.',
              'Consider consulting a special education advocate or attorney.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/resources" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>All Resources →</Link>
            <Link href="/blog" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>WeBearish Blog →</Link>
            <Link href="/contact" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>Contact Us →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/iep" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Resource Center →</Link>
            <Link href="/school-rights" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>School Rights →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
