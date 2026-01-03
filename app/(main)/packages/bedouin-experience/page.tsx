import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BookingForm } from "@/components/booking-form"
import { FloatingBookButton } from "@/components/floating-book-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bedouin Experience Package | 2-Day Cultural Immersion",
  description:
    "Immerse yourself in authentic Bedouin culture with our 2-day package featuring traditional activities, meals, music, and desert exploration in Wadi Rum.",
}

export default function BedouinExperiencePage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/blog-stargazing.jpg"
          alt="Bedouin Experience Package in Wadi Rum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">BEDOUIN EXPERIENCE PACKAGE</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Immerse yourself in authentic Bedouin culture and traditions over 2 days
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
                  Our Bedouin Experience package offers a deep cultural immersion into the traditional way of life that
                  has sustained desert communities for centuries. This carefully crafted 2-day itinerary allows you to
                  not only see the magnificent landscapes of Wadi Rum but also to connect with the rich cultural
                  heritage of the Bedouin people.
                </p>
                <p className="text-lg mb-6">
                  You'll spend one night at our traditional Bedouin camp, participating in cultural activities,
                  listening to stories passed down through generations, enjoying traditional music, and learning about
                  desert survival techniques. This package is ideal for those who seek a deeper understanding of the
                  human connection to this ancient desert landscape.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Package Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Jeep tour to culturally significant sites in Wadi Rum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Traditional bread-making and tea preparation lessons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Bedouin music and storytelling around the campfire</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Desert survival skills demonstration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Traditional Bedouin meals prepared using ancient techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Guided stargazing with Bedouin astronomical knowledge</span>
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
                      <p className="text-2xl font-bold text-amber-600">150 JOD per person</p>
                      <p className="text-sm text-gray-600">(Based on 2 people. Group discounts available)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Difficulty Level:</p>
                      <p>Easy</p>
                    </div>
                    <div>
                      <p className="font-semibold">Suitable For:</p>
                      <p>All ages, families, couples, solo travelers, cultural enthusiasts</p>
                    </div>
                    <div>
                      <p className="font-semibold">Departure:</p>
                      <p>Daily at 11:00 AM from Wadi Rum Village</p>
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
                <h3 className="text-2xl font-bold">Day 1: Cultural Jeep Tour & Evening Activities</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">11:00 AM - Start of the Tour</p>
                      <p>
                        Meet your Bedouin guide at Wadi Rum Village. After a brief introduction and overview of the
                        day's itinerary, you'll board your 4x4 jeep and head into the desert.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">11:30 AM - Ancient Inscriptions</p>
                      <p>
                        Visit sites with ancient Thamudic and Nabataean inscriptions where your guide will explain their
                        historical and cultural significance to the region.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:30 PM - Traditional Lunch</p>
                      <p>
                        Enjoy a traditional Bedouin lunch prepared in the desert, with your guide explaining the
                        significance of various dishes in Bedouin culture.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">02:00 PM - Bedouin Water Sources</p>
                      <p>
                        Visit natural water sources that have sustained Bedouin communities for generations, learning
                        about water conservation techniques in the desert.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">03:30 PM - Arrival at Camp</p>
                      <p>
                        Arrive at our traditional Bedouin camp where you'll be welcomed with tea and shown to your
                        accommodation.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">04:30 PM - Bread Making Workshop</p>
                      <p>
                        Learn how to make traditional Bedouin bread (arbood) baked in the sand, a technique passed down
                        through generations.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">05:30 PM - Tea Preparation</p>
                      <p>
                        Participate in a traditional tea ceremony, learning how to prepare the famous Bedouin tea with
                        desert herbs.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">06:30 PM - Sunset Viewing</p>
                      <p>
                        Walk to a nearby viewpoint to watch the sunset transform the desert colors, with your guide
                        explaining the importance of natural cycles in Bedouin life.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">07:30 PM - Traditional Dinner</p>
                      <p>
                        Enjoy a traditional Bedouin dinner featuring zarb (meat and vegetables cooked underground), with
                        explanation of the cooking techniques.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 PM - Music and Storytelling</p>
                      <p>
                        Gather around the campfire for traditional Bedouin music played on the rababa (string
                        instrument) and storytelling about desert life, legends, and tribal history.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">10:30 PM - Stargazing</p>
                      <p>
                        Learn about Bedouin astronomical knowledge and how the stars have guided desert travel for
                        centuries.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/beduin-way.jpg"
                      alt="Bedouin cultural experience"
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
                <h3 className="text-2xl font-bold">Day 2: Desert Skills & Cultural Activities</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">07:00 AM - Sunrise (Optional)</p>
                      <p>
                        Early risers can enjoy the desert sunrise from the camp, with explanation of its significance in
                        Bedouin daily life.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">08:00 AM - Traditional Breakfast</p>
                      <p>
                        Enjoy a traditional Bedouin breakfast featuring local dairy products, dates, and freshly baked
                        bread.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 AM - Desert Survival Skills</p>
                      <p>
                        Learn essential desert survival techniques including finding water, identifying edible plants,
                        and navigation without modern technology.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">10:30 AM - Traditional Crafts</p>
                      <p>
                        Participate in a workshop on traditional Bedouin crafts such as weaving or making simple tools
                        from natural materials.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:00 PM - Lunch Preparation</p>
                      <p>
                        Help prepare a traditional Bedouin lunch, learning about desert cooking techniques and the
                        importance of communal meals in Bedouin society.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">01:00 PM - Lunch</p>
                      <p>Enjoy the meal you helped prepare, sharing stories and experiences.</p>
                    </div>
                    <div>
                      <p className="font-semibold">02:30 PM - Departure</p>
                      <p>
                        After lunch, you'll be transferred back to Wadi Rum Village, concluding your Bedouin Experience
                        package.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/bedouin-tea.jpg"
                      alt="Traditional Bedouin tea ceremony"
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
                    <span>Cultural jeep tour with English-speaking Bedouin guide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Traditional bread-making and tea preparation workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Desert survival skills demonstration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Traditional crafts workshop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Evening music and storytelling session</span>
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
            <BookingForm tourName="Bedouin Experience Package" />
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
                  Yes, this package is very suitable for children of all ages. The cultural activities are engaging for
                  young people, and many children particularly enjoy the bread-making and craft workshops. It's an
                  excellent educational experience.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Do I need to participate in all activities?</h3>
                <p>
                  Participation in all activities is optional. You're welcome to observe rather than participate in any
                  activity if you prefer. The package is designed to be immersive but relaxed.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Can I take photos during the cultural activities?</h3>
                <p>
                  Yes, photography is welcome during all activities. Your guide will let you know if there are any
                  specific moments when photography should be limited out of respect for cultural traditions.
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
                <h3 className="text-xl font-bold mb-2">What should I pack for this cultural experience?</h3>
                <p>
                  We recommend bringing comfortable clothing, a hat, sunglasses, sunscreen, a light jacket for evenings
                  (desert nights can be cool), a small backpack, personal medications, and a camera. All bedding and
                  towels are provided at the camp.
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
