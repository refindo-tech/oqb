import db from "@/utils/helpers/db"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { payloadRegister, payloadLogin } from "@/utils/type/authType"
class Auth {
    registerUser = async(req:payloadRegister) => {
        try {
            const {name, email, password} = req
            if(!name || !email || !password){
                throw new Error("Semua field (name, email, password) harus diisi!");
            }
            const hashPassword = bcrypt.hashSync(password, 10)
            const response = await db.user.create({data:{name,email,password:hashPassword}})
            if(response){
                return response
            }
        } catch (error) {
            if(error instanceof Error){
                console.log("Auth Modules Register User Error", error.message)
                return {
                    status:501,
                    message:error.message
                }
            }
            return {
                status:501,
                message:"Error occured when regist user"
            }
        }
    }
    loginUser = async(req:payloadLogin) => {
        try {
            const {email, password} = req
            if(!email || !password){
                throw new Error("Semua field (email, password) harus diisi!");
            }
            const detailUser = await db.user.findFirst({where:{email}})
            if(!detailUser){
                throw new Error("Email yang anda temukan tidak sesuai!");
            }
            const validatePassword = bcrypt.compareSync(password, detailUser.password)
            if(!validatePassword){
                throw new Error("Password yang anda masukkan tidak sesuai!");
            }
            const accessToken = jwt.sign(
                {
                    id:detailUser.id,
                    name:detailUser.name,
                    email:detailUser.email
                },
                `${process.env.SECRET_KEY_ACESS_TOKEN}`,
                {expiresIn:'15m'}
            )
            const refreshToken = jwt.sign(
                {
                    id:detailUser.id,
                    name:detailUser.name,
                    email:detailUser.email
                },
                `${process.env.SECRET_KEY_ACESS_TOKEN}`,
                {expiresIn:'7d'}
            )
            await db.user.update({
                where:{id:detailUser.id},
                data:{
                    accessToken,refreshToken
                }
            })
            const response = {
                ...detailUser,
                accessToken,
                refreshToken
            }
            return response
        } catch (error) {
            if(error instanceof Error){
                console.log("Auth Modules Login User Error", error.message)
                return {
                    status:501,
                    message:error.message
                }
            }
            return {
                status:501,
                message:"Error occured when regist user"
            }
        }
    }
}
const AuthModule = new Auth()
export default AuthModule