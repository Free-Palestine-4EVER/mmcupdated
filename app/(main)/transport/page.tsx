"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Car,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Phone,
  Calendar,
  ArrowRight,
  Shield,
  Sparkles,
  ChevronDown,
  Send
} from "lucide-react"
import { sendTransportEmail } from "@/app/actions/send-transport-email"

// Available locations
const locations = [
  "Amman",
  "Aqaba",
  "Dead Sea",
  "Petra",
  "Wadi Musa",
  "Jerash",
  "Wadi Rum"
]

// Route pricing data (24 routes as specified)
const routePricing: { [key: string]: number } = {
  "Amman-Aqaba": 110,
  "Amman-Dead Sea": 35,
  "Amman-Petra": 85,
  "Amman-Wadi Musa": 85,
  "Amman-Jerash": 30,
  "Amman-Wadi Rum": 95,
  "Aqaba-Dead Sea": 105,
  "Aqaba-Petra": 65,
  "Aqaba-Wadi Musa": 65,
  "Aqaba-Jerash": 130,
  "Aqaba-Wadi Rum": 35,
  "Dead Sea-Petra": 75,
  "Dead Sea-Wadi Musa": 75,
  "Dead Sea-Jerash": 55,
  "Dead Sea-Wadi Rum": 100,
  "Petra-Aqaba": 65,
  "Petra-Wadi Musa": 10,
  "Petra-Jerash": 110,
  "Petra-Wadi Rum": 45,
  "Wadi Musa-Aqaba": 65,
  "Wadi Musa-Jerash": 110,
  "Wadi Musa-Wadi Rum": 55,
  "Jerash-Aqaba": 130,
  "Jerash-Wadi Rum": 120,
}

// Get price for a route (check both directions)
function getRoutePrice(from: string, to: string): number | null {
  if (from === to || !from || !to) return null
  const key1 = `${from}-${to}`
  const key2 = `${to}-${from}`
  return routePricing[key1] ?? routePricing[key2] ?? null
}

export default function TransportPage() {
  // Pricing calculator state
  const [fromLocation, setFromLocation] = useState("")
  const [toLocation, setToLocation] = useState("")
  const [travelDate, setTravelDate] = useState("")
  const [passengers, setPassengers] = useState(1)
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const calculatedPrice = getRoutePrice(fromLocation, toLocation)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await sendTransportEmail({
        ...formData,
        fromLocation,
        toLocation,
        travelDate,
        passengers,
        price: calculatedPrice
      })

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
        setFromLocation("")
        setToLocation("")
        setTravelDate("")
        setPassengers(1)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/transport-hero.jpg"
            alt="Jordan Transport and Taxi Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4">
            <Car className="h-4 w-4 text-emerald-400" />
            <span className="text-white text-sm font-medium">Private Transport Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Jordan Transport <span className="font-light text-emerald-400">& Taxi</span>
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl mx-auto font-light">
            Safe, comfortable, and reliable private transfers across Jordan.
            Fixed prices, professional drivers.
          </p>
        </div>
      </section>

      {/* Pricing Calculator - RIGHT AFTER HERO */}
      <section id="calculator" className="py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -mt-12 pt-16 relative z-10">
        <div className="container max-w-3xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
              Where to <span className="font-bold text-emerald-400">next?</span>
            </h2>
            <p className="text-gray-400 text-sm">Calculate your trip price instantly</p>
          </div>

          {/* Calculator Card - Compact */}
          <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-8">
            {/* From & To Row */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {/* From Location */}
              <div className="relative">
                <Label className="text-xs font-medium text-gray-500 mb-1 block">From</Label>
                <div className="relative">
                  <div
                    className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-emerald-400 transition-colors bg-gray-50"
                    onClick={() => { setShowFromDropdown(!showFromDropdown); setShowToDropdown(false); }}
                  >
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className={`text-sm flex-1 ${fromLocation ? "text-slate-900 font-medium" : "text-gray-400"}`}>
                      {fromLocation || "Select departure"}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${showFromDropdown ? "rotate-180" : ""}`} />
                  </div>
                  {showFromDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
                      {locations.map((loc) => (
                        <button
                          key={loc}
                          className="w-full px-3 py-2 text-left hover:bg-emerald-50 transition-colors flex items-center gap-2 text-sm"
                          onClick={() => { setFromLocation(loc); setShowFromDropdown(false); }}
                        >
                          <MapPin className="h-3 w-3 text-emerald-500" />
                          <span className="text-gray-800">{loc}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* To Location */}
              <div className="relative">
                <Label className="text-xs font-medium text-gray-500 mb-1 block">To</Label>
                <div className="relative">
                  <div
                    className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-emerald-400 transition-colors bg-gray-50"
                    onClick={() => { setShowToDropdown(!showToDropdown); setShowFromDropdown(false); }}
                  >
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span className={`text-sm flex-1 ${toLocation ? "text-slate-900 font-medium" : "text-gray-400"}`}>
                      {toLocation || "Select destination"}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${showToDropdown ? "rotate-180" : ""}`} />
                  </div>
                  {showToDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
                      {locations.filter(loc => loc !== fromLocation).map((loc) => (
                        <button
                          key={loc}
                          className="w-full px-3 py-2 text-left hover:bg-emerald-50 transition-colors flex items-center gap-2 text-sm"
                          onClick={() => { setToLocation(loc); setShowToDropdown(false); }}
                        >
                          <MapPin className="h-3 w-3 text-amber-500" />
                          <span className="text-gray-800">{loc}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Date & Passengers Row - Compact */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* Date Picker */}
              <div>
                <Label className="text-xs font-medium text-gray-500 mb-1 block">Date</Label>
                <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus-within:border-emerald-400 transition-colors">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="border-0 p-0 h-auto text-sm focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <Label className="text-xs font-medium text-gray-500 mb-1 block">Passengers</Label>
                <div className="flex items-center justify-between px-3 py-1.5 border border-gray-200 rounded-lg bg-gray-50">
                  <button
                    className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-base font-medium transition-colors"
                    onClick={() => setPassengers(Math.max(1, passengers - 1))}
                  >
                    −
                  </button>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-semibold text-slate-900">{passengers}</span>
                  </div>
                  <button
                    className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-base font-medium transition-colors"
                    onClick={() => setPassengers(Math.min(7, passengers + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Price Display */}
            {calculatedPrice !== null ? (
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4 text-white text-center mb-4">
                <div className="text-xs font-medium text-emerald-100 mb-1">Price per vehicle</div>
                <div className="text-4xl font-bold">{calculatedPrice} JOD</div>
                <div className="text-xs text-emerald-100 mt-1">
                  {fromLocation} → {toLocation} • Up to 4 passengers
                </div>
              </div>
            ) : fromLocation && toLocation ? (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center mb-4">
                <div className="text-amber-700 text-sm">Route not available. Contact us for custom pricing.</div>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-xl p-3 text-center mb-4">
                <div className="text-gray-500 text-sm">Select departure and destination to see price</div>
              </div>
            )}

            <Link href="#booking">
              <Button
                size="lg"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-5 text-base rounded-xl"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Book This Trip
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-14 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-4">
            Explore Jordan with <span className="font-bold text-emerald-600">Ease & Comfort</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Our private transport service connects you to ancient Petra, the stunning Dead Sea, vibrant Amman,
            and the magnificent Wadi Rum desert. Door-to-door service with experienced, English-speaking drivers.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-5 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">Fixed Prices</h3>
              <p className="text-xs text-gray-600 text-center">No hidden fees. Pay per vehicle.</p>
            </div>
            <div className="flex flex-col items-center p-5 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                <Car className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">Modern Vehicles</h3>
              <p className="text-xs text-gray-600 text-center">Air-conditioned & comfortable.</p>
            </div>
            <div className="flex flex-col items-center p-5 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1 text-sm">24/7 Available</h3>
              <p className="text-xs text-gray-600 text-center">Book any time, travel any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Routes Section */}
      <section className="py-14 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-2">
              All <span className="font-bold">Routes & Prices</span>
            </h2>
            <p className="text-gray-600 text-sm">Fixed prices per vehicle (up to 4 passengers)</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(routePricing).map(([route, price]) => {
              const [from, to] = route.split("-")
              return (
                <div
                  key={route}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => {
                    setFromLocation(from);
                    setToLocation(to);
                    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <div className="w-0.5 h-4 bg-gray-200"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      </div>
                      <div className="text-xs">
                        <div className="font-medium text-slate-900">{from}</div>
                        <div className="font-medium text-slate-900">{to}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-600">{price}</div>
                      <div className="text-xs text-gray-500">JOD</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-14 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-6 text-center">
            What's <span className="font-bold">Included</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Professional Drivers</h3>
                <p className="text-gray-600 text-xs">Licensed, experienced, English-speaking.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Air-Conditioned Vehicles</h3>
                <p className="text-gray-600 text-xs">Modern, clean, and comfortable.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Door-to-Door Service</h3>
                <p className="text-gray-600 text-xs">Pickup at your hotel or accommodation.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Free Waiting Time</h3>
                <p className="text-gray-600 text-xs">Up to 1 hour for airport pickups.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
            <h3 className="text-base font-bold text-slate-900 mb-2">Need a Custom Route?</h3>
            <p className="text-gray-600 text-sm mb-3">
              Contact us for custom transport throughout Jordan.
            </p>
            <a href="tel:+962777424937" className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 text-sm">
              <Phone className="h-4 w-4" />
              +962 777 424 937
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container max-w-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
              Book Your <span className="font-bold text-emerald-400">Transport</span>
            </h2>
            <p className="text-gray-400 text-sm">
              We'll confirm your booking within 24 hours
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            {/* Route Summary */}
            {fromLocation && toLocation && calculatedPrice && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className="font-medium text-slate-900 text-sm">{fromLocation} → {toLocation}</span>
                  </div>
                  <span className="text-base font-bold text-emerald-600">{calculatedPrice} JOD</span>
                </div>
                {travelDate && (
                  <div className="text-xs text-gray-600 mt-1 flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    {new Date(travelDate).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                    <span className="mx-1">•</span>
                    <Users className="h-3 w-3" />
                    {passengers} passenger{passengers > 1 ? 's' : ''}
                  </div>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="name" className="text-xs font-medium text-gray-600 mb-1 block">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="py-2 text-sm rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs font-medium text-gray-600 mb-1 block">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="py-2 text-sm rounded-lg"
                />
              </div>
            </div>

            <div className="mb-4">
              <Label htmlFor="phone" className="text-xs font-medium text-gray-600 mb-1 block">Phone / WhatsApp *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 234 567 8900"
                className="py-2 text-sm rounded-lg"
              />
            </div>

            {/* Inline route selection if not already selected */}
            {(!fromLocation || !toLocation) && (
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label className="text-xs font-medium text-gray-600 mb-1 block">From *</Label>
                  <select
                    required
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg border border-gray-200 text-sm text-gray-700"
                  >
                    <option value="">Select departure</option>
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label className="text-xs font-medium text-gray-600 mb-1 block">To *</Label>
                  <select
                    required
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    className="w-full py-2 px-3 rounded-lg border border-gray-200 text-sm text-gray-700"
                  >
                    <option value="">Select destination</option>
                    {locations.filter(loc => loc !== fromLocation).map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {!travelDate && (
              <div className="mb-4">
                <Label className="text-xs font-medium text-gray-600 mb-1 block">Travel Date *</Label>
                <Input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="py-2 text-sm rounded-lg"
                />
              </div>
            )}

            <div className="mb-5">
              <Label htmlFor="message" className="text-xs font-medium text-gray-600 mb-1 block">Additional Details</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Pickup address, flight number, special requests..."
                className="text-sm rounded-lg min-h-[80px]"
              />
            </div>

            {submitStatus === "success" && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-4 text-center">
                <CheckCircle2 className="h-6 w-6 text-emerald-500 mx-auto mb-1" />
                <p className="text-emerald-700 font-medium text-sm">Thank you! We'll confirm your booking soon.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-center">
                <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-5 text-base rounded-xl disabled:opacity-50"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Request Booking
                </>
              )}
            </Button>

            <p className="text-center text-xs text-gray-500 mt-3">
              Or WhatsApp: <a href="https://wa.me/962777424937" className="text-emerald-600 font-medium hover:underline">+962 777 424 937</a>
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
