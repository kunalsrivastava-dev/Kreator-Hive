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
    <main className="min-h-screen">
      <Hero />
      <LogoTicker />
      <Metrics />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Testimonial />
      <WhyUs />
      <CtaBanner />
    </main>
  );
}
