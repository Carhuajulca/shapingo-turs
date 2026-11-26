import OptimizedImage from "@/components/OptimizedImage";

const accessibility = {
  es: { home: "Inicio de Shapingo Turs", whatsapp: "WhatsApp de Shapingo Turs", instagram: "Instagram de Shapingo Turs", email: "Enviar correo a Shapingo Turs" },
  en: { home: "Shapingo Turs home", whatsapp: "Shapingo Turs on WhatsApp", instagram: "Shapingo Turs on Instagram", email: "Email Shapingo Turs" },
  it: { home: "Home di Shapingo Turs", whatsapp: "Shapingo Turs su WhatsApp", instagram: "Shapingo Turs su Instagram", email: "Invia un’e-mail a Shapingo Turs" },
  fr: { home: "Accueil de Shapingo Turs", whatsapp: "Shapingo Turs sur WhatsApp", instagram: "Shapingo Turs sur Instagram", email: "Envoyer un e-mail à Shapingo Turs" },
  "zh-cn": { home: "Shapingo Turs 首页", whatsapp: "通过 WhatsApp 联系 Shapingo Turs", instagram: "Shapingo Turs 的 Instagram", email: "给 Shapingo Turs 发送邮件" },
  de: { home: "Shapingo Turs Startseite", whatsapp: "Shapingo Turs auf WhatsApp", instagram: "Shapingo Turs auf Instagram", email: "E-Mail an Shapingo Turs" },
};

export default function Footer({ language = "es", content }) {
  const base = `/${language}/`;
  const a11y = accessibility[language] || accessibility.es;
  return (
    <footer className="footer">
      <a className="footer-brand" href={base} aria-label={a11y.home}>
        <OptimizedImage src="/img/shapingo-turs-logo.webp" alt="Shapingo Turs" width="217" height="73" />
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
        <div className="footer-socials">
          <a className="footer-social-whatsapp" href="https://wa.me/51917906162" target="_blank" rel="noopener noreferrer" aria-label={a11y.whatsapp} title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
          <a className="footer-social-instagram" href="https://www.instagram.com/shapingotoursperu/" target="_blank" rel="noopener noreferrer" aria-label={a11y.instagram} title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.03.084c-1.277.06-2.149.264-2.911.563-.789.308-1.458.72-2.123 1.388C1.331 2.702.92 3.371.615 4.162.32 4.926.12 5.799.064 7.076.007 8.353-.005 8.764.001 12.023c.006 3.258.021 3.667.083 4.947.061 1.277.264 2.148.563 2.911.308.789.72 1.457 1.388 2.123.668.665 1.337 1.074 2.129 1.38.763.295 1.636.496 2.913.552 1.277.056 1.688.069 4.946.063 3.258-.006 3.668-.021 4.948-.082 1.28-.061 2.147-.265 2.91-.563.789-.309 1.458-.72 2.123-1.388.665-.668 1.074-1.338 1.379-2.128.296-.763.497-1.636.552-2.913.056-1.28.069-1.689.063-4.947-.006-3.259-.021-3.667-.082-4.947-.061-1.28-.264-2.149-.563-2.912-.308-.789-.72-1.457-1.388-2.123-.668-.666-1.338-1.075-2.128-1.379-.764-.296-1.636-.497-2.913-.552C15.647.009 15.236-.005 11.977.001 8.718.008 8.31.022 7.03.084Zm.14 21.693c-1.17-.051-1.805-.245-2.228-.408-.561-.216-.96-.477-1.382-.895-.422-.418-.681-.819-.9-1.378-.164-.423-.362-1.058-.417-2.228-.06-1.264-.072-1.644-.079-4.848-.007-3.204.005-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.476-.96.895-1.381.419-.422.818-.682 1.378-.901.423-.165 1.058-.361 2.227-.417 1.266-.06 1.645-.072 4.848-.079 3.203-.007 3.584.005 4.85.061 1.169.051 1.805.245 2.228.408.561.216.96.475 1.382.895.422.419.682.818.901 1.379.165.422.361 1.056.417 2.226.06 1.266.073 1.645.079 4.848.006 3.203-.006 3.583-.061 4.848-.051 1.17-.245 1.805-.408 2.229-.216.56-.476.96-.895 1.381-.419.422-.818.682-1.378.9-.422.165-1.058.362-2.226.418-1.266.059-1.645.071-4.849.078-3.204.007-3.582-.006-4.848-.061ZM16.953 5.586a1.44 1.44 0 1 0 1.437-1.442 1.44 1.44 0 0 0-1.437 1.442ZM5.839 12.012a6.162 6.162 0 1 0 12.323-.024 6.162 6.162 0 0 0-12.323.024ZM8 12.008a4 4 0 1 1 8-.016 4 4 0 0 1-8 .016Z"/></svg>
          </a>
          <a className="footer-social-email" href="mailto:shapingotoursperu@gmail.com" aria-label={a11y.email} title={a11y.email}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>
          </a>
        </div>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
