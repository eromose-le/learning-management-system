import Container from "@/common/Container";
import { Button, Typography } from "@mui/material";
import React from "react";

const LandingBanner = () => {
  return (
    <Container
      component="section"
      className="flex-col py-8 rounded-lg md:py-12 mx-9 md:mx-2 bg-secondary-dark"
    >
      <div className="flex flex-col items-center justify-center gap-8 md:w-full md:justify-between md:gap-2 max-w-screen-2xl md:flex-row">
        <Typography
          variant="h1"
          className="max-w-screen-sm font-semibold text-center text-white md:text-left "
        >
          Ready to Elevate Your School's Educational Experience?
        </Typography>
        <Button size="medium" variant="contained">
          Get started
        </Button>
      </div>
    </Container>
  );
};

export default LandingBanner;
