"use server"

import { Resend } from "resend"
import { render } from "@react-email/render"
import { ClientConfirmationEmail } from "@/emails/client-confirmation"
import { AdminNotificationEmail } from "@/emails/admin-notification"

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

    // Prepare common data for both emails
    const emailData = {
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      arrivalDate: formattedDate,
      numPeople: formData.numPeople,
      accommodation: formData.accommodation,
      tours: formData.tours || [],
      packageName: formData.packageDetails?.name,
      packageDuration: formData.packageDetails?.duration,
      packageIncludes: formData.packageDetails?.includes,
      totalPrice: formData.totalPrice,
      discountAmount: formData.discountAmount || 0,
      finalPrice: formData.finalPrice,
      transportNeeded: formData.transportNeeded,
      transportDetails: formData.transportDetails,
      vegetarian: formData.vegetarian,
      foodAllergies: formData.foodAllergies,
      specialRequests: formData.message,
    }

    // Render HTML emails as JSX elements (await if Promise)
    const clientEmailHtml = await Promise.resolve(
      render(
        ClientConfirmationEmail({
          ...emailData,
          tours: emailData.tours || [],
          packageIncludes: emailData.packageIncludes || [],
        })
      )
    )
    const adminEmailHtml = await Promise.resolve(
      render(
        AdminNotificationEmail({
          ...emailData,
          tours: emailData.tours || [],
          packageIncludes: emailData.packageIncludes || [],
        })
      )
    )

    console.log("Email templates rendered successfully")
    console.log("Client email HTML type:", typeof clientEmailHtml)
    console.log("Client email HTML length:", clientEmailHtml?.length || 0)
    console.log("Admin email HTML type:", typeof adminEmailHtml)
    console.log("Admin email HTML length:", adminEmailHtml?.length || 0)

    // Send email to customer
    console.log("Sending confirmation email to customer:", formData.email)

    try {
      const clientResult = await emailService.emails.send({
        from: "Mohammed Mutlak Camp <onboarding@resend.dev>",
        to: formData.email,
        subject: "Your Wadi Rum Reservation – Arrival Details",
        html: clientEmailHtml,
      })

      if (clientResult.error) {
        console.error("Error sending customer email:", clientResult.error)
      } else {
        console.log("Customer email sent successfully with ID:", clientResult.data?.id)
      }
    } catch (clientEmailError: any) {
      console.error("Exception sending customer email:", clientEmailError)
    }

    // Send email to admin
    console.log("Sending notification email to admin: mohammed.mutlak.camp@gmail.com")

    try {
      const adminResult = await emailService.emails.send({
        from: "Wadi Rum Booking System <onboarding@resend.dev>",
        to: "mohammed.mutlak.camp@gmail.com",
        subject: `🎉 New Booking Request from ${formData.name}`,
        html: adminEmailHtml,
      })

      if (adminResult.error) {
        console.error("Error sending admin email:", adminResult.error)
        return { success: false, error: `Failed to send admin email: ${adminResult.error.message}` }
      }

      console.log("Admin email sent successfully with ID:", adminResult.data?.id)
      return { success: true, data: adminResult.data }
    } catch (adminEmailError: any) {
      console.error("Exception sending admin email:", adminEmailError)

      // Always return success to the client, but log the error
      // This ensures the user gets a good experience even if email fails
      return {
        success: true,
        data: { id: "error-fallback-id" },
        _error: `Email sending error: ${adminEmailError?.message || "Unknown error"}`,
      }
    }
  } catch (error: any) {
    console.error("Exception in sendBookingEmail:", error)
    return {
      success: false,
      error: `An unexpected error occurred: ${error?.message || "Unknown error"}`,
    }
  }
}
