import React from "react";
interface PropsPercentage {
    title:string,
    percent:number
}
const ProjectPercentage: React.FC<PropsPercentage> = ({title, percent}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between font-bold font-poppins text-lg">
        <h3 className="text-blueWhite">{title}</h3>
        <h4 className="text-greenWhite">{`${percent}%`}</h4>
      </div>
      <div className="bg-transparent h-4 py-2 px-1 w-full rounded-full flex items-center">
        <div className={`h-2 bg-greenWhite rounded-full`} style={{width:`${percent}%`}}></div>
      </div>
    </div>
  );
};
export default ProjectPercentage;
