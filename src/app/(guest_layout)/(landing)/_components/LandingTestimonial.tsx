// LandingTestimonial.tsx
import React from "react";
import Container from "@/common/Container";
import { Typography } from "@mui/material";
import LandingTestimonialCard from "./LandingTestimonialCard";
import SwipperCarosel from "./SwipperCarosel";
import { Testimonial } from "./types";

const testimonials: Testimonial[] = [
  {
    name: "Emily Rodriguez",
    title: "Principal",
    school: "Maplewood High School",
    rating: 5,
    review:
      "As a principal at Maplewood High School, I've seen firsthand the positive impact of Academiq. Our teachers have been able to streamline their administrative tasks, allowing them to focus more on student engagement and academic support.",
    img_url: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "David Thompson",
    title: "Teacher",
    school: "Oakridge Middle School",
    rating: 5,
    review:
      "I've been using Academiq for over a year now, and I can't imagine going back to the old way of managing my courses. The platform is intuitive, user-friendly, and has significantly reduced my workload as a teacher.",
    img_url: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah Johnson",
    title: "Administrator",
    school: "Riverdale Elementary School",
    rating: 4,
    review:
      "As an administrator at Riverdale Elementary, I'm constantly looking for ways to enhance our school's educational experience. Academip [Name] has been a game-changer for us.",
    img_url: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const LandingTestimonial: React.FC = () => {
  const mobileSlides = testimonials.map((testimonial: Testimonial, index: number) => (
    <LandingTestimonialCard key={index} {...testimonial} />
  ));

  return (
    <Container component="section" className="flex-col w-full py-8 md:py-20">
      <div className="flex items-center justify-center w-full pb-10 md:py-24">
        <Typography
          variant="h1"
          className="font-semibold text-center max-w-60 md:max-w-md"
        >
          What people say about our app
        </Typography>
      </div>

      <SwipperCarosel
        slides={mobileSlides}
        className="pb-18 md:pb-24 max-w-screen-2xl md:w-full"
      />
    </Container>
  );
};

export default LandingTestimonial;
