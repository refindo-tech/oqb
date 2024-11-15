import FormContact from "@/components/molecules/FormContact";
const ContactForm = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="flex flex-row flex-wrap gap-5 p-10 bg-biru">
        <div className="grow flex flex-col gap-10">
          <h3 className="font-bold text-6xl text-white">Hubungi Kami</h3>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-2xl">Ikuti Media Sosial Kami</h4>
            <div>LOGO SOSMED</div>
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
