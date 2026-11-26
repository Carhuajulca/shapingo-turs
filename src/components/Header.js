"use client";

import { useEffect, useRef, useState } from "react";
import OptimizedImage from "@/components/OptimizedImage";

const languages = [
  { id: "es", code: "ES", name: "Español" },
  { id: "en", code: "EN", name: "English" },
  { id: "it", code: "IT", name: "Italiano" },
  { id: "fr", code: "FR", name: "Français" },
  { id: "zh-cn", code: "ZH", name: "中文" },
  { id: "de", code: "DE", name: "Deutsch" },
];
const accessibility = {
  es: { nav: "Navegación principal", home: "Inicio de Shapingo Turs", open: "Abrir menú", close: "Cerrar menú", select: "Seleccionar idioma", available: "Idiomas disponibles" },
  en: { nav: "Main navigation", home: "Shapingo Turs home", open: "Open menu", close: "Close menu", select: "Select language", available: "Available languages" },
  it: { nav: "Navigazione principale", home: "Home di Shapingo Turs", open: "Apri menu", close: "Chiudi menu", select: "Seleziona lingua", available: "Lingue disponibili" },
  fr: { nav: "Navigation principale", home: "Accueil de Shapingo Turs", open: "Ouvrir le menu", close: "Fermer le menu", select: "Choisir la langue", available: "Langues disponibles" },
  "zh-cn": { nav: "主导航", home: "Shapingo Turs 首页", open: "打开菜单", close: "关闭菜单", select: "选择语言", available: "可用语言" },
  de: { nav: "Hauptnavigation", home: "Shapingo Turs Startseite", open: "Menü öffnen", close: "Menü schließen", select: "Sprache wählen", available: "Verfügbare Sprachen" },
};

export default function Header({ language = "es", nav, currentPath = "/", contactLabel = "Consultar", contactHref }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const pickerRef = useRef(null);
  const current = languages.find((item) => item.id === language) || languages[0];
  const a11y = accessibility[language] || accessibility.es;
  const base = `/${language}/`;

  useEffect(() => {
    const close = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) setLanguagesOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  return (
    <nav className="nav" aria-label={a11y.nav}>
      <a className="brand" href={base} aria-label={a11y.home}>
        <OptimizedImage className="brand-mark" src="/img/shapingo-turs-logo.webp" alt="Shapingo Turs" width="217" height="73" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="nav-panel"
        aria-label={menuOpen ? a11y.close : a11y.open}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <div className={`nav-panel${menuOpen ? " is-open" : ""}`} id="nav-panel">
        <div className="nav-links">
          <a href={`${base}#experiencias`} onClick={() => setMenuOpen(false)}>{nav[0]}</a>
          <a href={`${base}#destino`} onClick={() => setMenuOpen(false)}>{nav[1]}</a>
          <a href={`${base}#nosotros`} onClick={() => setMenuOpen(false)}>{nav[2]}</a>
          <a href={`${base}#contacto`} onClick={() => setMenuOpen(false)}>{nav[3]}</a>
        </div>
        <a className="nav-contact" href={contactHref || `${base}#contacto`} target={contactHref ? "_blank" : undefined} rel={contactHref ? "noopener noreferrer" : undefined} onClick={() => setMenuOpen(false)}>{contactLabel}<span aria-hidden="true">↗</span></a>
        <div className="language-picker" ref={pickerRef}>
          <button
            className="lang-trigger"
            type="button"
            aria-expanded={languagesOpen}
            aria-controls="language-menu"
            aria-label={`${a11y.select}. ${current.name}`}
            onClick={() => setLanguagesOpen((value) => !value)}
          >
            <svg className="lang-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.7 8.6 8.7 12s1.1 6.2 3.3 8.5" /></svg>
            <span className="lang-current-code">{current.code}</span>
            <span className="lang-current-name">{current.name}</span>
            <svg className="lang-chevron" viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5" /></svg>
          </button>
          <div className="lang-menu" id="language-menu" role="menu" aria-label={a11y.available} hidden={!languagesOpen}>
            {languages.map((item) => (
              <a
                key={item.id}
                className="language-menu-link"
                role="menuitemradio"
                aria-checked={item.id === language}
                href={`/${item.id}${currentPath}`}
              >
                <span className="lang-option-code">{item.code}</span><span>{item.name}</span><span className="lang-check" aria-hidden="true">✓</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
