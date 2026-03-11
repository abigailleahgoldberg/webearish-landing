"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// How long (ms) to wait before closing a dropdown after mouseLeave
const CLOSE_DELAY = 200;

const NAV_SILOS = [
  {
    label: "Understanding Autism",
    href: "/diagnosis",
    children: [
      { label: "Getting a Diagnosis", href: "/getting-a-diagnosis" },
      { label: "Is This Autism?", href: "/is-this-autism" },
      { label: "Autism in Girls", href: "/autism-in-girls" },
      { label: "Autism & Anxiety", href: "/autism-and-anxiety" },
      { label: "Nonverbal Autism", href: "/nonverbal-autism" },
      { label: "Autism & Food", href: "/autism-and-food" },
      { label: "Autism & Sleep", href: "/autism-sleep-guide" },
      { label: "Conditions & Co-Occurrences", href: "/conditions" },
    ],
  },
  {
    label: "Families",
    href: "/parents",
    children: [
      { label: "For Parents", href: "/parents" },
      { label: "Siblings", href: "/autism-and-siblings" },
      { label: "School Rights & IEP", href: "/iep" },
      { label: "School Accommodations", href: "/autism-school-accommodations" },
      { label: "Safety", href: "/safety" },
      { label: "Social Skills", href: "/autism-social-skills" },
      { label: "Meltdown vs. Tantrum", href: "/meltdown-vs-tantrum" },
      { label: "Diagnosis Cost Guide", href: "/autism-diagnosis-cost" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "All Resources", href: "/resources" },
      { label: "Guides", href: "/guides" },
      { label: "Sensory Tools Guide", href: "/sensory-tools-guide" },
      { label: "Therapies", href: "/therapies" },
      { label: "Tools", href: "/tools" },
      { label: "Books", href: "/books" },
      { label: "Glossary", href: "/glossary" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    label: "Community",
    href: "/community",
    children: [
      { label: "Community Hub", href: "/community" },
      { label: "Voices", href: "/voices" },
      { label: "Blog", href: "/blog" },
      { label: "Calendar", href: "/calendar" },
      { label: "Media", href: "/media" },
      { label: "Acceptance", href: "/acceptance" },
      { label: "Mission", href: "/mission" },
      { label: "About", href: "/about" },
    ],
  },
];

export default function NavClient() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(null), CLOSE_DELAY);
  };

  const cancelClose = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav
        ref={navRef as any}
        className="wb-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: scrolled ? "rgba(15,26,15,0.97)" : "rgba(15,26,15,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(184,232,135,0.12)" : "1px solid transparent",
          transition: "all 0.3s ease",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", zIndex: 10 }}>
          <Image src="/bear-logo.png" alt="WeBearish Bear" width={36} height={36} style={{ display: "block" }} />
          <span style={{ fontWeight: 900, fontSize: 18, color: "#B8E887", letterSpacing: "-0.5px" }}>WeBearish</span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="wb-nav-desktop">
          {NAV_SILOS.map((silo) => (
            <div
              key={silo.label}
              style={{ position: "relative" }}
              onMouseEnter={() => openMenu(silo.label)}
              onMouseLeave={scheduleClose}
            >
              <button
                onClick={() => setOpen(open === silo.label ? null : silo.label)}
                style={{
                  background: "none",
                  border: "none",
                  color: open === silo.label ? "#B8E887" : "rgba(255,255,255,0.7)",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.3px",
                  cursor: "pointer",
                  padding: "0 12px",
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                aria-expanded={open === silo.label}
                aria-haspopup="true"
              >
                {silo.label}
                <svg
                  width="10" height="10" viewBox="0 0 10 10" fill="currentColor"
                  style={{ opacity: 0.6, transform: open === silo.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
                >
                  <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </button>

              {/* Dropdown — flush to nav bottom, no gap */}
              {open === silo.label && (
                <div
                  onMouseEnter={() => cancelClose(silo.label)}
                  onMouseLeave={scheduleClose}
                  style={{
                    position: "absolute",
                    top: "100%",           // flush — zero gap
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#0F1A0F",
                    border: "1px solid rgba(184,232,135,0.15)",
                    borderTop: "2px solid #B8E887",
                    borderRadius: "0 0 8px 8px",
                    padding: "8px 0",
                    minWidth: 230,
                    boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
                    zIndex: 300,
                  }}
                  role="menu"
                >
                  {silo.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      role="menuitem"
                      onClick={() => setOpen(null)}
                      style={{
                        display: "block",
                        padding: "9px 20px",
                        color: "rgba(255,255,255,0.65)",
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "color 0.15s, background 0.15s",
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#B8E887";
                        e.currentTarget.style.background = "rgba(184,232,135,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                  <div style={{ borderTop: "1px solid rgba(184,232,135,0.08)", margin: "8px 0 0" }}>
                    <Link
                      href={silo.href}
                      role="menuitem"
                      onClick={() => setOpen(null)}
                      style={{
                        display: "block",
                        padding: "9px 20px",
                        color: "#B8E887",
                        fontSize: 12,
                        fontWeight: 800,
                        textDecoration: "none",
                        letterSpacing: "0.5px",
                      }}
                    >
                      View All →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link href="/shop" style={{ color: "rgba(255,255,255,0.75)", fontWeight: 700, fontSize: 13, textDecoration: "none", padding: "8px 12px", letterSpacing: "0.3px" }}>Shop</Link>
          <Link
            href="/contact"
            style={{
              background: "#FF7B5C",
              color: "#fff",
              fontWeight: 900,
              fontSize: 12,
              letterSpacing: "1px",
              textTransform: "uppercase",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: 4,
              whiteSpace: "nowrap",
              marginLeft: 8,
            }}
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="wb-nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#B8E887",
            cursor: "pointer",
            padding: 8,
            minWidth: 44,
            minHeight: 44,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
            {mobileOpen
              ? <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#0F1A0F",
            zIndex: 199,
            overflowY: "auto",
            padding: "24px 24px 48px",
          }}
          className="wb-nav-mobile-drawer"
        >
          {NAV_SILOS.map((silo) => (
            <div key={silo.label} style={{ marginBottom: 28 }}>
              <p style={{ fontSize: 11, fontWeight: 900, color: "#B8E887", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>
                {silo.label}
              </p>
              {silo.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "block", color: "rgba(255,255,255,0.65)", fontSize: 15, fontWeight: 600, textDecoration: "none", padding: "16px 20px", borderBottom: "1px solid rgba(184,232,135,0.06)" }}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
            <Link href="/shop" onClick={() => setMobileOpen(false)} style={{ color: "rgba(255,255,255,0.75)", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>Shop</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ background: "#FF7B5C", color: "#fff", fontWeight: 900, fontSize: 13, letterSpacing: "1px", textTransform: "uppercase", padding: "12px 24px", textDecoration: "none", textAlign: "center", borderRadius: 4 }}>
              Get Involved
            </Link>
          </div>
        </div>
      )}

      {/* Nav CSS */}
      <style>{`
        .wb-nav-hamburger { display: none !important; }
        @media (max-width: 900px) {
          .wb-nav-desktop { display: none !important; }
          .wb-nav-hamburger { display: flex !important; }
        }
        body { padding-top: 64px; }
      `}</style>
    </>
  );
}
