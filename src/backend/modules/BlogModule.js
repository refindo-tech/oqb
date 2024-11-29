import db from "../../utils/helpers/db";
class Blog {
    listBlog = async () =>{
        try {
            const getListBlog = await db.blog.findMany()
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
    createBlog = async(req) =>{
        try {
            const addBlog = await db.blog.create({
                data:req
            })
            if(addBlog){
                return{
                    code:200,
                    message:"Create Blog Success"
                }
            }
        } catch (error) {
            console.log(error)
            return {
                code:500,
                message: "Blog Module Create Blog Error"
            }
        }
    }
}
const m$blog = new Blog()
export default m$blog