import type { Metadata } from 'next';
import Link from 'next/link';
import MedicalDisclaimer from '../../components/MedicalDisclaimer';

export const metadata: Metadata = {
  title: 'ABA Therapy and Autism: What Parents Need to Know | WeBearish',
  description: "A balanced, evidence-informed look at ABA therapy — the history, the research, the controversy, and what autistic adults who experienced it say.",
  alternates: { canonical: 'https://webearish.com/therapies/aba' },
};

export default function Page() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--cream)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '64px 24px 80px' }}>
        <Link href="/therapies" style={{ fontSize: 13, color: 'var(--lime)', textDecoration: 'none', fontWeight: 700 }}>← Therapies Overview</Link>
        <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--coral)', marginTop: 24, marginBottom: 12 }}>THERAPIES</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontFamily: "'Nunito', sans-serif", fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>
          ABA Therapy:<br />What the Research Says. What Autistic Adults Say.
        </h1>
        <MedicalDisclaimer />
        <p style={{ fontSize: 16, color: 'rgba(250,250,248,0.75)', lineHeight: 1.8, marginBottom: 24 }}>
          No therapy in autism is more researched, more recommended by medical institutions, and more contested by autistic people than Applied Behavior Analysis. If you are a parent evaluating ABA, you deserve the full picture — not just the clinical endorsements and not just the critiques.
        </p>

        {[
          { title: 'What ABA Is', body: "ABA stands for Applied Behavior Analysis. It is a behavioral therapy rooted in B.F. Skinner's operant conditioning research. In autism contexts, ABA uses reinforcement (rewards for desired behaviors) and sometimes punishment or withholding of reinforcement for behaviors deemed undesirable. Modern ABA has evolved significantly from the early Lovaas method, which used aversive techniques including electric shock. Today most ABA providers use naturalistic, play-based, and assent-based approaches. The core principle — using behavioral reinforcement to increase or decrease specific behaviors — remains." },
          { title: 'What the Clinical Research Says', body: "ABA has more peer-reviewed research behind it than any other autism intervention. Studies show it can increase language, adaptive skills, and reduce certain behaviors in some autistic children. The American Academy of Pediatrics, the US Surgeon General, and most insurance providers consider it evidence-based. This research base is real. It is also worth noting that most major ABA studies measure short-term behavioral outcomes — not long-term wellbeing, quality of life, mental health, or self-reported satisfaction." },
          { title: 'What Autistic Adults Say', body: "The autistic community's response to ABA ranges from critical to strongly opposed. A 2018 peer-reviewed study (Kupferstein) found autistic people who received ABA showed elevated PTSD symptoms at rates comparable to other trauma populations. Autistic-led organizations including ASAN (Autistic Self Advocacy Network) and ASAN have called for a moratorium on ABA. Common autistic accounts describe: being trained to suppress stims that served regulatory purposes; being forced to make eye contact that caused pain; learning to mask distress rather than communicate it; and carrying shame about natural behaviors into adulthood. These are not fringe reports. They are widespread." },
          { title: 'The Core Disagreement', body: "The disagreement is not about whether ABA works. It is about what 'working' means. If 'working' means the child behaves more like a neurotypical child in observable ways, ABA research shows it does this. If 'working' means the child grows into an autistic adult with a healthy sense of self, reduced anxiety, genuine communication skills, and a life they find meaningful — the research is much thinner. Many autistic advocates argue ABA optimizes for the comfort of neurotypical observers at the expense of autistic wellbeing." },
          { title: 'What to Ask If You Are Considering ABA', body: "If you are evaluating an ABA provider, ask: Does the program use assent-based practices — meaning the child can pause or end sessions? Does the program try to eliminate stims, or only behaviors that cause genuine harm or safety risk? What does the therapist do when the child is clearly distressed? How does the program communicate with and consult the child as they grow? Does the program work toward the child's stated goals, or toward external behavioral checklists? There are ABA providers who genuinely center autistic wellbeing. There are also providers who do not. Ask hard questions." },
          { title: 'Alternatives and Complements', body: "Other approaches with growing evidence bases and stronger autistic community support include: DIR/Floortime, which follows the child's lead to build genuine connection and communication; Occupational Therapy focused on sensory processing and adaptive skills; Speech-Language Therapy for communication goals, including AAC; CBT adapted for autistic people by therapists with autism expertise; and naturalistic developmental behavioral interventions (NDBIs) that blend behavioral and developmental models. Many families use a combination of approaches." },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: 36, paddingBottom: 36, borderBottom: '1px solid rgba(184,232,135,0.08)' }}>
            <h2 style={{ fontSize: 20, fontFamily: "'Nunito', sans-serif", fontWeight: 800, color: 'var(--lime)', marginBottom: 12 }}>{s.title}</h2>
            <p style={{ fontSize: 15, color: 'rgba(250,250,248,0.75)', lineHeight: 1.8 }}>{s.body}</p>
          </div>
        ))}

        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '24px 28px', marginBottom: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 10 }}>SOURCES</div>
          {[
            'Kupferstein, H. (2018). Evidence of increased PTSD symptoms in autistic adults who received ABA. Advances in Autism.',
            'Autistic Self Advocacy Network. Opposing Applied Behavior Analysis. autisticadvocacy.org',
            'Sandoval-Norton, A. & Shkedy, G. (2019). How much compliance is too much compliance? Behavioral Interventions.',
            'Dawson, M. (2004). The misbehavior of behaviorists. Canadian Journal of Learning Disabilities.',
          ].map((s, i) => <p key={i} style={{ fontSize: 12, color: 'rgba(250,250,248,0.4)', marginBottom: 4 }}>{s}</p>)}
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[['IEP Rights', '/iep'], ['AAC Guide', '/communication/aac'], ['School Rights', '/school-rights'], ['All Therapies', '/therapies']].map(([l, h]) => (
            <Link key={h} href={h} style={{ padding: '10px 20px', border: '1px solid rgba(184,232,135,0.2)', color: 'var(--lime)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
