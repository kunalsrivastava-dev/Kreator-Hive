import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const usps = [
    { text: "Built as a product, not a service", color: "text-brand-purple", bg: "bg-gradient-cool" },
    { text: "Real-time data & automation", color: "text-brand-red", bg: "bg-gradient-warm" },
    { text: "Designed for marketing teams, not engineers", color: "text-brand-green", bg: "bg-gradient-earth" },
    { text: "India-first, globally scalable", color: "text-brand-cyan", bg: "bg-gradient-cool" }
  ];

  return (
    <section className="py-24 bg-white border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary tracking-tight mb-6">
              Why <span className="text-gradient-cool">KreatorHive?</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              We believe influencer marketing shouldn't be a guessing game. 
              Our product-first, data-driven philosophy ensures that every campaign you launch is backed by hard numbers, real-time analytics, and seamless automation. Stop paying for vanity metrics and start driving real business outcomes.
            </p>
          </div>

          <div className="flex-1 w-full bg-bg-secondary p-8 md:p-10 rounded-3xl border border-border-light shadow-sm">
            <ul className="space-y-6">
              {usps.map((usp, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 relative flex items-center justify-center w-8 h-8">
                    <CheckCircle2 className={`w-6 h-6 ${usp.color} relative z-10`} />
                    <div className={`absolute inset-0 ${usp.bg} opacity-20 rounded-full blur-sm`}></div>
                  </div>
                  <span className="text-xl font-medium text-text-primary pt-1">{usp.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
