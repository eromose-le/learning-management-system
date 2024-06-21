import React from "react";
import LandingDescriptionCard from "./LandingDescriptionCard";
import Container from "@/common/Container";

const LandingDescription = () => {
  return (
    <Container className="my-32">
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-9 w-full">
        {/* 1st card */}
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

        {/* 2nd card */}
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

        {/* 3rd card */}
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
      </div>
      <div className="hidden"></div>
    </Container>
  );
};

export default LandingDescription;