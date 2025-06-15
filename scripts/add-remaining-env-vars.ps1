# Add Remaining Environment Variables to Vercel
# Run this script to add the missing environment variables

param(
    [Parameter(Mandatory=$false)]
    [string]$Token = "R8qBnwufbspnKwRn4i7kfL3l"
)

Write-Host "🔧 Adding remaining environment variables to Vercel..." -ForegroundColor Green

# Define remaining environment variables
$envVars = @{
    "SKIP_BUILD_REDIS" = "true"
    "NODE_ENV" = "production"
    "NEXT_PUBLIC_APP_NAME" = "Royalty Repair CRM"
    "NEXT_PUBLIC_APP_VERSION" = "1.0.0"
    "ENABLE_ANALYTICS" = "true"
    "ENABLE_ERROR_REPORTING" = "true"
    "ENABLE_PERFORMANCE_MONITORING" = "true"
    "LOG_LEVEL" = "info"
    "ENABLE_REQUEST_LOGGING" = "true"
}

# Function to add environment variable using echo
function Add-VercelEnvVar {
    param($Name, $Value)
    
    Write-Host "📝 Adding $Name..." -ForegroundColor Yellow
    
    try {
        # Use echo to pipe the value to vercel env add
        $result = echo $Value | vercel env add $Name production --token=$Token 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Successfully added $Name" -ForegroundColor Green
        } else {
            Write-Host "⚠️ $Name may already exist: $result" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "❌ Error adding $Name`: $_" -ForegroundColor Red
    }
    
    Start-Sleep -Milliseconds 500
}

# Add all environment variables
foreach ($env in $envVars.GetEnumerator()) {
    Add-VercelEnvVar -Name $env.Key -Value $env.Value
}

Write-Host ""
Write-Host "🎉 Environment variables setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Blue
Write-Host "  1. Click 'Deploy' in your Vercel dashboard" -ForegroundColor Cyan
Write-Host "  2. Monitor the build logs" -ForegroundColor Cyan
Write-Host "  3. Verify the deployment works" -ForegroundColor Cyan

Write-Host ""
Write-Host "🔍 Verify variables:" -ForegroundColor Blue
Write-Host "  vercel env ls --token=$Token" -ForegroundColor Gray