"use client";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation";
import { detailBlog } from "@/utils/lib/fetchBlog";
import LastArticle from "@/components/molecules/LastArticle";
import 'react-quill-new/dist/quill.snow.css';
type dataContent = {
    category:string,
    content:string,
    created_at:string,
    creator: string | null,
    id:number|null,
    slug:string,
    tags:string | null,
    thumbnail:string | null,
    title:string,
    updated_at:string
}
const BlogContent = () => {
  // const router = useRouter()
  const path = usePathname();
  const rawSlug = path.split("/")[2];
  const slug = decodeURIComponent(rawSlug);
  const [dataContent, setDataContent] = useState<dataContent>({
    category:'',
    content:'',
    created_at:'',
    creator: '',
    id:null,
    slug:'',
    tags:'',
    thumbnail:'',
    title:'',
    updated_at:''
  });
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await detailBlog({ slug });
      if (response) {
        console.log(response.data)
        setDataContent(response.data);
      }
    };
    fetchAPI();
  }, [slug]);
  return (
    <article className="w-full min-h-screen flex justify-center py-20">
      <div className="w-[90%] flex gap-5 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[70%] rounded-xl bg-[#00224D] text-white p-10">
          {dataContent&&<h1 className="text-3xl lg:text-5xl font-bold pb-5 border-b-2 border-greenWhite">
            {dataContent.title}
          </h1>}
          {/* <div className="font-serif mt-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi recusandae saepe molestias est fugit voluptatem, blanditiis ad totam atque aut. Blanditiis perspiciatis ipsa odio, molestiae cumque quam delectus iste!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit, voluptatibus sequi error, at quia ratione obcaecati, tempora corrupti tempore reiciendis consectetur eius pariatur suscipit aperiam aspernatur deserunt earum blanditiis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae libero aperiam repellat iure non numquam doloribus cumque alias eius, debitis possimus accusamus facilis eveniet molestiae expedita blanditiis quaerat optio quae.</p>
                    </div> */}
          <div
            id="quill-content"
            className=" mt-5 ql-editor font-serif"
            dangerouslySetInnerHTML={{__html:dataContent.content}}
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
