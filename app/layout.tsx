import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import SearchBar from "@/components/SearchBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ViaGo - Go beyond just booking",
  description: "Compare every option, then book it. Curated by travellers, for travellers. Free Forever.",
};

// Unique & Clever Logo Component: "The Flight V"
const ViaGoLogo = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[8] stroke-round" suppressHydrationWarning>
      <path 
        d="M20 30L50 80L80 20L50 50L20 30Z" 
        fill="currentColor" 
        className="text-primary opacity-20" 
      />
      <path d="M20 30L50 80L80 20" />
      <path d="M50 80L50 50" className="stroke-[6]" />
    </svg>
    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse -z-10"></div>
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[#09090b] text-zinc-100 min-h-screen flex flex-col`} suppressHydrationWarning>
        {/* Header - Transparent & Immersive */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent" suppressHydrationWarning>
          <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 group shrink-0">
                <div className="transform group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-300">
                  <ViaGoLogo />
                </div>
                <span className="font-black text-xl sm:text-2xl tracking-tighter text-white">Via<span className="text-primary italic">Go</span></span>
              </Link>

              {/* Functional Search Bar */}
              <div className="hidden md:flex ml-2">
                <SearchBar />
              </div>
            </div>

            {/* Right: Quick Links */}
            <nav className="flex items-center gap-4 sm:gap-6">
              <Link 
                href="https://github.com/atharva-khewle/ViaGo" 
                target="_blank"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-zinc-300 hover:text-white"
                title="GitHub Repository"
              >
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                  <SiGithub className="text-lg" />
                </div>
              </Link>
              <Link 
                href="/"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 hover:text-primary transition-colors"
              >
                Home
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
