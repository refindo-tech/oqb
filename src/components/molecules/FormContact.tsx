import InputForm from "@/components/atom/InputForm"
import ButtonComponent from "@/components/atom/Button"
import TextareaForm from "@/components/atom/TextareaForm"
const FormContact = () => {
    return(
        <form action="" className="flex flex-col gap-y-3">
            <div className="grid grid-cols-1 gap-3">
                <InputForm type={'phone'} placeholder={'Nomor Ponsel'}/>
                <InputForm type={'email'} placeholder={'Nama'}/>
            </div>
            <InputForm type={'email'} placeholder={'Email'}/>
            <TextareaForm placeholder={"Masukkan pesan anda"}/>
            <ButtonComponent type={"submit"} bg={"bg-orange-500"}/>
        </form>
    )
}
export default FormContact