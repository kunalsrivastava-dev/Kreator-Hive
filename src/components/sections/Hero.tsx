"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  
  // Track scroll position within this component's boundaries
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Dramatic 3D transforms for premium scrolling effect
  const vidScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.65]);
  const vidOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const vidBorderRadius = useTransform(scrollYProgress, [0, 0.3], ["0rem", "2rem"]);
  const vidRotateX = useTransform(scrollYProgress, [0, 0.8], ["0deg", "15deg"]);
  const vidShadow = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    ["0px 0px 0px rgba(0,0,0,0)", "0px 40px 100px rgba(0,0,0,0.5)"]
  );
  
  // Content layer parallax
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleVid1Ended = () => {
    setActiveVideo(2);
    vid2Ref.current?.play();
    vid1Ref.current?.pause();
    if (vid1Ref.current) vid1Ref.current.currentTime = 0;
  };

  const handleVid2Ended = () => {
    setActiveVideo(1);
    vid1Ref.current?.play();
    vid2Ref.current?.pause();
    if (vid2Ref.current) vid2Ref.current.currentTime = 0;
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-[200vh] bg-bg-primary" // Taller height to allow extended dramatic scrolling
    >
      {/* Sticky container to hold the full-screen view while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0f] [perspective:2000px]">
        
        {/* Background Blob (Fallback / Underlying Color) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] bg-kh-full opacity-20 pointer-events-none z-0"></div>

        {/* --- SEQUENTIAL VIDEO WRAPPER --- */}
        <motion.div 
          style={{ 
            scale: vidScale, 
            opacity: vidOpacity,
            borderRadius: vidBorderRadius,
            rotateX: vidRotateX,
            boxShadow: vidShadow
          }}
          className="absolute inset-0 w-full h-full z-0 origin-center overflow-hidden"
        >
          {/* VIDEO 1 */}
          <motion.video
            ref={vid1Ref}
            src="/vid1.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVid1Ended}
            animate={{ opacity: activeVideo === 1 ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            poster="/fallback-vid1.jpg"
          />
          
          {/* VIDEO 2 */}
          <motion.video
            ref={vid2Ref}
            src="/vid2.mp4"
            muted
            playsInline
            onEnded={handleVid2Ended}
            animate={{ opacity: activeVideo === 2 ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            poster="/fallback-vid2.jpg"
          />

          {/* Dark gradient overlay for optimal text contrast and premium feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A24]/70 via-[#1A1A24]/40 to-[#1A1A24]/80 backdrop-blur-[2px]"></div>
        </motion.div>

        {/* --- CONTENT LAYER --- */}
        <motion.div 
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-md shadow-2xl relative overflow-hidden group"
          >
            <span className="w-2 h-2 rounded-full bg-kh-cyan animate-pulse relative z-10 shadow-[0_0_8px_rgba(41,182,246,0.8)]"></span>
            <span className="text-sm font-semibold text-white uppercase tracking-[0.15em] relative z-10">
              The Future of Influencer Marketing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-display font-bold text-white tracking-tight mb-8 leading-[1.05] drop-shadow-2xl"
          >
            Data-Driven Marketing, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kh-cyan via-white to-kh-cyan bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">Built for Scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide drop-shadow-md"
          >
            KreatorHive LLP builds intelligent platforms that help brands discover, evaluate, and collaborate with creators — <span className="font-medium text-white">faster, smarter, and with measurable ROI.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button className="w-full sm:w-auto btn-gradient-cool px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-[0_8px_32px_rgba(139,47,201,0.4)] group">
              Get a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg text-white border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              Explore Platform
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Cable Elements (Fixed to bottom of screen) */}
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="absolute left-0 right-0 bottom-0 h-32 overflow-hidden pointer-events-none z-20 opacity-10"
        >
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto" preserveAspectRatio="none">
            <path fill="none" stroke="url(#gradient-full)" strokeWidth="2" d="M0,160 C320,300 420,0 740,160 C1060,320 1120,60 1440,160"></path>
            <path fill="none" stroke="url(#gradient-full)" strokeWidth="1" opacity="0.5" d="M0,200 C300,100 400,300 700,200 C1000,100 1100,250 1440,200"></path>
            <defs>
              <linearGradient id="gradient-full" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B2FC9" />
                <stop offset="25%" stopColor="#29B6F6" />
                <stop offset="50%" stopColor="#F47C20" />
                <stop offset="75%" stopColor="#F5C518" />
                <stop offset="100%" stopColor="#3A8C3F" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
      </div>
    </section>
  );
}
