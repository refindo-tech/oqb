import Image from "next/image";
const SliderIcon = () => {
  return (
    <div className=" w-full flex justify-center">
      <div
        className="relative w-[80%] overflow-hidden h-[120px] rounded-lg flex gap-5"
        // style={{
        //   maskImage:
        //     "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
        //   WebkitMaskImage:
        //     "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
        // }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gradient-to-r from-navy/100 via-transparent to-navy/100">
        </div>
        <ul
          // ref={logosRef}
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-around w-full h-full animate-infinite-scroll"
        >
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          {/* {Array(5)
            .fill("/images/logo_oqb.png")
            .map((src, index) => (
              <li key={index}>
                <Image src={src} alt="client-logo" width={120} height={120} />
              </li>
            ))} */}
        </ul>
        <ul
          // ref={logosRef}
          className=" flex justify-around w-full h-full animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          <li>
            <Image
              src={"/images/logo_oqb.png"}
              alt="client-logo"
              width={120}
              height={120}
            />
          </li>
          {/* {Array(5)
            .fill("/images/logo_oqb.png")
            .map((src, index) => (
              <li key={index}>
                <Image src={src} alt="client-logo" width={120} height={120} />
              </li>
            ))} */}
        </ul>
      </div>
    </div>
  );
};
export default SliderIcon;
