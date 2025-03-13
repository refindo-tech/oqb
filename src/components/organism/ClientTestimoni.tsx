import CardTestimoni from "@/components/molecules/CardTestimoni";
import React from "react";
import Translate from "@/utils/type/translateType";
const ClientTestimoni:React.FC<{ translate:Translate}> = ({ translate}) => {
  return (
    <div className="w-full flex justify-center items-center pt-20 gap-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-y-10 w-[80%]">
        <div className="flex flex-col gap-5">
          <h2 className="font-semibold text-4xl font-poppins text-greenWhite">
          {translate.common.Testimony.header}
          </h2>
          <h3 className="text-blueWhite font-poppins text-lg">
            {" "}
            {translate.common.Testimony.description}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 min-w-[80%] lg:px-10">
          {translate.common.Testimony.item.map((item, index)=>(
            <CardTestimoni
              text={item.message}
              name={item.name}
              position={item.position}
              rating={5}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ClientTestimoni;
