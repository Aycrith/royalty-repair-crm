# 🔧 Vercel Environment Variables Setup

## **Required Environment Variables for Deployment**

Based on the [Next.js environment variables documentation](https://nextjs.org/docs/pages/guides/environment-variables), here are the essential environment variables you need to configure in your Vercel project:

### **🔑 Core Supabase Variables (Required)**

Add these in your Vercel project settings under **Environment Variables**:

```env
NEXT_PUBLIC_SUPABASE_URL=https://eztzatvxjcesmzduvpfz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dHphdHZ4amNlc216ZHV2cGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NDExOTgsImV4cCI6MjA2NDMxNzE5OH0.IIehcYy2AVg5nBVKjY_pdiAJcDphHkUqdsEOTBEGNOU
```

### **⚙️ Build Configuration Variables**

```env
SKIP_BUILD_REDIS=true
NODE_ENV=production
NEXT_PUBLIC_APP_NAME=Royalty Repair CRM
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### **📊 Performance & Analytics Variables**

```env
ENABLE_ANALYTICS=true
ENABLE_ERROR_REPORTING=true
ENABLE_PERFORMANCE_MONITORING=true
ENABLE_BUNDLE_ANALYZER=false
ENABLE_SOURCE_MAPS=false
```

## **🚀 How to Add Environment Variables in Vercel**

### **Method 1: Vercel Dashboard (Recommended)**

1. **Go to your Vercel project dashboard**
2. **Click on "Settings" tab**
3. **Select "Environment Variables" from the sidebar**
4. **Add each variable:**
   - **Name**: Variable name (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - **Value**: Variable value
   - **Environment**: Select `Production`, `Preview`, and `Development`
5. **Click "Save"**

### **Method 2: Vercel CLI (Advanced)**

```bash
# Set individual environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SKIP_BUILD_REDIS production
vercel env add NODE_ENV production

# Pull environment variables to local
vercel env pull .env.local
```

### **Method 3: Bulk Import (Fastest)**

1. **Create a `.env` file locally with all variables**
2. **Go to Vercel Dashboard → Settings → Environment Variables**
3. **Click "Import .env File"**
4. **Upload your `.env` file**
5. **Select environments** (Production, Preview, Development)

## **🔍 Environment Variable Types**

### **Public Variables (NEXT_PUBLIC_)**
- ✅ Available in browser
- ✅ Bundled at build time
- ✅ Safe for client-side code
- ⚠️ **Never put secrets here**

### **Server-Only Variables**
- ✅ Only available on server
- ✅ Safe for API keys and secrets
- ❌ Not accessible in browser

## **🛠️ Build Process Variables**

The following variables are specifically for the build process:

```env
# Prevents Redis connection errors during build
SKIP_BUILD_REDIS=true

# Optimizes build for production
NODE_ENV=production

# Memory allocation for build process
NODE_OPTIONS=--max-old-space-size=8192
```

## **✅ Verification Steps**

After adding environment variables:

1. **Trigger a new deployment**:
   ```bash
   git push origin main
   ```

2. **Check build logs** for any missing variables

3. **Verify in browser console**:
   ```javascript
   console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
   ```

4. **Test Supabase connection** on deployed site

## **🚨 Common Issues & Solutions**

### **Issue: "Cannot find module 'critters'"**
- ✅ **Fixed**: Added `critters` dependency to package.json
- ✅ **Fixed**: Disabled `optimizeCss` in next.config.js

### **Issue: Supabase connection errors**
- ✅ **Solution**: Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
- ✅ **Solution**: Variables must be prefixed with `NEXT_PUBLIC_` for client access

### **Issue: Build timeouts**
- ✅ **Solution**: Set `SKIP_BUILD_REDIS=true`
- ✅ **Solution**: Use `NODE_OPTIONS=--max-old-space-size=8192`

### **Issue: Environment variables not updating**
- 🔄 **Solution**: Redeploy after changing variables
- 🔄 **Solution**: Clear Vercel cache: `vercel --force`

## **📋 Quick Setup Checklist**

- [ ] Add `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Add `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Add `SKIP_BUILD_REDIS=true`
- [ ] Add `NODE_ENV=production`
- [ ] Add `NEXT_PUBLIC_APP_NAME`
- [ ] Add `NEXT_PUBLIC_APP_VERSION`
- [ ] Set all variables for Production, Preview, and Development
- [ ] Trigger new deployment
- [ ] Verify build succeeds
- [ ] Test application functionality

## **🔗 Useful Links**

- [Next.js Environment Variables Documentation](https://nextjs.org/docs/pages/guides/environment-variables)
- [Vercel Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)
- [Supabase Next.js Integration](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

---

**🎯 Ready for Deployment!**

Once you've added these environment variables, your Royalty Repair CRM should build and deploy successfully on Vercel.