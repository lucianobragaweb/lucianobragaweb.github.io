"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import i18n from "@/lib/i18n";

export default function TranslatedHome() {
  const { t } = useTranslation("common");
  const [lang, setLang] = useState(i18n.language || "pt");

  const handleChangeLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">{t("greeting")}</h1>
        <p className="text-lg">{t("welcome")}</p>
        <button
          className="px-4 py-2 rounded bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black transition-colors"
          onClick={handleChangeLanguage}
        >
          Trocar idioma (atual: {lang})
        </button>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
