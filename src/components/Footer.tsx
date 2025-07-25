"use client";

import React from "react";
import { Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between w-full font-mono text-[15px] gap-2 sm:gap-0">
      <div className="flex items-center gap-2 text-[#b3b9c5]">
        <span>{t("footer.find_me")}</span>
        <Link
          href="https://www.linkedin.com/in/lucianobragaweb/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded bg-[#23263a] hover:bg-[#2d3146] transition-colors"
        >
          <Linkedin size={18} className="text-[#b3b9c5]" />
        </Link>
        <Link
          href="https://github.com/lucianobragaweb"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded bg-[#23263a] hover:bg-[#2d3146] transition-colors"
        >
          <Github size={18} className="text-[#b3b9c5]" />
        </Link>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <Link
          href="https://github.com/lucianobragaweb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b3b9c5] hover:text-blue-400 transition-colors"
        >
          @lucianobragaweb
        </Link>
      </div>
    </footer>
  );
}
