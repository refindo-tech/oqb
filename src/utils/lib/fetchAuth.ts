import api from "../config/axios"

class authModule {
    fetchRegistUser = async(payload:FormData) => {
        const {data} = await api.post('/auth/register', payload)
        return data
    }
    fetchLoginUser = async(payload:FormData) => {
        const {data} = await api.post('/auth/login', payload)
        return data
    }
}
const fetchAuth = new authModule()
export default fetchAuth