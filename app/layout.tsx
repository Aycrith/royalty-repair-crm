import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: "Royalty Repair CRM",
  description: "Enterprise-grade Customer Relationship Management system for repair service businesses",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            *,*::before,*::after{box-sizing:border-box}
            html{line-height:1.15;-webkit-text-size-adjust:100%}
            body{margin:0;font-family:system-ui,-apple-system,sans-serif;background-color:rgb(249 250 251)}
            .loading-skeleton{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}
            @keyframes loading{0%{background-position:200% 0}100%{background-position:-200% 0}}
          `
        }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}