// Import Swiper React components
'use client'
import React from 'react';
import CardStepMobile from "../atom/CardStepMobile";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Translate from "@/utils/type/translateType";
const StepCarousel:React.FC<{translate:Translate}> =({translate}) => {
  const phases = translate.Home.ProjectPhase.item
  return (
    <>
      <Swiper
        effect={"coverflow"}
        style={{marginBottom:'40px'}}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {phases?.map((item, index)=>(
        <SwiperSlide key={index}>
          <CardStepMobile
            number={item.number}
            theme={item.title}
            description={item.description}
          />
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default StepCarousel
