import React from "react"
interface propsTextareaForm {
    placeholder:string,
    name:string,
    value:string | number | null,
    handleValue: (value:string | number | null) => void
    autoFocus?:boolean
}
const TextareaForm : React.FC<propsTextareaForm> = ({name, placeholder, value, autoFocus=false, handleValue}) => {
    const handleProps = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value;
        if( val !== ""){
            handleValue(val);
        }
    }
    return(
        <textarea
            name={name}
            value={value ?? ""}
            onChange={handleProps}
            className="text-white border-orange-500 w-full h-40 rounded bg-white/30 backdrop-blur-sm placeholder:text-white/70 placeholder:font-semibold text-lg p-5"
            placeholder= {placeholder}
            autoFocus={autoFocus}
        />
    )
}
export default TextareaForm