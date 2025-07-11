"use client";
import React from "react";
import { Mail, Phone, ChevronDown, ChevronRight, User2, Book, Star, Info, GraduationCap, AtSign, Folder, FolderOpen, FileText } from "lucide-react";

const nav = [
  {
    label: "personal-info",
    icon: <Folder size={16} className="inline mr-1 text-[#b3b9c5]" />,
    openIcon: <FolderOpen size={16} className="inline mr-1 text-[#b3b9c5]" />,
    children: [
      { label: "bio", icon: <FileText size={14} className="inline mr-1 text-[#f87171]" />, color: "#f87171" },
      { label: "interests", icon: <FileText size={14} className="inline mr-1 text-[#34d399]" />, color: "#34d399" },
      {
        label: "education",
        icon: <Folder size={14} className="inline mr-1 text-[#60a5fa]" />,
        openIcon: <FolderOpen size={14} className="inline mr-1 text-[#60a5fa]" />,
        color: "#60a5fa",
        children: [
          { label: "high-school", icon: <FileText size={13} className="inline mr-1 text-[rgb(129,140,248)]" />, color: "#818cf8" },
          { label: "university", icon: <FileText size={13} className="inline mr-1 text-[#a78bfa]" />, color: "#a78bfa" },
        ],
      },
    ],
  },
  {
    label: "contacts",
    icon: <Folder size={16} className="inline mr-1 text-[#b3b9c5]" />,
    openIcon: <FolderOpen size={16} className="inline mr-1 text-[#b3b9c5]" />,
    children: [
      { label: "user@gmail.com", icon: <Mail size={14} className="inline mr-1 text-[#b3b9c5]" />, color: "#b3b9c5" },
      { label: "+3598246359", icon: <Phone size={14} className="inline mr-1 text-[#b3b9c5]" />, color: "#b3b9c5" },
    ],
  },
];

function Tree({ items, level = 0 }: { items: any[]; level?: number }) {
  const [open, setOpen] = React.useState(() => items.map(() => level < 1));
  return (
    <ul className={`select-none`}>{items.map((item, idx) => {
      const isFolder = !!item.children;
      return (
        <li key={item.label} className="mb-1">
          <div
            className={`flex items-center gap-1 cursor-pointer group text-[#b3b9c5] hover:text-white text-sm font-mono ${level === 0 ? "font-semibold mt-2" : ""}`}
            style={{ paddingLeft: `${level * 18}px` }}
            onClick={() => isFolder && setOpen(o => o.map((v, i) => i === idx ? !v : v))}
          >
            {isFolder && (open[idx] ? <ChevronDown size={14} /> : <ChevronRight size={14} />)}
            {isFolder ? (open[idx] ? item.openIcon : item.icon) : item.icon}
            <span style={item.color ? { color: item.color } : {}}>{item.label}</span>
          </div>
          {isFolder && open[idx] && <Tree items={item.children} level={level + 1} />}
        </li>
      );
    })}</ul>
  );
}

const dock = [
  { icon: <User2 size={18} />, label: "profile" },
  { icon: <GraduationCap size={18} />, label: "education" },
  { icon: <AtSign size={18} />, label: "contacts" },
];

export default function Sidebar() {
  return (
    <div className="flex flex-row h-full">
      {/* Dock vertical */}
      <div className="flex flex-col items-center gap-2 py-4 px-2 border-r border-[#23263a] bg-[#20222e]">
        {dock.map((d, i) => (
          <button key={i} className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#23263a] transition-colors text-[#6c7680] mb-1">
            {d.icon}
          </button>
        ))}
      </div>
      {/* Navegação em árvore */}
      <nav className="flex flex-col h-full py-6 px-4 gap-6 min-w-[180px]">
        <Tree items={nav} />
      </nav>
    </div>
  );
}
