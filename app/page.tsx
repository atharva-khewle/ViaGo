import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/sites";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      {/* Hero Section - Balanced Violet/Zinc Theme */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 overflow-hidden glow-mesh">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 relative z-10">
          
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-semibold text-zinc-400 mb-6 sm:mb-8 mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              The Global Travel Resource
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4 sm:mb-6 leading-tight">
              travel<span className="text-primary">stack</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-8 sm:mb-10 mx-auto lg:mx-0">
              A curated collection of the world's best booking tools, apps, and platforms.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a href="#browse" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] text-base">
                Browse Directory
              </a>
            </div>
          </div>

          {/* Hero Graphic - Simple Violet Shape */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in delay-200 order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary/10 blur-[80px] sm:blur-[120px] rounded-full"></div>
              
              <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                <div className="w-0 h-0 border-t-[50px] border-l-[80px] border-b-[50px] border-t-transparent border-l-white border-b-transparent transform sm:border-t-[80px] sm:border-l-[140px] sm:border-b-[80px] lg:border-t-[120px] lg:border-l-[200px] lg:border-b-[120px]"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="browse" className="max-w-7xl mx-auto px-4 py-8 sm:py-12 scroll-mt-20">
        <div className="text-center mb-10 animate-fade-in">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 font-black text-[10px] uppercase tracking-[0.2em] mb-4">
             Explore the Directory
          </p>
          <div className="h-px w-12 bg-white/5 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-4 py-8 border-t border-white/5 text-center text-zinc-600 text-xs sm:text-sm">
        <p>&copy; {new Date().getFullYear()} TravelStack.</p>
      </footer>
    </main>
  );
}
