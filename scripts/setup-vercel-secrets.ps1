# Vercel Secrets Setup Script
# Run this script after importing your project to Vercel dashboard

param(
    [Parameter(Mandatory=$true)]
    [string]$OrgId,
    
    [Parameter(Mandatory=$true)]
    [string]$ProjectId
)

Write-Host "🚀 Setting up Vercel secrets for GitHub Actions..." -ForegroundColor Green

# Validate inputs
if ([string]::IsNullOrWhiteSpace($OrgId)) {
    Write-Error "Organization ID cannot be empty"
    exit 1
}

if ([string]::IsNullOrWhiteSpace($ProjectId)) {
    Write-Error "Project ID cannot be empty"
    exit 1
}

# Set GitHub secrets
Write-Host "📝 Adding VERCEL_ORG_ID..." -ForegroundColor Yellow
gh secret set VERCEL_ORG_ID --body $OrgId --repo Aycrith/royalty-repair-crm

Write-Host "📝 Adding VERCEL_PROJECT_ID..." -ForegroundColor Yellow
gh secret set VERCEL_PROJECT_ID --body $ProjectId --repo Aycrith/royalty-repair-crm

# Verify secrets
Write-Host "✅ Verifying secrets..." -ForegroundColor Yellow
$secrets = gh secret list --repo Aycrith/royalty-repair-crm

Write-Host "📋 Current GitHub Secrets:" -ForegroundColor Green
Write-Host $secrets

Write-Host "🎉 Vercel integration setup complete!" -ForegroundColor Green
Write-Host "Your next push to main branch will trigger automatic deployment." -ForegroundColor Cyan

# Usage instructions
Write-Host ""
Write-Host "📖 Usage:" -ForegroundColor Blue
Write-Host "  .\scripts\setup-vercel-secrets.ps1 -OrgId 'your_org_id' -ProjectId 'your_project_id'"
Write-Host ""
Write-Host "🔗 Get your IDs from:" -ForegroundColor Blue
Write-Host "  Organization ID: Vercel Dashboard → Settings → General → Team ID"
Write-Host "  Project ID: Project Settings → General → Project ID"