"use client";

import { MainHeading } from "@/components/common/animated/MainHeadings/MainHeadings";
import CommonButton from "@/components/common/buttons/CommonButton";
import { homePageCopy } from "@/utils/temp-data/copy";
import ExperimentOne from "@/utils/temp-data/ExperimentOne";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";
const Landing = () => {
  const landingDescriptionRef = useRef<HTMLParagraphElement>(null);
  const circularLinkRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const entryTL = gsap.timeline({});

    entryTL

      .fromTo(
        ".circle-button-landing-moon",
        { opacity: 0 },
        { opacity: 1 },
        "<"
      )
      .fromTo(
        ".circle-button-landing-moon",
        {
          rotate: -90,
        },
        {
          rotate: 0,
        },
        "<"
      );
  }, [pathname]);

  return (
    <div className="landing-section text-center w-full h-svh items-center flex relative">
      <ExperimentOne />
      <div className="w-full flex justify-between items-center flex-col relative h-full pt-[15svh]">
        <div id="landing-text" className="cz-h1 font-fancy">
          <MainHeading>{homePageCopy.heroSection.heading}</MainHeading>
        </div>
        <div className=" flex justify-center items-center w-full pb-32">
          <CommonButton className="border-2">
            {homePageCopy.heroSection.cta.ctaText}
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default Landing;
