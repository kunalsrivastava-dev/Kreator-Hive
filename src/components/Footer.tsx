"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2B2E3B", paddingTop: "80px", paddingBottom: "32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, minmax(0, 1fr))", gap: "48px", marginBottom: "64px" }} className="md-grid lg-grid">
          <div style={{ gridColumn: "span 2" }} className="lg-col-span-2">
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginBottom: "24px" }}>
              <Image
                src="/logo.svg"
                alt="Kreator Hive"
                width={156}
                height={60}
                style={{
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  width: "156px",
                  height: "60px",
                  filter: "brightness(0) invert(1)"
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                unoptimized
              />
            </Link>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "380px", marginBottom: "32px", lineHeight: 1.75, fontSize: "16px" }}>
              Transforming influencer marketing through data-centric solutions. Discover, evaluate, and collaborate with creators — faster, smarter, and with measurable ROI.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <SocialIcon svgPath="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              <SocialIcon svgPath="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              <SocialIcon svgPath="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </div>
          </div>

          <div>
            <h4 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "24px", fontSize: "16px" }}>Product</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <FooterLink href="#">Discovery Engine</FooterLink>
              <FooterLink href="#">Creator Analytics</FooterLink>
              <FooterLink href="#">Campaign Hub</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "24px", fontSize: "16px" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "24px", fontSize: "16px" }}>Legal</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </div>
          </div>
        </div>

        <div style={{ 
          paddingTop: "32px", 
          borderTop: "1px solid rgba(255,255,255,0.07)", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>
            © 2026 KreatorHive LLP. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
            Made in India 🇮🇳
          </p>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) { .md-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
        @media (min-width: 1024px) { 
          .lg-grid { grid-template-columns: repeat(5, minmax(0, 1fr)) !important; } 
          .lg-col-span-2 { grid-column: span 2 / span 2 !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link 
      href={href} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        color: hovered ? "#FFFFFF" : "rgba(255,255,255,0.55)", 
        textDecoration: "none", 
        transition: "all 0.2s ease",
        transform: hovered ? "translateX(2px)" : "translateX(0)",
        display: "inline-block",
        fontSize: "16px"
      }}
    >
      {children}
    </Link>
  );
}

function SocialIcon({ svgPath }: { svgPath: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a 
      href="#" 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: hovered ? "#4FC3F7" : "rgba(255,255,255,0.45)",
        backgroundColor: "transparent",
        transition: "all 0.2s ease"
      }}
    >
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d={svgPath} />
      </svg>
    </a>
  );
}
