"use client";
import { useState } from "react";
import Link from "next/link";

const QUESTIONS = [
  // Social Communication
  { id:1,  cat:"Social Communication",  q:"I find it hard to understand what people mean unless they say it directly." },
  { id:2,  cat:"Social Communication",  q:"I struggle to maintain back-and-forth conversation without losing track of what's being said." },
  { id:3,  cat:"Social Communication",  q:"I miss social cues like tone of voice, facial expressions, or body language." },
  { id:4,  cat:"Social Communication",  q:"Small talk feels exhausting or pointless to me." },
  { id:5,  cat:"Social Communication",  q:"I prefer communicating in writing rather than speaking." },
  // Sensory
  { id:6,  cat:"Sensory Sensitivity",   q:"Certain sounds, textures, lights, or smells are intensely uncomfortable for me." },
  { id:7,  cat:"Sensory Sensitivity",   q:"I am easily overwhelmed in busy or loud environments." },
  { id:8,  cat:"Sensory Sensitivity",   q:"I notice sensory details that others seem to ignore (background noise, fabric tags, lighting)." },
  { id:9,  cat:"Sensory Sensitivity",   q:"I have strong preferences about food textures or tastes beyond ordinary pickiness." },
  { id:10, cat:"Sensory Sensitivity",   q:"Physical touch from others (even gentle touch) sometimes feels uncomfortable." },
  // Routines / Sameness
  { id:11, cat:"Routines & Sameness",   q:"I prefer to follow the same routines and feel distressed when they are disrupted." },
  { id:12, cat:"Routines & Sameness",   q:"Unexpected changes (even small ones) are disproportionately upsetting to me." },
  { id:13, cat:"Routines & Sameness",   q:"I rely on rules, schedules, or systems to navigate daily life." },
  { id:14, cat:"Routines & Sameness",   q:"I repeat certain movements or behaviors when anxious, excited, or concentrating (rocking, tapping, humming)." },
  { id:15, cat:"Routines & Sameness",   q:"I find comfort in repetition — rewatching shows, rereading books, or listening to the same music." },
  // Special Interests
  { id:16, cat:"Focus & Special Interests", q:"I develop intense, deep interests in specific topics that others find excessive." },
  { id:17, cat:"Focus & Special Interests", q:"When I'm interested in something, I can focus on it for hours without noticing time passing." },
  { id:18, cat:"Focus & Special Interests", q:"I accumulate detailed knowledge about specific subjects and love to share it." },
  { id:19, cat:"Focus & Special Interests", q:"I struggle to shift attention from something I'm focused on, even when I need to." },
  { id:20, cat:"Focus & Special Interests", q:"I notice patterns and systems in things that others don't seem to." },
  // Emotional Regulation
  { id:21, cat:"Emotional Regulation",  q:"My emotions feel more intense than other people seem to experience them." },
  { id:22, cat:"Emotional Regulation",  q:"I have difficulty identifying or describing what I'm feeling in the moment." },
  { id:23, cat:"Emotional Regulation",  q:"I experience 'shutdowns' or 'meltdowns' when overloaded — losing the ability to speak or function." },
  { id:24, cat:"Emotional Regulation",  q:"I've learned to act 'normal' in social situations in ways that are exhausting to maintain." },
  { id:25, cat:"Emotional Regulation",  q:"I often feel different from others around me in ways I find difficult to explain." },
];

const OPTIONS = ["Never", "Sometimes", "Often", "Always"];
const CAT_COLORS: Record<string, string> = {
  "Social Communication":"var(--lime-dark)",
  "Sensory Sensitivity":"var(--sky-dark)",
  "Routines & Sameness":"var(--coral)",
  "Focus & Special Interests":"var(--yellow-dark)",
  "Emotional Regulation":"var(--forest-mid)",
};

type Answers = Record<number, number>;

function getResults(answers: Answers) {
  const cats: Record<string, { total: number; max: number }> = {};
  QUESTIONS.forEach(q => {
    if (!cats[q.cat]) cats[q.cat] = { total:0, max:0 };
    cats[q.cat].total += answers[q.id] ?? 0;
    cats[q.cat].max += 3;
  });
  return cats;
}

function getCategoryLabel(pct: number) {
  if (pct >= 0.75) return { label:"Strong alignment", color:"var(--coral)" };
  if (pct >= 0.5)  return { label:"Moderate alignment", color:"var(--yellow-dark)" };
  if (pct >= 0.25) return { label:"Some alignment", color:"var(--lime-dark)" };
  return { label:"Low alignment", color:"var(--muted)" };
}

export default function QuizClient() {
  const [step, setStep] = useState<"disclaimer"|"quiz"|"results">("disclaimer");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [loading, setLoading] = useState(false);
  const [narrative, setNarrative] = useState("");

  function answer(val: number) {
    const q = QUESTIONS[current];
    setAnswers(prev => ({ ...prev, [q.id]: val }));
    if (current < QUESTIONS.length - 1) {
      setCurrent(c => c + 1);
    } else {
      submitAnswers({ ...answers, [q.id]: val });
    }
  }

  async function submitAnswers(finalAnswers: Answers) {
    setLoading(true);
    setStep("results");
    try {
      const res = await fetch("/api/quiz", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ answers: finalAnswers, questions: QUESTIONS }),
      });
      const data = await res.json();
      setNarrative(data.narrative || "");
    } catch {
      setNarrative("Based on your responses, you've shared meaningful information about your experiences. We encourage you to explore these patterns further with a qualified professional who can provide personalized support.");
    }
    setLoading(false);
  }

  const cats = getResults(answers);
  const q = QUESTIONS[current];
  const progress = Math.round((current / QUESTIONS.length) * 100);

  if (step === "disclaimer") return (
    <div style={{ minHeight:"100vh", background:"var(--forest)", display:"flex", alignItems:"center", justifyContent:"center", padding:32 }}>
      <div style={{ maxWidth:640, width:"100%" }}>
        <div style={{ background:"rgba(255,123,92,0.1)", border:"1px solid rgba(255,123,92,0.3)", padding:"20px 24px", marginBottom:32 }}>
          <p style={{ fontSize:13, fontWeight:900, color:"var(--coral)", letterSpacing:"1px", textTransform:"uppercase", marginBottom:8 }}>Important Disclaimer</p>
          <p style={{ fontSize:14, color:"rgba(255,255,255,0.7)", fontWeight:700, lineHeight:1.7 }}>
            This is <strong style={{ color:"#fff" }}>not a medical diagnostic tool</strong>. We are not doctors, clinicians, or mental health professionals. This guide is for <strong style={{ color:"#fff" }}>self-reflection and education only</strong>. Only a licensed clinician can diagnose autism. These results should never replace a professional evaluation.
          </p>
        </div>
        <h1 style={{ fontSize:"clamp(36px,5.5vw,64px)", fontWeight:900, color:"#fff", letterSpacing:"-2.5px", lineHeight:1.0, marginBottom:20 }}>
          Autism Traits<br /><span style={{ color:"var(--lime)" }}>Reflection Guide</span>
        </h1>
        <div style={{ width:40, height:4, background:"var(--coral)", marginBottom:24 }} />
        <p style={{ fontSize:17, color:"rgba(255,255,255,0.6)", fontWeight:700, lineHeight:1.75, marginBottom:32 }}>
          25 questions exploring traits commonly associated with autism. Your responses will generate a personalized reflection on the patterns you identify with — across five categories: social communication, sensory sensitivity, routines, special interests, and emotional regulation.
        </p>
        <ul style={{ marginBottom:36, paddingLeft:0, listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
          {["Takes about 5 minutes", "No account required", "Responses are not stored", "AI-generated reflection at the end"].map(item => (
            <li key={item} style={{ fontSize:14, fontWeight:700, color:"rgba(255,255,255,0.55)", display:"flex", alignItems:"center", gap:10 }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--lime)", flexShrink:0, display:"inline-block" }} />
              {item}
            </li>
          ))}
        </ul>
        <button onClick={()=>setStep("quiz")} style={{ background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:14, letterSpacing:"1.5px", textTransform:"uppercase", padding:"16px 36px", border:"none", cursor:"pointer" }}>
          Begin Reflection →
        </button>
      </div>
    </div>
  );

  if (step === "quiz") return (
    <div style={{ minHeight:"100vh", background:"var(--forest)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:32 }}>
      <div style={{ maxWidth:640, width:"100%" }}>
        {/* Progress */}
        <div style={{ marginBottom:40 }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
            <span style={{ fontSize:11, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.3)" }}>Question {current+1} of {QUESTIONS.length}</span>
            <span style={{ fontSize:11, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(184,232,135,0.5)" }}>{q.cat}</span>
          </div>
          <div style={{ height:4, background:"rgba(255,255,255,0.08)", position:"relative" }}>
            <div style={{ position:"absolute", left:0, top:0, height:"100%", background:"var(--lime)", width:`${progress}%`, transition:"width 0.3s" }} />
          </div>
        </div>

        <div style={{ marginBottom:8 }}>
          <div style={{ width:8, height:8, borderRadius:"50%", background:CAT_COLORS[q.cat]||"var(--lime)", display:"inline-block", marginRight:8 }} />
        </div>
        <h2 style={{ fontSize:"clamp(22px,3.5vw,32px)", fontWeight:900, color:"#fff", letterSpacing:"-1px", lineHeight:1.3, marginBottom:48 }}>
          {q.q}
        </h2>

        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {OPTIONS.map((opt, i) => (
            <button key={opt} onClick={()=>answer(i)} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", padding:"18px 24px", textAlign:"left", cursor:"pointer", fontFamily:"inherit", fontWeight:900, fontSize:16, color:"rgba(255,255,255,0.75)", display:"flex", alignItems:"center", gap:16, transition:"all 0.15s" }}
              onMouseEnter={(e:any)=>{e.currentTarget.style.background="rgba(184,232,135,0.1)";e.currentTarget.style.borderColor="rgba(184,232,135,0.3)";e.currentTarget.style.color="#fff"}}
              onMouseLeave={(e:any)=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";e.currentTarget.style.color="rgba(255,255,255,0.75)"}}>
              <span style={{ width:28, height:28, border:"2px solid rgba(255,255,255,0.2)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, color:"rgba(255,255,255,0.4)", flexShrink:0 }}>{i}</span>
              {opt}
            </button>
          ))}
        </div>

        {current > 0 && (
          <button onClick={()=>setCurrent(c=>c-1)} style={{ marginTop:24, background:"none", border:"none", color:"rgba(255,255,255,0.3)", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"inherit" }}>
            ← Back
          </button>
        )}
      </div>
    </div>
  );

  // Results
  return (
    <div style={{ background:"var(--forest)", minHeight:"100vh" }}>
      {/* Disclaimer banner */}
      <div style={{ background:"rgba(255,123,92,0.15)", borderBottom:"1px solid rgba(255,123,92,0.2)", padding:"12px 32px", textAlign:"center" }}>
        <p style={{ fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.55)" }}>
          This reflection is for educational purposes only. It is not a medical diagnosis. Only a licensed clinician can diagnose autism.
        </p>
      </div>

      <div style={{ maxWidth:860, margin:"0 auto", padding:"64px 32px 100px" }}>
        <span style={{ fontSize:11, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(184,232,135,0.6)", display:"block", marginBottom:20 }}>Your Reflection</span>
        <h1 style={{ fontSize:"clamp(36px,5vw,64px)", fontWeight:900, color:"#fff", letterSpacing:"-2.5px", lineHeight:1.0, marginBottom:24 }}>
          Here's what your<br /><span style={{ color:"var(--lime)" }}>answers revealed.</span>
        </h1>
        <div style={{ width:48, height:4, background:"var(--coral)", marginBottom:48 }} />

        {/* Category bars */}
        <div style={{ display:"flex", flexDirection:"column", gap:20, marginBottom:56 }}>
          {Object.entries(cats).map(([cat, data]) => {
            const pct = data.total / data.max;
            const { label, color } = getCategoryLabel(pct);
            return (
              <div key={cat}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                  <span style={{ fontSize:13, fontWeight:900, color:"#fff" }}>{cat}</span>
                  <span style={{ fontSize:12, fontWeight:900, color, textTransform:"uppercase", letterSpacing:"1px" }}>{label}</span>
                </div>
                <div style={{ height:8, background:"rgba(255,255,255,0.08)" }}>
                  <div style={{ height:"100%", background:CAT_COLORS[cat]||"var(--lime)", width:`${Math.round(pct*100)}%`, transition:"width 1s" }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Narrative */}
        <div style={{ background:"rgba(184,232,135,0.05)", border:"1px solid rgba(184,232,135,0.15)", padding:"36px", marginBottom:48 }}>
          <p style={{ fontSize:11, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(184,232,135,0.5)", marginBottom:20 }}>Personalized Reflection</p>
          {loading ? (
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <div style={{ width:16, height:16, borderRadius:"50%", border:"2px solid var(--lime)", borderTopColor:"transparent", animation:"spin 1s linear infinite" }} />
              <p style={{ fontSize:16, color:"rgba(255,255,255,0.4)", fontWeight:700 }}>Generating your reflection…</p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : (
            <p style={{ fontSize:17, color:"rgba(255,255,255,0.75)", fontWeight:700, lineHeight:1.8 }}>{narrative}</p>
          )}
        </div>

        {/* Disclaimer box */}
        <div style={{ background:"rgba(255,123,92,0.08)", border:"1px solid rgba(255,123,92,0.2)", padding:"28px", marginBottom:48 }}>
          <p style={{ fontSize:13, fontWeight:900, color:"var(--coral)", marginBottom:10 }}>This is not a diagnosis.</p>
          <p style={{ fontSize:14, color:"rgba(255,255,255,0.55)", fontWeight:700, lineHeight:1.7 }}>
            Identifying with autistic traits does not mean you are autistic — and not identifying with them doesn't mean you're not. Autism is complex, diverse, and often masked, especially in women, people of color, and adults diagnosed later in life. These results are a starting point for self-understanding, not a conclusion.
          </p>
        </div>

        {/* Resources */}
        <div style={{ marginBottom:48 }}>
          <p style={{ fontSize:12, fontWeight:900, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:20 }}>Next Steps</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }} className="wb-quiz-next-grid">
            {[
              { label:"Talk to your doctor", desc:"Ask for a referral to a psychologist or psychiatrist for a formal evaluation.", href:"/resources" },
              { label:"Read more", desc:"NeuroTribes, Unmasking Autism, and What I Mean When I Say I'm Autistic are excellent starting points.", href:"/resources" },
              { label:"Find community", desc:"Autistic Self Advocacy Network (ASAN) connects you with autistic-led communities and resources.", href:"https://autisticadvocacy.org" },
            ].map(item => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", padding:"20px", height:"100%", transition:"border-color 0.15s", boxSizing:"border-box" }}
                  onMouseEnter={(e:any)=>e.currentTarget.style.borderColor="rgba(184,232,135,0.3)"}
                  onMouseLeave={(e:any)=>e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"}>
                  <p style={{ fontSize:13, fontWeight:900, color:"var(--lime)", marginBottom:8 }}>{item.label} →</p>
                  <p style={{ fontSize:12, color:"rgba(255,255,255,0.4)", fontWeight:700, lineHeight:1.6 }}>{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
          <button onClick={()=>{setStep("disclaimer");setCurrent(0);setAnswers({});setNarrative("");}} style={{ background:"none", border:"2px solid rgba(255,255,255,0.2)", color:"rgba(255,255,255,0.6)", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 24px", cursor:"pointer", fontFamily:"inherit" }}>
            Retake Quiz
          </button>
          <Link href="/contact" style={{ background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 24px", textDecoration:"none" }}>
            Share Your Story
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .wb-quiz-next-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
