import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BookingForm } from "@/components/booking-form"
import { FloatingBookButton } from "@/components/floating-book-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wadi Rum Discovery Package | 3-Day Comprehensive Experience",
  description:
    "Explore Wadi Rum's diverse landscapes and hidden gems with our 3-day Discovery package combining jeep tours, hiking, and authentic Bedouin experiences.",
}

export default function WadiRumDiscoveryPage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/wadi-rum-landscape.jpg"
          alt="Wadi Rum Discovery Package"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">WADI RUM DISCOVERY PACKAGE</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            A comprehensive 3-day exploration of Wadi Rum's diverse landscapes and hidden gems
          </p>
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
                  Our Wadi Rum Discovery package offers a comprehensive exploration of the desert's diverse landscapes
                  and hidden gems over three full days. This carefully crafted itinerary takes you beyond the typical
                  tourist routes to experience the true breadth and depth of Wadi Rum's natural wonders.
                </p>
                <p className="text-lg mb-6">
                  You'll spend two nights at our traditional Bedouin camp, with days filled with exploration by jeep and
                  on foot. Each day focuses on different regions of Wadi Rum, ensuring you experience the remarkable
                  variety of landscapes, from massive rock formations and narrow canyons to vast open plains and hidden
                  water sources. This package is perfect for those who want to truly discover all that Wadi Rum has to
                  offer.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Package Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Exploration of the northern, central, and southern regions of Wadi Rum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Visit to rarely seen sites off the typical tourist routes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Combination of jeep tours and hiking for diverse perspectives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Two nights in a traditional Bedouin camp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Authentic Bedouin meals and cultural experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Spectacular sunset and sunrise viewing opportunities</span>
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
                      <p>3 days / 2 nights</p>
                    </div>
                    <div>
                      <p className="font-semibold">Price:</p>
                      <p className="text-2xl font-bold text-amber-600">200 JOD per person</p>
                      <p className="text-sm text-gray-600">(Based on 2 people. Group discounts available)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Difficulty Level:</p>
                      <p>Moderate</p>
                    </div>
                    <div>
                      <p className="font-semibold">Suitable For:</p>
                      <p>Reasonably fit travelers, nature enthusiasts, photographers</p>
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
                <h3 className="text-2xl font-bold">Day 1: Northern Wadi Rum Exploration</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">09:00 AM - Start of the Tour</p>
                      <p>
                        Meet your Bedouin guide at Wadi Rum Village. After a brief introduction and overview of the
                        three-day itinerary, you'll board your 4x4 jeep and head into the northern region of the desert.
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
                      <p className="font-semibold">04:30 PM - Hidden Valley Hike</p>
                      <p>
                        Take a short hike through a secluded valley rarely visited by tourists, with unique rock
                        formations and potential wildlife sightings.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">06:00 PM - Sunset Viewing</p>
                      <p>Arrive at a panoramic viewpoint to watch the sunset transform the desert colors.</p>
                    </div>
                    <div>
                      <p className="font-semibold">07:00 PM - Arrival at Camp</p>
                      <p>
                        Arrive at our traditional Bedouin camp where you'll be welcomed with tea and shown to your
                        accommodation.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">08:00 PM - Dinner</p>
                      <p>
                        Enjoy a traditional Bedouin dinner, often featuring zarb (meat and vegetables cooked
                        underground).
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">09:30 PM - Stargazing</p>
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
                      alt="Northern Wadi Rum exploration"
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
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold">Day 2: Central Wadi Rum & Hiking</h3>
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
                      <p>Enjoy a hearty breakfast at the camp to prepare for your day of exploration.</p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 AM - Depart for Central Wadi Rum</p>
                      <p>
                        Board your jeep and head to the central region of Wadi Rum, known for its massive mountains and
                        unique geological formations.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">10:00 AM - Burdah Rock Bridge</p>
                      <p>
                        Visit the impressive Burdah Rock Bridge, one of the highest natural arches in Wadi Rum. You'll
                        have the opportunity for a short hike to a viewpoint (not climbing the arch itself).
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">11:30 AM - Abu Khashaba Canyon</p>
                      <p>
                        Enjoy a 2-hour guided hike through this beautiful canyon with its colorful sandstone walls and
                        diverse plant life.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">01:30 PM - Lunch</p>
                      <p>
                        Enjoy a picnic lunch in a shaded spot within the canyon, with time to rest and appreciate the
                        surroundings.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">03:00 PM - Um Ishrin Mountain</p>
                      <p>
                        Visit the base of this massive mountain and learn about its geological significance and the
                        legends associated with it.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">04:30 PM - White Desert</p>
                      <p>
                        Explore an area where the red sand gives way to white sand, creating a striking contrast in the
                        landscape.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">06:00 PM - Sunset Viewing</p>
                      <p>
                        Arrive at a different panoramic viewpoint from day one to experience another perspective of the
                        sunset.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">07:00 PM - Return to Camp</p>
                      <p>Return to the camp for relaxation and refreshments.</p>
                    </div>
                    <div>
                      <p className="font-semibold">08:00 PM - Dinner</p>
                      <p>Enjoy another traditional Bedouin dinner with different dishes from the previous night.</p>
                    </div>
                    <div>
                      <p className="font-semibold">09:30 PM - Bedouin Music</p>
                      <p>
                        Experience traditional Bedouin music around the campfire, with the opportunity to learn about
                        the instruments and rhythms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/hiking-trekking.jpg"
                      alt="Hiking in central Wadi Rum"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Day 3 */}
          <AnimateOnScroll>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold">Day 3: Southern Wadi Rum Exploration</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">07:00 AM - Sunrise (Optional)</p>
                      <p>Early risers can enjoy the desert sunrise from a different vantage point near the camp.</p>
                    </div>
                    <div>
                      <p className="font-semibold">08:00 AM - Breakfast</p>
                      <p>Enjoy a final breakfast at the camp before checking out.</p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 AM - Depart for Southern Wadi Rum</p>
                      <p>
                        Board your jeep and head to the southern region of Wadi Rum, an area less visited by tourists
                        with some of the most dramatic landscapes.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">10:00 AM - Um Sabatah</p>
                      <p>
                        Visit this area known for its expansive red and white sand dunes, with time to climb and enjoy
                        the panoramic views.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">11:30 AM - Desert Oasis</p>
                      <p>
                        Discover a hidden water source that supports unique desert vegetation and occasionally attracts
                        wildlife.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:30 PM - Lunch</p>
                      <p>Enjoy a final desert lunch in a scenic location.</p>
                    </div>
                    <div>
                      <p className="font-semibold">02:00 PM - Mushroom Rock</p>
                      <p>
                        Visit this distinctive rock formation that has been shaped by centuries of wind erosion to
                        resemble a giant mushroom.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">03:00 PM - Final Desert Hike</p>
                      <p>
                        Take a short farewell hike to a viewpoint offering a panoramic vista of the areas you've
                        explored over the past three days.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">04:30 PM - Return to Wadi Rum Village</p>
                      <p>
                        Begin your journey back to Wadi Rum Village, with time for final photos and reflections on your
                        three-day desert experience.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">05:30 PM - Arrival at Wadi Rum Village</p>
                      <p>Arrive back at Wadi Rum Village, concluding your Wadi Rum Discovery package.</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/wadi-rum-adventure.jpg"
                      alt="Southern Wadi Rum exploration"
                      fill
                      className="object-cover"
                    />
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
                    <span>Three full days of guided exploration with English-speaking Bedouin guide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Jeep transportation throughout the tour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Multiple guided hiking experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Two nights accommodation in a traditional Bedouin camp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>All meals (3 lunches, 2 dinners, 2 breakfasts)</span>
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
                    <span>Cultural activities including music and stargazing</span>
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
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Specialized equipment for hiking (good walking shoes required)</span>
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
            <BookingForm tourName="Wadi Rum Discovery Package" />
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
                <h3 className="text-xl font-bold mb-2">How physically demanding is this package?</h3>
                <p>
                  This package is moderately demanding, with several hiking portions each day. The hikes range from 1-3
                  hours and are conducted at a comfortable pace with breaks. A reasonable level of fitness is
                  recommended, but no technical climbing skills are required.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Is this package suitable for children?</h3>
                <p>
                  This package is suitable for children aged 10 and above who are accustomed to hiking. For younger
                  children, we recommend our Classic Adventure or Desert Explorer packages, which are less physically
                  demanding.
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
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">What should I pack for this 3-day adventure?</h3>
                <p>
                  We recommend bringing comfortable clothing, sturdy hiking shoes, a hat, sunglasses, sunscreen, a light
                  jacket for evenings (desert nights can be cool), a small backpack for day hikes, personal medications,
                  a headlamp or flashlight, and a camera. All bedding and towels are provided at the camp.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Can you accommodate dietary restrictions?</h3>
                <p>
                  Yes, we can accommodate vegetarian, vegan, and most dietary restrictions with advance notice. Please
                  mention any dietary requirements when booking.
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

            <AnimateOnScroll animation="fade-in" delay={200}>
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
          </div>
        </div>
      </section>
    </div>
  )
}
