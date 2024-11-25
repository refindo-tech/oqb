'use client'
// import { useState } from "react";
import ButtonComponent from "../atom/Button";
import Link from "next/link";
import FormContact from "@/components/organism/FormContact";
import WhatsappIcon from "@/components/atom/icons/WhatsappIcon";
import EmailIcon from "@/components/atom/icons/EmailIcon";

const ContactForm = () => {
  // const [dataRequest, setDataRequest] = useState<{
  //   name: string | number | null;
  //   email: string | number | null;
  //   phone: string | number | null;
  //   company: string | number | null;
  //   message: string | number | null;
  // } | null>(null);

  // const handleDataRequest = (value: {
  //   name: string | number | null;
  //   email: string | number | null;
  //   phone: string | number | null;
  //   company: string | number | null;
  //   message: string | number | null;
  // }) => {
  //   setDataRequest(value);
  // };

  // const actionSendEmail = async () => {
  //   if (dataRequest) {
  //     // Add your email sending logic here
  //     console.log("Sending email with data:", dataRequest);
  //     // You could use a service like EmailJS or send an API request here
  //   } else {
  //     console.log("Form data is incomplete");
  //   }
  // };

  return (
    <div id="contact" className="w-[80%] bg-[url('/images/assets/form_contact.jpg')] bg-bottom bg-cover mx-auto my-10 rounded-2xl">
      <div className="flex flex-col gap-3 bg-gray-950/50">
        <div className="flex flex-row flex-wrap gap-x-5 gap-y-10 px-7 pt-7 pb-0 lg:px-10 lg:pt-10 rounded-2xl">
          <div className="grow flex flex-col justify-center gap-10 w-full xl:max-w-[50%]">
            <h3 className="font-bold text-5xl lg:text-7xl text-white">Contact Us</h3>
            <div className="flex flex-col gap-5">
              <h4 className="text-gray-400 text-xl">
                At OQB, we’re ready to collaborate, create, and support your journey to success.
              </h4>
              <div className="flex gap-4">
                <Link href={"https://wa.me/6287853850821"} className="w-10 h-10 text-gray-500 hover:text-white hover:cursor-pointer">
                  <WhatsappIcon />
                </Link>
                <Link href={"mailto:oqbsoftware@gmail.com"} className="w-10 h-10 text-gray-500 hover:text-white hover:cursor-pointer">
                  <EmailIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="grow">
            <FormContact />
          </div>
        </div>
        <div className="w-full flex justify-end px-10 pb-10">
          <ButtonComponent  propsClass="bg-purple font-semibold w-52 h-[56px] rounded-[50px] hover:bg-navy text-navy hover:text-greenWhite hover:shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
