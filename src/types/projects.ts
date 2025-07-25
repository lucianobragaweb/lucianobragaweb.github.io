// Tipos para tecnologias
export interface Technology {
    id: number
    name: string
    icon: string
    category: 'language' | 'framework' | 'database' | 'tool' | 'service' | 'library'
    color: string
    area: 'frontend' | 'backend' | 'devops' | 'mobile' | 'design' | 'fullstack' | 'database' | 'cloud'
    group?: string // agrupamento genérico para subtipos (ex: relacional, cicd, paas, etc)
}

// Tipos para clientes
export interface Client {
    id: number
    name: string
    logo?: string
}

// Status do projeto
export type ProjectStatus = 'MVP' | 'Produção' | 'Premiado' | 'Em Desenvolvimento' | 'Concluído' | 'Open Source'

// Estrutura do projeto
export interface Project {
    id: number
    title: string
    tag: string
    description: string
    year: number
    imageId: number
    clientId: number
    status: ProjectStatus[]
    technologies: {
        frontend: number[]
        backend: number[]
        database: number[]
        tools: number[]
        services: number[]
    }
    githubUrl?: string
    liveUrl?: string
}
