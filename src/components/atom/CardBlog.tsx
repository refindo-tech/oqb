import Image from "next/image";
import Link from "next/link";
import React from "react";
interface propsCardBlog {
  title:string,
  slug:string,
  description:string
}
const CardBlog:React.FC<propsCardBlog> = ({title, description, slug}) => {
  return (
    <Link
      prefetch={true}
      href={`/news/${slug}`}
      className="w-full min-h-[350px] lg:min-h-[400px] py-5 px-3 hover:py-2 hover:px-0 rounded-t-lg"
    >
      <div className="w-full h-full rounded-lg flex flex-col">
        <div className="w-full h-[100%] relative -z-10">
          <div className="rounded absolute w-full h-full">
            <Image
              src="/images/assets/card-image/thumbnail1.jpg"
              alt="thumbnail-card"
              fill // Menyebarkan gambar sepenuhnya
              sizes="100vw" // Untuk responsivitas optimal
              style={{
                //   objectFit: "contain", // Memastikan gambar tidak terpotong
                //   borderRadius: "8px", // Membuat tepi rounded
                borderRadius: "8px",
              }}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 p-3 flex flex-grow flex-col justify-end items-end gap-5 bg-gradient-to-t from-[#1c1678]/100  to-gray-700/50 rounded-lg">
            <div className="w-full flex flex-col gap-3 h-[40%] justify-start">
              <h3 className="font-semibold text-2xl text-greenWhite hover:text-purple">{title}</h3>
              <p className="line-clamp-2 text-blueWhite text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CardBlog;

{
  /* <div className="flex gap-4">
  <div className="w-12 h-12 rounded-full bg-biru"></div>
  <div className="flex flex-col">
    <p className="font-semibold text-lg">Nama Publisher</p>
    <p className="text-gray-500">Tanggal Terbit</p>
  </div>
</div> */
}
