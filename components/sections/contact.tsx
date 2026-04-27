"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[150px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge
            variant="primary"
            className="mb-4 bg-gradient-to-r from-neon-purple/40 to-neon-pink/40 border-neon-purple/50 hover:border-neon-purple"
          >
            Контакты
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Давайте <span className="gradient-text">создавать</span> <br />{" "}
            что-то{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
              великое
            </span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Готов обсудить вашу идею, помочь с контент-стратегией или создать
            продающие материалы. Свяжитесь со мной, и я ответу в течение 24
            часов.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card-premium p-8">
              <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">
                Свяжитесь со мной
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 8, y: -4 }}
                  className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple/30 to-neon-pink/30 flex items-center justify-center shadow-glow-purple group-hover:shadow-glow-purple transition-all"
                  >
                    <Mail className="w-6 h-6 text-neon-purple" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs text-white/60 uppercase font-bold tracking-wider mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:vasiliysonich@gmail.com"
                      className="text-lg font-semibold text-white group-hover:text-neon-purple transition-colors"
                    >
                      vasiliysonich@gmail.com
                    </a>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-neon-purple transition-colors" />
                </motion.div>

                <motion.div
                  whileHover={{ x: 8, y: -4 }}
                  className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-pink/30 to-neon-cyan/30 flex items-center justify-center shadow-glow-pink group-hover:shadow-glow-pink transition-all"
                  >
                    <MessageCircle className="w-6 h-6 text-neon-pink" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs text-white/60 uppercase font-bold tracking-wider mb-1">
                      Telegram
                    </div>
                    <a
                      href="https://t.me/s_vs_iv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-white group-hover:text-neon-pink transition-colors"
                    >
                      @s_vs_iv
                    </a>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-neon-pink transition-colors" />
                </motion.div>

                <motion.div
                  whileHover={{ x: 8, y: -4 }}
                  className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-cyan transition-all"
                  >
                    <MapPin className="w-6 h-6 text-neon-cyan" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs text-white/60 uppercase font-bold tracking-wider mb-1">
                      Локация
                    </div>
                    <span className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">
                      Россия, удалённо 🌍
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 8, y: -4 }}
                  className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple/30 to-neon-pink/30 flex items-center justify-center shadow-glow-purple group-hover:shadow-glow-purple transition-all"
                  >
                    <Clock className="w-6 h-6 text-neon-purple" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs text-white/60 uppercase font-bold tracking-wider mb-1">
                      Время ответа
                    </div>
                    <span className="text-lg font-semibold text-white group-hover:text-neon-purple transition-colors">
                      В течение 24 часов
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card-premium p-8">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                Соцсети
              </h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.15, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://t.me/s_vs_iv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-pink/30 to-neon-cyan/30 border border-neon-pink/50 flex items-center justify-center hover:shadow-glow-pink transition-all group"
                >
                  <MessageCircle className="w-6 h-6 text-neon-pink group-hover:text-neon-cyan transition-colors" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card-premium p-10">
              <h3 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-pink">
                Отправьте заявку
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-cyan/40 to-neon-purple/40 flex items-center justify-center shadow-glow-cyan"
                  >
                    <CheckCircle className="w-10 h-10 text-neon-cyan" />
                  </motion.div>
                  <h4 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">
                    Заявка отправлена! 🎉
                  </h4>
                  <p className="text-white/70 text-lg">
                    Я свяжусь с вами в течение 24 часов
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="text-sm font-bold uppercase tracking-wider"
                      >
                        Ваше имя
                      </Label>
                      <Input
                        id="name"
                        placeholder="Как к вам обращаться?"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white/5 border-white/20 focus:border-neon-purple/60 focus:bg-white/10 rounded-xl transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-sm font-bold uppercase tracking-wider"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-white/5 border-white/20 focus:border-neon-purple/60 focus:bg-white/10 rounded-xl transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-sm font-bold uppercase tracking-wider"
                    >
                      Ваша задача
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите вашу задачу, проект или вопрос. Будьте развёрнуты - это помогает мне быстрее ответить..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-white/5 border-white/20 focus:border-neon-purple/60 focus:bg-white/10 rounded-xl transition-all min-h-[120px]"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full glass-button-glow py-4 px-6 rounded-2xl font-bold text-white text-lg flex items-center justify-center gap-3 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Отправить заявку
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
