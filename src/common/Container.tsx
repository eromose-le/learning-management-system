import React, { FC, ElementType } from "react";
import clsx from "clsx";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  component?: ElementType;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  component: Component = "div",
  ...props
}) => {
  return (
    <Component
      {...props}
      className={`${clsx(
        className
      )} col-span-12 flex items-center justify-between px-9 [@media(max-width:925px)]:px-9 md:px-[108px]`}
    >
      {children}
    </Component>
  );
};

export default Container;
