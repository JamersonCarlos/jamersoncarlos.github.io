import { 
  Globe, Database, Code2, Sparkles, 
  Github, Linkedin, Mail, Twitter, Phone, MapPin 
} from 'lucide-react';

export const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Certificados', href: '#certificates' },
  { label: 'Contato', href: '#contact' },
];

export const heroData = {
  name: "Seu Nome",
  status: "Disponível para projetos",
  titlePart1: "Olá, eu sou",
  titlePart2: "Desenvolvedor",
  subtitle: "Full Stack Developer apaixonado por criar experiências digitais extraordinárias",
  techStack: ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'AWS'],
  socials: [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ]
};

export const skills = [
  {
    icon: Globe,
    title: 'Frontend',
    description: 'React, Vue, Next.js, TypeScript, Tailwind CSS',
    color: '#00f5d4'
  },
  {
    icon: Database,
    title: 'Backend',
    description: 'Node.js, Python, Java, PostgreSQL, MongoDB',
    color: '#00bbf9'
  },
  {
    icon: Code2,
    title: 'DevOps',
    description: 'Docker, AWS, CI/CD, Kubernetes, Linux',
    color: '#b829dd'
  },
  {
    icon: Sparkles,
    title: 'Outros',
    description: 'Git, APIs REST, GraphQL, Testes, Agile',
    color: '#f72585'
  }
];

export const stats = [
  { number: '5+', label: 'Anos de Experiência' },
  { number: '50+', label: 'Projetos Concluídos' },
  { number: '30+', label: 'Clientes Satisfeitos' },
  { number: '15+', label: 'Certificações' },
];

export const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remoto',
    period: '2022 - Presente',
    description: 'Liderança técnica de equipe de 5 desenvolvedores. Arquitetura de microsserviços com Node.js e React.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    color: '#00f5d4'
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Agency',
    location: 'São Paulo, SP',
    period: '2020 - 2022',
    description: 'Desenvolvimento de aplicações web e mobile para clientes enterprise. Integração com APIs de terceiros.',
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis'],
    color: '#00bbf9'
  }
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma completa de e-commerce com painel admin.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    technologies: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL'],
    github: '#',
    live: '#',
    category: 'fullstack',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicativo de gestão de tarefas com colaboração em tempo real.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    technologies: ['React', 'Firebase', 'Tailwind', 'WebSocket'],
    github: '#',
    live: '#',
    category: 'fullstack',
    featured: true
  }
];

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile' },
];

export const certificates = [
  {
    id: 1,
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dezembro 2023',
    credentialId: 'AWS-SAA-12345',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&q=80',
    downloadUrl: '#',
    verifyUrl: '#',
    color: '#FF9900'
  }
];

export const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dev@portfolio.com',
    href: 'mailto:dev@portfolio.com',
    color: '#00f5d4'
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 (11) 99999-9999',
    href: 'tel:+5511999999999',
    color: '#00bbf9'
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Paulo, Brasil',
    href: '#',
    color: '#b829dd'
  }
];

export const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];