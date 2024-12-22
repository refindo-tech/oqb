import React from "react";
import Translate from "@/utils/type/translateType";
const CountProject: React.FC<{ translate: Translate }> = ({ translate }) => {
  return (
    <div className="w-full lg:w-[50%] flex flex-col gap-5 items-center">
      <div className="flex flex-row gap-5 w-full flex-wrap justify-center">
        {translate.aboutUs.sector.category.map((item, index) => (
          <div
            className={`h-[25vh] border-2 border-blueWhite flex flex-col gap-3 items-center justify-center rounded-xl w-[45%]`}
            key={index}
          >
            <h4 className="font-bold text-5xl font-poppins text-greenWhite">
              {item.count}
            </h4>
            <h5 className="font-semibold text-lg text-blueWhite text-center font-poppins px-3">
              {item.sector}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CountProject;
