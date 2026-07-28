import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Search Engine Protection — Hide Advocates portal from search engines
export const metadata: Metadata = {
  title: "Advocates Workspace | ContextCafe",
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

export default function AdvocatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-600 relative flex flex-col">
      {/* Navigation Header for Advocates */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="ContextCafe Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="font-bold text-slate-900 tracking-tight text-lg">
                ContextCafe <span className="text-blue-600 font-normal text-sm">Advocates</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <span className="text-slate-500 font-normal flex items-center gap-1.5 text-xs bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                <Shield className="h-3.5 w-3.5 text-blue-600" /> Private Legal Vault (In Development)
              </span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        ContextCafe Advocates Workspace v2.0.0 — Privately Encrypted & Unindexed
      </footer>
    </div>
  );
}
