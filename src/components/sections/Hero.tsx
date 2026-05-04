"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FFFFFF] overflow-hidden pt-[120px] pb-16 lg:pb-32 flex flex-col justify-center">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[100px] bg-[rgba(155,61,184,0.07)]" />
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] bg-[rgba(79,195,247,0.06)]" />
        
        {/* Subtle dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#9B3DB8 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-[#FFF5F5] border border-[rgba(229,57,53,0.2)]"
        >
          <span className="text-sm font-semibold text-gradient-bundle-2 tracking-wide">
            🚀 Now in Beta — Join Early Access
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[48px] md:text-[64px] lg:text-[76px] font-extrabold text-[#2B2E3B] tracking-[-0.03em] leading-[1.1] mb-6 max-w-4xl"
        >
          <span className="text-gradient-hub">
            Data-Driven
          </span>{" "}
          Influencer Marketing, Built for Scale.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[18px] md:text-[20px] text-[#7C8196] font-normal leading-relaxed max-w-[560px] mb-10"
        >
          Discover, evaluate, and collaborate with top creators effortlessly. Maximize your ROI with actionable analytics and end-to-end campaign management.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
        >
          <button className="btn-primary w-full sm:w-auto text-[16px] px-8 py-3.5 group">
            Get a Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary w-full sm:w-auto text-[16px] px-8 py-3.5">
            Explore Platform
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
              >
                <img 
                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=E8D5F5`} 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
          <p className="text-[#7C8196] text-sm font-medium">Trusted by innovative teams</p>
        </motion.div>
      </div>

      {/* Floating Stat Cards */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard number="Fast" label="Creator Discovery" delay={0.5} gradientClass="text-gradient-bundle-1" />
          <StatCard number="3x" label="Faster Workflows" delay={0.6} gradientClass="text-gradient-bundle-2" />
          <StatCard number="85%" label="Better ROI Tracking" delay={0.7} gradientClass="text-gradient-bundle-3" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label, delay, gradientClass }: { number: string; label: string; delay: number; gradientClass: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="bg-white border border-[#EAE0F5] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_4px_24px_rgba(155,61,184,0.08)] card-hover"
    >
      <div className={`text-[48px] md:text-[52px] font-extrabold leading-none mb-2 ${gradientClass}`}>
        {number}
      </div>
      <p className="text-[#7C8196] font-medium text-[16px]">{label}</p>
    </motion.div>
  );
}
