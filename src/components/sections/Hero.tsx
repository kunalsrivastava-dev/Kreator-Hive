"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh-dark pt-32 pb-20">
      <div className="absolute inset-0 bg-[#0D0D1A]/80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
          <span className="text-sm font-medium text-gradient-primary uppercase tracking-wider">
            The Future of Influencer Marketing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]"
        >
          Data-Driven Influencer Marketing, <br className="hidden md:block" />
          <span className="text-gradient-full">Built for Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          KreatorHive LLP builds intelligent platforms that help brands discover, evaluate, and collaborate with creators — faster, smarter, and with measurable ROI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:-translate-y-1 transition-all duration-300 group">
            Get a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/10 transition-colors duration-300">
            Explore Platform
          </button>
        </motion.div>
      </div>

      {/* Decorative Cable Elements */}
      <div className="absolute left-0 right-0 bottom-0 h-32 overflow-hidden pointer-events-none z-0 opacity-30">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto" preserveAspectRatio="none">
          <path fill="none" stroke="url(#gradient)" strokeWidth="2" d="M0,160 C320,300 420,0 740,160 C1060,320 1120,60 1440,160"></path>
          <path fill="none" stroke="url(#gradient)" strokeWidth="1" opacity="0.5" d="M0,200 C300,100 400,300 700,200 C1000,100 1100,250 1440,200"></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
