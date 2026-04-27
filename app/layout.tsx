import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { MdPublic } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import SearchBar from "@/components/SearchBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TravelStack - The Largest Collection of Travel Resources",
  description: "A comprehensive directory for flights, hotels, transport, and travel tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[#09090b] text-zinc-200 min-h-screen flex flex-col`} suppressHydrationWarning>
        {/* Header - Immersive, no background */}
        <header className="absolute top-0 left-0 right-0 z-50" suppressHydrationWarning>
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
            {/* Left: Logo */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transform group-hover:rotate-12 transition-transform" suppressHydrationWarning>
                  <MdPublic className="text-white text-xl" />
                </div>
                <span className="font-bold text-lg sm:text-xl tracking-tight text-white">TravelStack</span>
              </Link>

              {/* Functional Search Bar */}
              <div className="flex">
                <SearchBar />
              </div>
            </div>

            {/* Right: Quick Links */}
            <nav className="flex items-center gap-4">
              <Link 
                href="https://github.com" 
                target="_blank"
                className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-400 hover:text-white"
                title="GitHub"
              >
                <SiGithub className="text-lg" />
              </Link>
              <Link 
                href="/"
                className="hidden sm:block text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors"
                title="Home"
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
