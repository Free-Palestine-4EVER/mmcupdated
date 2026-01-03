import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const OWNER_EMAIL = "mohammed.mutlak.camp@gmail.com"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, room, items, total, currency, language } = body

    // 1. Send email to Owner
    await resend.emails.send({
      from: "Wadi Rum Orders <orders@wadirum.org>", // Ensure this domain is verified in Resend, otherwise use 'onboarding@resend.dev' for testing if allowed, but user has wadirum.org
      to: OWNER_EMAIL,
      subject: `New Order from ${name} (Room ${room})`,
      html: `
        <h1>New Order Received</h1>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Room/Tent:</strong> ${room}</p>
        <p><strong>Language:</strong> ${language}</p>
        
        <h2>Order Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f4f4f4;">
            <th style="padding: 8px; text-align: left;">Item</th>
            <th style="padding: 8px; text-align: center;">Qty</th>
            <th style="padding: 8px; text-align: right;">Price</th>
            <th style="padding: 8px; text-align: right;">Total</th>
          </tr>
          ${items
          .map(
            (item: any) => `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name}</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">${item.price} JOD</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">${item.total} JOD</td>
            </tr>
          `
          )
          .join("")}
          <tr>
            <td colspan="3" style="padding: 8px; text-align: right; font-weight: bold;">Grand Total:</td>
            <td style="padding: 8px; text-align: right; font-weight: bold;">${total} JOD</td>
          </tr>
        </table>
        
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
          Currency selected by user: ${currency}
        </p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Order error:", error)
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 })
  }
}
