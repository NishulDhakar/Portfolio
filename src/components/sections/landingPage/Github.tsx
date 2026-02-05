"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { githubConfig } from "@/config/Github";
import GithubIcon from "@/components/svgs/Github";
import { Button } from "@/components/ui/button";

import "react-calendar-heatmap/dist/styles.css";
import "@/styles/github-calendar.css"; // We will create this

const CalendarHeatmap = dynamic(() => import("react-calendar-heatmap"), {
  ssr: false,
});

type ContributionItem = {
  date: string;
  count: number;
};

// Start of 2025 (or variable based on requirements)
// User asked for "activities in 2025" in config, so let's filter for 2025?
// Or just last year as per previous functionality?
// The image showed "1431 activities in 2025".
// Let's stick to the previous "lastYear" logic initially but maybe adjust if needed.
// Actually, react-calendar-heatmap needs startDate and endDate.

function shiftDate(date: Date, numDays: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export default function Github() {
  const { theme } = useTheme();

  const [data, setData] = useState<ContributionItem[] | null>(null);
  const [error, setError] = useState(false);

  // Cache busting / consistency
  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`,
          { signal: controller.signal, cache: "force-cache" }
        );

        if (!res.ok) throw new Error();

        const json = await res.json();

        const mapped: ContributionItem[] = json.contributions
          .flat()
          .map((c: any) => ({
            date: c.date,
            count: c.contributionCount,
          }));
        // We don't filter by date here necessarily, let the calendar component handle range
        // But cleaning up is good.
        // .filter((x: ContributionItem) => lastYear(x.date));

        setData(mapped);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    })();

    return () => controller.abort();
  }, []);

  const total = useMemo(
    () =>
      data?.reduce((s, x) => {
        // Only count if within our displayed range. 
        // For simplicity, summing all fetched for now or we can refine logic later.
        const d = new Date(x.date);
        return d.getFullYear() === 2025 ? s + x.count : s;
      }, 0) ?? 0,
    [data]
  );

  // Calculate date range for 2025 (as requested in text) or last year
  // User text in config says "activities in 2025".
  const startDate = new Date("2025-01-01");
  const endDate = new Date("2025-12-31");

  const loading = !data && !error;

  return (
    <section className="mt-4 space-y-6">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl sm:text-2xl font-bold tracking-tight"
      >
        {githubConfig.title}
      </motion.h2>

      {/* Loading */}
      {loading && (
        <div className="py-16 text-center animate-pulse text-sm text-muted-foreground">
          Loading activity…
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="p-8 text-center border-2 border-dashed rounded-xl">
          <GithubIcon className="w-8 h-8 mx-auto mb-4" />
          <Button asChild variant="outline">
            <Link href={`https://github.com/${githubConfig.username}`}>
              Visit GitHub
            </Link>
          </Button>
        </div>
      )}

      {/* Calendar */}
      {data && (
        <div className="rounded-lg border p-4 bg-background/50">
          <div className="w-full">
            <CalendarHeatmap
              startDate={startDate}
              endDate={endDate}
              values={data}
              classForValue={(value) => {
                if (!value || value.count === 0) {
                  return "color-empty";
                }
                if (value.count < 3) return "color-scale-1";
                if (value.count < 6) return "color-scale-2";
                if (value.count < 10) return "color-scale-3";
                return "color-scale-4";
              }}
              tooltipDataAttrs={(value: any) => {
                if (!value || !value.date) {
                  return {} as any;
                }
                return {
                  "data-tooltip-id": "github-tooltip",
                  "data-tooltip-content": `${value.count} activities on ${value.date}`,
                } as any;
              }}
              showWeekdayLabels={true}
            />
            <Tooltip id="github-tooltip" className="z-50 text-xs" />
          </div>

          {/* Footer: Count + Legend */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-2 border-t border-border/50 mt-4">
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">
              {total.toLocaleString()} activities in 2025
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                {/* Legend Swatches - matched to CSS classes */}
                <div className="w-3 h-3 rounded-[2px] bg-[var(--color-github-0)]" />
                <div className="w-3 h-3 rounded-[2px] bg-[var(--color-github-1)]" />
                <div className="w-3 h-3 rounded-[2px] bg-[var(--color-github-2)]" />
                <div className="w-3 h-3 rounded-[2px] bg-[var(--color-github-3)]" />
                <div className="w-3 h-3 rounded-[2px] bg-[var(--color-github-4)]" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
