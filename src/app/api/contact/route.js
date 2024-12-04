import { NextResponse } from "next/server"
import m$contact from "../../../backend/modules/ContactModule"
export const POST = async(req) => {
    try {
        const payload = await req.json()
        const response = await m$contact.sendEmail(payload)
        return NextResponse.json(response, {status:response.code})
    } catch (error) {
        console.log(error)
        return NextResponse.json(response, {status:response.code})
    }
}