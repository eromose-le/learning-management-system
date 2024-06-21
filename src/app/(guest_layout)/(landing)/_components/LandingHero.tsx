import Container from "@/common/Container";
import { Button, Typography } from "@mui/material";
import heroImage from "../../../../../public/images/hero-image.svg";
import Image from "next/image";

export default function LandingHero() {
  return (
    <Container
      component="section"
      className="flex flex-col-reverse md:flex-row justify-between mt-0 md:mt-24 gap-8 md:gap-14"
    >
      <div className="flex-1">
        <div className="flex flex-col max-w-md text-center md:text-start gap-6 md:gap-8">
          <Typography variant="h1" className="font-semibold text-secondary">
            Transforming Education, Empowering Success
          </Typography>
          <Typography variant="h6" className="font-normal text-tertiary">
            Streamline School Management and Elevate Learning Experiences with
            Our Innovative Platform
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row mt-7 md:mt-9 gap-6 md:gap-3">
          <Button variant="contained" size="large">
            Get started
          </Button>
          <Button variant="linkSecondary" size="large">
            Get to know more
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={heroImage}
          alt="hero-image"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          width={500}
          height={300}
        />
      </div>
    </Container>
  );
}
