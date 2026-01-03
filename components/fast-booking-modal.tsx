"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    X,
    ChevronRight,
    ChevronLeft,
    Users,
    Moon,
    Calendar,
    CheckCircle2,
    Zap,
    Car
} from "lucide-react"
import { sendBookingEmail } from "@/app/actions/send-booking-email"

// Accommodation options with images and prices
const accommodationOptions = [
    {
        id: "outdoor-camping",
        name: "Outdoor Camping",
        subtitle: "Under the Stars",
        price: 40,
        image: "/images/outdoor-camping.jpg",
        description: "Sleep under millions of stars in the open desert",
    },
    {
        id: "beduin-camp",
        name: "Beduin Camp",
        subtitle: "Traditional Tents",
        price: 25,
        image: "/images/beduin-camp.jpg",
        description: "Authentic Bedouin tented camp experience",
    },
    {
        id: "bubble-camp",
        name: "Bubble Camp",
        subtitle: "Transparent Domes",
        price: 80,
        image: "/images/bubble-camp.jpg",
        description: "Modern bubble tents with panoramic views",
    },
    {
        id: "luxury-camp",
        name: "Luxury Camp",
        subtitle: "Premium Experience",
        price: 120,
        image: "/images/bubble-camp-aerial.jpg",
        description: "Premium luxury bubble with all amenities",
    },
]

// Desert activities
const desertActivities = [
    { id: "half-day-jeep", name: "Half Day Jeep Tour", price: 45, emoji: "🚙" },
    { id: "full-day-jeep", name: "Full Day Jeep Tour", price: 55, emoji: "🚗" },
    { id: "camel-ride", name: "Camel Ride", price: 25, emoji: "🐪" },
    { id: "sandboarding", name: "Sandboarding", price: 20, emoji: "🏂" },
    { id: "stargazing", name: "Stargazing", price: 25, emoji: "⭐" },
    { id: "sunrise-tour", name: "Sunrise Tour", price: 35, emoji: "🌅" },
]

interface FastBookingModalProps {
    isOpen: boolean
    onClose: () => void
}

export function FastBookingModal({ isOpen, onClose }: FastBookingModalProps) {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    // Form state
    const [selectedAccommodation, setSelectedAccommodation] = useState<string | null>(null)
    const [numPersons, setNumPersons] = useState(2)
    const [numNights, setNumNights] = useState(1)
    const [selectedActivities, setSelectedActivities] = useState<string[]>([])
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
    })

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep(1)
                setSelectedAccommodation(null)
                setNumPersons(2)
                setNumNights(1)
                setSelectedActivities([])
                setFormData({ name: "", email: "", phone: "", date: "", message: "" })
                setSubmitted(false)
            }, 300)
        }
    }, [isOpen])

    // Calculate total price
    const calculateTotal = () => {
        let total = 0

        // Accommodation
        const accommodation = accommodationOptions.find(a => a.id === selectedAccommodation)
        if (accommodation) {
            total += accommodation.price * numPersons * numNights
        }

        // Activities
        selectedActivities.forEach(actId => {
            const activity = desertActivities.find(a => a.id === actId)
            if (activity) {
                total += activity.price * numPersons
            }
        })

        return total
    }

    // Calculate discounted price (10% off)
    const calculateDiscountedTotal = () => {
        return Math.round(calculateTotal() * 0.9)
    }

    const toggleActivity = (activityId: string) => {
        setSelectedActivities(prev =>
            prev.includes(activityId)
                ? prev.filter(id => id !== activityId)
                : [...prev, activityId]
        )
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)

        const accommodation = accommodationOptions.find(a => a.id === selectedAccommodation)
        const activities = selectedActivities.map(id => desertActivities.find(a => a.id === id))

        const bookingData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            numPeople: numPersons,
            accommodation: accommodation?.name || "",
            package: "",
            tours: activities.map(a => ({
                name: a?.name || "",
                price: a?.price || 0,
                totalPrice: (a?.price || 0) * numPersons
            })),
            message: `Fast Booking - ${numNights} night(s)\n${formData.message}`,
            totalPrice: calculateTotal(),
            discountAmount: calculateTotal() - calculateDiscountedTotal(),
            finalPrice: calculateDiscountedTotal(),
            transportNeeded: false,
            transportDetails: "",
            transportRoute: "",
            vegetarian: false,
            foodAllergies: "",
        }

        const result = await sendBookingEmail(bookingData)

        setIsSubmitting(false)

        if (result.success) {
            setSubmitted(true)
        }
    }

    const handleTransferRedirect = () => {
        onClose()
        router.push("/transport")
    }

    const canProceedStep1 = selectedAccommodation !== null
    const canProceedStep2 = formData.name && formData.email && formData.phone && formData.date
    const canProceedStep3 = true // Activities are optional

    // Step titles
    const stepTitles = [
        "Choose Your Stay",
        "Your Details",
        "Desert Activities",
        "Review & Book"
    ]

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[95%] max-w-[700px] p-0 overflow-hidden border-0 shadow-2xl max-h-[90vh] rounded-2xl bg-white">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 z-20 rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-900 focus:outline-none"
                >
                    <X className="h-4 w-4" />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5" />
                        <h2 className="text-xl font-bold">Fast Booking</h2>
                    </div>
                    <p className="text-amber-100 text-sm">{stepTitles[step - 1]}</p>

                    {/* Progress bar */}
                    <div className="flex gap-1 mt-3">
                        {[1, 2, 3, 4].map(s => (
                            <div
                                key={s}
                                className={`h-1 flex-1 rounded-full transition-all ${s <= step ? "bg-white" : "bg-white/30"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 overflow-y-auto max-h-[60vh]">
                    {/* Step 1: Accommodation Selection */}
                    {step === 1 && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                {accommodationOptions.map((acc) => (
                                    <button
                                        key={acc.id}
                                        onClick={() => setSelectedAccommodation(acc.id)}
                                        className={`relative rounded-xl overflow-hidden border-2 transition-all ${selectedAccommodation === acc.id
                                                ? "border-orange-500 ring-2 ring-orange-200"
                                                : "border-gray-200 hover:border-orange-300"
                                            }`}
                                    >
                                        <div className="aspect-[4/3] relative">
                                            <Image
                                                src={acc.image}
                                                alt={acc.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                            {/* Selection indicator */}
                                            {selectedAccommodation === acc.id && (
                                                <div className="absolute top-2 right-2 bg-orange-500 rounded-full p-1">
                                                    <CheckCircle2 className="h-4 w-4 text-white" />
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                                                <h3 className="font-bold text-white text-sm">{acc.name}</h3>
                                                <p className="text-white/80 text-xs">{acc.subtitle}</p>
                                                <div className="mt-1 inline-block bg-white/20 backdrop-blur-sm rounded px-2 py-0.5">
                                                    <span className="text-white font-bold text-sm">{acc.price} JOD</span>
                                                    <span className="text-white/80 text-xs">/person/night</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Persons and Nights */}
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <Label className="text-xs text-gray-500 mb-2 block">Number of Persons</Label>
                                    <div className="flex items-center justify-between">
                                        <button
                                            onClick={() => setNumPersons(Math.max(1, numPersons - 1))}
                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                                        >
                                            −
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-orange-500" />
                                            <span className="text-xl font-bold">{numPersons}</span>
                                        </div>
                                        <button
                                            onClick={() => setNumPersons(Math.min(10, numPersons + 1))}
                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4">
                                    <Label className="text-xs text-gray-500 mb-2 block">Number of Nights</Label>
                                    <div className="flex items-center justify-between">
                                        <button
                                            onClick={() => setNumNights(Math.max(1, numNights - 1))}
                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                                        >
                                            −
                                        </button>
                                        <div className="flex items-center gap-2">
                                            <Moon className="h-4 w-4 text-orange-500" />
                                            <span className="text-xl font-bold">{numNights}</span>
                                        </div>
                                        <button
                                            onClick={() => setNumNights(Math.min(7, numNights + 1))}
                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Personal Details */}
                    {step === 2 && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name" className="text-xs text-gray-500 mb-1 block">Full Name *</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your name"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-xs text-gray-500 mb-1 block">Email *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="your@email.com"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="phone" className="text-xs text-gray-500 mb-1 block">Phone / WhatsApp *</Label>
                                    <Input
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+1 234 567 8900"
                                        className="rounded-lg"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="date" className="text-xs text-gray-500 mb-1 block">Arrival Date *</Label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            id="date"
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            min={new Date().toISOString().split('T')[0]}
                                            className="rounded-lg pl-10"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="message" className="text-xs text-gray-500 mb-1 block">Special Requests (optional)</Label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Any special requests..."
                                    className="rounded-lg min-h-[80px]"
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 3: Activities */}
                    {step === 3 && (
                        <div className="space-y-3">
                            <p className="text-gray-600 text-sm mb-4">
                                Add optional desert activities to your experience
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {desertActivities.map((activity) => (
                                    <button
                                        key={activity.id}
                                        onClick={() => toggleActivity(activity.id)}
                                        className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left ${selectedActivities.includes(activity.id)
                                                ? "border-orange-500 bg-orange-50"
                                                : "border-gray-200 hover:border-orange-300"
                                            }`}
                                    >
                                        <span className="text-2xl">{activity.emoji}</span>
                                        <div className="flex-1">
                                            <div className="font-medium text-sm">{activity.name}</div>
                                            <div className="text-orange-600 font-bold text-sm">{activity.price} JOD</div>
                                        </div>
                                        {selectedActivities.includes(activity.id) && (
                                            <CheckCircle2 className="h-5 w-5 text-orange-500" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Review */}
                    {step === 4 && !submitted && (
                        <div className="space-y-4">
                            {/* Summary */}
                            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                                <h3 className="font-bold text-gray-800">Booking Summary</h3>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Accommodation</span>
                                    <span className="font-medium">
                                        {accommodationOptions.find(a => a.id === selectedAccommodation)?.name}
                                    </span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Guests</span>
                                    <span className="font-medium">{numPersons} person(s)</span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Duration</span>
                                    <span className="font-medium">{numNights} night(s)</span>
                                </div>

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Arrival</span>
                                    <span className="font-medium">{formData.date}</span>
                                </div>

                                {selectedActivities.length > 0 && (
                                    <div className="border-t pt-3">
                                        <span className="text-gray-600 text-sm">Activities:</span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {selectedActivities.map(id => {
                                                const act = desertActivities.find(a => a.id === id)
                                                return (
                                                    <span key={id} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                                                        {act?.emoji} {act?.name}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Price breakdown */}
                            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl p-4 text-white">
                                <div className="flex justify-between mb-2">
                                    <span className="text-orange-100">Subtotal</span>
                                    <span className="line-through text-orange-200">{calculateTotal()} JOD</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-orange-100">Discount (10%)</span>
                                    <span className="text-green-200">-{calculateTotal() - calculateDiscountedTotal()} JOD</span>
                                </div>
                                <div className="flex justify-between pt-2 border-t border-white/20">
                                    <span className="font-bold text-lg">Total</span>
                                    <span className="font-bold text-2xl">{calculateDiscountedTotal()} JOD</span>
                                </div>
                            </div>

                            {/* Contact info display */}
                            <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                                <p><strong>Name:</strong> {formData.name}</p>
                                <p><strong>Email:</strong> {formData.email}</p>
                                <p><strong>Phone:</strong> {formData.phone}</p>
                            </div>
                        </div>
                    )}

                    {/* Success State */}
                    {step === 4 && submitted && (
                        <div className="text-center py-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Submitted!</h3>
                            <p className="text-gray-600 mb-6">
                                Thank you! We'll confirm your booking within 24 hours.
                            </p>

                            {/* Transfer prompt */}
                            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
                                <Car className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                                <h4 className="font-bold text-emerald-800 mb-1">Need Transport?</h4>
                                <p className="text-sm text-emerald-700 mb-3">
                                    Get a private transfer from Amman, Petra, or Aqaba to Wadi Rum
                                </p>
                                <Button
                                    onClick={handleTransferRedirect}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                                >
                                    <Car className="h-4 w-4 mr-2" />
                                    Book Transport
                                </Button>
                            </div>

                            <Button variant="outline" onClick={onClose} className="mt-2">
                                Close
                            </Button>
                        </div>
                    )}
                </div>

                {/* Footer with navigation */}
                {!submitted && (
                    <div className="border-t bg-gray-50 px-5 py-4 flex justify-between items-center">
                        {step > 1 ? (
                            <Button
                                variant="outline"
                                onClick={() => setStep(step - 1)}
                                className="flex items-center gap-1"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                Back
                            </Button>
                        ) : (
                            <div />
                        )}

                        {/* Price preview */}
                        {selectedAccommodation && step < 4 && (
                            <div className="text-center">
                                <div className="text-xs text-gray-500">Estimated</div>
                                <div className="font-bold text-orange-600">{calculateDiscountedTotal()} JOD</div>
                            </div>
                        )}

                        {step < 4 ? (
                            <Button
                                onClick={() => setStep(step + 1)}
                                disabled={
                                    (step === 1 && !canProceedStep1) ||
                                    (step === 2 && !canProceedStep2) ||
                                    (step === 3 && !canProceedStep3)
                                }
                                className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-1"
                            >
                                Next
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="bg-orange-500 hover:bg-orange-600 text-white"
                            >
                                {isSubmitting ? "Submitting..." : "Confirm Booking"}
                            </Button>
                        )}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

// Floating button component
export function FastBookingButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Floating button - right side */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-l-xl shadow-lg transition-all hover:pr-6 animate-pulse-subtle"
                style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                }}
            >
                <span className="flex items-center gap-2">
                    <Zap className="h-4 w-4 rotate-90" />
                    Fast Booking
                </span>
            </button>

            <FastBookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

            {/* Add custom animation styles */}
            <style jsx global>{`
        @keyframes pulse-subtle {
          0%, 100% {
            box-shadow: 0 4px 6px -1px rgba(249, 115, 22, 0.3), 0 2px 4px -1px rgba(249, 115, 22, 0.2);
          }
          50% {
            box-shadow: 0 10px 20px -5px rgba(249, 115, 22, 0.5), 0 6px 10px -3px rgba(249, 115, 22, 0.3);
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
        </>
    )
}
