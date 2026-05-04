"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
        backgroundColor: isScrolled ? "#FFFFFF" : "transparent",
        boxShadow: isScrolled ? "0 1px 0 #EAE0F5" : "none",
        height: "68px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.svg"
              alt="Kreator Hive"
              width={156}
              height={60}
              style={{
                objectFit: "contain",
                width: "156px",
                height: "60px",
              }}
              unoptimized
            />
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} href={link.href} name={link.name} />
            ))}
            <DemoButton />
          </div>

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

      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "68px",
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #EAE0F5",
            boxShadow: "0 8px 24px rgba(155, 61, 184, 0.08)",
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
                color: "#4A4E5C",
                fontWeight: 500,
                fontSize: "15px",
                padding: "10px 16px",
                borderRadius: "8px",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#FAF7FF";
                e.currentTarget.style.color = "#9B3DB8";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#4A4E5C";
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ paddingTop: "8px" }}>
            <DemoButton fullWidth />
          </div>
        </div>
      )}

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
        fontSize: "15px",
        fontWeight: 500,
        color: hovered ? "#9B3DB8" : "#4A4E5C",
        transition: "color 0.2s",
      }}
    >
      {name}
      <span
        style={{
          position: "absolute",
          bottom: "-4px",
          left: 0,
          height: "2px",
          width: hovered ? "100%" : "0%",
          background: "#9B3DB8",
          transition: "width 0.2s ease",
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
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: 600,
        color: "#ffffff",
        background: "linear-gradient(135deg, #9B3DB8 0%, #E53935 33%, #FF8F00 66%, #2E7D32 100%)",
        boxShadow: hovered
          ? "0 4px 14px rgba(155,61,184,0.30)"
          : "none",
        transition: "all 0.2s ease",
        transform: hovered ? "scale(1.02)" : "scale(1)",
      }}
    >
      Request a Demo
    </button>
  );
}