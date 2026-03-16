import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New Parent Roadmap: After an Autism Diagnosis | WeBearish',
  description: 'A practical roadmap for parents who just received their child\'s autism diagnosis — what to do first, what to expect, and how to find your footing.',
  alternates: { canonical: 'https://webearish.com/parents/roadmap' },
};

export default function ParentRoadmapPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <div style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)', marginBottom: 20 }}>
          <Link href="/" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href="/parents" style={{ color: 'rgba(250,250,248,0.4)', textDecoration: 'none' }}>Parents</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--lime)' }}>New Parent Roadmap</span>
        </div>

        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>PARENTS</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          New Parent Roadmap
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 16 }}>
          You just got the diagnosis. Maybe you suspected it for a long time and finally have a name. Maybe it came as a complete surprise. Either way, you are probably sitting with a pile of feelings and a pile of questions and not sure which pile to deal with first. This roadmap is for the first weeks and months after diagnosis — practical steps, in a reasonable order, from people who have been through it.
        </p>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '14px 20px', marginBottom: 40, fontSize: 14, color: 'rgba(250,250,248,0.6)' }}>
          We are not doctors. We are advocates. This content is for informational purposes. Professional guidance from your evaluation team and your child's providers is essential.
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Step 1: Give Yourself Time to Process</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The days immediately after diagnosis are not the time for action planning. They are time for processing. You may feel relief (finally an explanation), grief (mourning a future you imagined), fear (what does this mean for their life?), or all of these at once. All of those feelings are legitimate. None of them mean you love your child less.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Your child is the same child they were before the diagnosis. The diagnosis does not change who they are — it gives you a more accurate map of who they have always been.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Step 2: Read the Evaluation Report</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The psychological evaluation report contains the most useful information about your child's specific profile. Read it carefully. Make a list of questions for the evaluator. Understanding where your child's strengths and challenges lie is the foundation for everything that comes next.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'What specific areas were assessed? Are there areas that need further evaluation?',
              'What are the child\'s specific strengths? (Not just challenges — strengths matter equally.)',
              'Are there co-occurring conditions noted (ADHD, anxiety, sensory processing)?',
              'What are the evaluator\'s recommendations for services and support?',
              'Are there urgency items — speech delays, safety concerns, medical issues that need immediate attention?',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Step 3: School and Early Intervention</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Under age 3: contact your state\'s early intervention program', desc: 'Early intervention (EI) services are federally mandated and provided in the home for children under 3. Contact your state\'s program immediately after diagnosis — there are often waitlists. Services may include speech therapy, occupational therapy, and developmental support.' },
              { label: 'Age 3 and up: request an IEP evaluation from your school district', desc: 'Submit a written request to your local school district asking for a special education evaluation. The district has 60 days (in most states) to complete the evaluation and hold an IEP meeting. This process starts with a written letter — send it certified mail and keep a copy.' },
              { label: 'Document everything from day one', desc: 'Start a physical or digital binder for all evaluation reports, communications with schools and providers, IEP documents, and medical records. This documentation becomes invaluable if you ever need to advocate, dispute, or appeal.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <div>
                  <span style={{ fontWeight: 800, color: 'rgba(250,250,248,0.9)', fontSize: 15 }}>{item.label}: </span>
                  <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Step 4: Find Your Community</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Connect with other autism parents', desc: 'The support of parents who have been in your position — and who understand without explanation — is not optional, it is necessary. Local parent groups, online communities, and autism family networks give you access to real-world knowledge that no professional can replicate.' },
              { label: 'Listen to autistic adults', desc: 'The most valuable perspective on your child\'s experience often comes from autistic adults who can articulate what their childhood felt like from the inside. Books, blogs, podcasts, and social media accounts by autistic writers are an invaluable resource. Center autistic voices in your learning.' },
              { label: 'Be selective about advice', desc: 'You will receive a lot of unsolicited advice. Some of it will be helpful. Some of it will be harmful (miracle cures, unproven interventions, people who tell you to "try harder"). Develop a filter: prioritize autistic perspectives, evidence-based information, and sources that center your child\'s dignity.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Step 5: What Does Not Need to Happen Right Now</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'You do not need to enroll in every therapy immediately. Build slowly and evaluate what actually helps.',
              'You do not need to tell everyone right away. Share on your own timeline, with the people who need to know.',
              'You do not need to have a complete plan. The plan evolves as you know your child better.',
              'You do not need to grieve in a particular way or on a particular timeline.',
              'You do not need to become an expert overnight. You already know your child better than anyone else.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(184,232,135,0.06)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '1px solid rgba(184,232,135,0.1)', paddingTop: 28, marginBottom: 32 }}>
          <div style={{ fontSize: 12, letterSpacing: '2px', color: 'var(--lime)', fontWeight: 700, marginBottom: 14 }}>KEEP READING</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/iep" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>IEP Guide →</Link>
            <Link href="/parents/self-care" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parent Self-Care →</Link>
            <Link href="/getting-a-diagnosis" style={{ padding: '10px 18px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Diagnosis Guide →</Link>
          </div>
        </div>

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px' }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/parents" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Parents Hub →</Link>
            <Link href="/therapies" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Therapies Guide →</Link>
            <Link href="/voices" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Autistic Voices →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
