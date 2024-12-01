import React from "react"
interface propsSelectInput {
    value: string;
    handleValue : (value:string) => void
}
const SelectInput:React.FC<propsSelectInput> = ({value, handleValue}) => {
    const dataCategory = [
        {value:'TechnologyTren', label: 'Technology & Trend'},
        {value:'EducationTutorial', label: 'Education & Tutorial'},
        {value:'ProjectCasesStudy', label: 'Project Case & Study'},
        {value:'BusinessTechnologyManagement', label: 'Business Technology & Mangement'}

    ]
    return(
        <div className="flex flex-col">
        <label htmlFor="category" className="font-poppins font-semibold">Category:</label>
        <select
            id="category"
            value={value}
            onChange={(e)=>handleValue(e.target.value)}
            className="h-12 px-2 border-2 border-gray-400 rounded"
        >
            {dataCategory.map((item:{value:string, label:string}, index:number)=>(
                <option value={item.value} key={index}>{item.label}</option>
            ))}
        </select>
        </div>
    )
}
export default SelectInput