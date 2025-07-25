import { Technology, Client, Project } from "../types/projects"

// Lista de tecnologias
export const technologies: Technology[] = [
    // Frontend Languages
    { id: 1, name: "JavaScript", icon: "SiJavascript", category: "language", color: "#f7df1e", area: "frontend" },
    { id: 2, name: "TypeScript", icon: "SiTypescript", category: "language", color: "#3178c6", area: "frontend" },
    { id: 3, name: "HTML5", icon: "SiHtml5", category: "language", color: "#e44d26", area: "frontend" },
    { id: 4, name: "CSS3", icon: "SiCss", category: "language", color: "#1572b6", area: "frontend" },
    { id: 5, name: "Elm", icon: "SiElm", category: "language", color: "#1293d8", area: "frontend" },
    { id: 6, name: "ReasonML", icon: "SiReason", category: "language", color: "#dd4b39", area: "frontend" },

    // Frontend Frameworks
    { id: 7, name: "React", icon: "SiReact", category: "framework", color: "#61dafb", area: "frontend" },
    { id: 8, name: "Next.js", icon: "SiNextdotjs", category: "framework", color: "#61dafb", area: "frontend" },
    { id: 9, name: "Vue.js", icon: "SiVuedotjs", category: "framework", color: "#42b883", area: "frontend" },
    { id: 10, name: "Angular", icon: "SiAngular", category: "framework", color: "#dd0031", area: "frontend" },
    { id: 11, name: "Svelte", icon: "SiSvelte", category: "framework", color: "#ff3e00", area: "frontend" },
    { id: 12, name: "SolidJS", icon: "SiSolid", category: "framework", color: "#2c4f7c", area: "frontend" },

    // Frontend Tools
    { id: 13, name: "Tailwind CSS", icon: "SiTailwindcss", category: "tool", color: "#06b6d4", area: "frontend" },
    { id: 14, name: "Framer Motion", icon: "SiFramer", category: "tool", color: "#0055ff", area: "frontend" },
    { id: 15, name: "GSAP", icon: "GSAP", category: "tool", color: "#88ce02", area: "frontend" },
    { id: 16, name: "Chart.js", icon: "SiChartdotjs", category: "tool", color: "#ff6384", area: "frontend" },
    { id: 17, name: "Storybook", icon: "SiStorybook", category: "tool", color: "#ff4785", area: "frontend" },
    { id: 18, name: "Vite", icon: "SiVite", category: "tool", color: "#646cff", area: "frontend" },
    { id: 19, name: "Webpack", icon: "SiWebpack", category: "tool", color: "#8dd6f9", area: "frontend" },

    // Backend Languages
    { id: 20, name: "Go", icon: "SiGo", category: "language", color: "#00add8", area: "backend" },
    { id: 21, name: "Python", icon: "SiPython", category: "language", color: "#3776ab", area: "backend" },
    { id: 22, name: "Ruby", icon: "SiRuby", category: "language", color: "#cc342d", area: "backend" },
    { id: 23, name: "PHP", icon: "SiPhp", category: "language", color: "#777bb4", area: "backend" },
    { id: 24, name: "Java", icon: "SiJava", category: "language", color: "#007396", area: "backend" },
    { id: 25, name: "C#", icon: "SiCsharp", category: "language", color: "#239120", area: "backend" },

    // Backend Frameworks
    { id: 26, name: "Node.js", icon: "SiNodedotjs", category: "framework", color: "#339933", area: "backend" },
    { id: 27, name: "Express", icon: "SiExpress", category: "framework", color: "#000000", area: "backend" },
    { id: 28, name: "NestJS", icon: "SiNestjs", category: "framework", color: "#e0234e", area: "backend" },
    { id: 29, name: "Fastify", icon: "SiFastify", category: "framework", color: "#000000", area: "backend" },
    { id: 30, name: "Laravel", icon: "SiLaravel", category: "framework", color: "#ff2d20", area: "backend" },
    { id: 31, name: "Spring Boot", icon: "SiSpringboot", category: "framework", color: "#6db33f", area: "backend" },
    { id: 32, name: "Django", icon: "SiDjango", category: "framework", color: "#092e20", area: "backend" },
    { id: 33, name: "Ruby on Rails", icon: "SiRubyonrails", category: "framework", color: "#cc0000", area: "backend" },
    { id: 34, name: "ASP.NET", icon: "SiDotnet", category: "framework", color: "#512bd4", area: "backend" },

    // Mobile Languages
    { id: 35, name: "Dart", icon: "SiDart", category: "language", color: "#0175c2", area: "mobile" },
    { id: 36, name: "Kotlin", icon: "SiKotlin", category: "language", color: "#7f52ff", area: "mobile" },
    { id: 37, name: "Swift", icon: "SiSwift", category: "language", color: "#fa7343", area: "mobile" },
    { id: 38, name: "Java", icon: "SiJava", category: "language", color: "#007396", area: "mobile" },

    // Mobile Frameworks
    { id: 39, name: "Flutter", icon: "SiFlutter", category: "framework", color: "#02569b", area: "mobile" },
    { id: 40, name: "React Native", icon: "SiReact", category: "framework", color: "#61dafb", area: "mobile" },
    { id: 41, name: "Ionic", icon: "SiIonic", category: "framework", color: "#3880ff", area: "mobile" },
    { id: 42, name: "Xamarin", icon: "SiXamarin", category: "framework", color: "#3498db", area: "mobile" },
    { id: 43, name: "NativeScript", icon: "SiNativescript", category: "framework", color: "#3655ff", area: "mobile" },

    // Mobile Tools
    { id: 44, name: "GetX", icon: "SiGetx", category: "tool", color: "#ff6b6b", area: "mobile" },
    { id: 45, name: "Fastlane", icon: "SiFastlane", category: "tool", color: "#00f200", area: "mobile" },

    // DevOps Tools
    { id: 46, name: "Docker", icon: "SiDocker", category: "tool", color: "#2496ed", area: "devops", group: "containers" },
    { id: 47, name: "Kubernetes", icon: "SiKubernetes", category: "tool", color: "#326ce5", area: "devops", group: "containers" },
    { id: 48, name: "Podman", icon: "SiPodman", category: "tool", color: "#892ca0", area: "devops", group: "containers" },
    { id: 49, name: "OpenShift", icon: "SiRedhatopenshift", category: "tool", color: "#ee0000", area: "devops", group: "containers" },
    { id: 50, name: "Helm", icon: "SiHelm", category: "tool", color: "#277a9f", area: "devops", group: "containers" },

    { id: 51, name: "Jenkins", icon: "SiJenkins", category: "tool", color: "#d24939", area: "devops", group: "cicd" },
    { id: 52, name: "GitHub Actions", icon: "SiGithubactions", category: "tool", color: "#2088ff", area: "devops", group: "cicd" },
    { id: 53, name: "GitLab CI", icon: "SiGitlab", category: "tool", color: "#fc6d26", area: "devops", group: "cicd" },
    { id: 54, name: "Travis CI", icon: "SiTravisci", category: "tool", color: "#3eaaaf", area: "devops", group: "cicd" },
    { id: 55, name: "CircleCI", icon: "SiCircleci", category: "tool", color: "#343434", area: "devops", group: "cicd" },
    { id: 56, name: "ArgoCD", icon: "SiArgocd", category: "tool", color: "#f16061", area: "devops", group: "cicd" },
    { id: 57, name: "Drone", icon: "SiDrone", category: "tool", color: "#212121", area: "devops", group: "cicd" },

    { id: 58, name: "Terraform", icon: "SiTerraform", category: "tool", color: "#7b42bc", area: "devops", group: "iac" },
    { id: 59, name: "Pulumi", icon: "SiPulumi", category: "tool", color: "#ffae1a", area: "devops", group: "iac" },
    { id: 60, name: "Ansible", icon: "SiAnsible", category: "tool", color: "#000000", area: "devops", group: "iac" },
    { id: 61, name: "Chef", icon: "SiChef", category: "tool", color: "#f09820", area: "devops", group: "iac" },
    { id: 62, name: "Puppet", icon: "SiPuppet", category: "tool", color: "#302b6d", area: "devops", group: "iac" },
    { id: 63, name: "SaltStack", icon: "SiSaltstack", category: "tool", color: "#00eace", area: "devops", group: "iac" },

    { id: 64, name: "Prometheus", icon: "SiPrometheus", category: "tool", color: "#e6522c", area: "devops", group: "monitoring" },
    { id: 65, name: "Grafana", icon: "SiGrafana", category: "tool", color: "#f46800", area: "devops", group: "monitoring" },
    { id: 66, name: "Datadog", icon: "SiDatadog", category: "tool", color: "#632ca6", area: "devops", group: "monitoring" },
    { id: 67, name: "New Relic", icon: "SiNewrelic", category: "tool", color: "#008c99", area: "devops", group: "monitoring" },
    { id: 68, name: "Zabbix", icon: "SiZabbix", category: "tool", color: "#c80000", area: "devops", group: "monitoring" },
    { id: 69, name: "ELK Stack", icon: "SiElasticstack", category: "tool", color: "#005571", area: "devops", group: "monitoring" },

    { id: 70, name: "SonarQube", icon: "SiSonarqube", category: "tool", color: "#4e9bcd", area: "devops", group: "outros" },
    { id: 71, name: "Sentry", icon: "SiSentry", category: "tool", color: "#fb4226", area: "devops", group: "outros" },
    { id: 72, name: "Vault", icon: "SiVault", category: "tool", color: "#000000", area: "devops", group: "outros" },
    { id: 73, name: "Consul", icon: "SiConsul", category: "tool", color: "#e0387e", area: "devops", group: "outros" },
    { id: 74, name: "Istio", icon: "SiIstio", category: "tool", color: "#466bb0", area: "devops", group: "outros" },
    { id: 75, name: "Linkerd", icon: "SiLinkerd", category: "tool", color: "#00b3a4", area: "devops", group: "outros" },

    // Design Tools
    { id: 55, name: "Figma", icon: "SiFigma", category: "tool", color: "#f24e1e", area: "design" },
    { id: 56, name: "Adobe XD", icon: "SiAdobexd", category: "tool", color: "#ff61f6", area: "design" },
    { id: 57, name: "Sketch", icon: "SiSketch", category: "tool", color: "#f7b500", area: "design" },
    { id: 58, name: "Zeplin", icon: "SiZeplin", category: "tool", color: "#ffae00", area: "design" },

    // Fullstack Tools
    { id: 59, name: "Git", icon: "SiGit", category: "tool", color: "#f05032", area: "fullstack" },
    { id: 60, name: "Husky", icon: "SiHusky", category: "tool", color: "#24292f", area: "fullstack" },
    { id: 61, name: "Lerna", icon: "SiLerna", category: "tool", color: "#3e3c3c", area: "fullstack" },
    { id: 62, name: "Nx", icon: "SiNx", category: "tool", color: "#143055", area: "fullstack" },

    // Databases - Relacional
    { id: 63, name: "MySQL", icon: "SiMysql", category: "database", color: "#4479a1", area: "database", group: "relacional" },
    { id: 64, name: "PostgreSQL", icon: "SiPostgresql", category: "database", color: "#336791", area: "database", group: "relacional" },
    { id: 65, name: "SQL Server", icon: "SiMicrosoftsqlserver", category: "database", color: "#cc2927", area: "database", group: "relacional" },
    { id: 66, name: "Oracle", icon: "SiOracle", category: "database", color: "#f80000", area: "database", group: "relacional" },
    { id: 67, name: "MariaDB", icon: "SiMariadb", category: "database", color: "#003545", area: "database", group: "relacional" },
    { id: 68, name: "SQLite", icon: "SiSqlite", category: "database", color: "#003b57", area: "database", group: "relacional" },

    // Databases - Não Relacional
    { id: 69, name: "MongoDB", icon: "SiMongodb", category: "database", color: "#47a248", area: "database", group: "não relacional" },
    { id: 70, name: "Redis", icon: "SiRedis", category: "database", color: "#dc382d", area: "database", group: "não relacional" },
    { id: 71, name: "Cassandra", icon: "SiApachecassandra", category: "database", color: "#1287b1", area: "database", group: "não relacional" },
    { id: 72, name: "DynamoDB", icon: "SiAmazonaws", category: "database", color: "#4053d6", area: "database", group: "não relacional" },
    { id: 73, name: "CouchDB", icon: "SiApachecouchdb", category: "database", color: "#e42528", area: "database", group: "não relacional" },
    { id: 74, name: "Neo4j", icon: "SiNeo4j", category: "database", color: "#008cc1", area: "database", group: "não relacional" },
    { id: 75, name: "InfluxDB", icon: "SiInfluxdb", category: "database", color: "#22adf6", area: "database", group: "não relacional" },

    // Cloud Services
    { id: 76, name: "Firebase", icon: "SiFirebase", category: "service", color: "#ffca28", area: "cloud", group: "baas" },
    { id: 77, name: "Stripe", icon: "SiStripe", category: "service", color: "#008cdd", area: "cloud", group: "pagamentos" },
    { id: 78, name: "Vercel", icon: "SiVercel", category: "service", color: "#000000", area: "cloud", group: "paas" },
    { id: 79, name: "Netlify", icon: "SiNetlify", category: "service", color: "#00c7b7", area: "cloud", group: "paas" },
    { id: 80, name: "AWS", icon: "AWS", category: "service", color: "#ff9900", area: "cloud", group: "iaas" },
    { id: 81, name: "Google Cloud", icon: "SiGooglecloud", category: "service", color: "#4285f4", area: "cloud", group: "iaas" },
    { id: 82, name: "Azure", icon: "SiMicrosoftazure", category: "service", color: "#0078d4", area: "cloud", group: "iaas" },
    { id: 83, name: "DigitalOcean", icon: "SiDigitalocean", category: "service", color: "#0080ff", area: "cloud", group: "iaas" },
    { id: 84, name: "Heroku", icon: "SiHeroku", category: "service", color: "#430098", area: "cloud", group: "paas" },
    { id: 85, name: "Cloudflare", icon: "SiCloudflare", category: "service", color: "#f38020", area: "cloud", group: "cdn" },
]



// Lista de clientes
export const clients: Client[] = [
    { id: 1, name: "TechCorp Solutions" },
    { id: 2, name: "Digital Innovations Lab" },
    { id: 3, name: "StartupXYZ" },
    { id: 4, name: "Enterprise Systems" },
    { id: 5, name: "Freelance Project" },
    { id: 6, name: "Open Source Community" },
]

// Lista de projetos
export const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform",
        tag: "_ecommerce-platform",
        description: "Plataforma completa de e-commerce com animações fluidas, carrinho de compras, pagamentos integrados e painel administrativo.",
        year: 2024,
        imageId: 1,
        clientId: 1,
        status: ["Produção", "Premiado"],
        technologies: {
            frontend: [6, 7, 17, 18], // React, Next.js, Tailwind CSS, Framer Motion
            backend: [11, 12], // Node.js, Express
            database: [13, 16], // MongoDB, Redis
            tools: [23, 24], // Git, Figma
            services: [25, 26, 27], // Firebase, Stripe, Vercel
        },
        githubUrl: "https://github.com/user/ecommerce-platform",
        liveUrl: "https://ecommerce-platform.vercel.app",
    },
    {
        id: 2,
        title: "Task Management App",
        tag: "_task-manager",
        description: "Aplicativo de gerenciamento de tarefas com drag & drop, notificações em tempo real, colaboração em equipe e relatórios avançados.",
        year: 2023,
        imageId: 2,
        clientId: 2,
        status: ["Produção"],
        technologies: {
            frontend: [6, 2, 18], // React, TypeScript, Framer Motion
            backend: [11, 12], // Node.js, Express
            database: [13], // MongoDB
            tools: [23, 24], // Git, Figma
            services: [25, 27], // Firebase, Vercel
        },
        githubUrl: "https://github.com/user/task-manager",
        liveUrl: "https://task-manager.vercel.app",
    },
    {
        id: 3,
        title: "Portfolio Website",
        tag: "_portfolio",
        description: "Website pessoal com design glassmorphism, animações interativas, modo escuro/claro e otimização para SEO.",
        year: 2023,
        imageId: 3,
        clientId: 5,
        status: ["Concluído"],
        technologies: {
            frontend: [3, 4, 1, 19], // HTML5, CSS3, JavaScript, GSAP
            backend: [],
            database: [],
            tools: [23, 24], // Git, Figma
            services: [28], // Netlify
        },
        githubUrl: "https://github.com/user/portfolio",
        liveUrl: "https://portfolio.netlify.app",
    },
    {
        id: 4,
        title: "Dashboard Analytics",
        tag: "_analytics-dashboard",
        description: "Dashboard de analytics com gráficos interativos, filtros avançados, exportação de dados e alertas personalizados.",
        year: 2022,
        imageId: 4,
        clientId: 3,
        status: ["MVP", "Em Desenvolvimento"],
        technologies: {
            frontend: [8, 20], // Vue.js, Chart.js
            backend: [9], // Laravel
            database: [14], // MySQL
            tools: [23, 24], // Git, Figma
            services: [29], // AWS
        },
        githubUrl: "https://github.com/user/analytics-dashboard",
    },
    {
        id: 5,
        title: "Mobile App",
        tag: "_mobile-app",
        description: "Aplicativo mobile multiplataforma com funcionalidades offline, sincronização em nuvem e notificações push.",
        year: 2024,
        imageId: 5,
        clientId: 4,
        status: ["Produção"],
        technologies: {
            frontend: [10, 5, 21], // Flutter, Dart, GetX
            backend: [11, 12], // Node.js, Express
            database: [13], // MongoDB
            tools: [22, 23], // Docker, Git
            services: [25, 30], // Firebase, Google Cloud
        },
        githubUrl: "https://github.com/user/mobile-app",
    },
    {
        id: 6,
        title: "Open Source Library",
        tag: "_open-source",
        description: "Biblioteca JavaScript para animações avançadas com suporte a TypeScript e documentação completa.",
        year: 2023,
        imageId: 6,
        clientId: 6,
        status: ["Open Source", "Concluído"],
        technologies: {
            frontend: [1, 2], // JavaScript, TypeScript
            backend: [],
            database: [],
            tools: [23], // Git
            services: [27], // Vercel
        },
        githubUrl: "https://github.com/user/animation-library",
        liveUrl: "https://animation-library.vercel.app",
    },
]
