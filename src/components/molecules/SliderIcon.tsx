import Image from "next/image";
const SliderIcon = () => {
  const logos =[
    "/images/assets/client-logo/mya.png",
    "/images/assets/client-logo/my_beautica.png",
    "/images/assets/client-logo/netplus_connection.png",
    "/images/assets/client-logo/y_irsyadul_ibad.png",
    "/images/assets/client-logo/untirta.png",
    "/images/assets/client-logo/isuzu.png",
    "/images/assets/client-logo/myg.png",
    "/images/assets/client-logo/my_academy.png",
    "/images/assets/client-logo/p_kota_serang.png",
    "/images/assets/client-logo/Kedaireka.png",
    "/images/assets/client-logo/sman_3_kota_serang.png"
  ]
  return (
    <div className=" w-full flex justify-center">
      <div
        className="relative w-[80%] overflow-hidden h-[70] lg:h-[120px] rounded-lg flex gap-5"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gradient-to-r from-navy/100 via-transparent to-navy/100">
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-around w-full h-full animate-infinite-scroll"
        >{[...logos, ...logos].map((item, index)=>(
          <Image
            src={item}
            alt="client-logo"
            width={120}
            height={120}
            className="mx-2 lg:mx-5 lg:w-[120] lg:h-[120] w-[70] h-[70] block"
            key={index}
          />
        ))}
        </div>
      </div>
    </div>
  );
};
export default SliderIcon;

{/* {Array(5)
  .fill("/images/logo_oqb.png")
  .map((src, index) => (
    <li key={index}>
      <Image src={src} alt="client-logo" width={120} height={120} />
    </li>
  ))} */}