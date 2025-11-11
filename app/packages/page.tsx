import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { FloatingBookButton } from "@/components/floating-book-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wadi Rum Tour Packages | Comprehensive Desert Experiences",
  description:
    "Discover our carefully curated Wadi Rum tour packages combining the best desert experiences, accommodation options, and activities for an unforgettable Jordan adventure.",
}

export default function PackagesPage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-hero.jpg"
          alt="Wadi Rum tour packages and combined experiences"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">WADI RUM PACKAGES</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Comprehensive desert experiences combining the best of Wadi Rum
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-2xl font-bold">Complete Desert Experiences</h2>
            <h3 className="mb-8 text-4xl font-bold">Curated Wadi Rum Packages</h3>
            <p className="mx-auto max-w-3xl text-lg">
              Our carefully designed packages combine the best desert experiences, accommodation options, and activities
              to create unforgettable Wadi Rum adventures. Whether you're looking for a comprehensive day trip or a
              multi-day immersion in Bedouin culture, our packages offer convenience, value, and extraordinary
              experiences.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* 2-Day Packages */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">2-Day Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-in" delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/full-day-jeep.jpg"
                    alt="Classic Adventure Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Classic Adventure</h3>
                  <p className="text-gray-700 mb-4">
                    A perfect introduction to Wadi Rum with a full-day jeep tour and a half-day hiking experience.
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">From 120 JOD</p>
                    <Link href="/packages/classic-adventure">
                      <Button className="bg-amber-500 hover:bg-amber-600">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/beduin-way.jpg" alt="Desert Explorer Package" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Desert Explorer</h3>
                  <p className="text-gray-700 mb-4">
                    Combine a jeep tour with a camel ride and hiking for a diverse Wadi Rum experience.
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">From 135 JOD</p>
                    <Link href="/packages/desert-explorer">
                      <Button className="bg-amber-500 hover:bg-amber-600">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/blog-stargazing.jpg"
                    alt="Bedouin Experience Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bedouin Experience</h3>
                  <p className="text-gray-700 mb-4">
                    Immerse yourself in Bedouin culture with traditional activities, meals, and stargazing.
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">From 150 JOD</p>
                    <Link href="/packages/bedouin-experience">
                      <Button className="bg-amber-500 hover:bg-amber-600">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={400}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/sleeping-under-stars.png"
                    alt="Bivouac Camping Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bivouac Camping</h3>
                  <p className="text-gray-700 mb-4">
                    Experience authentic desert camping under the stars with optional tours for a complete Wadi Rum
                    adventure.
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">From 45 JOD</p>
                    <Link href="/packages/bivouac">
                      <Button className="bg-amber-500 hover:bg-amber-600">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 3-Day Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">3-Day Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-in" delay={100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/wadi-rum-landscape.jpg"
                    alt="Wadi Rum Discovery Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Wadi Rum Discovery</h3>
                  <p className="text-gray-700 mb-4">
                    A comprehensive exploration of Wadi Rum's diverse landscapes and hidden gems over three days.
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">From 200 JOD</p>
                    <Link href="/packages/wadi-rum-discovery">
                      <Button className="bg-amber-500 hover:bg-amber-600">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/jebel-um-addami.jpg"
                    alt="Ultimate Adventure Package"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ultimate Adventure</h3>
                  <p className="text-gray-700 mb-4">
                    For adventure seekers: climb Jordan's highest peak, explore remote areas, and experience the best of
                    Wadi Rum.
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">From 230 JOD</p>
                    <Link href="/packages/ultimate-adventure">
                      <Button className="bg-amber-500 hover:bg-amber-600">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/burdah-arch.jpg" alt="Jordan Heights Package" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Jordan Heights</h3>
                  <p className="text-gray-700 mb-4">
                    Conquer Wadi Rum's most iconic rock formations including Burdah Arch and Um Fruth Bridge.
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-amber-600">From 250 JOD</p>
                    <Link href="/packages/jordan-heights">
                      <Button className="bg-amber-500 hover:bg-amber-600">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <AnimateOnScroll>
        <section className="py-16 bg-amber-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Package?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We can create personalized Wadi Rum experiences based on your interests, group size, and available time.
              Contact us today to start planning your adventure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-us">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg">
                  Contact Us
                </Button>
              </Link>
              <Link href="/desert-experiences">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600 px-6 py-3 rounded-md text-lg"
                >
                  Explore Experiences
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  )
}
