"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";

export default function RSVP() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attending, setAttending] = useState<"JOYFULLY ACCEPT" | "REGRETFULLY DECLINE" | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attending || !phone) return;

    setIsLoading(true);

    const url = weddingConfig.googleForms.rsvp.url;
    const payload = {
      [weddingConfig.googleForms.rsvp.entries.name]: name,
      [weddingConfig.googleForms.rsvp.entries.phone]: phone,
      [weddingConfig.googleForms.rsvp.entries.status]: attending,
    };

    // CRITICAL DIAGNOSTIC LOGS
    console.log("--- GOOGLE FORM RSVP SUBMISSION ---");
    console.log("Google form URL:", url);
    console.log("Submitting form payload:", payload);

    const formData = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    
    // Add required hidden fields for Google Forms
    formData.append("fvv", "1");
    formData.append("pageHistory", "0");

    try {
      // Silent submission to Google Forms
      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      // NO-CORS means status is 0, but if it doesn't throw, it likely sent.
      console.log("Response status:", response.status);
      console.log("Response result:", response);
      
      setIsSubmitted(true);
      
      // Optional: trigger confetti locally on acceptance
      if (attending === "JOYFULLY ACCEPT") {
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#d4af37", "#b76e79", "#800020"]
        });
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please check your internet and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-playfair text-[var(--color-burgundy-900)] dark:text-[var(--color-ivory)] mb-4 uppercase tracking-wider">
            Will You Join Our Celebration?
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold-400)] mx-auto mb-6"></div>
          <p className="font-cormorant text-xl text-gray-600 dark:text-gray-400">
            Please let us know if you can make it
          </p>
        </motion.div>

        {!isSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-3xl space-y-8 text-left border border-[var(--color-gold-400)]/20 shadow-xl"
          >
            <div>
              <label className="block font-cormorant text-xl mb-3 text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)]">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-6 py-4 bg-white/50 dark:bg-black/50 border border-[var(--color-gold-400)]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-400)] font-cormorant text-lg"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block font-cormorant text-xl mb-3 text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)]">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-6 py-4 bg-white/50 dark:bg-black/50 border border-[var(--color-gold-400)]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-400)] font-cormorant text-lg"
                placeholder="e.g. +880 1XXX XXXXXX"
              />
            </div>

            <div>
              <label className="block font-cormorant text-xl mb-3 text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)]">
                Will you attend?
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setAttending("JOYFULLY ACCEPT")}
                  className={`flex-1 py-4 rounded-xl font-cormorant text-lg tracking-widest uppercase transition-all duration-300 border ${
                    attending === "JOYFULLY ACCEPT"
                      ? "bg-[var(--color-burgundy-800)] text-[var(--color-champagne)] border-[var(--color-burgundy-800)]"
                      : "bg-transparent text-[var(--color-burgundy-800)] dark:text-white border-[var(--color-gold-400)] hover:bg-[var(--color-gold-400)]/10"
                  }`}
                >
                  Joyfully Accept
                </button>
                <button
                  type="button"
                  onClick={() => setAttending("REGRETFULLY DECLINE")}
                  className={`flex-1 py-4 rounded-xl font-cormorant text-lg tracking-widest uppercase transition-all duration-300 border ${
                    attending === "REGRETFULLY DECLINE"
                      ? "bg-gray-600 text-white border-gray-600"
                      : "bg-transparent text-gray-600 dark:text-gray-300 border-gray-400 hover:bg-gray-400/10"
                  }`}
                >
                  Regretfully Decline
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={!name || !attending || !phone || isLoading}
              className="w-full py-4 bg-[var(--color-gold-400)] text-white rounded-xl hover:bg-[var(--color-gold-500)] transition-colors duration-300 font-cormorant tracking-widest uppercase text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm Attendance"
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-12 rounded-3xl space-y-6 border border-[var(--color-gold-400)]/20 shadow-2xl"
          >
            <h3 className="text-3xl font-playfair text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)]">
              {attending === "JOYFULLY ACCEPT" ? "Can't wait to see you!" : "You will be missed!"}
            </h3>
            <p className="font-cormorant text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {attending === "JOYFULLY ACCEPT" 
                ? "Thank you for confirming your attendance. We look forward to celebrating with you. ❤️"
                : "Thank you for letting us know. While we'll miss celebrating with you in person, your love, prayers, and blessings mean the world to us. ❤️"}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
