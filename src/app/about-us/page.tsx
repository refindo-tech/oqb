import Navbar from "@/components/organism/Navbar";
import HeroComponent from "@/components/organism/Hero";
import CategoryProject from "@/components/organism/CategoryProject";
import FormContact from "@/components/organism/FormContact";
import SectorProject from "@/components/organism/SectorProject";
import Footer from "@/components/organism/Footer";
import WhatsappButtton from "@/components/molecules/WhatsappButton";
import ClientSlider from "@/components/organism/ClientSlider";
import ClientTestimoni from "@/components/organism/ClientTestimoni";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <HeroComponent
        title={
          <>
            Who We Are <br />
            What Drives Us
          </>
        }
        description="Explore how our expertise can help you"
        path="/images/assets/hero/about_us.png"
      />
      {/* <HeroComponent /> */}
      <SectorProject />
      <CategoryProject />
      <ClientSlider title="Our Clients" />
      <ClientTestimoni title="Testimony"/>
      <FormContact />
      <WhatsappButtton />
      <Footer />
    </>
  );
};
export default AboutUs;
