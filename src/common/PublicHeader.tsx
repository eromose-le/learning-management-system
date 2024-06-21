"use client"
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { RoutesEnum } from "@/constants/routeEnums";
import logo from "../../public/images/academ_logo.svg";
import Image from "next/image";
import Link from "next/link";
import HeaderActiveLink from "./HeaderActiveLink";
import SideNavToggler from "./SideNavToggler";
import Container from "./Container";
import clsx from "clsx";
const PublicHeader: React.FC = () => {
  const visibilityDesktopClx = "md:block hidden";
  const visibilityMobileClx = "block md:hidden";
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"));
const logoWidth = isMd ? 70 : 40;
  return (
    <Container component="section" className="py-9">
      <div>
        <Link className="flex items-center" href={RoutesEnum.LANDING_PAGE}>
          <Image src={logo} alt="logo" width={logoWidth} height={logoWidth} />
          <Typography
            variant="h3"
            className={clsx(visibilityDesktopClx, "font-semibold")}
          >
            cademIQ
          </Typography>
        </Link>
      </div>
      <nav className={visibilityDesktopClx}>
        <ul className="flex gap-8 xl:gap-24">
          <li>
            <HeaderActiveLink href={RoutesEnum.LANDING_PAGE} text="Home" />
          </li>
          <li>
            <HeaderActiveLink href={RoutesEnum.FEATURE} text="Features" />
          </li>
          <li>
            <HeaderActiveLink href={RoutesEnum.ABOUT_US} text="About Us" />
          </li>
        </ul>
      </nav>
      <div className={visibilityDesktopClx}>
        <Button variant="contained" size="large" className="font-bold px-10">
          Login
        </Button>
      </div>

      <div className={visibilityMobileClx}>
        <SideNavToggler />
      </div>
    </Container>
  );
};

export default PublicHeader;
