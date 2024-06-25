"use client";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Container from "@/common/Container";
import LandingDescriptionDesktop from "./LandingDescriptionDesktop";
import LandingDescriptionCard from "./LandingDescriptionDesktopCard";
import SwipperCarosel from "./SwipperCarosel";
import { LandingDescriptionCardProps } from "./types";
import LandingDescriptionMobileCard from "./LandingDescriptionMobileCard";

const LandingDescription = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const serviceCardMobileContentProps = [
    {
      position: "top",
      iconType: "guidance",
      title: "Guidance",
      subtitle: "Expert",
      subtitle2: "for Student Growth",
      description:
        "we believe that every student deserves ,personalized attention and support to thrive academically and personally.",
      cardStyle: "default",
      arrowPosition: "right-[0px]",
      arrowIconType: "default",
    },
    {
      position: "bottom",
      iconType: "learning",
      title: "Learning",
      subtitle: "Engaging",
      subtitle2: "Experiences for Students",
      description:
        "students can access interactive and engaging ,learning experiences that foster curiosity, creativity, and critical thinking skills",
      cardStyle: "rotated",
      arrowPosition: "right-[220px]",
      arrowIconType: "default",
    },
    {
      position: "top",
      iconType: "default",
      title: "Secure and",
      subtitle: "Reliable",
      subtitle2: "Technology",
      description:
        "Trust and reliability are paramount when it ,comes to educational technology",
      cardStyle: "mirrored",
      arrowPosition: "left-[0px]",
      arrowIconType: "inverse",
    },
  ];

  const serviceCardDesktopContentProps = [
    {
      position: "top",
      iconType: "guidance",
      title: "Guidance",
      subtitle: "Expert",
      subtitle2: "for Student Growth",
      description:
        "we believe that every student deserves ,personalized attention and support to thrive academically and personally.",
      cardStyle: "default",
      arrowPosition: "right-[0px]",
      arrowIconType: "default",
    },
    {
      position: "bottom",
      iconType: "learning",
      title: "Learning",
      subtitle: "Engaging",
      subtitle2: "Experiences for Students",
      description:
        "students can access interactive and engaging ,learning experiences that foster curiosity, creativity, and critical thinking skills",
      cardStyle: "rotated",
      arrowPosition: "right-[250px]",
      arrowIconType: "default",
    },
    {
      position: "top",
      iconType: "default",
      title: "Secure and",
      subtitle: "Reliable",
      subtitle2: "Technology",
      description:
        "Trust and reliability are paramount when it ,comes to educational technology",
      cardStyle: "mirrored",
      arrowPosition: "left-[0px]",
      arrowIconType: "inverse",
    },
  ];

  const mobileSlides = serviceCardMobileContentProps.map(
    (testimonial, index: number) => (
      <LandingDescriptionMobileCard
        key={index}
        {...(testimonial as unknown as LandingDescriptionCardProps)}
      />
    )
  );

  const desktopSlides = serviceCardDesktopContentProps.map(
    (testimonial, index: number) => (
      <LandingDescriptionCard
        key={index}
        {...(testimonial as unknown as LandingDescriptionCardProps)}
      />
    )
  );

  return (
    <Container className="m-auto mt-24 md:mt-32 max-w-screen-2xl">
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
