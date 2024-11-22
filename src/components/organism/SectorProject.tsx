import Image from "next/image";
import CountProject from "@/components/atom/CountProject";
const SectorProject = () => {
  return (
    <div className="min-h-[70vh] w-full flex justify-center items-center py-10">
      <div className="flex items-center w-[90%] lg:w-[80%] gap-10 flex-wrap-reverse lg:flex-nowrap">
        <CountProject />
        <div className="w-full lg:w-[50%] min-h-[50vh] flex flex-col gap-4 text-center">
          <h2 className="text-5xl font-bold text-greenWhite">
            Partner In Your Vision
          </h2>
          <p className="text-blueWhite text-lg">
            OQB is a software house that stands at
            the crossroads of innovation and reliability. We don’t just build
            software; we create tailored digital solutions designed to optimize
            workflows, enhance team productivity, and make technology truly work
            for your business needs. With a focus on impact and commitment to
            quality, we’re here to bring your vision to life with precision and
            purpose. 
            <br />
            <br />
            We are here to empower organizations to unlock their
            potential by transforming visionary ideas into impactful and
            sustainable digital solutions. We strive to be a trusted partner in
            delivering custom software applications that drive growth, optimize
            workflows, and support innovation.
          </p>
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
