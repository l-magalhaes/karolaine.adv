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
      desc: "Questões contratuais, obrigação, responsabilidade civil, família e sucessões.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M30 6 H12 C10.9 6 10 6.9 10 8 V40 C10 41.1 10.9 42 12 42 H36 C37.1 42 38 41.1 38 40 V14 L30 6 Z" />
          <polyline points="30,6 30,14 38,14" />
          <line x1="17" y1="22" x2="31" y2="22" />
          <line x1="17" y1="28" x2="31" y2="28" />
          <line x1="17" y1="34" x2="24" y2="34" />
        </svg>
      ),
      title: "Direito Previdenciário",
      desc: "Aposentadorias, benefícios e planejamento previdenciário.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14 V11 C19 9.9 21 9 24 9 C27 9 29 9.9 29 11 V14" />
          <rect x="7" y="14" width="34" height="24" rx="2" />
          <line x1="7" y1="26" x2="41" y2="26" />
        </svg>
      ),
      title: "Direito Empresarial",
      desc: "Assessoria jurídica para empresas, contratos, societário e consultivo.",
    },
    {
      icon: (
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="14" r="7" />
          <path d="M10 44 C10 34 16 28 24 28 C32 28 38 34 38 44" />
        </svg>
      ),
      title: "Direito Trabalhista",
      desc: "Defesa de empregadores e empregados, consultivo e contencioso.",
    },
  ];

  const waLink = "https://wa.me/5541999999999";

  return (
    <main>
      {/* ─────────────────────────── HEADER ─────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/96 backdrop-blur-sm border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-8 h-[76px] flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "2.6rem",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#C9A96E",
                lineHeight: 1,
              }}
            >
              KS
            </span>
            <div className="border-l border-white/20 pl-3">
              <p className="text-white leading-tight" style={{ fontSize: "0.6rem", letterSpacing: "0.25em" }}>
                KAROLAINE SORRECHIO
              </p>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.3em", color: "#C9A96E" }}>
                ADVOCADA
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

          {/* CTA */}
          <a
            href="#atendimento"
            className="hidden lg:flex items-center flex-shrink-0 transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0D0D0D]"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "#C9A96E",
              border: "1px solid #C9A96E",
              padding: "10px 22px",
            }}
          >
            AGENDAR CONSULTA
          </a>
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
                href="#atendimento"
                className="flex items-center gap-2 transition-colors hover:bg-[#d4b87a]"
                style={{
                  background: "#C9A96E",
                  color: "#0D0D0D",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  padding: "14px 28px",
                }}
              >
                AGENDAR CONSULTA <span style={{ fontSize: "1rem" }}>›</span>
              </a>
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
            {/* Decorative KS */}
            <span
              className="absolute select-none pointer-events-none"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "20rem",
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(201,169,110,0.06)",
                lineHeight: 1,
                right: "-3rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 0,
              }}
            >
              KS
            </span>
            {/* Image placeholder */}
            <div
              className="relative z-10 w-full flex flex-col items-center justify-center gap-3"
              style={{
                maxWidth: "420px",
                aspectRatio: "3/4",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21,15 16,10 5,21" />
              </svg>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.65rem", letterSpacing: "0.3em" }}>
                FOTO DA ADVOGADA
              </span>
            </div>
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
              {/* Image placeholder */}
              <div
                className="w-full flex flex-col items-center justify-center gap-3"
                style={{ aspectRatio: "4/3", background: "#DDD8D1" }}
              >
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="1" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21,15 16,10 5,21" />
                </svg>
                <span style={{ color: "rgba(0,0,0,0.25)", fontSize: "0.65rem", letterSpacing: "0.3em" }}>
                  IMAGEM
                </span>
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
          <div className="grid grid-cols-4" style={{ borderTop: "1px solid rgba(26,26,26,0.1)" }}>
            {areas.map((area, i) => (
              <div
                key={area.title}
                className="group cursor-pointer"
                style={{
                  padding: "2.5rem 2rem",
                  borderRight: i < 3 ? "1px solid rgba(26,26,26,0.1)" : "none",
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
              { top: "+300", bottom: "CLIENTES ATENDIDOS", gold: true },
              { top: "+5 ANOS", bottom: "DE EXPERIÊNCIA", gold: true },
              { top: "ATENDIMENTO", bottom: "PERSONALIZADO", gold: false },
              { top: "ATUAÇÃO", bottom: "EM TODO O BRASIL", gold: false },
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
          <div className="grid grid-cols-2 gap-5">
            {[
              {
                icon: (
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="8" y1="14" x2="16" y2="14" />
                    <line x1="8" y1="18" x2="12" y2="18" />
                  </svg>
                ),
                title: "AGENDAR CONSULTA",
                desc: "Atendimento individual e estratégico.",
                href: "#contato",
              },
              {
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
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.6rem",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "#C9A96E",
                    lineHeight: 1,
                  }}
                >
                  KS
                </span>
              </div>
              <p className="text-white leading-tight mb-1" style={{ fontSize: "0.6rem", letterSpacing: "0.25em" }}>
                KAROLAINE SORRECHIO
              </p>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.3em", color: "#C9A96E" }}>ADVOCADA</p>
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
                  (41) 99999-9999
                </li>
                <li className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                  contato@karlainesorrechio.adv.br
                </li>
                <li className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="flex-shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  Curitiba/PR
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
                  @karlainesorrechio.adv
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Karolaine Sorrechio Advocacia
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
              OAB/PR 00.000
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
