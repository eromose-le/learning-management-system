"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useMediaQuery, useTheme } from "@mui/material";
import clsx from "clsx";

const SwipperCarosel = ({
  slides,
  className,
}: {
  slides: React.ReactNode[];
  className?: string;
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Swiper
      slidesPerView={isMd ? (isSm ? 2 : 3) : 1.1}
      freeMode={true}
      spaceBetween={isMd ? 60 : 20}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      centeredSlidesBounds={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        // stopOnLastSlide: true
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={clsx("flex items-center justify-center w-full", className)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          className={`${isMd ? "w-[440px]" : "max-w-[340px] mr-10"}`}
          key={index}
        >
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipperCarosel;
