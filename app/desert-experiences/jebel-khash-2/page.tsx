import Image from "next/image"
import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { FloatingBookButton } from "@/components/floating-book-button"

export const metadata: Metadata = {
  title: "Jebel Khash 2-Day Adventure | Wadi Rum Desert Tours & Experiences",
  description:
    "Experience the best of Wadi Rum with our 2-day Jebel Khash adventure combining a full day jeep tour and a day of hiking through spectacular landscapes with expert Bedouin guides.",
}

export default function JebelKhash2Page() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-landscape.jpg"
          alt="Jebel Khash 2-day adventure in Wadi Rum desert"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Jebel Khash 2-Day Adventure</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Discover the magic of Wadi Rum with a full day jeep tour and a day of hiking through Jebel Khash
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
              Our Jebel Khash 2-Day Adventure offers the perfect combination of exploration and immersion in the Wadi
              Rum desert. This comprehensive experience includes a full day jeep tour to discover the iconic sites of
              Wadi Rum, followed by a day of hiking through the spectacular Jebel Khash area, known for its diverse
              landscapes, hidden canyons, and breathtaking vistas.
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/wadi-rum-landscape.jpg"
                alt="Panoramic view of Jebel Khash in Wadi Rum"
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Expect</h3>
            <p className="mb-6 text-gray-700">
              This two-day adventure provides a perfect balance of different ways to experience Wadi Rum. On day one,
              you'll cover significant ground in a 4x4 jeep, visiting the major attractions and hidden gems of the
              desert. On day two, you'll slow down and connect more deeply with the landscape as you hike through the
              magnificent Jebel Khash area with our experienced Bedouin guides.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ImageLightbox
                src="/images/full-day-jeep.jpg"
                alt="Jeep tour in Wadi Rum desert"
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
              <ImageLightbox
                src="/images/hiking-trekking.jpg"
                alt="Hiking through the canyons of Jebel Khash"
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Day 1: Full Day Jeep Tour</h3>
            <p className="mb-4 text-gray-700">
              Your adventure begins with a comprehensive jeep tour covering the major attractions of Wadi Rum:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Lawrence's Spring and the inscriptions of Anfaishiyya</li>
              <li>The majestic sand dunes of Um Ishrin</li>
              <li>The natural rock bridge of Um Fruth</li>
              <li>The narrow canyon of Khazali with ancient inscriptions</li>
              <li>The stunning red sand dunes of the sunset area</li>
              <li>Traditional Bedouin lunch in the shade of a mountain</li>
              <li>Return to camp for dinner and overnight stay</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Day 2: Jebel Khash Hiking</h3>
            <p className="mb-4 text-gray-700">
              After breakfast at the camp, your hiking adventure through Jebel Khash begins:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Transfer to the starting point of the Jebel Khash trail</li>
              <li>Trek through diverse desert landscapes with stunning panoramic views</li>
              <li>Discover ancient Nabataean and Thamudic inscriptions</li>
              <li>Explore narrow canyons and hidden water sources</li>
              <li>Learn about Bedouin navigation techniques and desert survival</li>
              <li>Enjoy a traditional Bedouin lunch in a scenic location</li>
              <li>Continue through varied terrain, reaching spectacular viewpoints</li>
              <li>Return to the camp in the late afternoon</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Bring</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Comfortable hiking shoes with good grip</li>
              <li>Sun protection (hat, sunglasses, sunscreen)</li>
              <li>Light, breathable clothing (plus a layer for cooler seasons)</li>
              <li>Water bottle (we provide additional water)</li>
              <li>Camera for capturing the spectacular views</li>
              <li>Small backpack for personal items</li>
              <li>Overnight essentials for your stay at the camp</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">Tour Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">Duration:</p>
                  <p className="text-gray-700 mb-4">2 days / 1 night</p>

                  <p className="font-semibold mb-1">Difficulty:</p>
                  <p className="text-gray-700 mb-4">Moderate (requires reasonable fitness for day 2)</p>

                  <p className="font-semibold mb-1">Group Size:</p>
                  <p className="text-gray-700 mb-4">2-8 people</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Price:</p>
                  <p className="text-gray-700 mb-4">
                    180 JOD for 1 person
                    <br />
                    120 JOD per person for 2-3 persons
                    <br />
                    100 JOD per person for 4+ persons
                  </p>

                  <p className="font-semibold mb-1">Includes:</p>
                  <p className="text-gray-700 mb-4">Guide, transportation, all meals, water, tea, accommodation</p>

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
              <BookingForm tourName="Jebel Khash 2-Day Adventure" />
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
              title="Jebel Khash Route"
              slug="jebel-khash-route"
              description="Explore the spectacular Jebel Khash route, featuring unique rock formations and breathtaking vistas."
              price={75}
              duration="Full day"
              image="/images/jebel-khash.jpg"
            />
            <TourCard
              title="The Beduin Way"
              slug="the-beduin-way"
              description="Experience the alluring beauty and breathtaking scenery of the desert through our immersive tour with a experienced guide."
              price={100}
              duration="1 Day Jeep tour & 1 Day Camel ride"
              image="/images/beduin-way.jpg"
            />
            <TourCard
              title="Full Day Jeep Tour"
              slug="full-day-jeep-tour"
              description="A comprehensive 7-hour jeep tour exploring the vast beauty of Wadi Rum, including hidden canyons and ancient inscriptions."
              price={65}
              duration="7 hours"
              image="/images/full-day-jeep.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
