"use client";

import { useEffect, useMemo, useState } from "react";

const messageLabels = {
  es: ["Hola, me gustaría recibir información para visitar Tambopata.", "Nombre", "País", "Programa o tour", "Habitación", "Fecha aproximada", "Viajeros", "Correo electrónico"],
  en: ["Hello, I would like information about visiting Tambopata.", "Name", "Country", "Program or tour", "Room", "Approximate date", "Travelers", "Email address"],
  it: ["Ciao, vorrei ricevere informazioni per visitare Tambopata.", "Nome", "Paese", "Programma o tour", "Camera", "Data approssimativa", "Viaggiatori", "Indirizzo email"],
  fr: ["Bonjour, je souhaiterais recevoir des informations pour visiter Tambopata.", "Nom", "Pays", "Programme ou excursion", "Chambre", "Date approximative", "Voyageurs", "Adresse e-mail"],
  "zh-cn": ["您好，我想了解前往坦博帕塔旅行的信息。", "姓名", "国家", "项目或行程", "房型", "预计日期", "旅行人数", "电子邮箱"],
  de: ["Guten Tag, ich möchte Informationen zu einer Reise nach Tambopata.", "Name", "Land", "Programm oder Tour", "Zimmer", "Ungefährer Termin", "Reisende", "E-Mail-Adresse"],
};
const consent = {
  es: ["He leído y acepto los", "términos del servicio", "la", "política de cancelación", "y la", "política de privacidad"],
  en: ["I have read and accept the", "terms of service", "the", "cancellation policy", "and the", "privacy policy"],
  it: ["Ho letto e accetto i", "termini del servizio", "la", "politica di cancellazione", "e la", "politica sulla privacy"],
  fr: ["J’ai lu et j’accepte les", "conditions de service", "la", "politique d’annulation", "et la", "politique de confidentialité"],
  "zh-cn": ["我已阅读并接受", "服务条款", "", "取消政策", "和", "隐私政策"],
  de: ["Ich habe die", "Nutzungsbedingungen", "die", "Stornierungsbedingungen", "und die", "Datenschutzerklärung"],
};
const whatsappNumber = "51917906162";
const contactEmail = "shapingotoursperu@gmail.com";
const formEndpoint = "/api/contact/";
const formStatus = {
  es: { sending: "Enviando consulta…", error: "No pudimos enviar la consulta automáticamente. Puedes abrir el mensaje en WhatsApp." },
  en: { sending: "Sending your inquiry…", error: "We could not send your inquiry automatically. You can open the message in WhatsApp." },
  it: { sending: "Invio della richiesta…", error: "Non siamo riusciti a inviare la richiesta automaticamente. Puoi aprire il messaggio su WhatsApp." },
  fr: { sending: "Envoi de votre demande…", error: "Nous n’avons pas pu envoyer votre demande automatiquement. Vous pouvez ouvrir le message dans WhatsApp." },
  "zh-cn": { sending: "正在发送咨询…", error: "无法自动发送咨询。您可以在邮件应用中打开准备好的内容。" },
  de: { sending: "Anfrage wird gesendet…", error: "Die Anfrage konnte nicht automatisch gesendet werden. Sie können die Nachricht über WhatsApp öffnen." },
};
const extraLabels = {
  es: { phone: "WhatsApp o teléfono", message: "¿Qué te gustaría conocer?", messagePlaceholder: "Cuéntanos tus intereses, dudas o necesidades especiales.", optional: "Opcional" },
  en: { phone: "WhatsApp or phone", message: "What would you like to discover?", messagePlaceholder: "Tell us about your interests, questions, or special requirements.", optional: "Optional" },
  it: { phone: "WhatsApp o telefono", message: "Cosa vorresti scoprire?", messagePlaceholder: "Raccontaci i tuoi interessi, dubbi o esigenze particolari.", optional: "Facoltativo" },
  fr: { phone: "WhatsApp ou téléphone", message: "Que souhaitez-vous découvrir ?", messagePlaceholder: "Parlez-nous de vos intérêts, questions ou besoins particuliers.", optional: "Facultatif" },
  "zh-cn": { phone: "WhatsApp 或电话", message: "您想了解什么？", messagePlaceholder: "请告诉我们您的兴趣、问题或特殊需求。", optional: "选填" },
  de: { phone: "WhatsApp oder Telefon", message: "Was möchten Sie wissen?", messagePlaceholder: "Teilen Sie uns Ihre Interessen, Fragen oder besonderen Bedürfnisse mit.", optional: "Optional" },
};

export default function ContactForm({ language, content }) {
  const [minimumDate, setMinimumDate] = useState("");
  const [preparedMessage, setPreparedMessage] = useState("");
  const [preparedHref, setPreparedHref] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle");
  const labels = messageLabels[language] || messageLabels.es;
  const consentText = consent[language] || consent.es;
  const extras = extraLabels[language] || extraLabels.es;

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setMinimumDate(`${year}-${month}-${day}`);
  }, []);

  const experienceValues = useMemo(() => ["", "programa-4-dias", "lago-sandoval", "rio-tambopata", "fauna-aves", "encuentro-amazonico", "caminata-nocturna", "colpa", "paseo-kayak", "sabores-comunidad", "lago-yacumama", "collpa-loros", "otra"], []);
  const roomValues = useMemo(() => ["", "individual", "doble", "matrimonial", "triple", "recomendacion"], []);

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const experience = form.elements.experiencia.selectedOptions[0].text;
    const message = [
      labels[0],
      `${labels[1]}: ${data.get("nombre")}`,
      `${labels[7]}: ${data.get("correo")}`,
      `${labels[2]}: ${data.get("pais")}`,
      `${extras.phone}: ${data.get("telefono") || extras.optional}`,
      `${labels[3]}: ${experience}`,
      `${labels[4]}: ${form.elements.habitacion.selectedOptions[0].text || extras.optional}`,
      `${labels[5]}: ${data.get("fecha")}`,
      `${labels[6]}: ${data.get("viajeros")}`,
      `${extras.message}: ${data.get("mensaje") || extras.optional}`,
    ].join("\n");
    const href = language === "zh-cn"
      ? `mailto:${contactEmail}?subject=${encodeURIComponent(`${experience} · Shapingo Turs`)}&body=${encodeURIComponent(message)}`
      : `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setStatus("sending");
    setPreparedMessage("");
    setPreparedHref("");

    if (data.get("_honey")) {
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("nombre"),
          email: data.get("correo"),
          country: data.get("pais"),
          phone: data.get("telefono"),
          experience: data.get("experiencia"),
          room: data.get("habitacion"),
          date: data.get("fecha"),
          travelers: data.get("viajeros"),
          message: data.get("mensaje"),
          language,
          website: data.get("_honey"),
          consent: data.get("acepta_condiciones") === "on",
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) throw new Error("Form submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setPreparedMessage(message);
      setPreparedHref(href);
      setStatus("error");
    }
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(preparedMessage);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <form className="contact-form" onSubmit={submit} onChange={() => { if (status !== "sending") { setStatus("idle"); setPreparedMessage(""); setPreparedHref(""); } }} aria-busy={status === "sending"}>
      <div className="form-grid">
        <label>{content.labels[0]}<input type="text" name="nombre" autoComplete="name" required /></label>
        <label>{labels[7]}<input type="email" name="correo" autoComplete="email" required /></label>
        <label>{content.labels[2]}<input type="text" name="pais" autoComplete="country-name" required /></label>
        <label>{extras.phone} <small>{extras.optional}</small><input type="tel" name="telefono" autoComplete="tel" /></label>
        <label>{content.labels[1]}<select className="experience-select" name="experiencia" required>{content.experienceOptions.map((option, index) => <option key={experienceValues[index] || "empty"} value={experienceValues[index]}>{option}</option>)}</select></label>
        <label>{content.labels[3]} <small>{extras.optional}</small><select name="habitacion">{content.roomOptions.map((option, index) => <option key={roomValues[index] || "empty"} value={roomValues[index]}>{option}</option>)}</select></label>
        <label>{content.labels[4]}<input type="date" name="fecha" min={minimumDate} required /></label>
        <label>{content.labels[5]}<input type="number" name="viajeros" min="1" max="30" defaultValue="2" required /></label>
      </div>
      <label>{extras.message} <small>{extras.optional}</small><textarea name="mensaje" rows="4" maxLength="1500" placeholder={extras.messagePlaceholder} /></label>
      <label className="consent-label">
        <input type="checkbox" name="acepta_condiciones" required />
        <span className="consent-copy">
          {consentText[0]} <a href={`/${language}/legal/#terminos`}>{consentText[1]}</a>, {consentText[2]} <a href={`/${language}/legal/#cancelacion`}>{consentText[3]}</a> {consentText[4]} <a href={`/${language}/legal/#privacidad`}>{consentText[5]}</a>.
        </span>
      </label>
      <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <div className="form-actions">
        <button className="form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? formStatus[language]?.sending || formStatus.es.sending : content.submit} <span aria-hidden="true">↗</span></button>
        <p className="form-note">{content.note}</p>
      </div>
      {status === "sent" && <p className="form-success" role="status">{content.ready}</p>}
      {status === "error" && preparedMessage && (
        <div className="form-result">
          <p className="form-error" role="alert">{formStatus[language]?.error || formStatus.es.error}</p>
          <textarea rows="9" readOnly value={preparedMessage} aria-label={content.ready} />
          <a className="open-message" href={preparedHref} target="_blank" rel="noopener noreferrer">{content.openButton} <span aria-hidden="true">↗</span></a>
          <button className="copy-message" type="button" onClick={copyMessage}>{content.copyButton}</button>
          <span className="copy-status">{copied ? "✓" : ""}</span>
        </div>
      )}
    </form>
  );
}
