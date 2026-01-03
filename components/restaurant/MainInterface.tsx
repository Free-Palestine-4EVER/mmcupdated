"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Language, Currency, Product, products } from "@/lib/restaurant-data"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
// Import Lucide icons
import { Plus, ShoppingBag, UtensilsCrossed, Compass, Sprout, Coffee, Moon, Stars } from "lucide-react"

interface MainInterfaceProps {
    language: Language
    currency: Currency
    cart: { id: string; quantity: number }[]
    onViewCart: () => void
    onAddToCart: (id: string) => void
    t: Record<string, string>
    currencyRate: number
    currencySymbol: string
}

export function MainInterface({
    language,
    currency,
    cart,
    onViewCart,
    onAddToCart,
    t,
    currencyRate,
    currencySymbol,
}: MainInterfaceProps) {
    const [activeTab, setActiveTab] = useState<"restaurant" | "tours" | "tree">("restaurant")

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    const totalPrice = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id)
        return acc + (product ? product.price * item.quantity : 0)
    }, 0)

    // Filter products based on active tab
    const displayedProducts = products.filter((p) => {
        if (activeTab === "restaurant") return p.category.startsWith("restaurant") || p.category === "cafe"
        if (activeTab === "tours") return p.category === "tours"
        if (activeTab === "tree") return p.category === "tree"
        return false
    })

    // Group restaurant items by sub-category
    const groupedProducts = activeTab === "restaurant"
        ? {
            [t.cat_breakfast]: displayedProducts.filter(p => p.category === "restaurant-breakfast"),
            [t.cat_lunch]: displayedProducts.filter(p => p.category === "restaurant-lunch"),
            [t.cat_dinner]: displayedProducts.filter(p => p.category === "restaurant-dinner"),
            [t.cat_cafe]: displayedProducts.filter(p => p.category === "cafe"),
        }
        : { [activeTab === "tours" ? t.tab_tours : t.tab_tree]: displayedProducts }

    const CategoryIcon = ({ category }: { category: string }) => {
        if (category === t.cat_breakfast) return <UtensilsCrossed className="w-5 h-5 text-amber-500" />
        if (category === t.cat_lunch) return <UtensilsCrossed className="w-5 h-5 text-orange-500" />
        if (category === t.cat_dinner) return <Moon className="w-5 h-5 text-indigo-500" />
        if (category === t.cat_cafe) return <Coffee className="w-5 h-5 text-amber-700" />
        if (category === t.tab_tours) return <Compass className="w-5 h-5 text-blue-500" />
        if (category === t.tab_tree) return <Sprout className="w-5 h-5 text-green-500" />
        return <Stars className="w-5 h-5 text-amber-400" />
    }

    return (
        <div className="flex flex-col h-screen max-w-md mx-auto bg-slate-50 shadow-2xl overflow-hidden font-sans">
            {/* Header */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-white/20 px-6 py-4 flex justify-between items-center shadow-sm">
                <div>
                    <h1 className="text-2xl font-black tracking-tighter text-slate-900">MMC</h1>
                    <span className="text-[10px] font-bold tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full uppercase">At Wadi Rum</span>
                </div>

                <AnimatePresence>
                    {totalItems > 0 && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                onClick={onViewCart}
                                size="sm"
                                className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-5 h-10 shadow-lg shadow-slate-200 flex items-center gap-2 transition-all"
                            >
                                <div className="relative">
                                    <ShoppingBag className="w-4 h-4" />
                                    <span className="absolute -top-1 -right-1 bg-amber-500 text-[10px] w-3 h-3 flex items-center justify-center rounded-full text-white">{totalItems}</span>
                                </div>
                                <span className="font-semibold">{(totalPrice * currencyRate).toFixed(2)} {currencySymbol}</span>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Tabs */}
            <div className="flex p-1.5 bg-slate-100/50 mx-4 mt-4 rounded-2xl border border-white shadow-inner gap-1">
                <TabButton
                    active={activeTab === "restaurant"}
                    onClick={() => setActiveTab("restaurant")}
                    icon={<UtensilsCrossed className="w-4 h-4" />}
                >
                    {t.tab_restaurant}
                </TabButton>
                <TabButton
                    active={activeTab === "tours"}
                    onClick={() => setActiveTab("tours")}
                    icon={<Compass className="w-4 h-4" />}
                >
                    {t.tab_tours}
                </TabButton>
                <TabButton
                    active={activeTab === "tree"}
                    onClick={() => setActiveTab("tree")}
                    icon={<Sprout className="w-4 h-4" />}
                >
                    {t.tab_tree}
                </TabButton>
            </div>

            {/* Content */}
            <ScrollArea className="flex-1 px-4 py-6">
                <div className="space-y-8 pb-24">
                    {Object.entries(groupedProducts).map(([category, items], sectionIndex) => (
                        items.length > 0 && (
                            <motion.div
                                key={category}
                                className="space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: sectionIndex * 0.1 }}
                            >
                                <div className="flex items-center gap-2 px-2">
                                    <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                                        <CategoryIcon category={category} />
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-800">{category}</h2>
                                </div>
                                <div className="grid gap-4">
                                    {items.map((product, i) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            t={t}
                                            currencyRate={currencyRate}
                                            currencySymbol={currencySymbol}
                                            onAdd={() => onAddToCart(product.id)}
                                            index={i}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

function TabButton({ active, children, onClick, icon }: { active: boolean; children: React.ReactNode; onClick: () => void; icon: React.ReactNode }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-xl text-xs font-semibold transition-all duration-300 relative overflow-hidden",
                active ? "text-amber-700 bg-white shadow-md ring-1 ring-black/5" : "text-slate-400 hover:text-slate-600 hover:bg-white/50"
            )}
        >
            <div className={cn("transition-transform duration-300", active ? "scale-110" : "scale-100 opacity-70")}>
                {icon}
            </div>
            <span className="truncate w-full text-center z-10 relative">{children}</span>
        </button>
    )
}

function ProductCard({
    product,
    t,
    currencyRate,
    currencySymbol,
    onAdd,
    index,
}: {
    product: Product
    t: Record<string, string>
    currencyRate: number
    currencySymbol: string
    onAdd: () => void
    index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100 flex gap-4 group relative overflow-hidden cursor-pointer"
            onClick={onAdd}
        >
            <div className="flex-1 space-y-2 relative z-10">
                <div className="space-y-0.5">
                    <h3 className="font-bold text-slate-900 leading-tight">{t[`item_${product.id.replace(/-/g, "_")}`] || product.id}</h3>
                    {t[`item_${product.id.replace(/-/g, "_")}_desc`] && (
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                            {t[`item_${product.id.replace(/-/g, "_")}_desc`]}
                        </p>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <div className="font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg text-sm inline-block">
                        {(product.price * currencyRate).toFixed(2)} {currencySymbol}
                    </div>
                    {product.category === "tree" && (
                        <span className="text-[10px] uppercase font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">Community Impact</span>
                    )}
                </div>
            </div>
            <div className="flex items-end relative z-10">
                <Button
                    onClick={(e) => {
                        e.stopPropagation()
                        onAdd()
                    }}
                    size="icon"
                    className="h-10 w-10 rounded-full bg-slate-50 text-slate-900 border border-slate-200 hover:bg-amber-500 hover:border-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-200 transition-all active:scale-95"
                >
                    <Plus className="w-5 h-5" />
                </Button>
            </div>

            {/* Decorative gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    )
}
