'use client'
import React, { useState } from "react";
import { Search } from "lucide-react"
import ButtonComponent from "./Button"
interface propsSearchInput {
    handleValue: (value:string) => void;
}
const SearchInput:React.FC<propsSearchInput> = ({handleValue}) => {
    const [searchValue, setSearchValue] = useState<string>('')
    const handleSearchValue = (value:string) => {
        setSearchValue(value)
    }
    return(
        <div className="flex items-center text-white focus-within:border-blue-500">
            <input
                type="text"
                name="search"
                id="search"
                value={searchValue}
                onChange={(e)=>handleSearchValue(e.target.value)}
                placeholder="Search"
                className="bg-gray-500/50 w-full backdrop-blur text-white rounded-tl-full rounded-bl-full py-3 pl-4 pr-2 placeholder:text-white focus:border-none focus:outline-none" 
            />
            <ButtonComponent
                onClick={()=>handleValue(searchValue)} 
                propsClass="rounded-tr-full rounded-br-full bg-gray-500/50 hover:bg-gray-500/70 backdrop-blur p-3 h-full w-[50]  flex items-center hocer:border-blue-600 justify-center"
                content={
                    <Search />
                }
            />
        </div>
    )
}
export default SearchInput