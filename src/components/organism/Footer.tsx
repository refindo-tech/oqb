'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Translate from "@/utils/type/translateType";
const Footer: React.FC<{ translate: Translate }> = ({ translate }) => {
  const [lang, setLang] = useState<"id"| "en">("en")
  const path = usePathname().split('/')[1]
  useEffect(()=>{
    const handleLang = (val: "id"|"en") => {
      setLang(val)
    }
    if (path === "id" || path === "en") {
      handleLang(path);
    }
  },[path])
  return (
    <footer className="min-h-[60vh] w-full bg-[#1c1678] flex flex-col justify-between items-center text-white py-20 gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] gap-10">
        <div id="detail-perusahaan-footer" className="flex flex-col gap-5">
          <Image
            src={"/images/assets/croped_logo.png"}
            alt="logooqb"
            height={300}
            width={300}
          />
          <div className="flex flex-col">
            <h4 className="font-semibold text-2xl">PT. OQB Software House</h4>
            <div className="flex flex-col gap-1">
              <p className="font-poppins text-white/70">
                Jalan Villa Tangerang Elok, Kecamatan Pasar Kemis, Kabupaten
                Tangerang, Banten, 15560
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-row-1 lg:grid-row-2 gap-5 lg:place-self-end">
          <div id="layanan-footer" className="flex flex-col gap-3 text-white">
            <h5 className="text-white font-semibold text-2xl">
              {translate.common.Footer.Services}
            </h5>
            <div className="flex flex-col gap-1 text-white/70">
              <Link href={`${lang}/#services`}>Website Design & Development</Link>
              <Link href={`${lang}/#services`}>Mobile App Design & Development</Link>
              <Link href={`${lang}/#services`}>
                Multiplatform App Design & Development
              </Link>
              <Link href={`${lang}/#services`}>System Integration</Link>
            </div>
          </div>
          <div
            id="contact-footer"
            className="flex flex-col gap-3 text-white/70"
          >
            <h5 className="text-white font-semibold text-2xl">
              {translate.common.Footer.Insight.t}
            </h5>
            <div className="flex flex-col gap-1">
              {translate.common.Footer.Insight.category.map((item, index) => (
                <Link href={`/${lang}/${item.href}`} className="font-semibold" key={index}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-white/70 text-xs">
        © 2024 PT. OQB Software House. All rights reserved
      </div>
    </footer>
  );
};
export default Footer;
