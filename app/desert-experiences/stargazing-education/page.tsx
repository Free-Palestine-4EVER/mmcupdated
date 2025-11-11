import Image from "next/image"
import type { Metadata } from "next"
import { BookingForm } from "@/components/booking-form"
import { FAQSection } from "@/components/faq-section"
import { desertExperienceFaqs } from "@/data/desert-experience-faqs"
import { TourCard } from "@/components/tour-card"
import { ImageLightbox } from "@/components/image-lightbox"
import { FloatingBookButton } from "@/components/floating-book-button"

export const metadata: Metadata = {
  title: "Stargazing Education | Wadi Rum Desert Experiences",
  description:
    "Learn about the night sky with our expert Bedouin guide who will teach you how to navigate using the stars, identify constellations, and share ancient desert astronomy knowledge.",
}

export default function StargazingEducationPage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/blog-stargazing.jpg"
          alt="Stargazing education in Wadi Rum desert"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Stargazing Education</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Learn to navigate by the stars and discover the wonders of the night sky
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-600">Experience Overview</h2>
            <p className="mb-6 text-gray-700">
              Our Stargazing Education experience brings the ancient art of celestial navigation to life. An expert
              guide will come directly to our camp with a laser pointer and specialized knowledge to teach you how to
              navigate using the stars, identify major constellations, and understand the night sky as the Bedouin have
              for centuries.
            </p>

            <div className="mb-8">
              <ImageLightbox
                src="/images/blog-stargazing.jpg"
                alt="Stargazing in Wadi Rum desert with guide pointing at stars"
                width={800}
                height={500}
                className="rounded-lg w-full h-auto object-cover mb-6"
              />
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Expect</h3>
            <p className="mb-6 text-gray-700">
              Wadi Rum's clear skies and minimal light pollution make it one of the best places in the world for
              stargazing. This educational experience takes place right at our camp, where your guide will use a laser
              pointer to identify stars, planets, and constellations. You'll learn practical navigation techniques that
              have guided desert travelers for generations, along with fascinating stories about how the stars have
              influenced Bedouin culture.
            </p>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Highlights</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Learn to identify major stars, planets, and constellations</li>
              <li>Understand basic celestial navigation techniques</li>
              <li>Discover how Bedouins have used the stars for navigation throughout history</li>
              <li>Hear ancient stories and legends associated with the night sky</li>
              <li>Experience the desert's incredible stargazing conditions</li>
              <li>Take stunning night sky photographs with guidance from your expert</li>
              <li>Enjoy this educational experience from the comfort of our camp</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 text-amber-600">Program</h3>
            <div className="mb-8">
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Introduction to Desert Astronomy</h4>
                <p className="text-gray-700">
                  Your guide will begin with an overview of why desert skies are special and how to orient yourself
                  using cardinal directions at night.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Star and Constellation Identification</h4>
                <p className="text-gray-700">
                  Using a laser pointer, your guide will help you identify major stars, planets, and constellations
                  visible in the night sky, explaining their significance in Bedouin culture.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 mb-6">
                <h4 className="font-bold mb-2">Navigation Techniques</h4>
                <p className="text-gray-700">
                  Learn practical techniques for finding direction using the stars, including how to locate the North
                  Star and use it for navigation.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold mb-2">Q&A and Photography Tips</h4>
                <p className="text-gray-700">
                  Your guide will answer questions and provide tips for night sky photography if you're interested in
                  capturing the spectacular desert stars.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-amber-600">What to Bring</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Warm clothing (desert nights can be cool)</li>
              <li>Camera with manual settings if you want to try astrophotography</li>
              <li>Notebook if you wish to take notes</li>
              <li>Red flashlight (if you have one) to preserve night vision</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-amber-600">Experience Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-1">Duration:</p>
                  <p className="text-gray-700 mb-4">2 hours</p>

                  <p className="font-semibold mb-1">Difficulty:</p>
                  <p className="text-gray-700 mb-4">Easy - takes place at the camp</p>

                  <p className="font-semibold mb-1">Group Size:</p>
                  <p className="text-gray-700 mb-4">Minimum 3 people</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Price:</p>
                  <p className="text-gray-700 mb-4">100 JOD for up to 3 persons, 15 JOD for each additional person</p>

                  <p className="font-semibold mb-1">Includes:</p>
                  <p className="text-gray-700 mb-4">Expert guide, laser pointer demonstration, tea</p>

                  <p className="font-semibold mb-1">Languages:</p>
                  <p className="text-gray-700">English, Arabic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-center">Book This Experience</h3>
              <BookingForm tourName="Stargazing Education" />
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
              title="Night Walk Tour"
              slug="night-walk-tour"
              description="Experience the tranquility and beauty of the desert under the night sky with a guided walk from our camp."
              price={5}
              duration="1.5-2 hours"
              image="/images/wadi-rum-night.jpg"
            />
            <TourCard
              title="Jeep Tours with Stargazing"
              slug="jeep-tours-stargazing"
              description="Combine a jeep tour with a special stargazing experience in a remote desert location."
              price={45}
              duration="4-5 hours"
              image="/images/blog-desert-night.jpg"
            />
            <TourCard
              title="Overnight Desert Camp"
              slug="overnight-desert-camp"
              description="Spend a night under the stars in our traditional Bedouin camp with dinner and breakfast included."
              price={25}
              duration="Overnight"
              image="/images/camping.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
