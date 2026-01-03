import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { DiscountModal } from "@/components/discount-modal"
import { generateLocalBusinessSchema } from "@/lib/schema"
import Script from "next/script"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate the LocalBusiness schema with default values
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppChat />
      <DiscountModal />
    </>
  )
}
