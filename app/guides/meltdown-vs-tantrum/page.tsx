import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Meltdown vs Tantrum: The Complete Guide | WeBearish",
  description: "A detailed guide to the difference between autistic meltdowns and tantrums: causes, warning signs, de-escalation strategies, and what never to do.",
  alternates: { canonical: "https://webearish.com/guides/meltdown-vs-tantrum" },
};
export default function MeltdownPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>PARENT GUIDE</span>
        <h1 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", margin: "12px 0 40px" }}>
          Meltdown vs Tantrum: What Parents Need to Know
        </h1>
        {[
          { h: "The Core Difference", b: "A tantrum is goal-directed behavior. The child wants something or wants to avoid something, and the behavior is a strategy — conscious or not — to get or avoid that thing. A meltdown is a neurological overload response. The autistic person is not in control, is not monitoring for reactions, and cannot simply stop. One is a social strategy. The other is a nervous system event." },
          { h: "What Causes a Meltdown", b: "Meltdowns are caused by the accumulation of sensory, emotional, or cognitive demands that exceed the nervous system's capacity to process. This is not a single event — it is often a buildup throughout the day. A meltdown in the parking lot after school may have been building since 8 AM. Sensory input (noise, light, crowd, texture), social demands, unexpected changes, hunger, fatigue, and the effort of masking all contribute to the load." },
          { h: "Warning Signs Before a Meltdown", b: "Most meltdowns have warning signs: increased stimming, withdrawal, covering ears or eyes, difficulty speaking, flat affect, repeated questions about routine, physical tension, crying without apparent cause, requests to leave, or aggression beginning to surface. Learning your child's specific warning signs is one of the most useful skills a parent can develop. Intervention in the warning phase is far more effective than response during the meltdown itself." },
          { h: "What to Do During a Meltdown", b: "Reduce stimulation immediately: lower your voice, reduce visual clutter, move to a quieter space if possible. Do not try to reason, teach, or explain during the meltdown. The cognitive processing required for those conversations is not available. Stay calm. Protect safety — prevent injury to the child or others — without restraint if possible. Give space. Stay nearby. Wait. The meltdown will end when the nervous system regulates, not before." },
          { h: "What Never to Do", b: "Do not punish a meltdown. Punishing an involuntary neurological response is both ineffective and harmful. Do not demand eye contact, compliance, or verbal responses during the event. Do not increase stimulation (raised voices, physical touch without consent, bright lights). Do not try to use the moment to teach a lesson. Do not say 'you're fine' or 'calm down.' None of these are accessible during a meltdown." },
          { h: "After the Meltdown", b: "The period after a meltdown is often characterized by exhaustion and shame. Many autistic people feel significant distress about meltdowns. The conversation — if there is one — belongs later, after rest and recovery. Connection before correction. Your child knowing they are still loved and safe matters more than processing what happened." },
          { h: "Explaining to Teachers and Family", b: "Key points: this is not a behavior problem, it is a nervous system event. Prevention is more effective than response. The most useful question is what triggered it, not how to stop it. Punishing meltdowns is counterproductive. Reducing sensory demands prevents meltdowns. Schools can build in sensory breaks, quiet spaces, and transition warnings that reduce the frequency significantly." },
        ].map(s => (
          <section key={s.h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>{s.h}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(250,250,248,0.75)" }}>{s.b}</p>
          </section>
        ))}
        <div style={{ borderTop: "1px solid rgba(184,232,135,0.1)", paddingTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/glossary/meltdown" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Glossary: Meltdown →</Link>
          <Link href="/glossary/sensory-overload" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Sensory Overload →</Link>
          <Link href="/iep" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>IEP Resource Center →</Link>
        </div>
      </div>
    </div>
  );
}
