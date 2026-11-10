export default function Footer({ language = "es", content }) {
  const base = `/${language}/`;
  return (
    <footer className="footer">
      <a className="footer-brand" href={base} aria-label="Shapingo Turs inicio">
        <img src="/Shapingo log.svg" alt="Shapingo Turs" width="120" height="55" />
      </a>
      <div className="footer-copy"><strong>{content.title}</strong><span>{content.location}</span></div>
      <div className="footer-links">
        <a href={`${base}#experiencias`}>{content.links[0]}</a>
        <a href={`${base}#nosotros`}>{content.links[1]}</a>
        <a href={`${base}#contacto`}>{content.links[2]}</a>
        <a href={`/${language}/legal/#terminos`}>{content.links[3]}</a>
        <a href={`/${language}/legal/`}>{content.links[4]}</a>
      </div>
      <div className="footer-contact">
        <a href="https://wa.me/51926284415" target="_blank" rel="noopener noreferrer">WhatsApp · +51 926 284 415</a><a href="mailto:shapingotoursperu@gmail.com">shapingotoursperu@gmail.com</a>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
