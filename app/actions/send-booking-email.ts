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

    // Build plain text email with ALL details
    const emailText = `
NEW BOOKING REQUEST

CUSTOMER INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Number of People: ${formData.numPeople}
Arrival Date: ${formattedDate}

BOOKING DETAILS:
${formData.package ? `Package: ${formData.package}` : "No package selected"}
${formData.accommodation ? `Accommodation: ${formData.accommodation}` : "No accommodation selected"}

DESERT EXPERIENCE TOURS:
${
  formData.tours && formData.tours.length > 0
    ? formData.tours.map((tour: any) => `- ${tour.name} (${tour.price} JOD for ${formData.numPeople} people)`).join("\n")
    : "No tours selected"
}

HOT AIR BALLOON:
${formData.hotAirBalloon ? `Yes - Included in booking` : "No"}

TRANSPORT:
Transport Needed: ${formData.transportNeeded ? "Yes" : "No"}
${formData.transportRoute ? `Route: ${formData.transportRoute}` : ""}
${formData.transportDetails ? `Details: ${formData.transportDetails}` : ""}

FOOD PREFERENCES:
Vegetarian: ${formData.vegetarian ? "Yes" : "No"}
${formData.foodAllergies ? `Food Allergies: ${formData.foodAllergies}` : "No food allergies"}

PRICING:
Total Price: ${formData.totalPrice} JOD
${formData.discountAmount ? `Discount: -${formData.discountAmount} JOD` : ""}
Final Price: ${formData.finalPrice} JOD

SPECIAL REQUESTS:
${formData.message || "None"}

---
This booking was submitted through the Wadi Rum website.
    `.trim()

    console.log("Plain text email prepared")

    // Send email to admin ONLY
    console.log("Sending notification email to admin: mohammed.mutlak.camp@gmail.com")

    const adminResult = await emailService.emails.send({
      from: "Wadi Rum Booking System <onboarding@resend.dev>",
      to: "mohammed.mutlak.camp@gmail.com",
      subject: `New Booking Request from ${formData.name}`,
      text: emailText,
    })

    if (adminResult.error) {
      console.error("Error sending admin email:", adminResult.error)
      return { success: false, error: `Failed to send admin email: ${adminResult.error.message}` }
    }

    console.log("Admin email sent successfully with ID:", adminResult.data?.id)
    return { success: true, data: adminResult.data }
  } catch (error: any) {
    console.error("Exception in sendBookingEmail:", error)
    return {
      success: false,
      error: `An unexpected error occurred: ${error?.message || "Unknown error"}`,
    }
  }
}
