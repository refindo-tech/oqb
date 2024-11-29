export const listBlog = async () =>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/blog/list`, {
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log(`Error Fetch ListBlog API : ${error}`)
    }
}
export const createBlog = async(req) =>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/blog/create`, {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(req)
        })
        if(response.ok){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log(`Error Fetch createBlog API : ${error}`)
    }
}