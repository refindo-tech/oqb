import Navbar from "@/components/organism/Navbar";
import HeroComponent from "@/components/organism/Hero";
import CategoryProject from "@/components/organism/CategoryProject";
import FormContact from "@/components/organism/FormContact";
import SectorProject from "@/components/organism/SectorProject";
import Footer from "@/components/organism/Footer";
import WhatsappButtton from "@/components/molecules/WhatsappButton";
import ClientSlider from "@/components/organism/ClientSlider";
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
        path="/images/assets/hero/hero_about_us.jpg"
      />
      {/* <HeroComponent /> */}
      <SectorProject />
      <CategoryProject />
      <ClientSlider />
      <FormContact />
      <WhatsappButtton />
      <Footer />
    </>
  );
};
export default AboutUs;
