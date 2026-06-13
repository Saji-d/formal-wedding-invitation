"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineUser, HiOutlinePencil } from "react-icons/hi";
import { weddingConfig } from "@/config/wedding";

export default function GuestWishes() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || isLoading) return;

    setIsLoading(true);

    const url = weddingConfig.googleForms.blessings.url;
    const payload = {
      [weddingConfig.googleForms.blessings.entries.name]: name.trim(),
      [weddingConfig.googleForms.blessings.entries.message]: message.trim(),
    };

    // CRITICAL DIAGNOSTIC LOGS
    console.log("--- GOOGLE FORM BLESSINGS SUBMISSION ---");
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

      console.log("Response status:", response.status);
      console.log("Response result:", response);

      setName("");
      setMessage("");
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Wish submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-24 lg:py-32 px-4 bg-[var(--background)] relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-great-vibes text-[var(--color-ivory)] drop-shadow-[0_2px_10px_rgba(255,255,240,0.3)] font-medium mb-4">
            Guest Book
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold-400)]/50 mx-auto mb-6"></div>
          <p className="font-cormorant text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Share your blessings, prayers, and heartfelt wishes for Sajid & Dilruba ❤️
          </p>
        </motion.div>

        <div className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[700px]"
          >
            <form onSubmit={handleSubmit} className="space-y-6 glass p-8 md:p-12 rounded-3xl shadow-xl border border-[var(--color-gold-400)]/20">
              <div>
                <label className="block font-cormorant text-xl mb-3 text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)]">
                  Your Name
                </label>
                <div className="relative">
                  <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/50 border border-[var(--color-gold-400)]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-400)] font-cormorant text-lg"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label className="block font-cormorant text-xl mb-3 text-[var(--color-burgundy-800)] dark:text-[var(--color-champagne)]">
                  Your Message
                </label>
                <div className="relative">
                  <HiOutlinePencil className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-black/50 border border-[var(--color-gold-400)]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-400)] font-cormorant text-lg resize-none"
                    placeholder="Write your wishes here..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[var(--color-gold-400)] text-white rounded-xl hover:bg-[var(--color-gold-500)] transition-all duration-300 font-cormorant tracking-widest uppercase text-lg shadow-lg disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Blessings"
                )}
              </button>

              <AnimatePresence>
                {isSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center font-cormorant text-green-600 dark:text-green-400 text-lg mt-4"
                  >
                    Thank you for your heartfelt blessings and wishes. ❤️
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
