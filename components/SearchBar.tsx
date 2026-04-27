"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg group focus-within:border-primary/50 transition-colors w-40 sm:w-64"
    >
      <MdSearch className="text-slate-400 group-hover:text-primary transition-colors" />
      <input
        type="text"
        placeholder="Search travel sites..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent border-none outline-none text-xs text-slate-200 placeholder:text-slate-500 w-full"
      />
      <button type="submit" className="hidden">Search</button>
    </form>
  );
}
