import { notFound, permanentRedirect } from "next/navigation";
import { tourSlugs } from "@/data/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return tourSlugs.map((slug) => ({ slug }));
}

export default async function TourRoute({ params }) {
  const { slug } = await params;
  if (!tourSlugs.includes(slug)) notFound();
  permanentRedirect(`/en/tours/${slug}/`);
}
