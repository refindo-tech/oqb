'use client'
import { useEffect, useState } from "react"
import CardBlog from "@/components/atom/CardBlog"
// import InputForm from "../atom/InputForm"
import SearchInput from "../atom/SearcInput"
import {listBlog} from '@/utils/lib/fetchBlog'
import ButtonComponent from "../atom/Button"
interface Blog {
    id: number;
    title: string;
    description: string;
    slug: string;
    content: string;
    tags: string;
    creator: string;
    thumbnail:string;
    category: "TechnologyTrend" | "EducationTutorial" | "ProjectCasesStudy" | "BusinessTechnologyManagement";
    created_at: string;
    updated_at: string;
}
const BlogContainer = () => {
    const [rawData, setRawData] = useState<Blog[]|null>(null)
    const [dataListBlog, setDataListBlog] = useState<Blog[] | null>(null)
    // const [dataFilter, setDataFilter] = useState<Blog[]|null>(null)
    const [searchValue, setSearchValue] = useState<string> ('')
    const [categoryValue, setCategoryValue] = useState<string>('')
    const categoryOption = [
        {value:"", label:"All"},
        {value:"TechnologyTrend", label: "Technology & Trend"}, 
        {value:"EducationTutorial", label: "Education & Tutorial"}, 
        {value:"ProjectCasesStudy", label: "Project Case Study"}, 
        {value:"BusinessTechnologyManagement", label:" Business Technology Management"}
    ]
    const handleSearch = (value:string) => {
        setSearchValue(value)
    }
    const handleCategory = (value:string) => {
        setCategoryValue(value)
    }
    useEffect(()=>{
        const fetchAPI = async() =>{
            try {
                const response = await listBlog()
                if(response){
                    setRawData(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAPI()
    },[])
    useEffect(()=>{
        const createListBlog = () => {
            if(searchValue !== ''){
                const filtered = rawData?.filter(data=>{
                    return data.title.toLowerCase().includes(searchValue.toLowerCase())
                })
                setDataListBlog(filtered || null)
            }
            else if(categoryValue){
                if(categoryValue !== ''){
                    const filtered = rawData?.filter(data=>{
                        return data.category.toLowerCase().includes(categoryValue.toLowerCase())
                    })
                    setDataListBlog(filtered || null)
                } else{
                    setDataListBlog(rawData)
                }
            }
            else{
                setDataListBlog(rawData)
            }
        }
        createListBlog()
    },[rawData, searchValue, categoryValue])
    useEffect(()=>{
        console.log(dataListBlog)
    },[dataListBlog])
    return(
        <article className="min-h-screen w-full flex justify-center p-5 lg:p-10">
            <div className="w-full lg:w-[90%] flex flex-wrap-reverse lg:flex-nowrap gap-5">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {dataListBlog && dataListBlog?.map((item, index)=>(
                        <CardBlog title={`${item.title}`} slug={`${item.slug}`} description={`${item.description}`} thumbnail={item.thumbnail} key={index}/>
                    ))}
                </div>
                <div className="w-full lg:w-[30%] flex flex-col gap-5 py-5">
                    {/* <InputForm type="text" autoFocus={false} placeholder="Cari Konten" name="search" label={false}/>
                     */}
                    <SearchInput handleValue={handleSearch}/>
                    <h3 className="text-greenWhite pl-3 lg:pl-0 font-semibold text-3xl font-roboto">Category</h3>
                    <div className="flex flex-row flex-wrap gap-3">
                        {categoryOption.map((item, index)=>(
                            <ButtonComponent
                                key={index}
                                propsClass={`text-center text-nowrap bg-transparent hover:bg-purple hover:text-navy border-2 border-purple rounded-full text-left font-semibold p-3 text-blueWhite ${item.label === "All" ? 'w-[70]': 'w-fit'}`}
                                onClick={()=>handleCategory(item.value)}
                                content={
                                    <>{item.label}
                                    </>
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}
export default BlogContainer