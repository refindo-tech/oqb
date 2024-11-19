import InputForm from "@/components/atom/InputForm"
import ButtonComponent from "@/components/atom/Button"
import TextareaForm from "@/components/atom/TextareaForm"
const FormContact = () => {
    return(
        <form action="" className="flex flex-col gap-y-3 ">
            <div className="grid grid-cols-1 gap-3">
                <InputForm type={'number'} placeholder={'Nomor Ponsel'}/>
                <InputForm type={'email'} placeholder={'Nama'}/>
            </div>
            <InputForm type={'email'} placeholder={'Email'}/>
            <TextareaForm placeholder={"Masukkan pesan anda"}/>
            <div className="flex justify-end">
            <ButtonComponent type={"submit"} propsClass={" bg-purple font-semibold w-52 h-[56px] rounded-[50px] hover:bg-navy text-navy hover:text-greenWhite hover:shadow-xl"}/>
            </div>
        </form>
    )
}
export default FormContact