import db from "../../utils/helpers/db";
class Blog {
    listBlog = async () =>{
        try {
            const getListBlog = await db.blog.findMany({
                orderBy:{created_at:'desc'}
            })
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
            console.log(req)
            const {title, slug, description, thumbnail, content, category} = req 
            const addBlog = await db.blog.create({
                data:{
                    title,
                    slug:decodeURIComponent(slug),
                    description,
                    thumbnail,
                    content,
                    category
                }
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
    detailBlog = async(req) =>{
        try {
            const {slug} = req
            console.log('Detail Blog Module',slug)
            const getBlog = await db.blog.findFirst({
                where:{
                    slug:slug
                }
            })
            if(getBlog){
                return {
                    code:200,
                    message:'Get Detail Blog Success',
                    data:getBlog
                }
            }
            else{
                return {
                    code:404,
                    message:'Blog Not Found',
                }
            }
        } catch (error) {
            console.log('Error Blog Module Detail Blog',error)
            return{
                code:500,
                message:'Error when get detail blog'
            }
        }
    }
}
const m$blog = new Blog()
export default m$blog