# MongoDB Analytics Setup Guide

## ✅ Setup Complete!

Your analytics system now stores all user data persistently in MongoDB.

---

## 📊 What's Stored in MongoDB

### **Collections Created**:

#### 1. **`visits`** Collection
Stores every page visit with:
```json
{
  "id": "1736075815000-abc123xyz",
  "timestamp": 1736075815000,
  "page": "/",
  "userAgent": "Mozilla/5.0...",
  "sessionId": "session_1736075815000_xyz",
  "userId": "user_1736075815000_abc"
}
```

**Indexes Created**:
- `timestamp` (descending) - For time-based queries
- `sessionId` - For active visitor tracking
- `userId` - For user-specific queries
- `page` - For page-specific analytics

---

#### 2. **`users`** Collection
Stores unique user data:
```json
{
  "userId": "user_1736075815000_abc",
  "visitCount": 5,
  "firstVisit": 1736075815000,
  "lastVisit": 1736080000000,
  "pages": ["/", "/projects", "/blog"]
}
```

**Indexes Created**:
- `userId` (unique) - Prevent duplicates
- `lastVisit` (descending) - Find recent users
- `visitCount` (descending) - Find most engaged users

---

## 🔧 Configuration

### **Environment Variable**
Make sure your `.env` or `.env.local` has:
```bash
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio_analytics
```

### **Database Name**: `portfolio_analytics`

---

## 🚀 Features

### ✅ **Persistent Storage**
- Data survives server restarts
- Historical data preserved for 30 days
- Automatic cleanup of old visits

### ✅ **Automatic Fallback**
- If MongoDB is down, falls back to in-memory storage
- No disruption to user experience
- Error logging for debugging

### ✅ **Performance Optimized**
- Indexes for fast queries
- Aggregation pipelines for analytics
- Efficient data retrieval

### ✅ **Auto-Cleanup**
- Visits older than 30 days are automatically deleted
- Prevents infinite database growth
- Maintains performance

---

## 📈 Analytics Features

### **Track**:
- ✅ Total unique visitors
- ✅ New vs returning users
- ✅ Active visitors (last 5 minutes)
- ✅ Total page views
- ✅ Top pages by views
- ✅ Top returning users
- ✅ Average visits per user
- ✅ Page-specific metrics

### **Data Retention**:
- **Visits**: 30 days
- **Users**: Permanent (until manual cleanup)

---

## 🔍 Querying Your Data

### **Via Dashboard**
Visit: `https://nishul.dev/analytics`

### **Directly in MongoDB**
Using MongoDB Compass or CLI:

```javascript
// Get total users
db.users.countDocuments();

// Get top returning users
db.users.find({ visitCount: { $gt: 1 } })
  .sort({ visitCount: -1 })
  .limit(10);

// Get today's visits
db.visits.countDocuments({
  timestamp: { $gt: Date.now() - 24*60*60*1000 }
});

// Get most popular pages
db.visits.aggregate([
  { $group: { _id: "$page", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
]);
```

---

## 🛠️ Testing the Setup

### **1. Check Connection**
The dev server logs will show:
```
[MongoDB] Connected successfully
[MongoDB] Indexes created successfully
```

### **2. Track a Visit**
Just visit any page on your site. Check logs for:
```
[Analytics] New user: user_1736075815000_abc
[Analytics] Visit tracked in MongoDB
```

### **3. View in Dashboard**
Go to `/analytics` and you should see your data!

### **4. Verify in MongoDB**
Check your MongoDB database:
- Database: `portfolio_analytics`
- Collections: `visits`, `users`

---

## 🔐 Security Best Practices

### ✅ **Current Implementation**:
- User IDs are randomly generated (no PII)
- No tracking of personal information
- Privacy-first approach

### 📝 **Recommended**:
1. **Whitelist IP Addresses** in MongoDB Atlas
2. **Use Read-Only Credentials** for analytics display
3. **Enable MongoDB Encryption** at rest
4. **Regular Backups** via MongoDB Atlas

---

## 📊 MongoDB Atlas Setup (Recommended)

1. **Create Free Cluster**:
   - Visit: https://www.mongodb.com/cloud/atlas
   - Click "Build a Database" → Free Tier (M0)
   - Choose region closest to your users

2. **Create Database User**:
   - Database Access → Add New User
   - Username: `portfolio_analytics`
   - Auto-generate secure password

3. **Whitelist IPs**:
   - Network Access → Add IP Address
   - For development: `0.0.0.0/0` (Allow from anywhere)
   - For production: Add your server's IP

4. **Get Connection String**:
   - Connect → Connect your application
   - Copy connection string
   - Replace `<password>` with your password
   - Add to `.env` as `MONGO_URI`

---

## 🐛 Troubleshooting

### **"MONGO_URI not found"**
- Check `.env.local` or `.env` file exists
- Restart dev server after adding MONGO_URI
- Verify no extra spaces in `.env` file

### **Connection Timeout**
- Check MongoDB Atlas IP whitelist
- Verify internet connection
- Check MongoDB cluster status

### **Data Not Appearing**
- Check server logs for errors
- Verify `bun dev` is running
- Check MongoDB connection string
- Try visiting a page to trigger tracking

### **Falls Back to In-Memory**
The system automatically falls back if MongoDB fails:
- Check MongoDB connection
- View logs for connection errors
- Data will still work (but not persist)

---

## 📦 Data Migration

### **Export Data** (for backup):
```bash
mongoexport --uri="$MONGO_URI" --collection=users --out=users.json
mongoexport --uri="$MONGO_URI" --collection=visits --out=visits.json
```

### **Import Data**:
```bash
mongoimport --uri="$MONGO_URI" --collection=users --file=users.json
mongoimport --uri="$MONGO_URI" --collection=visits --file=visits.json
```

---

## 🎯 Next Steps

1. ✅ **Add MONGO_URI** to production environment variables (Vercel/Railway/etc)
2. ✅ **Set up MongoDB Atlas** for production
3. ✅ **Configure IP whitelist** for security
4. ✅ **Enable automated backups** in MongoDB Atlas
5. ✅ **Monitor database usage** in Atlas dashboard

---

## 📚 Useful Links

- **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
- **MongoDB Compass** (GUI): https://www.mongodb.com/products/compass
- **MongoDB Docs**: https://www.mongodb.com/docs/

---

**Status**: ✅ MongoDB Analytics Fully Configured  
**Fallback**: In-memory storage (auto-enabled if DB fails)  
**Data Retention**: 30 days for visits, permanent for users  
**Ready for**: Production deployment

Happy tracking! 📊
