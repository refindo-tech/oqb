import { NextResponse } from "next/server";
import fs from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
const pump = promisify(pipeline)
export const POST = async (request) => {
    try {
        const formData = await request.formData();
        const file = formData.getAll('files')[0]
        if (!file) {
            // Kembalikan response jika file tidak ada
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }
        const getFileName = file.name
        const excludeExtension = getFileName.split('.')
        const date = new Date()
        const formattedName = `${excludeExtension[0]}_${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.jpg`
        const filePath = `./public/images/assets/content/${formattedName}`;
        await pump(file.stream(), fs.createWriteStream(filePath));
        return NextResponse.json({ message: "Upload photo success", path: filePath }, { status: 200 })
    } catch (error) {
        console.log('Error API Upload Photo', error)
        return NextResponse.json({ message: 'Error when upload Foto' }, { status: 500 })
    }
}