import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Autism Podcasts, YouTube Channels, and Documentaries | WeBearish",
  description: "The best autism podcasts, YouTube channels, and documentaries — filtered by autistic-led, parent-focused, and professional.",
  alternates: { canonical: "https://webearish.com/media" },
};
const MEDIA = {
  Podcasts: [
    { t: "Uniquely Human Podcast", who: "Parent + Professional", d: "Barry Prizant and Dave Finch discuss autism, acceptance, and what actually works for autistic people." },
    { t: "Neurodiverging", who: "Autistic-Led", d: "Danielle Sullivan covers autism, ADHD, and neurodivergent life from a lived-experience perspective." },
    { t: "Autism Science Foundation Podcast", who: "Professional", d: "Research-focused episodes on autism science, evidence-based intervention, and the state of the field." },
    { t: "Autism & Beyond", who: "Parent + Clinical", d: "Practical guidance for parents on navigating diagnosis, school, and daily life." },
    { t: "The Autistic Woman Network", who: "Autistic-Led", d: "Focused specifically on the experience of autistic women, late diagnosis, and gender." },
  ],
  YouTube: [
    { t: "Autism Sketches", who: "Autistic-Led", d: "Short, relatable sketches about autistic daily life — funny and genuine." },
    { t: "The Aspie World", who: "Autistic-Led", d: "Daniel Jones shares personal autism experience, advice, and awareness content." },
    { t: "Yo Samdy Sam", who: "Autistic-Led", d: "Late-diagnosed autistic woman sharing the unmasking journey and autistic daily life." },
    { t: "Neurodivergent Rebel", who: "Autistic-Led", d: "Weekly content on neurodivergence, advocacy, and autistic identity." },
    { t: "Purple Ella", who: "Autistic-Led", d: "Autistic mother covering autism parenting and personal autistic experience." },
  ],
  Documentaries: [
    { t: "Life, Animated", who: "Documentary", d: "The story of a nonspeaking autistic young man who found his voice through Disney films. Honest and deeply human." },
    { t: "Autism in Love", who: "Documentary", d: "Four autistic adults navigating romantic relationships — intimate and non-condescending." },
    { t: "Neurotypical", who: "Documentary", d: "Told from the autistic perspective, examining neurotypical society through autistic eyes." },
    { t: "Wretches and Jabberers", who: "Documentary", d: "Two autistic self-advocates travel the world to challenge assumptions about intelligence and communication." },
  ],
};
const BADGE: Record<string, string> = { "Autistic-Led": "var(--lime)", "Parent + Professional": "var(--yellow)", "Professional": "rgba(250,250,248,0.4)", "Parent + Clinical": "var(--yellow)", "Documentary": "var(--coral)" };
export default function MediaPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>MEDIA DIRECTORY</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-2px", margin: "12px 0 16px" }}>Podcasts, YouTube, and Documentaries</h1>
        {Object.entries(MEDIA).map(([category, items]) => (
          <div key={category} style={{ marginBottom: 52 }}>
            <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid rgba(184,232,135,0.15)" }}>{category}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {items.map(m => (
                <div key={m.t} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,232,135,0.08)", padding: "18px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 800, fontSize: 15, color: "var(--cream)" }}>{m.t}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1px", padding: "2px 8px", background: "rgba(255,255,255,0.06)", color: BADGE[m.who] || "rgba(250,250,248,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>{m.who.toUpperCase()}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "rgba(250,250,248,0.5)", lineHeight: 1.6, margin: 0 }}>{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
