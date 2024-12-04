import fs from 'fs'
import {pipeline} from 'stream'
import { promisify } from 'util'
const pump = promisify(pipeline)
const uploadFoto = async(request) => {
    try {
        console.log('ini request', request)
        const formData = await request.formData();
        const file = formData.getAll('files')[0]
        const getFileName = file.name
        const excludeExtension = getFileName.split('.')
        const date = new Date()
        const formattedName = `${excludeExtension[0]}_${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.pdf`
        const filePath = `./public/images/assets/content/${formattedName}`;
        await pump(file.stream(), fs.createWriteStream(filePath));
        return {
            path:filePath
        }
    } catch (error) {
        console.log(error)
        return{
            message:"Error when upload foto"
        }
    }
}
export default uploadFoto
