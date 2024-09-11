"use client";

import { MainHeading } from "@/components/common/animated/MainHeadings/MainHeadings";
import CommonButton from "@/components/common/buttons/CommonButton";
import { homePageCopy } from "@/utils/temp-data/copy";
import ExperimentOne from "@/utils/temp-data/ExperimentOne";
const Landing = () => {
  return (
    <div className="landing-section text-center w-full min-h-[130lvh] flex relative">
      <ExperimentOne />
      <div className="w-full flex  items-center flex-col relative h-full pt-[15svh]">
        <div id="landing-text" className="cz-h1 font-fancy pb-10">
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
