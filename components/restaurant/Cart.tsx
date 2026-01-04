"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Language, Currency, Product, products } from "@/lib/restaurant-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Trash2, CheckCircle2, Star, Minus, Plus } from "lucide-react"
import { toast } from "sonner"

interface CartProps {
    language: Language
    currency: Currency
    cart: { id: string; quantity: number }[]
    onBack: () => void
    onUpdateQuantity: (id: string, delta: number) => void
    onRemove: (id: string) => void
    onClear: () => void
    t: Record<string, string>
    currencyRate: number
    currencySymbol: string
}

export function Cart({
    language,
    currency,
    cart,
    onBack,
    onUpdateQuantity,
    onRemove,
    onClear,
    t,
    currencyRate,
    currencySymbol,
}: CartProps) {
    const [step, setStep] = useState<"cart" | "form" | "success">("cart")
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        room: "",
    })

    // Calculate totals
    const total = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id)
        return acc + (product ? product.price * item.quantity : 0)
    }, 0)
    const displayTotal = (total * currencyRate).toFixed(2)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Prepare order details for email
            const orderItems = cart.map(item => {
                const product = products.find(p => p.id === item.id)
                return {
                    name: t[`item_${item.id.replace(/-/g, "_")}`] || item.id,
                    quantity: item.quantity,
                    price: product?.price || 0,
                    total: (product?.price || 0) * item.quantity
                }
            })

            const response = await fetch("/api/restaurant-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    items: orderItems,
                    total: total,
                    currency: currency,
                    language: language
                }),
            })

            if (!response.ok) throw new Error("Failed to place order")

            toast.success(t.order_success)
            onClear()
            setStep("success")
        } catch (error) {
            toast.error("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    if (step === "success") {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center space-y-8">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
                >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </motion.div>

                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-slate-900">{t.order_success}</h2>
                    <p className="text-slate-500 max-w-xs mx-auto">{t.order_success_msg}</p>
                </div>

                <div className="w-full max-w-sm bg-amber-50 rounded-2xl p-6 border border-amber-100 space-y-4">
                    <div className="flex justify-center text-amber-500">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-6 h-6 fill-current" />
                        ))}
                    </div>
                    <h3 className="font-semibold text-amber-900">{t.enjoying_stay || "Enjoying your stay?"}</h3>
                    <p className="text-sm text-amber-700">{t.review_prompt || "Write us a review on Google for a surprise!"}</p>
                    <Button
                        className="w-full bg-white text-amber-600 border border-amber-200 hover:bg-amber-100"
                        onClick={() => window.open("https://share.google/c3VsYxESZM0Vw6OPu", "_blank")}
                    >
                        {t.write_review || "Write Review"}
                    </Button>
                </div>

                <Button onClick={onBack} variant="outline" className="mt-8">
                    {t.back_to_menu || "Back to Menu"}
                </Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-screen max-w-md mx-auto bg-slate-50">
            {/* Header */}
            <div className="bg-white border-b px-6 py-4 flex items-center gap-4 sticky top-0 z-30">
                <Button variant="ghost" size="icon" onClick={() => (step === "form" ? setStep("cart") : onBack())}>
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                <h1 className="text-xl font-bold">{step === "cart" ? t.your_cart : t.checkout}</h1>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
                {step === "cart" ? (
                    cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
                            <ShoppingBag className="w-16 h-16 opacity-20" />
                            <p>{t.cart_empty}</p>
                            <Button onClick={onBack} variant="link">Go to Menu</Button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {cart.map((item) => {
                                const product = products.find((p) => p.id === item.id)
                                if (!product) return null
                                return (
                                    <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
                                        <div className="space-y-1">
                                            <h3 className="font-medium">{t[`item_${item.id.replace(/-/g, "_")}`] || item.id}</h3>
                                            <p className="text-sm text-slate-500">
                                                {(product.price * currencyRate).toFixed(2)} {currencySymbol}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, -1)}
                                                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-4 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, 1)}
                                                className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                ) : (
                    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">{t.name}</Label>
                                <Input
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="rounded-xl h-12"
                                />
                            </div>
                        </div>
                    </form>
                )}
            </div>

            {cart.length > 0 && step !== "success" && (
                <div className="bg-white border-t p-6 pb-8 shadow-lg">
                    <div className="flex justify-between items-center mb-4 text-lg font-bold">
                        <span>{t.total}</span>
                        <span>{displayTotal} {currencySymbol}</span>
                    </div>
                    {step === "cart" ? (
                        <Button onClick={() => setStep("form")} className="w-full h-12 rounded-xl text-lg bg-amber-600 hover:bg-amber-700">
                            {t.checkout}
                        </Button>
                    ) : (
                        <Button
                            form="checkout-form"
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 rounded-xl text-lg bg-amber-600 hover:bg-amber-700 disabled:opacity-50"
                        >
                            {loading ? t.sending : t.confirm_order}
                        </Button>
                    )}
                </div>
            )}
        </div>
    )
}

import { ShoppingBag } from "lucide-react"
