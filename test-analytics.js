#!/usr/bin/env node

/**
 * Analytics Test Script
 * This script simulates user visits to test the analytics tracking system
 */

const BASE_URL = 'http://localhost:3001';

async function trackVisit(page, userId) {
    try {
        const response = await fetch(`${BASE_URL}/api/analytics/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                page,
                userId,
                userAgent: 'Mozilla/5.0 (Test Script)',
            }),
        });

        const data = await response.json();
        console.log(`✅ Tracked visit: ${userId} → ${page}`, data.success ? '(success)' : '(failed)');
        return data;
    } catch (error) {
        console.error(`❌ Failed to track: ${error.message}`);
        return null;
    }
}

async function getStats() {
    try {
        const response = await fetch(`${BASE_URL}/api/analytics/stats?minutesAgo=60`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`❌ Failed to get stats: ${error.message}`);
        return null;
    }
}

async function generateTestData() {
    console.log('\n🚀 Generating test analytics data...\n');

    // Simulate 3 users with different visit patterns
    const users = [
        { id: 'user_001_test', visits: 5 },  // Super engaged user
        { id: 'user_002_test', visits: 3 },  // Medium engaged user
        { id: 'user_003_test', visits: 2 },  // Returning user
        { id: 'user_004_test', visits: 1 },  // New user
        { id: 'user_005_test', visits: 1 },  // New user
    ];

    const pages = ['/', '/about', '/projects', '/blog', '/contact'];

    // Generate visits
    for (const user of users) {
        for (let i = 0; i < user.visits; i++) {
            const randomPage = pages[Math.floor(Math.random() * pages.length)];
            await trackVisit(randomPage, user.id);
            // Small delay to avoid overwhelming the server
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    console.log('\n📊 Fetching analytics stats...\n');

    // Wait a bit for processing
    await new Promise(resolve => setTimeout(resolve, 500));

    const stats = await getStats();

    if (stats) {
        console.log('═══════════════════════════════════════');
        console.log('           ANALYTICS SUMMARY           ');
        console.log('═══════════════════════════════════════\n');

        console.log(`📈 Total Unique Users: ${stats.totalUniqueUsers}`);
        console.log(`🆕 New Users: ${stats.newUsers}`);
        console.log(`🔄 Returning Users: ${stats.returningUsers}`);
        console.log(`📊 Average Visits/User: ${stats.averageVisitsPerUser}`);
        console.log(`👁️  Total Page Views: ${stats.totalPageViews}\n`);

        if (stats.topReturningUsers && stats.topReturningUsers.length > 0) {
            console.log('═══════════════════════════════════════');
            console.log('        TOP RETURNING USERS            ');
            console.log('═══════════════════════════════════════\n');

            stats.topReturningUsers.forEach((user, index) => {
                const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '  ';
                console.log(`${medal} ${user.userId}: ${user.visitCount} visits`);
            });
        }

        if (stats.topPages && stats.topPages.length > 0) {
            console.log('\n═══════════════════════════════════════');
            console.log('            TOP PAGES                  ');
            console.log('═══════════════════════════════════════\n');

            stats.topPages.forEach((page, index) => {
                console.log(`${index + 1}. ${page.page}: ${page.count} views`);
            });
        }

        console.log('\n═══════════════════════════════════════\n');
        console.log('✨ Test data generated successfully!');
        console.log(`📊 View the dashboard at: ${BASE_URL}/analytics\n`);
    }
}

// Run the test
generateTestData().catch(console.error);
