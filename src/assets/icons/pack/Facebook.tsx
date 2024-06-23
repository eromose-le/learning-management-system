import SVGIcon, { SVGIconProps } from "@/common/Icons/SVGIcon";
import { FC } from "react";

type BriefCaseIconType = Partial<SVGIconProps>;

const FacebookIcon: FC<BriefCaseIconType> = ({ ...props }) => (
  <SVGIcon
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    {...props}
  >
  
      <path
        d="M29.1667 19.375V25.4167H34.5833C35 25.4167 35.2083 25.8333 35.2083 26.25L34.375 30.2083C34.375 30.4167 33.9583 30.625 33.75 30.625H29.1667V45.8333H22.9167V30.8333H19.375C18.9583 30.8333 18.75 30.625 18.75 30.2083V26.25C18.75 25.8333 18.9583 25.625 19.375 25.625H22.9167V18.75C22.9167 15.2083 25.625 12.5 29.1667 12.5H34.7917C35.2083 12.5 35.4167 12.7083 35.4167 13.125V18.125C35.4167 18.5417 35.2083 18.75 34.7917 18.75H29.7917C29.375 18.75 29.1667 18.9583 29.1667 19.375Z"
        stroke="#17191C"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M31.2503 45.8334H18.7503C8.33366 45.8334 4.16699 41.6667 4.16699 31.2501V18.7501C4.16699 8.33341 8.33366 4.16675 18.7503 4.16675H31.2503C41.667 4.16675 45.8337 8.33341 45.8337 18.7501V31.2501C45.8337 41.6667 41.667 45.8334 31.2503 45.8334Z"
        stroke="#17191C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

  </SVGIcon>
);

export default FacebookIcon;
