import { NextResponse } from "next/server";
import m$blog from "../../../../backend/modules/BlogModule";
export const GET = async() => {
    try {
        const response = await m$blog.listBlog()
        return NextResponse.json(response,{response:response.code})
    } catch (error) {
        console.log(error)
        return NextResponse.json(response,{status:response.code})
    }
}