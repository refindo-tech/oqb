import React from "react"
const InputForm : React.FC<{type:string; placeholder:string; autoFocus?:boolean}> = ({type, placeholder, autoFocus=false}) => {
    return(
        <input 
            type = {type}
            className="h-8 border-orange-500 p-2 w-full rounded"
            placeholder= {placeholder}
            autoFocus={autoFocus}
        />
    )
}
export default InputForm