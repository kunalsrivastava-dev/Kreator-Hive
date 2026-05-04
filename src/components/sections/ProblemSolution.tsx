"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function ProblemSolution() {
  const items = [
    {
      problem: "Manual discovery and vetting takes weeks of team bandwidth.",
      solution: "AI-powered matching engine surfaces perfect creators instantly."
    },
    {
      problem: "Decisions based on gut-feel lead to unpredictable campaign results.",
      solution: "Deep analytics and scoring predict performance before you spend."
    },
    {
      problem: "Scattered workflows across spreadsheets, emails, and DMs.",
      solution: "Unified collaboration hub brings your entire team and creators together."
    }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold text-[#9B3DB8] uppercase tracking-[0.12em] mb-4">
            The Challenge
          </p>
          <h2 className="text-[42px] font-bold text-[#2B2E3B] tracking-tight">
            Why Traditional Influencer <br className="hidden md:block" />
            Marketing Fails
          </h2>
        </div>

        <div className="relative">
          {/* Center Vertical Divider (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 border-l border-dashed border-[#EAE0F5] z-0"></div>

          <div className="space-y-12 relative z-10">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative"
              >
                {/* VS Badge (Desktop only) */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#EAE0F5] rounded-full items-center justify-center shadow-sm z-20">
                  <span className="text-[#9B3DB8] font-bold text-[14px]">VS</span>
                </div>

                {/* Problem Card (Left) */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#FFF5F5] border border-[rgba(229,57,53,0.25)] rounded-xl p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-bundle-2"></div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-[#E53935]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-gradient-bundle-2 uppercase tracking-wide mb-2">The Problem</h4>
                      <p className="text-[#4A4E5C] text-[16px] leading-relaxed font-medium">{item.problem}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Solution Card (Right) */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="bg-[#F1FFF5] border border-[rgba(46,125,50,0.25)] rounded-xl p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-bundle-3"></div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold text-gradient-bundle-3 uppercase tracking-wide mb-2">The Solution</h4>
                      <p className="text-[#2B2E3B] text-[16px] leading-relaxed font-semibold">{item.solution}</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
