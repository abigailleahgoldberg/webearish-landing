import type { MetadataRoute } from 'next';
import { calendarEvents } from './data/autism-calendar';
import { glossaryTerms } from './data/glossary';
import { conditions } from './data/conditions';
import { stateResources } from './data/state-resources';
import { voiceEssays as autisticVoices } from './data/autistic-voices';
import { blogPosts } from './blog/data';

const BASE = 'https://webearish.com';
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ['/', 1.0, 'weekly'],
    ['/about', 0.7, 'monthly'],
    ['/shop', 0.8, 'weekly'],
    ['/blog', 0.9, 'daily'],
    ['/contact', 0.6, 'monthly'],
    ['/quiz', 0.8, 'monthly'],
    ['/resources', 0.8, 'weekly'],
    ['/glossary', 0.9, 'weekly'],
    ['/conditions', 0.9, 'weekly'],
    ['/calendar', 0.8, 'monthly'],
    ['/voices', 0.8, 'monthly'],
    ['/diagnosis', 0.9, 'monthly'],
    ['/diagnosis/early-signs', 0.8, 'monthly'],
    ['/diagnosis/evaluation-process', 0.8, 'monthly'],
    ['/diagnosis/getting-assessed', 0.8, 'monthly'],
    ['/diagnosis/dsm-5-criteria', 0.7, 'monthly'],
    ['/diagnosis/after-diagnosis', 0.8, 'monthly'],
    ['/ages', 0.8, 'monthly'],
    ['/ages/toddler', 0.8, 'monthly'],
    ['/ages/school-age', 0.8, 'monthly'],
    ['/ages/teen', 0.8, 'monthly'],
    ['/ages/adult', 0.7, 'monthly'],
    ['/ages/college', 0.8, 'monthly'],
    ['/is-this-autism', 0.9, 'monthly'],
    ['/is-this-autism/signs-in-girls', 0.8, 'monthly'],
    ['/is-this-autism/signs-in-boys', 0.7, 'monthly'],
    ['/is-this-autism/in-adults', 0.8, 'monthly'],
    ['/is-this-autism/late-diagnosis', 0.8, 'monthly'],
    ['/is-this-autism/high-masking', 0.8, 'monthly'],
    ['/adults', 0.8, 'monthly'],
    ['/adults/burnout', 0.9, 'monthly'],
    ['/adults/late-diagnosis', 0.8, 'monthly'],
    ['/adults/employment', 0.8, 'monthly'],
    ['/adults/relationships', 0.7, 'monthly'],
    ['/adults/housing', 0.7, 'monthly'],
    ['/iep', 0.9, 'monthly'],
    ['/school-rights', 0.8, 'monthly'],
    ['/acceptance', 0.8, 'monthly'],
    ['/safety', 0.8, 'monthly'],
    ['/safety/crisis', 0.9, 'monthly'],
    ['/parents', 0.8, 'monthly'],
    ['/parents/self-care', 0.7, 'monthly'],
    ['/siblings', 0.7, 'monthly'],
    ['/communication/aac', 0.8, 'monthly'],
    ['/guides/meltdown-vs-tantrum', 0.8, 'monthly'],
    ['/meltdown-vs-tantrum', 0.9, 'monthly'],
    ['/autism-and-anxiety', 0.9, 'monthly'],
    ['/autism-diagnosis-cost', 0.9, 'monthly'],
    ['/autism-in-girls', 0.9, 'monthly'],
    ['/nonverbal-autism', 0.9, 'monthly'],
    ['/autism-and-food', 0.9, 'monthly'],
    ['/autism-school-accommodations', 0.9, 'monthly'],
    ['/autism-social-skills', 0.9, 'monthly'],
    ['/autism-sleep-guide', 0.9, 'monthly'],
    ['/autism-and-siblings', 0.9, 'monthly'],
    ['/sensory-tools-guide', 0.9, 'monthly'],
    // Tier 1: Autism & Anxiety sub-pages
    ['/autism-and-anxiety/types', 0.8, 'monthly'],
    ['/autism-and-anxiety/coping', 0.8, 'monthly'],
    ['/autism-and-anxiety/when-to-seek-help', 0.8, 'monthly'],
    ['/autism-and-anxiety/at-school', 0.8, 'monthly'],
    ['/autism-and-anxiety/at-home', 0.8, 'monthly'],
    // Tier 1: Sleep Guide sub-pages
    ['/autism-sleep-guide/environment', 0.8, 'monthly'],
    ['/autism-sleep-guide/routines', 0.8, 'monthly'],
    ['/autism-sleep-guide/melatonin', 0.8, 'monthly'],
    ['/autism-sleep-guide/sensory-tools', 0.8, 'monthly'],
    ['/autism-sleep-guide/by-age', 0.8, 'monthly'],
    // Tier 1: Social Skills sub-pages
    ['/autism-social-skills/making-friends', 0.8, 'monthly'],
    ['/autism-social-skills/playground', 0.8, 'monthly'],
    ['/autism-social-skills/structured-vs-unstructured', 0.8, 'monthly'],
    ['/autism-social-skills/online', 0.8, 'monthly'],
    ['/autism-social-skills/scripts', 0.8, 'monthly'],
    // Tier 1: Nonverbal Autism sub-pages
    ['/nonverbal-autism/aac-devices', 0.8, 'monthly'],
    ['/nonverbal-autism/sign-language', 0.8, 'monthly'],
    ['/nonverbal-autism/pecs', 0.8, 'monthly'],
    ['/nonverbal-autism/supporting-communication', 0.8, 'monthly'],
    ['/nonverbal-autism/presuming-competence', 0.8, 'monthly'],
    // Tier 1: Sensory Tools sub-pages
    ['/sensory-tools-guide/visual', 0.8, 'monthly'],
    ['/sensory-tools-guide/auditory', 0.8, 'monthly'],
    ['/sensory-tools-guide/tactile', 0.8, 'monthly'],
    ['/sensory-tools-guide/proprioceptive', 0.8, 'monthly'],
    ['/sensory-tools-guide/budget', 0.8, 'monthly'],
    // Tier 1: Meltdown sub-pages
    ['/meltdown-vs-tantrum/before', 0.8, 'monthly'],
    ['/meltdown-vs-tantrum/during', 0.8, 'monthly'],
    ['/meltdown-vs-tantrum/after', 0.8, 'monthly'],
    ['/meltdown-vs-tantrum/shutdown', 0.8, 'monthly'],
    ['/meltdown-vs-tantrum/in-public', 0.8, 'monthly'],
    ['/books', 0.7, 'monthly'],
    ['/media', 0.7, 'monthly'],
    ['/tools', 0.8, 'monthly'],
    ['/stories', 0.7, 'monthly'],
    ['/therapies', 0.9, 'monthly'],
    ['/therapies/aba', 0.9, 'monthly'],
    ['/research', 0.9, 'monthly'],
    ['/gender', 0.8, 'monthly'],
    ['/resources/by-state', 0.8, 'monthly'],
    ['/privacy', 0.3, 'yearly'],
    ['/terms', 0.3, 'yearly'],
    ['/coppa', 0.3, 'yearly'],
    ['/accessibility', 0.3, 'yearly'],
  ].map(([url, priority, changeFreq]) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency: changeFreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: priority as number,
  }));

  const blogPages = blogPosts.map(p => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const glossaryPages = glossaryTerms.map(t => ({
    url: `${BASE}/glossary/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const conditionPages = conditions.map(c => ({
    url: `${BASE}/conditions/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const calendarPages = calendarEvents.map(e => ({
    url: `${BASE}/calendar/${e.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.65,
  }));

  const statePages = stateResources.map(s => ({
    url: `${BASE}/resources/by-state/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const voicePages = autisticVoices.map(v => ({
    url: `${BASE}/voices/${v.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...blogPages, ...glossaryPages, ...conditionPages, ...calendarPages, ...statePages, ...voicePages];
}
