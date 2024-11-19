import FormContact from "@/components/molecules/FormContact";
const ContactForm = () => {
  return (
    <div className="w-[80%] bg-[url('/images/card-image/thumbnail1.jpg')] bg-contain mx-auto my-10 rounded-2xl">
      <div className="flex flex-row flex-wrap gap-x-5 gap-y-10 p-7 lg:p-10 bg-gray-950/50 rounded-2xl ">
        <div className="grow flex flex-col justify-center gap-10 w-full lg:max-w-[50%]">
          <h3 className="font-bold text-5xl lg:text-7xl text-white">Contact Us</h3>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-xl lg:text-3xl">At OQB, we’re ready to collaborate, create, and support your journey to success.</h4>
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
