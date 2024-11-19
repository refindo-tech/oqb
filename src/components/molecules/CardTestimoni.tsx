import React from "react";
import RatingStar from "./RatingStar";
import Image from "next/image";
const CardTestimoni:React.FC<{rating:number}> = ({rating}) => {
  return (
    <div className="flex flex-row items-start gap-3">
      {/* <div className="text-greenWhite text-5xl rounded-lg">&quot;</div> */}
      <Image
        src={'/images/doublequote.svg'}
        height={24}
        width={24}
        alt="doublequote"
      />
      <div className="bg-[#1c1678] shadow-lg w-full min-h-20 rounded-lg p-4">
        <div className="flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-2">
            <RatingStar count={rating} />
            <p className="text-blueWhite">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur id velit nesciunt, sint incidunt vitae aut
              praesentium, facilis eligendi similique atque. Vitae natus soluta
              sequi aut eum, id fugit officiis!
            </p>
          </div>
          <div className="font-semibold text-lg text-blueWhite">Clients Name</div>
        </div>
      </div>
    </div>
  );
};
export default CardTestimoni;
