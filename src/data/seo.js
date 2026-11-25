export const SITE_URL = "https://shapingotours.com";
export const CONTENT_UPDATED_AT = "2026-11-25";

export const languages = ["es", "en", "it", "fr", "zh-cn", "de"];
export const tourSlugs = [
  "lago-sandoval",
  "lago-yacumama",
  "rio-tambopata",
  "fauna-aves",
  "encuentro-amazonico",
  "caminata-nocturna",
  "colpa",
  "collpa-loros",
  "paseo-kayak",
  "sabores-comunidad",
  "programa-4-dias",
];

export const languageTags = {
  es: "es-PE",
  en: "en",
  it: "it",
  fr: "fr",
  "zh-cn": "zh-CN",
  de: "de",
};

export const homeLabels = {
  es: "Inicio",
  en: "Home",
  it: "Home",
  fr: "Accueil",
  "zh-cn": "首页",
  de: "Startseite",
};

export const tourTitleSuffixes = {
  es: "Tour en Tambopata",
  en: "Tambopata tour",
  it: "Tour a Tambopata",
  fr: "Excursion à Tambopata",
  "zh-cn": "坦博帕塔旅游体验",
  de: "Tambopata-Tour",
};

export const homeKeywords = {
  es: ["tours en Tambopata", "Puerto Maldonado tours", "Amazonía peruana", "Lago Sandoval", "turismo en Madre de Dios"],
  en: ["Tambopata tours", "Puerto Maldonado tours", "Peruvian Amazon tours", "Sandoval Lake", "Tambopata experiences"],
  it: ["tour Tambopata", "tour Puerto Maldonado", "Amazzonia peruviana", "Lago Sandoval", "esperienze Tambopata"],
  fr: ["excursions Tambopata", "tours Puerto Maldonado", "Amazonie péruvienne", "lac Sandoval", "expériences Tambopata"],
  "zh-cn": ["坦博帕塔旅游", "马尔多纳多港旅游", "秘鲁亚马逊", "桑多瓦尔湖", "亚马逊雨林体验"],
  de: ["Tambopata-Touren", "Puerto Maldonado", "peruanischer Amazonas", "Sandoval-See", "Regenwald-Erlebnisse"],
};

const slugKeywords = {
  "lago-sandoval": ["Lago Sandoval", "Sandoval Lake"],
  "lago-yacumama": ["Lago Yacumama", "Yacumama Lake"],
  "rio-tambopata": ["río Tambopata", "Tambopata River"],
  "fauna-aves": ["aves amazónicas", "Amazon wildlife", "birdwatching Tambopata"],
  "encuentro-amazonico": ["cultura amazónica", "Amazon culture"],
  "caminata-nocturna": ["caminata nocturna Amazonía", "Amazon night walk"],
  colpa: ["collpa de guacamayos", "macaw clay lick"],
  "collpa-loros": ["collpa de loros", "parrot clay lick"],
  "paseo-kayak": ["kayak Tambopata", "Amazon kayaking"],
  "sabores-comunidad": ["gastronomía amazónica", "Amazon food experience"],
  "programa-4-dias": ["tour Tambopata 4 días", "4 day Tambopata tour"],
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function optimizedImagePath(path) {
  return path.replace(/\.(?:png|jpe?g)$/i, ".webp");
}

export function localizedAlternates(pathname = "") {
  return {
    es: `/es${pathname}`,
    en: `/en${pathname}`,
    it: `/it${pathname}`,
    fr: `/fr${pathname}`,
    "zh-CN": `/zh-cn${pathname}`,
    de: `/de${pathname}`,
    "x-default": `/en${pathname}`,
  };
}

export function tourKeywords(language, slug) {
  return [...homeKeywords[language], ...(slugKeywords[slug] || [])];
}

export function organizationJsonLd(language = "es") {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "Shapingo Turs",
    legalName: "SHAPINGO TURS S.A.C.",
    taxID: "20607382345",
    url: absoluteUrl(`/${language}/`),
    logo: absoluteUrl("/img/shapingo-turs-logo.webp"),
    image: absoluteUrl("/img/hero-tambopata-poster.webp"),
    telephone: "+51917906162",
    email: "shapingotoursperu@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Madre de Dios",
      addressCountry: "PE",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Tambopata" },
      { "@type": "City", name: "Puerto Maldonado" },
    ],
    sameAs: ["https://www.instagram.com/shapingotoursperu/"],
  };
}

export function websiteJsonLd(language, title, description) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: absoluteUrl(`/${language}/`),
    name: title,
    description,
    inLanguage: languageTags[language],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqJsonLd(language, items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(`/${language}/`)}#faq`,
    inLanguage: languageTags[language],
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function tourJsonLd({ language, slug, tour }) {
  const path = `/${language}/tours/${slug}/`;
  const url = absoluteUrl(path);
  const image = absoluteUrl(optimizedImagePath(tour.image));
  return [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "@id": `${url}#tour`,
      name: tour.title,
      description: tour.intro,
      url,
      image,
      inLanguage: languageTags[language],
      touristType: "Nature and culture travelers",
      provider: { "@id": `${SITE_URL}/#organization` },
      itinerary: {
        "@type": "ItemList",
        itemListElement: (tour.steps || tour.days || []).map((step, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: Array.isArray(step) ? step[1] : step.title,
          description: Array.isArray(step) ? step[2] : step.copy,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabels[language],
          item: absoluteUrl(`/${language}/`),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: tour.title,
          item: url,
        },
      ],
    },
  ];
}
