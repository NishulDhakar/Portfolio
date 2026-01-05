"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Generate or retrieve a persistent user ID
function getUserId(): string {
    const STORAGE_KEY = "analytics_user_id";

    // Try to get existing user ID from localStorage
    let userId = localStorage.getItem(STORAGE_KEY);

    if (!userId) {
        // Generate a new unique user ID
        userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem(STORAGE_KEY, userId);
    }

    return userId;
}

export default function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Track page view when component mounts or pathname changes
        const trackPageView = async () => {
            try {
                const userId = getUserId();

                await fetch("/api/analytics/track", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        page: pathname,
                        userAgent: navigator.userAgent,
                        userId, // Include user ID for tracking returning users
                    }),
                });
            } catch (error) {
                // Silently fail - don't disrupt user experience
                console.debug("Analytics tracking failed:", error);
            }
        };

        trackPageView();
    }, [pathname]);

    // This component doesn't render anything
    return null;
}
