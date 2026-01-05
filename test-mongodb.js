// Test MongoDB Connection
// Run with: node --loader ts-node/esm test-mongodb.ts

import { MongoClient } from 'mongodb';

async function testConnection() {
    const uri = process.env.MONGO_URI || "mongodb+srv://NishulDhakar:Ram1234@cluster0.worc1jg.mongodb.net/portfolio";

    console.log('Testing MongoDB connection...');
    console.log('URI:', uri.replace(/:[^:]*@/, ':****@')); // Hide password

    try {
        const client = new MongoClient(uri);
        await client.connect();

        console.log('✅ Connected successfully!');

        const db = client.db('portfolio_analytics');
        const collections = await db.listCollections().toArray();

        console.log('\nCollections:', collections.map(c => c.name));

        // Check visits
        const visitsCount = await db.collection('visits').countDocuments();
        console.log(`\nVisits: ${visitsCount} documents`);

        // Check users
        const usersCount = await db.collection('users').countDocuments();
        console.log(`Users: ${usersCount} documents`);

        // Get sample data
        const sampleVisit = await db.collection('visits').findOne();
        console.log('\nSample visit:', sampleVisit);

        const sampleUser = await db.collection('users').findOne();
        console.log('\nSample user:', sampleUser);

        await client.close();
        console.log('\n✅ Connection test completed!');
    } catch (error) {
        console.error('\n❌ Connection failed:', error);
    }
}

testConnection();
