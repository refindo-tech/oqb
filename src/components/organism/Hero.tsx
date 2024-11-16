import React from "react";
import ButtonComponent from "@/components/atom/Button";
// import Image from "next/image";
const HeroComponent = () => {
  return (
    <div className="min-h-[80vh] bg-biru py-20 flex justify-center w-full">
        <div className="flex flex-col items-center justify-center text-center gap-10 text-white/70">
          <h1 className="text-7xl font-bold font-roboto text-white">
          Build Quality Software <br /> Optimize Your Workflow
          </h1>
          <p className="font-poppins text-xl">
            We believe that software should do more than just function, it should inspire progress
          </p>
          <ButtonComponent
            content={"Start Consultation"}
            propsClass="bg-orange-500 font-semibold w-52 h-[56px] rounded-2xl"
          />
        </div>
      {/* <div className="w-[80%] flex  items-center">
        <div className="min-w-[50%]">
          <Image
            src={'/images/logo_oqb.png'}
            alt="hero-image"
            width={600}
            height={600}
          />
        </div>
      </div> */}
    </div>
  );
};
export default HeroComponent;
