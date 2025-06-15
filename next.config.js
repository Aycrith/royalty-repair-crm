const { createHash } = require('crypto');

// Make bundle analyzer optional for production builds
let withBundleAnalyzer;
try {
  withBundleAnalyzer = require('@next/bundle-analyzer');
} catch (error) {
  // Fallback if bundle analyzer is not available
  withBundleAnalyzer = (config) => (nextConfig) => nextConfig;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // External packages for server components
  serverExternalPackages: ['bullmq', 'ioredis', 'msgpackr'],
  
  // Compiler optimizations for production
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  experimental: {
    // Enable webpack memory optimizations (Next.js 15.0.0+)
    webpackMemoryOptimizations: true,
    // Enable SWC transforms for better performance
    forceSwcTransforms: true,
    // Disable CSS optimization temporarily to avoid critters dependency issues
    optimizeCss: false,
    // Enable optimizePackageImports for better tree shaking
    optimizePackageImports: [
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      'lucide-react',
      'recharts',
      'framer-motion',
      'date-fns',
      'react-hook-form',
      '@tanstack/react-query'
    ],
  },
  
  // Environment variables for build-time safety
  env: {
    SKIP_BUILD_REDIS: process.env.NODE_ENV === 'production' ? 'true' : 'false',
    // Provide default Supabase values for build process
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://eztzatvxjcesmzduvpfz.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dHphdHZ4amNlc216ZHV2cGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NDExOTgsImV4cCI6MjA2NDMxNzE5OH0.IIehcYy2AVg5nBVKjY_pdiAJcDphHkUqdsEOTBEGNOU',
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Webpack configuration for better build stability
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize for production builds
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        // Reduce bundle size
        usedExports: true,
        sideEffects: false,
      };
    }
    
    // Handle potential module resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
};

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);