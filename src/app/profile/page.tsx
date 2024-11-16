"use client";
import HeroComponent from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
import ServiceOffer from "@/components/organism/ServicesOffer";
import ClientTestimoni from "@/components/organism/ClientTestimoni";
import ContactForm from "@/components/organism/ContactForm";
import ProjectPhases from "@/components/organism/StepComponent";
import Footer from "@/components/organism/Footer";
import LastBlog from "@/components/organism/LastBlog";
import VisionComponent from "@/components/organism/Vision";
import Benefit from "@/components/organism/Benefit";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroComponent/>
      <ServiceOffer/>
      <Benefit />
      <ProjectPhases />
      <VisionComponent />
      <ClientTestimoni />
      <LastBlog />
      <ContactForm/>
      <Footer />
    </>
  );
};
export default HomePage;
