"use client";
import { useState, useEffect } from "react";
import { listBlog } from "@/utils/lib/fetchBlog";
import Link from "next/link";
import AdsBanner from "./AdsBanner";
type Blog = {
  id: number;
  title: string;
  description: string;
  slug: string;
  content: string;
  tags: string;
  creator: string;
  thumbnail: string;
  category:
    | "TechnologyTrend"
    | "EducationTutorial"
    | "ProjectCasesStudy"
    | "BusinessTechnologyManagement";
  created_at: string;
  updated_at: string;
};
const LastArticle = () => {
  const [dataListBlog, setDataListBlog] = useState<Blog[] | null>(null);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await listBlog();
      if (response) {
        setDataListBlog(response.data.slice(0, 3));
      }
    };
    fetchAPI();
  }, []);
  return (
    <div className="rounded-xl w-[90%] mx-auto lg:mx-0 lg:w-full flex flex-col">
      <h3 className="font-bold font-roboto text-center text-3xl p-4 w-full rounded-t-xl text-white bg-blueWhite/10">
        Last Article
      </h3>
      <div className="w-full p-5 gap-3 bg-[#00224D] flex-grow flex flex-col justify-between font-poppins rounded-b-xl">
        {dataListBlog?.map((item, index) => (
          <Link
            prefetch={true}
            href={item.slug}
            className="h-1/3 bg-blueWhite/10 rounded-lg flex flex-col p-3 gap-1 hover:bg-blueWhite/30"
            key={index}
          >
            <h3 className="font-semibold text-white line-clamp-2">
              {item.title}
            </h3>
            <p className="text-white/70 line-clamp-2">{item.description}</p>
          </Link>
        ))}
      </div>
      <AdsBanner />
    </div>
  );
};
export default LastArticle;
