"use client";
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HamburgerMenu from "@/components/molecules/HamburgerMenu";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
// import ButtonComponent from "../atom/Button";
// import { getLocale } from "@/middleware";
import Translate from "@/utils/type/translateType";
const Navbar:React.FC<{translate:Translate}> = ({translate}) => {
  const [isScroll, setIsScroll] = useState(false);
  // const router = useRouter()
  const path = usePathname()
  const [lang, setLang] = useState<string>("id");
  useEffect(()=>{
    const lang = path.split('/')[1]
    const handlerLanguage = (val:string) => {
      setLang(val);
    };
    handlerLanguage(lang)
  },[path])
  const [styleNavbar, setStyleNavbar] = useState(
    "bg-transparent text-gray-700 hover:text-white"
  );
  const [isShowHamburger, setIsShowHamburger] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const dynamicStyle = () => {
      if (isScroll) {
        setStyleNavbar("bg-navy text-greenWhite shadow-xl");
      } else if (isScroll && isShowHamburger) {
        setStyleNavbar("bg-gray-700 text-white");
      } else {
        setStyleNavbar("bg-transparent text-gray-700 hover:text-white");
      }
    };
    dynamicStyle();
  }, [isScroll, isShowHamburger]);
  const showHamburger = () => {
    setIsShowHamburger(!isShowHamburger);
  };
  const menu = translate.common.Navbar.menu
  return (
    <header
      className={`w-full flex ${styleNavbar} justify-center h-16 fixed top-0 left-0 right-0 transition-all ease-in-out duration-1000 z-20`}
    >
      <nav className="min-w-[70%] h-full flex justify-between items-center font-poppins tracking-wide">
        <Image
          src={"/images/assets/oqbbright.png"}
          width={70}
          height={70}
          alt="logo_oqb"
        />
        <div className="lg:flex flex-row gap-8 font-semibold hidden">
          {menu.map((item, index) => (
            <div
              key={index}
              className={`text-greenWhite hover:py-2 hover:border-b-2 hover:border-greenWhite py-3 relative`}
              onMouseEnter={() => {
                if (item.submenu) {
                  setShowDropdown(true);
                }
              }}
              onMouseLeave={() => {
                if (item.submenu) {
                  setShowDropdown(false);
                }
              }}
            >
              <Link prefetch={true} href={`/${lang}${item.href}`}>
                <p>{item.title}</p>
              </Link>
              {item.submenu && showDropdown && (
                <div className="absolute flex flex-col p-4 gap-3 w-[330px] bg-[#1c1678] rounded shadow-xl text-blueWhite mt-2">
                  {item.submenu.map((subitem, index) => (
                    <Link
                      prefetch={true}
                      className="hover:text-greenWhite"
                      key={index}
                      href={`/${lang}/insight`}
                    >
                      {subitem.category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-3 text-greenWhite">
            <Globe size={20} />
            {lang === "id" && (
              <Link
                prefetch={true}
                href={`/en/${path.split('/id')[1]}`}
                className="text-greenWhite  hover:text-white"
              >
                ID
              </Link>
            )}
            {lang === "en" && (
              <Link
                prefetch={true}
                href={`/id${path.split('/en')[1]}`}
                className="text-greenWhite  hover:text-white"
              >
                EN
              </Link>
            )}
          </div>
        </div>
        <HamburgerMenu
          translate={translate}
          onClick={showHamburger}
          isShowMenu={isShowHamburger}
          isScroll={isScroll}
        />
      </nav>
    </header>
  );
};
export default Navbar;
