/**
 * Web Vitals Reporter for Performance Monitoring
 * Tracks Core Web Vitals: LCP, INP, CLS, FCP, TTFB
 */

import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log(metric);
    }

    // Send to your analytics endpoint
    const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
    });

    // Example: Send to your analytics endpoint
    if (typeof window !== 'undefined' && navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics/vitals', body);
    }
}

export function reportWebVitals() {
    try {
        onCLS(sendToAnalytics);
        onINP(sendToAnalytics);  // Replaces FID in web-vitals v3+
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
    } catch (err) {
        console.error('Error reporting web vitals:', err);
    }
}
