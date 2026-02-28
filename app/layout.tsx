import type { Metadata } from "next";
import "./globals.css";
import NavClient from "./NavClient";
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
    images: [{ url: "/bear-logo.png", width: 400, height: 400, alt: "WeBearish" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      </body>
    </html>
  );
}
