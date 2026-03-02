import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "AAC: Complete Guide to Augmentative Communication | WeBearish",
  description: "Everything about AAC: types, devices, apps (Proloquo2Go, TouchChat, LAMP), how to introduce it, insurance funding, presume competence, and myths.",
  alternates: { canonical: "https://webearish.com/communication/aac" },
};
export default function AACPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px 80px" }}>
        <Link href="/communication" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>
          ← Communication
        </Link>
        <h1 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", margin: "28px 0 40px" }}>
          AAC: Complete Guide
        </h1>
        {[
          { h: "What AAC Is", b: "Augmentative and Alternative Communication (AAC) refers to any method used to supplement or replace natural speech for people who cannot rely on it as their primary communication form. It includes unaided methods (sign language, gestures, body language) and aided methods (picture boards, PECS, speech-generating devices, apps). AAC is not a last resort. It is a right." },
          { h: "AAC Does Not Prevent Speech", b: "This is the most important myth to address. Research consistently shows that AAC supports speech development — it does not replace or prevent it. Multiple studies have demonstrated that children who receive AAC access develop more speech over time than those who do not. Delaying AAC access to wait for speech to develop is not supported by evidence and denies communication access." },
          { h: "Types of AAC", b: "Low-tech: picture boards, communication books, PECS (Picture Exchange Communication System), Makaton symbols. Mid-tech: recordable switches, simple voice output devices. High-tech: speech-generating devices (SGDs) and communication apps. Apps include Proloquo2Go (iOS), TouchChat (iOS/Android), Snap Core First, TD Snap, LAMP Words for Life, and LetMeTalk (free, Android). The right system depends on the individual's motor abilities, vision, and communication needs." },
          { h: "Presume Competence", b: "Presume competence means assuming every person has the capacity to communicate, learn, and engage — until evidence demonstrates otherwise. It is the ethical default. When we do not presume competence, we offer inadequate communication systems, watered-down education, and reduced opportunities. Many nonspeaking autistic people communicate in remarkable ways when given robust AAC access." },
          { h: "How to Support an AAC User", b: "Model AAC use yourself (aided language stimulation). Give the person time to respond without jumping in. Never talk over the person's AAC device. Respond to all communication attempts, including early and approximated ones. Include the AAC user in conversations about them. Protect the device — it is their voice. Follow the AAC user's lead about how they want to use it." },
          { h: "Funding AAC", b: "Medicaid covers AAC devices when medically necessary, with documentation from a speech-language pathologist. Private insurance must cover it in states with autism insurance mandates. School districts must provide AAC when it is in the IEP. Some nonprofit organizations provide AAC funding for uninsured individuals. ASHA (asha.org) has resources on funding and advocacy." },
          { h: "Myths About AAC", b: "Myth: you have to exhaust all other options before trying AAC. Fact: start AAC as early as appropriate — earlier is better. Myth: AAC is only for people who cannot speak at all. Fact: many AAC users speak in some situations and use AAC in others. Myth: using AAC means giving up on speech. Fact: AAC supports speech development. Myth: the device is too expensive. Fact: apps like LetMeTalk are free; insurance and Medicaid fund high-tech devices." },
        ].map(s => (
          <section key={s.h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>{s.h}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(250,250,248,0.75)" }}>{s.b}</p>
          </section>
        ))}
        <div style={{ borderTop: "1px solid rgba(184,232,135,0.1)", paddingTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/glossary/aac" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Glossary: AAC →</Link>
          <Link href="/glossary/presuming-competence" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Presume Competence →</Link>
          <Link href="/resources" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Resource Library →</Link>
        </div>
      </div>
    </div>
  );
}
