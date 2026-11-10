import { notFound } from "next/navigation";
import TourPage from "@/components/TourPage";
import ProgramTourPage from "@/components/ProgramTourPage";
import { getTour } from "@/data/tourLocales";
const languages=["es","en","it","fr","zh-cn"],slugs=["lago-sandoval","rio-tambopata","fauna-aves","encuentro-amazonico","caminata-nocturna","programa-4-dias"];
export const dynamicParams=false;
export function generateStaticParams(){return languages.flatMap(lang=>slugs.map(slug=>({lang,slug})))}
export async function generateMetadata({params}){const{lang,slug}=await params;const item=slug==="programa-4-dias"?{title:"Amazon 4-day program",intro:"Four days and three nights in Tambopata."}:getTour(lang,slug);if(!item)return{};const path=`/${lang}/tours/${slug}/`;const hrefs=Object.fromEntries(languages.map(x=>[x==="zh-cn"?"zh-CN":x,`/${x}/tours/${slug}/`]));return{title:item.title,description:item.intro,alternates:{canonical:path,languages:{...hrefs,"x-default":`/en/tours/${slug}/`}},openGraph:{title:item.title,description:item.intro,url:path,type:"website"}}}
export default async function Page({params}){const{lang,slug}=await params;if(!languages.includes(lang)||!slugs.includes(slug))notFound();if(slug==="programa-4-dias")return <ProgramTourPage language={lang}/>;const tour=getTour(lang,slug);if(!tour)notFound();return <TourPage tour={tour} slug={slug} language={lang}/>}
