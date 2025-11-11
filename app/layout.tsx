import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { DiscountModal } from "@/components/discount-modal"
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wadi Rum Tours | Authentic Bedouin Desert Experience in Jordan",
  description:
    "Experience the authentic Bedouin way of life in Wadi Rum, Jordan. Book your desert adventure with jeep tours, camel rides, camping, and guided hikes in the UNESCO World Heritage site.",
  keywords:
    "Wadi Rum, Jordan desert tours, Bedouin experience, desert camping, jeep tours Wadi Rum, camel rides Jordan, Wadi Rum accommodation, Wadi Rum travel guide",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon1.png" }],
    apple: { url: "/apple-icon.png" },
    other: [
      {
        rel: "mask-icon",
        url: "/icon0.svg",
      },
    ],
  },
  openGraph: {
    images: [
      {
        url: "/images/traditional-camp.jpg", // Relative path works better for OG images
        width: 1200,
        height: 630,
        alt: "Mohammed Mutlak Camp - Traditional Bedouin Camp in Wadi Rum",
      },
    ],
    siteName: "Mohammed Mutlak Camp",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mutlak Camp - Authentic Wadi Rum Desert Experiences",
    description:
      "Experience the magic of Wadi Rum with authentic Bedouin tours, jeep safaris, camping, and climbing adventures.",
    images: ["/images/traditional-camp.jpg"], // Relative path works better for Twitter cards
    creator: "@MohammedMutlakCamp",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate the LocalBusiness schema with default values
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-667842552"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-667842552');
            `,
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Add explicit meta tags for Facebook */}
        <meta property="og:image" content="/images/traditional-camp.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mohammed Mutlak Camp - Traditional Bedouin Camp in Wadi Rum" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppChat />
        <DiscountModal />
        <Analytics />
      </body>
    </html>
  )
}
