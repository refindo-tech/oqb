import React from "react"
const InputForm : React.FC<{type:string; placeholder:string; autoFocus?:boolean}> = ({type, placeholder, autoFocus=false}) => {
    return(
        <input 
            type = {type}
            className="h-12 border-orange-500 p-5 w-full rounded bg-white/30 backdrop-blur-sm placeholder:text-white font-poppins placeholder:font-semibold text-white"
            placeholder= {placeholder}
            autoFocus={autoFocus}
        />
    )
}
export default InputForm