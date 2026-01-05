import { NextRequest, NextResponse } from "next/server";
import { analyticsStore } from "@/lib/analytics/store";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const minutesAgo = parseInt(searchParams.get("minutesAgo") || "5", 10);

        // Get stats from the store
        const stats = analyticsStore.getStats(minutesAgo);



        return NextResponse.json(stats, {
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        });
    } catch (error) {
        console.error("[Analytics] Stats error:", error);
        return NextResponse.json(
            { error: "Failed to fetch stats" },
            { status: 500 }
        );
    }
}
