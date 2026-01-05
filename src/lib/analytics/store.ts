// MongoDB-backed analytics store with fallback to in-memory
import { getCollection } from '@/lib/mongodb';

export interface Visit {
    id: string;
    timestamp: number;
    page: string;
    userAgent: string;
    sessionId: string;
    userId?: string;
}

export interface PageView {
    page: string;
    count: number;
    lastVisit: number;
}

export interface UserData {
    userId: string;
    visitCount: number;
    firstVisit: number;
    lastVisit: number;
    pages: string[]; // Changed from Set to Array for MongoDB compatibility
}

interface MongoUserData {
    userId: string;
    visitCount: number;
    firstVisit: number;
    lastVisit: number;
    pages: string[];
}

class AnalyticsStore {
    private useDatabase = true;

    // In-memory fallback (for development or if DB fails)
    private visits: Visit[] = [];
    private pageViews: Map<string, PageView> = new Map();
    private users: Map<string, UserData> = new Map();
    private readonly MAX_VISITS = 10000;

    async trackVisit(visit: Omit<Visit, "id">): Promise<Visit> {
        const newVisit: Visit = {
            ...visit,
            id: this.generateId(),
        };

        try {
            if (this.useDatabase) {
                // Store in MongoDB
                const visitsCollection = await getCollection<Visit>('visits');
                await visitsCollection.insertOne(newVisit as any);

                // Update user data
                if (visit.userId) {
                    await this.trackUserInDB(visit.userId, visit.page, visit.timestamp);
                }

                // Clean up old visits (older than 30 days)
                const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
                await visitsCollection.deleteMany({ timestamp: { $lt: thirtyDaysAgo } });


            }
        } catch (error) {
            console.error('[Analytics] MongoDB error, falling back to in-memory:', error);
            this.useDatabase = false;

            // Fallback to in-memory
            this.trackVisitInMemory(newVisit);
        }

        return newVisit;
    }

    private trackVisitInMemory(visit: Visit): void {
        this.visits.push(visit);

        const existing = this.pageViews.get(visit.page) || {
            page: visit.page,
            count: 0,
            lastVisit: 0,
        };

        this.pageViews.set(visit.page, {
            page: visit.page,
            count: existing.count + 1,
            lastVisit: visit.timestamp,
        });

        if (visit.userId) {
            this.trackUserInMemory(visit.userId, visit.page, visit.timestamp);
        }

        if (this.visits.length > this.MAX_VISITS) {
            this.visits = this.visits.slice(-this.MAX_VISITS);
        }

        const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
        this.visits = this.visits.filter((v) => v.timestamp > oneDayAgo);
    }

    private async trackUserInDB(userId: string, page: string, timestamp: number): Promise<void> {
        const usersCollection = await getCollection<MongoUserData>('users');

        const existingUser = await usersCollection.findOne({ userId });

        if (existingUser) {
            // Returning user
            await usersCollection.updateOne(
                { userId },
                {
                    $inc: { visitCount: 1 },
                    $set: { lastVisit: timestamp },
                    $addToSet: { pages: page }, // Add page if not already in array
                }
            );

        } else {
            // New user
            await usersCollection.insertOne({
                userId,
                visitCount: 1,
                firstVisit: timestamp,
                lastVisit: timestamp,
                pages: [page],
            } as any);

        }
    }

    private trackUserInMemory(userId: string, page: string, timestamp: number): void {
        const existing = this.users.get(userId);

        if (existing) {
            existing.visitCount += 1;
            existing.lastVisit = timestamp;
            if (!existing.pages.includes(page)) {
                existing.pages.push(page);
            }
        } else {
            this.users.set(userId, {
                userId,
                visitCount: 1,
                firstVisit: timestamp,
                lastVisit: timestamp,
                pages: [page],
            });
        }
    }

    async getActiveVisitors(minutesAgo: number = 5): Promise<number> {
        const threshold = Date.now() - minutesAgo * 60 * 1000;

        try {
            if (this.useDatabase) {
                const visitsCollection = await getCollection<Visit>('visits');
                const recentVisits = await visitsCollection
                    .find({ timestamp: { $gt: threshold } })
                    .toArray();

                const uniqueSessions = new Set(recentVisits.map(v => v.sessionId));
                return uniqueSessions.size;
            }
        } catch (error) {
            console.error('[Analytics] Error getting active visitors:', error);
        }

        // Fallback
        const uniqueSessions = new Set(
            this.visits
                .filter((v) => v.timestamp > threshold)
                .map((v) => v.sessionId)
        );
        return uniqueSessions.size;
    }

    async getTotalPageViews(): Promise<number> {
        try {
            if (this.useDatabase) {
                const visitsCollection = await getCollection<Visit>('visits');
                return await visitsCollection.countDocuments();
            }
        } catch (error) {
            console.error('[Analytics] Error getting total page views:', error);
        }

        let total = 0;
        this.pageViews.forEach((pv) => (total += pv.count));
        return total;
    }

    async getTotalUniqueUsers(): Promise<number> {
        try {
            if (this.useDatabase) {
                const usersCollection = await getCollection<MongoUserData>('users');
                return await usersCollection.countDocuments();
            }
        } catch (error) {
            console.error('[Analytics] Error getting unique users:', error);
        }

        return this.users.size;
    }

    async getNewVsReturningUsers(): Promise<{ newUsers: number; returningUsers: number }> {
        try {
            if (this.useDatabase) {
                const usersCollection = await getCollection<MongoUserData>('users');

                const newUsers = await usersCollection.countDocuments({ visitCount: 1 });
                const returningUsers = await usersCollection.countDocuments({ visitCount: { $gt: 1 } });

                return { newUsers, returningUsers };
            }
        } catch (error) {
            console.error('[Analytics] Error getting new vs returning users:', error);
        }

        let newUsers = 0;
        let returningUsers = 0;
        this.users.forEach((user) => {
            if (user.visitCount === 1) {
                newUsers++;
            } else {
                returningUsers++;
            }
        });

        return { newUsers, returningUsers };
    }

    async getTopReturningUsers(limit: number = 10): Promise<UserData[]> {
        try {
            if (this.useDatabase) {
                const usersCollection = await getCollection<MongoUserData>('users');

                const users = await usersCollection
                    .find({ visitCount: { $gt: 1 } })
                    .sort({ visitCount: -1 })
                    .limit(limit)
                    .toArray();

                return users.map(user => ({
                    userId: user.userId,
                    visitCount: user.visitCount,
                    firstVisit: user.firstVisit,
                    lastVisit: user.lastVisit,
                    pages: user.pages,
                }));
            }
        } catch (error) {
            console.error('[Analytics] Error getting top returning users:', error);
        }

        return Array.from(this.users.values())
            .filter((user) => user.visitCount > 1)
            .sort((a, b) => b.visitCount - a.visitCount)
            .slice(0, limit);
    }

    async getAverageVisitsPerUser(): Promise<number> {
        try {
            if (this.useDatabase) {
                const usersCollection = await getCollection<MongoUserData>('users');

                const totalUsers = await usersCollection.countDocuments();
                if (totalUsers === 0) return 0;

                const result = await usersCollection.aggregate([
                    {
                        $group: {
                            _id: null,
                            totalVisits: { $sum: '$visitCount' },
                        },
                    },
                ]).toArray();

                if (result.length === 0) return 0;
                return Math.round((result[0].totalVisits / totalUsers) * 100) / 100;
            }
        } catch (error) {
            console.error('[Analytics] Error getting average visits:', error);
        }

        if (this.users.size === 0) return 0;

        let totalVisits = 0;
        this.users.forEach((user) => {
            totalVisits += user.visitCount;
        });

        return Math.round((totalVisits / this.users.size) * 100) / 100;
    }

    async getStats(minutesAgo: number = 5) {
        const threshold = Date.now() - minutesAgo * 60 * 1000;

        try {
            if (this.useDatabase) {
                const visitsCollection = await getCollection<Visit>('visits');

                const recentVisits = await visitsCollection
                    .find({ timestamp: { $gt: threshold } })
                    .toArray();

                const uniqueSessions = new Set(recentVisits.map(v => v.sessionId));
                const { newUsers, returningUsers } = await this.getNewVsReturningUsers();

                return {
                    activeVisitors: uniqueSessions.size,
                    totalPageViews: await this.getTotalPageViews(),
                    recentPageViews: recentVisits.length,
                    topPages: await this.getTopPages(5),
                    totalUniqueUsers: await this.getTotalUniqueUsers(),
                    newUsers,
                    returningUsers,
                    topReturningUsers: await this.getTopReturningUsers(10),
                    averageVisitsPerUser: await this.getAverageVisitsPerUser(),
                };
            }
        } catch (error) {
            console.error('[Analytics] Error getting stats:', error);
        }

        // Fallback to in-memory
        const recentVisits = this.visits.filter((v) => v.timestamp > threshold);
        const uniqueSessions = new Set(recentVisits.map((v) => v.sessionId));
        const { newUsers, returningUsers } = await this.getNewVsReturningUsers();

        return {
            activeVisitors: uniqueSessions.size,
            totalPageViews: await this.getTotalPageViews(),
            recentPageViews: recentVisits.length,
            topPages: await this.getTopPages(5),
            totalUniqueUsers: await this.getTotalUniqueUsers(),
            newUsers,
            returningUsers,
            topReturningUsers: await this.getTopReturningUsers(10),
            averageVisitsPerUser: await this.getAverageVisitsPerUser(),
        };
    }

    private async getTopPages(limit: number = 5): Promise<PageView[]> {
        try {
            if (this.useDatabase) {
                const visitsCollection = await getCollection<Visit>('visits');

                const result = await visitsCollection.aggregate([
                    {
                        $group: {
                            _id: '$page',
                            count: { $sum: 1 },
                            lastVisit: { $max: '$timestamp' },
                        },
                    },
                    {
                        $sort: { count: -1 },
                    },
                    {
                        $limit: limit,
                    },
                    {
                        $project: {
                            _id: 0,
                            page: '$_id',
                            count: 1,
                            lastVisit: 1,
                        },
                    },
                ]).toArray();

                return result as PageView[];
            }
        } catch (error) {
            console.error('[Analytics] Error getting top pages:', error);
        }

        return Array.from(this.pageViews.values())
            .sort((a, b) => b.count - a.count)
            .slice(0, limit);
    }

    private generateId(): string {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
}

// Singleton instance
export const analyticsStore = new AnalyticsStore();
