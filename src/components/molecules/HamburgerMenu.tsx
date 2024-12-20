"use client";
import React from "react";
import Link from "next/link";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import ButtonComponent from "../atom/Button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Translate from "@/utils/type/translateType";
const HamburgerMenu: React.FC<{
  onClick: () => void;
  isShowMenu: boolean;
  isScroll: boolean;
  translate: Translate;
}> = ({ onClick, isShowMenu, isScroll, translate }) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const path = usePathname()
  const locale = path.split('/')[1]
  const [lang, setLang] =  useState<"id"|"en">("en")
  useEffect(()=>{
    const handleLang = (val:"id"|"en") => {
      setLang(val)
    }
    if(locale === "id" || locale === "en"){
      handleLang(locale)
    }
  },[locale])
  return (
    <>
      <button onClick={onClick} className="lg:hidden">
        {isShowMenu ? (
          <X color={`${isScroll ? "#000000" : "#FFFFFF"}`} />
        ) : (
          <Menu color={`${isScroll ? "#FFFFFF" : "#FFFFFF"}`} />
        )}
      </button>
      {isShowMenu && (
        <div
          className={`fixed top-0 left-0 right-0 h-screen bg-gray-700 flex flex-col gap-y-3 lg:hidden z-10 font-semibold transition-transform duration-5000 ease-out text-white
            ${
              isShowMenu
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full"
            }`}
        >
          <div className="h-20 flex justify-end w-[70%] mx-auto">
            <button onClick={onClick} className="lg:hidden">
              {isShowMenu ? <X color="#FFFFFF" /> : <Menu />}
            </button>
          </div>
          <div className="w-[70%] mx-auto flex flex-col gap-3">
            <div className="flex gap-3">
              <Link prefetch={true} href={`/en/${path.split(`/${lang}`)[1]}`}>EN</Link>
              |
              <Link prefetch={true} href={`/id/${path.split(`/${lang}`)[1]}`}>ID</Link>
            </div>
            {translate.common.Navbar.menu.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div className="flex justify-between flex-wrap">
                    <Link prefetch={true} href={`/${lang}/${item.href}`}>{item.title}</Link>
                    <ButtonComponent
                      onClick={handleDropdown}
                      propsClass="p-0 bg-transparent"
                      content={
                        <>
                          {isDropdown ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </>
                      }
                    />
                    {isDropdown && (
                      <div className="w-full flex flex-col gap- pl-3">
                        {item.submenu.map((item, index) => (
                          <Link
                            prefetch={true}
                            href={`/${lang}/insight`}
                            key={index}
                            className=" pb-2 text-white/70"
                          >
                            {item.category}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link prefetch={true} href={`/${lang}/${item.href}`}>
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default HamburgerMenu;
