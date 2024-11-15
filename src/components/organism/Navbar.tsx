"use client";
import { useState, useEffect } from "react";
import HamburgerMenu from "@/components/molecules/HamburgerMenu";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [styleNavbar, setStyleNavbar] = useState("bg-transparent text-gray-700 hover:text-white")
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
  useEffect(()=>{
    const dynamicStyle = () => {
      if(isScroll){
        setStyleNavbar("bg-white text-gray-700 shadow-xl")
      }
      else if(isScroll && isShowHamburger){
        setStyleNavbar("bg-gray-700 text-white")
      }
      else{
        setStyleNavbar('bg-transparent text-gray-700 hover:text-white')
      }
    }
    dynamicStyle()
  },[isScroll, isShowHamburger])
  const showHamburger = () => {
    setIsShowHamburger(!isShowHamburger);
  };
  const menu = [
    { title: "Home", href: "/" },
    {
      title: "News",
      href: "/news",
      submenu: [
        {
          category: "Teknologi",
          href: "/blog/teknologi",
          theme: ["Programming", "Database", "Cloud & Infrastructure"],
        },
        {
          category: "Marketing",
          href: "/blog/marketing",
          theme: ["Periklanan", "Tips dan trik", "Info terkini"],
        },
        {
          category: "Lifestyle",
          href: "/blog/lifestyle",
          theme: ["Olahraga", "Kesehatan", "Terapi"],
        },
      ],
    },
    { title: "Contact", href: "/contact" },
    { title: "About Us", href: "/about-us" },
  ];
  return (
    <header
      className={`w-full flex ${styleNavbar} justify-center h-20 fixed top-0 transition-all ease-in-out duration-1000`}
    >
      <nav className="min-w-[70%] h-full flex justify-between items-center z-20 font-poppins tracking-wide">
        <Image
          src={"/images/logo_oqb.png"}
          width={60}
          height={60}
          alt="logo_oqb"
        />
        <div className="lg:flex flex-row gap-8 font-semibold hidden">
          {menu.map((item, index) => (
            <div
              key={index}
              className={`${
                isScroll
                  ? "text-gray-700 hover:text-blue-500 hover:py-2 hover:border-b-2 hover:border-b-blue-500"
                  : "text-white/50 hover:text-white/100 hover:py-2 hover:border-b-2 hover:border-b-white"
              } py-3 relative`}
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
              <Link href={item.href}>
                <p>{item.title}</p>
              </Link>
              {item.submenu && showDropdown && (
                <div className="absolute flex flex-row p-4 gap-10 bg-white rounded shadow-xl l text-gray-700 mt-2">
                  {item.submenu.map((subitem, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                      <Link href={subitem.href} className="hover:text-blue-500">
                        {subitem.category}
                      </Link>
                      <div className="flex flex-col gap-1 text-gray-500 min-w-24 text-sm">
                        {subitem.theme?.map((theme, index) => (
                          <Link
                            className="text-gray-500 hover:text-biru"
                            key={index}
                            href={`/blog/${subitem.category.toLowerCase()}/${theme.toLowerCase()}`}
                          >
                            {theme}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <HamburgerMenu onClick={showHamburger} isShowMenu={isShowHamburger} isScroll={isScroll} />
      </nav>
    </header>
  );
};
export default Navbar;
