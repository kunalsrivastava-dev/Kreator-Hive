export default function LogoTicker() {
  const logos = [
    "Vogue", "ESPN", "Wired", "Forbes", "TechCrunch", "Bloomberg", "GQ", "FastCompany"
  ];

  return (
    <section className="py-10 border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest">
          Trusted by forward-thinking brands
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scrolling-ticker flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-none mx-8 text-2xl font-display font-bold text-gray-300 transition-colors duration-300 hover:text-brand-purple"
            >
              {logo}
            </div>
          ))}
        </div>
        
        {/* Gradient fades for smooth edges */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
