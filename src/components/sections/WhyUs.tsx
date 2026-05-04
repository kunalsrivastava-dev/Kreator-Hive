import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const usps = [
    "Built as a product, not a service",
    "Real-time data & automation",
    "Designed for marketing teams, not engineers",
    "India-first, globally scalable"
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 tracking-tight mb-6">
              Why <span className="text-gradient-primary">KreatorHive?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              We believe influencer marketing shouldn't be a guessing game. 
              Our product-first, data-driven philosophy ensures that every campaign you launch is backed by hard numbers, real-time analytics, and seamless automation. Stop paying for vanity metrics and start driving real business outcomes.
            </p>
          </div>

          <div className="flex-1 w-full bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <ul className="space-y-6">
              {usps.map((usp, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 relative">
                    <CheckCircle2 className="w-6 h-6 text-brand-cyan relative z-10" />
                    <div className="absolute inset-0 bg-brand-cyan/20 blur-md rounded-full"></div>
                  </div>
                  <span className="text-xl font-medium text-neutral-800">{usp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
