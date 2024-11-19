import CardBenefit from "../atom/CardBenefit";
const Benefit = () => {
  return (
    <article className="min-h-[60vh] w-full py-10  flex flex-col flex-wrap lg:flex-nowrap items-center justify-center gap-10">
      <div className="w-[80%] flex flex-col gap-5 text-center">
        <h2 className="font-semibold text-4xl text-greenWhite ">
          Why Choose Us?
        </h2>
        <p className="text-lg text-blueWhite ">
          We are guided by the principle that every solution we build must
          embody quality, collaboration, and purpose.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-y-5 gap-3">
        {/* <div className="flex flex-col gap-10"> */}
          <CardBenefit
            path="/images/assets/commitment.svg"
            title="Commitment to Quality"
            description={
              "We’re driven by the belief that true quality is achieved through dedication and attention to detail. Every software development project is a testament to our pursuit of excellence"
            }
          />
          <CardBenefit
            path="/images/assets/experience.svg"          
            title="Credible Experience"
            description="With diverse portfolio, our software development services are
            grounded in a deep understanding of the unique challenges each
            sector faces. We don’t just deliver solutions; we listen, we learn,
            and we craft what truly matters"
          />
        {/* </div> */}
        {/* <div className="flex flex-col gap-10"> */}
          <CardBenefit
            path="/images/assets/collaborative.svg"          
            title="Collaborative Approach"
            description="Your vision guides our process. We take the time to understand your
            needs, ensuring our solutions not only meet expectations but also
            elevate your goals to new heights"
          />
          <CardBenefit
            path="/images/assets/continous.svg"          
            title="Continuous Support"
            description="We view every project as the start of a long-term relationship. Our
            work doesn’t end with deployment; we stay by your side with
            guarantee maintenance, ensuring your application development project
            continues to perform optimally"
          />
        {/* </div> */}
        {/* <div className="rounded-full h-[30vh] w-[30vh] text-center bg-blueWhite/25 backdrop-blur-lg p-5 flex flex-col items-center gap-3 text-greenWhite">
          <div className="bg-biru h-20 w-20 rounded-lg"></div>
          <h3 className="text-xl font-semibold">Commitment to Quality:</h3>
          <p className="text-blueWhite">
            We’re driven by the belief that true quality is achieved through
            dedication and attention to detail. Every software development
            project is a testament to our pursuit of excellence
          </p>
        </div>
        <div className="rounded-full h-[30vh] w-[30vh] text-center bg-blueWhite/25 backdrop-blur-lg p-5 flex flex-col items-center gap-3 text-greenWhite">
          <div className="bg-biru h-20 w-20  rounded-lg"></div>
          <h3 className="text-xl font-semibold">Credible Experience</h3>
          <p className="text-blueWhite">
            With diverse portfolio, our software development services are
            grounded in a deep understanding of the unique challenges each
            sector faces. We don’t just deliver solutions; we listen, we learn,
            and we craft what truly matters
          </p>
        </div>
        <div className="rounded-full h-[30vh] w-[30vh] text-center bg-blueWhite/25 backdrop-blur-lg p-5 flex flex-col items-center gap-3 text-greenWhite">
          <div className="bg-biru h-20 w-20  rounded-lg"></div>
          <h3 className="text-xl font-semibold">Collaborative Approach</h3>
          <p className="text-blueWhite">
            Your vision guides our process. We take the time to understand your
            needs, ensuring our solutions not only meet expectations but also
            elevate your goals to new heights
          </p>
        </div>
        <div className="rounded-full h-[30vh] w-[30vh] tex4-center bg-blueWhite/25 backdrop-blur-lg p-5 flex flex-col items-center gap-3 text-greenWhite">
          <div className="bg-biru h-20 w-20  rounded-lg"></div>
          <h3 className="text-xl font-semibold">Continuous Support</h3>
          <p className="text-blueWhite">
            We view every project as the start of a long-term relationship. Our
            work doesn’t end with deployment; we stay by your side with
            guarantee maintenance, ensuring your application development project
            continues to perform optimally
          </p>
        </div> */}
      </div>
    </article>
  );
};
export default Benefit;
