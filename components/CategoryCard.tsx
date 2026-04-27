import Link from "next/link";
import * as Icons from "react-icons/md";

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
  slug: string;
  description: string;
  color?: string; 
}

const colorMap: { [key: string]: string } = {
  red: "group-hover:bg-red-500/10 border-red-400/20 shadow-red-500/5",
  blue: "group-hover:bg-blue-500/10 border-blue-400/20 shadow-blue-500/5",
  purple: "group-hover:bg-purple-500/10 border-purple-400/20 shadow-purple-500/5",
  green: "group-hover:bg-green-500/10 border-green-400/20 shadow-green-500/5",
  pink: "group-hover:bg-pink-500/10 border-pink-400/20 shadow-pink-500/5",
  amber: "group-hover:bg-amber-500/10 border-amber-400/20 shadow-amber-500/5",
  cyan: "group-hover:bg-cyan-500/10 border-cyan-400/20 shadow-cyan-500/5",
  indigo: "group-hover:bg-indigo-500/10 border-indigo-400/20 shadow-indigo-500/5",
  orange: "group-hover:bg-orange-500/10 border-orange-400/20 shadow-orange-500/5",
  teal: "group-hover:bg-teal-500/10 border-teal-400/20 shadow-teal-500/5",
  yellow: "group-hover:bg-yellow-500/10 border-yellow-400/20 shadow-yellow-500/5",
};

const barMap: { [key: string]: string } = {
  red: "bg-red-400/50", blue: "bg-blue-400/50", purple: "bg-purple-400/50", green: "bg-green-400/50",
  pink: "bg-pink-400/50", amber: "bg-amber-400/50", cyan: "bg-cyan-400/50", indigo: "bg-indigo-400/50",
  orange: "bg-orange-400/50", teal: "bg-teal-400/50", yellow: "bg-yellow-400/50",
};

const glowMap: { [key: string]: string } = {
  red: "bg-red-500", blue: "bg-blue-500", purple: "bg-purple-500", green: "bg-green-500",
  pink: "bg-pink-500", amber: "bg-amber-500", cyan: "bg-cyan-500", indigo: "bg-indigo-500",
  orange: "bg-orange-500", teal: "bg-teal-500", yellow: "bg-yellow-500",
};

export default function CategoryCard({ name, icon, slug, description, color }: CategoryCardProps) {
  // @ts-ignore
  const IconComponent = Icons[icon] || Icons.MdCategory;
  const colorName = color?.split('-')[1] || 'slate';

  return (
    <Link
      href={`/category/${slug}`}
      className={`group flex flex-col p-6 bg-[#18181b] border border-transparent rounded-xl transition-all duration-500 animate-fade-in hover:bg-[#1d1d20] relative overflow-hidden active:scale-[0.98]`}
    >
      <div className={`absolute -right-4 -top-4 w-24 h-24 blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${glowMap[colorName] || 'bg-white'}`}></div>
      
      <div className={`relative z-10`}>
        <div className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-500 mb-5 bg-white/5 ${colorMap[colorName] || ''}`}>
          <IconComponent className={`text-xl transition-all duration-500 ${color || 'text-zinc-300'} group-hover:scale-110`} />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight transition-colors">
          {name}
        </h3>
        
        <p className="text-sm text-zinc-300 leading-relaxed line-clamp-2 group-hover:text-white transition-colors">
          {description}
        </p>
      </div>

      <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${barMap[colorName] || 'bg-white/20'}`}></div>
    </Link>
  );
}
