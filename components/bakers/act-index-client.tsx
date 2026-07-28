"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ActCard } from "./act-card";
import { MissingActFab } from "./missing-act-fab";

import { useInView } from "react-intersection-observer";

type Act = {
  id: number;
  title: string;
  shortTitle: string | null;
  slug: string;
  isVerified: boolean;
};

const PAGE_SIZE = 20;

export function ActIndexClient({ bakerId }: { bakerId: string }) {
  const [acts, setActs] = useState<Act[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const supabase = createClient();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "400px",
  });

  const fetchActs = useCallback(async (isInitial = false, query = searchQuery, currentPage = page) => {
    try {
      // Always set loading state to prevent concurrent identical requests
      setIsLoading(true);
      
      const from = isInitial ? 0 : currentPage * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      let q = supabase
        .from("Act")
        .select("id, title, shortTitle, slug, isVerified", { count: "exact" });

      if (query) {
        // Use normalizedSearchText if available, otherwise title
        q = q.ilike("title", `%${query}%`);
      }

      const { data, error, count } = await q
        .order("title", { ascending: true })
        .range(from, to);

      if (error) throw error;

      if (data) {
        setActs(prev => {
          if (isInitial) return data;
          
          // Prevent duplicates in case of race conditions
          const existingIds = new Set(prev.map(item => item.id));
          const newActs = data.filter(item => !existingIds.has(item.id));
          
          return [...prev, ...newActs];
        });
        setHasMore(count !== null && from + data.length < count);
        if (!isInitial) setPage(currentPage + 1);
        else setPage(1);
      }
    } catch (err) {
      console.error("Error fetching acts:", err);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, page, supabase]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchActs(true, searchQuery, 0);
    }, 400); // 400ms debounce
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Infinite scroll trigger
  useEffect(() => {
    if (inView && hasMore && !isLoading && page > 0) {
      fetchActs(false);
    }
  }, [inView, hasMore, isLoading, page, fetchActs]);

  const handleActUpdate = (updatedAct: Act) => {
    setActs(prev => prev.map(a => a.id === updatedAct.id ? updatedAct : a));
  };

  return (
    <div className="relative">
      {/* Search Bar */}
      <div className="sticky top-0 z-20 bg-slate-50/80 backdrop-blur-xl py-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search acts by title, short title, or slug..."
            className="w-full h-14 pl-12 pr-4 rounded-2xl border-slate-200 bg-white/60 shadow-sm focus-visible:ring-indigo-500 text-base"
          />
        </div>
      </div>

      {/* Act List */}
      <div className="space-y-4">
        {acts.map((act) => (
          <ActCard key={act.id} act={act} onUpdate={handleActUpdate} />
        ))}

        {/* Loading Indicator / Intersection Observer Target */}
        <div ref={ref} className="py-8 flex justify-center">
          {isLoading || (inView && hasMore) ? (
            <Loader2 className="w-8 h-8 animate-spin text-indigo-400" />
          ) : !hasMore && acts.length > 0 ? (
            <p className="text-slate-400 text-sm">You've reached the end of the list.</p>
          ) : acts.length === 0 && !isLoading ? (
            <div className="text-center py-12">
              <p className="text-slate-500 mb-2">No acts found matching "{searchQuery}"</p>
              <p className="text-sm text-slate-400">Try adjusting your search or add a missing act.</p>
            </div>
          ) : null}
        </div>
      </div>

      <MissingActFab bakerId={bakerId} />
    </div>
  );
}
