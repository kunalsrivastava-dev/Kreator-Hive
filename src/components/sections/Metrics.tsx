export default function Metrics() {
  const metrics = [
    { label: "Influencer Discovery", value: "3x Faster" },
    { label: "Campaign ROI Accuracy", value: "85% Better" },
    { label: "Creator Profiles Indexed", value: "10K+" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col items-center justify-center text-center group"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-gradient-primary group-hover:scale-105 transition-transform duration-500">
                {metric.value}
              </h3>
              <p className="text-gray-600 font-medium text-lg">
                {metric.label}
              </p>
            </div>
          ))}
          
          {/* Subtle connectors for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[33%] w-[2%] h-[1px] bg-gray-200 -translate-y-1/2 z-0"></div>
          <div className="hidden md:block absolute top-1/2 left-[66%] w-[2%] h-[1px] bg-gray-200 -translate-y-1/2 z-0"></div>
        </div>
      </div>
    </section>
  );
}
