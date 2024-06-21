import Container from "@/common/Container";
import { Button, Typography } from "@mui/material";
import heroImage from "../../../../../public/images/hero-image.svg";
import Image from "next/image";

export default function LandingHero2() {
  return (
    <Container
      component="section"
      className="flex flex-col-reverse md:items-end md:flex-row justify-between mt-0 md:mt-32 gap-8 md:gap-14"
    >
      <div className="flex-1">
        <div className="flex flex-col max-w-md text-center md:text-start gap-6 md:gap-8">
          <Typography variant="h1" className="font-semibold text-secondary">
            Elevate your school's performance with our tailored solutions
          </Typography>
        </div>
      </div>
      <div className="flex flex-1 items-baseline justify-end">
        <div className="flex flex-col max-w-md text-center md:text-start gap-6 md:gap-8">
          <Typography variant="h6" className="font-normal text-tertiary">
            Our platform is meticulously crafted to address the unique
            challenges and needs of modern educational institutions.
          </Typography>
        </div>
      </div>
    </Container>
  );
}
