// import Link from "next/link"
import React from "react";
import CardService from "@/components/atom/CardService";
import Translate from "@/utils/type/translateType";
const ServiceOffer: React.FC<{ translate: Translate }> = ({ translate }) => {
  return (
    <div
      id="services"
      className="bg-navy min-h-[70vh] flex flex-col items-center justify-center gap-10 text-center py-40 text-gray-600"
    >
      <h2 className="text-5xl font-semibold font-roboto text-greenWhite">
        {translate.Home.Services.header}
      </h2>
      <p className="max-w-[70%] text-blueWhite text-lg">
        {translate.Home.Services.description}
      </p>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] gap-10 relative">
        {/* <div className="rounded-lg bg-white shadow-xl h-40 ">
                    TEXT
                </div>
                <div className="rounded-lg bg-white shadow-xl h-40 ">
                    TEXT
                </div>
                <div className="rounded-lg bg-white shadow-xl h-40 ">
                    TEXT
                </div> */}
        <CardService
          path="/images/assets/card-image/website.jpg"
          theme={"Website"}
          component={["Design", "Development"]}
        />
        <CardService
          path="/images/assets/card-image/mobile_app.jpg"
          theme={"Mobile App"}
          component={["Design", "Development"]}
        />
        <CardService
          path="/images/assets/card-image/multiplatform.jpg"
          theme={"Multiplatform App"}
          component={["Design", "Development"]}
        />
        <CardService
          path="/images/assets/card-image/system_integration.jpg"
          theme={"System Integration"}
          component={["Data", "Infrastructure"]}
        />
      </div>
      {/* <Link href={'/product'} className="p-3 text-white font-semibold bg-biru hover:bg-blue-800 rounded-lg">See more</Link> */}
    </div>
  );
};
export default ServiceOffer;
