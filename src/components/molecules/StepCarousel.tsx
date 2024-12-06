// import React, { useRef, useState } from 'react';
// Import Swiper React components
import CardStepMobile from "../atom/CardStepMobile";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function StepCarousel() {
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
        <SwiperSlide>
          <CardStepMobile
            number={1}
            theme="Discuss The Project"
            description="Discussion of the project and collection of information on requirements and supporting data."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStepMobile
            number={2}
            theme="Research & Analysis"
            description="The process of requirements analysis, finding solutions, creating concept plans and application creation strategies."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStepMobile
            number={3}
            theme="Concept Submission"
            description="The process of submitting plans and concept designs for applications that have been created to clients."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStepMobile
            number={4}
            theme="Prototype"
            description="The process of creating a prototype or initial design of an application such as application design and system design."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStepMobile
            number={5}
            theme="Development"
            description="The process of creating and developing applications from prototypes and designs that have been created."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStepMobile
            number={6}
            theme="Testing"
            description="The process of rechecking and testing to ensure the application's functionality can run perfectly."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStepMobile
            number={7}
            theme="Pre Deployment"
            description="The process of carried out in preparation for the deployment process."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStepMobile
            number={8}
            theme="Deployment"
            description="The application installation process on the server and user. And the application is ready to use."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStepMobile
            number={9}
            theme="Maintenance Warranty"
            description="Ensures the application continues to function properly, fixes any bugs found, and provides technical support to users during the warranty period."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardStepMobile
            number={10}
            theme="Finish"
            description="The final stage where the application project is declared complete, the application will be fully handed over to the client."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
