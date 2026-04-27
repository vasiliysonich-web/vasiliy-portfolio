"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  MessageCircle,
  ExternalLink,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const cases = [
  {
    id: 1,
    title: "Кейс: Эксперт по фитнесу",
    category: "Reels + AI",
    description:
      "Создал серию вирусных Reels для тренера по фитнесу с использованием AI-сценариев. Запустили 30 роликов за месяц.",
    fullDescription:
      "Клиент обратился с задачей увеличить охваты и привлечь новых клиентов через короткие видео в соцсетях. Мы разработали комплексную стратегию с использованием нейросетей для генерации сценариев и идей контента. Было создано 30 уникальных роликов с различными форматами: тренировки, советы по питанию, мотивационные видео. Каждый ролик оптимизирован под алгоритмы площадок с учетом времени публикации и хэштегов.",
    results: [
      { value: "4.2M", label: "Охваты", icon: Users },
      { value: "+340%", label: "Рост подписчиков", icon: TrendingUp },
      { value: "x5", label: "Новых клиентов", icon: MessageCircle },
    ],
    tags: ["Нейросети", "Reels", "SMM"],
    gradient: "from-neon-purple to-neon-pink",
    coverImage: "/images/cases/case-1-cover.jpg",
    resultImage: "/images/cases/case-1-result.jpg",
    statsImage: "/images/cases/case-1-stats.jpg",
    client: "Фитнес-тренер Анна К.",
    duration: "2 месяца",
    budget: "150 000 ₽",
    link: "",
  },
  {
    id: 2,
    title: "Кейс: Учебная платформа",
    category: "Контент + воронка",
    description:
      "Пересобрал контент и прогревающую воронку для набора на обучение: структура, смыслы, триггеры, сценарии и тексты.",
    fullDescription:
      "Задача — увеличить конверсию в заявку и покупку на наборе курса. Провёл аудит воронки и контента, затем выстроил структуру прогрева: точки входа, сегментация аудитории, смыслы и офферы, сценарии сторис/коротких видео и серия постов. Подготовил тексты для лендинга и писем, а также шаблоны сообщений для обработки возражений. В результате воронка стала предсказуемее, а конверсия выросла за счёт более чёткой упаковки и последовательности касаний.",
    results: [
      { value: "65%", label: "Рост продаж", icon: TrendingUp },
      { value: "2.1M", label: "Охваты", icon: Users },
      { value: "28%", label: "Конверсия", icon: MessageCircle },
    ],
    tags: ["Копирайтинг", "Воронка", "Упаковка"],
    gradient: "from-neon-pink to-neon-cyan",
    coverImage: "/images/cases/case-2-cover.jpg",
    resultImage: "/images/cases/case-2-result.jpg",
    statsImage: "/images/cases/case-2-stats.jpg",
    client: "Учебная платформа (NDA)",
    duration: "3 месяца",
    budget: "200 000 ₽",
    link: "",
  },
  {
    id: 3,
    title: "Кейс: Бьюти-бренд",
    category: "Бьюти-маркетинг",
    description:
      "Вывел косметический бренд на маркетплейсы с помощью AI-контента. Рост продаж в 4 раза за первый квартал.",
    fullDescription:
      "Российский бренд косметики Skinova обратился с задачей: за 3 месяца увеличить присутствие на маркетплейсах и выйти в топ-100 категории ухода за кожей. Провели аудит визуального контента и выявили критические ошибки: размытые фото, отсутствие единого стиля, неэффективные инструкции к товарам. Внедрили AI-систему для генерации: описаний товаров с учётом SEO, сценариев для видеообзоров, баннеров для карточек товаров. Создали 200+ описаний продуктов и 50+ видеокреативов для рекламы. Настроили автоматизированную воронку: от привлечения внимания в рекламе до конверсии в покупку. Интегрировали чат-бота для обработки вопросов покупателей. Запустили UGC-кампанию с бьюти-блогерами. Через 90 дней бренд вошёл в топ-50 маркетплейса.",
    results: [
      { value: "x4", label: "Рост продаж", icon: TrendingUp },
      { value: "340%", label: "Охваты", icon: Users },
      { value: "50+", label: "Видеокреативов", icon: MessageCircle },
    ],
    tags: ["Маркетплейсы", "AI-контент", "Бьюти"],
    gradient: "from-neon-cyan to-neon-purple",
    coverImage: "/images/cases/case-3-cover.jpg",
    resultImage: "/images/cases/case-3-result.jpg",
    statsImage: "/images/cases/case-3-stats.jpg",
    client: "SKINOVA",
    duration: "3 месяца",
    budget: "180 000 ₽",
    link: "",
  },
  {
    id: 4,
    title: "Кейс: Бизнес-блогер",
    category: "Личный бренд",
    description:
      "Создал контент-план и сценарии для Reels на месяц вперёд с помощью нейросетей. Стабильный рост аудитории.",
    fullDescription:
      "Бизнес-блогер хотел систематизировать свой контент и увеличить вовлеченность аудитории. Мы разработали детальный контент-план на месяц с использованием AI для генерации идей и сценариев. Создано 50+ сценариев для Reels, Stories и постов. Внедрили систему аналитики для отслеживания эффективности контента.",
    results: [
      { value: "x6", label: "Рост охватов", icon: Users },
      { value: "50+", label: "Роликов/мес", icon: TrendingUp },
      { value: "45K", label: "Новых подписчиков", icon: MessageCircle },
    ],
    tags: ["Reels", "Нейросети", "Бренд"],
    gradient: "from-neon-purple to-neon-cyan",
    coverImage: "/images/cases/case-4-cover.jpg",
    resultImage: "/images/cases/case-4-result.jpg",
    statsImage: "/images/cases/case-4-stats.jpg",
    client: "Бизнес-блогер Михаил Р.",
    duration: "2 месяца",
    budget: "120 000 ₽",
    link: "",
  },
  {
    id: 5,
    title: "Кейс: Ресторан",
    category: "Локальный маркетинг",
    description:
      "Написал серию постов и сценарии для Shorts для ресторана. Привлёк новых клиентов через виральный контент.",
    fullDescription:
      "Семейный ресторан в центре города хотел увеличить поток посетителей. Мы разработали локальную кампанию через короткие видео: сценарии, рубрики и контент‑план. Создано 40+ роликов с рецептами, атмосферой ресторана и спецпредложениями. Подключили геотаргетинг и локальные хэштеги.",
    results: [
      { value: "500+", label: "Новых гостей", icon: Users },
      { value: "800K", label: "Охваты", icon: TrendingUp },
      { value: "+85%", label: "Бронирования", icon: MessageCircle },
    ],
    tags: ["Локалка", "Reels", "Продажи"],
    gradient: "from-neon-pink to-neon-purple",
    coverImage: "/images/cases/case-5-cover.jpg",
    resultImage: "/images/cases/case-5-result.jpg",
    statsImage: "/images/cases/case-5-stats.png",
    client: 'Ресторан "Семейные Традиции"',
    duration: "1.5 месяца",
    budget: "80 000 ₽",
    link: "",
  },
  {
    id: 6,
    title: "Кейс: Digital-агентство",
    category: "Автоворонка",
    description:
      "Построил AI-автоворонку для генерации лидов. Интегрировал чат-бота для квалификации заявок.",
    fullDescription:
      "Digital-агентство нуждалось в автоматизации процесса привлечения клиентов. Мы разработали комплексную автоворонку с использованием AI-инструментов: чат-бот для первичной квалификации, email-рассылки, CRM-интеграция. Создали landing pages и настроили рекламу для привлечения трафика.",
    results: [
      { value: "x4", label: "Лидогенерация", icon: TrendingUp },
      { value: "35%", label: "Конверсия в заявку", icon: MessageCircle },
      { value: "200+", label: "Заявок/мес", icon: Users },
    ],
    tags: ["Автоворонка", "Чат-бот", "AI"],
    gradient: "from-neon-cyan to-neon-pink",
    coverImage: "/images/cases/case-6-cover.jpg",
    resultImage: "/images/cases/case-6-result.jpg",
    statsImage: "/images/cases/case-6-stats.jpg",
    client: 'Digital-агентство "WebFlow"',
    duration: "3 месяца",
    budget: "300 000 ₽",
    link: "",
  },
];

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<(typeof cases)[0] | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCaseModal = (caseItem: (typeof cases)[0]) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const closeCaseModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  return (
    <section id="cases" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[200px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Кейсы
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Результаты <span className="gradient-text">клиентов</span>
          </h2>
          <p className="text-white/60 text-lg">
            Реальные цифры и примеры работ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openCaseModal(caseItem)}
              >
                <div className="glass-card-hover p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="primary">{caseItem.category}</Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-neon-purple transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 flex-grow">
                    {caseItem.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {caseItem.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <result.icon className="w-5 h-5 mx-auto mb-1 text-neon-cyan" />
                        <div className="text-lg font-bold gradient-text">{result.value}</div>
                        <div className="text-xs text-white/50">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 z-50">
            <div className="flex justify-between items-start mb-6">
              <div>
                <Dialog.Title className="text-2xl font-bold mb-2">{selectedCase?.title}</Dialog.Title>
                <Badge variant="primary" className="mb-4">{selectedCase?.category}</Badge>
              </div>
              <Dialog.Close asChild>
                <Button variant="ghost" size="sm" onClick={closeCaseModal}>
                  <X className="w-5 h-5" />
                </Button>
              </Dialog.Close>
            </div>

            {selectedCase && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-neon-purple">О проекте</h3>
                  <p className="text-white/80 leading-relaxed whitespace-pre-line">{selectedCase.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-neon-cyan">Результаты</h3>
                  <div className="grid grid-cols-3 gap-6">
                    {selectedCase.results.map((result, idx) => (
                      <div key={idx} className="text-center p-4 glass-card">
                        <result.icon className="w-8 h-8 mx-auto mb-2 text-neon-cyan" />
                        <div className="text-2xl font-bold gradient-text mb-1">{result.value}</div>
                        <div className="text-sm text-white/60">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {(
                    [
                      { img: selectedCase.coverImage, title: "Обложка проекта", Icon: ExternalLink },
                      { img: selectedCase.resultImage, title: "Результат работы", Icon: TrendingUp },
                      { img: selectedCase.statsImage, title: "Статистика", Icon: Users },
                    ]
                  ).map((item, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-lg font-medium text-white/80">{item.title}</h4>
                      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const f = e.currentTarget.nextElementSibling as HTMLElement;
                            if (f) f.style.display = "flex";
                          }}
                        />
                        <div className="w-full h-full flex items-center justify-center text-white/50 hidden">
                          <div className="text-center">
                            <item.Icon className="w-12 h-12 mx-auto mb-2" />
                            <p>{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6 p-6 glass-card">
                  <div>
                    <h4 className="font-semibold text-neon-purple mb-2">Клиент</h4>
                    <p className="text-white/80">{selectedCase.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neon-cyan mb-2">Сроки</h4>
                    <p className="text-white/80">{selectedCase.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neon-pink mb-2">Бюджет</h4>
                    <p className="text-white/80">{selectedCase.budget}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white/80 mb-3">Технологии и инструменты</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30">{tag}</span>
                    ))}
                  </div>
                </div>

                
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
