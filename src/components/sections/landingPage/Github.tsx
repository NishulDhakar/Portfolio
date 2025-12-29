"use client";

import { githubConfig } from "@/config/Github";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

import GithubIcon from "@/components/svgs/Github";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  { ssr: false }
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

// Convert GitHub API "contributionLevel" → 0–4
function convertLevel(level: string): 0 | 1 | 2 | 3 | 4 {
  switch (level) {
    case "FIRST_QUARTILE":
      return 1;
    case "SECOND_QUARTILE":
      return 2;
    case "THIRD_QUARTILE":
      return 3;
    case "FOURTH_QUARTILE":
      return 4;
    default:
      return 0; // NONE
  }
}

// Filter contributions from last 365 days
function filterLastYear(contributions: ContributionItem[]) {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  return contributions.filter((item) => new Date(item.date) >= oneYearAgo);
}

import Container from "@/components/common/Container";

export default function Github() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`
        );

        if (!response.ok) {
          setHasError(true);
          setIsLoading(false);
          return;
        }

        const data = await response.json();

        if (!data?.contributions) {
          setHasError(true);
          setIsLoading(false);
          return;
        }

        // The API returns array of weeks (2D array): contributions[weeks][days]
        const raw = data.contributions.flat();

        // Map API fields → Calendar component format
        const mapped = raw.map((item: { date: string; contributionCount: number; contributionLevel: string }) => ({
          date: item.date,
          count: item.contributionCount,
          level: convertLevel(item.contributionLevel),
        }));

        const filtered = filterLastYear(mapped);

        setContributions(filtered);
        setTotalContributions(mapped.reduce((s: number, x: { count: number }) => s + x.count, 0));
      } catch (err) {
        console.error("GitHub API failed →", err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="mt-4">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className=" font-[family-name:var(--font-instrument-serif)] text-2xl font-bold tracking-tight text-foreground"
          >
            {githubConfig.title}
          </motion.h2>
          {/* <h2 className="text-2xl font-[family-name:var(--font-instrument-serif)] font-bold"></h2> */}
          {/* <p className="text-sm text-muted-foreground">
            <b>{githubConfig.username}</b>&apos;s {githubConfig.subtitle}
          </p> */}

          {!isLoading && !hasError && totalContributions > 0 && (
            <p className="text-sm text-primary font-medium mt-1">
              Total:{" "}
              <span className="font-black">
                {totalContributions.toLocaleString()}
              </span>{" "}
              contributions
            </p>
          )}
        </div>

        {/* Loading UI */}
        {isLoading && (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">
                {githubConfig.loadingState.description}
              </p>
            </div>
          </div>
        )}

        {/* Error UI */}
        {!isLoading && (hasError || contributions.length === 0) && (
          <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <GithubIcon className="w-8 h-8" />
            </div>
            <p className="font-medium mb-2">{githubConfig.errorState.title}</p>
            <p className="text-sm mb-4">
              {githubConfig.errorState.description}
            </p>
            <Button variant="outline" asChild>
              <Link
                href={`https://github.com/${githubConfig.username}`}
                className="inline-flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        )}

        {/* Heatmap */}
        {!isLoading && !hasError && contributions.length > 0 && (
          <div className="relative overflow-hidden">
            <div className="relative bg-background/50 backdrop-blur-sm rounded-lg border border-dashed dark:border-white/10 border-black/20 p-6">
              <div className="w-full overflow-x-auto">
                <ActivityCalendar
                  data={contributions}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={githubConfig.fontSize}
                  colorScheme={theme === "dark" ? "dark" : "light"}
                  maxLevel={githubConfig.maxLevel}
                  showMonthLabels
                  showColorLegend
                  theme={githubConfig.theme}
                  labels={{
                    months: githubConfig.months,
                    weekdays: githubConfig.weekdays,
                    totalCount: githubConfig.totalCountLabel,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
