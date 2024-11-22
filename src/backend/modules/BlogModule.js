import db from "../../utils/helpers/db";
class Blog {
    listBlog = async () =>{
        try {
            const getListBlog = await db.blog.findMany()
            console.log(getListBlog)
            return{
                code:200,
                message: "Get List Blog Success",
                data:getListBlog
            }
        } catch (error) {
            console.log(error)
            return {
                code:500,
                message: "Blog Module List Blog Error"
            }
        }
    }
}
const m$blog = new Blog()
export default m$blog