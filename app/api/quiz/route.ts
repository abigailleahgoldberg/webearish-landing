import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { answers, questions } = await req.json();

  // Build category summaries
  const cats: Record<string, { total: number; max: number; q: string[] }> = {};
  questions.forEach((q: any) => {
    if (!cats[q.cat]) cats[q.cat] = { total:0, max:0, q:[] };
    cats[q.cat].total += answers[q.id] ?? 0;
    cats[q.cat].max += 3;
    if ((answers[q.id] ?? 0) >= 2) cats[q.cat].q.push(q.q);
  });

  const catSummary = Object.entries(cats).map(([name, data]) => {
    const pct = Math.round((data.total / data.max) * 100);
    return `${name}: ${pct}% alignment${data.q.length > 0 ? ` (notably: "${data.q[0]}")` : ""}`;
  }).join("\n");

  const apiKey = process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    // Fallback narrative without API
    const highCats = Object.entries(cats)
      .filter(([,d]) => d.total / d.max >= 0.5)
      .map(([name]) => name);
    
    const narrative = highCats.length > 0
      ? `Your responses show meaningful alignment with several autistic trait profiles, particularly around ${highCats.join(" and ")}. Many people who identify strongly with these patterns find that exploring the possibility of autism — whether through self-study or professional evaluation — brings clarity and self-understanding. These aren't flaws to fix; they're ways of experiencing the world that deserve to be understood and supported.`
      : `Your responses show some areas of alignment with autistic traits, particularly in isolated experiences. Many autistic traits are on a spectrum and present differently across people, ages, and contexts. If anything in this reflection resonated with you, it may be worth exploring further — either through reading, community connection, or speaking with a professional.`;
    
    return NextResponse.json({ narrative });
  }

  // Use OpenAI if key available
  try {
    const prompt = `You are a compassionate, informed autism advocate writing a self-reflection summary for someone who completed a traits questionnaire. You are NOT a doctor and must never diagnose anyone.

Their category results (0-100% alignment with autistic traits):
${catSummary}

Write 3-4 sentences that:
1. Acknowledge the specific patterns they identified with (mention 2-3 specific categories)
2. Normalize these experiences without over-claiming (use language like "many autistic people report..." or "these patterns are commonly associated with...")
3. Gently encourage further exploration — professional evaluation, reading, community
4. End with something affirming about self-understanding

Do NOT say "you are autistic" or "you are not autistic." Do not use clinical diagnostic language. Write in second person, warm but grounded. No fluff.`;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method:"POST",
      headers:{ "Authorization":`Bearer ${apiKey}`, "Content-Type":"application/json" },
      body: JSON.stringify({
        model:"gpt-4o-mini",
        messages:[{ role:"user", content:prompt }],
        max_tokens:300,
        temperature:0.7,
      }),
    });
    const data = await res.json();
    const narrative = data.choices?.[0]?.message?.content || "";
    return NextResponse.json({ narrative });
  } catch {
    return NextResponse.json({ narrative: "Based on your responses, you've shared meaningful information about your experiences. We encourage you to explore these patterns with a qualified professional who specializes in autism." });
  }
}
