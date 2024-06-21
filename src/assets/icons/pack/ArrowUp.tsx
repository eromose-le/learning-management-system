import SVGIcon, { SVGIconProps } from "@/common/Icons/SVGIcon";
import { FC } from "react";

type ArrowUpIconType = Partial<SVGIconProps>;

const ArrowUpIcon: FC<ArrowUpIconType> = ({ ...props }) => (
  <SVGIcon
    width="110"
    height="110"
    viewBox="0 0 144 144"
    fill="none"
    {...props}
  >
    <path
      d="M97.3635 82.7944L97.3635 46.4288L60.9979 46.4288"
      stroke="#0063DB"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.4408 97.3529L96.8555 46.9382"
      stroke="#0063DB"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SVGIcon>
);

export default ArrowUpIcon;
