import Image from "next/image";
import Link from "next/link";
const CardBlog = () => {
  return (
    <Link
    prefetch={true}
      href={"/"}
      className="w-full min-h-[400px] lg:min-h-[400px] py-5 px-3 hover:py-2 rounded-t-lg"
    >
      <div className="border-2 border-gray-100 w-full h-full rounded-lg flex flex-col">
        <div className="w-full h-[60%] relative -z-10">
          <div className="rounded-t-lg absolute w-full h-full">
            <Image
              src="/images/card-image/thumbnail1.jpg"
              alt="thumbnail-card"
              fill // Menyebarkan gambar sepenuhnya
              sizes="100vw" // Untuk responsivitas optimal
              style={{
                //   objectFit: "contain", // Memastikan gambar tidak terpotong
                //   borderRadius: "8px", // Membuat tepi rounded
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
          </div>
        </div>
        <div className="p-3 flex flex-grow flex-col justify-between gap-5">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-2xl hover:text-biru">TITLE</h3>
            <p className="line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto accusantium nisi odio. Dolor omnis tempore rem vitae?
              Expedita possimus ratione repellat, culpa quasi est enim veritatis
              sequi quisquam, labore alias!
            </p>
          </div>
          {/* <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-biru"></div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Nama Publisher</p>
              <p className="text-gray-500">Tanggal Terbit</p>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
};
export default CardBlog;
