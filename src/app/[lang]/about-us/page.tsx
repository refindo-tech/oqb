import React from "react";
import HeroComponent from "@/components/organism/Hero";
import CategoryProject from "@/components/organism/CategoryProject";
import FormContact from "@/components/organism/FormContact";
import SectorProject from "@/components/organism/SectorProject";
import ClientSlider from "@/components/organism/ClientSlider";
import ClientTestimoni from "@/components/organism/ClientTestimoni";
import Translate from "@/utils/type/translateType";
import { getDictionary } from "../dictionary";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Software House Profesional | Solusi Transformsi Digital Terpercaya",
  description:
    "Software house profesional yang menawarkan solusi digital yang terpercaya. Wujudkan efisiensi bisnis dengan layanan terbaik dengan teknologi yang inovatif.",
  icons: "../../../public/favicon.ico",
};
const AboutUs = async ({
  params,
}: {
  params: Promise<{ lang: "en" | "id" }>;
}) => {
  const { lang } = await params;
  const t: Translate = await getDictionary(lang);
  return (
    <>
      <HeroComponent
        title={
          <span dangerouslySetInnerHTML={{ __html: t.aboutUs.Hero.header }} />
        }
        contentButton={t.aboutUs.Hero.Button}
        description={t.aboutUs.Hero.description}
        path={`/images/assets/hero/about_us.png`}
      />
      {/* <HeroComponent /> */}
      <SectorProject translate={t} />
      <CategoryProject />
      <ClientSlider translate={t} title="Our Clients" />
      <ClientTestimoni translate={t} />
      <FormContact translate={t} />
    </>
  );
};
export default AboutUs;
