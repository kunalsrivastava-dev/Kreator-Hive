export default function Metrics() {
  const metrics = [
    { label: "Influencer Discovery", value: "3x Faster", gradient: "text-gradient-cool" },
    { label: "Campaign ROI Accuracy", value: "85% Better", gradient: "text-gradient-warm" },
    { label: "Creator Profiles Indexed", value: "10K+", gradient: "text-gradient-earth" },
  ];

  return (
    <section className="py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-white rounded-2xl border border-border-light shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              <h3 className={`text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight ${metric.gradient} group-hover:scale-105 transition-transform duration-500`}>
                {metric.value}
              </h3>
              <p className="text-text-secondary font-medium text-lg">
                {metric.label}
              </p>
            </div>
          ))}
          
          {/* Subtle connectors for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[33%] w-[2%] h-[1px] bg-border-medium opacity-50 -translate-y-1/2 z-0"></div>
          <div className="hidden md:block absolute top-1/2 left-[66%] w-[2%] h-[1px] bg-border-medium opacity-50 -translate-y-1/2 z-0"></div>
        </div>
      </div>
    </section>
  );
}
