import Navbar from "@/components/organism/Navbar";
// import HeroComponent from "@/components/organism/Hero";
// import ContactForm from "@/components/organism/ContactForm";
import WhatsappButton from "@/components/molecules/WhatsappButton";
import ContactTemplate from "@/components/template/ContactTemplate";
const Contact = () => {
  return (
    <>
      <Navbar />
      {/* <HeroComponent />
      <ContactForm/> */}
      <WhatsappButton />
      <ContactTemplate />
    </>
  );
};
export default Contact;
