import Link from "next/link";
import { MdArrowBack, MdSearch } from "react-icons/md";
import SiteCard from "@/components/SiteCard";
import { searchSites } from "@/lib/db";

interface SearchPageProps {
  searchParams: Promise<{ q: string }>;
}

export default async function SearchResultsPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const results = await searchSites(q || "");

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 py-24 w-full">
      <div className="mb-12 animate-fade-in">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-bold mb-8 group"
        >
          <MdArrowBack className="text-lg group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-primary mb-2">
            <MdSearch className="text-2xl" />
            <span className="text-sm font-bold uppercase tracking-widest">Search Results</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Results for "{q}"
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mt-2">
            Found {results.length} resources matching your query.
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-white/5 mb-12"></div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((site) => (
            <SiteCard key={site.id} {...site} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white/5 rounded-3xl animate-fade-in border border-dashed border-white/10">
          <p className="text-slate-400 mb-4 text-lg">No results found for that search.</p>
          <Link href="/" className="text-primary hover:underline font-bold">
            Browse Categories Instead
          </Link>
        </div>
      )}
    </main>
  );
}
