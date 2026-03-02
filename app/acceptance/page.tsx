import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Autism Acceptance vs Awareness: What It Means | WeBearish",
  description: "Why the autism community shifted from awareness to acceptance, what the neurodiversity model means, and what acceptance actually looks like in practice.",
  alternates: { canonical: "https://webearish.com/acceptance" },
};
export default function AcceptancePage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>ACCEPTANCE VS AWARENESS</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-2px", margin: "12px 0 40px" }}>
          Why Acceptance, Not Just Awareness
        </h1>
        {[
          { h: "The Distinction That Matters", b: "Awareness means knowing autism exists. Acceptance means structuring your community, workplace, classroom, and relationships to include autistic people genuinely. You can be aware of autism for decades without doing a single thing to make the world more navigable for autistic people. Acceptance requires action: accommodation, inclusion, and respect for autistic identity." },
          { h: "The Neurodiversity Model", b: "The neurodiversity framework holds that neurological differences, including autism, ADHD, dyslexia, and others, are natural variations in the human genome rather than disorders to be cured. It does not deny that autistic people face genuine challenges. It argues that many of those challenges are caused or worsened by environments designed exclusively for neurotypical people. The model shifts the question from how do we fix this person to how do we design systems that work for everyone." },
          { h: "Why Some Autism Organizations Are Controversial", b: "Autism Speaks, the largest autism organization in the US, has faced sustained criticism from autistic self-advocates and their allies. Key concerns include: historically low autistic leadership representation on the board, significant funding allocation to research on genetic causes rather than quality-of-life services, use of cure-focused and tragedy-based messaging that many autistic people find dehumanizing, and production of content (including the 2009 film I Am Autism) that autistic advocates described as a misrepresentation of their experience. Many autistic-led organizations, including the Autistic Self Advocacy Network (ASAN), advocate for supporting autistic people rather than finding cures." },
          { h: "Identity-First vs Person-First Language", b: "Person-first language says person with autism. Identity-first language says autistic person. Person-first language was developed by disability advocates in the 1980s to emphasize personhood beyond diagnosis. It remains preferred by some parents and clinicians. Identity-first language is preferred by most autistic adults who have stated a preference, because autism is not separate from who they are. Neither is universally correct. The individual's stated preference always takes priority." },
          { h: "The Double Empathy Problem", b: "Dr. Damian Milton's double empathy problem research challenges the idea that autistic people have a social deficit. His work shows that communication difficulties between autistic and non-autistic people are mutual. Non-autistic people have equal difficulty reading autistic social cues and communication styles. The breakdown is at the interface, not exclusively in the autistic person. This reframes autism from a social deficit to a difference in neurological social styles." },
          { h: "What Acceptance Actually Looks Like", b: "Acceptance is concrete. It looks like: sensory accommodations in classrooms, workplaces, and public spaces. IEPs that build on strengths alongside addressing support needs. AAC access for nonspeaking autistic people without delay. Autistic leadership in organizations that serve autistic people. Schools that stop punishing stimming. Workplaces that evaluate output rather than performance of enthusiasm. Families that do not try to make their autistic child appear non-autistic. Communities where autistic people belong." },
        ].map(s => (
          <section key={s.h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>{s.h}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(250,250,248,0.75)" }}>{s.b}</p>
          </section>
        ))}
        <div style={{ borderTop: "1px solid rgba(184,232,135,0.1)", paddingTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/voices" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Autistic Voices →</Link>
          <Link href="/glossary/neurodiversity" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>What Is Neurodiversity →</Link>
          <Link href="/resources" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Resource Library →</Link>
        </div>
        <div style={{ background: 'rgba(184,232,135,0.06)', border: '1px solid rgba(184,232,135,0.15)', padding: '20px 24px', marginTop: 40 }}>
          <div style={{ fontSize: 10, letterSpacing: '3px', color: 'var(--lime)', marginBottom: 14 }}>RELATED ON WEBEARISH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Link href="/voices" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Autistic Voices →</Link>
            <Link href="/research" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Research Hub →</Link>
            <Link href="/blog/awareness-is-not-acceptance" style={{ padding: "8px 16px", border: "1px solid rgba(184,232,135,0.2)", color: "var(--lime)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Awareness vs Acceptance →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
