import Image from "next/image";
import React from "react";
import ButtonComponent from "@/components/atom/Button";
const CardService:React.FC<{theme:string;}> = ({theme}) => {
  return (
    <div className="relative h-[300px]">
      <div className="absolute rounded-lg shadow-xl h-full w-full">
        <Image
          src="/images/card-image/thumbnail1.jpg"
          alt="thumbnail-card"
          fill // Menyebarkan gambar sepenuhnya
          sizes="100vw" // Untuk responsivitas optimal
          style={{
            //   objectFit: "contain", // Memastikan gambar tidak terpotong
            //   borderRadius: "8px", // Membuat tepi rounded
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex flex-col justify-center p-5 bg-gray-900/70 hover:bg-navy/80 gap-7">
        <h1 className="font-semibold text-5xl text-greenWhite">{theme}</h1>
        <div className="flex gap-4 justify-center">
          <ButtonComponent content={"Design"} propsClass="bg-transparent border-2 border-purple hover:bg-purple font-semibold w-52 h-[56px] rounded-[50px] text-greenWhite hover:text-navy"/>
          <ButtonComponent content={"Development"} propsClass="bg-transparent border-2 border-purple hover:bg-purple font-semibold w-52 h-[56px] rounded-[50px] text-greenWhite hover:text-navy"/>
        </div>
      </div>
    </div>
  );
};
export default CardService;
