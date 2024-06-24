"use client";
import StarFillIcon from "@/assets/icons/pack/StarFill";
import StarOutlinedIcon from "@/assets/icons/pack/StarOutlined";
import { Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const LandingTestimonialCard = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const starIconSize = isMd ? 32 : 24;
  const userImageSize = `${isMd ? "h-[93px] w-[93px]" : "h-[57px] w-[57px]"}`;
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-8 bg-tertiary-dark md:gap-18 py-9 md:py-12 md:px-12 max-w-96 md:max-w-md rounded-2xl md:rounded-3xl">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <Rating
          className="justify-center gap-2 p-0 m-0"
          name="read-only"
          value={4}
          defaultValue={0}
          emptyIcon={
            <StarFillIcon width={starIconSize} height={starIconSize} />
          }
          icon={<StarOutlinedIcon width={starIconSize} height={starIconSize} />}
          max={5}
          readOnly
        />
        <Typography variant="body2" className="font-semibold text-center">
          As a principal at Maplewood High School, I've seen firsthand the
          positive impact of Academiq. Our teachers have been able to streamline
          their administrative tasks, allowing them to focus more on student
          engagement and academic support.
        </Typography>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className={`${userImageSize} relative`}>
          <Image
            src="https://i.ibb.co/ggp5Bqq/card-vector.png"
            alt="logo"
            fill
            sizes="100%"
            style={{ objectFit: "cover", borderRadius: "100%" }}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <Typography variant="h3" className="font-semibold">
            David Thompson
          </Typography>
          <div className="flex gap-1">
            <Typography
              variant="small"
              className="font-semibold text-tertiary"
              component="span"
            >
              Teacher,
            </Typography>
            <Typography
              variant="small"
              className="font-semibold text-tertiary"
              component="span"
            >
              Oakridge Middle School
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTestimonialCard;
