import AnimatedParagraphScroll from "@/components/common/animated/Paragraphs/ParagraphScroll";
import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import CommonButton from "@/components/common/buttons/CommonButton";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import { homePageCopy } from "@/utils/temp-data/copy";

type Props = {};

const About = (props: Props) => {
  return (
    <div className=" w-full relative  page-padding">
      <div className="flex py-24">
        <div className="flex flex-col w-full ">
          <AnimatedSubheading className="common-pagesubheading text-left font-fancy overflow-hidden ">
            {homePageCopy.aboutSection.heading}
          </AnimatedSubheading>

          <AnimatedParagraphScroll>
            {homePageCopy.aboutSection.desc.map((item: any, index: number) => {
              return (
                <h4
                  key={index}
                  className="font-fancy common-subheading w-full lg:w-4/6 pt-5 leading-relaxed  overflow-hidden"
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
