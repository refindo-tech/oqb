import HeroComponent from "@/components/organism/Hero";
// import ContactList from "@/components/organism/ContactList";
import ContactForm from "@/components/organism/ContactForm";
import Footer from "../organism/Footer";
const ContactTemplate = () => {
  return (
    <>
      <HeroComponent 
        title="Let’s Start Something Great Together"
        description="Reach out to OQB today and let’s discuss how we can bring your ideas to life"
        path="/images/assets/hero/hero_contact.jpg" 
        />
      {/* <HeroComponent /> */}
      {/* <ContactList /> */}
      <ContactForm />
      {/* <div className="pt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.9883110570054!2d106.02950537387372!3d-5.996339958910416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418e2782651571%3A0x249411dd80bfd66e!2sFakultas%20Teknik%20UNTIRTA!5e0!3m2!1sid!2sid!4v1731481412874!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy={"no-referrer-when-downgrade"}
        />
      </div> */}
      <Footer />
    </>
  );
};
export default ContactTemplate;
