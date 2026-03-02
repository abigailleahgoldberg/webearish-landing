import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../data";

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: { absolute: `${post.title} | WeBearish` },
    description: post.description,
    alternates: { canonical: `https://webearish.com/blog/${slug}` },
  };
}

/* ── INTERNAL LINK MAP ──────────────────────────────────────────────────
   Each entry: { slugs: posts that get this sidebar card, links: [...] }
   Links appear as a "Related Resources" card beside the post.
────────────────────────────────────────────────────────────────────────── */
const LINK_MAP: Record<string, { label: string; href: string }[]> = {
  "the-aba-debate-what-parents-need-to-know": [
    { label: "Full ABA Guide", href: "/therapies/aba" },
    { label: "AAC as an Alternative", href: "/communication/aac" },
    { label: "School Rights", href: "/school-rights" },
    { label: "IEP Center", href: "/iep" },
  ],
  "autism-and-anxiety": [
    { label: "Autistic Burnout Guide", href: "/adults/burnout" },
    { label: "Therapies Overview", href: "/therapies" },
    { label: "Crisis Resources", href: "/safety/crisis" },
    { label: "Sensory Processing", href: "/blog/sensory-processing-from-the-inside" },
  ],
  "diagnosis-as-adult": [
    { label: "Late Diagnosis Hub", href: "/adults/late-diagnosis" },
    { label: "Autistic Burnout", href: "/adults/burnout" },
    { label: "Autistic Voices", href: "/voices" },
    { label: "Diagnosis Guide", href: "/diagnosis" },
  ],
  "why-autistic-girls-diagnosed-later": [
    { label: "Signs in Girls", href: "/is-this-autism/signs-in-girls" },
    { label: "High Masking Autism", href: "/is-this-autism/high-masking" },
    { label: "Late Diagnosis Hub", href: "/adults/late-diagnosis" },
    { label: "Masking Guide", href: "/blog/masking-the-hidden-cost" },
  ],
  "autism-diagnosis-in-girls": [
    { label: "Signs in Girls", href: "/is-this-autism/signs-in-girls" },
    { label: "Full Diagnosis Guide", href: "/diagnosis" },
    { label: "Late Diagnosis Hub", href: "/adults/late-diagnosis" },
    { label: "Traits Quiz", href: "/quiz" },
  ],
  "first-year-after-diagnosis": [
    { label: "IEP Rights", href: "/iep" },
    { label: "State Resources", href: "/resources/by-state" },
    { label: "Parents Hub", href: "/parents" },
    { label: "Diagnosis Guide", href: "/diagnosis" },
  ],
  "how-to-tell-family-about-autism-diagnosis": [
    { label: "Talking to Siblings", href: "/blog/talking-to-siblings-about-autism" },
    { label: "Parents Hub", href: "/parents" },
    { label: "Acceptance", href: "/acceptance" },
  ],
  "iep-meeting-parent-guide": [
    { label: "Full IEP Center", href: "/iep" },
    { label: "School Rights", href: "/school-rights" },
    { label: "State Resources", href: "/resources/by-state" },
    { label: "AAC in School", href: "/communication/aac" },
  ],
  "talking-to-your-childs-school": [
    { label: "IEP Guide", href: "/iep" },
    { label: "School Rights", href: "/school-rights" },
    { label: "Accommodations List", href: "/iep" },
  ],
  "talking-to-teachers-about-autism": [
    { label: "School Rights", href: "/school-rights" },
    { label: "IEP Center", href: "/iep" },
    { label: "Self-Advocacy for Teens", href: "/blog/self-advocacy-for-autistic-teens" },
  ],
  "how-schools-get-autism-wrong": [
    { label: "IEP Center", href: "/iep" },
    { label: "School Rights", href: "/school-rights" },
    { label: "Accommodations", href: "/iep" },
  ],
  "self-advocacy-for-autistic-teens": [
    { label: "Adults Hub", href: "/adults" },
    { label: "College Guide", href: "/ages/college" },
    { label: "Employment Guide", href: "/adults/employment" },
  ],
  "aac-does-not-prevent-speech": [
    { label: "Full AAC Guide", href: "/communication/aac" },
    { label: "Tools Directory", href: "/tools" },
    { label: "School Rights for AAC", href: "/school-rights" },
  ],
  "what-is-echolalia": [
    { label: "AAC Guide", href: "/communication/aac" },
    { label: "Communication Hub", href: "/communication/aac" },
    { label: "Glossary: Echolalia", href: "/glossary" },
  ],
  "autistic-burnout-recovery-guide": [
    { label: "Full Burnout Guide", href: "/adults/burnout" },
    { label: "Late Diagnosis Hub", href: "/adults/late-diagnosis" },
    { label: "Crisis Resources", href: "/safety/crisis" },
    { label: "Autistic Voices", href: "/voices" },
  ],
  "pda-autism-profile-guide": [
    { label: "Conditions Hub", href: "/conditions" },
    { label: "Is This Autism?", href: "/is-this-autism" },
    { label: "IEP for PDA Profiles", href: "/iep" },
    { label: "Glossary", href: "/glossary" },
  ],
  "autism-in-the-workplace": [
    { label: "Employment Guide", href: "/adults/employment" },
    { label: "Autistic Burnout", href: "/adults/burnout" },
    { label: "Adults Hub", href: "/adults" },
    { label: "Late Diagnosis", href: "/adults/late-diagnosis" },
  ],
  "what-autistic-adults-wish-you-knew": [
    { label: "Adults Hub", href: "/adults" },
    { label: "Autistic Voices", href: "/voices" },
    { label: "Acceptance", href: "/acceptance" },
  ],
  "sensory-processing-from-the-inside": [
    { label: "Sensory Diet Guide", href: "/blog/sensory-diet-what-it-means" },
    { label: "Tools Directory", href: "/tools" },
    { label: "Traits Quiz", href: "/quiz" },
    { label: "Glossary", href: "/glossary" },
  ],
  "sensory-diet-what-it-means": [
    { label: "Tools Directory", href: "/tools" },
    { label: "Sensory Processing", href: "/blog/sensory-processing-from-the-inside" },
    { label: "Building a Sensory-Friendly Home", href: "/blog/building-sensory-friendly-home" },
  ],
  "building-sensory-friendly-home": [
    { label: "Sensory Tools", href: "/tools" },
    { label: "Sensory Diet Guide", href: "/blog/sensory-diet-what-it-means" },
    { label: "Sensory Quiz", href: "/quiz" },
  ],
  "sensory-friendly-spaces": [
    { label: "Sensory Tools", href: "/tools" },
    { label: "Sensory Quiz", href: "/quiz" },
    { label: "Sensory Diet", href: "/blog/sensory-diet-what-it-means" },
  ],
  "autism-and-sleep": [
    { label: "Sensory Tools", href: "/tools" },
    { label: "Autistic Burnout", href: "/adults/burnout" },
    { label: "Co-Occurring Conditions", href: "/conditions" },
  ],
  "autism-and-food": [
    { label: "Tools Directory", href: "/tools" },
    { label: "Co-Occurring Conditions", href: "/conditions" },
    { label: "Parents Hub", href: "/parents" },
  ],
  "awareness-is-not-acceptance": [
    { label: "Acceptance", href: "/acceptance" },
    { label: "Autistic Voices", href: "/voices" },
    { label: "Research Hub", href: "/research" },
  ],
  "history-of-autism-pathology-to-pride": [
    { label: "Research Hub", href: "/research" },
    { label: "Acceptance", href: "/acceptance" },
    { label: "Autistic Voices", href: "/voices" },
  ],
  "what-is-neurodiversity-movement": [
    { label: "Research Hub", href: "/research" },
    { label: "Acceptance", href: "/acceptance" },
    { label: "Autistic Voices", href: "/voices" },
  ],
  "strengths-based-autism": [
    { label: "Autistic Voices", href: "/voices" },
    { label: "Acceptance", href: "/acceptance" },
    { label: "Research Hub", href: "/research" },
  ],
  "autism-and-identity": [
    { label: "Autistic Voices", href: "/voices" },
    { label: "Acceptance", href: "/acceptance" },
    { label: "Late Diagnosis Hub", href: "/adults/late-diagnosis" },
    { label: "Gender and Autism", href: "/gender" },
  ],
  "puzzle-piece-symbol": [
    { label: "Acceptance", href: "/acceptance" },
    { label: "History of Autism", href: "/blog/history-of-autism-pathology-to-pride" },
    { label: "Language Guide", href: "/blog/language-that-helps-and-hurts" },
  ],
  "what-not-to-say-to-autism-parents": [
    { label: "Parents Hub", href: "/parents" },
    { label: "Siblings Guide", href: "/siblings" },
    { label: "First Year After Diagnosis", href: "/blog/first-year-after-diagnosis" },
  ],
  "talking-to-siblings-about-autism": [
    { label: "Siblings Hub", href: "/siblings" },
    { label: "Parents Hub", href: "/parents" },
    { label: "Ages Overview", href: "/ages" },
  ],
  "masking-the-hidden-cost": [
    { label: "Autistic Burnout", href: "/adults/burnout" },
    { label: "High Masking Guide", href: "/is-this-autism/high-masking" },
    { label: "Research Hub", href: "/research" },
    { label: "Autistic Voices", href: "/voices" },
  ],
  "double-empathy-problem": [
    { label: "Research Hub", href: "/research" },
    { label: "Acceptance", href: "/acceptance" },
    { label: "Autistic Voices", href: "/voices" },
  ],
  "why-your-autistic-child-may-not-look-autistic": [
    { label: "High Masking Guide", href: "/is-this-autism/high-masking" },
    { label: "Is This Autism?", href: "/is-this-autism" },
    { label: "Diagnosis Guide", href: "/diagnosis" },
  ],
  "meltdowns-vs-tantrums": [
    { label: "Meltdown vs Tantrum Guide", href: "/guides/meltdown-vs-tantrum" },
    { label: "Sensory Processing", href: "/blog/sensory-processing-from-the-inside" },
    { label: "Safety Resources", href: "/safety" },
  ],
  "stimming-leave-it-alone": [
    { label: "Glossary: Stimming", href: "/glossary" },
    { label: "Sensory Processing", href: "/blog/sensory-processing-from-the-inside" },
    { label: "Acceptance", href: "/acceptance" },
  ],
  "special-interests-not-a-symptom": [
    { label: "Strengths-Based Autism", href: "/blog/strengths-based-autism" },
    { label: "Acceptance", href: "/acceptance" },
    { label: "Autistic Voices", href: "/voices" },
  ],
  "social-stories-guide": [
    { label: "Tools Directory", href: "/tools" },
    { label: "AAC Hub", href: "/communication/aac" },
    { label: "School Rights", href: "/school-rights" },
  ],
  "co-occurring-conditions": [
    { label: "Conditions Hub", href: "/conditions" },
    { label: "Autism and Anxiety", href: "/blog/autism-and-anxiety" },
    { label: "Research Hub", href: "/research" },
  ],
  "finding-your-community": [
    { label: "Autistic Voices", href: "/voices" },
    { label: "Acceptance", href: "/acceptance" },
    { label: "State Resources", href: "/resources/by-state" },
  ],
  "building-support-network": [
    { label: "Parents Hub", href: "/parents" },
    { label: "State Resources", href: "/resources/by-state" },
    { label: "Crisis Resources", href: "/safety/crisis" },
  ],
  "navigating-healthcare-as-autism-family": [
    { label: "State Resources", href: "/resources/by-state" },
    { label: "Co-Occurring Conditions", href: "/conditions" },
    { label: "Crisis Resources", href: "/safety/crisis" },
  ],
  "what-autism-looks-like-at-different-ages": [
    { label: "Ages Overview", href: "/ages" },
    { label: "Toddler Guide", href: "/ages/toddler" },
    { label: "Teen Guide", href: "/ages/teen" },
    { label: "Adult Guide", href: "/ages/adult" },
  ],
  "language-that-helps-and-hurts": [
    { label: "Glossary", href: "/glossary" },
    { label: "Acceptance", href: "/acceptance" },
    { label: "Identity and Autism", href: "/blog/autism-and-identity" },
  ],
};

/* ── RELATED POSTS BY CATEGORY ──────────────────────────── */
function getRelated(current: { slug: string; category: string }) {
  const same = blogPosts.filter(p => p.slug !== current.slug && p.category === current.category);
  const diff = blogPosts.filter(p => p.slug !== current.slug && p.category !== current.category);
  return [...same, ...diff].slice(0, 3);
}

/* ── CONTENT RENDERER ───────────────────────────────────── */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} style={{ fontSize: "clamp(20px,3vw,26px)", fontFamily: "'Nunito',sans-serif", fontWeight: 900, color: "var(--dark)", lineHeight: 1.25, marginTop: 48, marginBottom: 16 }}>
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} style={{ height: 8 }} />);
    } else {
      elements.push(
        <p key={i} style={{ fontSize: 16, color: "#2a2a2a", lineHeight: 1.85, marginBottom: 0 }}>
          {line}
        </p>
      );
    }
  });

  return elements;
}

const CAT_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Acceptance:          { bg: "#F0FBDF", text: "#2E5C17", border: "#B8E887" },
  Community:           { bg: "#FEF0F1", text: "#7A3035", border: "#F5C5C7" },
  Resources:           { bg: "#E8F5F0", text: "#2C6E49", border: "#A8D4C8" },
  Advocacy:            { bg: "#FFF8EC", text: "#7A5C1E", border: "#F0D080" },
  Wellbeing:           { bg: "#EEF0FB", text: "#2E3A7A", border: "#B0BAF0" },
  "School Rights":     { bg: "#FFF0E8", text: "#7A3A1E", border: "#F0C0A0" },
  Communication:       { bg: "#E8F8F0", text: "#1E6A4A", border: "#90D4B0" },
  Diagnosis:           { bg: "#F5E8FF", text: "#5A1E7A", border: "#C8A0E8" },
  Adults:              { bg: "#E8F0FF", text: "#1E3A7A", border: "#A0B8F0" },
  Sensory:             { bg: "#FFFAE8", text: "#7A6A1E", border: "#F0E0A0" },
  Tools:               { bg: "#E8FBF5", text: "#1E6A5A", border: "#90D4C4" },
  Family:              { bg: "#FFF0F5", text: "#7A1E4A", border: "#F0A0C4" },
  "Understanding Autism": { bg: "#F0F5FF", text: "#1E2E7A", border: "#A0B0F0" },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const cat = CAT_COLORS[post.category] || CAT_COLORS.Acceptance;
  const related = getRelated(post);
  const sideLinks = LINK_MAP[post.slug] || [];

  return (
    <>
      {/* HERO */}
      <section style={{ padding: "80px 24px 60px", background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 360, height: 360, background: "var(--lime)", opacity: 0.08, top: -80, right: -60, borderRadius: "50%" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
            <Link href="/blog" style={{ color: "var(--forest)", fontWeight: 800, fontSize: 13, textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "#aaa", fontSize: 13 }}>/</span>
            <span style={{ color: "#aaa", fontWeight: 700, fontSize: 13 }}>{post.category}</span>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ background: cat.bg, color: cat.text, border: `2px solid ${cat.border}`, fontWeight: 800, fontSize: 11, padding: "5px 14px", borderRadius: 100, letterSpacing: "1.5px", textTransform: "uppercase" }}>{post.category}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#888" }}>{post.date}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#888" }}>{post.readTime}</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,54px)", fontFamily: "'Nunito',sans-serif", fontWeight: 900, color: "var(--dark)", lineHeight: 1.1, marginBottom: 20 }}>{post.title}</h1>
          <p style={{ fontSize: 18, color: "#555", lineHeight: 1.65, maxWidth: 640, borderLeft: "3px solid var(--lime)", paddingLeft: 20 }}>{post.description}</p>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section style={{ padding: "60px 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: sideLinks.length ? "1fr 280px" : "1fr", gap: 48, alignItems: "start" }}>

          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {renderContent(post.content)}
          </div>

          {/* Sidebar: related resources */}
          {sideLinks.length > 0 && (
            <aside style={{ position: "sticky", top: 32 }}>
              <div style={{ background: "rgba(26,58,26,0.03)", border: "1px solid rgba(184,232,135,0.3)", padding: "24px 20px" }}>
                <div style={{ fontSize: 10, letterSpacing: "3px", color: "var(--forest)", fontWeight: 800, marginBottom: 14 }}>RELATED RESOURCES</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {sideLinks.map((l, i) => (
                    <Link key={i} href={l.href}
                      style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "#fff", border: "1px solid rgba(184,232,135,0.2)", textDecoration: "none", fontSize: 13, fontWeight: 700, color: "var(--forest)", lineHeight: 1.4 }}>
                      <span style={{ color: "var(--lime)", fontSize: 16, flexShrink: 0 }}>→</span>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick nav */}
              <div style={{ marginTop: 20, background: "var(--forest)", padding: "20px", borderRadius: 2 }}>
                <div style={{ fontSize: 10, letterSpacing: "2px", color: "var(--lime)", marginBottom: 12, fontWeight: 800 }}>EXPLORE WEBEARISH</div>
                {[
                  ["Glossary", "/glossary"],
                  ["Conditions Hub", "/conditions"],
                  ["IEP Center", "/iep"],
                  ["State Resources", "/resources/by-state"],
                  ["Traits Quiz", "/quiz"],
                ].map(([l, h]) => (
                  <Link key={h} href={h} style={{ display: "block", color: "rgba(250,250,248,0.7)", fontSize: 13, textDecoration: "none", padding: "6px 0", borderBottom: "1px solid rgba(184,232,135,0.1)", fontWeight: 600 }}>
                    {l}
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section style={{ padding: "80px 24px", background: "var(--cream)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px,3vw,32px)", fontFamily: "'Nunito',sans-serif", fontWeight: 900, color: "var(--dark)", marginBottom: 8 }}>Keep Reading</h2>
            <p style={{ fontSize: 14, color: "#888", marginBottom: 32 }}>More from WeBearish — the autism acceptance resource hub.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {related.map(p => {
                const rc = CAT_COLORS[p.category] || CAT_COLORS.Acceptance;
                return (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none", display: "block", background: "#fff", border: "1px solid rgba(184,232,135,0.2)", padding: "24px" }}>
                    <span style={{ background: rc.bg, color: rc.text, border: `1px solid ${rc.border}`, fontWeight: 800, fontSize: 10, padding: "3px 10px", borderRadius: 100, letterSpacing: "1.5px", textTransform: "uppercase" as const, display: "inline-block", marginBottom: 10 }}>{p.category}</span>
                    <h3 style={{ fontSize: 16, fontFamily: "'Nunito',sans-serif", fontWeight: 900, color: "var(--dark)", lineHeight: 1.3, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6, marginBottom: 12 }}>{p.description.slice(0, 100)}...</p>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--forest)" }}>Read →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--dark)", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,38px)", fontFamily: "'Nunito',sans-serif", fontWeight: 900, color: "#fff", marginBottom: 16 }}>Join the movement.</h2>
          <p style={{ fontSize: 16, color: "#9A8F80", lineHeight: 1.7, marginBottom: 32 }}>100% of profits go back into autism acceptance initiatives.</p>
          <Link href="/contact" style={{ display: "inline-block", background: "var(--coral)", color: "#fff", fontWeight: 900, fontSize: 14, letterSpacing: "1px", padding: "14px 32px", textDecoration: "none", textTransform: "uppercase" }}>Get In Touch</Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "datePublished": post.date,
        "author": { "@type": "Organization", "name": "WeBearish", "url": "https://webearish.com" },
        "publisher": { "@type": "Organization", "name": "WeBearish", "logo": { "@type": "ImageObject", "url": "https://webearish.com/bear-logo.png" } },
        "url": `https://webearish.com/blog/${post.slug}`,
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://webearish.com/blog/${post.slug}` }
      })}} />
    </>
  );
}
