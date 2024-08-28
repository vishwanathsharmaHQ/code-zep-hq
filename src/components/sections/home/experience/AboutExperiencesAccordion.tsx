"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AudioLines, BriefcaseIcon, Component, LineChart } from "lucide-react";

type Props = {
  isCurrent: boolean;
  fromTo: {
    from: string;
    to: string;
  };
  company: string;
  position: string;
  mainDescription: string;
  achievements?: {
    type: string;
    text: string;
  }[];
};

const AboutExperiencesAccordion = (props: Props) => {
  const ICON_TYPE = [
    {
      component: (
        <AudioLines className="size-[1em] mt-[0.5em] hidden lg:flex" />
      ),
    },
    {
      component: <LineChart className="size-[1em] mt-[0.5em] hidden lg:flex" />,
    },
    {
      component: <Component className="size-[1em] mt-[0.5em] hidden lg:flex" />,
    },
  ];
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem className=" border-b-white/30" value="item-1">
        <AccordionTrigger className="common-bold-subheading  flex justify-between font-fancy py-5 lg:py-16 data-[state=open]:bg-white  data-[state=open]:px-5 data-[state=open]:text-black ">
          <div className="w-full flex lg:justify-between flex-col lg:flex-row items-start lg:items-center">
            <h3 className="common-bold-subheading flex-[0.6]  text-left ">
              {props.position}
            </h3>
            <div className="text-xl lg:text-4xl py-4 lg:py-0 flex-[0.2] text-left">
              {props.company}
            </div>

            <div className="text-sm font-medium  flex-[0.2] lg:flex items-center justify-between gap-5 hidden ">
              <div className="flex items-center gap-5  flex-[0.2]">
                {props.isCurrent ? (
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border-2 ">
                    <BriefcaseIcon className="w-4 h-4" />
                    current
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div>
                {props.fromTo.from} - {props.fromTo.to}
              </div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent>
          <div className="border px-5 py-10 lg:px-10">
            <div className="w-full lg:w-2/3 my-10">
              <p className="text-xl leading-relaxed ">
                {props.mainDescription}
              </p>
            </div>

            <div className=" w-full lg:w-2/3 text-sm  gap-5 flex flex-col py-10 lg:py-0 ">
              {props.achievements?.map((achievement, index) => {
                return (
                  <div className="" key={index}>
                    <div className="flex items-start gap-5">
                      {achievement.type === "Dev"
                        ? ICON_TYPE[0].component
                        : achievement.type === "Design"
                        ? ICON_TYPE[1].component
                        : ICON_TYPE[2].component}
                      <span className="text-lg max-w-prose">
                        {achievement.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AboutExperiencesAccordion;
