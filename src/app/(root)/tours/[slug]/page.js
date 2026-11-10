import { notFound } from "next/navigation";
import TourPage from "@/components/TourPage";
import ProgramTourPage from "@/components/ProgramTourPage";
import { tours } from "@/data/tours";

const slugs = [...Object.keys(tours), "programa-4-dias"];
export const dynamicParams = false;
export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }
export async function generateMetadata({ params }) { const { slug } = await params; const item = tours[slug]; return { title: item ? item.title : "Amazonía en cuatro días", description: item?.intro || "Programa de 4 días y 3 noches en Tambopata con guía naturalista en inglés.", robots:{index:false},alternates: { canonical: `/es/tours/${slug}/` } }; }
export default async function TourRoute({ params }) { const { slug } = await params; if (slug === "programa-4-dias") return <ProgramTourPage language="es"/>; if (!tours[slug]) notFound(); return <TourPage tour={tours[slug]} slug={slug} language="es"/>; }
