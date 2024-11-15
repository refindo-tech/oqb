import CardBlog from "@/components/atom/CardBlog"
const ContainerCard = () =>{
    return(
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CardBlog />
            <CardBlog />
            <CardBlog />
        </div>
    )
}
export default ContainerCard