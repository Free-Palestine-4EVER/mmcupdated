"use client"

import { useState, useEffect } from "react"
import { Language, Currency, products, translations, currencies } from "@/lib/restaurant-data"
import { SplashScreen } from "./SplashScreen"
import { MainInterface } from "./MainInterface"
import { Cart } from "./Cart"
import { Toaster } from "sonner"

export function RestaurantApp() {
    const [language, setLanguage] = useState<Language | null>(null)
    const [currency, setCurrency] = useState<Currency>("JOD")
    const [cart, setCart] = useState<{ id: string; quantity: number }[]>([])
    const [view, setView] = useState<"splash" | "main" | "cart">("splash")
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
        setHydrated(true)
    }, [])

    if (!hydrated) return null

    const t = language ? translations[language] : translations["en"]
    const currencyRate = currencies.find((c) => c.id === currency)?.rate || 1
    const currencySymbol = currencies.find((c) => c.id === currency)?.symbol || "JOD"

    const addToCart = (id: string) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === id)
            if (existing) {
                return prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
            }
            return [...prev, { id, quantity: 1 }]
        })
    }

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const updateQuantity = (id: string, delta: number) => {
        setCart((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: Math.max(0, item.quantity + delta) }
                }
                return item
            }).filter(item => item.quantity > 0)
        })
    }

    const clearCart = () => setCart([])

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-100">
            <Toaster position="top-center" />
            {view === "splash" && (
                <SplashScreen
                    onComplete={(lang, curr) => {
                        setLanguage(lang)
                        setCurrency(curr)
                        setView("main")
                    }}
                />
            )}

            {view === "main" && language && (
                <MainInterface
                    language={language}
                    currency={currency}
                    cart={cart}
                    onViewCart={() => setView("cart")}
                    onAddToCart={addToCart}
                    t={t}
                    currencyRate={currencyRate}
                    currencySymbol={currencySymbol}
                />
            )}

            {view === "cart" && language && (
                <Cart
                    language={language}
                    currency={currency}
                    cart={cart}
                    onBack={() => setView("main")}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                    onClear={clearCart}
                    t={t}
                    currencyRate={currencyRate}
                    currencySymbol={currencySymbol}
                />
            )}
        </div>
    )
}
