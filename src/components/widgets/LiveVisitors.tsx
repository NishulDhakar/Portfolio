"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

interface AnalyticsStats {
    activeVisitors: number;
    totalPageViews: number;
    recentPageViews: number;
}

export default function LiveVisitors() {
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
                console.log("Analytics data received:", data); // Debug log
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

    // Show error state temporarily for debugging
    if (error) {
        return (
            <div className="inline-flex items-center gap-1.5 text-red-500">
                <Users className="w-3 h-3" />
                <span className="text-xs">offline</span>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="inline-flex items-center gap-1.5 animate-pulse">
                <Users className="w-3 h-3" />
                <span>•••</span>
            </div>
        );
    }

    const activeVisitors = stats?.activeVisitors || 0;

    return (
        <div className="inline-flex items-center gap-1.5">
            <Users className="w-3 h-3 text-green-500 animate-pulse" />
            <span className="text-primary font-medium">{activeVisitors}</span>
            <span className="opacity-60">
                {activeVisitors === 1 ? "visitor" : "visitors"} online
            </span>
        </div>
    );
}
