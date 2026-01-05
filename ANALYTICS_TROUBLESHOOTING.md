# Analytics Not Showing - Troubleshooting Guide

## 🔧 Issue Fixed

**Critical Bug Found**: The stats API was not `await`ing the async `getStats()` call, causing it to return a Promise instead of actual data.

### Files Fixed:
1. ✅ `/src/app/api/analytics/stats/route.ts` - Added `await` to `getStats()`
2. ✅ `/src/lib/mongodb.ts` - Added connection options
3. ✅ `/src/components/widgets/LiveVisitors.tsx` - Added debug logging

---

## 📋 Checklist to Get Analytics Working

### 1. **Verify Environment Variable**

Your `.env` or `.env.local` should have:
```bash
MONGO_URI="mongodb+srv://NishulDhakar:Ram1234@cluster0.worc1jg.mongodb.net/portfolio"
```

⚠️ **Important**: After adding/changing `.env`, you MUST restart the dev server!

```bash
# Kill the current server (Ctrl+C)
# Then restart:
bun dev
```

---

### 2. **Test MongoDB Connection**

Run the test script:
```bash
MONGO_URI="mongodb+srv://NishulDhakar:Ram1234@cluster0.worc1jg.mongodb.net/portfolio" node test-mongodb.js
```

You should see:
```
✅ Connected successfully!
Collections: ['visits', 'users']
Visits: X documents
Users: X documents
```

---

### 3. **Check Browser Console**

Open your browser at `http://localhost:3000` and check the console:

**Expected logs**:
```
Analytics data received: {activeVisitors: 1, totalPageViews: X, ...}
```

**If you see errors**:
- `Failed to fetch stats` → API route error
- `Connection refused` → Dev server not running
- `404` → Route not found

---

### 4. **Check Server Logs**

In your terminal where `bun dev` is running, you should see:

**On first visit**:
```
[MongoDB] Connected successfully
[MongoDB] Indexes created successfully
```

**If you see errors**:
- `MONGO_URI not found` → Check `.env` file and restart server
- `Connection timeout` → Check MongoDB Atlas IP whitelist
- `Authentication failed` → Wrong password in connection string

---

### 5. **Verify API Endpoints**

Test directly in browser:

**Stats API**:
```
http://localhost:3000/api/analytics/stats
```

Should return JSON:
```json
{
  "activeVisitors": 1,
  "totalPageViews": 5,
  "recentPageViews": 1,
  "topPages": [...],
  "totalUniqueUsers": 1,
  "newUsers": 1,
  "returningUsers": 0,
  "topReturningUsers": [],
  "averageVisitsPerUser": 1
}
```

**Track API** (POST - use curl):
```bash
curl -X POST http://localhost:3000/api/analytics/track \
  -H "Content-Type: application/json" \
  -d '{"page":"/test","userId":"test123"}'
```

Should return:
```json
{"success":true,"visitId":"..."}
```

---

### 6. **MongoDB Atlas Configuration**

1. **IP Whitelist**:
   - Go to MongoDB Atlas → Network Access
   - Make sure `0.0.0.0/0` is whitelisted (for development)
   - For production, add your server's IP

2. **Database User**:
   - Go to Database Access
   - Verify user `NishulDhakar` exists
   - Password: `Ram1234`

3. **Connection String**:
   ```
   mongodb+srv://NishulDhakar:Ram1234@cluster0.worc1jg.mongodb.net/portfolio
   ```
   - Cluster: `cluster0.worc1jg.mongodb.net`
   - Database: `portfolio` (or `portfolio_analytics`)

---

## 🐛 Common Issues & Solutions

### Issue 1: "0 visitors online" (even though you're visiting)

**Cause**: MongoDB not connected OR data not being tracked

**Solutions**:
1. Restart dev server after adding `MONGO_URI`
2. Check browser console for tracking errors
3. Manually visit a page to trigger tracking
4. Check MongoDB collections have data

---

### Issue 2: Analytics page shows "offline" in footer

**Cause**: API returning error

**Solutions**:
1. Check `/api/analytics/stats` in browser
2. Look for errors in server terminal
3. Verify MongoDB connection

---

### Issue 3: MongoDB connection timeout

**Cause**: IP not whitelisted in Atlas

**Solutions**:
1. Go to MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. Choose "Allow from anywhere" (0.0.0.0/0)
4. Save and wait 1-2 minutes

---

### Issue 4: "Authentication failed"

**Cause**: Wrong username/password

**Solutions**:
1. Verify credentials in MongoDB Atlas
2. Check connection string format
3. Make sure special characters in password are URL-encoded
   - Example: `p@ssw0rd` → `p%40ssw0rd`

---

## 🧪 Manual Testing Steps

1. **Clear browser cache** (Cmd+Shift+R on Mac)
2. **Open DevTools** (F12 or Cmd+Option+I)
3. **Go to Console tab**
4. **Visit** `http://localhost:3000`
5. **Check for logs**:
   - `Analytics data received: {...}` ✅ Good
   - `Error fetching analytics: ...` ❌ Problem

6. **Check Network tab**:
   - Look for `/api/analytics/stats`
   - Should be Status 200
   - Should have response data

---

## 📊 Expected Behavior After Fix

### Footer (Live Visitors):
```
👤 1 visitor online
```

### Analytics Dashboard:
```
Active Visitors: 1
Total Page Views: 5
Total Unique Users: 1
New Users: 1
Returning Users: 0
```

---

## 🔄 Quick Fix Checklist

Run these in order:

```bash
# 1. Stop the dev server (Ctrl+C)

# 2. Verify .env file exists and has MONGO_URI
cat .env | grep MONGO_URI

# 3. Test MongoDB connection
MONGO_URI="mongodb+srv://NishulDhakar:Ram1234@cluster0.worc1jg.mongodb.net/portfolio" node test-mongodb.js

# 4. Restart dev server
bun dev

# 5. Visit http://localhost:3000

# 6. Check browser console for "Analytics data received"

# 7. Check footer for "1 visitor online"
```

---

## 📞 Still Not Working?

If analytics still don't show after following all steps:

1. **Check browser console** - Copy any error messages
2. **Check server terminal** - Copy any MongoDB errors
3. **Share the logs** - So we can debug further

### Useful Debug Info:
```bash
# Check if MONGO_URI is loaded
echo $MONGO_URI

# Check Node version
node -v

# Check if MongoDB is reachable
ping cluster0.worc1jg.mongodb.net
```

---

**Status**: 🔧 **Fixes Applied - Restart Server to Test!**

The main issue (missing `await`) has been fixed. Just restart your dev server and the analytics should start working immediately! 🎉
