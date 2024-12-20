'use client'
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
import HeroComponent from "@/components/organism/Hero";
import WhatsappButton from "@/components/molecules/WhatsappButton";
import BlogContainer from "@/components/organism/BlogContainer";
import { getDictionary } from "../dictionary";
import Translate from "@/utils/type/translateType";
import en from "../../../../public/json/en.json";
const BlogPage = () => {
  const [t, setT] = useState<Translate>(en);
  const path = usePathname();
    const local = path.split("/")[1];
  useEffect(() => {
      const getLang = async () => {
        if (local === "id" || local === "en") {
          const result = await getDictionary(local);
          setT(result);
        }
      };
      getLang();
    }, [local, path]);
  return (
    <>
      <Navbar translate={t}/>
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
      <WhatsappButton />
      <Footer translate={t}/>
    </>
  );
};
export default BlogPage;
