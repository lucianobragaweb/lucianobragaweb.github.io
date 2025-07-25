"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import i18n from "../lib/i18n";
import { useTranslation } from "react-i18next";
import Link from 'next/link'

const tabs = [
  { key: "hello" },
  { key: "about" },
  // { key: "projects" },
  { key: "contact" },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export default function Navbar() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language || "pt");

  // Mapeie as abas para as rotas reais
  const tabRoutes = {
    hello: "/",
    about: "/about",
    // projects: "/projects",
    contact: "/contact",
  };

  // Derive a aba ativa da rota atual
  const activeTab = Object.keys(tabRoutes).find(
    (key) => tabRoutes[key as keyof typeof tabRoutes] === pathname
  ) || "hello";

  const handleChangeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLang(code);
  };

  const handleTabClick = (key: string) => {
    router.push(tabRoutes[key as keyof typeof tabRoutes]);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex items-center justify-between w-full font-mono text-[15px]">
        <Link href="/">
          <span className="text-[#b3b9c5] font-normal tracking-wide select-none">@lucianobragaweb</span>
        </Link>
        <div className="flex-1 flex justify-center gap-2">
          {tabs.map((tab) => (
            <span
              key={tab.key}
              className={`px-4 py-1 cursor-pointer relative transition text-[#b3b9c5] ${activeTab === tab.key ? "text-white font-semibold" : "hover:text-white"}`}
              style={{ fontVariant: "tabular-nums" }}
              onClick={() => handleTabClick(tab.key)}
            >
              {t(`navbar.${tab.key}`)}
              {activeTab === tab.key && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-8 bg-[#ffb454] rounded-t-full" />
              )}
            </span>
          ))}
        </div>
        {/* Botão de idioma */}
        <div className="flex items-center gap-2 ml-4">
          {languages.map((l, idx) => (
            <button
              key={l.code}
              className={`px-2 py-1 font-mono cursor-pointer text-xs rounded transition-colors ${lang === l.code ? "text-[#4fc3f7] underline-offset-4" : "text-[#b3b9c5] hover:text-white"}`}
              onClick={() => handleChangeLanguage(l.code)}
              aria-label={`Trocar para ${l.label}`}
            >
              {t(`navbar.lang_${l.code}`)}
              {idx === 0 && <span className="mx-1 text-[#b3b9c5]">|</span>}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex sm:hidden items-center justify-between w-full font-mono text-[15px]">
        <span className="text-[#b3b9c5] font-normal tracking-wide select-none">lucianobragaweb</span>
        <div className="flex items-center gap-2">
          {/* Botão de idioma mobile */}
          {languages.map((l, idx) => (
            <button
              key={l.code}
              className={`px-2 py-1 font-mono cursor-pointer text-xs rounded transition-colors ${lang === l.code ? "text-[#4fc3f7] underline-offset-4" : "text-[#b3b9c5] hover:text-white"}`}
              onClick={() => handleChangeLanguage(l.code)}
              aria-label={`Trocar para ${l.label}`}
            >
              {t(`navbar.lang_${l.code}`)}
              {idx === 0 && <span className="mx-1 text-[#b3b9c5]">|</span>}
            </button>
          ))}
          <button
            className="p-2 rounded hover:bg-[#23263a] transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={22} className="text-[#b3b9c5]" />
          </button>
        </div>
      </nav>
      {/* Drawer/Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#181B23]/98 flex flex-col border border-[#23263a] rounded-[14px] m-2 animate-in fade-in">
          <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-[#23263a]">
            <span className="text-[#b3b9c5] font-normal tracking-wide select-none">lucianobragaweb</span>
            <button
              className="p-2 rounded hover:bg-[#23263a] transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={22} className="text-[#b3b9c5]" />
            </button>
          </div>
          <div className="px-4 py-4">
            <div className="text-[#6c7680] font-mono text-[15px] mb-2">{t("navbar.navigate")}</div>
            <div className="flex flex-col divide-y divide-[#23263a]">
              {tabs.map((tab) => (
                <span
                  key={tab.key}
                  className={`py-3 px-2 cursor-pointer font-mono text-[17px] ${activeTab === tab.key ? "text-white font-semibold" : "text-[#b3b9c5] hover:text-white"}`}
                  style={{ fontVariant: "tabular-nums" }}
                  onClick={() => { handleTabClick(tab.key); setOpen(false); }}
                >
                  {t(`navbar.${tab.key}`)}
                </span>
              ))}
            </div>
            {/* Botão de idioma dentro do drawer */}
            <div className="flex items-center gap-2 mt-6">
              {languages.map((l, idx) => (
                <button
                  key={l.code}
                  className={`px-2 py-1 font-mono text-xs rounded transition-colors ${lang === l.code ? "text-[#4fc3f7] underline underline-offset-4" : "text-[#b3b9c5] hover:text-white"}`}
                  onClick={() => handleChangeLanguage(l.code)}
                  aria-label={`Trocar para ${l.label}`}
                >
                  {t(`navbar.lang_${l.code}`)}
                  {idx === 0 && <span className="mx-1 text-[#b3b9c5]">|</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
