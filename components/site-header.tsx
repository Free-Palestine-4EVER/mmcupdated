"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { X, Menu, ChevronDown, ChevronUp, Search, Car } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { MobileSearch } from "./mobile-search"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [mobileDesertExpanded, setMobileDesertExpanded] = useState(false)
  const [mobileAccommodationExpanded, setMobileAccommodationExpanded] = useState(false)
  const [mobilePackagesExpanded, setMobilePackagesExpanded] = useState(false)

  // Create a custom event to communicate menu state to other components
  useEffect(() => {
    // Dispatch custom event when menu state changes
    const event = new CustomEvent("menuStateChange", { detail: { isOpen: mobileMenuOpen } })
    window.dispatchEvent(event)
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (mobileSearchOpen) setMobileSearchOpen(false)
  }

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen)
    if (mobileMenuOpen) setMobileMenuOpen(false)
  }

  const toggleMobileDesertExpanded = () => {
    setMobileDesertExpanded(!mobileDesertExpanded)
  }

  const toggleMobileAccommodationExpanded = () => {
    setMobileAccommodationExpanded(!mobileAccommodationExpanded)
  }

  const toggleMobilePackagesExpanded = () => {
    setMobilePackagesExpanded(!mobilePackagesExpanded)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <AnnouncementBar />
      {/* Desktop Header */}
      <div className="hidden md:flex container h-24 items-center justify-between px-4 max-w-full">
        <div className="flex">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/new-logo.png"
              alt="Mohammed Mutlak Camp"
              width={240}
              height={80}
              className="h-auto w-[200px] object-contain"
              priority
            />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-between w-full space-x-6">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">Desert Experiences</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <Link href="/desert-experiences/half-day-jeep-tour" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Half Day Jeep Tour</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Experience the beauty of Wadi Rum in a 4-hour jeep tour
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/full-day-jeep-tour" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Full Day Jeep Tour</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          A complete day exploring Wadi Rum's magnificent landscapes
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/two-hour-jeep-tour" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">2 Hours Jeep Tour</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          A quick introduction to Wadi Rum's beauty
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/the-beduin-way" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">The Beduin Way</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Experience the Bedouin way of life in the desert
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/jebel-khash-route" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Jebel Khash Route</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          One day jeep tour on the incredible Jebel Khash route
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/jebel-khash-2" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Jebel Khash 2-Day</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Jeep tour and hiking adventure in Jebel Khash
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/hot-air-balloon" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Hot Air Balloon</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Hot Air Balloon over Moon Valley
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/jebel-burdah-climbing" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Burdah Arch Scrambling</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Burdah Arch Scrambling and Hiking
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/all-in-one-day" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">All in One Day</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Experience multiple activities in a single day
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/um-addami-climbing" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Jebel Um Addami Climbing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Climbing Jordan's Highest Mountain
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/camel-rides" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Camel Rides</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Sunrise or sunset camel ride
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/trekking" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Trekking in the Wild</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Guided trekking adventures in Wadi Rum
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/night-walk-tour" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Night Walk Tour</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Evening walk with tea under the stars
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/desert-experiences/stargazing-education" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Stargazing Education</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn to navigate by the stars
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">Packages</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="col-span-2">
                    <Link href="/packages/bivouac" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Bivouac Camping Package</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Customizable desert camping with tours
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li className="col-span-2">
                    <div className="mb-2 mt-3 font-medium px-3">2-Day Packages</div>
                  </li>
                  <li>
                    <Link href="/packages/classic-adventure" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Classic Adventure</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Full-day jeep tour and half-day hiking
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages/desert-explorer" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Desert Explorer</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Jeep tour, camel ride, and hiking
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages/bedouin-experience" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Bedouin Experience</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Cultural immersion with traditional activities
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li className="col-span-2">
                    <div className="mb-2 mt-3 font-medium px-3">3-Day Packages</div>
                  </li>
                  <li>
                    <Link href="/packages/wadi-rum-discovery" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Wadi Rum Discovery</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Comprehensive exploration of Wadi Rum
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages/ultimate-adventure" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Ultimate Adventure</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Climb Jordan's highest peak and explore remote areas
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/packages/jordan-heights" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Jordan Heights</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conquer Wadi Rum's iconic rock formations
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm">Accommodation</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <Link href="/accommodation/our-tented-camp" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Our Tented Camp</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Comfortable tents with modern amenities
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/accommodation/bivouac" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Bivouac Camping</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Sleep under the stars in the desert
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/transport" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  Transport
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link href="/photography-drone-tour" legacyBehavior passHref>
                <NavigationMenuLink className="relative text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full transition-all hover:from-amber-600 hover:to-orange-700 hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none">
                  📸 Photography + Drone
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/bubble-camp-partner" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  Bubble Camp
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://www.thevillas-wadirum.com/"
                target="_blank"
                rel="noopener noreferrer"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  Luxury Villas
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/useful-information" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  Useful Info
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-amber-500 focus:outline-none">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center">
          <Link href="/contact-us">
            <Button className="bg-amber-500 hover:bg-amber-600">Book Now</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Header - Completely restructured with grid */}
      <div className="md:hidden grid grid-cols-3 h-24 items-center px-4">
        <div className="col-span-1 flex justify-start">
          <button onClick={toggleMobileSearch} aria-label="Search" className="p-2">
            <Search className="h-8 w-8 text-amber-500" />
          </button>
        </div>
        <div className="col-span-1 flex justify-center">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/images/new-logo.png"
              alt="Mohammed Mutlak Camp"
              width={563}
              height={188}
              className="h-auto object-contain"
              priority
            />
          </Link>
        </div>
        <div className="col-span-1 flex justify-end">
          <button onClick={toggleMobileMenu} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} className="p-2">
            <Menu className="h-8 w-8 text-amber-500" />
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && <MobileSearch onClose={() => setMobileSearchOpen(false)} />}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
          <div className="flex items-center justify-between p-4">
            <div className="w-6"></div> {/* Empty div for spacing */}
            <div className="flex justify-center flex-1">
              <Image
                src="/images/new-logo.png"
                alt="Mohammed Mutlak Camp"
                width={187}
                height={62}
                className="h-auto object-contain mx-auto"
                priority
              />
            </div>
            <button onClick={toggleMobileMenu} aria-label="Close menu" className="p-2 text-amber-500">
              <X className="h-8 w-8" />
            </button>
          </div>

          <div className="container overflow-y-auto pb-12 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/transport"
                className="py-2 text-lg font-medium border-b border-gray-100 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Car className="h-5 w-5 text-amber-500" />
                Transport & Taxi
              </Link>

              {/* <Link
                href="/photography-drone-tour"
                className="relative py-3 text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 rounded-lg shadow-lg border-0 text-center animate-pulse"
                onClick={() => setMobileMenuOpen(false)}
              >
                📸 Photography Tour + Drone
              </Link> */}

              <div className="py-2 border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium"
                  onClick={toggleMobileDesertExpanded}
                >
                  <div className="flex items-center gap-2">
                    <span>Desert Experiences</span>
                    <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                      15% OFF
                    </span>
                  </div>
                  {mobileDesertExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {mobileDesertExpanded && (
                  <div className="mt-2 pl-4 flex flex-col space-y-2">
                    <Link
                      href="/desert-experiences/half-day-jeep-tour"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Half Day Jeep Tour
                    </Link>
                    <Link
                      href="/desert-experiences/full-day-jeep-tour"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Full Day Jeep Tour
                    </Link>
                    <Link
                      href="/desert-experiences/two-hour-jeep-tour"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      2 Hours Jeep Tour
                    </Link>
                    <Link
                      href="/desert-experiences/the-beduin-way"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      The Beduin Way
                    </Link>
                    <Link
                      href="/desert-experiences/jebel-khash-route"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Jebel Khash Route
                    </Link>
                    <Link
                      href="/desert-experiences/jebel-khash-2"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Jebel Khash 2-Day
                    </Link>
                    <Link
                      href="/desert-experiences/hot-air-balloon"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Hot Air Balloon
                    </Link>
                    <Link
                      href="/desert-experiences/jebel-burdah-climbing"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Burdah Arch Scrambling
                    </Link>
                    <Link
                      href="/desert-experiences/all-in-one-day"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All in One Day
                    </Link>
                    <Link
                      href="/desert-experiences/um-addami-climbing"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Jebel Um Addami Climbing
                    </Link>
                    <Link
                      href="/desert-experiences/camel-rides"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Camel Rides
                    </Link>
                    <Link
                      href="/desert-experiences/trekking"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Trekking in the Wild
                    </Link>
                    <Link
                      href="/desert-experiences/night-walk-tour"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Night Walk Tour
                    </Link>
                    <Link
                      href="/desert-experiences/stargazing-education"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Stargazing Education
                    </Link>
                  </div>
                )}
              </div>

              <div className="py-2 border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium"
                  onClick={toggleMobilePackagesExpanded}
                >
                  <span>Packages</span>
                  {mobilePackagesExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {mobilePackagesExpanded && (
                  <div className="mt-2 pl-4 flex flex-col space-y-2">
                    <Link
                      href="/packages/bivouac"
                      className="text-gray-600 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bivouac Camping Package
                    </Link>
                    <div className="font-medium text-gray-800 mt-3 mb-1">2-Day Packages</div>
                    <Link
                      href="/packages/classic-adventure"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Classic Adventure
                    </Link>
                    <Link
                      href="/packages/desert-explorer"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Desert Explorer
                    </Link>
                    <Link
                      href="/packages/bedouin-experience"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bedouin Experience
                    </Link>
                    <div className="font-medium text-gray-800 mt-2 mb-1">3-Day Packages</div>
                    <Link
                      href="/packages/wadi-rum-discovery"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Wadi Rum Discovery
                    </Link>
                    <Link
                      href="/packages/ultimate-adventure"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Ultimate Adventure
                    </Link>
                    <Link
                      href="/packages/jordan-heights"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Jordan Heights
                    </Link>
                  </div>
                )}
              </div>

              <div className="py-2 border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full text-lg font-medium"
                  onClick={toggleMobileAccommodationExpanded}
                >
                  <span>Accommodation</span>
                  {mobileAccommodationExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {mobileAccommodationExpanded && (
                  <div className="mt-2 pl-4 flex flex-col space-y-2">
                    <Link
                      href="/accommodation/our-tented-camp"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our Tented Camp
                    </Link>
                    <Link
                      href="/accommodation/bivouac"
                      className="text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bivouac Camping
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/bubble-camp-partner"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bubble Camp Partner
              </Link>

              <Link
                href="https://www.thevillas-wadirum.com/"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Luxury Villas Partner
              </Link>

              <Link
                href="/about-us"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/contact-us"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </Link>

              <Link
                href="/useful-information"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Useful Information
              </Link>

              <Link
                href="/faq"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>

              <Link
                href="/blog"
                className="py-2 text-lg font-medium border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="mt-4">
                <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">Book Now</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
