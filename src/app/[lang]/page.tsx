"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeroComponent from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
import ServiceOffer from "@/components/organism/ServicesOffer";
import ClientSlider from "@/components/organism/ClientSlider";
import ClientTestimoni from "@/components/organism/ClientTestimoni";
import FormContact from "@/components/organism/FormContact";
import ProjectPhases from "@/components/organism/StepComponent";
import Footer from "@/components/organism/Footer";
import LastBlog from "@/components/organism/LastBlog";
import VisionComponent from "@/components/organism/Vision";
import Benefit from "@/components/organism/Benefit";
import WhatsappButton from "@/components/molecules/WhatsappButton";
import { getDictionary } from "./dictionary";
import Translate from "@/utils/type/translateType";
import en from "../../../public/json/en.json";

const HomePage = () => {
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
          <span dangerouslySetInnerHTML={{ __html: t.Home.Hero.header }} />
        }
        description={t.Home.Hero.description}
        contentButton={t.Home.Hero.Button}
        path={`/images/assets/hero/home.png`}
      />
      <ServiceOffer translate={t} />
      <div className=" bg-[url('/images/assets/hero/why_choose_us.png')] bg-cover bg-fixed min-h-screen">
        <div className="bg-black/50 px-10 py-16">
          <Benefit translate={t} />
          <ProjectPhases translate={t} />
        </div>
      </div>
      <div className="flex flex-col py-40">
        <VisionComponent translate={t} />
        <ClientSlider translate={t}/>
        <ClientTestimoni translate={t} />
      </div>
      <LastBlog translate={t}/>
      <FormContact translate={t} />
      <WhatsappButton />
      <Footer translate={t}/>
    </>
  );
};
export default HomePage;
