"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Users, MessageSquare, TrendingUp, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Smart Discovery",
      description: "Find the perfect match instantly with our AI-driven search across 10M+ creator profiles."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Creator Analytics & Scoring",
      description: "Evaluate true engagement rates, audience demographics, and past campaign performance."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Campaign Management",
      description: "Organize briefs, deliverables, and timelines in one unified dashboard."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Collaboration Tools",
      description: "Communicate directly with creators, approve content, and handle revisions seamlessly."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Performance Tracking",
      description: "Monitor real-time ROI, clicks, conversions, and brand lift with custom reporting."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Data Security & Compliance",
      description: "Enterprise-grade security ensuring your data and contracts remain strictly confidential."
    }
  ];

  return (
    <section className="py-24 bg-[#0D0D1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Everything you need, <br className="hidden md:block" />
            <span className="text-gradient-full">in one platform</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#16213E] p-8 rounded-2xl border border-white/5 relative group hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-brand-purple/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
