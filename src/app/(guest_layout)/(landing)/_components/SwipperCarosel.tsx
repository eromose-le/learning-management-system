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
  return (
    <Swiper
      slidesPerView={isSm ? 2 : 1.1}
      freeMode={true}
      spaceBetween={isSm ? 200 : 20}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      centeredSlidesBounds={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={clsx("flex items-center justify-center w-full", className)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="md:max-w-md" key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipperCarosel;
