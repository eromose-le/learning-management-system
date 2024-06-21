import SVGIcon, { SVGIconProps } from "@/common/Icons/SVGIcon";
import { FC } from "react";

type ArrowUpInverseIconType = Partial<SVGIconProps>;

const ArrowUpInverseIcon: FC<ArrowUpInverseIconType> = ({ ...props }) => (
  <SVGIcon
    width="110"
    height="110"
    viewBox="0 0 142 142"
    fill="none"
    {...props}
  >
    <path
      d="M43.9933 77.2152L50.3076 41.402L86.0518 47.7052"
      stroke="#0063DB"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M91.5181 100.379L50.7188 41.9917"
      stroke="#0063DB"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SVGIcon>
);

export default ArrowUpInverseIcon;
