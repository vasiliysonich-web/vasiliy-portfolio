"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Video,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const services = [
  {
    icon: Brain,
    title: "Продающие тексты с ИИ",
    description:
      "Создаю убедительные продающие тексты для посадочных страниц, email-рассылок и рекламных объявлений с использованием ChatGPT и Claude.",
    features: [
      "Landing Page",
      "Email маркетинг",
      "Рекламные тексты",
      "Product descriptions",
    ],
    accent: "purple" as const,
    result: "Конверсия вырастает на 30-50%",
  },
  {
    icon: Video,
    title: "Сценарии для Reels",
    description:
      "Пишу вирусные сценарии для Reels и Shorts с помощью нейросетей. Анализирую тренды и адаптирую под вашу аудиторию.",
    features: [
      "Вирусные хуки",
      "Структура по АРИЛ",
      "Трендовые форматы",
      "CTA-блоки",
    ],
    accent: "pink" as const,
    result: "Охваты растут в 3-5 раз",
  },
  {
    icon: TrendingUp,
    title: "Контент-стратегии",
    description:
      "Разрабатываю AI-поддержанные контент-стратегии для SMM. Автоматизирую создание контента без потери качества.",
    features: [
      "Контент-план на месяц",
      "Рубрики и форматы",
      "Автоматизация с ИИ",
      "Календарь публикаций",
    ],
    accent: "cyan" as const,
    result: "Экономия до 70% времени",
  },
  {
    icon: Sparkles,
    title: "Прогревающие воронки",
    description:
      "Создаю прогревающие и автоворонки для увеличения продаж. Интегрирую нейросети для персонализации коммуникации.",
    features: ["Welcome-серии", "Автоворонки", "Сегментация", "Персонализация"],
    accent: "purple" as const,
    result: "Рост продаж на 65%+",
  },
];

// Маппинг классов для разных accent'ов
const accentColorMap = {
  purple: {
    bg: "bg-neon-purple/20",
    icon: "text-neon-purple",
    badge: "primary" as const,
    gradientFrom: "from-neon-purple",
    gradientTo: "to-neon-pink",
    featureIcon: "text-neon-purple",
    borderBg: "bg-neon-purple/10",
    borderColor: "border-neon-purple/20",
    textColor: "text-neon-purple",
  },
  pink: {
    bg: "bg-neon-pink/20",
    icon: "text-neon-pink",
    badge: "secondary" as const,
    gradientFrom: "from-neon-pink",
    gradientTo: "to-neon-cyan",
    featureIcon: "text-neon-pink",
    borderBg: "bg-neon-pink/10",
    borderColor: "border-neon-pink/20",
    textColor: "text-neon-pink",
  },
  cyan: {
    bg: "bg-neon-cyan/20",
    icon: "text-neon-cyan",
    badge: "cyan" as const,
    gradientFrom: "from-neon-cyan",
    gradientTo: "to-neon-purple",
    featureIcon: "text-neon-cyan",
    borderBg: "bg-neon-cyan/10",
    borderColor: "border-neon-cyan/20",
    textColor: "text-neon-cyan",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setSelectedService(index);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleContactClick = () => {
    // Scroll to contact section
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 relative">
      {/* Modal */}
      {selectedService !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-card-premium p-8 rounded-3xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Запишитесь на бесплатную консультацию
            </h3>
            <p className="text-white/70 mb-6">
              Оставьте заявку, и я свяжусь с вами в течение 24 часов для
              обсуждения вашего проекта
            </p>
            <button
              onClick={handleContactClick}
              className="w-full glass-button-glow px-6 py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-3 hover:scale-105 transition-transform"
            >
              Записаться на консультацию
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="primary" className="mb-4">
            Услуги
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Что я делаю с <span className="gradient-text">нейросетями</span>
          </h2>
          <p className="text-white/60 text-lg">
            Комплексные решения для роста вашего бизнеса в социальных сетях
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const colors = accentColorMap[service.accent];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700`}
                />
                <div className="relative glass-card-premium p-8 h-full flex flex-col hover:border-neon-purple/60 transition-all duration-300">
                  {/* Top Badge and Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-neon-purple/50 transition-all duration-300`}
                    >
                      <service.icon className={`w-8 h-8 ${colors.icon}`} />
                    </motion.div>
                    <Badge
                      variant={colors.badge}
                      className="bg-gradient-to-r from-neon-purple/40 to-neon-pink/40 border-neon-purple/50"
                    >
                      AI
                    </Badge>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl md:text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-neon-pink transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 text-sm text-white/80 group-hover:text-white transition-colors"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${colors.featureIcon === "text-neon-purple" ? "bg-neon-purple" : colors.featureIcon === "text-neon-pink" ? "bg-neon-pink" : "bg-neon-cyan"} group-hover:scale-150 transition-transform origin-center`}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Result Box */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`p-4 rounded-2xl ${colors.borderBg} border-2 ${colors.borderColor} relative overflow-hidden group-hover:border-neon-purple/60 transition-all duration-300`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-3">
                      <TrendingUp className={`w-5 h-5 ${colors.textColor}`} />
                      <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                        {service.result}
                      </span>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOpenModal(index)}
                    className={`mt-6 flex items-center gap-2 ${colors.textColor} font-bold group-hover:gap-4 transition-all duration-300 text-lg cursor-pointer`}
                  >
                    Подробнее
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
