import React from "react";
import RatingStar from "./RatingStar";
import Image from "next/image";
interface propsCardTestimony {
  rating: number;
  text: string;
  name: string;
  position: string;
}
const CardTestimoni: React.FC<propsCardTestimony> = ({
  rating,
  text,
  name,
  position,
}) => {
  return (
    <div className="flex flex-row items-start gap-3">
      {/* <div className="text-greenWhite text-5xl rounded-lg">&quot;</div> */}
      <Image
        src={"/images/doublequote.svg"}
        height={24}
        width={24}
        alt="doublequote"
      />
      <div className="bg-[#1c1678] shadow-lg w-full min-h-20 rounded-lg p-4">
        <div className="flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-2">
            <RatingStar count={rating} />
            <p className="text-blueWhite">{text}</p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold text-lg text-blueWhite">{name}</h5>
            <h6 className=" text-blueWhite">{position}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardTestimoni;
