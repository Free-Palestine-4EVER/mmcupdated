import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BookingForm } from "@/components/booking-form"
import { FloatingBookButton } from "@/components/floating-book-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jordan Heights Package | 3-Day Rock Climbing Adventure",
  description:
    "Conquer Wadi Rum's most iconic rock formations with our 3-day Jordan Heights package featuring Burdah Arch, Um Fruth Bridge, and more challenging climbs.",
}

export default function JordanHeightsPage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/burdah-arch.jpg"
          alt="Jordan Heights Package in Wadi Rum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">JORDAN HEIGHTS PACKAGE</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Conquer Wadi Rum's most iconic rock formations over 3 thrilling days
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
                  Our Jordan Heights package is designed for adventure seekers who want to experience the thrill of
                  conquering Wadi Rum's most iconic mountains and rock formations. This 3-day adventure takes you to the
                  highest peak in Jordan, Um Addami, as well as multiple natural rock bridges and arches that have made
                  this desert famous among climbers worldwide.
                </p>
                <p className="text-lg mb-6">
                  The package includes climbing Um Addami (1,854m), Jordan's highest peak, with breathtaking views
                  extending into Saudi Arabia. You'll also conquer Um Fruth Rock Bridge and the famous Burdah Rock
                  Bridge, one of the highest natural arches in the world. Each climb offers its own unique challenges
                  and rewards, with spectacular views from the top. This package is perfect for those with a sense of
                  adventure and a head for heights.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Package Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Summit Jordan's highest peak, Um Addami (1,854m)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Guided climb of Burdah Rock Bridge, one of the highest natural arches in the world</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Climb to Um Fruth Rock Bridge with panoramic desert views</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Exploration of Khazali Canyon with ancient inscriptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Multiple challenging climbs and scrambles to unique rock formations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Two nights in a traditional Bedouin camp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Authentic Bedouin meals and cultural experiences</span>
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
                      <p className="text-2xl font-bold text-amber-600">250 JOD per person</p>
                      <p className="text-sm text-gray-600">(Based on 2 people. Group discounts available)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Difficulty Level:</p>
                      <p>Challenging</p>
                    </div>
                    <div>
                      <p className="font-semibold">Suitable For:</p>
                      <p>Physically fit adventurers, those comfortable with heights, climbing enthusiasts</p>
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
                <h3 className="text-2xl font-bold">Day 1: Um Addami Climbing Adventure</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">09:00 AM - Start of the Tour</p>
                      <p>
                        Meet your experienced Bedouin climbing guide at Wadi Rum Village. After a brief introduction and
                        safety briefing, you'll board your 4x4 jeep and head into the desert toward Um Addami.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">10:30 AM - Arrive at Um Addami Base</p>
                      <p>
                        Arrive at the base of Um Addami, Jordan's highest mountain at 1,854 meters above sea level. Your
                        guide will provide an overview of the climbing route and safety instructions.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">11:00 AM - Begin the Ascent</p>
                      <p>
                        Start your guided climb of Um Addami. The ascent involves moderate scrambling and hiking up
                        rocky terrain. Your guide will lead you along the safest route and provide assistance at
                        challenging sections.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:30 PM - Rest Stop</p>
                      <p>
                        Take a short break halfway up the mountain to rest and enjoy the expanding views of the desert
                        landscape below.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">01:30 PM - Summit Lunch</p>
                      <p>
                        Reach the summit of Um Addami, where you'll be rewarded with breathtaking panoramic views that
                        extend into Saudi Arabia. Enjoy a packed lunch at the top while taking in the spectacular
                        vistas.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">02:30 PM - Begin Descent</p>
                      <p>
                        Start your descent from Um Addami, taking a different route when possible to experience more of
                        the mountain's unique features.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">04:00 PM - Return to Jeep</p>
                      <p>
                        Complete your descent and return to the waiting jeep. Your guide will provide refreshments and
                        time to rest.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">05:30 PM - Arrive at Camp</p>
                      <p>
                        Arrive at our traditional Bedouin camp where you'll be staying for the night. Relax and recover
                        from the day's climb.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">06:30 PM - Sunset Viewing</p>
                      <p>Take a short walk to a nearby viewpoint to watch the sunset over the desert landscape.</p>
                    </div>
                    <div>
                      <p className="font-semibold">07:30 PM - Dinner</p>
                      <p>
                        Enjoy a hearty traditional Bedouin dinner to replenish your energy for tomorrow's challenging
                        climbs.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 PM - Preparation and Rest</p>
                      <p>
                        Your guide will brief you on the next day's climbs to Um Fruth Bridge and Burdah Rock Bridge,
                        including what to expect and how to prepare. Early rest is recommended for the challenging day
                        ahead.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image src="/images/jebel-um-addami.jpg" alt="Um Addami climbing" fill className="object-cover" />
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
                <h3 className="text-2xl font-bold">Day 2: Um Fruth Bridge & Burdah Rock Challenge</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">07:00 AM - Early Breakfast</p>
                      <p>
                        Rise early for a nutritious breakfast to provide energy for the challenging day of climbing
                        ahead.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">08:00 AM - Departure to Um Fruth</p>
                      <p>
                        Board your jeep for the drive to Um Fruth Rock Bridge, your first climbing challenge of the day.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">08:30 AM - Um Fruth Rock Bridge</p>
                      <p>
                        Arrive at Um Fruth Rock Bridge. This natural rock bridge stands about 15 meters high and offers
                        a relatively accessible climb with stunning views from the top. Your guide will provide
                        instruction and assistance throughout the climb.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">10:00 AM - Departure to Burdah</p>
                      <p>
                        After conquering Um Fruth, continue your journey to Jebel Burdah, home to the famous Burdah Rock
                        Bridge, one of the highest natural rock arches in the world at about 35 meters high.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">11:00 AM - Begin the Burdah Ascent</p>
                      <p>
                        Start your guided climb of Burdah Rock Bridge. The ascent involves several sections of
                        scrambling and climbing of varying difficulty. Your guide will lead you along the safest route
                        and provide assistance at challenging sections.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">01:00 PM - Burdah Bridge</p>
                      <p>
                        Reach Burdah Rock Bridge, where you'll be rewarded with breathtaking panoramic views of the
                        surrounding desert landscape. Those comfortable with heights can cross the bridge itself (with
                        guidance), while others can admire it from a safe vantage point.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">01:30 PM - Lunch at Height</p>
                      <p>
                        Enjoy a packed lunch near the bridge while taking in the spectacular views and celebrating your
                        achievement.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">02:30 PM - Descent</p>
                      <p>
                        Begin your descent from Burdah, taking a different route when possible to experience more of the
                        mountain's unique features.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">04:00 PM - Return to Jeep</p>
                      <p>
                        Complete your descent and return to the waiting jeep. Your guide will provide refreshments and
                        time to rest.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">05:30 PM - Return to Camp</p>
                      <p>Return to camp to relax and recover from the day's challenging climbs.</p>
                    </div>
                    <div>
                      <p className="font-semibold">07:00 PM - Celebration Dinner</p>
                      <p>
                        Enjoy a special celebration dinner to commemorate your conquests of Um Fruth and Burdah Rock
                        Bridges, two of Wadi Rum's most iconic formations.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">08:30 PM - Bedouin Music and Stargazing</p>
                      <p>
                        Relax around the campfire with traditional Bedouin music and take in the spectacular night sky.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/burdah-rock-bridge.jpg"
                      alt="Burdah Rock Bridge climbing"
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
                <h3 className="text-2xl font-bold">Day 3: Rock Formations & Final Climbs</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">08:00 AM - Breakfast</p>
                      <p>Enjoy a relaxed breakfast at the camp after your challenging previous day.</p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 AM - Departure</p>
                      <p>
                        Check out from the camp and board your jeep for a day of exploring and climbing some of Wadi
                        Rum's unique rock formations.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">09:30 AM - Little Bridge</p>
                      <p>
                        Visit and climb "Little Bridge," a smaller natural arch that offers a different climbing
                        experience from the previous days' challenges.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">11:00 AM - Mushroom Rock</p>
                      <p>
                        Visit the distinctive Mushroom Rock formation, where you can climb to various vantage points for
                        unique perspectives of this geological wonder.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:30 PM - Lunch</p>
                      <p>Enjoy a final desert lunch in a scenic location.</p>
                    </div>
                    <div>
                      <p className="font-semibold">02:00 PM - Jebel Khazali</p>
                      <p>
                        Visit Jebel Khazali for a final climbing experience, ascending to a viewpoint that offers
                        panoramic vistas of the surrounding desert landscape.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">03:30 PM - Final Desert Stops</p>
                      <p>
                        Make several stops at interesting formations on your return journey, with time for final photos
                        and reflections on your climbing adventures.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">05:00 PM - Arrival at Wadi Rum Village</p>
                      <p>
                        Return to Wadi Rum Village, concluding your Jordan Heights package with memories and
                        achievements to last a lifetime.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/rock-climbing.jpg"
                      alt="Rock climbing in Wadi Rum"
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
                    <span>Experienced climbing guide with specific knowledge of Wadi Rum's rock formations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Jeep transportation throughout the tour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Guided climbs of Um Addami, Um Fruth Rock Bridge, and Burdah Rock Bridge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Additional guided climbs to various rock formations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Two nights in a traditional Bedouin camp</span>
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
                    <span>Basic safety equipment for climbs</span>
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
                    <span>Personal climbing equipment (good hiking boots required)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Advanced technical climbing gear (not required for these climbs)</span>
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
            <BookingForm tourName="Jordan Heights Package" />
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
                <h3 className="text-xl font-bold mb-2">Do I need prior climbing experience?</h3>
                <p>
                  While no technical climbing experience is required, this package is physically demanding and involves
                  scrambling over rocks and climbing steep sections. Previous hiking experience and comfort with heights
                  are strongly recommended. Your guide will provide instruction and assistance throughout all climbs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">How difficult is the Burdah Rock Bridge climb?</h3>
                <p>
                  The Burdah Rock Bridge climb is challenging, involving approximately 3-4 hours round trip with some
                  steep and exposed sections. It requires good physical fitness, balance, and comfort with heights. The
                  climb is rated as moderate to difficult, but does not require technical climbing skills or equipment.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">What is the minimum age requirement?</h3>
                <p>
                  Due to the physical demands and exposure to heights, this package is recommended for participants aged
                  16 and above. Younger participants with significant climbing or hiking experience may be considered on
                  a case-by-case basis.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">What should I wear for the climbs?</h3>
                <p>
                  We recommend wearing comfortable, flexible clothing that allows for a full range of motion. Sturdy
                  hiking boots with good ankle support and grip are essential. Lightweight, long-sleeved shirts and
                  pants are recommended for protection from the sun and occasional rock scrapes. A hat, sunglasses, and
                  sunscreen are also essential.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Is this package available year-round?</h3>
                <p>
                  This package is available from September to May. We do not recommend it during the summer months
                  (June-August) due to extreme heat, which makes climbing potentially dangerous. The best months are
                  October-November and March-April when temperatures are most comfortable for climbing activities.
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
