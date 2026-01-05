"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface AnalyticsStats {
    activeVisitors: number;
    totalPageViews: number;
    recentPageViews: number;
}

const getOrdinal = (num: number) => {
  const mod10 = num % 10;
  const mod100 = num % 100;

  if (mod100 >= 11 && mod100 <= 13) return `${num}th`;

  switch (mod10) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
};


export default function TotalViews() {
    const [stats, setStats] = useState<AnalyticsStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch("/api/analytics/stats?minutesAgo=5");

                if (!response.ok) {
                    console.error("Analytics API error:", response.status, response.statusText);
                    throw new Error("Failed to fetch stats");
                }

                const data: AnalyticsStats = await response.json();
                setStats(data);
                setError(false);
            } catch (err) {
                console.error("Error fetching analytics:", err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        // Fetch immediately
        fetchStats();

        // Then fetch every 30 seconds
        const interval = setInterval(fetchStats, 30000);

        return () => clearInterval(interval);
    }, []);

    // Silently fail on error
    if (error) {
        return null;
    }

    if (isLoading) {
        return (
            <div className="inline-flex items-center gap-1.5 animate-pulse">
                <Eye className="w-3 h-3" />
                <span>•••</span>
            </div>
        );
    }

    const totalViews = stats?.totalPageViews || 0;

    // Format large numbers (e.g., 1000 -> 1K, 1000000 -> 1M)
    const formatNumber = (num: number): string => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num.toString();
    };

    return (
<div className="inline-flex items-center gap-1.5">

  You are the
  <span className="text-primary font-medium">
    {getOrdinal(totalViews)}
  </span>
  visitor
</div>

    );
}
