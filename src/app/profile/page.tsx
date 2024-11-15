"use client";
import HeroComponent from "@/components/organism/Hero";
import Navbar from "@/components/organism/Navbar";
import ServiceOffer from "@/components/organism/ServicesOffer";
import ClientTestimoni from "@/components/organism/ClientTestimoni";
import ContactForm from "@/components/organism/ContactForm";
import Footer from "@/components/organism/Footer";
import LastBlog from "@/components/organism/LastBlog";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroComponent/>
      <ServiceOffer/>
      <ClientTestimoni />
      <LastBlog />
      <ContactForm/>
      <Footer />
    </>
  );
};
export default HomePage;
