import Image from "next/image"
import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { FloatingBookButton } from "@/components/floating-book-button"

export const metadata: Metadata = {
  title: "Jebel Khash Route | Wadi Rum Desert Tours & Experiences",
  description:
    "Experience our combined half-day jeep tour and 3-hour Jebel Khash climb in Wadi Rum with expert Bedouin guides. Enjoy breathtaking views, ancient inscriptions, and unique rock formations.",
}

export default function JebelKhashRoutePage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-landscape.jpg"
          alt="Jebel Khash Route in Wadi Rum desert"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Jebel Khash Route</h1>
          <p className="text-lg md:text-xl max-w-3xl">Half-Day Jeep Tour + 3 Hours Jebel Khash Climbing Adventure</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-600">Tour Overview</h2>
            <p className="mb-6 text-gray-700">
              Our Jebel Khash Route combines the best of both worlds: a scenic half-day jeep tour through Wadi Rum's
              spectacular landscapes, followed by an exhilarating 3-hour climb of Jebel Khash. This combined experience
              allows you to see more of Wadi Rum's iconic sites while also enjoying the thrill and panoramic views of
              climbing one of the region's distinctive mountain formations.
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
              During the jeep tour portion, you'll visit several of Wadi Rum's iconic sites, including ancient rock
              inscriptions, natural arches, and vast open valleys. After exploring by vehicle, we'll arrive at the base
              of Jebel Khash where our experienced Bedouin guides will lead you on a 3-hour climbing adventure to the
              summit. From the top, you'll enjoy breathtaking panoramic views of the surrounding desert landscape that
              few visitors get to experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ImageLightbox
                src="/images/hiking-trekking.jpg"
                alt="Climbing the rocky slopes of Jebel Khash"
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
              <ImageLightbox
                src="/images/rock-climbing.jpg"
                alt="Rock formations along the Jebel Khash Route"
                width={400}
                height={300}
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Highlights</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Explore Wadi Rum's iconic sites by 4x4 jeep with an experienced Bedouin guide</li>
              <li>Visit ancient Nabataean and Thamudic inscriptions</li>
              <li>Experience a guided 3-hour climb of Jebel Khash</li>
              <li>Enjoy spectacular panoramic views from the summit</li>
              <li>Learn about Bedouin culture, navigation techniques, and desert survival</li>
              <li>Enjoy a traditional Bedouin tea break in a scenic location</li>
              <li>Photograph unique rock formations and natural arches</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Itinerary</h3>
            <div className="mb-8">
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Morning Departure (9:00 AM)</h4>
                <p className="text-gray-700">
                  We'll start from Rum Village and begin our jeep tour through the desert landscape, visiting key sites
                  including Lawrence's Spring, Khazali Canyon, and the Small Arch.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Jeep Tour Exploration (9:00 AM - 12:00 PM)</h4>
                <p className="text-gray-700">
                  Our 4x4 jeep will take you through narrow canyons with towering sandstone walls, where you'll see
                  ancient inscriptions and unique geological formations. We'll stop at several viewpoints for photos and
                  enjoy a traditional Bedouin tea break.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Lunch Break (12:00 PM - 1:00 PM)</h4>
                <p className="text-gray-700">
                  Enjoy a delicious lunch in the shade near the base of Jebel Khash, with views of the surrounding
                  mountains. Your guide will provide information about the upcoming climb.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold mb-2">Jebel Khash Climb (1:00 PM - 4:00 PM)</h4>
                <p className="text-gray-700">
                  The highlight of the day is a 3-hour guided climb of Jebel Khash. The climb involves some moderate
                  scrambling but is suitable for those with reasonable fitness. At the summit, you'll be rewarded with
                  spectacular 360-degree views of Wadi Rum before descending and returning to Rum Village.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <ImageLightbox
                src="/images/wadi-rum-adventure.jpg"
                alt="Desert landscape along the Jebel Khash Route"
                width={300}
                height={200}
                className="rounded-lg w-full h-48 object-cover"
              />
              <ImageLightbox
                src="/images/beduin-way.jpg"
                alt="Bedouin guide leading the way through Jebel Khash"
                width={300}
                height={200}
                className="rounded-lg w-full h-48 object-cover"
              />
              <ImageLightbox
                src="/images/jebel-um-addami.jpg"
                alt="Mountain views from the Jebel Khash Route"
                width={300}
                height={200}
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Bring</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Comfortable hiking shoes with good grip (essential for the climb)</li>
              <li>Sun protection (hat, sunglasses, sunscreen)</li>
              <li>Light, breathable clothing (plus a layer for cooler seasons)</li>
              <li>Water bottle (we provide additional water)</li>
              <li>Camera for capturing the spectacular views</li>
              <li>Small backpack for personal items</li>
              <li>Light snacks if desired (lunch is provided)</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">Tour Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">Duration:</p>
                  <p className="text-gray-700 mb-4">7 hours (4-hour jeep tour + 3-hour climb)</p>

                  <p className="font-semibold mb-1">Difficulty:</p>
                  <p className="text-gray-700 mb-4">Moderate (requires reasonable fitness for the climb)</p>

                  <p className="font-semibold mb-1">Group Size:</p>
                  <p className="text-gray-700 mb-4">1-6 persons</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Price:</p>
                  <p className="text-gray-700 mb-4">
                    140 JOD per person for 1 person
                    <br />
                    90 JOD per person for 2-3 persons
                    <br />
                    80 JOD per person for 4-6 persons
                  </p>

                  <p className="font-semibold mb-1">Includes:</p>
                  <p className="text-gray-700 mb-4">Guide, 4x4 jeep transportation, lunch, water, tea</p>

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
              <BookingForm tourName="Jebel Khash Route" />
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
              title="Half-Day Jeep Tour"
              slug="half-day-jeep-tour"
              description="Explore the highlights of Wadi Rum in a 4x4 jeep tour with our experienced Bedouin guides."
              price={35}
              duration="4 hours"
              image="/images/half-day-jeep.jpg"
            />
            <TourCard
              title="Jebel Burdah Climbing"
              slug="jebel-burdah-climbing"
              description="Challenge yourself with a climb to the famous rock bridge of Jebel Burdah."
              price={85}
              duration="Full day"
              image="/images/rock-climbing.jpg"
            />
            <TourCard
              title="Jebel Khash 2-Day Adventure"
              slug="jebel-khash-2"
              description="Experience a comprehensive 2-day adventure exploring and climbing Jebel Khash with overnight camping."
              price={100}
              duration="2 days"
              image="/images/hiking-trekking.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
