"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhyUs() {
  const usps = [
    "Built as a product, not a service",
    "Real-time data & automation",
    "Designed for marketing teams, not engineers",
    "India-first, globally scalable"
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 -right-[20%] -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] bg-[rgba(155,61,184,0.04)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <p className="text-[12px] font-semibold text-[#9B3DB8] uppercase tracking-[0.12em] mb-4">
              Why KreatorHive
            </p>
            <h2 className="text-[42px] font-bold text-[#2B2E3B] tracking-tight mb-6 leading-tight">
              A Platform Built for <br />
              Performance.
            </h2>
            <p className="text-[18px] text-[#7C8196] leading-relaxed max-w-xl">
              We believe influencer marketing shouldn't be a guessing game. Our product-first, data-driven philosophy ensures that every campaign you launch is backed by hard numbers and real-time analytics.
            </p>
          </div>

          <div className="flex-1 w-full bg-white p-8 md:p-12 rounded-[24px] border border-[#EAE0F5] shadow-[0_4px_24px_rgba(155,61,184,0.06)]">
            <ul className="space-y-6">
              {usps.map((usp, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-5"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center shadow-sm">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[18px] font-medium text-[#2B2E3B]">{usp}</span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
