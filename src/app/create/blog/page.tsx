"use client";
import React from "react";
import { useState } from "react";
import ButtonComponent from "@/components/atom/Button";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
// import QuillEditor from "@/components/molecules/RichText";
const QuillEditor = dynamic(() => import('@/components/molecules/RichText'), {
    ssr: false,
  });
  import 'react-quill-new/dist/quill.snow.css';
const CreateBlog = () => {
  const [content, setContent] = useState<string>("");
  const handleContentChange = (value: string) => {
    setContent(value);
  };
  return (
    <div className="min-h-screen w-[80%] mx-auto p-10">
      <h1 className="text-3xl font-bold text-greenWhite">Create Blog</h1>
      <div className="flex justify-end my-5">
        <ButtonComponent
          propsClass="hover:bg-orange-600 bg-orange-500 text-white hover:text-gray-200"
          content={
            <div className="flex gap-2 p-1">
              <span className="font-semibold">Tambah Blog</span>
              <Plus />
            </div>
          }
        />
      </div>
      <div className="bg-gray-200 rounded-lg p-3">
        <h1>Quill Editor Example</h1>
        <QuillEditor value={content} onChange={handleContentChange} />
        <h2>Preview:</h2>
        <div
        className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }} // Tampilkan konten editor sebagai HTML
        />
        {/* <div>{content}</div> */}
      </div>
    </div>
  );
};
export default CreateBlog;
