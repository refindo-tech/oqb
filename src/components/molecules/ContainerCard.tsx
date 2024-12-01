"use client";
import { useEffect, useState } from "react";
import CardBlog from "@/components/atom/CardBlog";
import { listBlog } from "@/utils/lib/fetchBlog";
interface Blog {
  id: number;
  title: string;
  description: string;
  thumbnail:string;
  slug: string;
  content: string;
  tags: string;
  creator: string;
  category:
    | "TechnologyTrend"
    | "EducationTutorial"
    | "ProjectCasesStudy"
    | "BusinessTechnologyManagement";
  created_at: string;
  updated_at: string;
}
const ContainerCard = () => {
  const [dataListBlog, setDataListBlog] = useState<Blog[] | null>(null);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await listBlog();
        if (response) {
          console.log(response)
          setDataListBlog(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);
  const limitedBlogs = dataListBlog?.slice(0, 3);
  return (
    <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {limitedBlogs &&
        limitedBlogs?.map((item, index) => (
          <CardBlog
            title={`${item.title}`}
            slug={`${item.slug}`}
            description={`${item.description}`}
            thumbnail={`${item.thumbnail}`}
            key={index}
          />
        ))}
    </div>
  );
};
export default ContainerCard;
