import React from "react";
interface propsInputForm {
  type: string;
  name: string;
  value: string | number | null;
  handleValue: (value: string | number | null) => void;
  placeholder: string;
  autoFocus?: boolean;
}
const InputForm: React.FC<propsInputForm> = ({
  name,
  type,
  placeholder,
  value,
  autoFocus = false,
  handleValue,
}) => {
  const handleProps = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = type === "number" ? Number(e.target.value) : e.target.value;
    if( val !== ""){
        handleValue(val);
    }
  };
  return (
    <input
      type={type}
      name={name}
      value={value ?? ""}
      onChange={handleProps}
      className="h-12 border-orange-500 p-5 w-full rounded bg-white/30 backdrop-blur-sm placeholder:text-white/70 font-poppins placeholder:font-semibold text-white"
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
};
export default InputForm;
