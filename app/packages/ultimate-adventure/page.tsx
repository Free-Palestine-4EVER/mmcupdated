import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { BookingForm } from "@/components/booking-form"
import { FloatingBookButton } from "@/components/floating-book-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ultimate Adventure Package | 3-Day Wadi Rum Expedition",
  description:
    "Challenge yourself with our 3-day Ultimate Adventure package featuring Um Addami mountain climbing, remote desert exploration, and authentic Bedouin experiences.",
}

export default function UltimateAdventurePage() {
  return (
    <div className="bg-white">
      <FloatingBookButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/jebel-um-addami.jpg"
          alt="Ultimate Adventure Package in Wadi Rum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">ULTIMATE ADVENTURE PACKAGE</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Challenge yourself with a 3-day expedition to Jordan's highest peak and remote desert areas
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
                  Our Ultimate Adventure package is designed for those seeking a true challenge and the most rewarding
                  experiences Wadi Rum has to offer. This 3-day expedition takes you to Jordan's highest peak, Jebel Um
                  Addami, standing at 1,854 meters above sea level, as well as to remote areas of the desert rarely seen
                  by visitors.
                </p>
                <p className="text-lg mb-6">
                  You'll spend two nights camping in different locations, including one night in a remote area far from
                  established camps. This package combines challenging hikes, spectacular views, and authentic desert
                  experiences for those with an adventurous spirit and good physical fitness. The sense of achievement
                  and the panoramic vistas from the summit of Um Addami make this an unforgettable desert adventure.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Package Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Guided climb of Jebel Um Addami, Jordan's highest mountain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Exploration of remote southern Wadi Rum, including areas near the Saudi border</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Challenging hikes through diverse terrain and unique geological formations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>One night in a traditional Bedouin camp and one night wild camping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Authentic Bedouin meals prepared in remote desert locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Spectacular stargazing far from light pollution</span>
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
                      <p className="text-2xl font-bold text-amber-600">230 JOD per person</p>
                      <p className="text-sm text-gray-600">(Based on 2 people. Group discounts available)</p>
                    </div>
                    <div>
                      <p className="font-semibold">Difficulty Level:</p>
                      <p>Challenging</p>
                    </div>
                    <div>
                      <p className="font-semibold">Suitable For:</p>
                      <p>Physically fit adventurers, experienced hikers, mountain enthusiasts</p>
                    </div>
                    <div>
                      <p className="font-semibold">Departure:</p>
                      <p>Daily at 8:00 AM from Wadi Rum Village</p>
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
                <h3 className="text-2xl font-bold">Day 1: Journey to the South</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">08:00 AM - Start of the Tour</p>
                      <p>
                        Meet your experienced Bedouin guide at Wadi Rum Village. After a brief introduction and safety
                        briefing, you'll board your 4x4 jeep and begin the journey south.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">09:30 AM - Classic Wadi Rum Sites</p>
                      <p>
                        Visit a few of the classic Wadi Rum sites on your way south, including Lawrence's Spring and
                        Khazali Canyon, to warm up for the adventure ahead.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">11:00 AM - Journey Deeper South</p>
                      <p>
                        Continue your journey into the southern regions of Wadi Rum, where fewer tourists venture. The
                        landscape becomes increasingly remote and dramatic.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:30 PM - Lunch</p>
                      <p>
                        Enjoy a traditional Bedouin lunch prepared in a scenic location, with time to rest and prepare
                        for the afternoon hike.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">02:00 PM - Preparatory Hike</p>
                      <p>
                        Take a moderate 2-hour hike through a canyon system to acclimatize to the desert conditions and
                        prepare for tomorrow's summit attempt. Your guide will assess your pace and provide tips for the
                        main climb.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">04:30 PM - Arrive at Base Camp</p>
                      <p>
                        Arrive at our traditional Bedouin camp located in the southern region, which will serve as your
                        base for the night. Relax and prepare for tomorrow's challenge.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">06:00 PM - Sunset Viewing</p>
                      <p>Take a short walk to a nearby viewpoint to watch the sunset over the vast desert landscape.</p>
                    </div>
                    <div>
                      <p className="font-semibold">07:30 PM - Dinner</p>
                      <p>
                        Enjoy a hearty traditional Bedouin dinner to fuel up for tomorrow's climb, often featuring zarb
                        (meat and vegetables cooked underground).
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 PM - Preparation and Rest</p>
                      <p>
                        Your guide will brief you on the next day's climb, including what to expect and how to prepare.
                        Early rest is recommended for the challenging day ahead.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/wadi-rum-adventure.jpg"
                      alt="Southern Wadi Rum journey"
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
                <h3 className="text-2xl font-bold">Day 2: Um Addami Summit Day</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">06:00 AM - Early Breakfast</p>
                      <p>Rise early for a nutritious breakfast to provide energy for the challenging day ahead.</p>
                    </div>
                    <div>
                      <p className="font-semibold">07:00 AM - Departure to Um Addami</p>
                      <p>
                        Board your jeep for the drive to the base of Jebel Um Addami, located near the Saudi Arabian
                        border. This is the highest mountain in Jordan at 1,854 meters above sea level.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">08:30 AM - Begin the Ascent</p>
                      <p>
                        Start your guided climb of Um Addami. The ascent involves some scrambling over rocks but does
                        not require technical climbing equipment. Your guide will lead you along the safest and most
                        accessible route.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">11:30 AM - Summit</p>
                      <p>
                        Reach the summit of Um Addami, where you'll be rewarded with breathtaking panoramic views
                        extending into Saudi Arabia. On clear days, you can see for hundreds of kilometers across the
                        desert landscape. Enjoy a well-deserved rest and celebration at the top.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:30 PM - Lunch at the Summit</p>
                      <p>
                        Enjoy a packed lunch at the summit while taking in the spectacular views and celebrating your
                        achievement.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">01:30 PM - Descent</p>
                      <p>
                        Begin your descent from Um Addami, taking a different route when possible to experience more of
                        the mountain's unique features.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">04:00 PM - Return to Jeep</p>
                      <p>
                        Complete your descent and return to the waiting jeep. Your guide will provide refreshments and
                        time to rest your legs.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">05:00 PM - Drive to Remote Camp Site</p>
                      <p>
                        Drive to a remote location where few tourists ever visit for your wild camping experience. Your
                        guide will set up camp in a protected area with spectacular views.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">06:30 PM - Sunset Celebration</p>
                      <p>
                        Watch the sunset from your remote camp, reflecting on your achievement of summiting Jordan's
                        highest peak.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">07:30 PM - Dinner Under the Stars</p>
                      <p>Enjoy a traditional Bedouin dinner prepared over an open fire in this remote setting.</p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 PM - Stargazing</p>
                      <p>
                        Experience some of the best stargazing in the world from your remote camp, far from any light
                        pollution. Your guide will point out constellations and share Bedouin astronomical knowledge.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="/images/jebel-um-addami.jpg"
                      alt="Um Addami mountain climbing"
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
                <h3 className="text-2xl font-bold">Day 3: Remote Exploration & Return</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="space-y-4 ml-16">
                    <div>
                      <p className="font-semibold">07:00 AM - Sunrise (Optional)</p>
                      <p>
                        Early risers can enjoy the desert sunrise from the remote camp, a magical experience in the
                        silence of the early morning.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">08:00 AM - Breakfast</p>
                      <p>Enjoy breakfast prepared in the traditional Bedouin way at your remote camp.</p>
                    </div>
                    <div>
                      <p className="font-semibold">09:00 AM - Break Camp</p>
                      <p>
                        Help break down the camp, learning the "leave no trace" principles that Bedouins have practiced
                        for centuries.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">10:00 AM - Remote Area Exploration</p>
                      <p>
                        Explore the surrounding remote area with a moderate hike to discover hidden canyons, ancient
                        inscriptions, and unique geological formations rarely seen by visitors.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">12:00 PM - Lunch</p>
                      <p>Enjoy a final desert lunch in a scenic location.</p>
                    </div>
                    <div>
                      <p className="font-semibold">01:30 PM - Begin Return Journey</p>
                      <p>
                        Board your jeep and begin the journey back toward Wadi Rum Village, taking a different route
                        than your outward journey to experience more of the desert's diversity.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">03:00 PM - Final Desert Stops</p>
                      <p>
                        Make several stops at interesting formations and viewpoints on your return journey, with time
                        for final photos and reflections on your adventure.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">05:00 PM - Arrival at Wadi Rum Village</p>
                      <p>
                        Return to Wadi Rum Village, concluding your Ultimate Adventure package with memories and
                        achievements to last a lifetime.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image src="/images/wadi-rum-night.jpg" alt="Remote desert camping" fill className="object-cover" />
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
                    <span>Experienced mountain guide with specific knowledge of Um Addami</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Jeep transportation throughout the tour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Guided Um Addami summit climb</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Additional guided hikes in remote areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>One night in a traditional Bedouin camp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>One night wild camping with all necessary equipment</span>
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
                    <span>Special permit for Um Addami area (near Saudi border)</span>
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
                    <span>Personal hiking equipment (good hiking boots required)</span>
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
            <BookingForm tourName="Ultimate Adventure Package" />
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
                <h3 className="text-xl font-bold mb-2">How physically demanding is the Um Addami climb?</h3>
                <p>
                  The climb is challenging but does not require technical climbing skills. It involves approximately 3
                  hours of uphill hiking with some scrambling over rocks. Good physical fitness is essential, and
                  previous hiking experience is recommended. The total elevation gain is about 400 meters from the base.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">What is the minimum age requirement?</h3>
                <p>
                  Due to the physical demands, this package is recommended for participants aged 16 and above. Younger
                  participants with significant hiking experience may be considered on a case-by-case basis.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">What should I pack for this adventure?</h3>
                <p>
                  Essential items include: sturdy hiking boots (broken in), daypack, sun protection (hat, sunglasses,
                  sunscreen), light but warm layers (desert nights can be cold), headlamp or flashlight, personal
                  medications, camera, and at least 1 liter water bottle (we provide water refills). A detailed packing
                  list will be provided upon booking.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">What is wild camping like?</h3>
                <p>
                  Wild camping involves sleeping in a remote location away from established camps. We provide all
                  necessary equipment including tents, sleeping mats, and sleeping bags. Bathroom facilities are basic
                  (natural). The experience offers unparalleled tranquility and connection with nature, with
                  extraordinary stargazing opportunities.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-2">Is this package available year-round?</h3>
                <p>
                  This package is available from September to May. We do not recommend it during the summer months
                  (June-August) due to extreme heat, which makes the climb potentially dangerous. The best months are
                  October-November and March-April when temperatures are most comfortable for hiking.
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
          </div>
        </div>
      </section>
    </div>
  )
}
