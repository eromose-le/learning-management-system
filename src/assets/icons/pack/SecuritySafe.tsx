import SVGIcon, { SVGIconProps } from "@/common/Icons/SVGIcon";
import { FC } from "react";

type SecuritySafeIconType = Partial<SVGIconProps>;

const SecuritySafeIcon: FC<SecuritySafeIconType> = ({ ...props }) => (
  <SVGIcon
    width="100"
    height="100"
    viewBox="0 0 129 128"
    fill="none"
    {...props}
  >
    <path
      d="M111.53 59.3069C111.53 85.3869 92.597 109.814 66.7303 116.96C64.9703 117.44 63.0502 117.44 61.2902 116.96C35.4235 109.814 16.4902 85.3869 16.4902 59.3069V35.8935C16.4902 31.5202 19.797 26.5602 23.9036 24.9069L53.6102 12.747C60.2769 10.027 67.7969 10.027 74.4635 12.747L104.17 24.9069C108.224 26.5602 111.584 31.5202 111.584 35.8935L111.53 59.3069Z"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M64.0143 66.6665C69.9054 66.6665 74.681 61.8908 74.681 55.9998C74.681 50.1088 69.9054 45.3331 64.0143 45.3331C58.1233 45.3331 53.3477 50.1088 53.3477 55.9998C53.3477 61.8908 58.1233 66.6665 64.0143 66.6665Z"
      stroke="black"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M64.0166 66.6664V82.6664"
      stroke="black"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SVGIcon>
);

export default SecuritySafeIcon;
