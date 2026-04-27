"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Bot } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-6 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border border-neon-purple/40 hover:border-neon-purple/60 transition-all"
            >
              <Bot className="w-5 h-5 text-neon-cyan animate-pulse" />
              <span className="text-sm font-semibold text-white">
                AI-контент что действительно работает
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8 tracking-tight"
            >
              <span className="block mb-2">Копирайтер и сценарист</span>
              <span className="gradient-text">Reels</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-pink">
                с нейросетями
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Создаю{" "}
              <span className="text-neon-purple font-bold">
                продающие тексты
              </span>{" "}
              и{" "}
              <span className="text-neon-pink font-bold">
                вирусные сценарии
              </span>{" "}
              для Reels, усиленные мощью нейросетей. Гарантирую рост охватов,
              вовлечённости и реальных продаж.
            </motion.p>

            {/* Stats with Glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12"
            >
              {[
                { value: "100+", label: "Кейсов", accent: "purple" },
                { value: "50M+", label: "Охватов", accent: "pink" },
                { value: "65%", label: "Рост продаж", accent: "cyan" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center group cursor-default"
                >
                  <div
                    className={`text-4xl md:text-5xl font-black stat-number group-hover:scale-110 transition-transform origin-center drop-shadow-lg`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 mt-2 font-semibold uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("cases")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="glass-button-glow px-10 py-4 rounded-2xl font-bold text-white text-lg flex items-center justify-center gap-3 group"
              >
                <span>Посмотреть кейсы</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://t.me/s_vs_iv", "_blank")}
                className="glass-card-hover px-10 py-4 rounded-2xl font-bold text-white text-lg flex items-center justify-center gap-3 group border-2 border-neon-cyan/50 hover:border-neon-cyan transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-neon-cyan"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.52-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.74 3.99-1.74 6.65-2.89 7.99-3.45 3.8-1.6 4.59-1.88 5.1-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.01.06.01.24 0 .38z" />
                </svg>
                <span>Написать в Telegram</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-3xl blur-2xl opacity-30" />

              {/* Image Frame */}
              <div className="relative glass-card-hover p-3 rounded-3xl">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-neon-purple/20 to-neon-pink/20">
                  {/* Centered Photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[280px] h-[280px] mx-auto rounded-full overflow-hidden border-4 border-neon-purple/50 shadow-neon-purple bg-gradient-to-br from-neon-purple/25 via-neon-pink/20 to-neon-cyan/25">
                      <div className="w-full h-full rounded-full bg-background-dark/90 flex items-center justify-center">
                        <Image
                          src="/images/my-photo.jpg.png"
                          alt="Василий"
                          width={280}
                          height={280}
                          className="object-contain w-full h-full"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* AI Pattern Overlay */}
                  <div className="absolute inset-0 bg-grid opacity-30" />

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 glass-card px-3 py-1.5"
                  >
                    <span className="text-xs text-neon-cyan">AI Powered</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-4 left-4 glass-card px-3 py-1.5"
                  >
                    <span className="text-xs text-neon-pink">Reels Expert</span>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-16 h-16 border border-neon-purple/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-12 h-12 border border-neon-pink/30 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <motion.div
              animate={{ height: [8, 16, 8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 bg-white/40 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
