const Benefit = () => {
  return (
    <article className="min-h-[60vh] w-full py-10  flex flex-col items-center gap-10">
      <div className="w-[80%] flex flex-col gap-5 text-center">
        <h2 className="font-semibold text-4xl text-biru ">Why Choose Us?</h2>
        <p className="text-lg text-gray-500 ">
          We are guided by the principle that every solution we build must
          embody quality, collaboration, and purpose.
        </p>
      </div>
      <div className="w-[80%] grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded-lg min-h-[25vh] bg-gray-100 p-5 flex flex-col gap-3">
          <div className="bg-biru h-20 w-20  rounded-lg"></div>
          <h3 className="text-xl font-semibold">Commitment to Quality:</h3>
          <p className="">
            We’re driven by the belief that true quality is achieved through
            dedication and attention to detail. Every software development
            project is a testament to our pursuit of excellence
          </p>
        </div>
        <div className="rounded-lg min-h-[25vh] bg-gray-100 p-5 flex flex-col gap-3">
          <div className="bg-biru h-20 w-20  rounded-lg"></div>
          <h3 className="text-xl font-semibold">Credible Experience</h3>
          <p className="">
            With diverse portfolio, our software development services are
            grounded in a deep understanding of the unique challenges each
            sector faces. We don’t just deliver solutions; we listen, we learn,
            and we craft what truly matters
          </p>
        </div>
        <div className="rounded-lg min-h-[25vh] bg-gray-100 p-5 flex flex-col gap-3">
          <div className="bg-biru h-20 w-20  rounded-lg"></div>
          <h3 className="text-xl font-semibold">Collaborative Approach</h3>
          <p className="">
            Your vision guides our process. We take the time to understand your
            needs, ensuring our solutions not only meet expectations but also
            elevate your goals to new heights
          </p>
        </div>
        <div className="rounded-lg min-h-[25vh] bg-gray-100 p-5 flex flex-col gap-3">
          <div className="bg-biru h-20 w-20  rounded-lg"></div>
          <h3 className="text-xl font-semibold">Continuous Support</h3>
          <p className="">
            We view every project as the start of a long-term relationship. Our
            work doesn’t end with deployment; we stay by your side with
            guarantee maintenance, ensuring your application development project
            continues to perform optimally
          </p>
        </div>
      </div>
    </article>
  );
};
export default Benefit;
