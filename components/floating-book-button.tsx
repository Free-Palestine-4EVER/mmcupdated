"use client"

import Link from "next/link"

export function FloatingBookButton() {
  return (
    <Link
      href="/contact-us#booking"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group"
      style={{ writingMode: "vertical-rl" }}
    >
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-3 py-6 rounded-l-lg shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
        <span className="font-bold text-sm whitespace-nowrap">Book Now</span>
      </div>
      {/* Pulse animation ring */}
      <div className="absolute inset-0 bg-amber-500 rounded-l-lg animate-ping opacity-20"></div>
    </Link>
  )
}
