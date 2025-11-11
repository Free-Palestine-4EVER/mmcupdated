import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingForm } from "@/components/booking-form"
import { Clock, Users, Camera, Video, Award, MapPin } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"

export default function PhotographyDroneTourPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Cinematic */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/half-day-jeep-hero.jpg"
            alt="Photography & Drone Tour in Wadi Rum"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <Camera className="h-4 w-4 text-amber-400" />
                <span className="text-white text-sm font-medium tracking-wide">New Experience</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight">
              Photography<br />
              <span className="font-bold">& Drone Tour</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light leading-relaxed">
              Capture the majesty of Wadi Rum from perspectives never seen before.
              Professional aerial cinematography meets expert ground photography.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#booking">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-6 text-base">
                  Book Experience
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base backdrop-blur-sm">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 border-b border-slate-800">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4K</div>
              <div className="text-sm text-gray-400">Video Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">8 Hours</div>
              <div className="text-sm text-gray-400">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">Professional</div>
              <div className="text-sm text-gray-400">Equipment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">48h</div>
              <div className="text-sm text-gray-400">Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Elevate Your <span className="font-bold">Wadi Rum Experience</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Combining traditional desert exploration with cutting-edge drone technology,
              this exclusive experience captures the raw beauty of Wadi Rum from every angle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Camera className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aerial Perspectives</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional drone photography capturing sweeping vistas and unique angles
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Video className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cinematic Footage</h3>
              <p className="text-gray-600 leading-relaxed">
                4K video documentation of your journey through the desert
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional pilot and photographer ensuring perfect shots
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              See the <span className="font-bold">Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
            <div className="col-span-12 md:col-span-8 h-96 md:h-[600px] relative overflow-hidden rounded-2xl group">
              <ImageLightbox src="/images/half-day-jeep-main.jpg" alt="Drone Photography" width={1000} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="col-span-6 md:col-span-4 h-48 md:h-72 relative overflow-hidden rounded-2xl group">
              <ImageLightbox src="/images/half-day-jeep-1.jpg" alt="Aerial View" width={400} height={300} />
            </div>
            <div className="col-span-6 md:col-span-4 h-48 md:h-72 relative overflow-hidden rounded-2xl group">
              <ImageLightbox src="/images/half-day-jeep-2.jpg" alt="Desert View" width={400} height={300} />
            </div>
            <div className="col-span-6 md:col-span-4 h-48 md:h-72 relative overflow-hidden rounded-2xl group">
              <ImageLightbox src="/images/half-day-jeep-3.jpg" alt="Sunset" width={400} height={300} />
            </div>
            <div className="col-span-6 md:col-span-4 h-48 md:h-72 relative overflow-hidden rounded-2xl group">
              <ImageLightbox src="/images/half-day-jeep-4.jpg" alt="Landscape" width={400} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-16 text-center">
            What's <span className="font-bold">Included</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Professional Drone Photography</h3>
                <p className="text-gray-600">100+ high-resolution aerial photographs</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4K Video Footage</h3>
                <p className="text-gray-600">Cinematic aerial videography of your journey</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Full-Day Jeep Tour</h3>
                <p className="text-gray-600">8 hours exploring Wadi Rum's highlights</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Expert Guide & Pilot</h3>
                <p className="text-gray-600">Professional photographer and drone operator</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Traditional Lunch</h3>
                <p className="text-gray-600">Authentic Bedouin meal in the desert</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Digital Delivery</h3>
                <p className="text-gray-600">All photos and videos within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-24 bg-slate-900">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
            Perfect <span className="font-bold">For</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-5xl mb-4">💑</div>
              <h3 className="text-lg font-semibold text-white mb-2">Couples</h3>
              <p className="text-gray-400 text-sm">Romantic memories from above</p>
            </div>
            <div className="text-center p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-lg font-semibold text-white mb-2">Photographers</h3>
              <p className="text-gray-400 text-sm">Unique aerial perspectives</p>
            </div>
            <div className="text-center p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-lg font-semibold text-white mb-2">Content Creators</h3>
              <p className="text-gray-400 text-sm">Professional footage for your portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Capture Your <span className="font-bold">Adventure?</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Limited availability. Book your exclusive photography experience today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#booking">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-base font-semibold">
                Book This Experience
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-base font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-slate-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Reserve Your <span className="font-bold">Experience</span>
            </h2>
            <p className="text-lg text-gray-600">
              Fill in your details and we'll confirm your booking
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <BookingForm tourName="Photography Tour + Drone" />
          </div>
        </div>
      </section>
    </div>
  )
}
