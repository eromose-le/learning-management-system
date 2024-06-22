import React from "react";
import LandingHero from "./_components/LandingHero";
import LandingHero2 from "./_components/LandingHero2";
import LandingDescription from "./_components/LandingDescription";
import LandingKeyFeatures from "./_components/LandingKeyFeatures";

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <LandingHero2 />
      <LandingDescription />
      <LandingKeyFeatures />
    </>
  );
}
