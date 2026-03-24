import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Neurodivergent Career Resources & Support | WeBearish",
  description: "Resources for neurodivergent people navigating careers, workplace accommodations, disclosure, and thriving at work.",
};
export default function CareerResourcesPage() {
  const G = "#EC4899";
  const resources = [
    {cat:"Career Development",items:["Skills assessment for neurodivergent workers","Job search strategies","Workplace disclosure guides"]},
    {cat:"Accommodations & Rights",items:["Understanding ADA accommodations","Requesting accommodations toolkit","Disability rights organizations"]},
    {cat:"Professional Networks",items:["Neurodivergent professional groups","Industry-specific communities","Mentorship programs"]},
    {cat:"Learning & Training",items:["Self-advocacy skills","Professional development","Leadership coaching"]},
  ];
  return (
    <div style={{minHeight:"100vh",background:"#FDF2F8",color:"#0D0D0D",fontFamily:"system-ui,sans-serif"}}>
      <nav style={{padding:"16px 5vw",borderBottom:"1px solid #FBCFE8",display:"flex",justifyContent:"space-between",alignItems:"center",background:"white"}}>
        <Link href="/" style={{fontWeight:900,fontSize:20,color:"#0D0D0D",textDecoration:"none"}}>WeBearish</Link>
        <Link href="/blog" style={{color:"#666",textDecoration:"none",fontSize:14}}>← Back</Link>
      </nav>
      <div style={{maxWidth:800,margin:"0 auto",padding:"60px 5vw"}}>
        <div style={{fontSize:11,letterSpacing:"2px",color:G,marginBottom:16}}>CAREER RESOURCES</div>
        <h1 style={{fontSize:"clamp(28px,4vw,46px)",fontWeight:900,lineHeight:1.1,marginBottom:24}}>Neurodivergent Career Resources</h1>
        <p style={{fontSize:18,color:"#444",lineHeight:1.7,marginBottom:40}}>Support and resources for ADHD, autistic, dyslexic, and other neurodivergent people building careers and thriving at work.</p>
        
        {resources.map((r,i) => (
          <div key={i} style={{marginBottom:32}}>
            <h2 style={{fontSize:16,fontWeight:800,color:G,marginBottom:12}}>{r.cat}</h2>
            <ul style={{listStyle:"none",padding:0,margin:0}}>
              {r.items.map((item,j) => (
                <li key={j} style={{background:"white",border:"1px solid #FBCFE8",borderRadius:6,padding:"12px",marginBottom:6,fontSize:14}}>→ {item}</li>
              ))}
            </ul>
          </div>
        ))}
        
        <div style={{background:G,color:"white",padding:"32px",borderRadius:8,textAlign:"center",marginTop:40}}>
          <h2 style={{fontSize:16,fontWeight:900,marginBottom:10}}>Get Career Support</h2>
          <p style={{fontSize:13,opacity:0.9,marginBottom:16,margin:"0 0 16px"}}>Work with a career coach who understands neurodiversity. Free consultation available.</p>
          <Link href="/contact" style={{background:"white",color:G,fontWeight:800,fontSize:12,padding:"10px 20px",textDecoration:"none",borderRadius:4,display:"inline-block"}}>Book a Consultation →</Link>
        </div>
      </div>
    </div>
  );
}
