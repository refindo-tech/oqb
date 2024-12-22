import BlogContent from "@/components/organism/BlogContent"
const BlogPage = async({params}:{params:Promise<{lang: "en" | "id"; slug:string}>}) => {
    const {slug} = await params

    return(
        <>
            <BlogContent slug={slug}/>
        </>
    )
}
export default BlogPage