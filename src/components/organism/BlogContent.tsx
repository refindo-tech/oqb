import LastArticle from "@/components/molecules/LastArticle"
const BlogContent = () => {
    return(
        <article className="w-full min-h-screen flex justify-center py-20">
            <div className="w-[90%] flex gap-5 flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-[70%] rounded-xl bg-[#1c1678] text-greenWhite p-10">
                    <h1 className="text-3xl lg:text-5xl font-bold pb-5 border-b-2 border-greenWhite">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    <div className="font-serif mt-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi recusandae saepe molestias est fugit voluptatem, blanditiis ad totam atque aut. Blanditiis perspiciatis ipsa odio, molestiae cumque quam delectus iste!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit, voluptatibus sequi error, at quia ratione obcaecati, tempora corrupti tempore reiciendis consectetur eius pariatur suscipit aperiam aspernatur deserunt earum blanditiis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae libero aperiam repellat iure non numquam doloribus cumque alias eius, debitis possimus accusamus facilis eveniet molestiae expedita blanditiis quaerat optio quae.</p>
                    </div>
                </div>
                <div className="w-[30%]">
                    <LastArticle />
                </div>
            </div>
        </article>
    )
}
export default BlogContent