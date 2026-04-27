"use client";

import { useState } from "react";
import { MdLaunch, MdBrokenImage } from "react-icons/md";

interface SiteCardProps {
  id: string;
  name: string;
  url: string;
  description: string;
  region: string;
}

export default function SiteCard({ name, url, description, region }: SiteCardProps) {
  const [previewError, setPreviewError] = useState(false);

  // Simple regex to handle **bold** text in descriptions
  const formattedDescription = description.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-white font-black">{part.slice(2, -2)}</strong>;
    }
    return part;
  });

  // Domain extraction for logos and fallbacks
  let domain = "";
  try {
    domain = new URL(url).hostname;
  } catch (e) {
    domain = url;
  }
  
  const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  const previewUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600`;

  return (
    <div className="flex flex-col bg-[#18181b] border border-transparent rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 animate-fade-in group shadow-2xl">
      {/* Website Preview Section with Fallback */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 flex items-center justify-center">
        {!previewError ? (
          <img 
            src={previewUrl} 
            alt={`${name} preview`}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            loading="lazy"
            onError={() => setPreviewError(true)}
          />
        ) : (
          /* Fallback: Blurred Logo Background */
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-zinc-900/50">
            <img 
              src={logoUrl} 
              alt=""
              className="absolute w-32 h-32 opacity-10 blur-xl scale-150"
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <img src={logoUrl} alt={name} className="w-16 h-16 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">No Preview Available</span>
            </div>
          </div>
        )}
        {/* Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex flex-col grow -mt-4 relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-white p-2 shadow-lg group-hover:scale-110 transition-transform duration-500">
            <img src={logoUrl} alt={name} className="w-full h-full object-contain" />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-primary transition-colors leading-tight">
              {name}
            </h3>
            <span className="text-[10px] uppercase tracking-widest font-black text-primary/80 mt-1">
              {region}
            </span>
          </div>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed grow mb-6 line-clamp-3">
          {formattedDescription}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white text-sm font-black rounded-xl border border-white/10 hover:bg-primary hover:border-primary transition-all mt-auto group/btn"
        >
          Visit {name} <MdLaunch className="text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
