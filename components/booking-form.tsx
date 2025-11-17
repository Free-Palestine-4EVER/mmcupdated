"use client"

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"

// Import the server action at the top of the file
import { sendBookingEmail } from "@/app/actions/send-booking-email"

// Define types for our data structures
interface AccommodationOption {
  id: string
  name: string
  price: number
  description: string
}

interface PriceTier {
  minPeople: number
  maxPeople: number
  price: number
}

interface TourOption {
  id: string
  name: string
  prices: PriceTier[]
}

interface PackageOption {
  id: string
  name: string
  price: number
  description: string
  duration: string
  includes: string[]
}

interface FormData {
  name: string
  email: string
  phone: string
  date: string
  numPeople: number
  accommodation: string
  message: string
  package: string
  transportNeeded: boolean
  transportDetails: string
  transportRoute: string
  vegetarian: boolean
  foodAllergies: string
}

interface TransportRoute {
  id: string
  from: string
  to: string
  price: number
  description: string
}

// Define accommodation types and their prices
const accommodationOptions: AccommodationOption[] = [
  { id: "tented-camp", name: "Sleeping at the Tented Camp", price: 25, description: "With breakfast and dinner" },
  { id: "under-stars", name: "Sleeping Under the Stars", price: 40, description: "With dinner and breakfast" },
  { id: "luxury-bubble", name: "Luxury Bubble Camp", price: 120, description: "Per person" },
  { id: "normal-bubble", name: "Normal Bubble Camp", price: 80, description: "Per person" },
]

// Define package options with more details
const packageOptions: PackageOption[] = [
  {
    id: "classic-adventure",
    name: "Classic Adventure Package (2 Days)",
    price: 120,
    description: "Per person",
    duration: "2 days, 1 night",
    includes: [
      "Full-day jeep tour",
      "Half-day hiking adventure",
      "Accommodation at tented camp",
      "All meals (2 breakfasts, 1 lunch, 1 dinner)",
      "English-speaking Bedouin guide",
      "Transportation within Wadi Rum",
    ],
  },
  {
    id: "desert-explorer",
    name: "Desert Explorer Package (2 Days)",
    price: 135,
    description: "Per person",
    duration: "2 days, 1 night",
    includes: [
      "Half-day jeep tour",
      "Camel ride at sunset",
      "Guided hiking experience",
      "Accommodation at tented camp",
      "All meals (2 breakfasts, 1 lunch, 1 dinner)",
      "English-speaking Bedouin guide",
      "Transportation within Wadi Rum",
    ],
  },
  {
    id: "bedouin-experience",
    name: "Bedouin Experience Package (2 Days)",
    price: 150,
    description: "Per person",
    duration: "2 days, 1 night",
    includes: [
      "Traditional Bedouin activities",
      "Cooking class with local ingredients",
      "Tea ceremony and cultural discussions",
      "Accommodation at tented camp",
      "All meals (2 breakfasts, 1 lunch, 1 dinner)",
      "English-speaking Bedouin guide",
      "Transportation within Wadi Rum",
    ],
  },
  {
    id: "wadi-rum-discovery",
    name: "Wadi Rum Discovery Package (3 Days)",
    price: 200,
    description: "Per person",
    duration: "3 days, 2 nights",
    includes: [
      "Full-day jeep tour",
      "Guided hiking to scenic viewpoints",
      "Camel ride experience",
      "Stargazing session",
      "Accommodation at tented camp (2 nights)",
      "All meals (3 breakfasts, 2 lunches, 2 dinners)",
      "English-speaking Bedouin guide",
      "Transportation within Wadi Rum",
    ],
  },
  {
    id: "ultimate-adventure",
    name: "Ultimate Adventure Package (3 Days)",
    price: 230,
    description: "Per person",
    duration: "3 days, 2 nights",
    includes: [
      "Jebel Um Addami climbing expedition",
      "Remote desert exploration",
      "Overnight bivouac camping experience",
      "One night at tented camp",
      "All meals (3 breakfasts, 3 lunches, 2 dinners)",
      "English-speaking Bedouin guide",
      "Transportation within Wadi Rum",
    ],
  },
  {
    id: "jordan-heights",
    name: "Jordan Heights Package (3 Days)",
    price: 250,
    description: "Per person",
    duration: "3 days, 2 nights",
    includes: [
      "Um Addami climbing (Day 1)",
      "Um Fruth Bridge and Burdah Rock climbing (Day 2)",
      "Various rock formations exploration (Day 3)",
      "Accommodation at tented camp (2 nights)",
      "All meals (3 breakfasts, 3 lunches, 2 dinners)",
      "English-speaking Bedouin guide",
      "Transportation within Wadi Rum",
    ],
  },
]

// Define transport routes
const transportRoutes: TransportRoute[] = [
  {
    id: "amman-wadirum",
    from: "Amman",
    to: "Wadi Rum",
    price: 90,
    description: "Direct transfer from Amman city to Wadi Rum (4 hours, 320 km)",
  },
  {
    id: "amman-airport-wadirum",
    from: "Amman Airport",
    to: "Wadi Rum",
    price: 110,
    description: "Direct airport pickup from Queen Alia International Airport (4 hours, 330 km)",
  },
  {
    id: "petra-wadirum",
    from: "Petra",
    to: "Wadi Rum",
    price: 45,
    description: "Convenient connection between UNESCO sites (1.5 hours, 100 km)",
  },
  {
    id: "aqaba-wadirum",
    from: "Aqaba",
    to: "Wadi Rum",
    price: 25,
    description: "Quick transfer from Red Sea resort town (1 hour, 60 km)",
  },
  {
    id: "aqaba-airport-wadirum",
    from: "Aqaba Airport",
    to: "Wadi Rum",
    price: 35,
    description: "Direct airport pickup from King Hussein International Airport (1 hour, 65 km)",
  },
]

// Tour emojis mapping
const tourEmojis: Record<string, string> = {
  "half-day-jeep": "🚙",
  "full-day-jeep": "🚗",
  "two-hour-jeep": "🚕",
  "beduin-way": "🏕️",
  "jebel-khash": "⛰️",
  "jebel-khash-2": "🏔️",
  "hot-air-balloon": "🎈",
  "burdah-arch": "🧗",
  "all-in-one": "🌟",
  "um-addami": "⛰️",
  "camel-rides": "🐪",
  "sandboarding": "🏂",
  "trekking": "🥾",
  "trekking-2-days": "🎒",
  "night-walk": "🌙",
  "stargazing": "⭐",
}

// Update the tourOptions array to ensure all options have a 7-100 people tier with the same price as 4-6 people
const tourOptions: TourOption[] = [
  {
    id: "half-day-jeep",
    name: "Half Day Jeep Tour",
    prices: [
      { minPeople: 1, maxPeople: 3, price: 50 },
      { minPeople: 4, maxPeople: 6, price: 45 },
      { minPeople: 7, maxPeople: 100, price: 35 },
    ],
  },
  {
    id: "full-day-jeep",
    name: "Full Day Jeep Tour",
    prices: [
      { minPeople: 1, maxPeople: 3, price: 65 },
      { minPeople: 4, maxPeople: 6, price: 55 },
      { minPeople: 7, maxPeople: 100, price: 45 },
    ],
  },
  {
    id: "beduin-way",
    name: "The Beduin Way",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 140 },
      { minPeople: 2, maxPeople: 3, price: 100 },
      { minPeople: 4, maxPeople: 6, price: 80 },
      { minPeople: 7, maxPeople: 100, price: 80 }, // Same price as 4-6 persons
    ],
  },
  {
    id: "jebel-khash",
    name: "Jebel Khash Route",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 140 },
      { minPeople: 2, maxPeople: 3, price: 90 },
      { minPeople: 4, maxPeople: 6, price: 80 },
      { minPeople: 7, maxPeople: 100, price: 80 }, // Same price as 4-6 persons
    ],
  },
  {
    id: "jebel-khash-2",
    name: "Jebel Khash 2 Days",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 180 },
      { minPeople: 2, maxPeople: 3, price: 110 },
      { minPeople: 4, maxPeople: 6, price: 100 },
      { minPeople: 7, maxPeople: 100, price: 100 }, // Same price as 4-6 persons
    ],
  },
  {
    id: "hot-air-balloon",
    name: "Hot Air Balloon",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 200 },
      { minPeople: 2, maxPeople: 6, price: 185 },
      { minPeople: 7, maxPeople: 100, price: 185 }, // Same price as 2-6 persons
    ],
  },
  {
    id: "burdah-arch",
    name: "Burdah Arch Scrambling",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 110 },
      { minPeople: 2, maxPeople: 3, price: 80 },
      { minPeople: 4, maxPeople: 6, price: 70 },
      { minPeople: 7, maxPeople: 100, price: 70 }, // Same price as 4-6 persons
    ],
  },
  {
    id: "all-in-one",
    name: "All in One Day",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 110 },
      { minPeople: 2, maxPeople: 3, price: 90 },
      { minPeople: 4, maxPeople: 6, price: 75 },
      { minPeople: 7, maxPeople: 100, price: 75 }, // Same price as 4-6 persons
    ],
  },
  {
    id: "um-addami",
    name: "Jebel Um Addami Climbing",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 110 },
      { minPeople: 2, maxPeople: 3, price: 80 },
      { minPeople: 4, maxPeople: 6, price: 70 },
      { minPeople: 7, maxPeople: 100, price: 70 }, // Same price as 4-6 persons
    ],
  },
  {
    id: "camel-rides",
    name: "Camel Rides",
    prices: [
      { minPeople: 1, maxPeople: 100, price: 25 }, // Fixed price per person
    ],
  },
  {
    id: "sandboarding",
    name: "Sandboarding",
    prices: [
      { minPeople: 1, maxPeople: 100, price: 20 }, // Fixed price per person
    ],
  },
  {
    id: "trekking",
    name: "Trekking in the Wild",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 140 },
      { minPeople: 2, maxPeople: 5, price: 100 },
      { minPeople: 6, maxPeople: 100, price: 80 },
    ],
  },
  {
    id: "trekking-2-days",
    name: "Trekking in the Wild 2 Days",
    prices: [
      { minPeople: 1, maxPeople: 1, price: 190 },
      { minPeople: 2, maxPeople: 5, price: 150 },
      { minPeople: 6, maxPeople: 100, price: 130 },
    ],
  },
  {
    id: "two-hour-jeep",
    name: "2 Hours Jeep Tour",
    prices: [
      { minPeople: 1, maxPeople: 100, price: 25 }, // Fixed price per person, no discounts
    ],
  },
  {
    id: "night-walk",
    name: "Night Walk Tour",
    prices: [
      { minPeople: 5, maxPeople: 100, price: 10 }, // Fixed price per person, minimum 5 persons
    ],
  },
  {
    id: "stargazing",
    name: "Stargazing Education",
    prices: [
      { minPeople: 3, maxPeople: 3, price: 33.33 }, // 100 JOD for 3 persons (33.33 per person)
      { minPeople: 4, maxPeople: 100, price: 25 }, // +15 JOD per additional person
    ],
  },
]

// Helper function to get tour price based on number of people
const getTourPrice = (tour: TourOption, numPeople: number): number => {
  const priceTier = tour.prices.find((tier) => numPeople >= tier.minPeople && numPeople <= tier.maxPeople)
  return priceTier ? priceTier.price : tour.prices[0].price
}

// Helper function to calculate stargazing price
const calculateStargazingPrice = (numPeople: number): number => {
  if (numPeople <= 3) {
    return 100 / numPeople // 100 JOD divided by number of people
  } else {
    return (100 + (numPeople - 3) * 15) / numPeople // Base 100 JOD + 15 JOD per additional person, divided by total people
  }
}

interface BookingFormProps {
  tourName?: string
  packageName?: string
}

export function BookingForm({ tourName, packageName }: BookingFormProps) {
  // Get today's date in YYYY-MM-DD format for min attribute and default value
  const today = new Date()
  const todayString = today.toISOString().split('T')[0]

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: todayString,
    numPeople: 1,
    accommodation: "",
    message: "",
    package: packageName || "",
    transportNeeded: false,
    transportDetails: "",
    transportRoute: "",
    vegetarian: false,
    foodAllergies: "",
  })

  const [transportDirection, setTransportDirection] = useState<{ [key: string]: boolean }>({})

  const [selectedTours, setSelectedTours] = useState<string[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [discountedPrice, setDiscountedPrice] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const DISCOUNT_PERCENTAGE = 0.10 // 10% discount

  // Initialize selected tours if tourName is provided
  useEffect(() => {
    if (tourName) {
      const tour = tourOptions.find((t) => t.name === tourName)
      if (tour && !selectedTours.includes(tour.id)) {
        setSelectedTours([tour.id])
      }
    }
  }, [tourName])

  // Initialize selected package if packageName is provided
  useEffect(() => {
    if (packageName) {
      const pkg = packageOptions.find((p) => p.name === packageName)
      if (pkg) {
        setFormData((prev) => ({
          ...prev,
          package: pkg.id,
        }))
      }
    }
  }, [packageName])

  // Calculate total price whenever relevant fields change
  useEffect(() => {
    let total = 0
    let hotAirBalloonPrice = 0
    let packagePrice = 0
    let toursPrice = 0
    let transportPrice = 0

    // Check if any selected tour qualifies for free tented camp accommodation
    const qualifiesForFreeTentedCamp = selectedTours.some((tourId) => {
      return tourId !== "sandboarding" && tourId !== "camel-rides" && tourId !== "hot-air-balloon" && tourId !== "two-hour-jeep"
    })

    // Add accommodation price (free tented camp if qualifying tour is selected) - only if no package or "no-package" selected
    if ((!formData.package || formData.package === "no-package") && formData.accommodation && formData.accommodation !== "none") {
      const selectedAccommodation = accommodationOptions.find((option) => option.id === formData.accommodation)
      if (selectedAccommodation) {
        // If tented camp is selected and user has a qualifying tour, it's free
        if (qualifiesForFreeTentedCamp && formData.accommodation === "tented-camp") {
          total += 0 // Free accommodation
        } else {
          total += selectedAccommodation.price * formData.numPeople
        }
      }
    }

    // Add package price if selected (packages don't get discounts)
    if (formData.package && formData.package !== "no-package") {
      const selectedPackage = packageOptions.find((option) => option.id === formData.package)
      if (selectedPackage) {
        packagePrice = selectedPackage.price * formData.numPeople
        total += packagePrice
      }
    }

    // Add tour prices - now ALWAYS included, whether package is selected or not
    selectedTours.forEach((tourId) => {
      const tour = tourOptions.find((option) => option.id === tourId)
      if (tour) {
        if (tour.id === "stargazing") {
          // Special calculation for stargazing
          const stargazingPrice = calculateStargazingPrice(formData.numPeople) * formData.numPeople
          toursPrice += stargazingPrice
          total += stargazingPrice
        } else if (tour.id === "hot-air-balloon") {
          // Hot air balloon - no discount, track separately
          const price = getTourPrice(tour, formData.numPeople) * formData.numPeople
          hotAirBalloonPrice += price
          total += price
        } else {
          const price = getTourPrice(tour, formData.numPeople) * formData.numPeople
          toursPrice += price
          total += price
        }
      }
    })

    // Add transport price if selected (transport does NOT get discount)
    if (formData.transportRoute) {
      const selectedRoute = transportRoutes.find((route) => route.id === formData.transportRoute)
      if (selectedRoute) {
        transportPrice = selectedRoute.price
        total += transportPrice
      }
    }

    setTotalPrice(total)

    // Calculate discounted price (15% off for tours only, excluding hot air balloon, packages, AND transport)
    // Only tours (toursPrice) get the discount, not packages, hot air balloon, or transport
    const discountedToursPrice = toursPrice * (1 - DISCOUNT_PERCENTAGE)
    const discounted = packagePrice + hotAirBalloonPrice + transportPrice + discountedToursPrice + (total - packagePrice - hotAirBalloonPrice - transportPrice - toursPrice)
    setDiscountedPrice(discounted)
  }, [formData.accommodation, formData.numPeople, selectedTours, formData.package, formData.transportRoute])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRemoveTour = (tourId: string) => {
    setSelectedTours((prev) => prev.filter((id) => id !== tourId))
  }

  // Update the handleSubmit function to handle email errors gracefully
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Get package details if a package is selected
    const selectedPackage = formData.package ? packageOptions.find((p) => p.id === formData.package) : null

    // Prepare the data to send
    const bookingData = {
      ...formData,
      tours: selectedTours.map((tourId) => {
        const tour = tourOptions.find((option) => option.id === tourId)
        if (!tour) return { name: tourId, price: 0 }

        // Calculate price for this tour based on number of people
        let tourPrice = 0
        if (tour.id === "stargazing") {
          tourPrice = calculateStargazingPrice(formData.numPeople)
        } else {
          tourPrice = getTourPrice(tour, formData.numPeople)
        }

        return {
          name: tour.name,
          price: tourPrice,
          totalPrice: tourPrice * formData.numPeople
        }
      }),
      packageDetails: selectedPackage
        ? {
            name: selectedPackage.name,
            price: selectedPackage.price,
            duration: selectedPackage.duration,
            includes: selectedPackage.includes,
          }
        : null,
      totalPrice,
      discountAmount: totalPrice - discountedPrice,
      finalPrice: discountedPrice,
    }

    // Send the email
    const result = await sendBookingEmail(bookingData)

    // Log the form submission and result
    console.log("Form submitted:", bookingData)
    console.log("Email result:", result)

    if (!result.success) {
      // You could show an error message here, but for now we'll just log it
      console.error("Email sending failed:", result.error)
      // We'll still set submitted to true to show the success message
      // In a production app, you might want to show an error message instead
    }

    // Track Google Ads conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-667842552/tGOcCKaO2r0bEJ7dndg-',
        'value': discountedPrice,
        'currency': 'JOD'
      })
    }

    // Set submitted state regardless of email success
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-4">Booking Request Sent!</h3>
        <p className="mb-4">
          Thank you for your booking request. We will contact you shortly to confirm your reservation.
        </p>
        <Button
          onClick={() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              date: todayString,
              numPeople: 1,
              accommodation: "",
              message: "",
              package: "",
              transportNeeded: false,
              transportDetails: "",
              transportRoute: "",
              vegetarian: false,
              foodAllergies: "",
            })
            setSelectedTours([])
            setTotalPrice(0)
            setSubmitted(false)
          }}
        >
          Make Another Booking
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Your email address"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Your phone number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Arrival Date</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              min={todayString}
              required
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="numPeople">Number of People</Label>
          <Select
            value={formData.numPeople.toString()}
            onValueChange={(value) => handleSelectChange("numPeople", Number.parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select number of people" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Person" : "People"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4 border-t pt-4">
        <h3 className="text-xl font-semibold">Package Selection (Optional)</h3>
        <div className="space-y-2">
          <Label htmlFor="package">Select a Package</Label>
          <Select value={formData.package} onValueChange={(value) => handleSelectChange("package", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a package (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no-package" className="text-xs">No package - select individual tours</SelectItem>
              {packageOptions.map((option) => (
                <SelectItem key={option.id} value={option.id} className="text-xs">
                  {option.name} - {option.price} JOD ({option.description})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-500 mt-1">
            Selecting a package will replace individual tour selections. Packages include accommodation.
          </p>
        </div>

        {formData.package && formData.package !== "no-package" && (
          <div className="bg-amber-50 p-4 rounded-md mt-2">
            <h4 className="font-medium mb-2">Package Details</h4>
            {(() => {
              const pkg = packageOptions.find((p) => p.id === formData.package)
              if (!pkg) return null

              return (
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Duration:</span> {pkg.duration}
                  </p>
                  <p>
                    <span className="font-medium">Price:</span> {pkg.price} JOD per person
                  </p>
                  <p className="font-medium">Includes:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })()}
          </div>
        )}
      </div>

      <div className="space-y-4 border-t pt-4">
        <h3 className="text-xl font-semibold">Accommodation</h3>
        {formData.package && formData.package !== "no-package" && (
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-md border border-amber-200">
            Note: Your selected package already includes accommodation. You can ignore this section.
          </p>
        )}
        <div className="space-y-2">
          <Label htmlFor="accommodation">Select Accommodation</Label>
          <Select
            value={formData.accommodation}
            onValueChange={(value) => handleSelectChange("accommodation", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select accommodation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none" className="text-xs">No accommodation needed</SelectItem>
              {accommodationOptions.map((option) => {
                // Check if any selected tour qualifies for free tented camp
                const qualifiesForFreeTentedCamp = selectedTours.some((tourId) => {
                  return tourId !== "sandboarding" && tourId !== "camel-rides" && tourId !== "hot-air-balloon" && tourId !== "two-hour-jeep"
                })

                // Show "FREE" for tented camp if qualifying tour is selected
                const priceDisplay =
                  qualifiesForFreeTentedCamp && option.id === "tented-camp"
                    ? "FREE"
                    : `${option.price} JOD per person`

                return (
                  <SelectItem key={option.id} value={option.id} className="text-xs">
                    {option.name} - {priceDisplay} ({option.description})
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4 border-t pt-4">
        <h3 className="text-xl font-semibold">Desert Experiences</h3>
        {formData.package && formData.package !== "no-package" && (
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-md border border-amber-200">
            Note: Your selected package already includes tours. You can add additional tours below, and they will be calculated with a 10% discount applied to the tour prices.
          </p>
        )}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tourSelect">Select Tours</Label>
            <Select
              onValueChange={(tourId: string) => {
                if (tourId === "no-tour") {
                  setSelectedTours([])
                } else if (!selectedTours.includes(tourId)) {
                  setSelectedTours((prev) => [...prev, tourId])
                }
              }}
            >
              <SelectTrigger id="tourSelect" className="w-full">
                <SelectValue placeholder="Select a tour to add" />
              </SelectTrigger>
              <SelectContent className="max-h-none overflow-visible">
                <SelectItem value="no-tour" className="text-xs">No tour needed</SelectItem>
                {tourOptions.map((tour) => {
                  let priceDisplay = ""
                  if (tour.id === "stargazing") {
                    if (formData.numPeople <= 3) {
                      priceDisplay = `${(100 / formData.numPeople).toFixed(2)} JOD per person (100 JOD total for up to 3)`
                    } else {
                      const totalPrice = 100 + (formData.numPeople - 3) * 15
                      priceDisplay = `${(totalPrice / formData.numPeople).toFixed(2)} JOD per person (${totalPrice} JOD total)`
                    }
                  } else if (tour.id === "night-walk") {
                    if (formData.numPeople < 5) {
                      priceDisplay = `10 JOD per person (minimum 5 persons required)`
                    } else {
                      priceDisplay = `10 JOD per person`
                    }
                  } else {
                    const price = getTourPrice(tour, formData.numPeople)
                    priceDisplay = `${price} JOD per person`
                  }

                  return (
                    <SelectItem key={tour.id} value={tour.id} className="text-xs">
                      {tourEmojis[tour.id]} {tour.name} - {priceDisplay}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>

          {selectedTours.length > 0 && (
            <div className="space-y-2 mt-4">
              <Label>Selected Tours</Label>
              <div className="space-y-2">
                {selectedTours.map((tourId) => {
                  const tour = tourOptions.find((t) => t.id === tourId)
                  if (!tour) return null // Handle the case where tour might be undefined

                  let priceDisplay = ""
                  let totalPrice = 0

                  if (tour.id === "stargazing") {
                    if (formData.numPeople <= 3) {
                      const pricePerPerson = 100 / formData.numPeople
                      totalPrice = 100
                      priceDisplay = `${pricePerPerson.toFixed(2)} JOD per person × ${formData.numPeople} = ${totalPrice} JOD`
                    } else {
                      totalPrice = 100 + (formData.numPeople - 3) * 15
                      const pricePerPerson = totalPrice / formData.numPeople
                      priceDisplay = `${pricePerPerson.toFixed(2)} JOD per person × ${formData.numPeople} = ${totalPrice} JOD`
                    }
                  } else if (tour.id === "night-walk") {
                    if (formData.numPeople < 5) {
                      priceDisplay = `10 JOD per person (minimum 5 persons required)`
                      totalPrice = 0
                    } else {
                      priceDisplay = `10 JOD × ${formData.numPeople} = ${10 * formData.numPeople} JOD`
                      totalPrice = 10 * formData.numPeople
                    }
                  } else {
                    const price = getTourPrice(tour, formData.numPeople)
                    totalPrice = price * formData.numPeople
                    priceDisplay = `${price} JOD per person × ${formData.numPeople} = ${totalPrice} JOD`
                  }

                  return (
                    <div key={tourId} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                      <div>
                        <span className="font-medium">{tour.name}</span>
                        <span className="ml-2 text-gray-600">{priceDisplay}</span>
                      </div>
                      <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveTour(tourId)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 border-t pt-4">
        <h3 className="text-xl font-semibold">Additional Information</h3>

        {/* Transport Section */}
        <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="transportNeeded"
              checked={formData.transportNeeded}
              onChange={(e) => handleSelectChange("transportNeeded", e.target.checked)}
              className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500"
            />
            <Label htmlFor="transportNeeded" className="cursor-pointer">
              🚗 I need transport/taxi service to Wadi Rum
            </Label>
          </div>
          {formData.transportNeeded && (
            <div className="space-y-4 ml-6">
              <div className="space-y-2">
                <Label htmlFor="transportRoute">Select Route</Label>
                <Select
                  value={formData.transportRoute}
                  onValueChange={(value) => handleSelectChange("transportRoute", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your transport route" />
                  </SelectTrigger>
                  <SelectContent>
                    {transportRoutes.map((route) => {
                      const isReversed = transportDirection[route.id]
                      const displayFrom = isReversed ? route.to : route.from
                      const displayTo = isReversed ? route.from : route.to

                      return (
                        <SelectItem key={route.id} value={route.id} className="text-xs">
                          {displayFrom} → {displayTo} - {route.price} JOD per vehicle
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-600">
                  All prices are per vehicle (up to 4 passengers), not per person
                </p>
              </div>

              {formData.transportRoute && (
                <div className="bg-white p-3 rounded-md border border-gray-200">
                  {(() => {
                    const selectedRoute = transportRoutes.find((r) => r.id === formData.transportRoute)
                    if (!selectedRoute) return null
                    const isReversed = transportDirection[selectedRoute.id]
                    const displayFrom = isReversed ? selectedRoute.to : selectedRoute.from
                    const displayTo = isReversed ? selectedRoute.from : selectedRoute.to

                    return (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              {displayFrom} → {displayTo}
                            </p>
                            <p className="text-sm text-gray-600">{selectedRoute.description}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setTransportDirection((prev) => ({
                                ...prev,
                                [selectedRoute.id]: !prev[selectedRoute.id],
                              }))
                            }}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Switch direction"
                          >
                            <svg
                              className="w-5 h-5 text-amber-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                              />
                            </svg>
                          </button>
                        </div>
                        <p className="text-lg font-bold text-amber-600">{selectedRoute.price} JOD</p>
                      </div>
                    )
                  })()}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="transportDetails">Additional Transport Details (Optional)</Label>
                <Textarea
                  id="transportDetails"
                  name="transportDetails"
                  value={formData.transportDetails}
                  onChange={handleInputChange}
                  placeholder="e.g., Flight number, pickup time preferences, special requests"
                  rows={3}
                />
              </div>
            </div>
          )}
        </div>

        {/* Food Preferences Section */}
        <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900">Food Preferences</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="vegetarian"
                checked={formData.vegetarian}
                onChange={(e) => handleSelectChange("vegetarian", e.target.checked)}
                className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500"
              />
              <Label htmlFor="vegetarian" className="cursor-pointer">
                🥗 Vegetarian meals required
              </Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="foodAllergies">Food Allergies or Dietary Restrictions</Label>
              <Input
                id="foodAllergies"
                name="foodAllergies"
                value={formData.foodAllergies}
                onChange={handleInputChange}
                placeholder="e.g., Nuts, Gluten, Dairy, etc."
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Special Requests or Questions</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Any special requests or questions?"
            rows={4}
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="bg-amber-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>

          {formData.package && formData.package !== "no-package" && (
            <div className="flex justify-between mb-2">
              <span>{packageOptions.find((p) => p.id === formData.package)?.name || "Selected Package"}:</span>
              <span className="font-medium">
                {(() => {
                  const pkg = packageOptions.find((p) => p.id === formData.package)
                  if (!pkg) return ""
                  return `${pkg.price} JOD × ${formData.numPeople} = ${pkg.price * formData.numPeople} JOD`
                })()}
              </span>
            </div>
          )}

          {(!formData.package || formData.package === "no-package") && formData.accommodation && formData.accommodation !== "none" && (
            <div className="flex justify-between mb-2">
              <span>{accommodationOptions.find((a) => a.id === formData.accommodation)?.name}:</span>
              <span className="font-medium">
                {(() => {
                  const accommodation = accommodationOptions.find((a) => a.id === formData.accommodation)
                  if (!accommodation) return ""

                  // Check if any selected tour qualifies for free tented camp
                  const qualifiesForFreeTentedCamp = selectedTours.some((tourId) => {
                    return tourId !== "sandboarding" && tourId !== "camel-rides" && tourId !== "hot-air-balloon" && tourId !== "two-hour-jeep"
                  })

                  if (qualifiesForFreeTentedCamp && formData.accommodation === "tented-camp") {
                    return "FREE (Included with tour)"
                  } else {
                    return `${accommodation.price} JOD × ${formData.numPeople} = ${
                      accommodation.price * formData.numPeople
                    } JOD`
                  }
                })()}
              </span>
            </div>
          )}

          {selectedTours.map((tourId) => {
              const tour = tourOptions.find((t) => t.id === tourId)
              if (!tour) return null // Handle the case where tour might be undefined

              let priceDisplay = ""
              if (tour.id === "stargazing") {
                if (formData.numPeople <= 3) {
                  const pricePerPerson = 100 / formData.numPeople
                  const totalPrice = 100
                  priceDisplay = `${pricePerPerson.toFixed(2)} JOD × ${formData.numPeople} = ${totalPrice} JOD`
                } else {
                  const totalPrice = 100 + (formData.numPeople - 3) * 15
                  const pricePerPerson = totalPrice / formData.numPeople
                  priceDisplay = `${pricePerPerson.toFixed(2)} JOD × ${formData.numPeople} = ${totalPrice} JOD`
                }
              } else if (tour.id === "night-walk") {
                if (formData.numPeople < 5) {
                  priceDisplay = `10 JOD per person (minimum 5 persons required)`
                } else {
                  priceDisplay = `10 JOD × ${formData.numPeople} = ${10 * formData.numPeople} JOD`
                }
              } else {
                const price = getTourPrice(tour, formData.numPeople)
                priceDisplay = `${price} JOD × ${formData.numPeople} = ${price * formData.numPeople} JOD`
              }

              return (
                <div key={tourId} className="flex justify-between mb-2">
                  <span>{tour.name}:</span>
                  <span className="font-medium">{priceDisplay}</span>
                </div>
              )
            })}

          {/* Transport price (no discount) */}
          {formData.transportRoute && (
            <div className="flex justify-between mb-2 bg-blue-50 p-2 rounded">
              <span>
                {(() => {
                  const selectedRoute = transportRoutes.find((r) => r.id === formData.transportRoute)
                  if (!selectedRoute) return "Transport:"
                  const isReversed = transportDirection[selectedRoute.id]
                  const displayFrom = isReversed ? selectedRoute.to : selectedRoute.from
                  const displayTo = isReversed ? selectedRoute.from : selectedRoute.to
                  return `Transport (${displayFrom} → ${displayTo}):`
                })()}
              </span>
              <span className="font-medium">
                {transportRoutes.find((r) => r.id === formData.transportRoute)?.price} JOD (per vehicle)
              </span>
            </div>
          )}

          {/* Show discount section if tours are selected (discount applies to tours only) */}
          {selectedTours.length > 0 && totalPrice !== discountedPrice ? (
            <>
              <div className="flex justify-between pt-2 border-t mt-2">
                <span className="text-lg font-semibold">Subtotal:</span>
                <span className="text-lg font-semibold">{totalPrice.toFixed(2)} JOD</span>
              </div>

              <div className="flex justify-between pt-2 text-green-600">
                <span className="text-base font-semibold">Tour Discount (10%):</span>
                <span className="text-base font-semibold">-{(totalPrice - discountedPrice).toFixed(2)} JOD</span>
              </div>

              <div className="flex justify-between pt-2 border-t mt-2">
                <span className="text-xl font-bold text-orange-600">Final Total:</span>
                <span className="text-xl font-bold text-orange-600">{discountedPrice.toFixed(2)} JOD</span>
              </div>

              <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded">
                <p className="text-sm text-center">
                  <span className="font-bold text-red-600">10% DISCOUNT APPLIED TO TOURS!</span>
                </p>
              </div>
            </>
          ) : (
            <div className="flex justify-between pt-2 border-t mt-2">
              <span className="text-xl font-bold text-orange-600">Total:</span>
              <span className="text-xl font-bold text-orange-600">{totalPrice.toFixed(2)} JOD</span>
            </div>
          )}
        </div>
      </div>

      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
        Submit Booking Request
      </Button>
    </form>
  )
}
