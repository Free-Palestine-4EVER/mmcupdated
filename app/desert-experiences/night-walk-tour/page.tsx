import Image from "next/image"
import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { FloatingBookButton } from "@/components/floating-book-button"

export const metadata: Metadata = {
  title: "Night Walk Tour | Wadi Rum Desert Experiences",
  description:
    "Experience the magic of Wadi Rum after dark with our guided Night Walk Tour. Enjoy the tranquility of the desert at night, sip traditional Bedouin tea under the stars, and learn about desert navigation.",
}

export default function NightWalkTourPage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-night.jpg"
          alt="Night walk tour in Wadi Rum desert"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Night Walk Tour</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Experience the tranquility and beauty of the desert under the night sky
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
              Our Night Walk Tour offers a unique opportunity to experience the magic of Wadi Rum after dark. Starting
              from our camp, you'll embark on a guided walk into the desert to a specially designated area where you can
              enjoy the tranquility of the night, sip traditional Bedouin tea, and marvel at the star-filled sky before
              returning to camp.
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/wadi-rum-night.jpg"
                alt="Starry night sky over Wadi Rum desert"
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Expect</h3>
            <p className="mb-6 text-gray-700">
              The desert transforms completely after sunset, offering a peaceful and magical atmosphere that few
              travelers get to experience. Our Night Walk Tour allows you to connect with the desert in a different way,
              experiencing its sounds, smells, and the incredible night sky away from light pollution. Your Bedouin
              guide will lead you safely through the terrain and share stories and knowledge about desert life at night.
            </p>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Highlights</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Experience the desert's transformation after dark</li>
              <li>Enjoy the peace and tranquility of Wadi Rum at night</li>
              <li>Marvel at the incredible star-filled sky</li>
              <li>Learn about Bedouin night navigation techniques</li>
              <li>Sip traditional Bedouin tea in a scenic desert location</li>
              <li>Listen to the subtle sounds of the desert at night</li>
              <li>Return to camp with a new appreciation for the desert</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Itinerary</h3>
            <div className="mb-8">
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Evening Departure</h4>
                <p className="text-gray-700">
                  After dinner at the camp, your guide will brief you on the night walk and provide any necessary
                  equipment like flashlights (though we'll use these minimally to preserve night vision).
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Desert Walk</h4>
                <p className="text-gray-700">
                  Walk from the camp into the desert to a specially selected location, learning about how Bedouins
                  navigate at night and discovering the desert's nocturnal character.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Tea Under the Stars</h4>
                <p className="text-gray-700">
                  Arrive at our designated spot where you'll sit and enjoy traditional Bedouin tea while your guide
                  shares stories and points out constellations in the night sky.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold mb-2">Return to Camp</h4>
                <p className="text-gray-700">
                  After spending time enjoying the peaceful desert night, you'll walk back to the camp with your guide,
                  often with a deeper connection to the desert environment.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Bring</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Comfortable walking shoes</li>
              <li>Warm layer or jacket (desert temperatures drop at night)</li>
              <li>Small backpack for personal items</li>
              <li>Camera (if you want to try night photography)</li>
              <li>Water bottle</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">Tour Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">Duration:</p>
                  <p className="text-gray-700 mb-4">1.5-2 hours</p>

                  <p className="font-semibold mb-1">Difficulty:</p>
                  <p className="text-gray-700 mb-4">Easy to moderate</p>

                  <p className="font-semibold mb-1">Group Size:</p>
                  <p className="text-gray-700 mb-4">Minimum 5 people</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Price:</p>
                  <p className="text-gray-700 mb-4">10 JOD per person (minimum 5 persons)</p>

                  <p className="font-semibold mb-1">Includes:</p>
                  <p className="text-gray-700 mb-4">Guide, Bedouin tea</p>

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
              <BookingForm tourName="Night Walk Tour" />
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
              title="Stargazing Education"
              slug="stargazing-education"
              description="Learn about the night sky with our expert guide who will teach you how to navigate using the stars."
              price={15}
              duration="2 hours"
              image="/images/blog-stargazing.jpg"
            />
            <TourCard
              title="Half Day Jeep Tour"
              slug="half-day-jeep-tour"
              description="Experience the highlights of Wadi Rum in this 4-hour jeep tour, visiting key sites and enjoying the desert landscape."
              price={35}
              duration="4 hours"
              image="/images/half-day-jeep.jpg"
            />
            <TourCard
              title="2 Hours Jeep Tour"
              slug="two-hour-jeep-tour"
              description="A quick but comprehensive introduction to Wadi Rum's beauty with visits to key sites near the camp."
              price={25}
              duration="2 hours"
              image="/images/jeep-tour-card.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
