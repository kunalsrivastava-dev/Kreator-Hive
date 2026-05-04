"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Brand colors extracted from Kreator Hive LLP logo
// Primary: deep charcoal #2B2E3B, Accent gradient: purple #9B3DB8 → cyan #29B6F6
// Secondary accent: yellow #F9A825 → green #2E7D32

const NAV_LINKS = [
  { name: "Platform", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Why Us", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled ? "rgba(255,255,255,0.88)" : "#ffffff",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(43,46,59,0.1)"
          : "1px solid transparent",
        boxShadow: isScrolled ? "0 1px 12px rgba(43,46,59,0.08)" : "none",
        padding: isScrolled ? "6px 0" : "8px 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          {/* Logo — full SVG (icon + "KREATOR HIVE LLP" text) */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.svg"
              alt="Kreator Hive LLP"
              width={520}
              height={200}
              style={{
                objectFit: "contain",
                transition: "transform 0.3s ease",
                width: "156px",
                height: "60px",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} href={link.href} name={link.name} />
            ))}
            <DemoButton />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "none",
              padding: "8px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#2B2E3B",
            }}
            className="mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "#ffffff",
            borderBottom: "1px solid rgba(43,46,59,0.1)",
            boxShadow: "0 8px 24px rgba(43,46,59,0.12)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "#2B2E3B",
                fontWeight: 500,
                fontSize: "15px",
                padding: "10px 16px",
                borderRadius: "8px",
                transition: "background 0.2s",
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.background = "rgba(155,61,184,0.06)")
              }
              onMouseLeave={e =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {link.name}
            </Link>
          ))}
          <div style={{ paddingTop: "8px" }}>
            <DemoButton fullWidth />
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, name }: { href: string; name: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: 500,
        color: hovered ? "#9B3DB8" : "#2B2E3B",
        transition: "color 0.2s",
      }}
    >
      {name}
      {/* Underline: purple → cyan gradient matching logo accent */}
      <span
        style={{
          position: "absolute",
          bottom: "-3px",
          left: 0,
          height: "2px",
          width: hovered ? "100%" : "0%",
          background: "linear-gradient(90deg, #9B3DB8, #29B6F6)",
          borderRadius: "1px",
          transition: "width 0.3s ease",
        }}
      />
    </Link>
  );
}

function DemoButton({ fullWidth = false }: { fullWidth?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: fullWidth ? "100%" : "auto",
        padding: "10px 22px",
        borderRadius: "999px",
        border: "none",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 600,
        color: "#ffffff",
        letterSpacing: "0.2px",
        // Gradient pulled directly from logo's purple-to-cyan cable bundle
        background: hovered
          ? "linear-gradient(135deg, #7B2D9E 0%, #0288D1 100%)"
          : "linear-gradient(135deg, #9B3DB8 0%, #29B6F6 100%)",
        boxShadow: hovered
          ? "0 4px 20px rgba(155,61,184,0.4)"
          : "0 2px 10px rgba(155,61,184,0.25)",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
      }}
    >
      Request a Demo
    </button>
  );
}