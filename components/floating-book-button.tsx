"use client"

import Link from "next/link"
import { Calendar } from "lucide-react"

export function FloatingBookButton() {
  return (
    <Link
      href="/contact-us#booking"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 group"
    >
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-3">
        <Calendar className="h-5 w-5" />
        <span className="font-bold text-lg whitespace-nowrap">Book Now</span>
      </div>
      {/* Pulse animation ring */}
      <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-20"></div>
    </Link>
  )
}
