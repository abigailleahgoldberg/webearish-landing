import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Blog — WeBearish",
  description: "Perspectives on autism acceptance — the difference from awareness, language that matters, community stories, and advocacy from WeBearish.",
};

const CATS: Record<string, string> = {
  Acceptance:"var(--lime-dark)", Community:"var(--coral)", Resources:"var(--sky-dark)", Advocacy:"var(--yellow-dark)"
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      {/* HERO */}
      <section style={{ background:"var(--forest)", padding:"100px 32px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"url('/bears/bear-forest.webp')", backgroundSize:"cover", backgroundPosition:"center", opacity:0.08, pointerEvents:"none" }} />
        <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
          <span style={{ fontSize:11, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(184,232,135,0.6)", display:"block", marginBottom:20 }}>WeBearish Blog</span>
          <h1 style={{ fontSize:"clamp(48px,7vw,88px)", fontWeight:900, color:"#fff", letterSpacing:"-3px", lineHeight:1.0, marginBottom:24 }}>
            Perspectives on<br /><span style={{ color:"var(--lime)" }}>acceptance.</span>
          </h1>
          <div style={{ width:48, height:4, background:"var(--coral)", marginBottom:24 }} />
          <p style={{ fontSize:18, color:"rgba(255,255,255,0.6)", fontWeight:700, lineHeight:1.7, maxWidth:580 }}>
            Articles on autism acceptance, language, advocacy, and community — written for families, by people who care about getting it right.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section style={{ background:"var(--cream)", padding:"64px 32px 0" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:20 }}>Featured</span>
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration:"none", display:"block" }}>
            <div style={{ background:"var(--forest)", padding:"48px", border:"4px solid var(--lime)", display:"grid", gridTemplateColumns:"1fr auto", gap:32, alignItems:"center", transition:"transform 0.2s" }}
className="wb-card-hover">
              <div>
                <span style={{ fontSize:10, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:CATS[featured.category]||"var(--lime-dark)", marginBottom:16, display:"block" }}>{featured.category}</span>
                <h2 style={{ fontSize:"clamp(24px,3.5vw,40px)", fontWeight:900, color:"#fff", letterSpacing:"-1.5px", lineHeight:1.1, marginBottom:16 }}>{featured.title}</h2>
                <p style={{ fontSize:16, color:"rgba(255,255,255,0.55)", fontWeight:700, lineHeight:1.7, maxWidth:640 }}>{featured.description}</p>
              </div>
              <div style={{ background:"var(--lime)", color:"var(--dark)", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 24px", whiteSpace:"nowrap", alignSelf:"flex-end" }}>
                Read →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ALL ARTICLES */}
      <section style={{ background:"var(--cream)", padding:"48px 32px 100px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }} className="wb-blog-grid">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration:"none" }}>
                <article style={{ background:"#fff", borderTop:`4px solid ${CATS[post.category]||"var(--lime-dark)"}`, padding:"32px 28px", height:"100%", transition:"transform 0.2s, box-shadow 0.2s", display:"flex", flexDirection:"column" }}
className="wb-card-hover">
                  <span style={{ fontSize:10, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:CATS[post.category]||"var(--lime-dark)", marginBottom:12, display:"block" }}>{post.category}</span>
                  <h3 style={{ fontSize:"clamp(17px,2vw,22px)", fontWeight:900, color:"var(--dark)", letterSpacing:"-0.5px", lineHeight:1.25, marginBottom:12, flex:1 }}>{post.title}</h3>
                  <p style={{ fontSize:14, color:"var(--muted)", fontWeight:700, lineHeight:1.6, marginBottom:20 }}>{post.description?.slice(0,100)}…</p>
                  <span style={{ fontSize:12, fontWeight:900, color:"var(--coral)", letterSpacing:"1px", textTransform:"uppercase" }}>Read →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// CSS only hover — no event handlers needed

