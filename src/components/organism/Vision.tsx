const VisionComponent = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center py-10">
      <div className="w-[80%] flex flex-wrap lg:flex-nowrap gap-10">
        <div className="bg-greenWhite w-full lg:w-[40%] h-[50vh] rounded-2xl shadow-xl"></div>
        <div className="flex flex-col justify-center gap-10 flex-grow lg:max-w-[60%]">
          <h2 className="text-greenWhite text-5xl lg:text-7xl font-semibold">Transforming Ideas into Impact</h2>
          <h3 className="font-poppins text-lg font-medium text-blueWhite">We are here to empower organizations to unlock their potential by transforming visionary ideas into impactful and sustainable digital solutions. We strive to be a trusted partner in delivering custom software applications that drive growth, optimize workflows, and support innovation.</h3>
        </div>
      </div>
    </div>
  );
};
export default VisionComponent;
