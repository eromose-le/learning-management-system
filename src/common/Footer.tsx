import Container from "./Container";
import { Typography } from "@mui/material";
import Logo from "./Logo";
import FacebookIcon from "@/assets/icons/pack/Facebook";
import InstagramIcon from "@/assets/icons/pack/Instagram";
import Reveals from "./Reveals";

const Footer = () => {
  const navLinks = {
    Solutions: ["AI Support", "To Do List", "Simple Plan"],
    Services: ["Features", "About", "Pricing", "Blog"],
    Policy: ["Privacy Policy", "Cookie Policy", "Acceptable Use Policy"],
  };

  const contactNavLinks = {
    "Lets Talk": ["hello@academiq.com", "Address", "Number"],
  };

  return (
    <Container
      component="footer"
      className="bg-tertiary-light pt-10 md:pt-14 flex flex-col w-full"
    >
      <Reveals width="100%">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full h-full gap-12 lg:gap-0">
          <div>
            <Logo showTitle />
          </div>

          <div className="grid grid-cols-2 gap-8 md:flex md:space-x-12">
            {Object.entries(navLinks).map(([section, links]) => (
              <div key={section} className="space-y-4">
                <Typography variant="h3" className="font-semibold text-black">
                  {section}
                </Typography>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index} className="cursor-pointer">
                      <a className="text-black font-normal text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 md:flex md:space-x-12">
            {Object.entries(contactNavLinks).map(([section, links]) => (
              <div key={section} className="space-y-4">
                <Typography variant="h3" className="font-semibold text-black">
                  {section}
                </Typography>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index} className="cursor-pointer">
                      <a className="text-black font-normal text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 w-full">
          <div className="border-solid border-tertiary border-[0.5px]" />
        </div>

        <div
          id="footer"
          className="pt-3 pb-6 md:pb-6 md:pt-6 flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between w-full"
        >
          <div className="flex py-4 md:py-0 gap-6">
            <div className="cursor-pointer">
              <InstagramIcon />
            </div>
            <div className="cursor-pointer">
              <FacebookIcon />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <Typography variant="h3" className="font-normal">
              AcademIQ, all rights reserved.{" "}
            </Typography>
            <Typography variant="h3" className="font-normal">
              2024
            </Typography>
          </div>
        </div>
      </Reveals>
    </Container>
  );
};

export default Footer;
