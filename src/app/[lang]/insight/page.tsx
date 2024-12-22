import React from "react";
import HeroComponent from "@/components/organism/Hero";
import BlogContainer from "@/components/organism/BlogContainer";
import Translate from "@/utils/type/translateType";
import { getDictionary } from "../dictionary";
import type { Metadata } from "next";
export const metadata:Metadata = {
  title:"Artikel Seputar Teknologi Terbaru & Tips Inovasi Digital",
  description:"Kumpulan artikel tentang teknologi terbaru, inovasi digital, strategi bisnis, dan tutorial yang relevan untuk mendukung kesuksesan di era digital.",
  icons:"../../../public/favicon.ico"
}
const BlogPage = async({params}:{params:Promise<{lang: "en" | "id"}>}) => {
  const {lang} =await params
  const t:Translate = await getDictionary(lang)

  return (
    <>
      {/* <HeroComponent /> */}
      <HeroComponent
        title={
          <span dangerouslySetInnerHTML={{ __html: t.insight.Hero.header }} />
        }
        description={t.insight.Hero.description}
        path={`/images/assets/hero/insight.png`}
        contentButton={t.Home.Hero.Button}
      />
      <BlogContainer translate={t}/>
    </>
  );
};
export default BlogPage;
