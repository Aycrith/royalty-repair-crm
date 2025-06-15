# 🚀 Vercel Setup Guide - Complete Integration

## ✅ **Current Status: GitHub Secrets Configured**

**VERCEL_TOKEN**: ✅ Successfully added to GitHub repository secrets

## 🎯 **Next Steps: Get Organization & Project IDs**

### **Step 1: Import Repository to Vercel Dashboard**

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "Add New..." → "Project"**
3. **Import Git Repository**: Select `Aycrith/royalty-repair-crm`
4. **Configure Project Settings**:
   - **Project Name**: `royalty-repair-crm`
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build:safe`
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm ci`

### **Step 2: Get Required IDs**

After importing the project, get these values:

#### **Organization ID**:
1. Go to your Vercel dashboard
2. Click on your profile/team name in the top-left
3. Go to "Settings" → "General"
4. Copy the **Team ID** (this is your `VERCEL_ORG_ID`)

#### **Project ID**:
1. In your project dashboard
2. Go to "Settings" → "General"
3. Copy the **Project ID** (this is your `VERCEL_PROJECT_ID`)

### **Step 3: Add Missing GitHub Secrets**

Run these commands to add the remaining secrets:

```bash
# Replace YOUR_ORG_ID with the actual Organization ID
gh secret set VERCEL_ORG_ID --body "YOUR_ORG_ID" --repo Aycrith/royalty-repair-crm

# Replace YOUR_PROJECT_ID with the actual Project ID  
gh secret set VERCEL_PROJECT_ID --body "YOUR_PROJECT_ID" --repo Aycrith/royalty-repair-crm
```

### **Step 4: Verify Token (Alternative Method)**

If you need to verify your token, you can also:

1. **Go to [Vercel Account Settings](https://vercel.com/account/tokens)**
2. **Verify your token**: `R8qBnwufbspnKwRn4i7kfL3l`
3. **Check token permissions**: Ensure it has deployment permissions

## 🔧 **Environment Variables Setup**

In your Vercel project settings, add these environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://eztzatvxjcesmzduvpfz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dHphdHZ4amNlc216ZHV2cGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NDExOTgsImV4cCI6MjA2NDMxNzE5OH0.IIehcYy2AVg5nBVKjY_pdiAJcDphHkUqdsEOTBEGNOU
```

## 🚀 **Testing the Deployment**

Once you have all three secrets configured:

1. **VERCEL_TOKEN** ✅ (Already set)
2. **VERCEL_ORG_ID** (Get from dashboard)
3. **VERCEL_PROJECT_ID** (Get from dashboard)

The GitHub Actions workflow will automatically:
- ✅ Deploy on pushes to `main` branch (production)
- ✅ Create preview deployments for pull requests
- ✅ Build with optimized settings
- ✅ Include Vercel Analytics and Speed Insights

## 🔍 **Troubleshooting**

### **If deployment fails:**

1. **Check GitHub Actions logs**: Go to Actions tab in your repository
2. **Verify secrets**: Ensure all three secrets are set correctly
3. **Check Vercel dashboard**: Look for build logs and errors
4. **Validate token**: Ensure token has correct permissions

### **Common Issues:**

- **Token format**: Ensure no extra spaces in the token
- **Organization ID**: Make sure you're using the Team ID, not username
- **Project ID**: Get from project settings, not project name

## 📞 **Support Resources**

- **Vercel Documentation**: https://vercel.com/docs/git/vercel-for-github
- **GitHub Actions Logs**: Check the Actions tab for detailed error messages
- **Vercel Dashboard**: Monitor deployments and build logs

---

**🎯 Ready for Automated Deployment!**

Once you complete these steps, your Royalty Repair CRM will have fully automated CI/CD with Vercel.