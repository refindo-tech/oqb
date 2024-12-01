"use client";
import React from "react";
import { useState } from "react";
import ButtonComponent from "@/components/atom/Button";
import { Plus } from "lucide-react";
// import dynamic from "next/dynamic";
import ModalAddBlog from "@/components/molecules/ModalAddBlog";
// import QuillEditor from "@/components/molecules/RichText";
// const QuillEditor = dynamic(() => import('@/components/molecules/RichText'), {
//     ssr: false,
//   });
  import 'react-quill-new/dist/quill.snow.css';
const CreateBlog = () => {
  // const [content, setContent] = useState<string>("");
  const [isModal, setIsModal] = useState<boolean>(false);
  // const handleContentChange = (value: string) => {
  //   setContent(value);
  // };
  const handleModalAddBlog = () => {
    setIsModal(!isModal)
  }
  return (
    <div className="min-h-screen w-[80%] mx-auto p-10">
      <h1 className="text-3xl font-bold text-greenWhite">Create Blog</h1>
      <div className="flex justify-end my-5">
        <ButtonComponent
          onClick={handleModalAddBlog}
          propsClass="hover:bg-orange-600 bg-orange-500 text-white hover:text-gray-200 rounded-lg"
          content={
            <div className="flex gap-1">
              <span className="font-semibold">Tambah Blog</span>
              <Plus />
            </div>
          }
        />
      </div>
      <ModalAddBlog isModal={isModal} handleModal={handleModalAddBlog}/>
      {/* <div className="bg-gray-200 rounded-lg p-3">
        <h1>Quill Editor Example</h1>
        <QuillEditor value={content} onChange={handleContentChange} />
        <h2>Preview:</h2>
        <div
        className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }} // Tampilkan konten editor sebagai HTML
        />
      </div> */}
        {/* <div>{content}</div> */}
    </div>
  );
};
export default CreateBlog;
