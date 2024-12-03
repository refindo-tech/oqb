import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   // domains: ['http://localhost:3000/'], // Tambahkan domain jika diperlukan
  //   // unoptimized:true
  // },
  output: 'export',
  assetPrefix: 'http://localhost:3000/'
  // async redirects() {
  //   return[
  //     {
  //       'source':'/profile',
  //       'destination':'/',
  //       'permanent':true
  //     }
  //   ]
  // },
};

export default nextConfig;
