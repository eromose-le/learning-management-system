import SVGIcon, { SVGIconProps } from "@/common/Icons/SVGIcon";
import { FC } from "react";

type BriefCaseIconType = Partial<SVGIconProps>;

const BriefCaseIcon: FC<BriefCaseIconType> = ({ ...props }) => (
  <SVGIcon
    width="100"
    height="100"
    viewBox="0 0 130 130"
    fill="none"
    {...props}
  >
    <path
      d="M64.9987 98.5826C76.9649 98.5826 86.6654 88.8821 86.6654 76.9159C86.6654 64.9498 76.9649 55.2493 64.9987 55.2493C53.0325 55.2493 43.332 64.9498 43.332 76.9159C43.332 88.8821 53.0325 98.5826 64.9987 98.5826Z"
      stroke="black"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.3529 70.1451V75.1826C66.3529 77.0785 65.3779 78.866 63.6987 79.841L59.582 82.3326"
      stroke="black"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.3308 119.166H86.6642C108.439 119.166 112.339 110.445 113.477 99.8288L117.539 56.4955C119.002 43.2788 115.21 32.4996 92.0808 32.4996H37.9142C14.785 32.4996 10.9933 43.2788 12.4558 56.4955L16.5183 99.8288C17.6558 110.445 21.5558 119.166 43.3308 119.166Z"
      stroke="black"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.332 32.4996V28.1662C43.332 18.5787 43.332 10.8329 60.6654 10.8329H69.332C86.6654 10.8329 86.6654 18.5787 86.6654 28.1662V32.4996"
      stroke="black"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M117.268 59.5829C107.897 66.4079 97.4969 71.1746 86.7178 73.8829"
      stroke="black"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.1914 61.0457C23.2372 67.2207 33.0956 71.6082 43.3331 74.0998"
      stroke="black"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SVGIcon>
);

export default BriefCaseIcon;
