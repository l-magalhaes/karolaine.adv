"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "SOBRE", href: "#sobre" },
  { label: "ÁREAS DE ATUAÇÃO", href: "#areas" },
  { label: "ATENDIMENTO", href: "#atendimento" },
  { label: "CONTATO", href: "#contato" },
];

const waLink = "https://wa.me/5544991755173";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/96 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-[76px] flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 flex-shrink-0" onClick={() => setOpen(false)}>
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

        {/* Desktop Navigation */}
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

        {/* Mobile: WhatsApp + Hamburger */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C9A96E" }}
            aria-label="Falar no WhatsApp"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-[5px] w-8 h-8"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span
              className="block h-px bg-white transition-all duration-300 origin-center"
              style={{ width: "22px", transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-px bg-white transition-all duration-300"
              style={{ width: "22px", opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px bg-white transition-all duration-300 origin-center"
              style={{ width: "22px", transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#0D0D0D] border-t border-white/5 overflow-hidden transition-all duration-300 ${open ? "max-h-80" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-4 py-6 gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block transition-colors hover:text-white"
                style={{ fontSize: "0.75rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.7)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
