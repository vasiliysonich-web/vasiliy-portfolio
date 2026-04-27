"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Code,
  TrendingUp,
  Award,
  Brain,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "ChatGPT / Claude", icon: Brain, color: "neon-purple" },
  { name: "Midjourney / DALL-E", icon: Sparkles, color: "neon-pink" },
  { name: "SMM-Strategy", icon: TrendingUp, color: "neon-cyan" },
  { name: "Копирайтинг", icon: Code, color: "neon-purple" },
  { name: "Сценарное дело", icon: Award, color: "neon-pink" },
  { name: "Аналитика", icon: TrendingUp, color: "neon-cyan" },
];

const timeline = [
  {
    year: "2024",
    title: "Курсы по нейросетям",
    description: "DeepLearning, генерация текстов и визуалов с помощью AI",
  },
  {
    year: "2023",
    title: "SMM-Академия",
    description: "Комплексное обучение контент-маркетингу и продажам",
  },
  {
    year: "2022",
    title: "Начало карьеры",
    description: "Первые клиенты и написание сценариев для Reels",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-8 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-4xl blur-2xl opacity-30" />
              <div className="relative glass-card-premium p-8 rounded-4xl">
                <div className="relative rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-neon-purple/30 to-neon-pink/30 group-hover:from-neon-purple/50 group-hover:to-neon-pink/50 transition-all duration-500">
                  <div className="flex items-start justify-center p-4 pt-8">
                    <div className="text-center">
                      {/* Elegant Photo Frame */}
                      <div className="relative mx-auto">
                        {/* Decorative glow behind photo */}
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-2xl blur-xl opacity-50 scale-105" />

                        {/* Photo container with gradient border */}
                        <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-neon-purple via-neon-pink to-neon-cyan shadow-glow-purple">
                          <div className="rounded-xl overflow-hidden bg-background-dark">
                            <Image
                              src="/images/prompt-02.webp"
                              alt="Василий"
                              width={400}
                              height={500}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>

                        {/* Decorative corner accents */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-neon-purple rounded-tl-xl" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-neon-pink rounded-tr-xl" />
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-neon-pink rounded-bl-xl" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-neon-purple rounded-br-xl" />
                      </div>

                      <Badge
                        variant="glow"
                        className="mt-6 bg-gradient-to-r from-neon-purple/40 to-neon-pink/40 border-neon-purple/50"
                      >
                        Копирайтер & AI Expert
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group/item">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-12 h-12 rounded-2xl bg-neon-purple/20 flex items-center justify-center group-hover/item:bg-neon-purple/40 group-hover/item:shadow-glow-purple transition-all"
                    >
                      <GraduationCap className="w-6 h-6 text-neon-purple" />
                    </motion.div>
                    <div>
                      <div className="font-bold text-lg">Василий</div>
                      <div className="text-sm text-white/60">
                        Россия, удалённо 🌍
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="mb-8">
              <Badge variant="primary" className="mb-4">
                Обо мне
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Пишу продающие тексты{" "}
                <span className="gradient-text">с помощью нейросетей</span>
              </h2>
            </div>

            <div className="space-y-4 text-white/70 mb-8">
              <p>
                Закончил{" "}
                <span className="text-white font-medium">SMM-Академию</span> и
                специализированные курсы по{" "}
                <span className="text-neon-purple font-medium">нейросетям</span>
                . Помогаю экспертам, блогерам и брендам создавать продающий
                контент, который реально работает.
              </p>
              <p>
                Использую современные нейросети для генерации идей, оптимизации
                текстов и создания вирусных сценариев. Результат —{" "}
                <span className="text-neon-pink font-medium">
                  рост продаж, охватов и вовлечённости
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="glass-card-hover p-5 text-center rounded-2xl border border-white/10 hover:border-neon-purple/50 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mx-auto mb-3"
                  >
                    <skill.icon
                      className={`w-8 h-8 mx-auto text-${skill.color} group-hover:text-neon-purple group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all`}
                    />
                  </motion.div>
                  <span className="text-sm font-bold text-white/90 group-hover:text-neon-purple transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">
                Опыт работы
              </h3>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="flex flex-col items-center relative">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-4 h-4 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink shadow-glow-purple group-hover:shadow-glow-purple transition-all"
                    />
                    {index < timeline.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="w-0.5 h-24 bg-gradient-to-b from-neon-purple via-neon-pink to-transparent origin-top"
                      />
                    )}
                  </div>
                  <div className="pb-6 pt-1">
                    <span className="text-xs font-bold text-neon-cyan uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h4 className="font-bold text-lg mt-2 text-white group-hover:text-neon-purple transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/60 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
