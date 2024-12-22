import { useContext } from "react";
import LangContext from "@/components/template/LangContext";

export const useLang = () => {
    const context = useContext(LangContext);
    if (!context) {
        throw new Error("useLang must be used within a LangProvider");
    }
    return context.lang;
};