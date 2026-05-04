"use client";

import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white p-10 md:p-16 rounded-3xl border border-border-light shadow-card text-center relative overflow-hidden">
          {/* Left border gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-cool"></div>
          
          <Quote className="absolute top-8 left-8 w-16 h-16 text-brand-purple opacity-10 rotate-180" />
          <Quote className="absolute bottom-8 right-8 w-16 h-16 text-brand-cyan opacity-10" />
          
          <p className="text-2xl md:text-4xl font-display font-medium text-text-primary leading-tight mb-10 relative z-10">
            "KreatorHive changed our entire approach to creator partnerships. The data precision allowed us to stop guessing and start scaling confidently."
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-cool p-1">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xl font-bold text-brand-purple">
                  S
                </div>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-text-primary text-lg">Sarah Jenkins</h4>
                <p className="text-text-secondary">VP of Marketing, TechGrowth</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-border-medium opacity-50"></div>

            <div className="bg-bg-secondary px-6 py-3 rounded-full border border-border-light shadow-sm flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-brand-green animate-pulse"></div>
              <span className="font-semibold text-text-primary">2.4x</span>
              <span className="text-text-muted text-sm">engagement rate improvement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
