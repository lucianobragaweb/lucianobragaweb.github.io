"use client";
import React, { useState } from "react";
import {
  Atom,
  FileCode2,
  Palette,
  BadgeCheck,
  CircleDot,
  Codesandbox,
  AppWindow,
  Github,
  Linkedin,
} from "lucide-react";

const filters = [
  { label: "React", icon: <Atom className="text-[#61dafb] w-5 h-5" /> },
  { label: "HTML", icon: <FileCode2 className="text-[#e44d26] w-5 h-5" /> },
  { label: "CSS", icon: <Palette className="text-[#1572b6] w-5 h-5" /> },
  { label: "Vue", icon: <BadgeCheck className="text-[#42b883] w-5 h-5" /> },
  { label: "Angular", icon: <CircleDot className="text-[#dd0031] w-5 h-5" /> },
  { label: "Gatsby", icon: <Codesandbox className="text-[#663399] w-5 h-5" /> },
  { label: "Flutter", icon: <AppWindow className="text-[#02569b] w-5 h-5" /> },
];

const projects = [
  {
    title: "Project 1",
    tag: "_ui-animations",
    image: "/mock1.jpg",
    desc: "Duis aute irure dolor in velit esse cillum dolore.",
    icon: <Atom className="text-[#61dafb] w-6 h-6" />,
    techs: ["React", "CSS"],
  },
  {
    title: "Project 2",
    tag: "_tetris-game",
    image: "/mock2.jpg",
    desc: "Duis aute irure dolor in velit esse cillum dolore.",
    icon: <Atom className="text-[#61dafb] w-6 h-6" />,
    techs: ["React", "CSS"],
  },
  {
    title: "Project 3",
    tag: "_glassy-ui",
    image: "/mock3.jpg",
    desc: "Duis aute irure dolor in velit esse cillum dolore.",
    icon: <Palette className="text-[#1572b6] w-6 h-6" />,
    techs: ["CSS"],
  },
  {
    title: "Project 4",
    tag: "_nimbus",
    image: "/mock4.jpg",
    desc: "Duis aute irure dolor in velit esse cillum dolore.",
    icon: <BadgeCheck className="text-[#42b883] w-6 h-6" />,
    techs: ["Vue"],
  },
  {
    title: "Project 5",
    tag: "_emberize-ui",
    image: "/mock5.jpg",
    desc: "Duis aute irure dolor in velit esse cillum dolore.",
    icon: <BadgeCheck className="text-[#42b883] w-6 h-6" />,
    techs: ["Vue", "CSS"],
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState(["React", "CSS", "Vue"]);

  const handleToggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  const filteredProjects = projects.filter((p) =>
    selected.length === 0 ? true : p.techs.some((tech) => selected.includes(tech))
  );

  return (
    <div className="w-full h-full min-h-[80vh] flex flex-1 font-mono bg-[#101426] text-[#b3b9c5]">
      {/* Sidebar */}
      <aside className="w-[240px] min-w-[180px] max-w-[300px] border-r border-[#23263a] bg-[#181b2b] flex flex-col py-6 px-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold text-white">projects</span>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          {filters.map((f, i) => (
            <label key={f.label} className="flex items-center gap-2 cursor-pointer text-[#b3b9c5] hover:text-white">
              <input
                type="checkbox"
                className="accent-[#ffb454] w-4 h-4"
                checked={selected.includes(f.label)}
                onChange={() => handleToggle(f.label)}
              />
              <span className="w-5 h-5 flex items-center justify-center">{f.icon}</span>
              <span>{f.label}</span>
            </label>
          ))}
        </div>
      </aside>
      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col px-8 py-6 overflow-x-auto">
        {/* Tabs de projetos (mock) */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs text-[#b3b9c5] bg-[#23263a] px-3 py-1 rounded">
            {selected.length > 0 ? selected.join("; ") : "All"}
          </span>
        </div>
        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, i) => (
            <div key={i} className="bg-[#181b2b] rounded-xl overflow-hidden border border-[#23263a] flex flex-col shadow-md">
              <div className="relative h-44 w-full bg-[#23263a] flex items-center justify-center">
                {/* Imagem mock */}
                <div className="w-full h-full bg-gradient-to-br from-[#23263a] to-[#23263a]/60 flex items-center justify-center">
                  <span className="text-2xl text-[#b3b9c5]">img</span>
                </div>
                <div className="absolute top-3 right-3">{p.icon}</div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[#7c3aed] font-bold text-sm mb-1">{p.title} <span className="text-[#b3b9c5] font-normal">// {p.tag}</span></span>
                <p className="text-[#b3b9c5] text-base mb-4 mt-2 flex-1">{p.desc}</p>
                <button className="bg-[#23263a] text-[#b3b9c5] border border-[#23263a] rounded px-4 py-2 text-xs font-semibold hover:bg-[#23263a]/80 transition self-start">view-project</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
