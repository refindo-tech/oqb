"use client";
import React, { useState, useEffect } from "react";
import InputForm from "@/components/atom/InputForm";
import TextareaForm from "@/components/atom/TextareaForm";
import ButtonComponent from "../atom/Button";
import WhatsappIcon from "../atom/icons/WhatsappIcon";
import EmailIcon from "../atom/icons/EmailIcon";
import Link from "next/link";
import {sendEmail} from '../../utils/lib/fetchContact'

const FormContact = () => {
  const [emailValue, setEmailValue] = useState<string|number| File|null>('');
  const [nameValue, setNameValue] = useState<string|number| File|null>('');
  const [phoneValue, setPhoneValue] = useState<string|number| File|null>('');
  const [companyValue, setCompanyValue] = useState<string|number| File|null>(
    ''
  );
  const [messageValue, setMessageValue] = useState<string | number | null>(
    ''
  );
  const [dataRequest, setDataRequest] = useState<{
    name: string|number| File|null;
    email: string|number| File|null;
    phone: string|number| File|null;
    company: string|number| File|null;
    message: string | number | null;
  }|string>('')

  const handleEmailValue = (value: string|number| File|null) =>
    setEmailValue(value);
  const handleNameValue = (value: string|number| File|null) =>
    setNameValue(value);
  const handlePhoneValue = (value: string|number| File|null) =>
    setPhoneValue(value);
  const handleCompanyValue = (value: string|number| File|null) =>
    setCompanyValue(value);
  const handleMessageValue = (value: string | number | null) =>
    setMessageValue(value);

  // Use useEffect to send data only when all fields are filled
  useEffect(() => {
    if (emailValue && nameValue && phoneValue && companyValue && messageValue) {
      setDataRequest({
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
        company: companyValue,
        message: messageValue,
      });
    }
  }, [
    emailValue,
    nameValue,
    phoneValue,
    companyValue,
    messageValue
  ]);
  const actionSendEmail = async() => {
    const response = await sendEmail(dataRequest)
    if(response){
      console.log(response)
      setEmailValue(null)
      setPhoneValue(null)
      setNameValue(null)
      setCompanyValue(null)
      setMessageValue(null)
    }
  }

  return (
    <div
      id="contact"
      className="w-[80%] bg-[url('/images/assets/form_contact.jpg')] bg-bottom bg-cover mx-auto my-10 rounded-2xl"
    >
      <div className="flex flex-col gap-3 bg-gray-950/50 rounded-2xl">
        <div className="flex flex-row flex-wrap gap-x-5 gap-y-10 px-7 pt-7 pb-0 lg:px-10 lg:pt-10 rounded-2xl">
          <div className="grow flex flex-col justify-center gap-10 w-full lg:max-w-[50%]">
            <h3 className="font-bold text-5xl lg:text-7xl text-white">
              Contact Us
            </h3>
            <div className="flex flex-col gap-5">
              <h4 className="text-gray-400 text-xl">
              We are ready to provide solutions and look forward to discussing how we can help
              </h4>
              <div className="flex gap-4">
                <Link
                  href={"https://wa.me/6287853850821"}
                  className="w-10 h-10 text-gray-500 hover:text-white hover:cursor-pointer"
                >
                  <WhatsappIcon />
                </Link>
                <Link
                  href={"mailto:oqbsoftware@gmail.com"}
                  className="w-10 h-10 text-gray-500 hover:text-white hover:cursor-pointer"
                >
                  <EmailIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="grow">
            <form className="flex flex-col gap-y-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <InputForm
                  label={false}
                  value={nameValue}
                  name="name"
                  type="text"
                  placeholder="Name"
                  propsClass="bg-white/30 backdrop-blur-sm placeholder:text-white/70 text-white focus:border-2 focus:border-orange-500 font-poppins placeholder:font-semibold"
                  handleValue={handleNameValue}
                />
                <InputForm
                  label={false}
                  value={companyValue}
                  name="company"
                  type="text"
                  placeholder="Company"
                  propsClass="bg-white/30 backdrop-blur-sm placeholder:text-white/70 text-white focus:border-2 focus:border-orange-500 font-poppins placeholder:font-semibold"
                  handleValue={handleCompanyValue}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <InputForm
                  label={false}
                  value={phoneValue}
                  name="phone"
                  type="number"
                  placeholder="Phone"
                  propsClass="bg-white/30 backdrop-blur-sm placeholder:text-white/70 text-white focus:border-2 focus:border-orange-500 font-poppins placeholder:font-semibold"
                  handleValue={handlePhoneValue}
                />
                <InputForm
                  label={false}
                  value={emailValue}
                  name="email"
                  type="email"
                  placeholder="Email"
                  propsClass="bg-white/30 backdrop-blur-sm placeholder:text-white/70 text-white focus:border-2 focus:border-orange-500 font-poppins placeholder:font-semibold"
                  handleValue={handleEmailValue}
                />
              </div>
              <TextareaForm
                value={messageValue}
                name="message"
                placeholder="Message"
                // propsClass="bg-white/30 backdrop-blur-sm placeholder:text-white/70 text-white"
                handleValue={handleMessageValue}
              />
            </form>
          </div>
        </div>
        <div className="w-full flex justify-end px-10 pb-10">
          <ButtonComponent
            onClick={actionSendEmail}
            propsClass="bg-purple font-semibold w-full lg:w-52 h-[56px] rounded-[50px] hover:bg-navy text-navy hover:text-greenWhite hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContact;
