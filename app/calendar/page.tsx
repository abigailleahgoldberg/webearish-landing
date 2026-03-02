import type { Metadata } from 'next';
import CalendarPageClient from './PageClient';

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function CalendarPage() {
  return <CalendarPageClient />;
}
