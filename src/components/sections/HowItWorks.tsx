"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Define your campaign goals and audience",
      desc: "Input your target demographics, budget, and KPIs. Our platform aligns your objectives with the right data points.",
      gradientClass: "bg-gradient-bundle-1",
      borderColor: "border-[#039BE5]",
      textColor: "text-[#9B3DB8]"
    },
    {
      num: "2",
      title: "Let our AI surface the right creators instantly",
      desc: "Our engine scans millions of profiles to recommend creators who have proven engagement with your target audience.",
      gradientClass: "bg-gradient-bundle-2",
      borderColor: "border-[#FF8F00]",
      textColor: "text-[#E53935]"
    },
    {
      num: "3",
      title: "Launch, track, and optimize — all in one place",
      desc: "Manage contracts, approve content, and track real-time ROI without ever leaving the dashboard.",
      gradientClass: "bg-gradient-bundle-3",
      borderColor: "border-[#2E7D32]",
      textColor: "text-[#2E7D32]"
    }
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <p className="text-[12px] font-semibold text-gradient-bundle-1 uppercase tracking-[0.12em] mb-4">
            How It Works
          </p>
          <h2 className="text-[42px] font-bold text-[#2B2E3B] tracking-tight">
            Up and running in 3 steps
          </h2>
        </div>

        <div className="relative pl-4 md:pl-12">
          {/* Connecting Vertical Line */}
          <div className="absolute left-[34px] md:left-[66px] top-6 bottom-6 w-[2px] border-l-[2px] border-dashed border-[#EAE0F5] z-0"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex items-start gap-8 md:gap-12"
              >
                {/* Step Number Badge */}
                <div className={`relative z-10 w-10 h-10 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center border-4 border-white shadow-sm mt-1 ${step.gradientClass}`}>
                  <span className="text-white font-bold text-[16px]">{step.num}</span>
                </div>

                {/* Step Card */}
                <div className="relative flex-1 group">
                  {/* Decorative Background Number */}
                  <div className={`absolute -top-12 -left-6 text-[100px] font-extrabold opacity-5 select-none pointer-events-none transition-all duration-300 group-hover:opacity-10 group-hover:-translate-y-2 ${step.textColor}`}>
                    0{step.num}
                  </div>
                  
                  <div className={`relative bg-white rounded-xl p-6 md:p-8 border-l-4 shadow-[0_2px_16px_rgba(155,61,184,0.07)] ${step.borderColor}`}>
                    <h3 className="text-[22px] font-bold text-[#2B2E3B] mb-3">{step.title}</h3>
                    <p className="text-[#7C8196] text-[16px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
