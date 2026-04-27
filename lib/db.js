import { sites } from "@/data/sites";

export async function getSitesForCategory(slug) {
  const filteredSites = sites.filter(site => site.category === slug);
  return filteredSites;
}

export function getCategoryBySlug(slug) {
  const { categories } = require("@/data/sites");
  return categories.find(cat => cat.slug === slug);
}

export async function searchSites(query) {
  const q = query.toLowerCase();
  return sites.filter(site => 
    site.name.toLowerCase().includes(q) || 
    site.description.toLowerCase().includes(q) || 
    site.region.toLowerCase().includes(q) || 
    site.category.toLowerCase().includes(q)
  );
}
