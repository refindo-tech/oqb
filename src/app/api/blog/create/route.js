import { NextResponse } from "next/server";
import m$blog from "../../../../backend/modules/BlogModule";
export const POST = async(req) => {
    try {
        const payload = await req.json()
        const response = await m$blog.createBlog(payload)
        return NextResponse.json(response,{status:response.code})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error in Blog Create API"},{status:500})
    }
}