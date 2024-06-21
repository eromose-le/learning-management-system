"use client";
import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type props = {
  href: string;
  text: string;
};

const isActive = (pathname: string, link: string) => pathname === link;

const HeaderActiveLink: React.FC<props> = ({ href: link = "/", text }) => {
  const pathname = usePathname();

  return (
    <Link href={link}>
      <Typography
        className={`${
          isActive(pathname, link)
            ? "text-secondary font-semibold"
            : "text-tertiary"
        } text-xl font-normal`}
        // fontFamily="Arial, sans-serif"
      >
        {text}
      </Typography>
    </Link>
  );
};

export default HeaderActiveLink;
