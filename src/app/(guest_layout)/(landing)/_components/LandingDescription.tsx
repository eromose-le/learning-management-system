"use client";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Container from "@/common/Container";
import LandingDescriptionDesktop from "./LandingDescriptionDesktop";
import LandingDescriptionMobile from "./LandingDescriptionMobile";
import LandingDescriptionCard from "./LandingDescriptionDesktopCard";
import LandingDescriptionMobileCard from "./LandingDescriptionMobileCard";
import SwipperCarosel from "./SwipperCarosel";

const LandingDescription = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const mobileSlides = [
    <LandingDescriptionMobileCard
      position="top"
      iconType="guidance"
      title="Guidance"
      subtitle="Expert"
      subtitle2="for Student Growth"
      description="we believe that every student deserves personalized attention and support to thrive academically and personally."
      cardStyle="default"
      arrowPosition="right-[0px]"
      arrowIconType="default"
    />,
    <LandingDescriptionMobileCard
      position="bottom"
      iconType="learning"
      title="Learning"
      subtitle="Engaging"
      subtitle2="Experiences for Students"
      description="students can access interactive and engaging learning experiences that foster curiosity, creativity, and critical thinking skills"
      cardStyle="rotated"
      arrowPosition="right-[220px]"
      arrowIconType="default"
    />,
    <LandingDescriptionMobileCard
      position="top"
      iconType="default"
      title="Secure and"
      subtitle="Reliable"
      subtitle2="Technology"
      description="Trust and reliability are paramount when it comes to educational technology"
      cardStyle="mirrored"
      arrowPosition="left-[0px]"
      arrowIconType="inverse"
    />,
    // Add more slides as needed
  ];
  const desktopSlides = [
    <LandingDescriptionCard
      position="top"
      iconType="guidance"
      title="Guidance"
      subtitle="Expert"
      subtitle2="for Student Growth"
      description="we believe that every student deserves personalized attention and support to thrive academically and personally."
      cardStyle="default"
      arrowPosition="right-[0px]"
      arrowIconType="default"
    />,
    <LandingDescriptionCard
      position="bottom"
      iconType="learning"
      title="Learning"
      subtitle="Engaging"
      subtitle2="Experiences for Students"
      description="students can access interactive and engaging learning experiences that foster curiosity, creativity, and critical thinking skills"
      cardStyle="rotated"
      arrowPosition="right-[250px]"
      arrowIconType="default"
    />,
    <LandingDescriptionCard
      position="top"
      iconType="default"
      title="Secure and"
      subtitle="Reliable"
      subtitle2="Technology"
      description="Trust and reliability are paramount when it comes to educational technology"
      cardStyle="mirrored"
      arrowPosition="left-[0px]"
      arrowIconType="inverse"
    />,
  ];

  return (
    <Container className="mt-24 md:mt-32 max-w-screen-2xl m-auto">
      {isMd ? (
        <LandingDescriptionDesktop cards={desktopSlides} />
      ) : (
        <SwipperCarosel slides={mobileSlides} className="mt-[-50px] pb-14" />
      )}

      <div className="hidden"></div>
    </Container>
  );
};

export default LandingDescription;
