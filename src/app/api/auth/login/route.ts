import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import AuthModule from "@/backend/modules/authModule";
import { payloadLogin } from "@/utils/type/authType";
export const POST = async(req:NextRequest) => {
    try {
        const formData = await req.formData()
        const payload:payloadLogin = {
            email:formData.get('email') as string || "",
            password:formData.get('password') as string || "",
        }
        // const payload:payloadLogin = await req.json()
        const response = await AuthModule.loginUser(payload)
        return NextResponse.json(response,{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
}