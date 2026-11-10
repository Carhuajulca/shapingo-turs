import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { legalLocales } from "@/data/legalLocales";
const languages=["es","en","it","fr","zh-cn"];
export const dynamicParams=false;
export function generateStaticParams(){return languages.map(lang=>({lang}))}
export async function generateMetadata({params}){const{lang}=await params,c=legalLocales[lang];if(!c)return{};return{title:c.eyebrow,description:c.intro,robots:{index:false,follow:true},alternates:{canonical:`/${lang}/legal/`,languages:{es:"/es/legal/",en:"/en/legal/",it:"/it/legal/",fr:"/fr/legal/","zh-CN":"/zh-cn/legal/","x-default":"/en/legal/"}}}}
export default async function Page({params}){const{lang}=await params;if(!legalLocales[lang])notFound();return <LegalPage language={lang}/>}
