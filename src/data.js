import {
  Globe,
  Database,
  Code2,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Phone,
  MapPin,
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
  status: "Disponível para projetos",
  titlePart1: "Olá, eu sou",
  titlePart2: "Desenvolvedor",
  subtitle:
    "Full Stack Developer apaixonado por criar experiências digitais extraordinárias",
  techStack: [
    "React",
    "Angular.TS",
    "React.TS",
    "TypeScript",
    "HTML",
    "CSS",
    "Node.js",
    "Python",
    "Java",
    "Ruby on Rails",
    "Flask",
    "Django",
    "Spring Boot",
    "Next.js",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker Swarm",
    "Github",
    "Flutter",
    "Dart",
    "Wordpress",
  ],
  socials: [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ],
};

export const skills = [
  {
    icon: Globe,
    title: "Frontend",
    description: "React.TS, Angular.TS, TypeScript, HTML, CSS, Flutter",
    color: "#00f5d4",
  },
  {
    icon: Database,
    title: "Backend",
    description:
      "Node.js, Python, Java, Ruby on Rails, Flask, Django, Spring Boot, Next.js",
    color: "#00bbf9",
  },
  {
    icon: Code2,
    title: "Database & DevOps",
    description: "PostgreSQL, MySQL, MongoDB, Docker Swarm, Github",
    color: "#b829dd",
  },
  {
    icon: Sparkles,
    title: "Mobile & CMS",
    description: "Flutter, Dart, Wordpress",
    color: "#f72585",
  },
];

export const stats = [
  { number: "2+", label: "Anos de Experiência" },
  { number: "5+", label: "Projetos Concluídos" },
  { number: "6+", label: "Certificações" },
];

export const experiences = [
  {
    id: 1,
    role: "Profissional Autonomo Full Stack",
    company: "",
    location: "Remoto",
    period: "jan/2024 - dez/2024",
    description:
      "Tive a oportunidade de participar de diversos projetos desafiadores, desenvolvendo soluções completas desde o frontend até o backend. Trabalhei com equipes multidisciplinares para entregar produtos de alta qualidade.",
    technologies: ["React", "Node.js", "Spring Boot", "Flutter", "MySQL"],
    color: "#00f5d4",
  },
  {
    id: 2,
    role: "Coordenador de TI",
    company:
      "Secretaria de Inovação, Ciência, Tecnologia e Comunicação Social - Prefeitura de Pesqueira",
    location: "Pesqueira, PE",
    period: "jan/2025 - Presente",
    description:
      "Atuo na coordenação de projetos de tecnologia, liderando equipes para implementar soluções inovadoras que melhoram os serviços públicos. Sou responsável pela gestão de infraestrutura de TI e pela integração de novas tecnologias.",
    technologies: [
      "React.TS",
      "Flutter",
      "Spring Boot",
      "Docker Swarm",
      "MySQL",
      "Github",
      "CI/CD",
      "Agile",
    ],
    color: "#00bbf9",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com painel admin.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
    github: "#",
    live: "#",
    category: "fullstack",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicativo de gestão de tarefas com colaboração em tempo real.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    technologies: ["React", "Firebase", "Tailwind", "WebSocket"],
    github: "#",
    live: "#",
    category: "fullstack",
    featured: true,
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
    title: "SQL do básico ao avançado",
    issuer: "Instrutor Matheus Battisti - Udemy",
    date: "Dezembro 2023",
    credentialId: "UC-b046cc47-6c14-4f7a-ac95-b7b53d53c3d0c91",
    logo: "/logo-udemy.png",
    downloadUrl: "/certificates/Certificado-MySQL.pdf",
    verifyUrl: "ude.my/UC-b046cScc47-6c14-4f7a-ac95-b7b53c3d0c91",
    color: "#FF9900",
  },
  {
    id: 2,
    title: "React do Zero a Maestria ",
    issuer: "Instrutor Matheus Battisti - Udemy",
    date: "junho 2024",
    credentialId: "UC-d31e4e64-e352-404f-87d1-c0a0e9544630",
    logo: "/logo-udemy.png",
    downloadUrl: "/certificates/Certificado-React.pdf",
    verifyUrl: "ude.my/UC-d31e4e64-e352-404f-87d1-c0a0e9544630",
    color: "#FF9900",
  },
   {
    id: 2,
    title: "Santander Bootcamp Fullstack Developer ",
    issuer: "DIO - Digital Innovation One",
    date: "agosto 2022",
    credentialId: "2E808776",
    logo: "/logo-santander.png",
    downloadUrl: "/certificates/Certificado-Santander.pdf",
    verifyUrl: "ude.my/UC-d31e4e64-e352-404f-87d1-c0a0e9544630",
    color: "#FF9900",
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
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];
