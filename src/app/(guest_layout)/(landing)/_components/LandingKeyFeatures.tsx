import Container from "@/common/Container";
import { Typography } from "@mui/material";
import Image from "next/image";
import featureAvatar from "../../../../../public/images/feature-avatar.svg";

const LandingKeyFeatures = () => {
  const keyFeatures: { index: string; value: string }[] = [
    {
      index: "01",
      value:
        "Effortless Course Management: Seamlessly organize schedules, assignments, and resources for all your courses.",
    },
    {
      index: "02",
      value:
        "Engaging Assessments: Create and administer interactive computer-based tests to assess student progress effectively.",
    },
    {
      index: "03",
      value:
        "Insightful Analytics: Gain valuable insights into student performance and engagement to drive informed decision-making.",
    },
    {
      index: "04",
      value:
        "Collaborative Learning: Foster collaboration and communication among students and educators through intuitive tools and features.",
    },
  ];
  return (
    <Container
      component="section"
      className="mt-12 md:mt-28 pt-12 pb-20 bg-primary flex-col justify-start"
    >
      <div className="max-w-screen-2xl m-auto px-9 [@media(max-width:925px)]:px-0">
        <div className="flex lg:hidden aspect-w-5 aspect-h-3 w-full">
          <Image
            src={featureAvatar}
            alt="hero-image"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            width={500}
            height={300}
          />
        </div>
        <div className="text-center lg:text-left mt-2 w-full">
          <Typography variant="h1" className="font-semibold text-white">
            Our key Features
          </Typography>
        </div>

        <section className="flex w-full relative">
          <div className="flex flex-col flex-2 gap-0 md:gap-5">
            {keyFeatures.map((feature) => (
              <div
                key={feature.index}
                className="flex items-center mt-6 md:mt-12 gap-2 md:gap-4"
              >
                <Typography variant="h4" className="font-bold text-tertiary">
                  {feature.index}
                </Typography>
                <Typography variant="h5" className="font-bold text-white">
                  {feature.value}
                </Typography>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-2 items-center justify-end h-[500px] w-[500px] md:w-[700px]"></div>
          <div className="hidden lg:flex flex-2 items-center justify-end absolute bottom-[-80px] right-0 w-[430px] h-[630px]">
            <Image
              src={featureAvatar}
              alt="hero-image"
              fill
              className="absolute bottom-40"
              sizes="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
      </div>
    </Container>
  );
};

export default LandingKeyFeatures;
