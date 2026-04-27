"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="glass-card max-w-5xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          🍪 Этот сайт использует cookies для улучшения работы. Подробнее в{" "}
          <Link href="/privacy" className="text-[#A855F7] hover:underline">
            Политике конфиденциальности
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 transition text-sm"
          >
            Отклонить
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 rounded-lg text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, #A855F7 0%, #FF2E9A 100%)",
            }}
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
