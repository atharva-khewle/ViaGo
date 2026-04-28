import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/sites";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden glow-mesh">
      {/* Hero Section */}
      <section className="relative pt-24 pb-4 sm:pt-32 sm:pb-8 px-4 overflow-visible">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative z-10">

          {/* Hero Text Block */}
          <div className="flex-1 text-center lg:text-left animate-fade-in order-2 lg:order-1">
            {/* Badge - Lighter text */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm sm:text-base lg:text-lg font-semibold text-zinc-300 mb-6 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Curated by travellers, for travellers
            </div>

            {/* Title */}
            <h1 className="text-7xl sm:text-8xl lg:text-[9.5rem] font-black text-white tracking-tighter mb-6 leading-[0.8] lg:-ml-2">
              Via<span className="text-primary italic">Go</span>
            </h1>

            {/* Slogan Group - Lighter subtitle */}
            <div className="space-y-6 mx-auto lg:mx-0">
              <p className="text-2xl sm:text-5xl text-zinc-50 font-extrabold tracking-tight leading-tight">
                Compare every site, <br />Book the best deal
              </p>
              <div className="space-y-2">
                <p className="text-lg sm:text-2xl text-zinc-300 max-w-xl leading-snug mx-auto lg:mx-0 font-medium">
                  Your trip starts where the booking stops

                </p>
                {/* <div className="pt-4.5">
                  <p className="inline-block text-white font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs border-l-2 border-primary pl-4 py-1">
                    Free Forever
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero Graphic */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in delay-200 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-[28rem] lg:h-[28rem]">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] lg:blur-[160px] rounded-full"></div>
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-violet-500/10 blur-[80px] lg:blur-[120px] rounded-full"></div>

              <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_0_60px_rgba(139,92,246,0.6)]">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-white/90 stroke-[0.4] fill-white/[0.12]">
                  <path d="M20 40 L50 90 L80 30 L50 60 Z" />
                  <line x1="50" y1="90" x2="50" y2="60" className="stroke-white stroke-[1.2]" />
                  <path d="M20 40 L50 60 L80 30" className="stroke-white/60" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section - Lighter subtext */}
      <section id="browse" className="max-w-7xl mx-auto px-4 py-8 sm:py-12 scroll-mt-20 bg-transparent relative z-20">
        <div className="flex flex-col items-center mb-10 animate-fade-in">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-6"></div>
          <p className="text-zinc-300 text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] mb-2">
            Explore Collections
          </p>
          <div className="h-1 w-1 bg-primary rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-transparent">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-4 py-16 border-t border-white/5 text-center text-zinc-400 text-xs sm:text-sm bg-transparent">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
          <p className="font-bold tracking-[0.3em] uppercase text-[10px] text-zinc-300">ViaGo Directory</p>
          <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
        </div>
        <p className="max-w-md mx-auto leading-relaxed text-zinc-300 mb-4">
          &copy; {new Date().getFullYear()} ViaGo. All travel resources are independently curated.
        </p>
        <a
          href="mailto:OrionViewWebsite@gmail.com"
          className="inline-block text-zinc-400 hover:text-primary transition-colors text-xs font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-primary/30"
        >
          Support: OrionViewWebsite@gmail.com
        </a>
      </footer>
    </main>
  );
}
