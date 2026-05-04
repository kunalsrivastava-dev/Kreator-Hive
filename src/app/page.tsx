import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import Metrics from "@/components/sections/Metrics";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonial from "@/components/sections/Testimonial";
import WhyUs from "@/components/sections/WhyUs";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Universal Noise Texture Overlay for premium cinematic feel */}
      <div 
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-multiply" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      ></div>

      <Hero />
      
      {/* Transition Zone: Bridging the Dark Hero (#0a0a0f) and Light Content */}
      <div className="relative w-full">
        {/* Dark-to-Light Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/60 to-white pointer-events-none -z-20"></div>
        
        {/* Vibrant Ambient Glow (Purple & Cyan from Logo) bridging the gap */}
        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-gradient-to-r from-[#8B2FC9]/20 via-transparent to-[#29B6F6]/20 blur-[100px] rounded-[100%] pointer-events-none -z-10"></div>
        
        <div className="pt-20 relative z-10">
          <LogoTicker />
        </div>
        <div className="relative z-10">
          <Metrics />
        </div>
      </div>

      <div className="relative z-10 bg-white">
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Testimonial />
        <WhyUs />
        <CtaBanner />
      </div>
    </main>
  );
}
