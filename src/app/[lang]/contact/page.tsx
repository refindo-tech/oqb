import React from "react";
import HeroComponent from "@/components/organism/Hero";
import FormContact from "@/components/organism/FormContact";
import Translate from "@/utils/type/translateType";
import { getDictionary } from "../dictionary";
const Contact = async({params}:{params:Promise<{lang: "en" | "id"}>}) => {
  const {lang} = await params
  const t:Translate = await getDictionary(lang)
  return (
    <>
      <HeroComponent
        title={
          <span dangerouslySetInnerHTML={{ __html: t.Home.Hero.header }} />
        }
        description={t.Home.Hero.description}
        contentButton={t.Home.Hero.Button}
        path={`/images/assets/hero/contact.png`}
      />
      <FormContact translate={t} />
      {/* <ContactTemplate /> */}
    </>
  );
};
export default Contact;
