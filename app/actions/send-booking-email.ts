"use server"

import { Resend } from "resend"
import { render } from "@react-email/render"
import { ClientConfirmationEmail } from "@/emails/client-confirmation"

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
    // Return mock service as fallback even if initialization fails
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

export async function sendBookingEmail(formData: any) {
  try {
    console.log("Starting email sending process...")
    console.log("API Key available:", !!process.env.RESEND_API_KEY)

    // Format the date
    const formattedDate = formData.date
      ? new Date(formData.date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      : "Not specified"

    // Log all form data to see what we're receiving
    console.log("Full form data received:", JSON.stringify(formData, null, 2))

    // Build tours HTML
    let toursHTML = ''
    if (formData.tours && formData.tours.length > 0) {
      formData.tours.forEach((tour: any, index: number) => {
        const tourName = tour.name || tour || "N/A"
        const pricePerPerson = tour.price !== undefined && tour.price !== null ? tour.price : "N/A"
        const totalForTour = tour.totalPrice !== undefined && tour.totalPrice !== null
          ? tour.totalPrice
          : (tour.price !== undefined && tour.price !== null && formData.numPeople
            ? tour.price * formData.numPeople
            : "N/A")

        toursHTML += `
          <div style="background: #fff8f0; border-left: 4px solid #d97706; padding: 15px; margin-bottom: 12px; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #d97706; font-size: 16px;">Tour ${index + 1}: ${tourName}</h4>
            <table style="width: 100%; font-size: 14px;">
              <tr>
                <td style="padding: 4px 0; color: #666;">Price per person:</td>
                <td style="padding: 4px 0; text-align: right; font-weight: 600;">${pricePerPerson} JOD</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #666;">Number of people:</td>
                <td style="padding: 4px 0; text-align: right; font-weight: 600;">${formData.numPeople || "N/A"}</td>
              </tr>
              <tr style="border-top: 1px solid #fde68a;">
                <td style="padding: 8px 0 4px 0; color: #92400e; font-weight: 600;">Tour Total:</td>
                <td style="padding: 8px 0 4px 0; text-align: right; font-weight: 700; color: #d97706; font-size: 16px;">${totalForTour} JOD</td>
              </tr>
            </table>
          </div>`
      })
    } else {
      toursHTML = '<p style="color: #999; font-style: italic;">No additional tours selected</p>'
    }

    // Build HTML email
    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <!-- Main Container -->
        <table role="presentation" style="max-width: 650px; width: 100%; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 12px; overflow: hidden;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                🌙 New Booking Request
              </h1>
              <p style="margin: 10px 0 0 0; color: #fef3c7; font-size: 14px;">Wadi Rum Desert Experience</p>
            </td>
          </tr>

          <!-- Customer Information -->
          <tr>
            <td style="padding: 30px;">
              <div style="border-left: 4px solid #3b82f6; padding-left: 16px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 20px; display: flex; align-items: center;">
                  👤 Customer Information
                </h2>
                <table style="width: 100%; font-size: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; width: 40%;">Name:</td>
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
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Number of People:</td>
                    <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formData.numPeople || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Arrival Date:</td>
                    <td style="padding: 8px 0; color: #d97706; font-weight: 700; font-size: 16px;">${formattedDate}</td>
                  </tr>
                </table>
              </div>

              <!-- Booking Details -->
              <div style="border-left: 4px solid #8b5cf6; padding-left: 16px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 20px;">📋 Booking Details</h2>
                <table style="width: 100%; font-size: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; width: 40%;">Package:</td>
                    <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formData.package || "No package selected"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Accommodation:</td>
                    <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formData.accommodation || "No accommodation selected"}</td>
                  </tr>
                </table>
                ${formData.packageDetails ? `
                <div style="background: #f5f3ff; padding: 15px; margin-top: 12px; border-radius: 6px;">
                  <p style="margin: 0 0 8px 0; font-weight: 600; color: #6b21a8;">Package Details:</p>
                  <ul style="margin: 0; padding-left: 20px; color: #4c1d95;">
                    <li>Name: ${formData.packageDetails.name || "N/A"}</li>
                    <li>Duration: ${formData.packageDetails.duration || "N/A"}</li>
                    <li>Price: ${formData.packageDetails.price || "N/A"} JOD</li>
                    ${formData.packageDetails.includes ? `<li>Includes: ${formData.packageDetails.includes.join(", ")}</li>` : ''}
                  </ul>
                </div>
                ` : ''}
              </div>

              <!-- Desert Experience Tours -->
              <div style="border-left: 4px solid #d97706; padding-left: 16px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 20px;">🏜️ Desert Experience Tours</h2>
                ${toursHTML}
              </div>

              <!-- Transport -->
              <div style="border-left: 4px solid #10b981; padding-left: 16px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 20px;">🚗 Transport / Transfer</h2>
                <table style="width: 100%; font-size: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; width: 40%;">Transport Needed:</td>
                    <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formData.transportNeeded ? "✅ YES" : "❌ No"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Route Selected:</td>
                    <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formData.transportRoute || "Not specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Details:</td>
                    <td style="padding: 8px 0; color: #111827;">${formData.transportDetails || "No additional transport details"}</td>
                  </tr>
                </table>
              </div>

              <!-- Food Preferences -->
              <div style="border-left: 4px solid #ec4899; padding-left: 16px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 20px;">🍽️ Food Preferences</h2>
                <table style="width: 100%; font-size: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; width: 40%;">Vegetarian:</td>
                    <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formData.vegetarian ? "✅ YES" : "❌ No"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280;">Food Allergies:</td>
                    <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formData.foodAllergies || "None specified"}</td>
                  </tr>
                </table>
              </div>

              <!-- Pricing -->
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 20px; border-radius: 8px; margin-bottom: 24px; border: 2px solid #f59e0b;">
                <h2 style="margin: 0 0 16px 0; color: #92400e; font-size: 20px;">💰 Pricing Breakdown</h2>
                <table style="width: 100%; font-size: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #78350f;">Subtotal (before discount):</td>
                    <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #92400e;">${formData.totalPrice || 0} JOD</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #78350f;">Discount Amount:</td>
                    <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #dc2626;">${formData.discountAmount ? `-${formData.discountAmount} JOD` : "0 JOD"}</td>
                  </tr>
                  <tr style="border-top: 2px solid #f59e0b;">
                    <td style="padding: 12px 0 0 0; font-size: 18px; font-weight: 700; color: #92400e;">FINAL PRICE:</td>
                    <td style="padding: 12px 0 0 0; text-align: right; font-size: 24px; font-weight: 800; color: #d97706;">${formData.finalPrice || formData.totalPrice || 0} JOD</td>
                  </tr>
                </table>
              </div>

              <!-- Special Requests -->
              ${formData.message ? `
              <div style="border-left: 4px solid #6366f1; padding-left: 16px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; color: #1f2937; font-size: 20px;">📝 Special Requests / Message</h2>
                <div style="background: #f0f9ff; padding: 15px; border-radius: 6px; color: #1e3a8a; line-height: 1.6; white-space: pre-wrap;">${formData.message}</div>
              </div>
              ` : ''}

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1f2937; padding: 20px 30px; text-align: center;">
              <p style="margin: 0 0 8px 0; color: #9ca3af; font-size: 13px;">
                Submitted via <strong style="color: #fbbf24;">Wadi Rum Website</strong>
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
NEW BOOKING REQUEST - ${formData.name}

CUSTOMER INFORMATION
Name: ${formData.name || "N/A"}
Email: ${formData.email || "N/A"}
Phone: ${formData.phone || "N/A"}
Number of People: ${formData.numPeople || "N/A"}
Arrival Date: ${formattedDate}

BOOKING DETAILS
Package: ${formData.package || "No package selected"}
Accommodation: ${formData.accommodation || "No accommodation selected"}

FINAL PRICE: ${formData.finalPrice || formData.totalPrice || 0} JOD

${formData.message ? `SPECIAL REQUESTS:\n${formData.message}` : ''}

Timestamp: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Amman" })} (Jordan Time)
`.trim()

    console.log("HTML email prepared")

    // Send email to admin ONLY
    console.log("Sending notification email to admin: mohammed.mutlak.camp@gmail.com")

    const adminResult = await emailService.emails.send({
      from: "Wadi Rum Booking System <reservations@wadirum.org>",
      to: "mohammed.mutlak.camp@gmail.com",
      subject: `🌙 New Booking from ${formData.name} - ${formData.finalPrice || formData.totalPrice || 0} JOD`,
      html: emailHTML,
      text: emailText,
    })

    if (adminResult.error) {
      console.error("Error sending admin email:", adminResult.error)
      return { success: false, error: `Failed to send admin email: ${adminResult.error.message}` }
    }

    console.log("Admin email sent successfully with ID:", adminResult.data?.id)

    // Client confirmation handled by n8n triggered by admin email

    return { success: true, data: adminResult.data }
  } catch (error: any) {
    console.error("Exception in sendBookingEmail:", error)
    return {
      success: false,
      error: `An unexpected error occurred: ${error?.message || "Unknown error"}`,
    }
  }
}
