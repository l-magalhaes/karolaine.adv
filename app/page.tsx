import Image from "next/image";

export default function Home() {
  const navItems = [
    { label: "INÍCIO", href: "#inicio" },
    { label: "SOBRE", href: "#sobre" },
    { label: "ÁREAS DE ATUAÇÃO", href: "#areas" },
    { label: "ATENDIMENTO", href: "#atendimento" },
    { label: "CONTATO", href: "#contato" },
  ];

  const areas = [
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="24" y1="6" x2="24" y2="42" />
          <line x1="18" y1="42" x2="30" y2="42" />
          <line x1="10" y1="14" x2="38" y2="14" />
          <line x1="10" y1="14" x2="10" y2="28" />
          <path d="M6 28 Q10 34 14 28" />
          <line x1="38" y1="14" x2="38" y2="28" />
          <path d="M34 28 Q38 34 42 28" />
        </svg>
      ),
      title: "Direito Civil",
      desc: "Contratos, obrigações, responsabilidade civil e sucessões.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="17" cy="13" r="5" />
          <circle cx="31" cy="13" r="5" />
          <path d="M6 42 C6 33 11 27 17 27" />
          <path d="M42 42 C42 33 37 27 31 27" />
          <circle cx="24" cy="20" r="4" />
          <path d="M16 42 C16 35 19 30 24 30 C29 30 32 35 32 42" />
        </svg>
      ),
      title: "Direito de Família",
      desc: "Divórcio, guarda, alimentos, inventário e adoção.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6,22 24,8 42,22" />
          <rect x="10" y="22" width="28" height="20" rx="1" />
          <rect x="19" y="30" width="10" height="12" />
        </svg>
      ),
      title: "Direito Imobiliário",
      desc: "Compra, venda, locação, usucapião e regularização de imóveis.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6 L38 11 L38 26 C38 34 31 40 24 43 C17 40 10 34 10 26 L10 11 Z" />
          <line x1="24" y1="18" x2="24" y2="28" />
          <circle cx="24" cy="33" r="1.2" fill="currentColor" />
        </svg>
      ),
      title: "Direito Criminal",
      desc: "Defesa criminal, habeas corpus e acompanhamento de inquéritos.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="17" />
          <path d="M18 20 C18 15 30 15 30 20 C30 25 18 25 18 30 C18 35 30 35 30 30" />
          <line x1="24" y1="10" x2="24" y2="13" />
          <line x1="24" y1="35" x2="24" y2="38" />
        </svg>
      ),
      title: "Direito do Consumidor",
      desc: "Proteção ao consumidor, revisão contratual e indenizações.",
    },
  ];

  const waLink = "https://wa.me/5544991755173";

  return (
    <main>
      {/* ─────────────────────────── HEADER ─────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/96 backdrop-blur-sm border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-8 h-[76px] flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <Image src="/logo.png" alt="Karolaine Sorrechio" width={48} height={48} style={{ objectFit: "contain" }} />
            <div className="border-l border-white/20 pl-3">
              <p className="text-white leading-tight" style={{ fontSize: "0.6rem", letterSpacing: "0.25em" }}>
                KAROLAINE SORRECHIO
              </p>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.3em", color: "#C9A96E" }}>
                ADVOGADA
              </p>
            </div>
          </a>

          {/* Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.55)",
                    borderBottom: i === 0 ? "1px solid #C9A96E" : "none",
                    paddingBottom: i === 0 ? "2px" : "0",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>


        </nav>
      </header>

      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section id="inicio" className="bg-[#0D0D0D] relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <div
          className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center"
          style={{ minHeight: "100vh", paddingTop: "76px" }}
        >
          {/* Left content */}
          <div className="py-20">
            {/* Tag */}
            <div className="flex items-center gap-4 mb-10">
              <span style={{ color: "#C9A96E", fontSize: "0.6rem", letterSpacing: "0.35em" }}>
                ADVOCACIA COM EXCELÊNCIA
              </span>
              <div className="w-14 h-px" style={{ background: "#C9A96E" }} />
            </div>

            {/* Heading */}
            <h1
              className="text-white mb-8 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.6rem, 4vw, 4.2rem)", fontWeight: 300 }}
            >
              Estratégia jurídica
              <br />
              que protege o que
              <br />
              <em style={{ color: "#C9A96E", fontStyle: "italic" }}>realmente importa.</em>
            </h1>

            {/* Subtitle */}
            <p className="mb-12 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", maxWidth: "380px" }}>
              Atendimento jurídico personalizado, com soluções
              <br />
              inteligentes, seguras e eficientes.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:border-white/60"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#ffffff",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  padding: "14px 28px",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                FALAR NO WHATSAPP
              </a>
            </div>

            {/* Nacional tag */}
            <div className="flex items-center gap-3">
              <div className="w-px h-8" style={{ background: "#C9A96E" }} />
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", letterSpacing: "0.35em" }}>
                ATENDIMENTO NACIONAL
              </span>
            </div>
          </div>

          {/* Right: placeholder + decorative monogram */}
          <div className="relative flex items-center justify-center py-20">
            {/* Decorative logo */}
            <Image
              src="/logo.png"
              alt=""
              width={380}
              height={380}
              className="absolute select-none pointer-events-none"
              style={{
                opacity: 0.06,
                right: "-3rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 0,
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────── SOBRE ─────────────────────────── */}
      <section id="sobre" className="bg-[#F5F0EB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-2 gap-20 items-center">
            {/* Left content */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span style={{ color: "#C9A96E", fontSize: "0.6rem", letterSpacing: "0.35em" }}>SOBRE</span>
                <div className="w-10 h-px" style={{ background: "#C9A96E" }} />
              </div>
              <h2
                className="leading-tight mb-8"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2rem, 3vw, 3rem)",
                  fontWeight: 400,
                  color: "#1A1A1A",
                }}
              >
                Compromisso, técnica
                <br />e{" "}
                <em style={{ color: "#C9A96E", fontStyle: "italic" }}>dedicação</em> em cada caso.
              </h2>
              <p className="mb-10 leading-relaxed" style={{ color: "#666", fontSize: "0.85rem", maxWidth: "360px" }}>
                Acreditamos que o direito vai além de regras.
                <br />
                Ele transforma realidades e abre caminhos.
              </p>
              <a
                href="#areas"
                className="flex items-center gap-2 w-fit transition-colors hover:text-[#C9A96E]"
                style={{
                  color: "#1A1A1A",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  borderBottom: "1px solid #C9A96E",
                  paddingBottom: "2px",
                }}
              >
                CONHECER MAIS →
              </a>
            </div>

            {/* Right: image + vertical text */}
            <div className="relative">
              {/* Sobre image */}
              <div className="w-full">
                <Image
                  src="/adv.jpeg"
                  alt="Karolaine Sorrechio"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              {/* Vertical text */}
              <div
                className="absolute top-0 bottom-0 flex items-center"
                style={{ right: "-3.5rem", writingMode: "vertical-rl" }}
              >
                <span
                  style={{
                    color: "rgba(0,0,0,0.2)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.4em",
                    transform: "rotate(180deg)",
                  }}
                >
                  ATUAÇÃO É O QUE NOS DEFINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── ÁREAS ─────────────────────────── */}
      <section id="areas" className="bg-[#F5F0EB] pb-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section title */}
          <div className="flex items-center justify-center gap-8 mb-20">
            <div className="flex-1 h-px max-w-[120px]" style={{ background: "rgba(201,169,110,0.4)" }} />
            <span style={{ color: "#C9A96E", fontSize: "0.6rem", letterSpacing: "0.4em" }}>
              ÁREAS DE ATUAÇÃO
            </span>
            <div className="flex-1 h-px max-w-[120px]" style={{ background: "rgba(201,169,110,0.4)" }} />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-5" style={{ borderTop: "1px solid rgba(26,26,26,0.1)" }}>
            {areas.map((area, i) => (
              <div
                key={area.title}
                className="group cursor-pointer"
                style={{
                  padding: "2.5rem 1.5rem",
                  borderRight: i < 4 ? "1px solid rgba(26,26,26,0.1)" : "none",
                }}
              >
                <div className="mb-6" style={{ color: "#C9A96E" }}>
                  {area.icon}
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    color: "#1A1A1A",
                  }}
                >
                  {area.title}
                </h3>
                <p className="mb-8 leading-relaxed" style={{ color: "#777", fontSize: "0.78rem" }}>
                  {area.desc}
                </p>
                <span
                  className="inline-block transition-transform group-hover:translate-x-1"
                  style={{ color: "#C9A96E", fontSize: "1.2rem" }}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── STATS ─────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20 relative overflow-hidden">
        {/* Glow */}
        <div
          className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4">
            {[
              { top: "ATENDIMENTO", bottom: "PERSONALIZADO", gold: false },
              { top: "ÉTICA", bottom: "EM PRIMEIRO LUGAR", gold: false },
              { top: "ATUAÇÃO", bottom: "EM TODO O BRASIL", gold: false },
              { top: "SEGURANÇA", bottom: "JURÍDICA PARA VOCÊ", gold: false }

            ].map((stat, i) => (
              <div
                key={stat.bottom}
                className="text-center py-4"
                style={{
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  padding: "1rem 2rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.4rem",
                    fontWeight: 300,
                    color: stat.gold ? "#C9A96E" : "#ffffff",
                    lineHeight: 1.1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.top}
                </div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.58rem", letterSpacing: "0.3em" }}>
                  {stat.bottom}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── ATENDIMENTO ─────────────────────────── */}
      <section id="atendimento" className="bg-[#F5F0EB] py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span style={{ color: "#C9A96E", fontSize: "0.6rem", letterSpacing: "0.3em" }}>
                ATENDIMENTO PERSONALIZADO
              </span>
              <div className="w-10 h-px" style={{ background: "#C9A96E" }} />
            </div>
            <h2
              className="leading-tight mb-6"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontWeight: 400,
                color: "#1A1A1A",
              }}
            >
              Seu caso merece
              <br />
              uma atuação <em style={{ color: "#C9A96E", fontStyle: "italic" }}>estratégica.</em>
            </h2>
            <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "340px" }}>
              Vamos entender sua necessidade
              <br />e encontrar o melhor caminho juntos.
            </p>
          </div>

          {/* Right: action cards */}
          <div className="grid grid-cols-1 gap-5" style={{ maxWidth: "320px" }}>
            {[{
                icon: (
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                title: "FALAR NO WHATSAPP",
                desc: "Respostas rápidas e personalizadas.",
                href: waLink,
              },
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-4 transition-colors hover:bg-[#E5DFD8]"
                style={{ background: "#EDE8E3", padding: "2rem 1.75rem" }}
              >
                <div style={{ color: "#C9A96E" }}>{card.icon}</div>
                <div>
                  <p className="mb-2" style={{ color: "#1A1A1A", fontSize: "0.6rem", letterSpacing: "0.2em", fontWeight: 600 }}>
                    {card.title}
                  </p>
                  <p style={{ color: "#777", fontSize: "0.78rem", lineHeight: 1.6 }}>{card.desc}</p>
                </div>
                <span
                  className="mt-auto inline-block transition-transform group-hover:translate-x-1"
                  style={{ color: "#C9A96E", fontSize: "1.2rem" }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FOOTER ─────────────────────────── */}
      <footer id="contato" className="bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
          {/* Main grid */}
          <div className="grid grid-cols-4 gap-12 mb-14">
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Image src="/logo.png" alt="Karolaine Sorrechio" width={48} height={48} style={{ objectFit: "contain" }} />
              </div>
              <p className="text-white leading-tight mb-1" style={{ fontSize: "0.6rem", letterSpacing: "0.25em" }}>
                KAROLAINE SORRECHIO
              </p>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.3em", color: "#C9A96E" }}>ADVOGADA</p>
            </div>

            {/* Col 2: Links */}
            <div>
              <p className="mb-6 text-white" style={{ fontSize: "0.6rem", letterSpacing: "0.3em" }}>
                LINKS
              </p>
              <ul className="space-y-3">
                {["Início", "Sobre", "Áreas de atuação", "Atendimento", "Contato"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <p className="mb-6 text-white" style={{ fontSize: "0.6rem", letterSpacing: "0.3em" }}>
                CONTATO
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  (44) 99175-5173
                </li>
                <li className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                 karolainesorrechio.adv@outlook.com
                </li>
                <li className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  Paiçandu/PR e Maringa/PR
                </li>
              </ul>
            </div>

            {/* Col 4: Social */}
            <div>
              <p className="mb-6 text-white" style={{ fontSize: "0.6rem", letterSpacing: "0.3em" }}>
                REDES SOCIAIS
              </p>
              <ul className="space-y-4">
                <li
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                  @karolainesorrechio.adv
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex justify-between items-center pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
              © 2026 Karolaine Sorrechio Advocacia. Todos os direitos reservados.
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
              OAB/PR 121.088
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
