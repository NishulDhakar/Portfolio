import { MongoClient, Db, Collection, Document } from 'mongodb';

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectToDatabase() {
    if (db) {
        return { client, db };
    }

    try {
        const uri = process.env.MONGO_URI;

        if (!uri) {
            console.error('[MongoDB] MONGO_URI not found in environment variables');
            throw new Error('MONGO_URI not found in environment variables');
        }

        // Add connection options for better reliability
        client = new MongoClient(uri, {
            retryWrites: true,
            w: 'majority',
        });

        await client.connect();

        // Database name is specified in the connection string or use default
        db = client.db('portfolio_analytics');

        // Create indexes for better performance
        await createIndexes(db);

        return { client, db };
    } catch (error) {
        console.error('[MongoDB] Connection error:', error);
        throw error;
    }
}

async function createIndexes(db: Db) {
    try {
        // Visits collection indexes
        const visitsCollection = db.collection('visits');
        await visitsCollection.createIndex({ timestamp: -1 });
        await visitsCollection.createIndex({ sessionId: 1 });
        await visitsCollection.createIndex({ userId: 1 });
        await visitsCollection.createIndex({ page: 1 });

        // Users collection indexes
        const usersCollection = db.collection('users');
        await usersCollection.createIndex({ userId: 1 }, { unique: true });
        await usersCollection.createIndex({ lastVisit: -1 });
        await usersCollection.createIndex({ visitCount: -1 });
    } catch (error) {
        console.error('[MongoDB] Error creating indexes:', error);
    }
}

export async function getCollection<T extends Document = Document>(name: string): Promise<Collection<T>> {
    const { db } = await connectToDatabase();
    if (!db) {
        throw new Error('Database not connected');
    }
    return db.collection<T>(name);
}

// Graceful shutdown
if (typeof process !== 'undefined') {
    process.on('SIGINT', async () => {
        if (client) {
            await client.close();
        }
    });
}
