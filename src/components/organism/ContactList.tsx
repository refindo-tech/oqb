import WhatsappIcon from "@/components/atom/icons/WhatsappIcon";
import EmailIcon from "../atom/icons/EmailIcon";
const ContactList = () => {
  return (
    <div className="w-full pt-20 pb-10 flex justify-center">
      <div className="flex justify-center gap-10 w-[80%]">
        <div className="rounded-lg bg-greenWhite shadow-xl h-[240px] w-[240px]  flex flex-col items-center justify-center gap-3 p-10">
          <div className="w-20 h-20 text-navy">
            <WhatsappIcon />
          </div>
          <div className="flex flex-col items-center gap-2 text-navy">
            <h3 className="text-3xl font-semibold">Whatsapp</h3>
            <p className="text-lg font-semibold">08123456789</p>
          </div>
        </div>
        <div className="rounded-lg bg-greenWhite shadow-xl h-[240px] w-[240px] flex flex-col items-center justify-center gap-3 p-10">
          <div className="w-20 h-20 text-navy">
            <EmailIcon />
          </div>
          <div className="flex flex-col items-center gap-2 text-navy">
            <h3 className="text-3xl font-semibold">Email</h3>
            <p className="text-lg font-semibold">08123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactList;
