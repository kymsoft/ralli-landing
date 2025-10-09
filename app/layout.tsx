import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "RALLi Technologies - Empowering Tomorrow's Innovations",
  description:
    "Founded by four visionary women, RALLi Technologies leverages advanced AI and technology to drive transformative change across industries.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${sourceSansPro.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen bg-background">
          <Navbar/>
        {children}
        <Footer/>
        </div>
        <CookieBanner />
        </body>
    </html>
  )
}
