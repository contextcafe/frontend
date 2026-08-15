import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HardHat, Sparkles } from "lucide-react";

export default function AdvocatesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] py-8 px-4 text-center">
      <div className="max-w-2xl w-full mx-auto glass-panel p-8 sm:p-12 rounded-xl border border-slate-200/80 shadow-xl relative overflow-hidden flex flex-col items-center">
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
          <HardHat className="h-4 w-4 text-blue-600 animate-bounce" />
          <span>Under Active Development</span>
        </div>

        {/* Animated SVG Illustration */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-square mb-6 flex items-center justify-center">
          <Image
            src="/Work-on-progress.svg"
            alt="Work in Progress"
            width={450}
            height={450}
            className="w-full h-auto max-h-[320px] sm:max-h-[380px] object-contain drop-shadow-md"
            priority
            unoptimized
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          We are working on it!
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-8 font-normal">
          The Advocates Workspace is currently under construction. We are building an intelligent, encrypted legal vault and AI suite tailored specifically for advocates and legal practice.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="glow" size="lg" className="w-full sm:w-auto gap-2 text-sm px-6 h-12">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Homepage</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
