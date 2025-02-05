import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "I'm Blessed",
  description: "My Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className}`}
      >
        <Suspense fallback={null}>
          <div className="root-layout">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </Suspense>
      </body>
    </html>
  );
}