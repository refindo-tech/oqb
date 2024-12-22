"use client";
import React from "react";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation"
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { detailBlog } from "@/utils/lib/fetchBlog";
import LastArticle from "@/components/molecules/LastArticle";
import "react-quill-new/dist/quill.snow.css";
type dataContent = {
  category: string;
  content: string;
  created_at: string;
  creator: string | null;
  id: number | null;
  slug: string;
  tags: string | null;
  thumbnail: string;
  title: string;
  updated_at: string;
};
const BlogContent:React.FC<{slug:string}> = ({slug}) => {
  // const router = useRouter()
  // const path = usePathname();
  // const rawSlug = path.split("/")[2];
  // const slug = decodeURIComponent(rawSlug);
  const [dataContent, setDataContent] = useState<dataContent>({
    category: "",
    content: "",
    created_at: "",
    creator: "",
    id: null,
    slug: "",
    tags: "",
    thumbnail: "",
    title: "",
    updated_at: "",
  });
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await detailBlog({ slug });
      if (response) {
        console.log(response.data);
        setDataContent(response.data);
      }
    };
    fetchAPI();
  }, [slug]);
  return (
    <article className="w-full min-h-screen flex justify-center py-20">
      <div className="w-full lg:w-[90%] flex gap-5 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[70%] lg:rounded-xl bg-[#00224D] text-white p-5">
          {dataContent.thumbnail !== "" && (
            <div className="relative h-[250px] md:h-[350px] lg:h-[400px] mb-5">
              <div className="absolute rounded-lg shadow-xl h-full w-full">
                <Image
                  src={dataContent.thumbnail}
                  alt={dataContent.title}
                  fill // Menyebarkan gambar sepenuhnya
                  sizes="100vw" // Untuk responsivitas optimal
                  style={{
                    //   objectFit: "contain", // Memastikan gambar tidak terpotong
                    //   borderRadius: "8px", // Membuat tepi rounded
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          )}
          {dataContent && (
            <h1 className="text-2xl lg:text-5xl font-bold pb-5 border-b-2 border-greenWhite">
              {dataContent.title}
            </h1>
          )}
          {/* <div className="font-serif mt-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi recusandae saepe molestias est fugit voluptatem, blanditiis ad totam atque aut. Blanditiis perspiciatis ipsa odio, molestiae cumque quam delectus iste!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit, voluptatibus sequi error, at quia ratione obcaecati, tempora corrupti tempore reiciendis consectetur eius pariatur suscipit aperiam aspernatur deserunt earum blanditiis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae libero aperiam repellat iure non numquam doloribus cumque alias eius, debitis possimus accusamus facilis eveniet molestiae expedita blanditiis quaerat optio quae.</p>
                    </div> */}
          <div
            id="quill-content"
            className=" mt-5 ql-editor font-poppins ql-content px-0"
            dangerouslySetInnerHTML={{ __html: dataContent.content }}
            style={{
              wordWrap: "break-word",
              overflow: "hidden",
              maxWidth: "100%",
            }}
          />
        </div>
        <div className="w-full lg:w-[30%]">
          <LastArticle />
        </div>
      </div>
    </article>
  );
};
export default BlogContent;
