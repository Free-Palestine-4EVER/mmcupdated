import Image from "next/image"
import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { FloatingBookButton } from "@/components/floating-book-button"

export const metadata: Metadata = {
  title: "2 Hours Jeep Tour | Wadi Rum Desert Experiences",
  description:
    "Experience the highlights of Wadi Rum in our concise 2-hour jeep tour. Perfect for visitors with limited time who still want to see the desert's most impressive landscapes and formations.",
}

export default function TwoHourJeepTourPage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/jeep-tour-card.jpg"
          alt="2 hour jeep tour in Wadi Rum desert"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">2 Hours Jeep Tour</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            A quick but comprehensive introduction to the beauty of Wadi Rum
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-600">Tour Overview</h2>
            <p className="mb-6 text-gray-700">
              Our 2 Hours Jeep Tour is perfect for visitors with limited time who still want to experience the magic of
              Wadi Rum. This concise tour focuses on the most impressive sites near our camp, giving you a taste of the
              desert's stunning landscapes, iconic rock formations, and ancient history.
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/jeep-tour-card.jpg"
                alt="Jeep driving through Wadi Rum desert"
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Expect</h3>
            <p className="mb-6 text-gray-700">
              In just two hours, you'll experience several of Wadi Rum's highlights in a comfortable 4x4 jeep driven by
              an experienced Bedouin guide. The tour is designed to maximize your time, focusing on accessible yet
              spectacular locations that showcase the desert's diversity. You'll have opportunities to take photos,
              learn about the area's geology and history, and experience the vastness of this unique landscape.
            </p>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Highlights</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Visit 3-4 key sites in the vicinity of our camp</li>
              <li>See impressive rock formations and desert landscapes</li>
              <li>Learn about the geology and history of Wadi Rum</li>
              <li>Enjoy comfortable transportation in a 4x4 jeep</li>
              <li>Benefit from the knowledge of a local Bedouin guide</li>
              <li>Perfect introduction to Wadi Rum for those with limited time</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Itinerary</h3>
            <p className="mb-4 text-gray-700">
              While the exact itinerary may vary based on conditions and your interests, a typical 2-hour tour includes:
            </p>
            <div className="mb-8">
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Lawrence's Spring</h4>
                <p className="text-gray-700">
                  Visit this historic water source named after T.E. Lawrence (Lawrence of Arabia) and see ancient
                  Thamudic inscriptions nearby.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Small Sand Dune</h4>
                <p className="text-gray-700">
                  Experience the soft red sand of Wadi Rum with a stop at a picturesque dune where you can climb to the
                  top for panoramic views.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Khazali Canyon</h4>
                <p className="text-gray-700">
                  Explore this narrow canyon featuring ancient inscriptions that date back thousands of years, offering
                  insight into the area's long human history.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold mb-2">Return to Camp</h4>
                <p className="text-gray-700">
                  The tour concludes with your return to our camp, where you can relax and reflect on your desert
                  experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ImageLightbox
                src="/images/half-day-jeep-1.jpg"
                alt="Lawrence's Spring in Wadi Rum"
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
              <ImageLightbox
                src="/images/half-day-jeep-2.jpg"
                alt="Sand dunes in Wadi Rum"
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Bring</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Sun protection (hat, sunglasses, sunscreen)</li>
              <li>Camera</li>
              <li>Water bottle</li>
              <li>Comfortable clothing and footwear</li>
              <li>Light jacket or sweater (if touring in cooler months)</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">Tour Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">Duration:</p>
                  <p className="text-gray-700 mb-4">2 hours</p>

                  <p className="font-semibold mb-1">Difficulty:</p>
                  <p className="text-gray-700 mb-4">Easy</p>

                  <p className="font-semibold mb-1">Group Size:</p>
                  <p className="text-gray-700 mb-4">1-6 people per jeep</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Price:</p>
                  <p className="text-gray-700 mb-4">25 JOD per person (no group discounts)</p>

                  <p className="font-semibold mb-1">Includes:</p>
                  <p className="text-gray-700 mb-4">Transportation in 4x4 jeep, Bedouin guide</p>

                  <p className="font-semibold mb-1">Languages:</p>
                  <p className="text-gray-700">English, Arabic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-center">Book This Tour</h3>
              <BookingForm tourName="2 Hours Jeep Tour" />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <FAQSection faqs={desertExperienceFaqs.slice(0, 6)} />
        </div>

        {/* Related Tours */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TourCard
              title="Half Day Jeep Tour"
              slug="half-day-jeep-tour"
              description="Experience more of Wadi Rum with our 4-hour jeep tour visiting additional sites and attractions."
              price={35}
              duration="4 hours"
              image="/images/half-day-jeep.jpg"
            />
            <TourCard
              title="Camel Ride"
              slug="camel-rides"
              description="Experience the desert at a slower pace with our traditional camel rides guided by Bedouin experts."
              price={20}
              duration="2-3 hours"
              image="/images/camel-ride.jpg"
            />
            <TourCard
              title="Night Walk Tour"
              slug="night-walk-tour"
              description="Experience the tranquility of the desert at night with our guided walking tour from the camp."
              price={5}
              duration="1.5-2 hours"
              image="/images/wadi-rum-night.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
