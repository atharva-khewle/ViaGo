import { MdLaunch } from "react-icons/md";

interface SiteCardProps {
  id: string;
  name: string;
  url: string;
  description: string;
  region: string;
}

export default function SiteCard({ name, url, description, region }: SiteCardProps) {
  // Simple regex to handle **bold** text in descriptions
  const formattedDescription = description.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });

  return (
    <div className="flex flex-col p-5 sm:p-6 bg-[#18181b] border border-transparent rounded-xl hover:border-primary/30 transition-all duration-300 animate-fade-in group">
      <div className="flex justify-between items-start mb-3 sm:mb-4 gap-4">
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
          {name}
        </h3>
        <span className="shrink-0 px-2 py-0.5 bg-white/5 text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-slate-500 rounded-md border border-white/5">
          {region}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed grow mb-5 sm:mb-6">
        {formattedDescription}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 text-white text-xs sm:text-sm font-bold rounded-lg border border-white/10 hover:bg-primary hover:border-primary transition-all mt-auto"
      >
        Visit Site <MdLaunch className="text-base sm:text-lg" />
      </a>
    </div>
  );
}
