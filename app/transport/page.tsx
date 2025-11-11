"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Car, MapPin, Clock, Users, CheckCircle2, ArrowRight, Phone, Calendar, ArrowLeftRight } from "lucide-react"

export default function TransportPage() {
  const routes = [
    {
      id: "amman-airport",
      from: "Amman Airport",
      to: "Wadi Rum",
      price: 110,
      duration: "4 hours",
      distance: "330 km",
      description: "Direct transfer from Queen Alia International Airport to Wadi Rum",
      popular: true,
    },
    {
      id: "amman",
      from: "Amman",
      to: "Wadi Rum",
      price: 90,
      duration: "4 hours",
      distance: "320 km",
      description: "Direct transfer from Amman city to Wadi Rum",
      popular: true,
    },
    {
      id: "petra",
      from: "Petra",
      to: "Wadi Rum",
      price: 45,
      duration: "1.5 hours",
      distance: "100 km",
      description: "Convenient connection between two UNESCO World Heritage sites",
      popular: true,
    },
    {
      id: "aqaba",
      from: "Aqaba",
      to: "Wadi Rum",
      price: 25,
      duration: "1 hour",
      distance: "60 km",
      description: "Quick transfer from Aqaba city to Wadi Rum desert",
      popular: false,
    },
    {
      id: "aqaba-airport",
      from: "Aqaba Airport",
      to: "Wadi Rum",
      price: 35,
      duration: "1 hour",
      distance: "65 km",
      description: "Direct airport pickup from King Hussein International Airport",
      popular: false,
    },
  ]

  const [routeDirections, setRouteDirections] = useState<{ [key: string]: boolean }>(
    routes.reduce((acc, route) => ({ ...acc, [route.id]: false }), {})
  )

  const toggleDirection = (routeId: string) => {
    setRouteDirections(prev => ({ ...prev, [routeId]: !prev[routeId] }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/transport-hero.jpg"
            alt="Wadi Rum Transport and Taxi Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <Car className="h-4 w-4 text-amber-400" />
                <span className="text-white text-sm font-medium tracking-wide">Reliable Transport</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Wadi Rum Transport<br />
              <span className="font-light">& Taxi Service</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed">
              Safe, comfortable, and reliable transfers to Wadi Rum from Amman, Petra, and Aqaba.
              Professional drivers with years of experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#routes">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-base">
                  View Routes & Prices
                </Button>
              </Link>
              <Link href="#booking">
                <Button
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white backdrop-blur-sm px-8 py-6 text-base"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">AC</div>
              <div className="text-sm text-gray-400">Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">Licensed</div>
              <div className="text-sm text-gray-400">Drivers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">Fixed</div>
              <div className="text-sm text-gray-400">Prices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Routes <span className="font-bold">& Pricing</span>
            </h2>
            <p className="text-lg text-gray-600 mb-3">
              All prices are per vehicle, not per person.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
              <ArrowLeftRight className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">Click the swap icon on each route to switch directions</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {routes.map((route, index) => {
              const isReversed = routeDirections[route.id]
              const displayFrom = isReversed ? route.to : route.from
              const displayTo = isReversed ? route.from : route.to

              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-xl transition-all ${
                    route.popular ? "border-amber-500 shadow-lg" : "border-gray-200"
                  }`}
                >
                  {route.popular && (
                    <div className="absolute -top-3 left-6 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular Route
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="h-5 w-5 text-amber-500" />
                        <span className="text-xl font-bold text-slate-900">{displayFrom}</span>
                      </div>
                      <div className="flex items-center gap-3 ml-8">
                        <button
                          onClick={() => toggleDirection(route.id)}
                          className="hover:bg-gray-100 rounded-full p-1 transition-colors"
                          aria-label="Switch direction"
                        >
                          <ArrowLeftRight className="h-5 w-5 text-gray-400 hover:text-amber-500" />
                        </button>
                        <span className="text-xl font-bold text-slate-900">{displayTo}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-amber-600">{route.price}</div>
                      <div className="text-sm text-gray-600">JOD</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{route.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{route.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{route.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Up to 4 passengers</span>
                    </div>
                  </div>

                  <Link href="#booking">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Book Ride Now
                    </Button>
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Round Trip Discount</h3>
            <p className="text-gray-700 mb-4">
              Book a round trip (to and from Wadi Rum) and save! Round trip price is simply double the one-way price
              shown above.
            </p>
            <p className="text-sm text-gray-600">
              Example: Amman → Wadi Rum → Amman = 90 JOD × 2 = 180 JOD
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Why Choose <span className="font-bold">Our Service?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Drivers</h3>
              <p className="text-gray-600">
                All our drivers are licensed, experienced, and speak English. They know the routes and ensure safe,
                comfortable journeys.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Modern Vehicles</h3>
              <p className="text-gray-600">
                Air-conditioned, clean, and well-maintained vehicles. Comfortable seating for up to 4 passengers with
                luggage space.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Easy Booking</h3>
              <p className="text-gray-600">
                Book online or contact us directly. Flexible pickup times, door-to-door service, and no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-12 text-center">
            Important <span className="font-bold">Information</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vehicle Capacity</h3>
              <p className="text-gray-600">Each vehicle accommodates up to 4 passengers with standard luggage.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Booking Confirmation</h3>
              <p className="text-gray-600">
                Please book at least 24 hours in advance. Provide your pickup location, date, time, and number of
                passengers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Payment</h3>
              <p className="text-gray-600">
                Payment can be made in cash to the driver (Jordanian Dinar or USD accepted). Prices are fixed - no
                hidden fees.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Waiting Time</h3>
              <p className="text-gray-600">
                For airport pickups, drivers will wait up to 1 hour after scheduled pickup time at no extra charge.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Luggage</h3>
              <p className="text-gray-600">
                Standard luggage included. For oversized items or extra luggage, please mention when booking.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Child Seats</h3>
              <p className="text-gray-600">
                Child seats available upon request. Please specify age of children when booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes SEO Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Popular <span className="font-bold">Transport Routes</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Amman Airport to Wadi Rum Transfer</h3>
              <p className="text-gray-300 mb-4">
                Most convenient route from Queen Alia International Airport directly to Wadi Rum. Perfect for international travelers who want to skip Amman and head straight to the desert.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Direct airport pickup with meet & greet</li>
                <li>• 4-hour comfortable journey to the desert</li>
                <li>• Professional English-speaking drivers</li>
                <li>• 110 JOD per vehicle (up to 4 passengers)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Amman to Wadi Rum Transfer</h3>
              <p className="text-gray-300 mb-4">
                Popular route from Jordan's capital to the stunning Wadi Rum desert. Perfect for travelers staying in Amman who want to experience the desert adventure.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Direct transfer from Amman city center</li>
                <li>• 4-hour comfortable journey through scenic Jordan</li>
                <li>• Professional English-speaking drivers</li>
                <li>• 90 JOD per vehicle (up to 4 passengers)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Petra to Wadi Rum Taxi</h3>
              <p className="text-gray-300 mb-4">
                Connect two of Jordan's most iconic UNESCO World Heritage sites. Many travelers visit Petra in the
                morning and reach Wadi Rum by afternoon for sunset in the desert.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Short 1.5-hour journey between sites</li>
                <li>• Perfect for multi-destination itineraries</li>
                <li>• Flexible pickup times</li>
                <li>• 45 JOD per vehicle (up to 4 passengers)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Aqaba to Wadi Rum Transport</h3>
              <p className="text-gray-300 mb-4">
                Quick and affordable transfer from the Red Sea resort town of Aqaba to Wadi Rum. Ideal for beach lovers
                who want to experience the desert.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Shortest route - only 1 hour drive</li>
                <li>• Best value for money</li>
                <li>• Perfect for day trips to Wadi Rum</li>
                <li>• 25 JOD per vehicle (up to 4 passengers)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-500 to-orange-600">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Book <span className="font-bold">Your Transfer?</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Contact us now to reserve your comfortable, safe transfer to Wadi Rum. Available 24/7.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#booking">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-base font-semibold">
                Book Transport Now
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white backdrop-blur-sm px-10 py-6 text-base font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-slate-50">
        <div className="container px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Book Your <span className="font-bold">Transport</span>
            </h2>
            <p className="text-lg text-gray-600">
              Fill in the form below and specify your transport route. Check the transport option for detailed pickup information.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <BookingForm tourName="Transport Service" />
          </div>
        </div>
      </section>
    </div>
  )
}
