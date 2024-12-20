import React from "react";
import Translate from "@/utils/type/translateType";
import Image from "next/image";
import CountProject from "@/components/atom/CountProject";
const SectorProject:React.FC<{translate:Translate}> = ({translate}) => {
  return (
    <div className="min-h-[70vh] w-[90%] lg:w-full flex justify-center items-center py-10 mx-auto">
      <div className="flex items-center w-[90%] lg:w-[80%] gap-10 flex-wrap-reverse lg:flex-nowrap">
        <CountProject translate={translate}/>
        <div className="w-full lg:w-[50%] min-h-[50vh] flex flex-col gap-4 text-center">
          <h2 className="text-5xl font-bold text-greenWhite">
            {translate.aboutUs.sector.header}
          </h2>
          <p className="text-blueWhite text-lg" dangerouslySetInnerHTML={{__html:translate.aboutUs.sector.description}}/>
          <div className="flex gap-5 flex-wrap">
            <div className="flex justify-center w-[80%] gap-12 mx-auto">
              <Image
                src={"/images/nextjs.webp"}
                alt="technolugy used"
                width={60}
                height={60}
              />
              <Image
                src={"/images/file-type-vue.svg"}
                alt="technolugy used"
                width={60}
                height={60}
              />
              <Image
                src={"/images/laravel.svg"}
                alt="technolugy used"
                width={60}
                height={60}
              />
            </div>
            <div className="flex justify-center w-[80%] gap-10 mx-auto">
              <Image
                src={"/images/file-type-kotlin.svg"}
                alt="technolugy used"
                width={60}
                height={60}
              />
              <Image
                src={"/images/flutter.png"}
                alt="technolugy used"
                width={60}
                height={60}
              />
              <Image
                src={"/images/figma.svg"}
                alt="technolugy used"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectorProject;
