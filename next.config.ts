import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/images/asset/content/:nameFile*',
  //       destination: '/public/images/asset/content/:nameFile*',
  //     }
  //   ]
  // }
  /* config options here */
  // async redirects() {
  //   return[
  //     {
  //       'source':'/profile',
  //       'destination':'/',
  //       'permanent':true
  //     }
  //   ]
  // },
  // i18n: {
  //   locales: ['default', 'en'],
  //   defaultLocale: 'default',
  //   localeDetection:false
  // },
};

export default nextConfig;
