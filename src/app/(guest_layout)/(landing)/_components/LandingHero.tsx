"use client";
import Container from "@/common/Container";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Reveals from "@/common/Reveals";
import { FC } from "react";
import clsx from "clsx";

interface LandingHeroProps {
  heading: string;
  subheading?: string;
  showButtons?: boolean;
  buttonPrimaryText?: string;
  buttonSecondaryText?: string;
  imageUrl?: string | null;
  imageAlt?: string | null;
  inverse?: boolean;
}

const LandingHero: FC<LandingHeroProps> = ({
  heading,
  subheading,
  showButtons = false,
  buttonPrimaryText,
  buttonSecondaryText,
  imageUrl,
  imageAlt,
  inverse,
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const renderImage = () =>
    imageUrl && (
      <div className="flex-1">
        <Image
          src={imageUrl}
          alt={imageAlt || "Image"}
          sizes="100vw"
          layout="responsive"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          width={500}
          height={300}
        />
      </div>
    );

  const renderSubheading = () =>
    subheading && (
      <div className="flex-1 mt-2 md:mt-0">
        <Typography variant="h6" className="font-normal text-tertiary">
          {subheading}
        </Typography>
      </div>
    );

    const renderButtons = () =>
      showButtons && (
        <div className="flex flex-col gap-6 md:flex-row mt-7 md:mt-9 md:gap-3">
          <Button variant="contained" size="large" className="px-10">
            {buttonPrimaryText}
          </Button>
          <Button variant="linkSecondary" size="large">
            {buttonSecondaryText}
          </Button>
        </div>
      );

  return (
    <Container
      component="section"
      className={clsx(
        inverse && "md:items-end flex-col-reverse",
        "flex flex-col-reverse justify-between gap-8 m-auto mt-0 md:flex-row md:mt-24 md:gap-14 max-w-screen-2xl"
      )}
    >
      <div className="flex-1">
        <div className="flex flex-col max-w-md gap-8 mt-6 text-center md:text-start md:gap-8 md:mt-0">
          <Reveals>
            <Typography variant="h1" className="font-semibold text-secondary">
              {heading}
            </Typography>
          </Reveals>
          {isMd
            ? !inverse
            : inverse &&
              subheading && (
                <Typography variant="h6" className="font-normal text-tertiary">
                  {subheading}
                </Typography>
              )}
        </div>

        {renderButtons()}
      </div>

      {renderImage()}
      {isMd && inverse && renderSubheading()}
    </Container>
  );
};

export default LandingHero;
