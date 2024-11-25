"use client";
import Image from "next/image";
// import { useEffect, useRef } from "react";

const ClientSlider = () => {
  // const logosRef = useRef<HTMLUListElement | null>(null); // Referensi elemen ul

  // useEffect(() => {
  //   const logos = logosRef.current;
  //   if (logos) {
  //     // Gandakan konten ul
  //     const duplicate = logos.cloneNode(true) as HTMLUListElement;
  //     duplicate.setAttribute("aria-hidden", "true");
  //     logos.parentNode?.appendChild(duplicate);
  //   }
  // }, []);

  return (
    <div className="w-full h-[30vh] flex flex-col gap-10 items-center justify-center">
      <h1 className="font-poppins font-bold text-greenWhite text-5xl">
        Our Client
      </h1>
      <div
        className="relative w-[80%] overflow-hidden h-[120px] rounded-lg inline-flex gap-5"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
        }}
      >
        <ul
          // ref={logosRef}
          className=" flex justify-around w-full h-full animate-infinite-scroll"
        >
          <li>
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
          </li>
          <li>
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
          </li>
          <li>
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
          </li>
          <li>
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
          </li>
          <li>
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
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
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
          </li>
          <li>
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
          </li>
          <li>
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
          </li>
          <li>
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
          </li>
          <li>
            <Image src={"/images/logo_oqb.png"} alt="client-logo" width={120} height={120} />
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

export default ClientSlider;
