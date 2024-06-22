"use client";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Container from "@/common/Container";
import LandingDescriptionDesktop from "./LandingDescriptionDesktop";
import LandingDescriptionMobile from "./LandingDescriptionMobile";
import LandingDescriptionCard from "./LandingDescriptionDesktopCard";
import LandingDescriptionMobileCard from "./LandingDescriptionMobileCard";

const LandingDescription = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container className="mt-24 md:mt-32 max-w-screen-2xl m-auto">
      {isMd ? (
        <LandingDescriptionDesktop
          LandingDescriptionCardA={
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
            />
          }
          LandingDescriptionCardB={
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
            />
          }
          LandingDescriptionCardC={
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
            />
          }
        />
      ) : (
        <LandingDescriptionMobile
          LandingDescriptionCardA={
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
            />
          }
          LandingDescriptionCardB={
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
            />
          }
          LandingDescriptionCardC={
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
            />
          }
        />
      )}

      <div className="hidden"></div>
    </Container>
  );
};

export default LandingDescription;
