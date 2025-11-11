import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BookingForm } from "@/components/booking-form"
import { FloatingBookButton } from "@/components/floating-book-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Classic Adventure Package | 2-Day Wadi Rum Experience",
  description:
    "Experience the perfect introduction to Wadi Rum with our 2-day Classic Adventure package combining a full-day jeep tour and half-day hiking experience.",
}

export default function ClassicAdventurePage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/full-day-jeep.jpg"
          alt="Classic Adventure Package in Wadi Rum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">CLASSIC ADVENTURE PACKAGE</h1>
          <p className="text-lg md:text-xl max-w-3xl">A perfect 2-day introduction to Wadi Rum's stunning landscapes</p>
        </div>
      </div>

      {/* Overview Section */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Package Overview</h2>
                <p className="text-lg mb-6">
                  Our Classic Adventure package is the perfect introduction to Wadi Rum, combining a comprehensive
                  full-day jeep tour with a half-day hiking experience. This carefully crafted 2-day itinerary allows
                  you to experience the desert from different perspectives, seeing both the iconic landmarks and hidden
                  gems of Wadi Rum.
                </p>
                <p className="text-lg mb-6">
                  You'll spend one night at our traditional Bedouin camp, enjoying authentic cuisine under the stars and
                  experiencing the tranquility of the desert at night. This package is ideal for first-time visitors who
                  want to maximize their time in Wadi Rum and experience both motorized exploration and on-foot
                  adventure.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Package Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Comprehensive full-day jeep tour covering all major sites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Half-day guided hiking experience through scenic canyons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Overnight stay in a traditional Bedouin camp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Authentic Bedouin meals and traditional tea</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Sunset viewing from a panoramic location</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Stargazing opportunity in one of the world's darkest skies</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Package Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">Duration:</p>
                      <p>2 days / 1 night</p>
                    </div>
                    <div>
                      <p className="font-semibold">Price:</p>
                      <p className="text-2xl font-bold text-amber-600">120 JOD per person</p>
                      <p className="text-sm text-gray-600">(Based on 2 people. Group discounts available)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Difficulty Level:</p>
                      <p>Easy to Moderate</p>
                    </div>
                    <div>
                      <p className="font-semibold">Suitable For:</p>
                      <p>Most fitness levels, families, couples, solo travelers</p>
                    </div>
                    <div>
                      <p className="font-semibold">Departure:</p>
                      <p>Daily at 9:00 AM from Wadi Rum Village</p>
                    </div>
                    <Link href="#booking">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 mt-4">Book This Package</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Detailed Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Detailed Itinerary</h2>

          {/* Day 1 */}
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold">Day 1: Full-Day Jeep Tour</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">09:00 AM - Start of the Tour</p>
                      <p>
                        Meet your Bedouin guide at Wadi Rum Village. After a brief introduction and overview of the
                        day's itinerary, you'll board your 4x4 jeep and head into the desert.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">09:30 AM - Lawrence's Spring</p>
                      <p>
                        Visit this natural spring named after T.E. Lawrence ("Lawrence of Arabia"), who described Wadi
                        Rum as "vast, echoing and god-like" in his book Seven Pillars of Wisdom.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">10:30 AM - Khazali Canyon</p>
                      <p>
                        Explore this narrow fissure in the mountain with ancient Thamudic and Nabataean inscriptions
                        dating back thousands of years.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">11:30 AM - Small Rock Bridge</p>
                      <p>
                        Visit and climb this natural rock formation for spectacular views of the surrounding landscape.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:30 PM - Lunch</p>
                      <p>Enjoy a traditional Bedouin lunch prepared in the desert, with time to rest in the shade.</p>
                    </div>
                    <div>
                      <p className="font-semibold">02:00 PM - Um Fruth Rock Bridge</p>
                      <p>Visit this iconic rock bridge and, if you wish, climb to the top for panoramic views.</p>
                    </div>
                    <div>
                      <p className="font-semibold">03:00 PM - Red Sand Dunes</p>
                      <p>
                        Experience the famous red sand dunes of Wadi Rum, with time to climb and enjoy the soft sand.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">04:30 PM - Sunset Spot</p>
                      <p>Arrive at a panoramic viewpoint to watch the sunset transform the desert colors.</p>
                    </div>
                    <div>
                      <p className="font-semibold">06:00 PM - Arrival at Camp</p>
                      <p>
                        Arrive at our traditional Bedouin camp where you'll be welcomed with tea and shown to your
                        accommodation.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">07:30 PM - Dinner</p>
                      <p>
                        Enjoy a traditional Bedouin dinner, often featuring zarb (meat and vegetables cooked
                        underground).
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 PM - Stargazing</p>
                      <p>
                        Experience the incredible night sky of Wadi Rum, one of the world's best locations for
                        stargazing.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/full-day-jeep-main.jpg"
                      alt="Jeep tour in Wadi Rum"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Day 2 */}
          <AnimateOnScroll>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold">Day 2: Hiking Experience</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">07:00 AM - Sunrise (Optional)</p>
                      <p>Early risers can enjoy the desert sunrise from the camp.</p>
                    </div>
                    <div>
                      <p className="font-semibold">08:00 AM - Breakfast</p>
                      <p>Enjoy a hearty breakfast at the camp to prepare for your hiking adventure.</p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 AM - Start Hiking</p>
                      <p>
                        Begin your guided hiking experience through one of Wadi Rum's scenic canyons. Your guide will
                        select the best route based on your fitness level and interests.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">10:30 AM - Hidden Canyon</p>
                      <p>
                        Explore a secluded canyon with fascinating rock formations and potential wildlife sightings.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:00 PM - Rest and Refreshments</p>
                      <p>Take a break in a shaded area to enjoy refreshments and Bedouin tea.</p>
                    </div>
                    <div>
                      <p className="font-semibold">01:00 PM - Continue Hiking</p>
                      <p>
                        Continue your hike to a panoramic viewpoint offering spectacular views of the desert landscape.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">02:30 PM - Return to Camp</p>
                      <p>Return to the camp for lunch and some time to rest before departure.</p>
                    </div>
                    <div>
                      <p className="font-semibold">03:30 PM - Departure</p>
                      <p>
                        After lunch, you'll be transferred back to Wadi Rum Village, concluding your Classic Adventure
                        package.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image src="/images/hiking-trekking.jpg" alt="Hiking in Wadi Rum" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What's Included */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Full-day jeep tour with English-speaking Bedouin guide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Half-day guided hiking experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>One night accommodation in a traditional Bedouin camp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>All meals (1 lunch, 1 dinner, 1 breakfast, 1 lunch)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Water and traditional Bedouin tea throughout the tour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Entrance fees to Wadi Rum Protected Area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Transportation within Wadi Rum</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">What's Not Included</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Personal expenses and souvenirs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Travel insurance (highly recommended)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Alcoholic beverages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Tips for guides (optional but appreciated)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Book This Package</h2>
          <div className="max-w-3xl mx-auto">
            <BookingForm tourName="Classic Adventure Package" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <AnimateOnScroll>
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Is this package suitable for children?</h3>
                <p>
                  Yes, this package is suitable for children aged 6 and above. The hiking portion can be adjusted to
                  accommodate younger participants. Children under 6 may find the full day of activities challenging.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">What should I pack for this 2-day adventure?</h3>
                <p>
                  We recommend bringing comfortable clothing, hiking shoes, a hat, sunglasses, sunscreen, a light jacket
                  for evenings (desert nights can be cool), a small backpack, personal medications, and a camera. All
                  bedding and towels are provided at the camp.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">How difficult is the hiking portion?</h3>
                <p>
                  The hiking is of moderate difficulty and can be adjusted based on your fitness level. The typical
                  route involves some uneven terrain but no technical climbing. Your guide will select an appropriate
                  path based on the group's capabilities.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Can you accommodate dietary restrictions?</h3>
                <p>
                  Yes, we can accommodate vegetarian, vegan, and most dietary restrictions with advance notice. Please
                  mention any dietary requirements when booking.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">What type of accommodation is provided?</h3>
                <p>
                  You'll stay in a traditional Bedouin camp with private tents equipped with comfortable beds, clean
                  bedding, and access to shared bathroom facilities (separate for men and women) with toilets and
                  showers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Related Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-in" delay={100}>
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

            <AnimateOnScroll animation="fade-in" delay={200}>
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

            <AnimateOnScroll animation="fade-in" delay={300}>
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
                    A comprehensive 3-day exploration of Wadi Rum's diverse landscapes and hidden gems.
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
          </div>
        </div>
      </section>
    </div>
  )
}
