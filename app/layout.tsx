import type { Metadata } from "next";
import "./globals.css";
import NavClient from "./NavClient";
import AutismChatbot from "./components/AutismChatbot";
import Footer from "./Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://webearish.com'),
  title: { default: "WeBearish | Autism Acceptance Movement", template: "%s | WeBearish" },
  description: "WeBearish is an autism acceptance movement. A bearish serious hub for autistic children, families, and allies. Merch, community, and resources — all of it built to grow the movement.",
  keywords: ["autism acceptance", "autism community", "autistic children", "neurodivergent", "autism movement", "autism acceptance USA"],
  openGraph: {
    title: "WeBearish | Autism Acceptance Movement",
    description: "Merch, community, and resources for autistic children and their families. We are not a charity — we are a movement.",
    url: "https://webearish.com",
    siteName: "WeBearish",
    images: [{ url: "https://webearish.com/og-image.png", width: 1200, height: 630, alt: "WeBearish — Autism Acceptance Movement" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://webearish.com/og-image.png"],
    site: "@webearish",
    creator: "@webearish",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavClient />
        <main>{children}</main>
        <Footer />
              <AutismChatbot />
      </body>
    </html>
  );
}
