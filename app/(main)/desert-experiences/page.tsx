import Image from "next/image"
import Script from "next/script"
import { TourCard } from "@/components/tour-card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { generateTourSchema } from "@/lib/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wadi Rum Desert Experiences | Jeep Tours, Camel Rides & Adventure Activities",
  description:
    "Explore Wadi Rum with our range of desert experiences including jeep tours, camel rides, rock climbing, and authentic Bedouin camping. Book your adventure in Jordan's most spectacular desert landscape.",
  keywords:
    "Wadi Rum tours, desert experiences Jordan, Wadi Rum jeep safari, camel rides Wadi Rum, rock climbing Jordan, Bedouin experience, desert camping, Wadi Rum activities, Jordan adventure tours",
}

export default function DesertExperiencesPage() {
  // Define tour data for schema
  const tours = [
    {
      name: "Half Day Jeep Tour in Wadi Rum",
      description:
        "Experience the highlights of Wadi Rum in this 4-hour jeep tour, visiting key sites and enjoying the desert landscape.",
      image: "https://wadirum.com/images/half-day-jeep.jpg",
      price: 50, // Updated from 35 to 50 JOD for 1-3 people
      duration: "4 hours",
      url: "https://wadirum.com/desert-experiences/half-day-jeep-tour",
    },
    {
      name: "Full Day Jeep Tour in Wadi Rum",
      description:
        "A comprehensive 7-hour jeep tour exploring the vast beauty of Wadi Rum, including hidden canyons and ancient inscriptions.",
      image: "https://wadirum.com/images/full-day-jeep.jpg",
      price: 65, // Price remains the same for 1-3 people
      duration: "7 hours",
      url: "https://wadirum.com/desert-experiences/full-day-jeep-tour",
    },
    {
      name: "The Beduin Way Experience in Wadi Rum",
      description:
        "Experience the alluring beauty and breathtaking scenery of the desert through our immersive tour with a experienced guide.",
      image: "https://wadirum.com/images/beduin-way.jpg",
      price: 140, // Updated from 100 to 140 JOD for 1 person
      duration: "2 days",
      url: "https://wadirum.com/desert-experiences/the-beduin-way",
    },
    {
      name: "Jebel Khash Route",
      description:
        "Explore the spectacular Jebel Khash route, featuring unique rock formations and breathtaking vistas.",
      image: "/images/jebel-khash.jpg",
      price: 140, // Updated from 75 to 140 JOD for 1 person
      duration: "Full day",
      url: "https://wadirum.com/desert-experiences/jebel-khash-route",
    },
    {
      name: "Hot Air Balloon",
      description:
        "Soar above the magnificent desert landscape in a hot air balloon for an unforgettable aerial perspective of Wadi Rum.",
      image: "/images/hot-air-balloon.jpg",
      price: 200, // Updated from 150 to 200 JOD for 1 person
      duration: "1-2 hours",
      url: "https://wadirum.com/desert-experiences/hot-air-balloon",
    },
    {
      name: "Burdah Arch Climbing",
      description:
        "Challenge yourself with a guided climb to the iconic Burdah Rock Bridge, one of Wadi Rum's most impressive natural formations.",
      image: "/images/burdah-arch.jpg",
      price: 110, // Updated from 80 to 110 JOD for 1 person
      duration: "Full day",
      url: "https://wadirum.com/desert-experiences/burdah-arch-climbing",
    },
    {
      name: "All in One Day",
      description:
        "Experience multiple activities in a single day, including jeep tour, camel ride, and short hike for a comprehensive desert experience.",
      image: "/images/all-in-one.jpg",
      price: 110, // Updated from 90 to 110 JOD for 1 person
      duration: "Full day",
      url: "https://wadirum.com/desert-experiences/all-in-one-day",
    },
    {
      name: "Jebel Um Addami Climbing",
      description:
        "Reach the summit of Jebel Um Addami, Jordan's highest peak, for amazing views on an unforgettable guided adventure.",
      image: "/images/jebel-um-addami.jpg",
      price: 110, // Updated from 65 to 110 JOD for 1 person
      duration: "1 Day / 7 hours",
      url: "https://wadirum.com/desert-experiences/jebel-um-addami-climbing",
    },
    {
      name: "Camel Ride",
      description:
        "Witness the desert's beauty at sunrise or sunset on a peaceful camel ride, guided by our experts for an unforgettable experience.",
      image: "/images/camel-ride.jpg",
      price: 25, // Updated from 20 to 25 JOD
      duration: "2-3 hours ride",
      url: "https://wadirum.com/desert-experiences/camel-rides",
    },
    {
      name: "Trekking in the Wild",
      description:
        "Explore Wadi Rum on foot with our guided trekking adventures, offering a more intimate connection with the desert landscape.",
      image: "/images/trekking.jpg",
      price: 140, // Updated from 45 to 140 JOD for 1 person
      duration: "Half day or full day",
      url: "https://wadirum.com/desert-experiences/trekking",
    },
    {
      name: "2 Hours Jeep Tour",
      description:
        "A quick but comprehensive introduction to Wadi Rum's beauty with visits to key sites near the camp.",
      image: "/images/jeep-tour-card.jpg",
      price: 25, // Price remains the same
      duration: "2 hours",
      url: "https://wadirum.com/desert-experiences/two-hour-jeep-tour",
    },
    {
      name: "Jebel Khash 2-Day Adventure",
      description: "Experience the best of Wadi Rum with a full day jeep tour and a day of hiking through Jebel Khash.",
      image: "/images/wadi-rum-landscape.jpg",
      price: 180, // Updated from 130 to 180 JOD for 1 person
      duration: "2 days / 1 night",
      url: "https://wadirum.com/desert-experiences/jebel-khash-2-day-adventure",
    },
    {
      name: "Night Walk Tour",
      description: "Experience the tranquility of the desert at night with a guided walk from our camp.",
      image: "/images/wadi-rum-night.jpg",
      price: 10, // Updated from 5 to 10 JOD per person
      duration: "1.5-2 hours",
      url: "https://wadirum.com/desert-experiences/night-walk-tour",
    },
    {
      name: "Stargazing Education",
      description:
        "Learn about the night sky with our expert guide who will teach you how to navigate using the stars.",
      image: "/images/blog-stargazing.jpg",
      price: 33, // Updated from 15 to 33 JOD per person (100 JOD for 3 people)
      duration: "2 hours",
      url: "https://wadirum.com/desert-experiences/stargazing-education",
    },
  ]

  // Generate schema for each tour
  const tourSchemas = tours.map((tour) => generateTourSchema(tour))

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org structured data */}
      {tourSchemas.map((schema, index) => (
        <Script
          key={`tour-schema-${index}`}
          id={`tour-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/full-day-jeep-hero.jpg"
            alt="Wadi Rum desert experiences with red sandstone mountains and Bedouin guide"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="container relative z-10 flex items-center justify-center py-24 md:py-32 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">DESERT EXPERIENCES</h1>
        </div>
      </section>

      {/* Intro Section */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-2xl font-bold">Explore Wadi Rum</h2>
            <h3 className="mb-8 text-4xl font-bold">Unforgettable Desert Adventures</h3>
            <p className="mx-auto max-w-3xl text-lg">
              Discover the magic of Wadi Rum with our range of desert experiences. From thrilling jeep tours and camel
              rides to challenging mountain climbs and peaceful stargazing, we offer authentic Bedouin adventures for
              every traveler.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container">
          <AnimateOnScroll>
            <h2 className="mb-12 text-center text-3xl font-bold">Our Desert Experiences</h2>
          </AnimateOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimateOnScroll animation="fade-in" delay={100}>
              <TourCard
                title="Half Day Jeep Tour"
                slug="half-day-jeep-tour"
                description="Experience the highlights of Wadi Rum in this 4-hour jeep tour, visiting key sites and enjoying the desert landscape."
                price={50} // Updated from 35 to 50 JOD
                duration="4 hours"
                image="/images/half-day-jeep.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={200}>
              <TourCard
                title="Full Day Jeep Tour"
                slug="full-day-jeep-tour"
                description="A comprehensive 7-hour jeep tour exploring the vast beauty of Wadi Rum, including hidden canyons and ancient inscriptions."
                price={65} // Price remains the same
                duration="7 hours"
                image="/images/full-day-jeep.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={300}>
              <TourCard
                title="The Beduin Way"
                slug="the-beduin-way"
                description="Experience the alluring beauty and breathtaking scenery of the desert through our immersive tour with a experienced guide."
                price={140} // Updated from 100 to 140 JOD for 1 person
                duration="1 Day Jeep tour & 1 Day Camel ride"
                image="/images/beduin-way.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={400}>
              <TourCard
                title="Jebel Khash Route"
                slug="jebel-khash-route"
                description="Explore the spectacular Jebel Khash route, featuring unique rock formations and breathtaking vistas."
                price={140} // Updated from 75 to 140 JOD for 1 person
                duration="Full day"
                image="/images/jebel-khash.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={500}>
              <TourCard
                title="Hot Air Balloon"
                slug="hot-air-balloon"
                description="Soar above the magnificent desert landscape in a hot air balloon for an unforgettable aerial perspective of Wadi Rum."
                price={200} // Updated from 150 to 200 JOD for 1 person
                duration="1-2 hours"
                image="/images/hot-air-balloon.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={600}>
              <TourCard
                title="Burdah Arch Climbing"
                slug="jebel-burdah-climbing"
                description="Challenge yourself with a guided climb to the iconic Burdah Rock Bridge, one of Wadi Rum's most impressive natural formations."
                price={110} // Updated from 80 to 110 JOD for 1 person
                duration="Full day"
                image="/images/burdah-arch.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={700}>
              <TourCard
                title="All in One Day"
                slug="all-in-one-day"
                description="Experience multiple activities in a single day, including jeep tour, camel ride, and short hike for a comprehensive desert experience."
                price={110} // Updated from 90 to 110 JOD for 1 person
                duration="Full day"
                image="/images/all-in-one.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={800}>
              <TourCard
                title="Jebel Um Addami Climbing"
                slug="um-addami-climbing"
                description="Reach the summit of Jebel Um Addami, Jordan's highest peak, for amazing views on an unforgettable guided adventure."
                price={110} // Updated from 65 to 110 JOD for 1 person
                duration="1 Day / 7 hours"
                image="/images/jebel-um-addami.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={900}>
              <TourCard
                title="Camel Ride"
                slug="camel-rides"
                description="Witness the desert's beauty at sunrise or sunset on a peaceful camel ride, guided by our experts for an unforgettable experience."
                price={25} // Updated from 20 to 25 JOD
                duration="2-3 hours ride"
                image="/images/camel-ride.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={1000}>
              <TourCard
                title="Trekking in the Wild"
                slug="trekking"
                description="Explore Wadi Rum on foot with our guided trekking adventures, offering a more intimate connection with the desert landscape."
                price={140} // Updated from 45 to 140 JOD for 1 person
                duration="Half day or full day"
                image="/images/trekking.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={1100}>
              <TourCard
                title="2 Hours Jeep Tour"
                slug="two-hour-jeep-tour"
                description="A quick but comprehensive introduction to Wadi Rum's beauty with visits to key sites near the camp."
                price={25} // Price remains the same
                duration="2 hours"
                image="/images/jeep-tour-card.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={1200}>
              <TourCard
                title="Jebel Khash 2-Day Adventure"
                slug="jebel-khash-2"
                description="Experience the best of Wadi Rum with a full day jeep tour and a day of hiking through Jebel Khash."
                price={180} // Updated from 130 to 180 JOD for 1 person
                duration="2 days / 1 night"
                image="/images/wadi-rum-landscape.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={1300}>
              <TourCard
                title="Night Walk Tour"
                slug="night-walk-tour"
                description="Experience the tranquility of the desert at night with a guided walk from our camp."
                price={10} // Updated from 5 to 10 JOD per person
                duration="1.5-2 hours"
                image="/images/wadi-rum-night.jpg"
              />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={1400}>
              <TourCard
                title="Stargazing Education"
                slug="stargazing-education"
                description="Learn about the night sky with our expert guide who will teach you how to navigate using the stars."
                price={33} // Updated from 15 to 33 JOD per person (100 JOD for 3 people)
                duration="2 hours"
                image="/images/blog-stargazing.jpg"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Our Desert Experiences</h2>

            <div className="grid gap-8 md:grid-cols-3">
              <AnimateOnScroll animation="slide-from-left" delay={100}>
                <div className="rounded-lg bg-white p-6 shadow-lg card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Authentic Experiences</h3>
                  <p className="text-gray-700">
                    Our tours are led by local Bedouin guides who share their deep knowledge and cultural heritage,
                    providing an authentic desert experience that goes beyond typical tourism.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in" delay={200}>
                <div className="rounded-lg bg-white p-6 shadow-lg card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Safety & Comfort</h3>
                  <p className="text-gray-700">
                    Your safety is our priority. Our experienced guides, well-maintained equipment, and attention to
                    detail ensure that you can enjoy the adventure with peace of mind.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-from-right" delay={300}>
                <div className="rounded-lg bg-white p-6 shadow-lg card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Customizable Experiences</h3>
                  <p className="text-gray-700">
                    We offer flexible itineraries that can be tailored to your interests, fitness level, and time
                    constraints, ensuring a personalized desert adventure.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Expert Team */}
      <AnimateOnScroll>
        <section className="bg-gradient-to-b from-amber-500 to-amber-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-2xl font-bold">Our Expert Team</h2>
            <h3 className="mb-8 text-4xl font-bold">We're here to help, 24/7.</h3>
            <p className="mb-12 text-lg">Connect with our expert travel consultants to plan your next trip.</p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-1.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-2.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-3.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-4.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/images/team-5.jpg"
                  alt="Team Member"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/962777424937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 btn-hover-effect"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on Whatsapp
              </a>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  )
}
