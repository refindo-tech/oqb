import React from "react"
const TextareaForm : React.FC<{placeholder:string; autoFocus?:boolean}> = ({placeholder, autoFocus=false}) => {
    return(
        <textarea
            className="text-white border-orange-500 w-full h-40 rounded bg-white/30 backdrop-blur-sm placeholder:text-white/70 placeholder:font-semibold text-lg p-5"
            placeholder= {placeholder}
            autoFocus={autoFocus}
        />
    )
}
export default TextareaForm