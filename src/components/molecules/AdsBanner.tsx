"use client";
import React, { useEffect } from "react";
const AdsBanner = () => {
  {
    /* <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script> */
  }
    useEffect(() => {
        const ads = document.getElementsByClassName("adsbygoogle");
        for (let i = 0; i < ads.length; i++) {
            const ad = ads[i] as HTMLElement;
            // Cek apakah elemen sudah diinisialisasi
            if (!ad.hasAttribute("data-ad-status")) {
                try {
                    ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }, []);
    return (
    <ins
        className="adsbygoogle h-40"
        style={{ display: "block" }}
        data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_ID_CLIENT_ADSENSE}`}
        data-ad-slot="1557984089"
        data-ad-format="auto"
        data-full-width-responsive="true"
    ></ins>
    );
};
export default AdsBanner;
