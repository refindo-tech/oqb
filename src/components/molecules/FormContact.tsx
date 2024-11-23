import InputForm from "@/components/atom/InputForm";
// import ButtonComponent from "@/components/atom/Button"
import TextareaForm from "@/components/atom/TextareaForm";
const FormContact = () => {
  return (
    <form action="" className="flex flex-col gap-y-3 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <InputForm type={"text"} placeholder={"Name"} />
        <InputForm type={"text"} placeholder={"Company"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <InputForm type={"number"} placeholder={"Phone"} />
        <InputForm type={"email"} placeholder={"Email"} />
      </div>
      <TextareaForm placeholder={"Message"} />
    </form>
  );
};
export default FormContact;
