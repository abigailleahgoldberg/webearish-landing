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
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} style={{
          fontSize: "clamp(20px, 3vw, 28px)",
          fontWeight: 900,
          color: "var(--dark)",
          letterSpacing: "-0.5px",
          lineHeight: 1.25,
          marginTop: "48px",
          marginBottom: "16px",
        }}>{line.replace("## ", "")}</h2>
      );
    } else if (line.trim() === "") {
      // skip blank
    } else {
      elements.push(
        <p key={i} style={{
          fontSize: "17px",
          color: "var(--text-muted)",
          fontWeight: 600,
          lineHeight: 1.85,
          marginBottom: "0",
        }}>{line}</p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    Acceptance: { bg: "#F0FBDF", text: "#2E5C17", border: "#B8E887" },
    Community: { bg: "#FEF0F1", text: "#7A3035", border: "#F5C5C7" },
    Resources: { bg: "#E8F5F0", text: "#2C6E49", border: "#A8D4C8" },
    Advocacy: { bg: "#FFF8EC", text: "#7A5C1E", border: "#F0D080" },
  };
  const cat = categoryColors[post.category] || categoryColors.Acceptance;

  const others = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ padding: "80px 24px 60px", background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div className="blob" style={{ width: 360, height: 360, background: "var(--green)", opacity: 0.12, top: -80, right: -60 }} />
        <div className="section-container" style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "28px" }}>
            <Link href="/blog" style={{ color: "var(--green-dark)", fontWeight: 800, fontSize: "13px", textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "var(--text-muted)", fontSize: "13px" }}>/</span>
            <span style={{ color: "var(--text-muted)", fontWeight: 700, fontSize: "13px" }}>{post.category}</span>
          </div>

          <div style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{
              background: cat.bg,
              color: cat.text,
              border: `2px solid ${cat.border}`,
              fontWeight: 800,
              fontSize: "11px",
              padding: "5px 14px",
              borderRadius: "100px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}>{post.category}</span>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-muted)" }}>{post.date}</span>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-muted)" }}>{post.readTime}</span>
          </div>

          <h1 style={{
            fontSize: "clamp(28px, 5vw, 54px)",
            fontWeight: 900,
            color: "var(--dark)",
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}>{post.title}</h1>

          <p style={{
            fontSize: "19px",
            color: "var(--text-muted)",
            fontWeight: 600,
            lineHeight: 1.65,
            maxWidth: "640px",
            borderLeft: "3px solid var(--green)",
            paddingLeft: "20px",
          }}>{post.description}</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding: "60px 24px 80px", background: "var(--white)", borderTop: "2px solid var(--cream-dark)" }}>
        <div className="section-container" style={{ maxWidth: "720px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {renderContent(post.content)}
          </div>
        </div>
      </section>

      {/* ── MORE ARTICLES ── */}
      {others.length > 0 && (
        <section style={{ padding: "80px 24px", background: "var(--cream)" }}>
          <div className="section-container">
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, color: "var(--dark)", letterSpacing: "-0.5px", marginBottom: "32px" }}>
              More from WeBearish
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {others.map(p => {
                const c = categoryColors[p.category] || categoryColors.Acceptance;
                return (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                    <div className="bear-card" style={{ padding: "28px" }}>
                      <span style={{
                        background: c.bg, color: c.text, border: `2px solid ${c.border}`,
                        fontWeight: 800, fontSize: "10px", padding: "4px 12px", borderRadius: "100px",
                        letterSpacing: "1.5px", textTransform: "uppercase" as const, display: "inline-block", marginBottom: "12px",
                      }}>{p.category}</span>
                      <h3 style={{ fontSize: "17px", fontWeight: 900, color: "var(--dark)", lineHeight: 1.3, marginBottom: "10px" }}>{p.title}</h3>
                      <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--green-dark)" }}>Read &rarr;</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section style={{ padding: "80px 24px", background: "var(--dark)", textAlign: "center" }}>
        <div className="section-container" style={{ maxWidth: "520px" }}>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 900, color: "var(--white)", letterSpacing: "-1px", marginBottom: "16px" }}>
            Join the movement.
          </h2>
          <p style={{ fontSize: "16px", color: "#9A8F80", fontWeight: 600, lineHeight: 1.7, marginBottom: "32px" }}>
            100% of profits go back into autism acceptance initiatives. Every person who joins makes the next event possible.
          </p>
          <Link href="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"BlogPosting",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.date,
          "author":{"@type":"Organization","name":"WeBearish","url":"https://webearish.com"},
          "publisher":{"@type":"Organization","name":"WeBearish","logo":{"@type":"ImageObject","url":"https://webearish.com/bear-logo.png"}},
          "url": `https://webearish.com/blog/${post.slug}`,
          "mainEntityOfPage":{"@type":"WebPage","@id":`https://webearish.com/blog/${post.slug}`}
        })}}
      />
    </>
  );
}
