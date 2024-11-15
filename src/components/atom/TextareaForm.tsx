import React from "react"
const TextareaForm : React.FC<{placeholder:string; autoFocus?:boolean}> = ({placeholder, autoFocus=false}) => {
    return(
        <textarea
            className=" border-orange-500 p-2 w-full h-40 rounded"
            placeholder= {placeholder}
            autoFocus={autoFocus}
        />
    )
}
export default TextareaForm