"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    name: "Аня",
    role: "Одногруппница",
    text: "По учёбе всё сделал аккуратно и вовремя. Если нужно — объяснит, а не просто «сдаст и забудет».",
    color: "from-neon-purple to-neon-pink",
  },
  {
    name: "Саша",
    role: "Друг",
    text: "Помог разобраться с сайтом: где что лежит, что сломано и как поправить. Объясняет простыми словами.",
    color: "from-neon-pink to-neon-cyan",
  },
  {
    name: "Ира",
    role: "Подруга",
    text: "Тексты — без воды, по делу. Сразу видно структуру: что главное, что второстепенное, и где сделать акцент.",
    color: "from-neon-cyan to-neon-purple",
  },
  {
    name: "Кирилл",
    role: "Друг",
    text: "Если берётся за задачу — доводит до конца. По учебным работам у меня всё закрыто на 100%.",
    color: "from-neon-purple to-neon-cyan",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-neon-pink/15 rounded-full blur-[150px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge
            variant="cyan"
            className="mb-4 bg-gradient-to-r from-neon-cyan/40 to-neon-purple/40 border-neon-cyan/50"
          >
            Отзывы друзей
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Что говорят <span className="gradient-text">о моих работах</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Короткий фидбэк без громких слов
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              {/* Gradient Border */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${review.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />

              <div className="relative glass-card-premium p-8 h-full flex flex-col overflow-hidden">
                {/* Background glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-neon-purple/10 opacity-50 group-hover:opacity-30 transition-opacity duration-300`} />

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-neon-purple/30 mb-4 group-hover:text-neon-purple/40 transition-colors" />

                  {/* Review Text */}
                  <p className="text-white/85 mb-8 leading-relaxed text-lg flex-grow font-medium">
                    "{review.text}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent mb-6" />

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${review.color} p-0.5 flex items-center justify-center`}
                      >
                        <div className="w-full h-full rounded-lg bg-background-dark flex items-center justify-center">
                          <User className="w-6 h-6 text-white/70" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          {review.name}
                        </div>
                        <div className="text-sm text-white/60">
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
