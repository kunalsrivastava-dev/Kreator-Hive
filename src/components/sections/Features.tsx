"use client";

import { motion } from "framer-motion";
import { Search, BarChart2, LayoutDashboard, Users, TrendingUp, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Smart Discovery",
      description: "Find the perfect match instantly with our AI-driven search across thousands of creator profiles."
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: "Creator Analytics",
      description: "Evaluate true engagement rates, audience demographics, and past campaign performance."
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-white" />,
      title: "Campaign Management",
      description: "Organize briefs, deliverables, and timelines in one unified dashboard."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Collaboration",
      description: "Communicate directly with creators, approve content, and handle revisions seamlessly."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Performance Tracking",
      description: "Monitor real-time ROI, clicks, conversions, and brand lift with custom reporting."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Data Security",
      description: "Enterprise-grade security ensuring your data and contracts remain strictly confidential."
    }
  ];

  return (
    <section className="py-24 bg-[#FAF7FF] relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold text-[#9B3DB8] uppercase tracking-[0.12em] mb-4">
            Platform Features
          </p>
          <h2 className="text-[42px] font-bold text-[#2B2E3B] tracking-tight">
            Everything you need, <br className="hidden md:block" />
            in one platform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const bundleNum = Math.floor(index / 2) + 1;
            const gradientClass = `bg-gradient-bundle-${bundleNum}`;
            const hoverBorderClass = bundleNum === 1 ? 'hover:border-t-[#039BE5]' : bundleNum === 2 ? 'hover:border-t-[#FF8F00]' : 'hover:border-t-[#2E7D32]';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-2xl border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] border-[#EAE0F5] shadow-feature transition-all duration-250 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(155,61,184,0.14)] hover:border-t-2 ${hoverBorderClass}`}
              >
                <div className={`w-12 h-12 rounded-[10px] flex items-center justify-center mb-6 shadow-sm ${gradientClass}`}>
                  {feature.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[#2B2E3B] mb-3">{feature.title}</h3>
                <p className="text-[#7C8196] text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
