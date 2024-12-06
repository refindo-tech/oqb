"use client";
import { useState, useEffect } from "react";
import HamburgerMenu from "@/components/molecules/HamburgerMenu";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
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
  const menu = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/#services" },
    {
      title: "Insight",
      href: "/insight",
      submenu: [
        {
          category: "Technology & Trend",
        },
        {
          category: "Education & Tutorial",
        },
        {
          category: "Project Case Study",
        },
        {
          category: "Business Technology Management",
        }
      ],
    },
    { title: "Contact", href: "/contact" },
    { title: "About Us", href: "/about-us" },
  ];
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
              <Link prefetch={true} href={item.href}>
                <p>{item.title}</p>
              </Link>
              {item.submenu && showDropdown && (
                <div className="absolute flex flex-col p-4 gap-3 w-[330px] bg-[#1c1678] rounded shadow-xl text-blueWhite mt-2">
                  {item.submenu.map((subitem, index) => (
                    // <div className="flex flex-col gap-4" key={index}>
                    //   <h2 className="text-greenWhite">
                    //     {subitem.category}
                    //   </h2>
                    // </div>
                    <Link
                      prefetch={true}
                      className="hover:text-greenWhite"
                      key={index}
                      href={`/insight`}
                    >
                      {subitem.category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <HamburgerMenu
          onClick={showHamburger}
          isShowMenu={isShowHamburger}
          isScroll={isScroll}
        />
      </nav>
    </header>
  );
};
export default Navbar;
