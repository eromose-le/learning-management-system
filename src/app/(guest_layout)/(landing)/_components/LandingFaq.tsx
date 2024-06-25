import RightArrowIcon from "@/assets/icons/pack/RightArrow";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { FaqType } from "./types";
import Reveals from "@/common/Reveals";

const LandingFaq = () => {
  const faqs: FaqType[] = [
    {
      question: "Is there a free trial available?",
      answer:
        "Is there a free trial available? Is there a free trial available? Is there a free trial available? Is there a free trial available? Is there a free trial available? Is there a free trial available? Is there a free trial available? Is there a free trial available? Is there a free trial available?",
    },
    {
      question: "Can i change my plan later?",
      answer: "Can i change my plan later?",
    },
    {
      question: "What is your cancelation policy?",
      answer: "What is your cancelation policy?",
    },
  ];
  return (
    <Container
      component="section"
      className="flex-col w-full px-8 py-8 mt-12 md:mt-20 max-w-screen-2xl md:py-20"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center max-w-[300px] md:max-w-md">
          <Typography variant="h3" className="font-normal">
            What do you want to know?
          </Typography>
          <Reveals>
            <Typography variant="h1" className="font-semibold">
              The most frequently asked questions
            </Typography>
          </Reveals>
        </div>

        <div className="mt-4 md:mb-20">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              className="py-2 rounded-none md:p-3 bg-tertiary-light"
            >
              <AccordionSummary
                expandIcon={<RightArrowIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h3" className="font-semibold">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="h3"
                  className="font-normal text-secondary-dark"
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LandingFaq;
