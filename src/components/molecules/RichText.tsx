"use client";
import React, { useRef } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const quillRef = useRef<ReactQuill | null>(null); // Ref untuk editor
  const modules = {
    toolbar: [
      [{ header: ["1", "2", false] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
    ],
  };
  
//   const formats = [
//     "header",
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "video",
//     "align",
//   ];
  return (
    <ReactQuill
      ref={quillRef}
      placeholder="Write something..."
      modules={modules}
    //   formats={formats}
      onChange={onChange}
      value={value}
    />
  );
};


export default QuillEditor;
