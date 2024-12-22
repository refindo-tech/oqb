import type { Metadata } from "next";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";
import { getDictionary } from "./dictionary";
import WhatsappButton from "@/components/molecules/WhatsappButton";
import localFont from "next/font/local";
import "../globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PT. OQB Software House",
  description:
    "PT. OQB Software House merupakan sebuah perusahaan yang berfokus dalam pembuatan perangkat lunak"
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params:Promise<{lang:"en"|"id"}>
}) {
  const {lang} = await params
  const t = await getDictionary(lang)
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar translate={t}/>
        {children}
        <Footer translate={t}/>
        <WhatsappButton />
      </body>
    </html>
  );
}
