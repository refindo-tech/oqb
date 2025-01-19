import { NextRequest, NextResponse } from 'next/server'
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
// const PUBLIC_FILE = /\.(.*)$/
const locales = ["en", "id"];
const defaultLocale = "id"
function getLocale(req: NextRequest): string {
    const acceptLang = req.headers.get("Accept-Language");
    if (!acceptLang) return defaultLocale;
    const headers = { "accept-language": acceptLang };
    const languages = new Negotiator({ headers }).languages();
    if (languages && languages.includes(defaultLocale)) {
        return defaultLocale;
    }
    return match(languages, locales, defaultLocale);
}
export async function middleware(req: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = req.nextUrl;
      // Regex untuk mengecek apakah path berada dalam folder [lang]
    // const langPathRegex = /^\/[a-z]{2}(\/|$)/; // Contoh: /en/, /id/, dll.
    // if(!langPathRegex.test(pathname)){
    //     return NextResponse.next();
    // }
    const noLocalePaths = ["/create"]; // Tambahkan folder lainnya di sini
    if (noLocalePaths.some((prefix) => pathname.startsWith(prefix))) {
        return NextResponse.next();
    }
    if (
        req.nextUrl.pathname.startsWith("/_next") || 
        req.nextUrl.pathname.startsWith("/images") ||
        req.nextUrl.pathname.startsWith("/static") ||
        req.nextUrl.pathname.startsWith("/api") ||
        req.nextUrl.pathname.startsWith("/favicon.ico") ||
        req.nextUrl.pathname.startsWith("/sitemap.xml") ||
        req.nextUrl.pathname.startsWith("/robots.txt")
    ) return NextResponse.next();
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    if (pathnameHasLocale) return;
    const locale = getLocale(req)
    req.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    const response = NextResponse.redirect(req.nextUrl);
    // return NextResponse.redirect(req.nextUrl)
    return response
}