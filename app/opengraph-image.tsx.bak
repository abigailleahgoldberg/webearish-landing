import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WeBearish — Autism Acceptance Movement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#1A3A1A",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent bar top */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:8, background:"#B8E887", display:"flex" }} />
      {/* Left content */}
      <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"60px 64px", flex:1 }}>
        <div style={{ fontSize:13, fontWeight:900, letterSpacing:"4px", textTransform:"uppercase", color:"rgba(184,232,135,0.6)", marginBottom:20, display:"flex" }}>
          WeBearish
        </div>
        <div style={{ fontSize:72, fontWeight:900, color:"#ffffff", lineHeight:1.0, letterSpacing:"-3px", marginBottom:24, display:"flex", flexDirection:"column" }}>
          <span>We are</span>
          <span>bearish on</span>
          <span style={{ color:"#B8E887" }}>the idea</span>
        </div>
        <div style={{ fontSize:20, fontWeight:700, color:"rgba(255,255,255,0.55)", maxWidth:480, lineHeight:1.6, display:"flex" }}>
          any child is less than. 1 in 36 children are autistic. They don't need fixing. The world does.
        </div>
        <div style={{ marginTop:36, display:"flex", alignItems:"center", gap:16 }}>
          <div style={{ background:"#FF7B5C", color:"#fff", fontWeight:900, fontSize:14, letterSpacing:"2px", textTransform:"uppercase", padding:"12px 24px", display:"flex" }}>Get Involved</div>
          <div style={{ fontSize:13, color:"rgba(255,255,255,0.3)", fontWeight:700, display:"flex" }}>webearish.com</div>
        </div>
      </div>
      {/* Right decorative block */}
      <div style={{ width:320, background:"rgba(184,232,135,0.06)", borderLeft:"4px solid rgba(184,232,135,0.15)", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:40 }}>
        <div style={{ fontSize:80, fontWeight:900, color:"#B8E887", lineHeight:1, display:"flex" }}>1:36</div>
        <div style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.4)", textAlign:"center", marginTop:12, lineHeight:1.6, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <span>Children in the US</span>
          <span>are autistic</span>
        </div>
        <div style={{ marginTop:32, width:48, height:2, background:"#FF7B5C", display:"flex" }} />
        <div style={{ fontSize:12, color:"rgba(255,255,255,0.25)", marginTop:16, letterSpacing:"1px", textTransform:"uppercase", display:"flex" }}>CDC, 2023</div>
      </div>
      {/* Bottom accent */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:4, background:"#FF7B5C", display:"flex" }} />
    </div>,
    { ...size }
  );
}
