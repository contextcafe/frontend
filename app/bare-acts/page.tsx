import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Bare Acts Database — Ingestion & Search Index | ContextCafe",
  description:
    "Indian Central and State Bare Acts digital repository. Under active high-speed ingestion and cross-referencing.",
  alternates: {
    canonical: "/bare-acts",
  },
};

export default function BareActsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-600 selection:text-white relative overflow-hidden py-4 px-4 sm:px-6 flex flex-col justify-between">
      {/* Ambient Background Glows */}
      <div className="glow-orb-primary top-[-100px] left-[20%] opacity-40 pointer-events-none" />
      <div className="glow-orb-secondary top-[400px] right-[-100px] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Header Bar */}
      <header className="sticky top-4 z-50 max-w-6xl w-full mx-auto mb-6 sm:mb-10">
        <nav className="glass-panel rounded-xl px-5 sm:px-6 py-3 flex items-center justify-between shadow-xs border border-slate-200/80 bg-white/90 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="ContextCafe Logo"
              width={34}
              height={34}
              className="h-8.5 w-auto"
              priority
            />
            <div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                ContextCafe
              </span>
              <p className="text-[11px] text-slate-500 hidden sm:block font-medium leading-none">
                Legal Intelligence Operating System
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <Link href="/#features" className="hover:text-blue-600 transition-colors">Features</Link>
            <Link href="/advocates" className="hover:text-blue-600 transition-colors">Advocates</Link>
            <Link href="/bare-acts" className="text-blue-600 font-bold transition-colors">Bare Acts</Link>
            <Link href="/#tools" className="hover:text-blue-600 transition-colors">Tools</Link>
          </div>

          <div className="flex items-center gap-2.5">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-slate-600 hover:text-slate-900">
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Home</span>
              </Button>
            </Link>
            <Link href="/advocates">
              <Button variant="glow" size="sm" className="gap-1.5 text-xs font-bold">
                <span>Advocates</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content Card */}
      <main className="relative z-10 max-w-2xl w-full mx-auto my-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-xl border border-slate-200/80 shadow-xl bg-white relative overflow-hidden flex flex-col items-center text-center">
          {/* Subtle Ambient Orb inside card */}
          <div className="absolute -top-20 -right-20 w-52 h-52 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Theme-aligned Animated SVG Illustration */}
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-square mb-6 flex items-center justify-center">
            <Image
              src="/data security.svg"
              alt="Bare Acts Data Ingestion Animation"
              width={340}
              height={340}
              className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-sm transition-transform hover:scale-105 duration-300"
              priority
              unoptimized
            />
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2.5">
            Bare Acts Ingestion in Progress
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8 font-normal">
            We are actively parsing, cross-referencing, and indexing Central and State statutory provisions into our high-speed legal search index.
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Link href="/" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto gap-2 text-sm px-6 h-11 font-bold">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Homepage</span>
              </Button>
            </Link>
            <Link href="/advocates" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 text-sm px-6 h-11 font-semibold border-slate-200 text-slate-800 hover:bg-slate-50">
                <span>Explore Advocates Portal</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer minimal info */}
      <footer className="relative z-10 max-w-6xl w-full mx-auto mt-8 sm:mt-12 text-center text-xs text-slate-400 py-4">
        <p>© {new Date().getFullYear()} ContextCafe. All statutory rights reserved.</p>
      </footer>
    </div>
  );
}
