"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Language, Currency, languages, currencies } from "@/lib/restaurant-data"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { translations } from "@/lib/restaurant-data"

interface SplashScreenProps {
    onComplete: (language: Language, currency: Currency) => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
    const [selectedLang, setSelectedLang] = useState<Language | null>(null)
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>("JOD")

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 p-6 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-full max-w-sm space-y-8 relative z-10"
            >
                <div className="text-center space-y-2">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-1">MMC</h1>
                        <p className="text-amber-600 font-medium tracking-widest uppercase text-sm">Mohammed Mutlak Camp</p>
                    </motion.div>
                </div>

                <div className="space-y-6 bg-white/50 backdrop-blur-xl p-6 rounded-3xl border border-white/50 shadow-xl">
                    <div className="space-y-3">
                        <Label className="text-sm font-semibold text-slate-500 uppercase tracking-wider ml-1">Language</Label>
                        <div className="grid grid-cols-2 gap-2 max-h-[30vh] overflow-y-auto pr-1 custom-scrollbar">
                            {languages.map((lang, i) => (
                                <motion.button
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    key={lang.id}
                                    onClick={() => setSelectedLang(lang.id)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300",
                                        selectedLang === lang.id
                                            ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-200 ring-2 ring-amber-200 ring-offset-2"
                                            : "border-slate-100 bg-white/80 hover:bg-white hover:border-amber-200 text-slate-600 hover:shadow-md"
                                    )}
                                >
                                    <span className="text-2xl drop-shadow-sm">{lang.flag}</span>
                                    <span className={cn("font-semibold", selectedLang === lang.id ? "text-white" : "text-slate-700")}>{lang.name}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Label className="text-sm font-semibold text-slate-500 uppercase tracking-wider ml-1">Currency</Label>
                        <div className="grid grid-cols-3 gap-2">
                            {currencies.map((curr, i) => (
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    key={curr.id}
                                    onClick={() => setSelectedCurrency(curr.id)}
                                    className={cn(
                                        "rounded-2xl border p-3 text-center transition-all duration-300",
                                        selectedCurrency === curr.id
                                            ? "border-amber-500 bg-amber-500 text-white shadow-lg shadow-amber-200 ring-2 ring-amber-200 ring-offset-2"
                                            : "border-slate-100 bg-white/80 hover:bg-white hover:border-amber-200 text-slate-600 hover:shadow-md"
                                    )}
                                >
                                    <span className="block font-bold text-lg">{curr.symbol}</span>
                                    <span className={cn("text-xs font-medium", selectedCurrency === curr.id ? "text-amber-100" : "text-slate-400")}>{curr.id}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                <Button
                    className="w-full h-14 rounded-2xl text-xl font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    disabled={!selectedLang}
                    onClick={() => selectedLang && onComplete(selectedLang, selectedCurrency)}
                >
                    {selectedLang ? translations[selectedLang].enter : "Start Experience"}
                </Button>
            </motion.div>
        </div>
    )
}


