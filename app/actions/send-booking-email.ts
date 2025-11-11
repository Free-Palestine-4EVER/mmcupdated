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

    // Log all form data to see what we're receiving
    console.log("Full form data received:", JSON.stringify(formData, null, 2))

    // Build plain text email with ALL details
    let emailText = `
NEW BOOKING REQUEST

========================================
CUSTOMER INFORMATION
========================================
Name: ${formData.name || "N/A"}
Email: ${formData.email || "N/A"}
Phone: ${formData.phone || "N/A"}
Number of People: ${formData.numPeople || "N/A"}
Arrival Date: ${formattedDate}

========================================
BOOKING DETAILS
========================================
Package Selected: ${formData.package || "No package selected"}
Accommodation: ${formData.accommodation || "No accommodation selected"}

Package Details:
${formData.packageDetails ? `- Name: ${formData.packageDetails.name || "N/A"}
- Duration: ${formData.packageDetails.duration || "N/A"}
- Price: ${formData.packageDetails.price || "N/A"} JOD
- Includes: ${formData.packageDetails.includes ? formData.packageDetails.includes.join(", ") : "N/A"}` : "No package details"}

========================================
DESERT EXPERIENCE TOURS
========================================`

    if (formData.tours && formData.tours.length > 0) {
      formData.tours.forEach((tour: any, index: number) => {
        emailText += `
Tour ${index + 1}:
- Name: ${tour.name || "N/A"}
- Price: ${tour.price || "N/A"} JOD
- Number of People: ${formData.numPeople || "N/A"}`
      })
    } else {
      emailText += "\nNo additional tours selected"
    }

    emailText += `

========================================
TRANSPORT / TRANSFER
========================================
Transport Needed: ${formData.transportNeeded ? "YES" : "No"}
Transport Route Selected: ${formData.transportRoute || "Not specified"}
Transport Details: ${formData.transportDetails || "No additional transport details"}

========================================
FOOD PREFERENCES
========================================
Vegetarian: ${formData.vegetarian ? "YES" : "No"}
Food Allergies: ${formData.foodAllergies || "None specified"}

========================================
PRICING BREAKDOWN
========================================
Total Price (before discount): ${formData.totalPrice || 0} JOD
Discount Amount: ${formData.discountAmount ? `-${formData.discountAmount} JOD` : "0 JOD"}
FINAL PRICE: ${formData.finalPrice || formData.totalPrice || 0} JOD

========================================
SPECIAL REQUESTS / MESSAGE
========================================
${formData.message || "No special requests"}

========================================
This booking was submitted through the Wadi Rum website.
Timestamp: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Amman" })} (Jordan Time)
`

    emailText = emailText.trim()

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
