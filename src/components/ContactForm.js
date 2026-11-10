"use client";

import { useEffect, useMemo, useState } from "react";

const messageLabels = {
  es: ["Hola, me gustaría recibir información para visitar Tambopata.", "Nombre", "País", "Programa o tour", "Habitación", "Fecha aproximada", "Viajeros"],
  en: ["Hello, I would like information about visiting Tambopata.", "Name", "Country", "Program or tour", "Room", "Approximate date", "Travelers"],
  it: ["Ciao, vorrei ricevere informazioni per visitare Tambopata.", "Nome", "Paese", "Programma o tour", "Camera", "Data approssimativa", "Viaggiatori"],
  fr: ["Bonjour, je souhaiterais recevoir des informations pour visiter Tambopata.", "Nom", "Pays", "Programme ou excursion", "Chambre", "Date approximative", "Voyageurs"],
  "zh-cn": ["您好，我想了解前往坦博帕塔旅行的信息。", "姓名", "国家", "项目或行程", "房型", "预计日期", "旅行人数"],
};
const emailSubjects = {
  es: "Consulta de viaje a Tambopata",
  en: "Tambopata travel inquiry",
  it: "Richiesta di viaggio a Tambopata",
  fr: "Demande de voyage à Tambopata",
  "zh-cn": "坦博帕塔旅行咨询",
};
const consent = {
  es: ["He leído y acepto los", "términos del servicio", "la", "política de cancelación", "y la", "política de privacidad"],
  en: ["I have read and accept the", "terms of service", "the", "cancellation policy", "and the", "privacy policy"],
  it: ["Ho letto e accetto i", "termini del servizio", "la", "politica di cancellazione", "e la", "politica sulla privacy"],
  fr: ["J’ai lu et j’accepte les", "conditions de service", "la", "politique d’annulation", "et la", "politique de confidentialité"],
  "zh-cn": ["我已阅读并接受", "服务条款", "", "取消政策", "和", "隐私政策"],
};

export default function ContactForm({ language, content }) {
  const [minimumDate, setMinimumDate] = useState("");
  const [preparedMessage, setPreparedMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const labels = messageLabels[language] || messageLabels.es;
  const consentText = consent[language] || consent.es;

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    setMinimumDate(`${year}-${month}-${day}`);
  }, []);

  const experienceValues = useMemo(() => ["", "programa-4-dias", "lago-sandoval", "rio-tambopata", "fauna", "cultura", "caminata-nocturna", "otra"], []);
  const roomValues = useMemo(() => ["", "individual", "doble", "matrimonial", "triple", "por-confirmar"], []);

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const experience = event.currentTarget.elements.experiencia.selectedOptions[0].text;
    const room = event.currentTarget.elements.habitacion.selectedOptions[0].text;
    const message = [
      labels[0],
      `${labels[1]}: ${data.get("nombre")}`,
      `${labels[2]}: ${data.get("pais")}`,
      `${labels[3]}: ${experience}`,
      `${labels[4]}: ${room}`,
      `${labels[5]}: ${data.get("fecha")}`,
      `${labels[6]}: ${data.get("viajeros")}`,
    ].join("\n");
    setPreparedMessage(message);
    const subject = encodeURIComponent(emailSubjects[language] || emailSubjects.es);
    window.location.href = `mailto:shapingotoursperu@gmail.com?subject=${subject}&body=${encodeURIComponent(message)}`;
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(preparedMessage);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>{content.labels[0]}<input type="text" name="nombre" autoComplete="name" required /></label>
        <label>{content.labels[1]}<select className="experience-select" name="experiencia" required>{content.experienceOptions.map((option, index) => <option key={experienceValues[index] || "empty"} value={experienceValues[index]}>{option}</option>)}</select></label>
        <label>{content.labels[2]}<input type="text" name="pais" autoComplete="country-name" required /></label>
        <label>{content.labels[3]}<select className="room-select" name="habitacion" required>{content.roomOptions.map((option, index) => <option key={roomValues[index] || "empty"} value={roomValues[index]}>{option}</option>)}</select></label>
        <label>{content.labels[4]}<input type="date" name="fecha" min={minimumDate} required /></label>
        <label>{content.labels[5]}<input type="number" name="viajeros" min="1" max="30" defaultValue="2" required /></label>
      </div>
      <label className="consent-label">
        <input type="checkbox" name="acepta_condiciones" required />
        <span className="consent-copy">
          {consentText[0]} <a href={`/${language}/legal/#terminos`}>{consentText[1]}</a>, {consentText[2]} <a href={`/${language}/legal/#cancelacion`}>{consentText[3]}</a> {consentText[4]} <a href={`/${language}/legal/#privacidad`}>{consentText[5]}</a>.
        </span>
      </label>
      <div className="form-actions">
        <button className="form-submit" type="submit">{content.submit} <span aria-hidden="true">↗</span></button>
        <p className="form-note">{content.note}</p>
      </div>
      {preparedMessage && (
        <div className="form-result">
          <p>{content.ready}</p>
          <textarea rows="9" readOnly value={preparedMessage} aria-label={content.ready} />
          <button className="copy-message" type="button" onClick={copyMessage}>{content.copyButton}</button>
          <span className="copy-status" role="status" aria-live="polite">{copied ? "✓" : ""}</span>
        </div>
      )}
    </form>
  );
}
