import FormContact from "@/components/molecules/FormContact";
const ContactForm = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="flex flex-row flex-wrap gap-5 p-10 bg-[url('/images/card-image/thumbnail1.jpg')] rounded-2xl ">
        <div className="grow flex flex-col justify-center gap-10 max-w-[50%]">
          <h3 className="font-bold text-7xl text-white">Contact Us</h3>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-3xl">Let’s bring your vision to life. At OQB, we’re ready to collaborate, create, and support your journey to success.</h4>
            {/* <div>LOGO SOSMED</div> */}
          </div>
        </div>
        <div className="grow">
          <FormContact />
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
