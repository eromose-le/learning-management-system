import React, { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import clsx from "clsx";

interface CustomButtonProps extends ButtonProps {
  className?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  className,
  ...props
}) => {
  console.log(clsx(className));
  return (
    <Button
      {...props}
      className={clsx(className)}
      sx={{
        fontWeight: "600",
        fontSize: "1.5rem", // text-2xl in Tailwind
        paddingX: 3.5, // px-7 in Tailwind
        // backgroundColor: "#000", // Default background color
        "&:hover": {
          backgroundColor: "#333", // Change this to your desired hover color
        },
        // Add more default styles if needed
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
