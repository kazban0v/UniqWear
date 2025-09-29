import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Toaster } from "sonner"
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"
import { PromotionalBanner } from "@/components/promotional-banner"
import { Navbar } from "@/components/navbar"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "UniqWear",
  description:
    "«Откройте для себя IT футболки премиум-качества с культовыми дизайнами, вдохновлёнными Python, Linux, GitHub, AI и многим другим,",
  keywords: "IT T-Shirts | Python, Linux, GitHub, AI, Coding Merchandise",
  authors: [{ name: "AnimeWear" }],
  openGraph: {
    title: "UniqWear",
    description: "Выразите свою страсть к технологиям с нашими IT футболками",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <ThemeProvider>
          <PromotionalBanner />
          <Navbar />
          <PageTransition>
            <main>
              {children}
              <FeaturesSection />
            </main>
          </PageTransition>
          <Footer />
          <WhatsAppButton />
          <Toaster position="bottom-right" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
