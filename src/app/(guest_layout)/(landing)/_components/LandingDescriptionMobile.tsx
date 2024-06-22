"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useMediaQuery, useTheme } from "@mui/material";

const LandingDescriptionMobile = ({
  LandingDescriptionCardA,
  LandingDescriptionCardB,
  LandingDescriptionCardC,
}: {
  LandingDescriptionCardA: React.ReactNode;
  LandingDescriptionCardB: React.ReactNode;
  LandingDescriptionCardC: React.ReactNode;
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Swiper
      slidesPerView={isSm ? 2 : 1.1}
      freeMode={true}
      spaceBetween={isSm ? 200 : 0}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      centeredSlidesBounds={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="flex items-center justify-center w-full mt-[-50px] pb-14"
    >
      <SwiperSlide>{LandingDescriptionCardA}</SwiperSlide>
      <SwiperSlide>{LandingDescriptionCardB}</SwiperSlide>
      <SwiperSlide>{LandingDescriptionCardC}</SwiperSlide>
    </Swiper>
  );
};

export default LandingDescriptionMobile;
