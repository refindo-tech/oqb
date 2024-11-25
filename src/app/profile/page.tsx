"use client";
import HeroComponent from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
import ServiceOffer from "@/components/organism/ServicesOffer";
import SliderIcon from "@/components/molecules/SliderIcon";
import ClientTestimoni from "@/components/organism/ClientTestimoni";
import FormContact from "@/components/organism/FormContact";
import ProjectPhases from "@/components/organism/StepComponent";
import Footer from "@/components/organism/Footer";
import LastBlog from "@/components/organism/LastBlog";
import VisionComponent from "@/components/organism/Vision";
import Benefit from "@/components/organism/Benefit";
import WhatsappButton from "@/components/molecules/WhatsappButton";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroComponent
        title={
          <>
            Build Quality Software <br /> Optimize Your Workflow
          </>
        }
        description="We believe that software should do more than just function, it should inspire progress"
        path="/images/assets/hero/hero_home.jpg"
      />
      {/* <HeroComponent /> */}
      <ServiceOffer />
      <div className=" bg-[url('/images/assets/why_choose_us.jpg')] bg-cover bg-fixed min-h-screen">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent">
          </div> */}
        <div className="bg-black/50 px-10 py-16">
          <Benefit />
          <ProjectPhases />
        </div>
      </div>
      <div className="flex flex-col py-40">
        <VisionComponent />
        <SliderIcon />
        <ClientTestimoni />
      </div>
      <LastBlog />
      <FormContact />
      <WhatsappButton />
      <Footer />
    </>
  );
};
export default HomePage;
