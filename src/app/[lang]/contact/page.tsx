'use client'
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/organism/Navbar";
import HeroComponent from "@/components/organism/Hero";
import WhatsappButton from "@/components/molecules/WhatsappButton";
import FormContact from "@/components/organism/FormContact";
import Footer from "@/components/organism/Footer";
import { getDictionary } from "../dictionary";
import Translate from "@/utils/type/translateType";
import en from "../../../../public/json/en.json";
const Contact = () => {
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
      {/* <HeroComponent />
      <ContactForm/> */}
      <WhatsappButton />
      <HeroComponent
        title={
          <span dangerouslySetInnerHTML={{ __html: t.Home.Hero.header }} />
        }
        description={t.Home.Hero.description}
        contentButton={t.Home.Hero.Button}
        path={`/images/assets/hero/contact.png`}
      />
      <FormContact translate={t} />
      <Footer translate={t}/>
      {/* <ContactTemplate /> */}
    </>
  );
};
export default Contact;
