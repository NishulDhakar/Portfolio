"use client";

import React, {
  useEffect,
  useMemo,
  useState,
  memo,
} from "react";
import {
  Users,
  Eye,
  TrendingUp,
  Clock,
  UserCheck,
  UserPlus,
  Target,
  ArrowUpRight,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

/* -------------------- TYPES -------------------- */

interface UserData {
  userId: string;
  visitCount: number;
  pages: string[];
}

interface AnalyticsStats {
  activeVisitors: number;
  totalPageViews: number;
  recentPageViews: number;
  topPages: {
    page: string;
    count: number;
    lastVisit: number;
  }[];
  totalUniqueUsers: number;
  newUsers: number;
  returningUsers: number;
  topReturningUsers: UserData[];
  averageVisitsPerUser: number;
}

/* -------------------- HOOK -------------------- */

function useAnalytics() {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchStats = async () => {
      try {
        const res = await fetch("/api/analytics/stats?minutesAgo=5", {
          signal: controller.signal,
          cache: "no-store",
        });
        const data = await res.json();

        setStats((prev) => {
          if (JSON.stringify(prev) === JSON.stringify(data)) return prev;
          return data;
        });
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Analytics error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        fetchStats();
      }
    }, 10000);

    return () => {
      controller.abort();
      clearInterval(interval);
    };
  }, []);

  return { stats, loading };
}

/* -------------------- MAIN DASHBOARD -------------------- */

export default function AnalyticsDashboard() {
  const { stats, loading } = useAnalytics();

  const engagementRate = useMemo(() => {
    if (!stats?.totalUniqueUsers) return 0;
    return Math.round(
      (stats.returningUsers / stats.totalUniqueUsers) * 100
    );
  }, [stats]);

  const avgSession = useMemo(() => {
    return `${Math.round((stats?.averageVisitsPerUser || 1) * 1.5)}m`;
  }, [stats]);

  if (loading) {
    return <LoadingState />;
  }

  if (!stats) return null;

  return (
    <div className="min-h-screen px-4 py-10 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Real-time user insights & engagement metrics
        </p>
      </header>

      {/* Stats */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Users />}
          label="Active Visitors"
          value={stats.activeVisitors}
          description="Right now"
          trend="+ live"
        />
        <StatCard
          icon={<Eye />}
          label="Recent Views"
          value={stats.recentPageViews}
          description="Last 5 minutes"
        />
        <StatCard
          icon={<TrendingUp />}
          label="Total Views"
          value={stats.totalPageViews}
          description="All time"
        />
        <StatCard
          icon={<Clock />}
          label="Avg Session"
          value={avgSession}
          description="Estimated"
        />
      </section>

      {/* Engagement */}
      <section className="grid gap-6 md:grid-cols-3">
        <EngagementCard
          icon={<UserPlus className="dark:text-secondary/70" />}
          label="New Users"
          value={stats.newUsers}
          total={stats.totalUniqueUsers}
          index={0}
        />
        <EngagementCard
          icon={<UserCheck className="dark:text-secondary/70" />}
          label="Returning Users"
          value={stats.returningUsers}
          total={stats.totalUniqueUsers}
          highlight
          index={1}
        />
        <EngagementCard
          icon={<Target className="dark:text-secondary/70" />}
          label="Engagement Rate"
          value={`${engagementRate}%`}
          description={`${stats.averageVisitsPerUser} avg visits/user`}
          index={2}
        />
      </section>

      {/* Content */}
      <section className="grid gap-8 lg:grid-cols-2">
        <ReturningUsers users={stats.topReturningUsers} />
        <TopPages pages={stats.topPages} />
      </section>
    </div>
  );
}

/* -------------------- COMPONENTS -------------------- */

const LoadingState = memo(() => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="relative">
      <div className="animate-spin h-16 w-16 border-t-2 border-primary rounded-full" />
      <BarChart3 className="absolute inset-0 m-auto text-primary" />
    </div>
  </div>
));

const StatCard = memo(
  ({
    icon,
    label,
    value,
    description,
    trend,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    description: string;
    trend?: string;
  }) => (
    <div className="rounded-xl border p-5 bg-card/40 backdrop-blur">
      <div className="flex justify-between mb-3">
        <div className="p-2 rounded-lg bg-muted">{icon}</div>
        {trend && (
          <span className="text-xs text-emerald-500 flex items-center gap-1">
            <ArrowUpRight size={12} />
            {trend}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-xs text-muted-foreground mt-2">
        {description}
      </p>
    </div>
  )
);

const EngagementCard = memo(
  ({
    icon,
    label,
    value,
    total,
    description,
    highlight,
    index,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    total?: number;
    description?: string;
    highlight?: boolean;
    index: number;
  }) => {
    const percent = total
      ? Math.round((Number(value) / total) * 100)
      : 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`rounded-xl border p-5 ${
          highlight ? "border-violet-500/40" : ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 bg-primary text-white rounded-md">
            {icon}
          </div>
          <p className="font-medium">{label}</p>
        </div>

        <p className="text-3xl font-bold">{value}</p>

        {total !== undefined && (
          <>
            <div className="h-1 bg-muted mt-3 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-primary"
              />
            </div>
            <p className="text-xs mt-2 text-muted-foreground">
              {percent}% of users
            </p>
          </>
        )}

        {description && (
          <p className="text-xs text-muted-foreground mt-3">
            {description}
          </p>
        )}
      </motion.div>
    );
  }
);

const ReturningUsers = memo(({ users }: { users: UserData[] }) => (
  <div>
    

  </div>
));

const TopPages = memo(
  ({
    pages,
  }: {
    pages: AnalyticsStats["topPages"];
  }) => (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Top Content
      </h2>
      <div className="space-y-3">
        {pages.length ? (
          pages.map((p, i) => (
            <div
              key={p.page}
              className="border rounded-lg p-4 flex justify-between"
            >
              <div>
                <p className="font-medium">
                  #{i + 1} {p.page}
                </p>
                <p className="text-xs text-muted-foreground">
                  Last viewed{" "}
                  {new Date(p.lastVisit).toLocaleTimeString()}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={14} />
                {p.count}
              </div>
            </div>
          ))
        ) : (
          <p className="p-6 text-muted-foreground text-center">
            No page views
          </p>
        )}
      </div>
    </div>
  )
);
