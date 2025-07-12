import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiHtml5,
  SiCss,
  SiVuedotjs,
  SiFlutter,
  SiTypescript,
  SiTailwindcss,
  SiStripe,
  SiMongodb,
  SiFirebase,
  SiFramer,
  SiJavascript,
  SiChartdotjs,
  SiMysql,
  SiDart,
  SiGetx,
} from "@icons-pack/react-simple-icons";

interface ProjectCardProps {
  title: string;
  tag: string;
  desc: string;
  icon: React.ReactNode;
  techs: string[];
  year: number;
  imageId?: number;
}

// Mapeamento de tecnologias para ícones
const techIcons: { [key: string]: React.ReactNode } = {
  "React": <SiReact className="w-3 h-3 text-[#61dafb]" />,
  "Next.js": <SiNextdotjs className="w-3 h-3 text-[#61dafb]" />,
  "Laravel": <SiLaravel className="w-3 h-3 text-[#ff2d20]" />,
  "HTML5": <SiHtml5 className="w-3 h-3 text-[#e44d26]" />,
  "CSS3": <SiCss className="w-3 h-3 text-[#1572b6]" />,
  "Vue.js": <SiVuedotjs className="w-3 h-3 text-[#42b883]" />,
  "Flutter": <SiFlutter className="w-3 h-3 text-[#02569b]" />,
  "TypeScript": <SiTypescript className="w-3 h-3 text-[#3178c6]" />,
  "Tailwind CSS": <SiTailwindcss className="w-3 h-3 text-[#06b6d4]" />,
  "Stripe": <SiStripe className="w-3 h-3 text-[#008cdd]" />,
  "MongoDB": <SiMongodb className="w-3 h-3 text-[#47a248]" />,
  "Firebase": <SiFirebase className="w-3 h-3 text-[#ffca28]" />,
  "Framer Motion": <SiFramer className="w-3 h-3 text-[#0055ff]" />,
  "JavaScript": <SiJavascript className="w-3 h-3 text-[#f7df1e]" />,
  "GSAP": <div className="w-3 h-3 bg-[#88ce02] rounded-sm flex items-center justify-center text-[#000] text-xs font-bold">G</div>,
  "Chart.js": <SiChartdotjs className="w-3 h-3 text-[#ff6384]" />,
  "MySQL": <SiMysql className="w-3 h-3 text-[#4479a1]" />,
  "Dart": <SiDart className="w-3 h-3 text-[#0175c2]" />,
  "GetX": <SiGetx className="w-3 h-3 text-[#ff6b6b]" />,
};

export default function ProjectCard({ title, tag, desc, icon, techs, year, imageId = 1 }: ProjectCardProps) {
  return (
    <div className="bg-[#181b2b] rounded-xl overflow-hidden border border-[#23263a] flex flex-col shadow-md">
      <div className="relative h-44 w-full bg-[#23263a] flex items-center justify-center overflow-hidden">
        {/* Imagem do Lorem Picsum */}
        <img
          src={`https://picsum.photos/400/176?random=${imageId}`}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-3 right-3">{icon}</div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[#7c3aed] font-bold text-sm">
            {title} <span className="text-[#b3b9c5] font-normal">{/* */} {tag}</span>
          </span>
          <span className="text-xs text-[#7c3aed] bg-[#7c3aed]/10 px-2 py-1 rounded-md border border-[#7c3aed]/20">
            {year}
          </span>
        </div>
        <p className="text-[#b3b9c5] text-base mb-3 mt-2 flex-1">{desc}</p>
        {/* Stack de tecnologias */}
        <div className="flex flex-wrap gap-1 mb-4">
          {techs.map((tech, index) => (
            <span
              key={tech}
              className="text-xs bg-[#23263a] text-[#b3b9c5] px-2 py-1 rounded-md border border-[#23263a]/50 flex items-center gap-1"
            >
              {techIcons[tech] && techIcons[tech]}
              {tech}
              {index < techs.length - 1 && (
                <span className="text-[#7c3aed] mx-1">·</span>
              )}
            </span>
          ))}
        </div>
        <button className="bg-[#23263a] text-[#b3b9c5] border border-[#23263a] rounded px-4 py-2 text-xs font-semibold hover:bg-[#23263a]/80 transition self-start">
          view-project
        </button>
      </div>
    </div>
  );
}
