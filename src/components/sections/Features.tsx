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
    <section className="py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary tracking-tight">
            Everything you need, <br className="hidden md:block" />
            <span className="text-gradient-cool">in one platform</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const gradientBgClass = index < 2 ? "bg-kh-cool" : index < 4 ? "bg-kh-warm" : "bg-kh-earth";
            const borderClass = index < 2 ? "card-border-cool" : index < 4 ? "card-border-warm" : "card-border-earth";
            const textColorClass = index < 2 ? "text-kh-purple" : index < 4 ? "text-kh-crimson" : "text-kh-forest";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl border border-border-light shadow-card relative group hover:-translate-y-2 hover:shadow-cool-md transition-all duration-300 overflow-hidden ${borderClass}`}
              >
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative`}>
                    <div className={`absolute inset-0 ${gradientBgClass} opacity-10 rounded-xl`}></div>
                    <div className={`${textColorClass} relative z-10 [&>svg]:text-current`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 tracking-wide">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
