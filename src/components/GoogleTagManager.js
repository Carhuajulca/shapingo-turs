"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const containerId = "GTM-5T94L74C";
const storageKey = "shapingo-analytics-consent-v1";
const copy = {
  es: { eyebrow: "Tu privacidad", title: "Tú decides sobre la analítica.", body: "Usamos almacenamiento necesario para recordar tu elección. Google Tag Manager solo se activa si aceptas la analítica.", accept: "Aceptar analítica", reject: "Solo necesarias", settings: "Privacidad", policy: "Ver política de privacidad" },
  en: { eyebrow: "Your privacy", title: "You decide about analytics.", body: "We use necessary storage to remember your choice. Google Tag Manager is only enabled if you accept analytics.", accept: "Accept analytics", reject: "Necessary only", settings: "Privacy", policy: "View privacy policy" },
  it: { eyebrow: "La tua privacy", title: "Sei tu a decidere sull’analisi.", body: "Usiamo l’archiviazione necessaria per ricordare la tua scelta. Google Tag Manager si attiva solo se accetti l’analisi.", accept: "Accetta analisi", reject: "Solo necessari", settings: "Privacy", policy: "Vedi informativa sulla privacy" },
  fr: { eyebrow: "Votre vie privée", title: "Vous décidez pour les statistiques.", body: "Nous utilisons le stockage nécessaire pour mémoriser votre choix. Google Tag Manager ne s’active que si vous acceptez les statistiques.", accept: "Accepter les statistiques", reject: "Nécessaires uniquement", settings: "Confidentialité", policy: "Voir la politique de confidentialité" },
  "zh-cn": { eyebrow: "您的隐私", title: "分析工具由您决定。", body: "我们仅使用必要的本地存储来记住您的选择。只有在您同意后，Google Tag Manager 才会启用。", accept: "接受分析", reject: "仅必要功能", settings: "隐私", policy: "查看隐私政策" },
  de: { eyebrow: "Ihre Privatsphäre", title: "Sie entscheiden über die Analyse.", body: "Wir speichern Ihre Auswahl lokal. Google Tag Manager wird nur aktiviert, wenn Sie der Analyse zustimmen.", accept: "Analyse erlauben", reject: "Nur notwendige Funktionen", settings: "Datenschutz", policy: "Datenschutzerklärung ansehen" },
};

function denyGoogleConsent() {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  }
}

export default function GoogleTagManager({ language = "es" }) {
  const [choice, setChoice] = useState(null);
  const [open, setOpen] = useState(false);
  const text = copy[language] || copy.es;

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === "accepted" || saved === "rejected") setChoice(saved);
      else setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  function save(nextChoice) {
    if (choice === "accepted" && nextChoice === "rejected") denyGoogleConsent();
    try { window.localStorage.setItem(storageKey, nextChoice); } catch {}
    setChoice(nextChoice);
    setOpen(false);
  }

  return <>
    {choice === "accepted" && <Script id="google-tag-manager" strategy="afterInteractive">{`
      window.dataLayer=window.dataLayer||[];
      window.gtag=window.gtag||function(){dataLayer.push(arguments);};
      window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${containerId}');
    `}</Script>}
    {open && <section className="privacy-consent" role="dialog" aria-modal="false" aria-labelledby="privacy-consent-title" aria-describedby="privacy-consent-copy">
      <div className="privacy-consent-copy">
        <p className="privacy-consent-eyebrow">{text.eyebrow}</p>
        <h2 id="privacy-consent-title">{text.title}</h2>
        <p id="privacy-consent-copy">{text.body}</p>
        <a href={`/${language}/legal/#privacidad`}>{text.policy} <span aria-hidden="true">↗</span></a>
      </div>
      <div className="privacy-consent-actions">
        <button className="privacy-consent-accept" type="button" onClick={() => save("accepted")}>{text.accept}</button>
        <button className="privacy-consent-reject" type="button" onClick={() => save("rejected")}>{text.reject}</button>
      </div>
    </section>}
    {!open && choice && <button className="privacy-settings" type="button" onClick={() => setOpen(true)}>{text.settings}</button>}
  </>;
}
