import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autism and Anxiety: What Parents Need to Know | WeBearish',
  description: 'How anxiety presents differently in autistic children, why it is so common, evidence-based supports, and when to seek additional help. A practical guide for parents.',
  alternates: { canonical: 'https://webearish.com/autism-and-anxiety' },
};

export default function AutismAndAnxietyPage() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <span style={{ fontSize: 11, letterSpacing: '3px', color: 'var(--lime)', fontWeight: 700 }}>AUTISM AND MENTAL HEALTH</span>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, letterSpacing: '-1.5px', margin: '12px 0 24px' }}>
          Autism and Anxiety: What Parents Need to Know
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.6)', marginBottom: 40 }}>
          Anxiety is one of the most common co-occurring conditions in autistic people. Research estimates that between 40 and 50 percent of autistic children experience clinically significant anxiety. But anxiety in autistic children often looks different from what most people expect -- which means it is frequently missed, misread, or addressed with the wrong strategies.
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Why Anxiety Is So Common in Autistic Children</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            The autistic nervous system processes the world differently. Sensory input is often more intense, routines matter more, and social situations require more conscious effort to navigate. These are not character flaws -- they are features of how autistic brains work. But in a world not designed for autistic neurology, the mismatch creates constant low-level stress.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Add to that the pressure to mask -- to suppress natural autistic behaviors to appear more neurotypical -- and the result is a nervous system under chronic strain. Many autistic children spend their school day working extremely hard to seem "normal." That effort is exhausting and anxiety-producing.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)' }}>
            Uncertainty is also particularly difficult for many autistic people. When the world feels unpredictable, the brain stays in a state of alert. Anxiety is partly the nervous system trying to manage a world that feels unsafe.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>How Anxiety Presents Differently in Autistic Children</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Standard anxiety presentations -- crying, saying "I am worried," avoiding situations -- are not always how autistic anxiety shows up. Look for:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Increased rigidity or demand for control', desc: 'An anxious autistic child may become more insistent on routines, rules, or sameness. This is not stubbornness -- it is an attempt to create safety.' },
              { label: 'Heightened sensory sensitivity', desc: 'Anxiety and sensory processing interact. When anxious, the threshold for sensory overwhelm drops. A child who normally manages noise may suddenly fall apart in the same environment.' },
              { label: 'Meltdowns and shutdowns', desc: 'Anxiety often drives meltdowns. If meltdowns are frequent, anxiety may be a major contributor, not just sensory overload alone.' },
              { label: 'Avoidance and school refusal', desc: 'Refusal to attend school, participate in activities, or engage socially is often anxiety, not defiance. The distinction matters for how you respond.' },
              { label: 'Somatic complaints', desc: 'Stomachaches, headaches, and fatigue without clear medical cause are common anxiety presentations in autistic children.' },
              { label: 'Increased stimming', desc: 'Stimming can increase when an autistic child is anxious. This is a regulatory behavior -- the body trying to manage internal state.' },
              { label: 'Flat affect or seeming "fine"', desc: 'Some autistic children internalize anxiety completely. They appear calm while experiencing significant internal distress.' },
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
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Evidence-Based Supports</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Standard anxiety interventions often need adaptation for autistic children. What works depends on the child. Some approaches with research support include:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'Adapted Cognitive Behavioral Therapy (CBT)', desc: 'CBT adapted for autistic people -- often called "CBT-ASD" -- uses visual supports, concrete language, and structured formats. The standard version is frequently not a good fit without modification.' },
              { title: 'Environmental accommodation', desc: 'Reducing unnecessary sources of sensory and social demand reduces the anxiety load. Accommodations at school and home are themselves an anxiety intervention.' },
              { title: 'Predictability and visual schedules', desc: 'Making the world more predictable directly reduces anxiety. Visual schedules, advance notice of changes, and consistent routines are evidence-based approaches, not just practical strategies.' },
              { title: 'Acceptance-based approaches', desc: 'Approaches that reduce shame and increase acceptance of autistic identity are associated with better mental health outcomes. Acceptance is not giving up -- it is the foundation for genuine support.' },
              { title: 'Reducing masking pressure', desc: 'Masking is associated with higher anxiety and burnout. Supporting environments where autistic children do not have to pretend to be neurotypical reduces the chronic stress that drives anxiety.' },
            ].map(item => (
              <div key={item.title} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,232,135,0.1)' }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--lime)', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(250,250,248,0.6)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>What Does Not Help</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Some common approaches actively make autistic anxiety worse. These include:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Forcing exposure without support -- "just do it" approaches can traumatize rather than build resilience.',
              'Punishing anxiety-driven behavior -- avoidance and rigidity driven by anxiety respond to punishment with more anxiety.',
              'Dismissing concerns -- autistic children who are told their worries are not real learn to mask anxiety rather than get help.',
              'Using anxiety as a reason to deny accommodations -- "they need to learn to cope" is not an evidence-based approach to anxiety treatment.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 16px', background: 'rgba(255,123,92,0.04)', border: '1px solid rgba(255,123,92,0.1)' }}>
                <span style={{ color: 'var(--coral)', fontWeight: 900, flexShrink: 0 }}>--</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.65)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>When to Seek Additional Help</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginBottom: 16 }}>
            Not every autistic child with anxiety needs clinical intervention, but some do. Consider seeking evaluation from a psychologist or psychiatrist familiar with autism when:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              'Anxiety is significantly interfering with daily functioning, school attendance, or family life.',
              'Your child is expressing hopelessness, self-harm, or suicidal thoughts -- seek immediate help.',
              'Meltdowns are increasing in frequency or intensity despite environmental supports.',
              'Your child is experiencing panic attacks or severe physical symptoms.',
              'You have tried environmental and support strategies without meaningful improvement.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: 'rgba(184,232,135,0.04)', border: '1px solid rgba(184,232,135,0.08)' }}>
                <span style={{ color: 'var(--lime)', fontWeight: 900, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(250,250,248,0.7)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(250,250,248,0.75)', marginTop: 16 }}>
            When seeking a therapist, ask specifically about their experience with autistic clients. Standard CBT and standard psychiatric evaluation are often not well-calibrated for autistic presentations. Finding someone with genuine autism expertise makes a meaningful difference.
          </p>
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
            <Link href="/meltdown-vs-tantrum" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Meltdown vs. Tantrum →</Link>
            <Link href="/sensory-tools-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sensory Tools Guide →</Link>
            <Link href="/autism-sleep-guide" style={{ padding: '8px 16px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Sleep Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
