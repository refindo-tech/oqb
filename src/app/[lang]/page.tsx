import HeroComponent from "@/components/organism/Hero";
import ServiceOffer from "@/components/organism/ServicesOffer";
import ClientSlider from "@/components/organism/ClientSlider";
import ClientTestimoni from "@/components/organism/ClientTestimoni";
import FormContact from "@/components/organism/FormContact";
import ProjectPhases from "@/components/organism/StepComponent";
import LastBlog from "@/components/organism/LastBlog";
import VisionComponent from "@/components/organism/Vision";
import Benefit from "@/components/organism/Benefit";
import Translate from "@/utils/type/translateType";
import { getDictionary } from "./dictionary";

const HomePage = async({params}:{params:Promise<{lang: "en" | "id"}>}) => {
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
    </>
  );
};
export default HomePage;
