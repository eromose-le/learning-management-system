import Container from "@/common/Container";
import { Typography } from "@mui/material";
import React from "react";
import LandingTestimonialCard from "./LandingTestimonialCard";
import SwipperCarosel from "./SwipperCarosel";

const LandingTestimonial = () => {
  const mobileSlides = [
    <LandingTestimonialCard />,
    <LandingTestimonialCard />,
    <LandingTestimonialCard />,

    // Add more slides as needed
  ];
  return (
    <Container component="section" className="flex-col py-10 md:py-20 w-full">
      <div className="flex items-center justify-center pb-10 md:py-18 w-full">
        <Typography
          variant="h1"
          className="font-semibold max-w-60 md:max-w-md text-center"
        >
          What people say about our app
        </Typography>
      </div>

      <SwipperCarosel slides={mobileSlides} className="pb-18 md:pb-24" />
    </Container>
  );
};

export default LandingTestimonial;
