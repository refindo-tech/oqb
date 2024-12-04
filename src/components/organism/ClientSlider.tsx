'use client'
// import SliderIcon from "../molecules/SliderIcon";
import dynamic from "next/dynamic";
// import Marquee from "../molecules/TesGsap";
const Marquee = dynamic(()=>import('@/components/molecules/TesGsap'),{ssr:false})
import React from "react";
const ClientSlider:React.FC<{title?:string}> = ({title}) => {
  return (
    <div className="w-full  flex flex-col gap-10 items-center justify-center">
      {title&&<h1 className="font-poppins font-bold text-greenWhite text-5xl">
        {title}
      </h1>}
      {/* <SliderIcon /> */}
      <Marquee/>
    </div>
  );
};

export default ClientSlider;
