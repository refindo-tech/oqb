import { ImagePlus } from "lucide-react";
import React from "react";
import { uploadFoto } from "@/utils/lib/fetchUpload";
interface propsInputForm {
  type: string;
  name: string;
  value: string | number | null | File;
  handleValue: (value: string | number | null | File) => void;
  label: boolean;
  placeholder?: string;
  propsClass?: string;
  autoFocus?: boolean;
}
const InputForm: React.FC<propsInputForm> = ({
  name,
  type,
  placeholder,
  value,
  label,
  autoFocus = false,
  handleValue,
  propsClass,
}) => {
  const handleProps = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "file") {
      const file = e.target.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append("files", file);
        const result = async () => {
          const response = await uploadFoto(formData);
          if (response) {
            handleValue(response.path);
          }
        };
        result();
      }
      // handleValue(e.target.files?.[0] || null);
    } else {
      const val = type === "number" ? Number(e.target.value) : e.target.value;
      if (val !== "") {
        handleValue(val);
      }
    }
  };
  return (
    <div className="flex flex-col">
      {type === "file" && (
        <span className="font-poppins font-semibold">{name}:</span>
      )}
      <label
        htmlFor={name}
        className={`${label ? "" : "hidden"} ${
          type === "file" && "hover:cursor-pointer"
        } font-poppins font-semibold`}
        // onClick={() => {
        //   if (type === "file") {
        //     document.getElementById(name);
        //   }
        // }}
      >
        {type === "file" ? (
          <div className="text-gray-500 w-ful  border-2 border-gray-400 p-10 flex flex-col items-center justify-center mt-3 rounded-lg gap-3">
            <h3>Upload your picture in here!</h3>
            <div
              onClick={() => {
                  document.getElementById(name);
              }}
            >
              <ImagePlus size={50} />
            </div>
          </div>
        ) : (
          <>{name}:</>
        )}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={
          type === "file" ? undefined : (value as string | number | undefined)
        } // Hindari memberikan value untuk file
        // value={value ? value:''}
        onChange={handleProps}
        className={`w-full rounded-full ${
          type === "file" ? "hidden" : ""
        } ${propsClass} ${
          type !== "file" ? "border-2 border-gray-500 h-12 p-5" : ""
        }`}
        placeholder={type === "file" ? undefined : placeholder}
        autoFocus={autoFocus}
      />
    </div>
  );
};
export default InputForm;
