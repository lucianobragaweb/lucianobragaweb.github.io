"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FolderOpen, Check, Code } from "lucide-react";
import ProjectCard from "../../components/ProjectCard";
import { projects, technologies } from "../../data/projectsData";
import { technologyIcons } from "../../components/TechnologyIcons";

// Interfaces para tipagem
interface TechnologyItem {
  label: string;
  icon: React.ReactNode;
  color: string;
  id: number;
  group?: string; // Adicionado para agrupar por group
}

interface CategoryItem {
  label: string;
  icon: React.ReactNode;
  openIcon: React.ReactNode;
  children: TechnologyItem[];
}

interface AreaItem {
  label: string;
  icon: React.ReactNode;
  openIcon: React.ReactNode;
  children: CategoryItem[];
}

// Função para agrupar tecnologias por área e categoria, com subnível dbType para Database
const groupTechnologiesByAreaAndCategory = (): AreaItem[] => {
  // Definição das áreas e ícones
  const areas = {
    frontend: { label: "Frontend", icon: <Folder size={16} className="inline mr-1 text-[#60a5fa]" />, openIcon: <FolderOpen size={16} className="inline mr-1 text-[#60a5fa]" /> },
    backend: { label: "Backend", icon: <Folder size={16} className="inline mr-1 text-[#f87171]" />, openIcon: <FolderOpen size={16} className="inline mr-1 text-[#f87171]" /> },
    devops: { label: "DevOps", icon: <Folder size={16} className="inline mr-1 text-[#34d399]" />, openIcon: <FolderOpen size={16} className="inline mr-1 text-[#34d399]" /> },
    mobile: { label: "Mobile", icon: <Folder size={16} className="inline mr-1 text-[#a78bfa]" />, openIcon: <FolderOpen size={16} className="inline mr-1 text-[#a78bfa]" /> },
    design: { label: "Design", icon: <Folder size={16} className="inline mr-1 text-[#fbbf24]" />, openIcon: <FolderOpen size={16} className="inline mr-1 text-[#fbbf24]" /> },
    fullstack: { label: "Fullstack", icon: <Folder size={16} className="inline mr-1 text-[#f472b6]" />, openIcon: <FolderOpen size={16} className="inline mr-1 text-[#f472b6]" /> },
    database: { label: "Database", icon: <Folder size={16} className="inline mr-1 text-[#38bdf8]" />, openIcon: <FolderOpen size={16} className="inline mr-1 text-[#38bdf8]" /> },
    cloud: { label: "Cloud", icon: <Folder size={16} className="inline mr-1 text-[#6366f1]" />, openIcon: <FolderOpen size={16} className="inline mr-1 text-[#6366f1]" /> },
  };

  // Definição de rótulos e ícones para grupos conhecidos
  const groupLabels: Record<string, string> = {
    // Database
    'relacional': 'Relacional',
    'não relacional': 'Não Relacional',
    // Cloud
    'iaas': 'IaaS',
    'paas': 'PaaS',
    'baas': 'BaaS',
    'cdn': 'CDN / Edge',
    'pagamentos': 'Pagamentos',
    // DevOps
    'containers': 'Containers & Orquestração',
    'cicd': 'CI/CD',
    'iac': 'Infraestrutura como Código',
    'monitoring': 'Monitoramento & Observabilidade',
    'config': 'Gerenciamento de Configuração',
    'outros': 'Outros',
  };
  const groupIcons: Record<string, React.ReactNode> = {
    // Database
    'relacional': <Folder size={16} className="inline mr-1 text-[#38bdf8]" />,
    'não relacional': <Folder size={16} className="inline mr-1 text-[#22d3ee]" />,
    // Cloud
    'iaas': <Folder size={16} className="inline mr-1 text-[#6366f1]" />,
    'paas': <Folder size={16} className="inline mr-1 text-[#00c7b7]" />,
    'baas': <Folder size={16} className="inline mr-1 text-[#ffca28]" />,
    'cdn': <Folder size={16} className="inline mr-1 text-[#f38020]" />,
    'pagamentos': <Folder size={16} className="inline mr-1 text-[#008cdd]" />,
    // DevOps
    'containers': <Folder size={16} className="inline mr-1 text-[#2496ed]" />,
    'cicd': <Folder size={16} className="inline mr-1 text-[#fc6d26]" />,
    'iac': <Folder size={16} className="inline mr-1 text-[#7b42bc]" />,
    'monitoring': <Folder size={16} className="inline mr-1 text-[#f46800]" />,
    'config': <Folder size={16} className="inline mr-1 text-[#fbbf24]" />,
    'outros': <Folder size={16} className="inline mr-1 text-[#b3b9c5]" />,
  };

  // Agrupar por área
  const areaGroups: Record<string, TechnologyItem[]> = {};
  technologies.forEach(tech => {
    if (!areaGroups[tech.area]) areaGroups[tech.area] = [];
    areaGroups[tech.area].push({
      label: tech.name,
      icon: technologyIcons[tech.icon],
      color: tech.color,
      id: tech.id,
      group: tech.group,
    });
  });

  // Para cada área, se houver group, agrupar por group, senão por categoria
  return Object.entries(areaGroups).map(([areaKey, techs]) => {
    // Verifica se há pelo menos um group preenchido
    const hasGroup = techs.some(t => t.group);
    if (hasGroup) {
      const groupMap: Record<string, TechnologyItem[]> = {};
      techs.forEach(tech => {
        const groupKey = tech.group || 'outros';
        if (!groupMap[groupKey]) groupMap[groupKey] = [];
        groupMap[groupKey].push(tech);
      });
      return {
        label: areas[areaKey as keyof typeof areas]?.label || areaKey,
        icon: areas[areaKey as keyof typeof areas]?.icon,
        openIcon: areas[areaKey as keyof typeof areas]?.openIcon,
        children: Object.entries(groupMap).map(([groupKey, groupTechs]) => ({
          label: groupLabels[groupKey] || groupKey,
          icon: groupIcons[groupKey] || <Folder size={16} className="inline mr-1 text-[#b3b9c5]" />,
          openIcon: groupIcons[groupKey] || <FolderOpen size={16} className="inline mr-1 text-[#b3b9c5]" />,
          children: groupTechs
        }))
      };
    } else {
      // Agrupar normalmente por categoria
      const categoryGroups: Record<string, TechnologyItem[]> = {};
      techs.forEach(tech => {
        const techData = technologies.find(t => t.id === tech.id);
        if (!techData) return;
        if (!categoryGroups[techData.category]) categoryGroups[techData.category] = [];
        categoryGroups[techData.category].push(tech);
      });
      return {
        label: areas[areaKey as keyof typeof areas]?.label || areaKey,
        icon: areas[areaKey as keyof typeof areas]?.icon,
        openIcon: areas[areaKey as keyof typeof areas]?.openIcon,
        children: Object.entries(categoryGroups).map(([catKey, catTechs]) => ({
          label: catKey.charAt(0).toUpperCase() + catKey.slice(1),
          icon: <Folder size={16} className="inline mr-1 text-[#b3b9c5]" />,
          openIcon: <FolderOpen size={16} className="inline mr-1 text-[#b3b9c5]" />,
          children: catTechs
        }))
      };
    }
  });
};

// Componente TreeItem para renderizar itens individuais (tecnologias)
function TreeItem({ item, level, selected, onToggle }: {
  item: TechnologyItem;
  level: number;
  selected: string[];
  onToggle: (label: string) => void;
}) {
  const isSelected = selected.includes(item.label);
  return (
    <li className="mb-1">
      <div
        className="flex items-center gap-1 cursor-pointer group text-[#b3b9c5] hover:text-white text-sm font-mono"
        style={{ paddingLeft: `${level * 18}px` }}
        onClick={() => onToggle(item.label)}
      >
        {/* Ícone customizado da tecnologia */}
        <span className="w-5 h-5 flex items-center justify-center" style={{ color: item.color }}>
          {item.icon}
        </span>
        <span>{item.label}</span>
        {/* Ícone de check se selecionado */}
        {isSelected && <Check size={14} className="ml-1 text-[#ffb454]" />}
      </div>
    </li>
  );
}

// Componente Tree para renderizar áreas, categorias e tecnologias
function TechnologyTree({ items, level = 0, selected, onToggle }: {
  items: AreaItem[];
  level?: number;
  selected: string[];
  onToggle: (label: string) => void;
}) {
  const [open, setOpen] = React.useState(() => items.map(() => level < 1));

  return (
    <ul className="select-none">
      {items.map((item, idx) => {
        return (
          <li key={item.label} className="mb-1">
            <div
              className={`flex items-center gap-1 cursor-pointer group text-[#b3b9c5] hover:text-white text-sm font-mono ${level === 0 ? "font-semibold mt-2" : ""}`}
              style={{ paddingLeft: `${level * 18}px` }}
              onClick={() => setOpen(o => o.map((v, i) => i === idx ? !v : v))}
            >
              {open[idx] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              {open[idx] ? item.openIcon : item.icon}
              <span>{item.label}</span>
            </div>
            {open[idx] && (
              <ul>
                {item.children.map((cat) => (
                  <CategoryTree
                    key={cat.label}
                    item={cat}
                    level={level + 1}
                    selected={selected}
                    onToggle={onToggle}
                  />
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// Componente para renderizar categorias e suas tecnologias
function CategoryTree({ item, level, selected, onToggle }: {
  item: CategoryItem;
  level: number;
  selected: string[];
  onToggle: (label: string) => void;
}) {
  const [open, setOpen] = React.useState(level < 2);
  return (
    <li className="mb-1">
      <div
        className={`flex items-center gap-1 cursor-pointer group text-[#b3b9c5] hover:text-white text-sm font-mono`}
        style={{ paddingLeft: `${level * 18}px` }}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        {open ? item.openIcon : item.icon}
        <span>{item.label}</span>
      </div>
      {open && (
        <ul>
          {item.children.map((tech) => (
            <TreeItem
              key={tech.id}
              item={tech}
              level={level + 1}
              selected={selected}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

const AREA_OPTIONS = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "mobile", label: "Mobile" },
  { value: "devops", label: "DevOps" },
  { value: "design", label: "Design" },
  { value: "fullstack", label: "Fullstack" },
  { value: "database", label: "Database" },
  { value: "cloud", label: "Cloud" },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Seleciona/desmarca todas as tecnologias de uma área
  const handleAreaToggle = (area: string) => {
    const techsInArea = technologies.filter(t => t.area === area).map(t => t.name);
    const isAreaSelected = selectedAreas.includes(area);
    if (isAreaSelected) {
      // Desmarcar área: remover todas as tecnologias dessa área
      setSelectedAreas(prev => prev.filter(a => a !== area));
      setSelected(prev => prev.filter(name => !techsInArea.includes(name)));
    } else {
      // Marcar área: adicionar todas as tecnologias dessa área
      setSelectedAreas(prev => [...prev, area]);
      setSelected(prev => Array.from(new Set([...prev, ...techsInArea])));
    }
  };

  // Seleção individual (sidebar)
  const handleToggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  const filteredProjects = projects.filter((project) => {
    if (selected.length === 0) return true;

    const allTechIds = [
      ...project.technologies.frontend,
      ...project.technologies.backend,
      ...project.technologies.database,
      ...project.technologies.tools,
      ...project.technologies.services
    ];

    const projectTechNames = technologies
      .filter(tech => allTechIds.includes(tech.id))
      .map(tech => tech.name);

    return selected.some(selectedTech => projectTechNames.includes(selectedTech));
  });

  const technologyTree = groupTechnologiesByAreaAndCategory();

  return (
    <div className="w-full h-full min-h-[80vh] flex flex-1 font-mono bg-[#101426] text-[#b3b9c5]">
      {/* Sidebar */}
      <aside className="w-[240px] min-w-[180px] max-w-[300px] border-r border-[#23263a] bg-[#181b2b] flex flex-col overflow-y-auto">
        <div className="flex items-center gap-2 border-b border-[#23263a] px-4 py-2">
          <Code size={16} className="inline mr-1 text-[#60a5fa]" />
          <span className="font-semibold text-white">Tecnologias</span>
        </div>
        <div
          className="flex flex-col gap-2 max-h-[calc(100vh-120px)] overflow-y-auto pl-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#23263a transparent'
          }}
        >
          <TechnologyTree
            items={technologyTree}
            selected={selected}
            onToggle={handleToggle}
          />
        </div>
      </aside>
      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col pt-0 pb-6 overflow-x-auto">
        {/* Topo fixo: lista de selecionados à esquerda, dropdown à direita */}
        <div
          className="flex items-center justify-between mb-6 sticky top-0 z-20 backdrop-blur-md bg-[#101426]/80 border-b border-[#23263a]/50 py-1 px-8"
          style={{ minHeight: '41px' }}
        >
          {/* Lista de tecnologias selecionadas */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#b3b9c5 px-2 py-1 flex items-center">
              {selected.length > 0 ? selected.join('; ') : 'All'}
            </span>
          </div>
          {/* Dropdown de áreas */}
          <div className="relative">
            <button
              className="flex items-center gap-2 bg-[#23263a]/80 backdrop-blur-sm text-[#b3b9c5] px-2 py-1 rounded border border-[#23263a]/50 shadow hover:bg-[#23263a]/60 text-sm"
              style={{ fontSize: '0.95rem' }}
              onClick={() => setDropdownOpen((v) => !v)}
            >
              <span>Selecionar áreas</span>
              <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#181b2b]/95 backdrop-blur-md border border-[#23263a]/50 rounded shadow-lg z-50">
                {AREA_OPTIONS.map(opt => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-[#23263a]/50 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAreas.includes(opt.value)}
                      onChange={() => handleAreaToggle(opt.value)}
                      className="accent-[#ffb454] w-4 h-4"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
