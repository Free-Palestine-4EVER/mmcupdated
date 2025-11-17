"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Wifi, Tag, CheckCircle2 } from "lucide-react"

export function DiscountModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Check if the modal has been shown before
    const hasSeenModal = localStorage.getItem("hasSeenDiscountModal")

    if (!hasSeenModal) {
      // Show modal after 5 seconds
      const timer = setTimeout(() => {
        setOpen(true)
        localStorage.setItem("hasSeenDiscountModal", "true")
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90%] max-w-[600px] sm:max-w-[600px] p-0 overflow-hidden border-0 shadow-2xl max-h-[90vh] rounded-3xl">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-20 rounded-full bg-white/90 p-1.5 text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600" />

          {/* Animated background shapes */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Content */}
          <div className="relative px-4 sm:px-8 pt-6 sm:pt-12 pb-5 sm:pb-8">
            {/* Badge with discount */}
            <div className="mb-3 sm:mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-2xl bg-white opacity-20" style={{ animationDuration: '2s' }} />
                <div className="relative flex h-16 w-28 sm:h-28 sm:w-40 items-center justify-center rounded-2xl bg-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl sm:text-5xl font-black text-orange-600">10%</div>
                    <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange-500">OFF</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="mb-1.5 sm:mb-3 text-center text-xl sm:text-3xl font-black text-white drop-shadow-lg">
              Limited Time Offer!
            </h2>
            <p className="mb-3 sm:mb-8 text-center text-sm sm:text-lg text-white/95 drop-shadow">
              Book Your Desert Adventure Today
            </p>

            {/* Main offer card */}
            <div className="mb-2 sm:mb-4 rounded-2xl bg-white p-3 sm:p-6 shadow-xl text-center">
              <div className="mb-2 sm:mb-4 flex flex-col items-center gap-1.5 sm:gap-3">
                <div className="rounded-full bg-orange-100 p-1.5 sm:p-2">
                  <Tag className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="mb-0.5 sm:mb-1 text-base sm:text-xl font-bold text-gray-900">
                    10% Off All Desert Activities
                  </h3>
                  <p className="text-[11px] sm:text-sm text-gray-600 leading-tight sm:leading-relaxed">
                    Experience authentic Bedouin adventures with exclusive savings on all tours and activities
                  </p>
                </div>
              </div>

              {/* Benefits list */}
              <div className="mb-2 sm:mb-4 space-y-1 sm:space-y-2 border-t border-gray-100 pt-2 sm:pt-4">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-gray-700">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  <span>Jeep tours, camel rides & camping</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-gray-700">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  <span>Rock climbing & trekking adventures</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-gray-700">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  <span>All authentic Bedouin experiences</span>
                </div>
              </div>

              {/* Starlink bonus */}
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-2.5 sm:p-4 border border-blue-100">
                <div className="flex flex-col items-center gap-1.5 sm:gap-3">
                  <div className="rounded-full bg-blue-100 p-1.5 sm:p-2">
                    <Wifi className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-0.5 sm:mb-1 text-[11px] sm:text-sm font-bold text-gray-900">
                      Bonus: Starlink High-Speed Internet
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-600 leading-tight sm:leading-relaxed">
                      Stay connected with blazing-fast satellite internet in the heart of Wadi Rum desert
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount Notice */}
            <div className="mb-2 sm:mb-3 text-center">
              <p className="text-[11px] sm:text-sm text-white/90">
                <span className="font-bold text-red-500">The discount will be calculated on the contact form</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2 sm:gap-3">
              <Button
                onClick={() => {
                  window.location.href = "/desert-experiences"
                }}
                className="flex-1 h-10 sm:h-12 bg-white text-orange-600 font-bold text-sm sm:text-base shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Book Now & Save 10%
              </Button>
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
                className="h-10 sm:h-12 px-4 sm:px-6 text-white hover:bg-white/20 hover:text-white font-semibold text-sm sm:text-base"
              >
                Later
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
