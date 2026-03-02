import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Best Books on Autism: Curated Reading List | WeBearish",
  description: "Curated books on autism: written by autistic authors, for parents, children's books with autistic characters, and professional resources.",
  alternates: { canonical: "https://webearish.com/books" },
};
const BOOKS = {
  "By Autistic Authors": [
    { t: "The Reason I Jump", a: "Naoki Higashida", d: "A first-person account of life as a nonspeaking autistic teenager, written at age 13. Changed how many people understand autism." },
    { t: "Unmasking Autism", a: "Devon Price, PhD", d: "A comprehensive exploration of the hidden ways autism shapes identity, and the process of unmasking." },
    { t: "Look Me in the Eye", a: "John Elder Robison", d: "A memoir about growing up undiagnosed with Asperger's — funny, honest, and humanizing." },
    { t: "Neurotribes", a: "Steve Silberman", d: "A Pulitzer Prize-winning history of autism — not by an autistic author, but deeply informed by autistic voices." },
    { t: "All the Weight of Our Dreams", a: "Multiple autistic authors", d: "An anthology of poetry, essays, and art by autistic people of color — the first of its kind." },
    { t: "Loud Hands", a: "Autistic Self Advocacy Network", d: "Anthology of writing by autistic people about self-advocacy, identity, and the movement." },
  ],
  "For Parents": [
    { t: "Uniquely Human", a: "Barry M. Prizant", d: "Frames autism as a different way of experiencing the world — not a disorder to be fixed. Essential reading." },
    { t: "Ten Things Every Child with Autism Wishes You Knew", a: "Ellen Notbohm", d: "Practical, compassionate perspective on seeing the world through an autistic child's eyes." },
    { t: "The Autistic Brain", a: "Temple Grandin", d: "An exploration of neuroscience and what it means to think differently, from one of the most recognized autistic voices." },
  ],
  "For Autistic Teens and Adults": [
    { t: "Divergent Mind", a: "Jenara Nerenberg", d: "Explores sensory processing difference, empathy, and the relationship between neurodivergence and mental health." },
    { t: "Thinking in Pictures", a: "Temple Grandin", d: "A classic memoir about visual thinking and autistic experience, expanded in a later edition." },
    { t: "I Think I Might Be Autistic", a: "Cynthia Kim", d: "A practical guide for adults newly diagnosed or in the process of exploring late diagnosis." },
  ],
  "Children's Books with Autistic Characters": [
    { t: "Anything But Typical", a: "Nora Raleigh Baskin", d: "A middle-grade novel about a nonspeaking autistic boy who expresses himself through writing. Authentic and moving." },
    { t: "My Brother Charlie", a: "Holly Robinson Peete", d: "A picture book told from the perspective of a sibling of an autistic child. Warm and accurate." },
    { t: "A Friend Like Simon", a: "Kate Gaynor", d: "A classroom-based story about acceptance and friendship." },
  ],
};
export default function BooksPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", color: "var(--cream)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px 80px" }}>
        <span style={{ fontSize: 11, letterSpacing: "3px", color: "var(--lime)", fontWeight: 700 }}>READING LIST</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-2px", margin: "12px 0 16px" }}>Books on Autism</h1>
        <p style={{ fontSize: 16, color: "rgba(250,250,248,0.55)", maxWidth: 600, lineHeight: 1.7, marginBottom: 48 }}>Curated books on autism — by autistic authors, for parents, for teens and adults, and for children. No affiliate links. Just books worth reading.</p>
        {Object.entries(BOOKS).map(([category, books]) => (
          <div key={category} style={{ marginBottom: 56 }}>
            <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid rgba(184,232,135,0.15)" }}>{category}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
              {books.map(b => (
                <div key={b.t} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,232,135,0.08)", padding: "20px 18px" }}>
                  <div style={{ fontWeight: 800, fontSize: 14, color: "var(--cream)", marginBottom: 4 }}>{b.t}</div>
                  <div style={{ fontSize: 12, color: "var(--lime)", fontWeight: 700, marginBottom: 10 }}>{b.a}</div>
                  <p style={{ fontSize: 13, color: "rgba(250,250,248,0.5)", lineHeight: 1.6, margin: 0 }}>{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
