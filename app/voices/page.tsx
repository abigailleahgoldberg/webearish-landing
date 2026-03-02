import type { Metadata } from 'next';
import VoicesPageClient from './PageClient';

export const metadata: Metadata = {
  title: "",
  description: "First-person essays written from autistic perspectives. Masking, late diagnosis, burnout, stimming, community, and more — in autistic people's own words.",
};

export default function VoicesPage() {
  return <VoicesPageClient />;
}
