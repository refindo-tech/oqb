export const sendEmail = async(req) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/contact`,{
            method:'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify(req)
        })
        if(response){
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log('Error Lib Fetch Contact sendEmail Module', error)
    }
}