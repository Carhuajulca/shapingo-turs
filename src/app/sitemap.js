import { getProgram } from "@/data/programLocales";
import { getTour } from "@/data/tourLocales";
import {
  CONTENT_UPDATED_AT,
  absoluteUrl,
  languages,
  localizedAlternates,
  optimizedImagePath,
  tourSlugs,
} from "@/data/seo";

const lastModified = new Date(CONTENT_UPDATED_AT);

function absoluteAlternates(pathname = "") {
  return Object.fromEntries(
    Object.entries(localizedAlternates(pathname)).map(([language, path]) => [language, absoluteUrl(path)]),
  );
}

export default function sitemap() {
  const homePages = languages.map((language) => ({
    url: absoluteUrl(`/${language}/`),
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages: absoluteAlternates("/") },
    images: [absoluteUrl("/img/hero-tambopata-poster.webp")],
  }));

  const tourPages = languages.flatMap((language) =>
    tourSlugs.map((slug) => {
      const tour = slug === "programa-4-dias" ? getProgram(language) : getTour(language, slug);
      const pathname = `/tours/${slug}/`;
      const image = slug === "programa-4-dias" ? "/img/lago-sandoval.webp" : optimizedImagePath(tour.image);
      return {
        url: absoluteUrl(`/${language}${pathname}`),
        lastModified,
        changeFrequency: "monthly",
        priority: slug === "programa-4-dias" ? 0.9 : 0.8,
        alternates: { languages: absoluteAlternates(pathname) },
        images: [absoluteUrl(image)],
      };
    }),
  );

  return [...homePages, ...tourPages];
}
