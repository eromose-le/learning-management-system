import LandingHero from "./_components/LandingHero";
import LandingDescription from "./_components/LandingDescription";
import LandingKeyFeatures from "./_components/LandingKeyFeatures";
import LandingTestimonial from "./_components/LandingTestimonial";
import LandingBanner from "./_components/LandingBanner";
import LandingFaq from "./_components/LandingFaq";

export default function LandingPage() {
  return (
    <>
      <LandingHero
        heading="Transforming Education, Empowering Success"
        subheading="Streamline School Management and Elevate Learning Experiences with Our Innovative Platform"
        showButtons={true}
        buttonPrimaryText="Get started"
        buttonSecondaryText="Get to know more"
        imageUrl="/images/hero-image.svg"
        imageAlt="hero-image"
      />
      <LandingHero
        heading="Elevate your school's performance with our tailored solutions"
        subheading="Our platform is meticulously crafted to address the unique challenges and needs of modern educational institutions."
        showButtons={false}
        imageUrl={null}
        imageAlt={null}
        inverse
      />
      <LandingDescription />
      <LandingKeyFeatures />
      <LandingTestimonial />
      <LandingBanner />
      <LandingFaq />
    </>
  );
}
