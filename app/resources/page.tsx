import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — WeBearish",
  description: "Autism acceptance resources, research, organizations, and reading materials curated by WeBearish for autistic people and their families.",
};

const RESOURCES = [
  {
    category:"Organizations",
    color:"var(--lime-dark)",
    items:[
      { name:"Autistic Self Advocacy Network (ASAN)", url:"https://autisticadvocacy.org", desc:"Led by autistic people, for autistic people. Policy, rights, community." },
      { name:"Autism Science Foundation", url:"https://autismsciencefoundation.org", desc:"Funds autism research; prioritizes autistic quality of life." },
      { name:"The Arc", url:"https://thearc.org", desc:"National advocacy for people with intellectual and developmental disabilities." },
      { name:"Autism Society of America", url:"https://autismsociety.org", desc:"Nationwide network of community chapters. Programs, events, support." },
    ]
  },
  {
    category:"Research & Data",
    color:"var(--coral)",
    items:[
      { name:"CDC Autism Data (ADDM)", url:"https://www.cdc.gov/autism/data-research/", desc:"The source for 1 in 36 data. ADDM network surveillance reports." },
      { name:"INSAR — International Society for Autism Research", url:"https://www.autism-insar.org", desc:"Largest autism research conference and journal network." },
      { name:"Autistic Experiences Database", url:"https://www.autisticadvocacy.org/resources/", desc:"First-person accounts, not just clinical perspectives." },
    ]
  },
  {
    category:"For Families",
    color:"var(--yellow-dark)",
    items:[
      { name:"Think College", url:"https://thinkcollege.net", desc:"Higher education for people with intellectual disabilities." },
      { name:"Wrightslaw", url:"https://wrightslaw.com", desc:"Special education law and advocacy. Know your child's rights." },
      { name:"IAN Research (Kennedy Krieger)", url:"https://iancommunity.org", desc:"Family-driven autism research participation and information." },
      { name:"Autism Speaks — Resource Guide", url:"https://www.autismspeaks.org/resource-guide", desc:"National resource locator — find local programs and support." },
    ]
  },
  {
    category:"Books & Reading",
    color:"var(--sky-dark)",
    items:[
      { name:"NeuroTribes — Steve Silberman", url:"https://stevesilberman.com/book/neurotribes/", desc:"The landmark history of autism and the neurodiversity movement." },
      { name:"Unmasking Autism — Devon Price, PhD", url:"https://www.penguinrandomhouse.com/books/688691/unmasking-autism-by-devon-price/", desc:"The hidden ways autism presents, especially in adults and women." },
      { name:"What I Mean When I Say I'm Autistic — Annie Kotowicz", url:"https://annievrk.com", desc:"A clear, accessible explanation of autistic experience." },
    ]
  },
,
  {
    category:"School & Education Rights",
    color:"var(--forest-mid)",
    items:[
      { name:"Wrightslaw — IDEA & IEP Guide", url:"https://wrightslaw.com/idea/", desc:"Your child's rights under IDEA. IEPs, evaluations, placements — know them cold." },
      { name:"PACER Center", url:"https://www.pacer.org", desc:"Parent training and information center. Disability rights, bullying prevention, school advocacy." },
      { name:"Understood.org", url:"https://www.understood.org", desc:"Tools and community for parents of kids with learning and thinking differences." },
      { name:"National Disability Rights Network", url:"https://www.ndrn.org", desc:"Federally mandated protection and advocacy. Legal resources for people with disabilities." },
    ]
  },
  {
    category:"Mental Health & Support",
    color:"var(--sky-dark)",
    items:[
      { name:"Psychology Today — Autism Therapists", url:"https://www.psychologytoday.com/us/therapists/autism-spectrum-disorder", desc:"Search for autism-specializing therapists and psychologists near you." },
      { name:"AANE — Autism & Asperger Network", url:"https://www.aane.org", desc:"Support groups, coaching, and resources for autistic adults and their families." },
      { name:"Crisis Text Line", url:"https://www.crisistextline.org", desc:"Text HOME to 741741. Free 24/7 crisis support — accessible for those who find voice calls difficult." },
    ]
  },
  {
    category:"Advocacy & Policy",
    color:"var(--coral)",
    items:[
      { name:"Disability Rights Advocates", url:"https://dralegal.org", desc:"Nonprofit legal center fighting for rights of people with disabilities in education, housing, and employment." },
      { name:"8 News Now — CCSD ABA Bill", url:"https://www.8newsnow.com/news/local-news/parent-driven-bill-aims-at-providing-additional-aba-paraprofessionals-at-ccsd-for-students-on-spectrum/", desc:"Parent-driven bill for ABA paraprofessionals at Clark County School District. WeBearish parents in the fight." },
      { name:"Autistic Women & Nonbinary Network", url:"https://awnnetwork.org", desc:"Support, community, and advocacy for autistic women, girls, and nonbinary people." },
      { name:"Disability Visibility Project", url:"https://disabilityvisibilityproject.com", desc:"Amplifying disability media and culture. First-person autistic voices." },
      { name:"National Council on Disability", url:"https://www.ncd.gov", desc:"Federal agency advising Congress and the President on disability policy." },
      { name:"Global Autism Project", url:"https://www.globalautismproject.org", desc:"Training and capacity-building for autism support worldwide." },
    ]
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section style={{ background:"var(--forest)", padding:"100px 32px 80px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <span style={{ fontSize:11, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(184,232,135,0.6)", display:"block", marginBottom:20 }}>Knowledge Base</span>
          <h1 style={{ fontSize:"clamp(44px,6.5vw,84px)", fontWeight:900, color:"#fff", letterSpacing:"-3px", lineHeight:1.0, marginBottom:20 }}>
            Resources for<br /><span style={{ color:"var(--lime)" }}>the movement.</span>
          </h1>
          <div style={{ width:48, height:4, background:"var(--coral)", marginBottom:24 }} />
          <p style={{ fontSize:18, color:"rgba(255,255,255,0.6)", fontWeight:700, lineHeight:1.7, maxWidth:560 }}>
            Curated organizations, research, and reading for autistic people, families, and allies. Updated as the movement grows.
          </p>
        </div>
      </section>

      <section style={{ background:"var(--cream)", padding:"80px 32px 100px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", flexDirection:"column", gap:64 }}>
          {(RESOURCES as any[]).map((rsec: any, si: number) => (
            <div key={si}>
              <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:32 }}>
                <span style={{ fontSize:10, fontWeight:900, letterSpacing:"3px", textTransform:"uppercase", color:rsec.color }}>{rsec.category}</span>
                <div style={{ flex:1, height:1, background:"var(--gray-light)" }} />
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:20 }} className="wb-resources-grid">
                {rsec.items.map((item: any) => (
                  <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none" }}>
                    <div style={{ background:"#fff", borderTop:`4px solid ${rsec.color}`, padding:"28px", transition:"transform 0.2s, box-shadow 0.2s" }}>
                      <div style={{ fontWeight:900, fontSize:16, color:"var(--dark)", marginBottom:10, letterSpacing:"-0.3px" }}>{item.name} →</div>
                      <p style={{ fontSize:14, color:"var(--muted)", fontWeight:700, lineHeight:1.6 }}>{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background:"var(--forest)", padding:"64px 32px", textAlign:"center" }}>
        <p style={{ fontSize:14, fontWeight:700, color:"rgba(255,255,255,0.35)", marginBottom:20 }}>
          Know a resource we should add? Let us know.
        </p>
        <Link href="/contact" style={{ background:"var(--coral)", color:"#fff", fontWeight:900, fontSize:13, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 28px", textDecoration:"none" }}>
          Suggest a Resource
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .wb-resources-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
