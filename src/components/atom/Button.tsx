import React from "react";
const ButtonComponent: React.FC<{
  onClick?: () => void;
  content?: string | React.ReactNode;
  propsClass?: string;
  // color?:string;
  // bg?:string;
  type?: "button" | "submit" | "reset";
}> = ({ onClick, propsClass, type, content = "Submit" }) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={`p-2 rounded-lg ${
        propsClass ? propsClass : "bg-orange-500 w-fit text-white"
      }`}
    >
      {typeof content === "string" ? content : content}
    </button>
  );
};
export default ButtonComponent;
