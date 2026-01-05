import AnalyticsDashboard from "@/components/analytics/AnalyticsDashboard";
import { createMetadata } from "@/lib/createMetadata";

export const metadata = createMetadata({
    title: "Analytics",
    description: "Real-time analytics dashboard for portfolio traffic insights",
});

export default function AnalyticsPage() {
    return <AnalyticsDashboard />;
}
