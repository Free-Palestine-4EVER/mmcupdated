"use server"

import { Resend } from "resend"

// Enhanced fallback mechanism for development and production
const getEmailService = () => {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
        console.warn("⚠️ RESEND_API_KEY not found. Using mock email service.")
        return {
            emails: {
                send: async (options: any) => {
                    console.log("📧 MOCK EMAIL:", options)
                    return {
                        data: { id: "mock-email-id" },
                        error: null,
                    }
                },
            },
        }
    }

    try {
        return new Resend(apiKey)
    } catch (error) {
        console.error("Failed to initialize Resend:", error)
        return {
            emails: {
                send: async (options: any) => {
                    console.log("📧 FALLBACK MOCK EMAIL (after Resend init error):", options)
                    return {
                        data: { id: "fallback-mock-email-id" },
                        error: null,
                    }
                },
            },
        }
    }
}

// Get email service (real or mock)
const emailService = getEmailService()

interface TransportFormData {
    name: string
    email: string
    phone: string
    message: string
    fromLocation: string
    toLocation: string
    travelDate: string
    passengers: number
    price: number | null
}

export async function sendTransportEmail(formData: TransportFormData) {
    try {
        console.log("Starting transport email sending process...")
        console.log("API Key available:", !!process.env.RESEND_API_KEY)

        // Format the date
        const formattedDate = formData.travelDate
            ? new Date(formData.travelDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })
            : "Not specified"

        // Log all form data
        console.log("Transport form data received:", JSON.stringify(formData, null, 2))

        // Build HTML email
        const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Transport Booking Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <!-- Main Container -->
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 12px; overflow: hidden;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                🚗 New Transport Booking
              </h1>
              <p style="margin: 10px 0 0 0; color: #a7f3d0; font-size: 14px;">Jordan Transport Service Request</p>
            </td>
          </tr>

          <!-- Route Information -->
          <tr>
            <td style="padding: 30px;">
              <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 24px; border-radius: 12px; margin-bottom: 24px; border: 2px solid #10b981;">
                <h2 style="margin: 0 0 16px 0; color: #065f46; font-size: 18px; text-align: center;">📍 Route Details</h2>
                <table style="width: 100%; font-size: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #065f46; font-weight: 600;">From:</td>
                    <td style="padding: 8px 0; text-align: right; color: #059669; font-weight: 700; font-size: 18px;">${formData.fromLocation || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #065f46; font-weight: 600;">To:</td>
                    <td style="padding: 8px 0; text-align: right; color: #059669; font-weight: 700; font-size: 18px;">${formData.toLocation || "N/A"}</td>
                  </tr>
                  <tr style="border-top: 1px solid #a7f3d0;">
                    <td style="padding: 12px 0 8px 0; color: #065f46; font-weight: 600;">Travel Date:</td>
                    <td style="padding: 12px 0 8px 0; text-align: right; color: #047857; font-weight: 600;">${formattedDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #065f46; font-weight: 600;">Passengers:</td>
                    <td style="padding: 8px 0; text-align: right; color: #047857; font-weight: 600;">${formData.passengers || "N/A"}</td>
                  </tr>
                  ${formData.price ? `
                  <tr style="border-top: 2px solid #10b981;">
                    <td style="padding: 16px 0 8px 0; color: #065f46; font-size: 18px; font-weight: 700;">PRICE:</td>
                    <td style="padding: 16px 0 8px 0; text-align: right; color: #059669; font-weight: 800; font-size: 28px;">${formData.price} JOD</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <!-- Customer Information -->
              <div style="border-left: 4px solid #3b82f6; padding-left: 16px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 18px;">👤 Customer Information</h2>
                <table style="width: 100%; font-size: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; width: 35%;">Name:</td>
                    <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formData.name || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #2563eb; text-decoration: none;">${formData.email || "N/A"}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
                    <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formData.phone || "N/A"}</td>
                  </tr>
                </table>
              </div>

              <!-- Additional Details -->
              ${formData.message ? `
              <div style="border-left: 4px solid #8b5cf6; padding-left: 16px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 18px;">📝 Additional Details</h2>
                <div style="background: #f5f3ff; padding: 15px; border-radius: 6px; color: #4c1d95; line-height: 1.6; white-space: pre-wrap;">${formData.message}</div>
              </div>
              ` : ''}

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 20px 30px; text-align: center;">
              <p style="margin: 0 0 8px 0; color: #9ca3af; font-size: 13px;">
                Submitted via <strong style="color: #10b981;">Transport Booking Form</strong>
              </p>
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                ${new Date().toLocaleString("en-US", { timeZone: "Asia/Amman" })} (Jordan Time)
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`

        // Plain text fallback
        const emailText = `
NEW TRANSPORT BOOKING REQUEST

ROUTE DETAILS
From: ${formData.fromLocation || "N/A"}
To: ${formData.toLocation || "N/A"}
Travel Date: ${formattedDate}
Passengers: ${formData.passengers || "N/A"}
Price: ${formData.price ? `${formData.price} JOD` : "Not calculated"}

CUSTOMER INFORMATION
Name: ${formData.name || "N/A"}
Email: ${formData.email || "N/A"}
Phone: ${formData.phone || "N/A"}

${formData.message ? `ADDITIONAL DETAILS:\n${formData.message}` : ''}

Timestamp: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Amman" })} (Jordan Time)
`.trim()

        console.log("HTML email prepared")

        // Send email to admin
        console.log("Sending transport notification email to admin: mohammed.mutlak.camp@gmail.com")

        const adminResult = await emailService.emails.send({
            from: "Jordan Transport Service <reservations@wadirum.org>",
            to: "mohammed.mutlak.camp@gmail.com",
            subject: `🚗 Transport Booking: ${formData.fromLocation} → ${formData.toLocation} (${formData.name})`,
            html: emailHTML,
            text: emailText,
        })

        if (adminResult.error) {
            console.error("Error sending admin email:", adminResult.error)
            return { success: false, error: `Failed to send email: ${(adminResult.error as any).message}` }
        }

        console.log("Admin email sent successfully with ID:", adminResult.data?.id)

        return { success: true, data: adminResult.data }
    } catch (error: any) {
        console.error("Exception in sendTransportEmail:", error)
        return {
            success: false,
            error: `An unexpected error occurred: ${error?.message || "Unknown error"}`,
        }
    }
}
