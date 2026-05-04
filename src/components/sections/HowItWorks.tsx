"use client";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Define your campaign goals and audience",
      desc: "Input your target demographics, budget, and KPIs. Our platform aligns your objectives with the right data points."
    },
    {
      num: "02",
      title: "Let our AI surface the right creators instantly",
      desc: "Our engine scans millions of profiles to recommend creators who have proven engagement with your target audience."
    },
    {
      num: "03",
      title: "Launch, track, and optimize — all in one place",
      desc: "Manage contracts, approve content, and track real-time ROI without ever leaving the dashboard."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 tracking-tight">
            Up and running in <span className="text-gradient-primary">3 steps</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-primary md:-translate-x-1/2 rounded-full opacity-20"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 w-full pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.desc}</p>
                </div>

                {/* Number Circle */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center z-10 group">
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <span className="text-xl font-bold text-gradient-primary">{step.num}</span>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
