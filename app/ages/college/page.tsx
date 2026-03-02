import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autistic Students in College: A Practical Guide | WeBearish',
  description: "How autistic students can navigate disability services, disclosure, dorm life, executive function challenges, and social navigation in college.",
  alternates: { canonical: 'https://webearish.com/ages/college' },
};

export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/ages" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Ages Overview</Link>
        <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--coral)', marginTop: 24, marginBottom: 12 }}>AGES — COLLEGE</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontFamily: "'Nunito', sans-serif", fontWeight: 900, marginBottom: 20 }}>Autistic Students in College</h1>
        <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.65)', lineHeight: 1.8, marginBottom: 40, maxWidth: 640 }}>
          College is a significant transition. The structure and support of K-12 largely disappears. Self-advocacy becomes essential. This guide covers what autistic students need to know before arriving, during the first semester, and beyond.
        </p>

        {[
          { h: 'Disability Services: Your Rights and How to Use Them', body: "In college, IDEA no longer applies — the ADA and Section 504 do. This means your school must provide reasonable accommodations, but the process is self-initiated. You must register with the Disability Services or Student Accessibility Services office. Bring documentation — typically a psychoeducational evaluation or diagnosis letter. Do this before the semester starts. Accommodations are not retroactive. Common accommodations include extended time on exams, testing in a quiet room, note-taking support, priority registration, housing accommodations, and reduced course loads." },
          { h: 'Disclosure: To Tell or Not to Tell', body: "You are not required to disclose your autism diagnosis to professors, classmates, or advisors. You only need to disclose to Disability Services to receive accommodations. That disclosure is confidential. Whether to tell professors is a personal decision. Some autistic students find transparency helpful — it explains communication differences and allows professors to be more flexible. Others prefer privacy. Both are valid. Never disclose unless you choose to." },
          { h: 'Executive Function Strategies', body: "The executive function demands of college are significant: managing your own schedule, initiating tasks without prompting, tracking multiple assignments across multiple classes, managing time on long-term projects, and keeping track of deadlines. Strategies that help: use a single external calendar (digital or physical) for everything; set reminders 3 days and 1 day before deadlines; break assignments into the smallest possible steps; use the Disability Services note-taking services even if you think you do not need them; meet with a professor in the first two weeks of every course." },
          { h: 'Dorm Life and Sensory Considerations', body: "Dorms are sensory environments. Shared walls, communal bathrooms, bright lights, noise from hallways, and erratic schedules are standard. Before arrival: request a single room through Disability Services if shared housing would significantly impair your functioning — this is a recognized accommodation. Bring sensory tools: ear defenders, blackout eye mask, white noise machine, lighting alternatives to overhead fluorescents. Communicate clearly with roommates early about noise and schedule preferences. Know where the quiet spaces on campus are." },
          { h: 'Social Navigation', body: "College social environments are unstructured and ambiguous in ways that high school is not. You are not required to participate in every social event. You do not need to join organizations to have a successful college experience. Find structured social contexts — clubs, classes, study groups — where the shared purpose reduces social ambiguity. Many campuses have autism-specific social groups or neurodiversity clubs. Structured activities with clear purposes are generally more comfortable than open-ended social gatherings." },
          { h: 'Managing Burnout', body: "The transition to college is a burnout risk. The combination of new environment, reduced support, increased masking demands, and executive function overload can lead to a crash in the first semester. Protect your capacity: schedule genuine downtime, maintain sensory decompression time daily, do not over-commit in the first year, and make use of counseling services early — find an autism-informed counselor before you need them urgently." },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid rgba(184,232,135,0.08)' }}>
            <h2 style={{ fontSize: 20, fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: 'var(--lime)', marginBottom: 12 }}>{s.h}</h2>
            <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.75)', lineHeight: 1.8 }}>{s.body}</p>
          </div>
        ))}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[['Adults Hub', '/adults'], ['Autistic Burnout', '/adults/burnout'], ['Employment', '/adults/employment'], ['Ages Overview', '/ages']].map(([l, h]) => (
            <Link key={h} href={h} style={{ padding: '10px 20px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
