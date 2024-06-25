import SVGIcon, { SVGIconProps } from "@/common/Icons/SVGIcon";
import { FC } from "react";

type RightArrowIconType = Partial<SVGIconProps>;

const RightArrowIcon: FC<RightArrowIconType> = ({ ...props }) => (
  <SVGIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
  
      <path
        d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
        stroke="#0063DB"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12H20.33"
        stroke="#0063DB"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
  </SVGIcon>
);

export default RightArrowIcon;
