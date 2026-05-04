"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Search, Zap, Network, BrainCircuit, LineChart, LayoutDashboard } from "lucide-react";

export default function ProblemSolution() {
  const items = [
    {
      problem: "Manual discovery and vetting takes weeks of team bandwidth.",
      solution: "AI-powered matching engine surfaces perfect creators instantly.",
      problemIcon: <Search className="w-6 h-6 text-red-500" />,
      solutionIcon: <Zap className="w-6 h-6 text-brand-cyan" />,
      visual: <BrainCircuit className="w-24 h-24 text-gray-200 stroke-[1]" />
    },
    {
      problem: "Decisions based on gut-feel lead to unpredictable campaign results.",
      solution: "Deep analytics and scoring predict performance before you spend.",
      problemIcon: <XCircle className="w-6 h-6 text-red-500" />,
      solutionIcon: <LineChart className="w-6 h-6 text-brand-cyan" />,
      visual: <LineChart className="w-24 h-24 text-gray-200 stroke-[1]" />,
      reverse: true
    },
    {
      problem: "Scattered workflows across spreadsheets, emails, and DMs.",
      solution: "Unified collaboration hub brings your entire team and creators together.",
      problemIcon: <Network className="w-6 h-6 text-red-500" />,
      solutionIcon: <LayoutDashboard className="w-6 h-6 text-brand-cyan" />,
      visual: <LayoutDashboard className="w-24 h-24 text-gray-200 stroke-[1]" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 tracking-tight">
            Why Traditional Influencer <br className="hidden md:block" />
            Marketing <span className="text-red-500">Fails</span>
          </h2>
        </div>

        <div className="space-y-24">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${item.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-8"
              >
                <div className="p-6 bg-white rounded-2xl border border-red-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-red-50 p-2 rounded-lg">{item.problemIcon}</div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">The Problem</h4>
                      <p className="text-lg text-gray-700 font-medium">{item.problem}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-brand-cyan/20 shadow-[0_8px_30px_rgb(0,180,216,0.12)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary"></div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-brand-cyan/10 p-2 rounded-lg">{item.solutionIcon}</div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-cyan uppercase tracking-wider mb-2">The Solution</h4>
                      <p className="text-lg text-gray-900 font-semibold">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full relative flex justify-center items-center"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 relative">
                  {/* Decorative dashed rings */}
                  <div className="absolute inset-4 border border-dashed border-gray-200 rounded-full animate-[spin_30s_linear_infinite]"></div>
                  <div className="absolute inset-10 border border-dashed border-gray-100 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                  
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {item.visual}
                  </div>
                  
                  {/* Nodes on circle */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-purple rounded-full border-2 border-white shadow-sm"></div>
                  <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 bg-brand-cyan rounded-full border-2 border-white shadow-sm"></div>
                  <div className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-brand-orange rounded-full border-2 border-white shadow-sm"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background SVG Cable Divider */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden lg:block opacity-10">
        <svg height="100%" width="100%">
          <line x1="0" y1="0" x2="0" y2="100%" stroke="url(#lineGradient)" strokeWidth="4" strokeDasharray="8 8" />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7B2FBE" />
              <stop offset="50%" stopColor="#00B4D8" />
              <stop offset="100%" stopColor="#00C49A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
