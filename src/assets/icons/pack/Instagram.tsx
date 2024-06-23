import SVGIcon, { SVGIconProps } from "@/common/Icons/SVGIcon";
import { FC } from "react";

type BriefCaseIconType = Partial<SVGIconProps>;

const InstagramIcon: FC<BriefCaseIconType> = ({ ...props }) => (
  <SVGIcon width="50" height="50" viewBox="0 0 50 50" fill="none" {...props}>
    <path
      d="M18.7503 45.8334H31.2503C41.667 45.8334 45.8337 41.6668 45.8337 31.2501V18.7501C45.8337 8.33342 41.667 4.16675 31.2503 4.16675H18.7503C8.33366 4.16675 4.16699 8.33342 4.16699 18.7501V31.2501C4.16699 41.6668 8.33366 45.8334 18.7503 45.8334Z"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.9997 32.2916C29.0268 32.2916 32.2913 29.027 32.2913 24.9999C32.2913 20.9728 29.0268 17.7083 24.9997 17.7083C20.9726 17.7083 17.708 20.9728 17.708 24.9999C17.708 29.027 20.9726 32.2916 24.9997 32.2916Z"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36.7422 14.5834H36.7663"
      stroke="#292D32"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default InstagramIcon;
