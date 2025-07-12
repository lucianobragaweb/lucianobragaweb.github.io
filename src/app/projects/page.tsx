"use client";
import React, { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiHtml5,
  SiCss,
  SiVuedotjs,
  SiFlutter,
} from "@icons-pack/react-simple-icons";
import ProjectCard from "../../components/ProjectCard";

const filters = [
  { label: "React", icon: <SiReact className="text-[#61dafb] w-5 h-5" /> },
  { label: "Next.js", icon: <SiNextdotjs className="text-[#61dafb] w-5 h-5" /> },
  { label: "Laravel", icon: <SiLaravel className="text-[#ff2d20] w-5 h-5" /> },
  { label: "HTML", icon: <SiHtml5 className="text-[#e44d26] w-5 h-5" /> },
  { label: "CSS", icon: <SiCss className="text-[#1572b6] w-5 h-5" /> },
  { label: "Vue", icon: <SiVuedotjs className="text-[#42b883] w-5 h-5" /> },
  { label: "Flutter", icon: <SiFlutter className="text-[#02569b] w-5 h-5" /> },
];

const projects = [
  {
    title: "E-commerce Platform",
    tag: "_ui-animations",
    image: "/mock1.jpg",
    desc: "Plataforma completa de e-commerce com animações fluidas e interface moderna.",
    icon: <SiReact className="text-[#61dafb] w-6 h-6" />,
    techs: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    year: 2024,
    imageId: 1,
  },
  {
    title: "Task Management App",
    tag: "_tetris-game",
    image: "/mock2.jpg",
    desc: "Aplicativo de gerenciamento de tarefas com drag & drop e notificações em tempo real.",
    icon: <SiReact className="text-[#61dafb] w-6 h-6" />,
    techs: ["React", "TypeScript", "Firebase", "Framer Motion"],
    year: 2023,
    imageId: 2,
  },
  {
    title: "Portfolio Website",
    tag: "_glassy-ui",
    image: "/mock3.jpg",
    desc: "Website pessoal com design glassmorphism e animações interativas.",
    icon: <SiCss className="text-[#1572b6] w-6 h-6" />,
    techs: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    year: 2023,
    imageId: 3,
  },
  {
    title: "Dashboard Analytics",
    tag: "_nimbus",
    image: "/mock4.jpg",
    desc: "Dashboard de analytics com gráficos interativos e filtros avançados.",
    icon: <SiVuedotjs className="text-[#42b883] w-6 h-6" />,
    techs: ["Vue.js", "Chart.js", "Laravel", "MySQL"],
    year: 2022,
    imageId: 4,
  },
  {
    title: "Mobile App",
    tag: "_emberize-ui",
    image: "/mock5.jpg",
    desc: "Aplicativo mobile multiplataforma com funcionalidades offline.",
    icon: <SiFlutter className="text-[#02569b] w-6 h-6" />,
    techs: ["Flutter", "Dart", "Firebase", "GetX"],
    year: 2024,
    imageId: 5,
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
          {filters.map((f) => (
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
            <ProjectCard
              key={i}
              title={p.title}
              tag={p.tag}
              desc={p.desc}
              icon={p.icon}
              techs={p.techs}
              year={p.year}
              imageId={p.imageId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
