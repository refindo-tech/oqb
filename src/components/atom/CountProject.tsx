const CountProject = () => {
  return (
    <div className="w-full lg:w-[50%] flex flex-col gap-5 items-center">
      <div className="flex gap-5 w-full">
        <div className="h-[25vh] w-full bg-purple flex flex-col gap-3 items-center justify-center rounded-xl">
          <h4 className="font-bold text-4xl font-roboto text-greenWhite">20</h4>
          <h5 className="font-semibold text-xl text-navy text-center font-poppins px-3">
            Corporate Projects
          </h5>
        </div>
        <div className="h-[25vh] w-full bg-purple flex flex-col gap-3 items-center justify-center rounded-xl">
          <h4 className="font-bold text-4xl font-roboto text-greenWhite">1</h4>
          <h5 className="font-semibold text-xl text-navy text-center font-poppins px-3">
            Goverment Projects
          </h5>
        </div>
      </div>
      <div className="h-[25vh] w-[50%] bg-purple flex flex-col gap-3 items-center justify-center rounded-xl">
        <h4 className="font-bold text-4xl font-roboto text-greenWhite">5</h4>
        <h5 className="font-semibold text-xl text-navy text-center font-poppins px-10 lg:px-3">
          Educational Institution Project
        </h5>
      </div>
    </div>
  );
};
export default CountProject;
