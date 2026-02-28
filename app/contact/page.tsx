"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
    } catch {}
    setLoading(false);
    setSent(true);
  }

  return (
    <>
      <section style={{ background:"var(--forest)", padding:"100px 32px 80px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <span style={{ fontSize:11, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(184,232,135,0.6)", display:"block", marginBottom:20 }}>Get In Touch</span>
          <h1 style={{ fontSize:"clamp(44px,6.5vw,84px)", fontWeight:900, color:"#fff", letterSpacing:"-3px", lineHeight:1.0, marginBottom:20 }}>
            Join the<br /><span style={{ color:"var(--lime)" }}>movement.</span>
          </h1>
          <div style={{ width:48, height:4, background:"var(--coral)", marginBottom:24 }} />
          <p style={{ fontSize:18, color:"rgba(255,255,255,0.6)", fontWeight:700, lineHeight:1.7, maxWidth:500 }}>
            Whether you want to get involved, collaborate, share your story, or just say hello — we want to hear from you.
          </p>
        </div>
      </section>

      <section style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"55% 45%", gap:64 }} className="wb-contact-grid">

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ background:"var(--forest)", border:"4px solid var(--lime)", padding:"48px", textAlign:"center" }}>
                <div style={{ fontSize:48, marginBottom:16 }}>🐻</div>
                <h2 style={{ fontSize:32, fontWeight:900, color:"#fff", letterSpacing:"-1.5px", marginBottom:12 }}>Got it. Thank you.</h2>
                <p style={{ fontSize:16, color:"rgba(255,255,255,0.6)", fontWeight:700 }}>We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:16 }}>
                {[
                  { field:"name",    label:"Your Name",      type:"text",  placeholder:"First Last" },
                  { field:"email",   label:"Email Address",  type:"email", placeholder:"you@email.com" },
                  { field:"subject", label:"Subject",        type:"text",  placeholder:"What's this about?" },
                ].map(({field, label, type, placeholder}) => (
                  <div key={field}>
                    <label style={{ fontSize:11, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:8 }}>{label}</label>
                    <input type={type} required placeholder={placeholder}
                      value={(form as any)[field]}
                      onChange={e=>setForm(f=>({...f,[field]:e.target.value}))}
                      style={{ width:"100%", padding:"14px 18px", border:"2px solid var(--gray-light)", background:"#fff", fontFamily:"inherit", fontWeight:700, fontSize:15, color:"var(--dark)", outline:"none", boxSizing:"border-box" }}
                      onFocus={(e:any)=>e.target.style.borderColor="var(--lime-dark)"}
                      onBlur={(e:any)=>e.target.style.borderColor="var(--gray-light)"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize:11, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"var(--muted)", display:"block", marginBottom:8 }}>Message</label>
                  <textarea required rows={6} placeholder="Tell us your story, ask a question, or just say hello..."
                    value={form.message}
                    onChange={e=>setForm(f=>({...f,message:e.target.value}))}
                    style={{ width:"100%", padding:"14px 18px", border:"2px solid var(--gray-light)", background:"#fff", fontFamily:"inherit", fontWeight:700, fontSize:15, color:"var(--dark)", outline:"none", resize:"vertical", boxSizing:"border-box" }}
                    onFocus={(e:any)=>e.target.style.borderColor="var(--lime-dark)"}
                    onBlur={(e:any)=>e.target.style.borderColor="var(--gray-light)"}
                  />
                </div>
                <button type="submit" disabled={loading} style={{ background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:14, letterSpacing:"1.5px", textTransform:"uppercase", padding:"16px 32px", border:"none", cursor:"pointer", alignSelf:"flex-start" }}>
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div style={{ display:"flex", flexDirection:"column", gap:32 }}>
            {[
              { label:"Email", value:"hello@webearish.com", href:"mailto:hello@webearish.com" },
              { label:"Follow", value:"@webearish on X (Twitter)", href:"https://x.com/webearish" },
              { label:"Facebook", value:"facebook.com/webearish", href:"https://www.facebook.com/webearish" },
            ].map(item => (
              <div key={item.label} style={{ borderTop:`2px solid var(--gray-light)`, paddingTop:24 }}>
                <p style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"var(--muted)", marginBottom:8 }}>{item.label}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize:17, fontWeight:900, color:"var(--dark)", textDecoration:"none", letterSpacing:"-0.3px" }}>{item.value}</a>
              </div>
            ))}
            <div style={{ background:"var(--forest)", padding:"28px", marginTop:8, border:"1px solid rgba(184,232,135,0.1)" }}>
              <p style={{ fontSize:13, fontWeight:900, color:"var(--lime)", marginBottom:8 }}>For the children.</p>
              <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", fontWeight:700, lineHeight:1.6 }}>
                WeBearish is a bearish serious hub for autistic children and their families. We reinvest everything we make into building this movement — the store, the community, and everything that comes next.
              </p>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .wb-contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
