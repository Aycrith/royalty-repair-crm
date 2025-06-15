# Vercel Environment Variables Setup Script
# Run this script to add all required environment variables to your Vercel project

param(
    [Parameter(Mandatory=$false)]
    [string]$Token = "R8qBnwufbspnKwRn4i7kfL3l"
)

Write-Host "🚀 Setting up Vercel environment variables..." -ForegroundColor Green

# Define all environment variables
$envVars = @{
    "NEXT_PUBLIC_SUPABASE_URL" = "https://eztzatvxjcesmzduvpfz.supabase.co"
    "NEXT_PUBLIC_SUPABASE_ANON_KEY" = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dHphdHZ4amNlc216ZHV2cGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NDExOTgsImV4cCI6MjA2NDMxNzE5OH0.IIehcYy2AVg5nBVKjY_pdiAJcDphHkUqdsEOTBEGNOU"
    "SKIP_BUILD_REDIS" = "true"
    "NODE_ENV" = "production"
    "NEXT_PUBLIC_APP_NAME" = "Royalty Repair CRM"
    "NEXT_PUBLIC_APP_VERSION" = "1.0.0"
    "ENABLE_ANALYTICS" = "true"
    "ENABLE_ERROR_REPORTING" = "true"
    "ENABLE_PERFORMANCE_MONITORING" = "true"
    "ENABLE_BUNDLE_ANALYZER" = "false"
    "ENABLE_SOURCE_MAPS" = "false"
    "LOG_LEVEL" = "info"
    "ENABLE_REQUEST_LOGGING" = "true"
}

# Function to add environment variable
function Add-VercelEnv {
    param($Name, $Value, $Environment = "production")
    
    Write-Host "📝 Adding $Name..." -ForegroundColor Yellow
    
    # Create a temporary file with the value
    $tempFile = [System.IO.Path]::GetTempFileName()
    $Value | Out-File -FilePath $tempFile -Encoding UTF8 -NoNewline
    
    try {
        # Add the environment variable
        $result = vercel env add $Name $Environment --token=$Token < $tempFile 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Successfully added $Name" -ForegroundColor Green
        } else {
            Write-Host "⚠️ Warning: $Name may already exist or there was an issue: $result" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "❌ Error adding $Name`: $_" -ForegroundColor Red
    }
    finally {
        # Clean up temp file
        Remove-Item $tempFile -ErrorAction SilentlyContinue
    }
}

# Add all environment variables
foreach ($env in $envVars.GetEnumerator()) {
    Add-VercelEnv -Name $env.Key -Value $env.Value -Environment "production"
    Start-Sleep -Milliseconds 500  # Small delay to avoid rate limiting
}

Write-Host ""
Write-Host "🎉 Environment variables setup complete!" -ForegroundColor Green
Write-Host "📋 Next steps:" -ForegroundColor Blue
Write-Host "  1. Verify variables in Vercel dashboard" -ForegroundColor Cyan
Write-Host "  2. Trigger a new deployment: git push origin main" -ForegroundColor Cyan
Write-Host "  3. Monitor build logs for success" -ForegroundColor Cyan

Write-Host ""
Write-Host "🔗 Useful commands:" -ForegroundColor Blue
Write-Host "  vercel env ls --token=$Token" -ForegroundColor Gray
Write-Host "  vercel --prod --token=$Token" -ForegroundColor Gray