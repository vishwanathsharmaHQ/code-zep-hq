import AnimatedParagraphScroll from "@/components/common/animated/Paragraphs/ParagraphScroll";
import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import CommonButton from "@/components/common/buttons/CommonButton";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import { CopyDesc } from "@/types/copy/copy.types";
import { homePageCopy } from "@/utils/temp-data/copy";
import { ReactNode } from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className=" w-full h-svh relative text-center">
      <div className="flex mx-auto py-24">
        <div className="flex flex-col w-full items-center">
          <AnimatedSubheading className="common-pagesubheading font-fancy leading-tight overflow-hidden">
            {/* <div className="">
              {`I'm Kartik`}
             </div> */}
            {homePageCopy.aboutSection.heading}
          </AnimatedSubheading>

          <AnimatedParagraphScroll>
            {homePageCopy.aboutSection.desc.map((item: any, index: number) => {
              return (
                <h4
                  key={index}
                  className="font-fancy text-center common-subheading w-full lg:w-4/6 pt-10 leading-relaxed  overflow-hidden"
                >
                  <div>{item.text}</div>
                </h4>
              );
            })}
          </AnimatedParagraphScroll>

          <div className="">
            <PageTransitionLink href="/about" className="flex gap-5">
              <CommonButton>Learn More</CommonButton>
            </PageTransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
