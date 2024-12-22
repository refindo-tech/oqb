'use client'
import React from "react";
import StepCarousel from "../molecules/StepCarousel";
import Translate from "@/utils/type/translateType";
interface propsProjectPhase {
  number: number;
  title: string;
  description: string;
}

const ProjectPhase: React.FC<propsProjectPhase> = ({
  number,
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center w-full md:w-48 relative text-lg">
    <div className="bg-greenWhite text-navy w-10 h-10 flex items-center justify-center rounded-full mb-3 relative z-10 font-semibold">
      {number}
    </div>
    <h3 className=" text-greenWhite mb-2 text-lg font-semibold">{title}</h3>
    <p className=" text-blueWhite leading-relaxed max-w-[200px]">
      {description}
    </p>
  </div>
);

const ConnectorLines = () => (
  <div className="absolute inset-0 hidden md:block">
    {/* First row horizontal line */}
    <div className="absolute top-5 left-[10%] right-0 border-t-2 border-dashed border-purple" />

    {/* Right vertical connector */}
    <div className="absolute right-0 top-5 h-[300px] border-r-2 border-dashed border-purple" />

    {/* Second row horizontal line */}
    <div className="absolute top-[320px] left-0 right-0 border-t-2 border-dashed border-purple" />

    {/* Left vertical connector */}
    <div className="absolute left-0 top-[320px] h-[300px] border-r-2 border-dashed border-purple" />

    {/* Third row horizontal line */}
    {/* <div className="absolute top-[380px] left-0 right-[10%] border-t-2 border-dashed border-purple" /> */}
    <div className="absolute top-[620px] left-0 right-0 border-t-2 border-dashed border-purple" />

    {/* Right vertical connector 2*/}
    {/* <div className="absolute right-0 top-[380px] h-[180px] border-r-2 border-dashed border-gray-400" /> */}
  </div>
);

const ProjectPhases:React.FC<{translate:Translate}> = ({translate}) => {
  const phases = translate.Home.ProjectPhase.item

  return (
    <div>
      <div className="w-full max-w-[1200px] mx-auto px-8 py-20 hidden lg:block">
        <h2 className="text-3xl font-roboto font-semibold text-center mb-16 text-greenWhite">
          {translate.Home.ProjectPhase.header}
        </h2>
        <div className="relative">
          <ConnectorLines />
          {/* First Row */}
          <div className="flex flex-col md:flex-row justify-between px-5 mb-9 relative z-10">
            {phases.slice(0, 4).map((phase) => (
              <ProjectPhase key={phase.number} {...phase} />
            ))}
          </div>
          {/* Second Row */}
          <div className="flex flex-col md:flex-row-reverse justify-between pr-5 pl-10 mb-10 relative z-10">
            {phases.slice(4, 7).map((phase) => (
              <ProjectPhase key={phase.number} {...phase} />
            ))}
            {/* <div className="md:w-48" /> Spacer for alignment */}
          </div>
          {/* Third Row */}
          <div className="flex flex-col md:flex-row pl-10 justify-between relative z-10">
            {phases.slice(7).map((phase) => (
              <ProjectPhase key={phase.number} {...phase} />
            ))}
            {/* <div className="md:w-48" /> Spacer for alignment */}
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex flex-col">
        <h2 className="text-3xl font-roboto font-semibold text-center text-greenWhite mb-5">
          Project Phases
        </h2>
        <div className="flex flex-[370px] items-center">
          <StepCarousel translate={translate}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectPhases;
