import React from "react";
import { Project } from "../types/projects";
import { technologies, clients } from "../data/projectsData";
import { technologyIcons } from "./TechnologyIcons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, tag, description, year, imageId, clientId, status, technologies: techIds } = project;

    // Buscar cliente
  const client = clients.find(c => c.id === clientId);

  // Obter todas as tecnologias
  const allTechIds = [
    ...techIds.frontend,
    ...techIds.backend,
    ...techIds.database,
    ...techIds.tools,
    ...techIds.services
  ];

  const projectTechnologies = technologies.filter(tech => allTechIds.includes(tech.id));
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
        {/* Status badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {status.map((statusItem, index) => (
            <span
              key={index}
              className="text-xs bg-[#7c3aed]/20 text-[#7c3aed] px-2 py-1 rounded-md border border-[#7c3aed]/30"
            >
              {statusItem}
            </span>
          ))}
        </div>
        {/* Cliente */}
        <div className="absolute top-3 right-3">
          <span className="text-xs bg-[#23263a]/80 text-[#b3b9c5] px-2 py-1 rounded-md">
            {client?.name}
          </span>
        </div>
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
        <p className="text-[#b3b9c5] text-base mb-3 mt-2 flex-1">{description}</p>
        {/* Stack de tecnologias */}
        <div className="flex flex-wrap gap-1 mb-4">
          {projectTechnologies.map((tech, index) => (
            <span
              key={tech.id}
              className="text-xs bg-[#23263a] text-[#b3b9c5] px-2 py-1 rounded-md border border-[#23263a]/50 flex items-center gap-1"
              style={{ color: tech.color }}
            >
                            {technologyIcons[tech.icon] && technologyIcons[tech.icon]}
              {tech.name}
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
