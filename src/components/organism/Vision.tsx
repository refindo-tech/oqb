import Image from "next/image";
const VisionComponent = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20 gap-5">
      <div className="w-[80%] flex flex-wrap items-center xl:flex-nowrap gap-10">
        <div className="relative w-full xl:w-[50%] h-[40vw] xl:h-[40vh] rounded-2xl shadow-xl">
          <div className="absolute w-full h-full">
            <Image
              src={'/images/assets/transforming_idea.jpg'}
              alt="vision"
              fill
              style={{
                borderRadius: "8px"
              }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 flex-grow xl:max-w-[50%]">
          <h2 className="text-greenWhite text-4xl lg:text-6xl font-semibold">Transforming Ideas into Impact</h2>
          <h3 className="font-poppins lg:text-lg font-medium text-blueWhite">We are here to empower organizations to unlock their potential by transforming visionary ideas into impactful and sustainable digital solutions. We strive to be a trusted partner in delivering custom software applications that drive growth, optimize workflows, and support innovation.</h3>
        </div>
      </div>
    </div>
  );
};
export default VisionComponent;
