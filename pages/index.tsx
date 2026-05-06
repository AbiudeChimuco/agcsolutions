/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
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
  FiUsers,
} from "react-icons/fi";

export default function Home() {
  const whatsappNumber = "244957008342";
  const whatsappText = encodeURIComponent(
    "Olá 👋, quero mais informações sobre os serviços da Origami IT.",
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [produtoSelecionado, setProdutoSelecionado] = useState<any>(null);

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
        <title>Origami IT — Soluções Tecnológicas</title>
        <meta
          name="description"
          content="Origami IT — Desenvolvemos software, websites e aplicativos inteligentes para otimizar negócios e impulsionar a inovação digital."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ===== CABEÇALHO ===== */}
      <header className="topbar">
        <div className="topbar-container">
          <div
            className="logo-section"
            onClick={() => scrollToSection("inicio")}
          >
            <img src="/origami.png" alt="Origami IT" className="logo" />
            <div className="logo-text">
              <h1>Origami IT</h1>
              <p>Inovação e tecnologia ao seu alcance</p>
            </div>
          </div>

          {/* Botão do menu mobile */}
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

        {/* Overlay escuro */}
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
            Desenvolvemos softwares, websites e aplicativos inteligentes que
            otimizam processos, conectam pessoas e aceleram negócios.
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

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
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
                  d: "Manutenção, montagem e otimização de computadores.",
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
                  t: "GPS",
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
          className="section produtos"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="container">
            <h2>Nossos Produtos</h2>
            <p className="intro-text">
              Soluções desenvolvidas para automatizar processos e impulsionar o
              crescimento do seu negócio.
            </p>

            <div className="produtos-grid">
              {[
                {
                  icon: <FiBox />,
                  nome: "Gestão Agropecuária",
                  desc: "Controle total da produção agrícola e pecuária, com relatórios e indicadores inteligentes.",
                  funcionalidades: [
                    "Cadastro de animais, lotes e raças",
                    "Gestão de produção, natalidade e mortalidade",
                    "Relatórios de desempenho e exportação em PDF/Excel",
                    "Alertas automáticos e controle sanitário",
                    "Dashboard com indicadores e previsões inteligentes",
                  ],
                },
                {
                  icon: <FiUsers />,
                  nome: "Gestão Escolar",
                  desc: "Administração completa de alunos, professores e turmas.",
                  funcionalidades: [
                    "Matrículas, notas e presenças online",
                    "Gestão de turmas, horários e disciplinas",
                    "Controle financeiro e mensalidades",
                    "Portal do aluno e professor integrado",
                    "Relatórios automáticos e comunicação interna",
                  ],
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
                  <button
                    className="btn small"
                    onClick={() => setProdutoSelecionado(p)}
                  >
                    Saiba mais
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modal */}
          <AnimatePresence>
            {produtoSelecionado && (
              <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="modal-content"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="modal-close"
                    onClick={() => setProdutoSelecionado(null)}
                  >
                    ✖
                  </button>
                  <div className="modal-header">
                    <div className="icon-large">{produtoSelecionado.icon}</div>
                    <h2>{produtoSelecionado.nome}</h2>
                  </div>
                  <p className="modal-desc">{produtoSelecionado.desc}</p>
                  <h3>Funcionalidades Principais</h3>
                  <ul className="func-list">
                    {produtoSelecionado.funcionalidades.map(
                      (
                        f:
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | ReactPortal
                          | Promise<
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactPortal
                              | ReactElement<
                                  unknown,
                                  string | JSXElementConstructor<any>
                                >
                              | Iterable<ReactNode>
                              | null
                              | undefined
                            >
                          | null
                          | undefined,
                        idx: Key | null | undefined,
                      ) => (
                        <li key={idx}>✅ {f}</li>
                      ),
                    )}
                  </ul>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Olá, quero saber mais sobre o software ${produtoSelecionado.nome}!`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn primary"
                  >
                    Falar com um especialista
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
              Na Origami IT, acreditamos que a tecnologia é o alicerce do
              progresso. Nosso propósito é **simplificar, inovar e transformar**
              o modo como pessoas e empresas interagem com o digital —
              promovendo crescimento sustentável e impacto real em Angola e
              além.
            </p>

            <div className="missao-grid">
              {[
                {
                  icon: "",
                  titulo: "Inovação",
                  texto:
                    "Desenvolvemos soluções inteligentes que antecipam o futuro e impulsionam o crescimento.",
                },
                {
                  icon: "",
                  titulo: "Compromisso",
                  texto:
                    "Trabalhamos com ética, transparência e dedicação, construindo relações sólidas e duradouras.",
                },
                {
                  icon: "",
                  titulo: "Impacto",
                  texto:
                    "Transformamos o cenário digital de Angola com tecnologia acessível.",
                },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  className="missao-card"
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="icon">{m.icon}</div>
                  <h3>{m.titulo}</h3>
                  <p>{m.texto}</p>
                </motion.div>
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
              transition={{ duration: 0.8 }}
            >
              <h2>Quem Somos</h2>
              <p>
                A Origami IT é uma empresa angolana especializada em
                desenvolvimento de software, tecnologia e inovação digital .
              </p>
              <p>
                Nosso foco é a transformação tecnológica das empresas, com
                eficiência, segurança e escalabilidade.
              </p>
            </motion.div>

            <motion.div
              className="sobre-imagem"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/origami.png" alt="Origami IT" />
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
            <h2>Entre em Contato</h2>
            <p>Tem um projeto? Fale connosco, teremos prazer em ajudar.</p>
            <ul className="contact-list">
              <li>
                <FiMapPin /> Rua Cidade de Cabinda, Lobito — Benguela, Angola
              </li>
              <li>
                <FiMail /> origamiitao@gmail.com
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
        </motion.section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Origami IT</p>
        </div>
      </footer>

      {/* Botão fixo WhatsApp */}
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
