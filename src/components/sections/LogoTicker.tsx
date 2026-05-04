"use client";

import { motion } from "framer-motion";

export default function LogoTicker() {
  const logos = [
    "AcmeCorp", "GlobalTech", "Nexus", "Lumina", "Vertex", "Quantum", "Pulse", "Zephyr"
  ];

  return (
    <section className="py-12 border-b border-[#EAE0F5] bg-[#FAF7FF] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 mb-8">
        <p className="text-center text-[12px] font-semibold text-[#9B3DB8] uppercase tracking-[0.12em]">
          Trusted by forward-thinking brands
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group max-w-[1200px] mx-auto">
        <div className="animate-scrolling-ticker flex whitespace-nowrap items-center">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-none mx-12 text-3xl font-extrabold text-[#2B2E3B] opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer"
            >
              {logo}
            </div>
          ))}
        </div>
        
        {/* Gradient fades for smooth edges */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF7FF] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF7FF] to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
