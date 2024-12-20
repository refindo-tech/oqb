"use client";
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/organism/Navbar";
import HeroComponent from "@/components/organism/Hero";
import CategoryProject from "@/components/organism/CategoryProject";
import FormContact from "@/components/organism/FormContact";
import SectorProject from "@/components/organism/SectorProject";
import Footer from "@/components/organism/Footer";
import WhatsappButtton from "@/components/molecules/WhatsappButton";
import ClientSlider from "@/components/organism/ClientSlider";
import ClientTestimoni from "@/components/organism/ClientTestimoni";
import { getDictionary } from "../dictionary";
import Translate from "@/utils/type/translateType";
import en from "../../../../public/json/en.json";
const AboutUs = () => {
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
      <HeroComponent
        title={
          <span dangerouslySetInnerHTML={{ __html: t.aboutUs.Hero.header }} />
        }
        contentButton={t.aboutUs.Hero.Button}
        description={t.aboutUs.Hero.description}
        path={`/images/assets/hero/about_us.png`}
      />
      {/* <HeroComponent /> */}
      <SectorProject translate={t}/>
      <CategoryProject />
      <ClientSlider translate={t} title="Our Clients" />
      <ClientTestimoni translate={t} />
      <FormContact translate={t} />
      <WhatsappButtton />
      <Footer translate={t}/>
    </>
  );
};
export default AboutUs;
