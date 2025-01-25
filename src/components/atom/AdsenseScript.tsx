import React from "react";
import Script from "next/script";
interface propsAdsenseScript {
  id: string;
}
const AdsenseScript: React.FC<propsAdsenseScript> = ({ id }) => {
    return(
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${id}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
        />
    )
};
export default AdsenseScript;
