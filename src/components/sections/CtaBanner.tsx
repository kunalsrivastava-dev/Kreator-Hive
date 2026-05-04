import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with pastel gradient */}
      <div className="absolute inset-0 bg-gradient-pastel z-0"></div>
      
      {/* Decorative meshes */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#2D3142_1px,_transparent_1px)] [background-size:20px_20px] z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary tracking-tight mb-6">
          Ready to transform your influencer strategy?
        </h2>
        <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
          Book a personalized demo with our team today and see how data-driven decisions can scale your ROI.
        </p>
        
        <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 mx-auto shadow-card hover:shadow-brand-md hover:bg-brand-purple hover:-translate-y-1 transition-all duration-300 group">
          Book a Demo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
