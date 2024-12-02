"use client";
import React from "react";
import Link from "next/link";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import ButtonComponent from "../atom/Button";
import { useState } from "react";
const HamburgerMenu: React.FC<{
  onClick: () => void;
  isShowMenu: boolean;
  isScroll: boolean;
}> = ({ onClick, isShowMenu, isScroll }) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const category = [
    "Technology & Trend",
    "Education & Tutorial",
    "Project Case Study",
    "Business Technology Management",
  ];
  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
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
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <div className="flex justify-between">
              <Link href="/insight">Insight</Link>
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
            </div>
            {isDropdown && (
              <div className="flex flex-col gap- pl-3">
                {category.map((item, index) => (
                  <Link
                    href="/insight"
                    key={index}
                    className=" pb-2 text-white/70"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/contact">Contact</Link>
            <Link href="/about-us">About Us</Link>
          </div>
        </div>
      )}
    </>
  );
};
export default HamburgerMenu;
