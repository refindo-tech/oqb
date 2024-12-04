import { NextResponse } from "next/server"
import m$blog from "../../../../backend/modules/BlogModule"
export const GET = async(req) => {
    try {
        const url = new URL(req.url);
        const params = url.searchParams;
        const slug = params.get('slug')
        const payload ={slug:decodeURIComponent(slug)}
        const response = await m$blog.detailBlog(payload)
        return NextResponse.json(response, {status:response.code})
    } catch (error) {
        console.log('Error in Detail Blog Route', error)
        return NextResponse.json({message:'Error when fetch detailBlog'}, {status:500})
    }
}