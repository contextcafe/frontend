import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ActIndexClient } from "@/components/bakers/act-index-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bakers Dashboard | ContextCafe",
  description: "Manage and verify bare acts",
};

export default async function BakersDashboardPage() {
  const supabase = await createClient();
  
  // Protect route
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/bakers/login");
  }

  // Fetch baker profile to ensure they are a baker (and maybe pass bakerId)
  const { data: profile } = await supabase
    .from("BakerProfile")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile) {
    // If they logged in but have no profile, they should do onboarding
    redirect("/bakers/onboarding");
  }

  return (
    <main className="min-h-screen bg-slate-50 relative pb-24">
      {/* Background aesthetics */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-indigo-100/50 to-transparent pointer-events-none" />
      <div className="glow-orb-primary -top-20 -left-20 opacity-30 pointer-events-none fixed" />
      
      <div className="max-w-4xl mx-auto px-4 pt-12 sm:pt-20 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-800 tracking-tight">
            Act Index
          </h1>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Browse, search, and manage the bare acts database.
          </p>
        </div>

        {/* Client-side interactivity: search, infinite scroll list, filtering */}
        <ActIndexClient bakerId={user.id} />
      </div>
    </main>
  );
}
