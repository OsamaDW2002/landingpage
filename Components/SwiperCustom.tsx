"use client";
import "../styles/swiper_home.css";

import React, { ReactNode } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box } from "@chakra-ui/react";

interface SwiperData {
  isPagination: boolean;
  swiperslide: Array<ReactNode>;
  sliderNumber: number;
  swiperClass: string;
  nextBtn: string;
  prevBtn: string;
  breakpoint: any;
  px: any;
  py: any;
  arrow: ReactNode;
  maxW: string;
}

function SwiperCustom({
  isPagination,
  swiperslide,
  sliderNumber,
  swiperClass,
  nextBtn,
  prevBtn,
  breakpoint,
  arrow,
  px,
  maxW = "1550px",
  py="0px",
  ...rest
}: SwiperData) {
  return (
    <Box
      px={px}
      maxW={maxW}
      marginX="auto"
      className={swiperClass}
    >
      <div className={`swiper-button-next custom-next ${nextBtn}`}>{arrow}</div>
      <div className={`swiper-button-prev custom-prev ${prevBtn}`}>{arrow}</div>
      <Swiper
        pagination={isPagination}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${nextBtn}`,
          prevEl: `.${prevBtn}`,
        }}
        breakpoints={breakpoint}
        spaceBetween={0}
        slidesPerView={sliderNumber}
        className="swiper"
        {...rest}
      >
        {swiperslide}
      </Swiper>
    </Box>
  );
}

export default SwiperCustom;
