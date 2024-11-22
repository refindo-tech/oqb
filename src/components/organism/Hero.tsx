import React from "react";
import ButtonComponent from "@/components/atom/Button";
// import Image from "next/image";
interface propsHeroCompoonents {
  path:string
  title:React.ReactNode; // Mendukung string atau JSX
  description:string
}
const HeroComponent:React.FC<propsHeroCompoonents> = ({path, title, description}) => {
  return (
    // bg-gradient-to-t from-greenWhite/20 to-transparent
    <div 
      className={`h-screen pt-28 bg-cover lg:pt-20 pb-20 flex justify-center w-full`}
      style={{
        backgroundImage: `url(${path})`, // Gunakan style inline untuk background-image
      }}
    >
        <div className="w-[80%] flex flex-col items-start justify-center gap-10 text-white/70">
          <h1 className="text-3xl lg:text-7xl font-bold font-roboto text-greenWhite px-3">
            {title}
          </h1>
          <p className="font-poppins text-xl px-3 text-blueWhite">
            {description}
          </p>
          <ButtonComponent
            content={"Start Consultation"}
            propsClass="bg-transparent border-2 border-purple hover:bg-purple font-semibold w-52 h-[56px] rounded-[50px] text-greenWhite hover:text-navy "
          />
        </div>
    </div>
  );
};
export default HeroComponent;
