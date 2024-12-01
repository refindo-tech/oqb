"use client";
import { X } from "lucide-react";
import ButtonComponent from "../atom/Button";
import React from "react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import InputForm from "../atom/InputForm";
import { createBlog } from "@/utils/lib/fetchBlog";
import SelectInput from "../atom/SelectInput";
const QuillEditor = dynamic(() => import("@/components/molecules/RichText"), {
  ssr: false,
});
type dataRequest = {
  title: string | number | null | File;
  description: string | number | null | File;
  thumbnail: string | number | null | File;
  content: string | number | null | File;
  slug: string | number | null | File;
  category:string
};
import "react-quill-new/dist/quill.snow.css";
interface propsModalAddBlog {
  isModal: boolean;
  handleModal: () => void;
}
const ModalAddBlog: React.FC<propsModalAddBlog> = ({
  isModal,
  handleModal,
}) => {
  const [content, setContent] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<
    string | number | File | null
  >("");
  const [titleValue, setTitleValue] = useState<string | number | File | null>(
    ""
  );
  const [thumbnailValue, setThumbnailValue] = useState<
    string | number | File | null
  >("");
  const [slugValue, setSlugValue] = useState<string>("");
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [dataRequest, setDataRequest] = useState<dataRequest|string
  >("");
  const [category, setCategoryValue] = useState<string>("TechnologyTrend")
  const handleContentChange = (value: string) => {
    setContent(value);
  };
  const handleDescriptionValue = (value: string | number | File | null) => {
    setDescriptionValue(value);
  };
  const handleTitleValue = (value: string | number | File | null) => {
    setTitleValue(value);
  };
  const handleThumbnail = (value: string | number | File | null) => {
    setThumbnailValue(value);
  };
  const handleCategoryValue = (value:string) => {
    setCategoryValue(value)
  }
  // const handleDataRequest = (content: dataRequest) => {
  //   setDataRequest(content);
  // };
  const handleIsLoad = (value: boolean) => {
    setIsLoad(value);
  };
  const handleCreateBlog = async (payload: dataRequest | string) => {
    const response = await createBlog(payload);
    if (response) {
      handleIsLoad(false)
      handleModal()
    }
  };
  useEffect(() => {
    const handleSlugValue = () => {
      const lower = String(titleValue).toLowerCase().replaceAll(' ','-');
      setSlugValue(lower);
    };
    handleSlugValue();
  }, [titleValue]);
  // if(descriptionValue && titleValue && thumbnailValue && thumbnailValue){
  // }
  useEffect(() => {
    setDataRequest({
      title: titleValue,
      slug: slugValue,
      description: descriptionValue,
      thumbnail: thumbnailValue,
      content: content,
      category: category
    });
  }, [descriptionValue, titleValue, thumbnailValue, content, slugValue, category]);
  // useEffect(()=>{
  //   console.log(dataRequest)
  // },[dataRequest])
  const resetValue = () => {
    setDataRequest("");
  };
  return (
    <>
      {isModal && (
        <div className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center py-10">
          <div className="max-h-full w-[90%] lg:w-[80%] rounded-xl p-5 lg:p-10 bg-white flex flex-col">
            <div className="mb-5 flex justify-center items-center relative h-8">
              <span className="text-xl text-navy font-bold font-poppins text-center">
                Tambah Blog
              </span>
              <ButtonComponent
                onClick={() => {
                  handleModal();
                  resetValue();
                }}
                propsClass=" bg-transparent text-navy absolute top-0 right-0 bottom-0 p-0"
                content={
                  <div className="hover:bg-navy hover:text-greenWhite hover:p-1 rounded">
                    <X />
                  </div>
                }
              />
            </div>
            <div className="bg-white rounded-lg flex flex-col flex-grow gap-5 overflow-y-scroll px-2">
              <InputForm
                label={true}
                type="text"
                name="Title"
                value={titleValue}
                handleValue={handleTitleValue}
                placeholder="Masukan judul artikel"
              />
              <InputForm
                label={true}
                type="text"
                name="Description"
                value={descriptionValue}
                handleValue={handleDescriptionValue}
                placeholder="Masukan deskripsi artikel"
              />
              <InputForm
                label={true}
                type="file"
                name="Thumbnail"
                value={thumbnailValue}
                handleValue={handleThumbnail}
              />
              <SelectInput value={category} handleValue={handleCategoryValue}/>
              <h1>Quill Editor Example</h1>
              <div>
                <QuillEditor value={content} onChange={handleContentChange} />
              </div>
              <ButtonComponent
                onClick={() => {
                  handleIsLoad(true)
                  // handleDataRequest({
                  //   title: titleValue,
                  //   description: descriptionValue,
                  //   thumbnail: thumbnailValue,
                  //   content: content,
                  //   slug:slugValue
                  // });
                  handleCreateBlog(dataRequest)
                }}
                content={
                  <>{isLoad ? 
                    <div className="w-full flex justify-center items-center">
                      <div className="loader"></div>
                    </div>
                  : 
                  <>Submit</>}
                  </>
                }
                propsClass="bg-orange-500 text-navy"
              />
              {/* <h2>Preview:</h2>
              <div
                className="ql-editor"
                dangerouslySetInnerHTML={{ __html: content }} // Tampilkan konten editor sebagai HTML
              />
               */}
              {/* <div>{content}</div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ModalAddBlog;
