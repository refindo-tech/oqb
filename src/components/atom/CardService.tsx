'use client'
// import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ButtonComponent from "@/components/atom/Button";
interface propsCardService {
  theme:string,
  path:string
  component:string[]
}
const CardService:React.FC<propsCardService> = ({theme, path, component}) => {
  const router = useRouter()
  const handleButton = () => {
    router.push('/contact#contact')
  }
  return (
    // h-[300px] md:h-[350px] lg:h-[400px]
    <div className="relative h-[250px] md:h-[350px] lg:h-[400px] rounded-xl bg-cover bg-center" style={{
      backgroundImage: `url(${path})`, // Gunakan style inline untuk background-image
    }}>
      {/* <div className="absolute rounded-lg shadow-xl h-full w-full">
        <Image
          src={path}
          alt="thumbnail-card"
          fill // Menyebarkan gambar sepenuhnya
          sizes="100vw" // Untuk responsivitas optimal
          style={{
            //   objectFit: "contain", // Memastikan gambar tidak terpotong
            //   borderRadius: "8px", // Membuat tepi rounded
            borderRadius: "8px",
          }}
        />
      </div> */}
      {/* <Image
          src={path}
          alt="thumbnail-card"
          height={800}
          width={600}
          // className="block absolute top-0 left-0 right-0 bottom-0 h-[800px] w-[600px]"
        /> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex flex-col justify-center p-5 bg-gray-900/70 hover:bg-navy/80 gap-7">
        <h1 className="font-semibold text-3xl lg:text-5xl xl:text-5xl text-greenWhite">{theme}</h1>
        <div className="flex gap-4 justify-center">
          {component.map((item:string, index:number)=>(
            <ButtonComponent onClick={handleButton} content={item} propsClass="bg-transparent border-2 border-purple hover:bg-purple font-semibold w-52 h-[56px] rounded-[50px] text-greenWhite hover:text-navy" key={index}/>
          ))}
          {/* <ButtonComponent onClick={handleButton} content={"Development"} propsClass="bg-transparent border-2 border-purple hover:bg-purple font-semibold w-52 h-[56px] rounded-[50px] text-greenWhite hover:text-navy"/> */}
        </div>
      </div>
    </div>
  );
};
export default CardService;
