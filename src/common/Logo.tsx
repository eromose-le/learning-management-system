"use client";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { RoutesEnum } from "@/constants/routeEnums";
import logo from "../../public/images/academ_logo.svg";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const Logo = ({ showTitle }: { showTitle?: boolean }) => {
  const visibilityDesktopClx = "md:block hidden";
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const logoWidth = isMd ? 70 : 40;
  const headerTag = "#header";

  return (
    <Link
      className="flex items-center"
      href={showTitle ? headerTag : RoutesEnum.LANDING_PAGE}
    >
      <Image src={logo} alt="logo" width={logoWidth} height={logoWidth} />
      <Typography
        variant="h3"
        className={clsx(
          !showTitle ? visibilityDesktopClx : "",
          "font-semibold"
        )}
      >
        cademIQ
      </Typography>
    </Link>
  );
};

export default Logo;
