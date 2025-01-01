import { NextResponse } from "next/server";
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from 'path';

const pump = promisify(pipeline);

export const POST = async (request) => {
    try {
        const formData = await request.formData();
        const file = formData.getAll('files')[0];
        if (!file) {
            // Return response if no file is uploaded
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        const getFileName = file.name;
        const excludeExtension = getFileName.split('.');
        const date = new Date();
        const formattedName = `${excludeExtension[0]}-${date.getTime()}.${excludeExtension.pop()}`;
        const filePath = path.join(process.cwd(), 'public', 'images', 'assets', 'content', formattedName);
        const relativePath = `/images/assets/content/${formattedName}`;

        // Ensure the directory exists
        fs.mkdirSync(path.dirname(filePath), { recursive: true });

        await pump(file.stream(), fs.createWriteStream(filePath));
        return NextResponse.json({ message: "Upload photo success", path: relativePath }, { status: 200 });
    } catch (error) {
        console.log('Error API Upload Photo', error);
        return NextResponse.json({ message: 'Error when upload Foto' }, { status: 500 });
    }
};