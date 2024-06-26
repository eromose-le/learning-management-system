import { Box, Typography } from "@mui/material";
import clsx from "clsx";

// Icon components (replace with actual icons you are using)
import TeacherIcon from "@/assets/icons/pack/Teacher";
import ArrowUpIcon from "@/assets/icons/pack/ArrowUp";
import ArrowUpInverseIcon from "@/assets/icons/pack/ArrowUpInverse";
import BriefCaseIcon from "@/assets/icons/pack/BriefCase";
import SecuritySafeIcon from "@/assets/icons/pack/SecuritySafe";
import { IconType, ArrowIconType, LandingDescriptionCardProps } from "./types";

// Utility function to render icons based on type
const renderIcon = (type: IconType) => {
  switch (type) {
    case "guidance":
      return <TeacherIcon />;
    case "learning":
      return <BriefCaseIcon />;
    default:
      return <SecuritySafeIcon />;
  }
};

// Utility function to render arrow icons based on type
const renderArrowIcon = (type: ArrowIconType) => {
  switch (type) {
    case "inverse":
      return <ArrowUpInverseIcon width="90px" height="90px" />;
    default:
      return <ArrowUpIcon width="90px" height="90px" />;
  }
};

const LandingDescriptionMobileCard: React.FC<LandingDescriptionCardProps> = ({
  position,
  iconType,
  title,
  subtitle,
  subtitle2,
  description,
  cardStyle,
  arrowPosition,
  arrowIconType,
}) => {
  const backgroundStyles = {
    default: "transform rotate-0",
    rotated: "transform rotate-180",
    mirrored: "transform rotate-0 scale-x-[-1]",
  };

  const renderIconPositions = {
    default: "flex items-center justify-start mb-10",
    rotated: "flex items-center justify-end mb-10",
    mirrored: "flex items-center justify-end mb-10",
  };

  return (
    <Box
      className="relative py-8 px-4 rounded-lg w-[290px] h-[290px]"
      style={{ position: "relative" }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div
          className={`absolute inset-0 bg-contain bg-no-repeat bg-center ${backgroundStyles[cardStyle]}`}
          style={{
            backgroundImage: `url('https://i.ibb.co/ggp5Bqq/card-vector.png')`,
            zIndex: -1,
          }}
        />
        <div
          className={clsx(
            "absolute",
            position === "top" ? "top-4" : "bottom-4",
            arrowPosition
          )}
        >
          <div className="p-1 border rounded-full bg-tertiary-light">
            {renderArrowIcon(arrowIconType)}
          </div>
        </div>
      </div>

      <div
        className={
          cardStyle === "rotated" ? "flex flex-col-reverse gap-4 md:gap-14" : ""
        }
      >
        <div className={`${renderIconPositions[cardStyle]}`}>
          {renderIcon(iconType)}
        </div>
        <div>
          <Typography
            variant="h4"
            className="mb-2 font-bold text-black md:mb-4"
          >
            {title} <span className="mr-2 text-blue-500">{subtitle}</span>
            {subtitle2}
          </Typography>
          <Typography
            variant="body2"
            className="mt-2 font-normal text-gray-500"
          >
            {description}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default LandingDescriptionMobileCard;
