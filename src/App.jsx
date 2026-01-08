import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faBuilding,
  faFolder,
  faDownload,
  faExternalLinkAlt,
  faPaperPlane,
  faHeart,
  faArrowUp,
  faChevronDown,
  faBars,
  faTimes,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Importação dos dados
import {
  navItems,
  heroData,
  skills,
  stats,
  experiences,
  projects,
  categories,
  certificates,
  contactInfo,
  socialLinks,
} from "./data";

// --- COMPONENTES INTERNOS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-white">&lt;</span>
          <span className="bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] bg-clip-text text-transparent">
            Dev
          </span>
          <span className="text-white">/&gt;</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === item.href.replace("#", "")
                  ? "text-[#00f5d4]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.href.replace("#", "") && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00f5d4] shadow-[0_0_10px_#00f5d4]"
                />
              )}
            </a>
          ))}
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="lg" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#0a0a0f] border-b border-white/10"
        >
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-4 py-3 rounded-lg text-sm font-medium ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-[#00f5d4]/10 text-[#00f5d4]"
                    : "text-zinc-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f5d4]/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b829dd]/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f5d4]/10 border border-[#00f5d4]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse shadow-[0_0_10px_#00f5d4]" />
            <span className="text-[#00f5d4] text-sm font-medium">
              {heroData.status}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">{heroData.titlePart1}</span>
            <br />
            <span className="bg-gradient-to-r from-[#00f5d4] via-[#00bbf9] to-[#b829dd] bg-clip-text text-transparent">
              {heroData.titlePart2}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            {heroData.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {heroData.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium hover:border-[#00f5d4]/50 hover:text-[#00f5d4] transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {/* {heroData.socials.map(({ icon: SocialIcon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-[#00f5d4] hover:border-[#00f5d4]/50 hover:shadow-[0_0_20px_rgba(0,245,212,0.2)] transition-all"
              >
                <SocialIcon size={22} />
              </motion.a>
            ))} */}
          </div>
        </motion.div>
      </div>
      <motion.button
        onClick={() =>
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-[#00f5d4] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </motion.div>
      </motion.button>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#00f5d4] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Sobre Mim
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transformando ideias em{" "}
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] bg-clip-text text-transparent">
              código
            </span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-[#12121a] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${skill.color}15 0%, transparent 60%)`,
                }}
              />
              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  backgroundColor: `${skill.color}15`,
                  boxShadow: `0 0 20px ${skill.color}20`,
                }}
              >
                <skill.icon
                  size={24}
                  style={{ color: skill.color }}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2 relative">
                {skill.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed relative">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 flex flex-wrap justify-center gap-16 md:gap-25">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center w-100 md:w-auto">
              {" "}
              {/* w-32 garante um tamanho mínimo */}
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-zinc-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-32 px-6 bg-[#0d0d12]">
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#00f5d4] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Trajetória
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Minha{" "}
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#b829dd] bg-clip-text text-transparent">
              Experiência
            </span>
          </h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5d4]/50 via-[#00bbf9]/50 to-[#b829dd]/50 md:-translate-x-1/2" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#0d0d12] md:-translate-x-1/2 z-10"
                style={{
                  backgroundColor: exp.color,
                  boxShadow: `0 0 20px ${exp.color}80`,
                }}
              />
              <div
                className={`flex-1 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 rounded-2xl bg-[#12121a] border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${exp.color}10 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative">
                    <div
                      className={`flex items-start gap-3 mb-4 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${exp.color}15` }}
                      >
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          size="lg"
                          style={{ color: exp.color }}
                        />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-semibold">
                          {exp.role}
                        </h3>
                        <p className="text-zinc-400">{exp.company}</p>
                      </div>
                    </div>
                    <div
                      className={`flex flex-wrap gap-4 mb-4 text-sm text-zinc-500 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faCalendar} size="sm" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-zinc-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#00f5d4] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meus{" "}
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#00f5d4] text-[#0a0a0f] shadow-[0_0_20px_rgba(0,245,212,0.3)]"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative rounded-2xl overflow-hidden bg-[#12121a] border border-white/5 hover:border-[#00f5d4]/30 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <a
                      href={project.github}
                      className="p-3 rounded-full bg-white/10 text-white hover:bg-[#00f5d4] hover:text-[#0a0a0f] transition-colors"
                    >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 rounded-full bg-white/10 text-white hover:bg-[#00f5d4] hover:text-[#0a0a0f] transition-colors"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                    </a>
                  </motion.div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#00f5d4]/20 border border-[#00f5d4]/30 text-[#00f5d4] text-xs font-medium">
                      Destaque
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#00f5d4]/10">
                      <FontAwesomeIcon
                        icon={faFolder}
                        size="lg"
                        className="text-[#00f5d4]"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-[#00f5d4] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-white/5 text-zinc-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const CertificatesSection = () => {
  return (
    <section id="certificates" className="relative py-32 px-6 bg-[#0d0d12]">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#00f5d4] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Credenciais
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meus{" "}
            <span className="bg-gradient-to-r from-[#b829dd] to-[#00f5d4] bg-clip-text text-transparent">
              Certificados
            </span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-[#12121a] border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-300"
            >
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${cert.color}, transparent)`,
                }}
              />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0"
                    style={{ boxShadow: `0 0 20px ${cert.color}30` }}
                  >
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg leading-tight mb-1 group-hover:text-[#00f5d4] transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1 text-zinc-400 text-sm">
                      <FontAwesomeIcon icon={faBuilding} size="sm" />
                      {cert.issuer}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <FontAwesomeIcon icon={faCalendar} size="sm" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={cert.downloadUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm bg-white/5 border border-white/10 text-white hover:bg-[#00f5d4] hover:text-[#0a0a0f] hover:border-[#00f5d4] transition-all"
                  >
                    <FontAwesomeIcon icon={faDownload} size="sm" /> Baixar
                  </a>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-[#00f5d4] hover:bg-[#00f5d4]/10"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos{" "}
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#b829dd] bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Entre em contato
            </h3>
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-[#12121a] border border-white/5 hover:border-white/10 transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                    style={{
                      backgroundColor: `${info.color}15`,
                      boxShadow: `0 0 20px ${info.color}20`,
                    }}
                  >
                    <info.icon size={22} style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    size="lg"
                    className="ml-auto text-zinc-600 group-hover:text-[#00f5d4] transition-colors"
                  />
                </motion.a>
              ))}
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-4">Me siga nas redes</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-[#00f5d4] hover:border-[#00f5d4]/50 hover:shadow-[0_0_20px_rgba(0,245,212,0.2)] transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Seu nome"
                required
                className="w-full bg-[#12121a] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#00f5d4] focus:outline-none h-12 rounded-xl px-4"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="seu@email.com"
                required
                className="w-full bg-[#12121a] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#00f5d4] focus:outline-none h-12 rounded-xl px-4"
              />
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Conte-me sobre seu projeto..."
                required
                rows={5}
                className="w-full bg-[#12121a] border border-white/10 text-white placeholder:text-zinc-600 focus:border-[#00f5d4] focus:outline-none rounded-xl p-4 resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] text-[#0a0a0f] font-semibold hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(0,245,212,0.3)] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} size="sm" /> Enviar
                    Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative py-8 px-6 bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-500 text-sm">
          <span>© 2024 • Feito com</span>
          <FontAwesomeIcon
            icon={faHeart}
            size="sm"
            className="text-[#f72585] fill-[#f72585]"
          />
          <span>e muito</span>
          <span className="text-[#00f5d4]">código</span>
        </div>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-[#00f5d4] hover:border-[#00f5d4]/50 transition-all"
        >
          <FontAwesomeIcon icon={faArrowUp} size="sm" />
        </motion.button>
      </div>
    </footer>
  );
};

// --- COMPONENTE PRINCIPAL (App) ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
