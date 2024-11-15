import React from "react";
import ButtonComponent from "@/components/atom/Button";
import Image from "next/image";
const HeroComponent = () => {
  return (
    <div className="min-h-[80vh] bg-biru py-20 flex justify-center">
      <div className="w-[90%] flex flex-wrap lg:flex-nowrap items-center">
        <div className="flex flex-col gap-10 text-white/70">
          <h1 className="text-5xl font-bold font-roboto text-white">
            Mari Tingkatkan Kepuasan <br /> Klien Anda
          </h1>
          <p className="font-poppins text-xl">
            Tingkatkan kepuasan klien saat mengakses produk anda secara digital,
            menggunakkan produk dari kami
          </p>
          <ButtonComponent
            content={"Lihat lebih detail"}
            propsClass="bg-orange-500 font-semibold w-52 h-[56px] rounded-2xl"
          />
        </div>
        <div className="min-w-[50%]">
          <Image
            src={'/images/logo_oqb.png'}
            alt="hero-image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};
export default HeroComponent;
