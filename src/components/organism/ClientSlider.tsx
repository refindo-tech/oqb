'use client'
// import SliderIcon from "../molecules/SliderIcon";
import dynamic from "next/dynamic";
// import Marquee from "../molecules/TesGsap";
const Marquee = dynamic(()=>import('@/components/molecules/TesGsap'),{ssr:false})
import React from "react";
import Translate from "@/utils/type/translateType";
const ClientSlider:React.FC<{title?:string;translate:Translate}> = ({translate, title}) => {
  return (
    <div className="w-full  flex flex-col gap-10 items-center justify-center">
      {title&&<h1 className="font-poppins font-bold text-greenWhite text-5xl">
        {translate.aboutUs.Client?.t}
      </h1>}
      {/* <SliderIcon /> */}
      <Marquee/>
    </div>
  );
};

export default ClientSlider;
