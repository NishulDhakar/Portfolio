import { NextRequest, NextResponse } from "next/server";
import { analyticsStore } from "@/lib/analytics/store";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { page, userAgent, userId } = body;

        if (!page) {
            return NextResponse.json(
                { error: "Page parameter is required" },
                { status: 400 }
            );
        }

        // Get or create session ID from cookies
        const cookieStore = await cookies();
        let sessionId = cookieStore.get("analytics_session")?.value;

        if (!sessionId) {
            sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        }

        // Track the visit with userId (now async with MongoDB)
        const visit = await analyticsStore.trackVisit({
            timestamp: Date.now(),
            page,
            userAgent: userAgent || request.headers.get("user-agent") || "unknown",
            sessionId,
            userId, // Include userId for returning user tracking
        });

        // Create response with session cookie
        const response = NextResponse.json(
            { success: true, visitId: visit.id },
            { status: 200 }
        );

        // Set session cookie (expires in 30 minutes)
        response.cookies.set("analytics_session", sessionId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 30 * 60, // 30 minutes
        });

        return response;
    } catch (error) {
        console.error("[Analytics] Track error:", error);
        return NextResponse.json(
            { error: "Failed to track visit" },
            { status: 500 }
        );
    }
}
