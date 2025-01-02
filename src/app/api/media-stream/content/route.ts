import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { createReadStream, ReadStream } from 'fs'
import path from 'path'
import db from '@/utils/helpers/db'

export async function GET(req: NextRequest) {
    const responseHeaders = new Headers(req.headers)
    const requestURL = new URL(req.url).searchParams
    const filePath = requestURL.get('path')
    if (filePath) {
        const result = await db.blog.findMany({
            where: { thumbnail: filePath }
        })
        const nameFile = filePath.split('/').pop()
        if(!nameFile) return NextResponse.json({ message: 'Image not found' }, { status: 404 });
        const extensionFile = nameFile.split('.').pop()
        if (result) {
            responseHeaders.set('Content-Type', `image/${extensionFile}`)
            const absolutePath = path.join(process.cwd(), 'public', filePath)
            const stream: ReadStream = createReadStream(`${absolutePath}`)
            return new Response( stream as unknown as ReadableStream, { headers: responseHeaders });
        } else {
            return NextResponse.json({ message: 'Image not found' }, { status: 404 });
        }
    }else{
        return NextResponse.json({ message: 'Path No Provided' }, { status: 500 });
    }
}