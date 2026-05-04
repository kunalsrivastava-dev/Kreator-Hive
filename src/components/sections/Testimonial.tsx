"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24 bg-[#FAF7FF] relative overflow-hidden flex justify-center">
      <div className="max-w-[1200px] w-full px-6 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[20px] shadow-[0_8px_48px_rgba(155,61,184,0.11)] max-w-[720px] w-full p-10 md:p-14 relative text-center"
        >
          {/* Decorative Quote Mark */}
          <div className="absolute top-4 left-6 text-[120px] font-serif text-[#F1FFF5] leading-none select-none pointer-events-none">
            "
          </div>
          
          <div className="relative z-10">
            {/* Star Rating */}
            <div className="flex items-center justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-[#F9A825] text-[#F9A825]" />
              ))}
            </div>

            <p className="text-[20px] text-[#2B2E3B] italic leading-[1.8] mb-10 font-medium">
              "We're excited by the early results from KreatorHive's beta. The data-first approach is already helping us discover creators and scale our partnerships with much more confidence."
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-full bg-gray-200 outline outline-3 outline-[#2E7D32] outline-offset-2 overflow-hidden"
                >
                  <img 
                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=Sarah&backgroundColor=E8D5F5`} 
                    alt="Sarah Jenkins" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-[#2B2E3B] text-[16px]">Sarah Jenkins</h4>
                  <p className="text-[#7C8196] text-[14px]">Marketing Lead & Beta Tester</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-[#EAE0F5]"></div>

              <div className="bg-gradient-bundle-3 px-[14px] py-[6px] rounded-[20px] text-white text-[14px] font-bold shadow-sm">
                Higher Engagement
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
