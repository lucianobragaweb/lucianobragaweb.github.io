"use client";

import React from "react";
import { Linkedin, X, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HomeFooter() {
  const { t } = useTranslation("common");
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between w-full font-mono text-[15px] gap-2 sm:gap-0">
      <div className="flex items-center gap-2 text-[#b3b9c5]">
        <span>{t("footer.find_me")}</span>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#23263a] hover:bg-[#2d3146] transition-colors">
          <X size={18} className="text-[#b3b9c5]" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#23263a] hover:bg-[#2d3146] transition-colors">
          <Linkedin size={18} className="text-[#b3b9c5]" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#23263a] hover:bg-[#2d3146] transition-colors">
          <Github size={18} className="text-[#b3b9c5]" />
        </button>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <span className="text-[#b3b9c5]">@</span>
        <input
          type="text"
          placeholder={t("footer.username_placeholder")}
          className="bg-transparent border-none outline-none text-[#b3b9c5] placeholder-[#6c7680] font-mono text-[15px] w-28 text-right"
          style={{ letterSpacing: "0.05em" }}
        />
      </div>
    </footer>
  );
}
