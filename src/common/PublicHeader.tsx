"use client";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { RoutesEnum } from "@/constants/routeEnums";
import HeaderActiveLink from "./HeaderActiveLink";
import SideNavToggler from "./SideNavToggler";
import Container from "./Container";
import Logo from "./Logo";
const PublicHeader: React.FC = () => {
  const visibilityDesktopClx = "md:block hidden";
  const visibilityMobileClx = "block md:hidden";
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container component="section" className="py-9">
      <div id="header">
        <Logo />
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
