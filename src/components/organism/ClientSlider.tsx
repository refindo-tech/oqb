
import SliderIcon from "../molecules/SliderIcon";
import React from "react";
const ClientSlider:React.FC<{title?:string}> = ({title}) => {
  return (
    <div className="w-full h-[30vh] flex flex-col gap-10 items-center justify-center">
      {title&&<h1 className="font-poppins font-bold text-greenWhite text-5xl">
        {title}
      </h1>}
      <SliderIcon />
    </div>
  );
};

export default ClientSlider;
