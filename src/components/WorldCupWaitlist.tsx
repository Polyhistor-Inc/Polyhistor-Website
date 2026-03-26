"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Mail, Sparkles } from "lucide-react";

export default function WorldCupWaitlist() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/worldcup/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error("Error submitting waitlist:", error);
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto text-center"
            >
                {/* Success Message */}
                <div className="mb-8">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                        You're on the list! 🎉
                    </h3>
                    <p className="text-blue-100 text-lg">
                        We'll notify you when the Fan Pack launches
                    </p>
                </div>

                {/* What's Next */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
                    <h4 className="text-xl font-bold text-white mb-4">What happens next?</h4>
                    <div className="space-y-3 text-left">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-fifa-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-fifa-blue">1</span>
                            </div>
                            <p className="text-blue-100 text-sm">
                                You'll get an email as soon as the Fan Pack is available
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-fifa-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-fifa-blue">2</span>
                            </div>
                            <p className="text-blue-100 text-sm">
                                Early bird pricing: <span className="font-bold text-white">$6.99 Basic</span> or <span className="font-bold text-white">$9.99 Premium</span>
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-fifa-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-fifa-blue">3</span>
                            </div>
                            <p className="text-blue-100 text-sm">
                                Download the free update and unlock all 19 World Cup features
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="text-center">
                    <p className="text-sm text-blue-200">
                        🎉 <span className="font-bold">5,047</span> fans already waiting
                    </p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto text-center"
        >
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-md border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fifa-gold focus:border-transparent text-lg"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-fifa-gold to-yellow-500 hover:from-fifa-gold/90 hover:to-yellow-500/90 text-fifa-blue font-bold rounded-full transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                    {loading ? "Joining..." : "Get Notified When We Launch"}
                </button>
            </form>

            {/* Benefits */}
            <div className="mt-6 space-y-2 text-sm text-blue-100">
                <p className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Early bird pricing: $6.99 Basic | $9.99 Premium
                </p>
                <p>🎯 Be first to know when we launch</p>
                <p>🏆 Free update for existing Polyhistor users</p>
            </div>

            {/* Social Proof */}
            <div className="mt-6 flex items-center justify-center gap-2 text-blue-200">
                <span className="text-sm">
                    Join <span className="font-bold text-white">5,047</span> fans waiting
                </span>
            </div>
        </motion.div>
    );
}
