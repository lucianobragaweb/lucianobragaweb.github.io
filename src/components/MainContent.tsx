"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function MainContent() {
  const { t } = useTranslation("common");
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 h-full w-full min-h-[400px] justify-center items-center">
      {/* Gradient Glow */}
      <div className="relative z-10 w-full flex flex-col items-start text-left mx-0">
        <p className="text-[#b3b9c5] text-base font-mono mb-2">{t("greeting")}</p>
        <h1 className="text-5xl sm:text-6xl font-mono font-bold text-white leading-tight mb-2">
          {t("name")}
        </h1>
        <div className="text-[#4fc3f7] text-xl font-mono font-semibold mb-8">{t("role")}</div>
        <div className="bg-[#181B23] rounded-lg p-6 font-mono text-[#b3b9c5] text-base leading-relaxed border border-[#23263a] w-full max-w-lg shadow-md text-left">
          <div className="text-[#6c7680]">{t("code.comment1")}</div>
          <div className="text-[#6c7680]">{t("code.comment2")}</div>
          <div>
            <span className="text-[#b3b9c5]">{t("code.const")} </span>
            <span className="text-[#4fc3f7]">{t("code.githubLink")}</span>
            <span className="text-[#b3b9c5]"> = </span>
            <span className="text-[#ffb454]">"{t("code.url")}"</span>
          </div>
        </div>
      </div>
    </section>
  );
}
