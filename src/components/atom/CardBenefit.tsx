"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
const CardBenefit: React.FC<{ title: string; description: string; path:string }> = ({
  title,
  description,
  path
}) => {
  const [isHover, setIsHover] = useState(false);
  const hoverHandler = () => {
    setIsHover(!isHover);
  };
  return (
    <div
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      className={`rounded-full h-[300px] w-[300px] text-center ${isHover ? 'bg-greenWhite backdrop-blur-lg text-navy font-semibold': 'bg-transparent border-4 border-blueWhite'} p-10 flex flex-col justify-center items-center gap-3 transition-all ease-out duration-1000`}
    >
      {!isHover&&
        // <div className="bg-biru h-20 w-20 rounded-lg"></div>
        <Image 
          src={path}
          alt="icon-benefit"
          height={80}
          width={80}
        />
      }
      {isHover ? (
        <p className="transition-colors duration-300">{description}</p>
      ) : (
        <h3 className="text-xl font-semibold text-greenWhite">{title}</h3>
      )}
    </div>
  );
};
export default CardBenefit;
