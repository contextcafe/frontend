import { OnboardingForm } from "@/components/bakers/onboarding-form";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Dynamic Background */}
      <div className="glow-orb-primary -top-40 -right-40 opacity-50" />
      <div className="glow-orb-secondary bottom-0 -left-20 opacity-60" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="w-full max-w-2xl relative z-10 flex flex-col items-center">
        {/* Logo or Brand Element */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 font-display tracking-tight">
            ContextCafe
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Intelligent Legal Operating System
          </p>
        </div>

        <OnboardingForm />
      </div>
    </div>
  );
}
