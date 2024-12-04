import React from "react";
const ButtonComponent: React.FC<{
  onClick?: () => void;
  content?: string | React.ReactNode;
  propsClass?: string;
  isDisabled?:boolean
  // color?:string;
  // bg?:string;
  type?: "button" | "submit" | "reset";
}> = ({ onClick, propsClass, type, content = "Submit", isDisabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled?true:false}
      type={type ? type : "button"}
      className={`${
        propsClass ? propsClass : "bg-orange-500 w-fit text-white rounded-lg p-2"
      }`}
    >
      {typeof content === "string" ? content : content}
    </button>
  );
};
export default ButtonComponent;
