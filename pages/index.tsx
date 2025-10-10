import Head from "next/head";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSettings,
  FiCpu,
  FiSmartphone,
  FiGlobe,
  FiCamera,
  FiNavigation,
  FiMessageCircle,
  FiBox,
} from "react-icons/fi";

export default function Home() {
  const whatsappNumber = "244957008342";
  const whatsappText = encodeURIComponent(
    "Olá 👋, quero mais informações sobre os serviços da AGC Solutions."
  );

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  // Atualiza o menu ativo conforme a rolagem
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY + window.innerHeight / 3;
      sections.forEach((section) => {
        if (
          scrollY > section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.getAttribute("id") || "");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const menuItems = [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "produtos", label: "Produtos" },
    { id: "missao", label: "Missão" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contacto" },
  ];

  return (
    <>
      <Head>
        <title>AGC Solutions — Soluções Tecnológicas</title>
        <meta
          name="description"
          content="AGC Solutions — Inovação ES Tecnologia Ao Seu Alcance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ===== CABEÇALHO ===== */}
      <header className="topbar fixed-top">
        <div className="topbar-container">
          <div
            className="logo-section"
            onClick={() => scrollToSection("inicio")}
          >
            <img src="/logo.jpg" alt="AGC Solutions" className="logo" />
            <div className="logo-text">
              <h1>AGC Solutions</h1>
              <p>Inovação e tecnologia ao seu alcance</p>
            </div>
          </div>

          {/* Ícone do menu mobile */}
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu principal */}
          <nav className={`menu ${menuOpen ? "open" : ""}`}>
            {menuItems.map(({ id, label }) => (
              <a
                key={id}
                onClick={() => scrollToSection(id)}
                className={activeSection === id ? "active" : ""}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Overlay escuro quando o menu está aberto */}
        {menuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="hero" id="inicio">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          className="hero-content"
        >
          <h2>
            Transformamos <span className="highlight">ideias</span> em{" "}
            <span className="highlight">soluções digitais</span>.
          </h2>
          <p className="hero-subtext">
            Desenvolvemos <strong>softwares, websites</strong> e{" "}
            <strong>aplicativos inteligentes</strong> que otimizam processos,
            conectam pessoas e aceleram negócios.
          </p>
          <div className="cta">
            <button
              onClick={() => scrollToSection("servicos")}
              className="btn primary"
            >
              Ver Serviços
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="btn secondary"
            >
              Nossos Produtos
            </button>
          </div>
        </motion.div>
      </section>

      {/* ===== SEÇÕES ===== */}
      <main>
        {/* Serviços */}
        <motion.section
          id="servicos"
          className="section gray"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="container">
            <h2>Nossos Serviços</h2>
            <div className="services-grid">
              {[
                {
                  icon: <FiCpu />,
                  t: "Assistência Técnica",
                  d: "Manutenção ,montagem e optimização de computadores.",
                },
                {
                  icon: <FiSettings />,
                  t: "Instalação de Sistemas",
                  d: "Configuração de software e sistemas operativos.",
                },
                {
                  icon: <FiSmartphone />,
                  t: "Criação de Apps Android",
                  d: "Aplicativos modernos e sob medida.",
                },
                {
                  icon: <FiGlobe />,
                  t: "Criação de Websites",
                  d: "Sites institucionais e lojas virtuais.",
                },
                {
                  icon: <FiNavigation />,
                  t: "GPS ",
                  d: "Venda, instalação e monitoramento 24/24 com cerca digital.",
                },
                {
                  icon: <FiCamera />,
                  t: "CCTV",
                  d: "Soluções completas de segurança eletrónica.",
                },
              ].map((s, i) => (
                <div key={i} className="card">
                  {s.icon}
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Produtos */}
        <motion.section
          id="produtos"
          className="section produtos bg-gradient"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: false, amount: 0.3 }}
              className="title"
            >
              Nossos Produtos
            </motion.h2>

            <p className="intro-text">
              Soluções desenvolvidas para automatizar processos, simplificar
              operações e impulsionar o crescimento do seu negócio.
            </p>

            <div className="produtos-grid">
              {[
                {
                  icon: <FiBox />,
                  nome: "Sistema de Gestão Agrícola",
                  desc: "Controle total da produção agrícola: animais, colheitas, relatórios e indicadores inteligentes, monitoramento de pastos.",
                },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="produto-card"
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <div className="icon-wrapper">{p.icon}</div>
                  <h3>{p.nome}</h3>
                  <p>{p.desc}</p>
                  <button className="btn small">Saiba mais</button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Missão */}
        <motion.section
          id="missao"
          className="section missao"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="container">
            <h2>Nossa Missão</h2>
            <p className="missao-text">
              Na <strong>AGC Solutions</strong>, buscamos transformar o presente
              e construir o futuro através de soluções tecnológicas inovadoras,
              éticas e sustentáveis.
            </p>
            <div className="missao-grid">
              {[
                {
                  icon: "🚀",
                  titulo: "Inovação",
                  texto: "Criamos tecnologias que antecipam o futuro.",
                },
                {
                  icon: "🤝",
                  titulo: "Compromisso",
                  texto: "Trabalhamos com transparência e excelência.",
                },
                {
                  icon: "🌍",
                  titulo: "Impacto",
                  texto: "Contribuímos para o crescimento digital de Angola.",
                },
              ].map((m, i) => (
                <div key={i} className="missao-card">
                  <div className="icon">{m.icon}</div>
                  <h3>{m.titulo}</h3>
                  <p>{m.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Sobre */}
        <motion.section
          id="sobre"
          className="section sobre"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="container sobre-container">
            <motion.div
              className="sobre-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2>Quem Somos</h2>
              <p>
                A <strong className="empresa">AGC Solutions</strong> é uma
                empresa angolana especializada em{" "}
                <strong>desenvolvimento de software</strong>,{" "}
                <strong>tecnologia</strong> e <strong>inovação digital</strong>.
              </p>
              <p>
                Nosso compromisso é promover a{" "}
                <strong>transformação tecnológica</strong> das organizações, com
                foco em eficiência, segurança e escalabilidade.
              </p>
              <p>
                Acreditamos que a tecnologia é o motor do progresso, e
                trabalhamos todos os dias para criar um futuro mais conectado,
                ágil e inovador.
              </p>
              <button className="btn saiba-mais">Saiba mais</button>
            </motion.div>

            <motion.div
              className="sobre-imagem"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.2,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="img-wrapper">
                <img src="/logo.jpg" alt="AGC Solutions" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contato */}
        <motion.section
          id="contato"
          className="section contato"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="container contato-container">
            <div className="contato-info">
              <h2>Entre em Contato</h2>
              <p>Tem um projeto? Fale connosco — teremos prazer em ajudar.</p>
              <ul className="contact-list">
                <li>
                  <FiMapPin /> Rua Cidade de Cabinda, Lobito — Benguela, Angola
                </li>
                <li>
                  <FiMail /> agcsolutions@gmail.com
                </li>
                <li>
                  <FiPhone /> +244 957 008 342
                </li>
              </ul>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <FiMessageCircle size={20} /> Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container footer-content">
          <p>
            © {new Date().getFullYear()} <strong>AGC Solutions</strong> — Todos
            os direitos reservados.
          </p>
          <p className="dev-credit">
            Desenvolvido por <span>AGC Solutions</span>
          </p>
        </div>
      </footer>

      {/* BOTÃO FIXO WHATSAPP */}
      <a
        className="whatsapp"
        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </>
  );
}
