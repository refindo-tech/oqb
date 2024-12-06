import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsCardBlog {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
}

const CardBlog: React.FC<propsCardBlog> = ({
  title,
  description,
  slug,
  thumbnail,
}) => {
  return (
    <Link
      prefetch={true}
      href={`/insight/${slug}`}
      className="w-full min-h-[300px] xl:h-[400px] rounded-lg"
    >
      <div className="w-full h-full rounded-lg flex flex-col overflow-hidden relative group">
        {/* Wrapper untuk memastikan efek zoom tidak keluar */}
        <div className="w-full h-full relative rounded-lg">
          <Image
            src={`${thumbnail}`}
            alt="thumbnail-card"
            fill
            // sizes="100vw"
            className="transition-transform duration-500 group-hover:scale-110 rounded-lg" // Animasi zoom
            style={{
              objectFit: "cover", // Menyesuaikan ukuran gambar tanpa crop
              objectPosition: "center",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 p-3 flex flex-grow flex-col justify-end items-end gap-5 bg-gradient-to-t from-[#1c1678]/100 to-gray-700/50 rounded-lg">
          <div className="w-full flex flex-col gap-3 mb-2 min-h-[40%] justify-start rounded-lg">
            <h3 className="font-semibold text-lg lg:text-2xl text-greenWhite hover:text-purple line-clamp-2">
              {title}
            </h3>
            <p className="line-clamp-2 text-blueWhite lg:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
