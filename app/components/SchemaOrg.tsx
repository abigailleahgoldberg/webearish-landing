export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WeBearish',
    url: 'https://webearish.com',
    logo: 'https://webearish.com/bear-logo.png',
    description: 'WeBearish is an autism acceptance movement and resource hub. 100% of profits are reinvested into the movement.',
    sameAs: ['https://webearish.com'],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BlogPostSchema({ title, description, date, url }: { title: string; description: string; date: string; url: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    url: `https://webearish.com${url}`,
    author: { '@type': 'Organization', name: 'WeBearish' },
    publisher: { '@type': 'Organization', name: 'WeBearish', logo: { '@type': 'ImageObject', url: 'https://webearish.com/bear-logo.png' } },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FAQSchema({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
