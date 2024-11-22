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