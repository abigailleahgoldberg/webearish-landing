export default function MedicalDisclaimer({ context = "general" }: { context?: string }) {
  return (
    <div style={{ background: "rgba(255,123,92,0.08)", border: "1px solid rgba(255,123,92,0.25)", padding: "14px 18px", marginBottom: 32, fontSize: 13, color: "rgba(250,250,248,0.7)", lineHeight: 1.6 }}>
      <strong style={{ color: "#FF7B5C" }}>Medical Disclaimer:</strong>{" "}
      {context === "quiz"
        ? "This quiz is for informational purposes only. It is not a diagnostic tool and cannot diagnose autism or any other condition. If you have questions about a potential autism diagnosis, speak with a licensed psychologist, developmental pediatrician, or psychiatrist."
        : "The information on this page is for educational purposes only. It does not constitute medical advice and is not a substitute for professional evaluation, diagnosis, or treatment. Always consult a qualified healthcare provider with questions about a specific condition."}
    </div>
  );
}
