"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Language, Currency, Product, products } from "@/lib/restaurant-data"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Plus, ShoppingBag, UtensilsCrossed, Compass, Sprout, Coffee, Moon, Stars, Tent, Map, Clock, Wine, Flame } from "lucide-react"

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
    const [restaurantSubTab, setRestaurantSubTab] = useState<"food" | "drinks" | "shisha">("food")
    const [toursSubTab, setToursSubTab] = useState<"camp" | "website">("camp")

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    const totalPrice = cart.reduce((acc, item) => {
        const product = products.find((p) => p.id === item.id)
        return acc + (product ? product.price * item.quantity : 0)
    }, 0)

    // Filter products based on active tab and sub-tab
    const displayedProducts = products.filter((p) => {
        if (activeTab === "restaurant") {
            if (restaurantSubTab === "food") return p.category.startsWith("restaurant")
            if (restaurantSubTab === "drinks") return p.category === "drinks"
            if (restaurantSubTab === "shisha") return p.category === "shisha"
        }
        if (activeTab === "tours") {
            if (toursSubTab === "camp") return p.category === "camp-activity"
            if (toursSubTab === "website") return p.category === "website-tour"
        }
        if (activeTab === "tree") return p.category === "tree"
        return false
    })

    // Group restaurant food items by meal type
    const groupedProducts = activeTab === "restaurant" && restaurantSubTab === "food"
        ? {
            [t.cat_breakfast || "Breakfast"]: displayedProducts.filter(p => p.category === "restaurant-breakfast"),
            [t.cat_lunch || "Lunch"]: displayedProducts.filter(p => p.category === "restaurant-lunch"),
            [t.cat_dinner || "Dinner"]: displayedProducts.filter(p => p.category === "restaurant-dinner"),
        }
        : activeTab === "restaurant" && restaurantSubTab === "drinks"
            ? { [t.cat_drinks || "Drinks"]: displayedProducts }
            : activeTab === "restaurant" && restaurantSubTab === "shisha"
                ? { [t.cat_shisha || "Shisha"]: displayedProducts }
                : activeTab === "tours"
                    ? { [toursSubTab === "camp" ? (t.cat_camp_activities || "Activities from Camp") : (t.cat_website_tours || "Full Desert Tours")]: displayedProducts }
                    : { [t.tab_tree || "Plant a Tree"]: displayedProducts }

    const CategoryIcon = ({ category }: { category: string }) => {
        if (category === (t.cat_breakfast || "Breakfast")) return <UtensilsCrossed className="w-5 h-5 text-amber-500" />
        if (category === (t.cat_lunch || "Lunch")) return <UtensilsCrossed className="w-5 h-5 text-orange-500" />
        if (category === (t.cat_dinner || "Dinner")) return <Moon className="w-5 h-5 text-indigo-500" />
        if (category === (t.cat_drinks || "Drinks")) return <Coffee className="w-5 h-5 text-amber-700" />
        if (category === (t.cat_shisha || "Shisha")) return <Flame className="w-5 h-5 text-red-500" />
        if (category === (t.cat_camp_activities || "Activities from Camp")) return <Tent className="w-5 h-5 text-amber-600" />
        if (category === (t.cat_website_tours || "Full Desert Tours")) return <Map className="w-5 h-5 text-blue-500" />
        if (category === (t.tab_tree || "Plant a Tree")) return <Sprout className="w-5 h-5 text-green-500" />
        return <Stars className="w-5 h-5 text-amber-400" />
    }

    return (
        <div className="flex flex-col h-screen max-w-md mx-auto bg-slate-50 shadow-2xl overflow-hidden font-sans relative">
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

            {/* Main Tabs */}
            <div className="flex p-1.5 bg-slate-100/50 mx-4 mt-4 rounded-2xl border border-white shadow-inner gap-1">
                <TabButton
                    active={activeTab === "restaurant"}
                    onClick={() => setActiveTab("restaurant")}
                    icon={<UtensilsCrossed className="w-4 h-4" />}
                >
                    {t.tab_restaurant || "Restaurant & Cafe"}
                </TabButton>
                <TabButton
                    active={activeTab === "tours"}
                    onClick={() => setActiveTab("tours")}
                    icon={<Compass className="w-4 h-4" />}
                >
                    {t.tab_tours || "Tours & Experiences"}
                </TabButton>
                <TabButton
                    active={activeTab === "tree"}
                    onClick={() => setActiveTab("tree")}
                    icon={<Sprout className="w-4 h-4" />}
                >
                    {t.tab_tree || "Plant a Tree"}
                </TabButton>
            </div>

            {/* Restaurant Sub-tabs */}
            {activeTab === "restaurant" && (
                <div className="flex mx-4 mt-3 gap-2">
                    <button
                        onClick={() => setRestaurantSubTab("food")}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium transition-all",
                            restaurantSubTab === "food"
                                ? "bg-amber-500 text-white shadow-md"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-amber-50"
                        )}
                    >
                        <UtensilsCrossed className="w-4 h-4" />
                        <span className="text-xs">{t.cat_food || "Food"}</span>
                    </button>
                    <button
                        onClick={() => setRestaurantSubTab("drinks")}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium transition-all",
                            restaurantSubTab === "drinks"
                                ? "bg-amber-700 text-white shadow-md"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-amber-50"
                        )}
                    >
                        <Coffee className="w-4 h-4" />
                        <span className="text-xs">{t.cat_drinks || "Drinks"}</span>
                    </button>
                    <button
                        onClick={() => setRestaurantSubTab("shisha")}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium transition-all",
                            restaurantSubTab === "shisha"
                                ? "bg-red-500 text-white shadow-md"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-red-50"
                        )}
                    >
                        <Flame className="w-4 h-4" />
                        <span className="text-xs">{t.cat_shisha || "Shisha"}</span>
                    </button>
                </div>
            )}

            {/* Tours Sub-tabs */}
            {activeTab === "tours" && (
                <div className="flex mx-4 mt-3 gap-2">
                    <button
                        onClick={() => setToursSubTab("camp")}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium transition-all",
                            toursSubTab === "camp"
                                ? "bg-amber-500 text-white shadow-md"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-amber-50"
                        )}
                    >
                        <Tent className="w-4 h-4" />
                        <span className="text-xs">{t.cat_camp_activities || "Activities from Camp"}</span>
                    </button>
                    <button
                        onClick={() => setToursSubTab("website")}
                        className={cn(
                            "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium transition-all",
                            toursSubTab === "website"
                                ? "bg-blue-500 text-white shadow-md"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-blue-50"
                        )}
                    >
                        <Map className="w-4 h-4" />
                        <span className="text-xs">{t.cat_website_tours || "Full Desert Tours"}</span>
                    </button>
                </div>
            )}

            {/* Content */}
            <ScrollArea className="flex-1 px-4 py-6">
                <div className={cn("space-y-8", totalItems > 0 ? "pb-32" : "pb-24")}>
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

            {/* Sticky Checkout Button at Bottom */}
            <AnimatePresence>
                {totalItems > 0 && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-200 shadow-2xl"
                    >
                        <Button
                            onClick={onViewCart}
                            className="w-full h-14 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white text-lg font-bold shadow-lg shadow-amber-200 flex items-center justify-center gap-3"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            <span>{t.checkout || "Checkout"}</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                {totalItems} {t.items || "items"} • {(totalPrice * currencyRate).toFixed(2)} {currencySymbol}
                            </span>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
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
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg text-sm inline-block">
                        {(product.price * currencyRate).toFixed(2)} {currencySymbol}
                    </div>
                    {product.duration && (
                        <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">
                            <Clock className="w-3 h-3" />
                            {product.duration}
                        </span>
                    )}
                    {product.category === "tree" && (
                        <span className="text-[10px] uppercase font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">{t.community_impact || "Community Impact"}</span>
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
