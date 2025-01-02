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
  title: "Oqb Software",
  description:
    "Jasa pembuatan website, aplikasi mobile & multiplatform. Solusi digital untuk meningkatkan produktivitas bisnis dengan teknologi terkini & tim ahli.",
  // icons:{
  //   icon: "/images/favicon.ico",
  //   shortcut: "/images/favicon.ico"
  // }
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "id" }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar translate={t} />
        {children}
        <Footer translate={t} />
        <WhatsappButton />
      </body>
    </html>
  );
}
