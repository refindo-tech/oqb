export const uploadFoto = async(req) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/upload/photo`,{
            method:'POST',
            // headers:{
            //     'Content-Type':'application/json'
            // },
            body:req
        })
        if(response){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error when upload photo with fetchUpload', error)
    }
}