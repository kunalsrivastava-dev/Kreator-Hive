"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-border-light"
          : "bg-white py-6 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-cool flex items-center justify-center shadow-brand-sm">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <span
              className={cn(
                "font-display font-bold text-xl tracking-tight transition-colors text-text-primary"
              )}
            >
              KreatorHive
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors text-text-primary hover:text-brand-purple"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-gradient-cool text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-brand-sm hover:shadow-brand-md hover:-translate-y-0.5 transition-all duration-300">
              Request a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-primary hover:text-brand-purple transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border-light shadow-card py-4 px-4 flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-primary font-medium px-4 py-2 hover:bg-bg-secondary rounded-lg hover:text-brand-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-gradient-cool text-white px-6 py-3 rounded-full font-medium mt-4 shadow-brand-sm">
            Request a Demo
          </button>
        </div>
      )}
    </nav>
  );
}
