"use client"
import React from "react";
import { createContext } from "react";
type LangContextType = {
    lang:"en" | "id"
}
const LangContext = createContext<LangContextType|undefined>(undefined);
export const LangProvider:React.FC<{lang:LangContextType; children:React.ReactNode}> = ({lang, children}) => {
    return(
        <LangContext.Provider value={lang}>
            {children}
        </LangContext.Provider>
    )
}
export default LangContext