import React from "react";
import CardBenefit from "../atom/CardBenefit";
import Translate from "@/utils/type/translateType";
const Benefit: React.FC<{ translate: Translate }> = ({ translate }) => {
  return (
    <article className="min-h-[60vh] w-full py-10  flex flex-col flex-wrap lg:flex-nowrap items-center justify-center gap-10">
      <div className="w-[80%] flex flex-col gap-5 text-center">
        <h2 className="font-bold text-3xl text-greenWhite ">
          {translate.Home.Benefit.header}
        </h2>
        <p className="text-lg text-blueWhite ">
          {translate.Home.Benefit.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-y-1 gap-x-3">
        {translate.Home.Benefit.item.map((item, index) => (
          <CardBenefit
            path={item.path}
            title={item.title}
            description={item.description}
            key={index}
          />
        ))}
      </div>
    </article>
  );
};
export default Benefit;
