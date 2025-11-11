import Image from "next/image"
import type { Metadata } from "next"
import { BivouacBookingForm } from "@/components/bivouac-booking-form"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { FloatingBookButton } from "@/components/floating-book-button"

export const metadata: Metadata = {
  title: "Bivouac Camping Experience | Wadi Rum Desert",
  description:
    "Experience authentic desert camping with our Bivouac package. Choose your camping duration and combine with desert tours for a complete Wadi Rum adventure.",
}

export default function BivouacPage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-night.jpg"
          alt="Bivouac camping under the stars in Wadi Rum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">BIVOUAC CAMPING EXPERIENCE</h1>
          <p className="text-lg md:text-xl max-w-3xl">Sleep under the stars in the traditional Bedouin way</p>
        </div>
      </div>

      {/* Intro Section */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-2xl font-bold">Authentic Desert Experience</h2>
            <h3 className="mb-8 text-4xl font-bold">Bivouac Camping in Wadi Rum</h3>
            <p className="mx-auto max-w-3xl text-lg">
              Experience the desert as the Bedouins have for centuries with our authentic bivouac camping. Sleep under
              the vast starry sky, surrounded by the majestic landscapes of Wadi Rum, and connect with nature in its
              purest form.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* What is Bivouac Camping Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-right">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-amber-600">What is Bivouac Camping?</h2>
                <p className="text-gray-700 mb-4">
                  Bivouac camping is the most authentic way to experience the desert. Unlike structured camps, bivouac
                  camping involves setting up a simple, temporary camp in the wilderness, allowing you to truly immerse
                  yourself in the natural environment.
                </p>
                <p className="text-gray-700 mb-4">
                  Our Bedouin guides will select a secluded spot among the towering cliffs and sweeping dunes, where
                  you'll sleep on comfortable mattresses under traditional blankets. With no light pollution, you'll
                  witness the night sky in all its glory – a canopy of stars stretching from horizon to horizon.
                </p>
                <p className="text-gray-700">
                  This experience connects you with the ancient traditions of desert nomads while providing basic
                  comforts to ensure a memorable stay. It's camping in its purest form, yet with the security and
                  knowledge of experienced local guides.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/sleeping-under-stars.png"
                  alt="Bivouac camping setup in Wadi Rum"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What's Included in Bivouac Camping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Comfortable Sleeping</h3>
                <p className="text-gray-700">
                  Thick mattresses, clean sheets, pillows, and warm blankets to ensure a comfortable night's sleep under
                  the stars. We provide everything you need for a restful night in the desert.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Traditional Meals</h3>
                <p className="text-gray-700">
                  Authentic Bedouin dinner cooked over an open fire and breakfast in the morning. Experience traditional
                  dishes prepared using ancient desert cooking methods.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Expert Guides</h3>
                <p className="text-gray-700">
                  Local Bedouin guides who know the desert intimately and will ensure your safety while sharing their
                  knowledge of the land, stars, and Bedouin culture.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Scenic Locations</h3>
                <p className="text-gray-700">
                  We select the most beautiful and secluded spots for your bivouac experience, away from other tourists
                  and camps, offering privacy and unspoiled views.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Campfire Experience</h3>
                <p className="text-gray-700">
                  Gather around a traditional campfire in the evening for tea, stories, and stargazing. Experience the
                  desert night as Bedouins have for generations.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-amber-600">Basic Facilities</h3>
                <p className="text-gray-700">
                  Simple toilet facilities are available. While this is an authentic experience, we ensure basic
                  comforts are maintained throughout your stay.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Bivouac Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-right">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/desert-night.jpg"
                  alt="Starry night sky over Wadi Rum desert"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-amber-600">Why Choose Bivouac Camping?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>Authentic Experience:</strong> The most genuine way to experience the desert as locals
                      have for centuries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>Unparalleled Stargazing:</strong> No light pollution means spectacular views of the night
                      sky
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>Connection with Nature:</strong> Feel truly immersed in the desert environment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>Flexibility:</strong> Combine with your choice of tours for a customized experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>Value:</strong> An affordable way to experience the magic of sleeping in the desert
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">
                      <strong>Cultural Immersion:</strong> Learn about Bedouin traditions and way of life directly from
                      local guides
                    </span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Book Your Bivouac Experience</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Customize your bivouac experience by selecting the number of days and combining it with your choice of
            desert tours. The price for bivouac camping is 45 JOD per person per night, with discounts available for
            larger groups on tours.
          </p>
          <div className="max-w-4xl mx-auto">
            <BivouacBookingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">Is bivouac camping safe?</h3>
                <p className="text-gray-700">
                  Yes, our experienced Bedouin guides ensure your safety throughout the experience. They know the desert
                  intimately and select secure locations for camping.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">What should I bring?</h3>
                <p className="text-gray-700">
                  We recommend bringing warm clothes for the night (desert temperatures drop significantly), a
                  flashlight, personal toiletries, and a camera. We provide all camping equipment.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">Are there bathroom facilities?</h3>
                <p className="text-gray-700">
                  We provide basic toilet facilities. This is an authentic desert experience, so facilities are simple
                  but adequate for a comfortable stay.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">Is bivouac suitable for children?</h3>
                <p className="text-gray-700">
                  Yes, children often love the adventure of bivouac camping. We recommend it for children aged 5 and
                  above, and we can make special arrangements for families.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">What if the weather is bad?</h3>
                <p className="text-gray-700">
                  In case of unsuitable weather conditions, we offer alternatives such as staying in our traditional
                  Bedouin camp. Safety is always our priority.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-amber-600">Can I combine multiple days of bivouac?</h3>
                <p className="text-gray-700">
                  Many guests choose to spend multiple nights in different locations throughout the desert, experiencing
                  various landscapes and environments.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <AnimateOnScroll>
        <section className="py-16 bg-amber-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for an Authentic Desert Adventure?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book your bivouac experience today and discover the magic of sleeping under the stars in Wadi Rum. Combine
              with your choice of tours for a complete desert adventure.
            </p>
            <p className="text-lg mb-8">For special requests or group bookings, please contact us directly.</p>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  )
}
