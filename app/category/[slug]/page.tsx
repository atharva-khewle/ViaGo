import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import SiteCard from "@/components/SiteCard";
import { getSitesForCategory, getCategoryBySlug } from "@/lib/db";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  const sites = await getSitesForCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 pt-24 pb-12 sm:pt-32 w-full">
      <div className="mb-12 animate-fade-in">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-bold mb-8 group"
        >
          <MdArrowBack className="text-lg group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        <div className="flex flex-col gap-2">
          <div className="h-1 w-12 bg-primary rounded-full mb-2"></div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight capitalize mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-white/5 mb-12"></div>

      {sites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site) => (
            <SiteCard key={site.id} {...site} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white/5 rounded-3xl animate-fade-in border border-dashed border-white/10">
          <p className="text-slate-500">No sites found for this category yet.</p>
        </div>
      )}
    </main>
  );
}
