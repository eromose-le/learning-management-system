import SVGIcon, { SVGIconProps } from "@/common/Icons/SVGIcon";
import { FC } from "react";

type TeacherIconType = Partial<SVGIconProps>;

const TeacherIcon: FC<TeacherIconType> = ({ ...props }) => (
  <SVGIcon
    width="100"
    height="100"
    viewBox="0 0 130 130"
    fill="none"
    {...props}
  >
    <path
      d="M54.4421 13.7043L21.8338 34.9918C11.3796 41.8168 11.3796 57.0918 21.8338 63.9168L54.4421 85.2043C60.2921 89.0501 69.9338 89.0501 75.7838 85.2043L108.23 63.9168C118.63 57.0918 118.63 41.871 108.23 35.046L75.7838 13.7585C69.9338 9.85847 60.2921 9.85847 54.4421 13.7043Z"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30.5044 70.8497L30.4502 96.2539C30.4502 103.133 35.7585 110.5 42.2585 112.666L59.5377 118.408C62.5169 119.383 67.446 119.383 70.4794 118.408L87.7585 112.666C94.2585 110.5 99.5669 103.133 99.5669 96.2539V71.1206"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M115.927 81.25V48.75"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVGIcon>
);

export default TeacherIcon;
