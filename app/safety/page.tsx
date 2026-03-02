import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Autism Safety Resources: Elopement, Crisis, Emergency | WeBearish",
  description: "Safety resources for autism families: elopement prevention, water safety, emergency planning, crisis lines, and how to register with first responders.",
  alternates: { canonical: "https://webearish.com/safety" },
};
export default function SafetyPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--coral)", fontWeight: 700 }}>SAFETY RESOURCES</span>
        <h1 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", margin: "12px 0 40px" }}>
          Autism Safety and Crisis Resources
        </h1>
        <div style={{ padding: "20px 24px", background: "rgba(255,123,92,0.1)", border: "1px solid rgba(255,123,92,0.3)", marginBottom: 48 }}>
          <div style={{ fontWeight: 900, fontSize: 15, color: "var(--coral)", marginBottom: 8 }}>Crisis Lines</div>
          <div style={{ fontSize: 14, color: "rgba(250,250,248,0.75)", lineHeight: 1.7 }}>
            988 Suicide and Crisis Lifeline: call or text 988<br/>
            Crisis Text Line: text HOME to 741741<br/>
            SAMHSA National Helpline: 1-800-662-4357
          </div>
        </div>
        {[
          { h: "Elopement: What You Need to Know", b: "Elopement — when an autistic person wanders or runs from a safe environment — affects approximately 49% of autistic children, according to research published in Pediatrics. It is a leading cause of injury and death in the autism community. Drowning is the leading cause of death in elopement incidents. Every autism family should have a prevention and response plan." },
          { h: "Elopement Prevention Strategies", b: "Physical barriers: door alarms, deadbolt locks placed high, door knob covers, window alarms, fenced yard with secure gate latches. Tracking and identification: GPS tracking devices (AngelSense, Jiobit), medical ID bracelets with contact information, photo ID card to carry. Visual supports: stop signs at doors, social stories about safe zones, visual cues about going outside. Communication: teaching the child to identify their name, address, and caregiver contacts to the extent possible." },
          { h: "Water Safety", b: "Drowning is the number one cause of death in autistic children who elope. Many autistic children are drawn to water. Swimming lessons adapted for autistic children can be lifesaving. Consider fencing all accessible water. AngelSense and similar GPS devices can alert caregivers immediately when a child leaves a safe zone. Pool alarms add an additional layer." },
          { h: "Registering with First Responders", b: "Many police departments maintain vulnerable person registries. Register your child with your local police department with a current photo, physical description, known elopement behaviors, and any communication considerations. Project Lifesaver (projectlifesaver.org) works with local law enforcement to provide trained search-and-rescue response. LoJack SafetyNet is another first responder program." },
          { h: "Emergency Information Cards", b: "Create a card your child can carry or that can be kept in a school or day program bag. Include: name, photo, diagnosis, communication style, sensory triggers, caregiver contact information, medical conditions, and what helps the child calm down. Keep it current. Give copies to school and regular caregivers." },
          { h: "What to Tell First Responders", b: "When calling 911 for an autistic person: state clearly that the person is autistic. Describe communication differences. Note sensory sensitivities that affect how they may respond to lights, sirens, and touch. Describe any de-escalation strategies. First responder autism training programs are improving but uneven — providing information upfront helps." },
        ].map(s => (
          <section key={s.h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>{s.h}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(250,250,248,0.75)" }}>{s.b}</p>
          </section>
        ))}
        <div style={{ borderTop: "1px solid rgba(184,232,135,0.1)", paddingTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/resources" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Resource Library →</Link>
          <Link href="/resources/by-state" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Resources by State →</Link>
        </div>
      </div>
    </div>
  );
}
