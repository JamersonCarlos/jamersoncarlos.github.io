import {
  Globe,
  Database,
  Code2,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Users,
  ShieldCheck,
  Trophy,
  MessageSquare,
  PartyPopper,
  Ticket,
} from "lucide-react";

export const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Certificados", href: "#certificates" },
  { label: "Contato", href: "#contact" },
];

export const heroData = {
  name: "Jamerson Carlos",
  status: "Disponível para novos projetos",
  titlePart1: "Olá, eu sou",
  titlePart2: "Desenvolvedor",
  subtitle:
    "Desenvolvedor Full Stack apaixonado por inovação tecnológica, construindo sistemas reais em produção com foco em impacto social e transformação digital",
  techStack: [
    "Java",
    "Go",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Django",
    "Ruby on Rails",
    "Flutter",
    "Dart",
    "Python",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "CI/CD",
    "Firebase",
    "Spring Boot",
    "Nginx",
    "JWT",
    "Traefik",
    "MinIO",
  ],
  socials: [
    { icon: Github, href: "https://github.com/JamersonCarlos", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jamersoncarlos", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ],
};

export const skills = [
  {
    icon: Globe,
    title: "Frontend",
    description: "React, TypeScript, Angular e Vite para interfaces modernas e performáticas.",
    color: "#00f5d4",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Java, Go, Node.js, Ruby on Rails, Django e Spring Boot em APIs robustas.",
    color: "#00bbf9",
  },
  {
    icon: Code2,
    title: "Dados & DevOps",
    description: "MySQL, PostgreSQL, MongoDB, Docker, CI/CD, Traefik e MinIO.",
    color: "#b829dd",
  },
  {
    icon: Sparkles,
    title: "Mobile & Segurança",
    description: "Flutter, Dart, JWT/RBAC e conformidade LGPD em sistemas públicos.",
    color: "#f72585",
  },
];

export const stats = [
  { number: "3+", label: "Anos de Experiência" },
  { number: "8+", label: "Sistemas em Produção" },
  { number: "5+", label: "Certificações" },
];

export const experiences = [
  {
    id: 1,
    role: "Monitor de Programação I — Extensão Acadêmica",
    company: "UFRPE — Unidade Acadêmica de Belo Jardim (UABJ)",
    location: "Belo Jardim, PE",
    period: "abr/2021 - jan/2022",
    description:
      "Atividade de extensão acadêmica com suporte a discentes, reforçando o vínculo entre universidade e formação prática em lógica de programação.",
    technologies: ["Lógica de Programação", "Extensão Acadêmica"],
    color: "#00f5d4",
  },
  {
    id: 2,
    role: "Pesquisador — Projeto de Pesquisa PIBIC",
    company: "UFRPE — Unidade Acadêmica de Belo Jardim (UABJ)",
    location: "Belo Jardim, PE",
    period: "out/2022 - out/2023",
    description:
      "Pesquisa sobre infraestrutura de suporte para avaliação empírica de soluções para cidades inteligentes usando Engenharia de Software.",
    technologies: ["Engenharia de Software", "Cidades Inteligentes", "Pesquisa"],
    color: "#00bbf9",
  },
  {
    id: 3,
    role: "Pesquisador — Projeto de Pesquisa FACEPE",
    company: "UFRPE — Unidade Acadêmica de Belo Jardim (UABJ)",
    location: "Belo Jardim, PE",
    period: "dez/2023 - dez/2024",
    description:
      "Desenvolvimento e prototipação de um modelo de dispositivo IoT para gestão de resíduos sólidos em Belo Jardim/PE, com uso de MicroPython em hardware embarcado.",
    technologies: ["IoT", "MicroPython", "Hardware Embarcado"],
    color: "#b829dd",
  },
  {
    id: 4,
    role: "Coordenador de T.I. e Desenvolvedor Full Stack",
    company: "SICTEC — Prefeitura Municipal de Pesqueira/PE",
    location: "Pesqueira, PE",
    period: "jan/2025 - atual",
    description:
      "Liderança técnica da secretaria de inovação: arquitetura e desenvolvimento do Portal CIPTEA, Copa Municipal, Carnaval dos Caiporas 2026 e GereCom. Gestão de infraestrutura VPS com Docker, Portainer e Traefik, com conformidade LGPD em todos os sistemas públicos.",
    technologies: ["Go", "React", "Flutter", "MySQL", "Docker", "Traefik", "LGPD"],
    color: "#f72585",
  },
  {
    id: 5,
    role: "Fundador e Engenheiro de Software",
    company: "Agreser Tecnologia LTDA (AgreserTech)",
    location: "Remoto",
    period: "2026 - atual",
    description:
      "Desenvolve produtos SaaS sob medida com foco em gamificação, fidelização de clientes e gestão inteligente. Responsável pelo desenvolvimento do ACIX, sistema de gestão para a Associação Indígena Xukuru do Ororubá.",
    technologies: ["Go", "React", "Flutter", "Mercado Pago", "Docker"],
    color: "#00f5d4",
  },
];

export const projects = [
  {
    id: 1,
    title: "ACIX — Associação Indígena Xukuru do Ororubá",
    description:
      "Plataforma digital completa para comunicação e gestão financeira da comunidade indígena Xukuru: RBAC com 5 perfis, cobranças via Mercado Pago, carteirinha digital com QR Code e portal de transparência.",
    icon: Users,
    color: "#00f5d4",
    image: "/projects/acix.png",
    technologies: ["Go + Gin", "React + Vite + TS", "Flutter", "MySQL", "JWT / RBAC", "Mercado Pago", "Docker"],
    live: "https://comunidadeindigenaxukuru.agreser.tech",
    category: "fullstack",
    featured: true,
  },
  {
    id: 2,
    title: "Portal CIPTEA — Carteira Digital para Pessoas com TEA",
    description:
      "Sistema público para emissão digital da Carteira de Identificação da Pessoa com TEA (Lei Federal 13.977/2020), com CPF e documentos cifrados e 100% de conformidade LGPD.",
    icon: ShieldCheck,
    color: "#00bbf9",
    image: "/projects/portal_ciptea.png",
    technologies: ["Go 1.25 + Gin", "React 19 + TS", "MySQL", "MinIO (SSE-C)", "ClamAV", "Docker"],
    live: "https://portaltea.pesqueira.pe.gov.br/login",
    category: "fullstack",
    featured: true,
  },
  {
    id: 3,
    title: "Copa Municipal — Plataforma de Gestão de Futsal",
    description:
      "App mobile e portal web para o campeonato municipal de futsal, com backend sincronizado em tempo real: placar ao vivo via WebSocket, súmula digital e chaveamento automático de mata-mata.",
    icon: Trophy,
    color: "#b829dd",
    image: "/projects/copa.png",
    technologies: ["Go", "React + TS", "Flutter", "MySQL", "WebSocket", "Docker"],
    category: "mobile",
    featured: true,
  },
  {
    id: 4,
    title: "GereCom — Gestão de Comunicação Institucional",
    description:
      "Gestão do ciclo completo de serviços de comunicação, do planejamento à avaliação, com 7 perfis de acesso (RBAC), avaliação multicritério e relatórios em PDF.",
    icon: MessageSquare,
    color: "#f72585",
    image: "/projects/gerecom.png",
    technologies: ["Node.js + Express", "React", "Flutter", "MySQL", "JWT / RBAC"],
    category: "fullstack",
    featured: false,
  },
  {
    id: 5,
    title: "Carnaval dos Caiporas 2026",
    description:
      "App oficial do maior evento cultural de Pesqueira/PE, com mais de 3.000 downloads: rastreamento em tempo real dos trios elétricos e gamificação do Passaporte do Folião.",
    icon: PartyPopper,
    color: "#00f5d4",
    image: "/projects/carnaval.png",
    technologies: ["Flutter", "Spring Boot", "MySQL", "Geolocalização em tempo real", "Docker"],
    category: "mobile",
    featured: true,
  },
  {
    id: 6,
    title: "Passaporte do Folião — Gamificação e Fidelidade",
    description:
      "Subsistema de fidelização que converte compras em estabelecimentos credenciados em pontos, com regras antifraude baseadas em geolocalização via QR Code.",
    icon: Ticket,
    color: "#00bbf9",
    image: "/projects/passaporte.png",
    technologies: ["Flutter", "Golang", "MySQL", "STOMP / WebSocket"],
    category: "mobile",
    featured: false,
  },
];

export const categories = [
  { id: "all", label: "Todos" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
];

export const certificates = [
  {
    id: 1,
    title: "SQL do básico ao avançado com MySQL",
    issuer: "Matheus Battisti — Udemy",
    date: "Dezembro 2023",
    credentialId: "UC-b046cc47-6c14-4f7a-ac95-b7b53d53c3d0c91",
    logo: "/logo-udemy.png",
    downloadUrl: "/certificates/Certificado-MySQL.pdf",
    verifyUrl: "https://ude.my/UC-b046cScc47-6c14-4f7a-ac95-b7b53c3d0c91",
    color: "#FF9900",
  },
  {
    id: 2,
    title: "React do Zero à Maestria",
    issuer: "Matheus Battisti — Udemy",
    date: "Junho 2024",
    credentialId: "UC-d31e4e64-e352-404f-87d1-c0a0e9544630",
    logo: "/logo-udemy.png",
    downloadUrl: "/certificates/Certificado-React.pdf",
    verifyUrl: "https://ude.my/UC-d31e4e64-e352-404f-87d1-c0a0e9544630",
    color: "#FF9900",
  },
  {
    id: 3,
    title: "Bootcamp Full Stack — Angular + Spring Boot",
    issuer: "Santander / DIO — Digital Innovation One",
    date: "Agosto 2022",
    credentialId: "2E808776",
    logo: "/logo-santander.png",
    downloadUrl: "/certificates/Certificado-Santander.pdf",
    verifyUrl: "#",
    color: "#EC0000",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jcventurosa@gmail.com",
    href: "mailto:jcventurosa@gmail.com",
    color: "#00f5d4",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (87) 99141-0966",
    href: "tel:+5587991410966",
    color: "#00bbf9",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Arcoverde, PE",
    href: "#",
    color: "#b829dd",
  },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/JamersonCarlos", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jamersoncarlos", label: "LinkedIn" },
];
