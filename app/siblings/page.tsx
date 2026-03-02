import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Siblings of Autistic Children: Resources and Support | WeBearish",
  description: "Resources for siblings of autistic children: for younger kids who want to understand, for teens navigating identity, and for parents supporting all their children.",
  alternates: { canonical: "https://webearish.com/siblings" },
};
export default function SiblingsPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>FOR SIBLINGS</span>
        <h1 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, letterSpacing: "-1.5px", margin: "12px 0 40px" }}>
          For Siblings of Autistic Children
        </h1>
        {[
          { h: "For Younger Children: Why Does My Brother or Sister Do That?", b: "Your sibling's brain works differently. Not broken — different. When they flap their hands or rock, it is because their body needs to move that way to feel okay. When they get really upset about something that seems small, it is because their nervous system felt it much more intensely than you did. When they want to talk about the same thing over and over, it is because that thing makes them feel happy and safe. They love you, even if they show it in their own way." },
          { h: "For Teens: Your Experience Matters Too", b: "Growing up with an autistic sibling is a real experience that is not talked about enough. You may have had moments where the family's attention felt unequal. You may have had to explain your sibling to friends. You may feel proud of them and exhausted by them in the same week. All of this is real, and your feelings deserve space. You are not a caregiver first. You are a sibling." },
          { h: "For Teens: Finding Your Own Identity", b: "It is common for siblings of autistic children to organize some of their identity around their sibling's needs. Your identity is yours. Your goals, interests, and relationships deserve the same investment your family puts into your sibling's support. If that feels out of balance, you can name it." },
          { h: "Conversation Starters for Younger Siblings", b: "Questions that can open honest conversation: What is the hardest part about having a sibling who is autistic? What is something you are proud of about them? When do you feel left out? When do you feel like an important part of the family? What do you wish people understood about your family? There are no wrong answers." },
          { h: "Sibshops and Sibling Support Groups", b: "Sibshops (siblingsupport.org) are peer support programs designed specifically for siblings of people with disabilities. They exist in communities across the US and internationally. They are not therapy — they are peer connections with other kids who understand. Many siblings say Sibshops are where they first felt seen in the context of their family situation." },
          { h: "For Parents: Supporting All Your Children", b: "Siblings need protected time with parents that is not about the autistic sibling. They need to have their own school events, interests, and struggles attended to. They need explicit permission to have feelings about their situation without those feelings being managed as a problem. They need to know they are not expected to become caregivers. They need to see their sibling as a full person, which means access to positive autistic representation." },
        ].map(s => (
          <section key={s.h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>{s.h}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(250,250,248,0.75)" }}>{s.b}</p>
          </section>
        ))}
        <div style={{ borderTop: "1px solid rgba(184,232,135,0.1)", paddingTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="https://siblingsupport.org" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Sibshops →</a>
          <Link href="/parents" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Parent Hub →</Link>
          <Link href="/resources" style={{ fontSize: 13, color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>Resource Library →</Link>
        </div>
      </div>
    </div>
  );
}
