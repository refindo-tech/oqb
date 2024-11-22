'use client'
import { useEffect, useState } from "react"
import CardBlog from "@/components/atom/CardBlog"
import InputForm from "../atom/InputForm"
import {listBlog} from '@/utils/lib/fetchBlog'
interface Blog {
    id: number;
    title: string;
    description: string;
    slug: string;
    content: string;
    tags: string;
    creator: string;
    category: "TechnologyTrend" | "EducationTutorial" | "ProjectCasesStudy" | "BusinessTechnologyManagement";
    created_at: string;
    updated_at: string;
}
const BlogContainer = () => {
    const [dataListBlog, setDataListBlog] = useState<Blog[] | null>(null)
    useEffect(()=>{
        const fetchAPI = async() =>{
            try {
                const response = await listBlog()
                if(response){
                    setDataListBlog(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAPI()
    },[])
    return(
        <article className="min-h-screen w-full flex justify-center p-5 lg:p-10">
            <div className="w-full lg:w-[90%] flex gap-5">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {dataListBlog && dataListBlog?.map((item, index)=>(
                        <CardBlog title={`${item.title}`} slug={`${item.slug}`} description={`${item.description}`} key={index}/>
                    ))}
                </div>
                <div className="hidden w-[30%] lg:flex flex-col gap-5 py-5">
                    <InputForm type="text" autoFocus={false} placeholder="Cari Konten"/>
                    <h3 className="text-greenWhite font-semibold text-3xl font-roboto">Kategori</h3>
                </div>
            </div>
        </article>
    )
}
export default BlogContainer