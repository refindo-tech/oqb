// import Link from "next/link"
import CardService from "@/components/atom/CardService";
const ServiceOffer = () => {
  return (
    <div
        id="services"
        className="bg-navy min-h-[70vh] flex flex-col items-center justify-center gap-10 text-center py-20 text-gray-600"
    >
      <h2 className="text-5xl font-semibold font-roboto text-greenWhite">
        Our Services
      </h2>
      <p className="max-w-[70%] text-blueWhite text-lg">
        Discover tailored solutions designed to meet your unique needs. From
        custom software development to system integration, our services empower
        your business with innovative technology and seamless execution
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
        />
        <CardService
          path="/images/assets/card-image/mobile_app.jpg"
          theme={"Mobile App"}
        />
        <CardService
          path="/images/assets/card-image/multiplatform.jpg"
          theme={"Multiplatform App"}
        />
        <CardService
          path="/images/assets/card-image/system_integration.jpg"
          theme={"System Integration"}
        />
      </div>
      {/* <Link href={'/product'} className="p-3 text-white font-semibold bg-biru hover:bg-blue-800 rounded-lg">See more</Link> */}
    </div>
  );
};
export default ServiceOffer;
