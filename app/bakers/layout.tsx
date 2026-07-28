import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, FileText, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Search Engine Exclusion & Internal Admin Only Metadata
export const metadata: Metadata = {
  title: "Bakers Portal (Internal Admin) | ContextCafe",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function BakersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 relative flex flex-col">
      {/* Internal Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="ContextCafe Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="font-bold text-slate-900 tracking-tight text-lg">
                ContextCafe <span className="text-indigo-600 font-normal text-sm font-mono">[Bakers Admin]</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link href="/bakers/acts-index" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                <FileText className="h-4 w-4" /> Acts Management
              </Link>
              <Link href="/bakers/Profile" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                <UserCheck className="h-4 w-4" /> Admin Profile
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="hidden sm:inline-flex text-xs gap-1">
              <Lock className="h-3 w-3 text-indigo-600" /> Company Internal Portal
            </Badge>
            <Link href="/bakers/login">
              <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                <span>Sign In</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Internal Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        ContextCafe Internal Bakers Management Engine v2.0.0 — Restricted Access
      </footer>
    </div>
  );
}
