"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-32 pb-20">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[100px] bg-[radial-gradient(ellipse_at_center,rgba(139,53,196,0.08)_0%,rgba(41,182,246,0.06)_40%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[100px] bg-[radial-gradient(ellipse_at_center,rgba(249,168,37,0.07)_0%,rgba(56,142,60,0.06)_50%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border-medium mb-8 backdrop-blur-md shadow-sm relative overflow-hidden"
        >
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse relative z-10"></span>
          <span className="text-sm font-medium text-gradient-cool uppercase tracking-wider relative z-10">
            The Future of Influencer Marketing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary tracking-tight mb-6 leading-[1.1]"
        >
          Data-Driven Influencer Marketing, <br className="hidden md:block" />
          <span className="text-gradient-cool">Built for Scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          KreatorHive LLP builds intelligent platforms that help brands discover, evaluate, and collaborate with creators — faster, smarter, and with measurable ROI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-gradient-cool text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-brand-md hover:shadow-brand-lg hover:-translate-y-1 transition-all duration-300 group">
            Get a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-lg text-brand-purple border border-brand-purple hover:bg-brand-purple hover:text-white transition-colors duration-300">
            Explore Platform
          </button>
        </motion.div>
      </div>

      {/* Decorative Cable Elements */}
      <div className="absolute left-0 right-0 bottom-0 h-32 overflow-hidden pointer-events-none z-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto" preserveAspectRatio="none">
          <path fill="none" stroke="url(#gradient-full)" strokeWidth="2" d="M0,160 C320,300 420,0 740,160 C1060,320 1120,60 1440,160"></path>
          <path fill="none" stroke="url(#gradient-full)" strokeWidth="1" opacity="0.5" d="M0,200 C300,100 400,300 700,200 C1000,100 1100,250 1440,200"></path>
          <defs>
            <linearGradient id="gradient-full" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B35C4" />
              <stop offset="25%" stopColor="#4F6FE8" />
              <stop offset="50%" stopColor="#29B6F6" />
              <stop offset="75%" stopColor="#F9A825" />
              <stop offset="100%" stopColor="#388E3C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
