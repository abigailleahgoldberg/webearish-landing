import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import NavClient from './NavClient';
import AutismChatbot from './components/AutismChatbot';
import Footer from './Footer';
import NetworkBar from './components/NetworkBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://webearish.com'),
  title: { default: 'WeBearish | Autism Acceptance Movement', template: '%s | WeBearish' },
  description: 'WeBearish is an autism acceptance movement. A bearish serious hub for autistic children, families, and allies. Merch, community, and resources — all of it built to grow the movement.',
  keywords: ['autism acceptance', 'autism community', 'autistic children', 'neurodivergent', 'autism movement', 'autism acceptance USA'],
  openGraph: {
    title: 'WeBearish | Autism Acceptance Movement',
    description: 'Merch, community, and resources for autistic children and their families. We are not a charity — we are a movement.',
    url: 'https://webearish.com',
    siteName: 'WeBearish',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WeBearish — Autism Acceptance Movement' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
    site: '@webearish',
    creator: '@webearish',
  },
  alternates: {
    canonical: 'https://webearish.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta name='linkedin:owner' content='The Voice of Cash' />
        <meta property='og:image:type' content='image/png' />
        <meta name='facebook-domain-verification' content='' />
      </head>
      <body>
        <NetworkBar />
        <NavClient />
        <main>{children}</main>
        <Footer />
        <AutismChatbot />
      </body>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-5L9R74PZSE'
          strategy='afterInteractive'
        />
        <Script id='ga4-init' strategy='afterInteractive'>
          { 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(js, new Date()); gtag(config, G-5L9R74PZSE);' }
        </Script>
    </html>
  );
}
