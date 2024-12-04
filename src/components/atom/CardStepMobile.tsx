import React from "react"
interface propsCardStep {
    theme:string,
    number:number,
    description:string
}
const CardStepMobile:React.FC<propsCardStep> = ({theme, number, description}) => {
    return(
        <div className="h-[370] flex items-center justify-center">
            <div className="flex flex-col gap-4 text-center justify-center items-center font-poppins border-blueWhite border-2 w-full p-5 rounded-xl h-[80%] ">
                <div className="flex items-center justify-center h-5 w-5 rounded-full p-5 text-navy bg-greenWhite font-bold">{number}</div>
                <h3 className="font-semibold text-xl text-greenWhite">{theme}</h3>
                <p className="text-blueWhite">{description}</p>
            </div>
        </div>
    )
}
export default CardStepMobile