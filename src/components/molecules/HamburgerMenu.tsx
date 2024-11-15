// 'use client'
import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
const HamburgerMenu: React.FC<{
  onClick: () => void;
  isShowMenu: boolean;
  isScroll: boolean;
}> = ({ onClick, isShowMenu, isScroll }) => {
  return (
    <>
      <button onClick={onClick} className="lg:hidden">
        {isShowMenu ? (
          <X color={`${isScroll ? "#000000" : "#FFFFFF"}`} />
        ) : (
          <Menu color={`${isScroll ? "#000000" : "#FFFFFF"}`} />
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
          <div className="w-[80%] mx-auto flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
};
export default HamburgerMenu;
