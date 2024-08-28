import AnimatedParagraphScroll from "@/components/common/animated/Paragraphs/ParagraphScroll";
import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import CommonButton from "@/components/common/buttons/CommonButton";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";

type Props = {};

const About = (props: Props) => {
  return (
    <div className=" w-full relative text-center">
      <div className="flex mx-auto py-24">
        <div className="flex flex-col w-full items-center">
          <AnimatedSubheading>
            <div className="common-pagesubheading font-fancy leading-tight overflow-hidden">
              {`I'm Kartik`}
              <span className="ml-2 font-extrabold bg-gradient-to-r from-[#9333ea] via-[#856aff] to-[#9333ea] inline-block text-transparent bg-clip-text">
                {`;`}
              </span>
            </div>
          </AnimatedSubheading>

          <AnimatedParagraphScroll>
            <h4 className="font-fancy common-subheading w-full lg:w-4/6 pt-10 leading-relaxed  overflow-hidden">
              {`With over a decade of experience in JavaScript, I've been writing
            and refactoring code and building production ready applications. I
            specialize in seamlessly integrating functionality with aesthetics,
            ensuring flawless performance and a visually captivating result.`}
            </h4>
          </AnimatedParagraphScroll>

          <div className="cz-p pb-10">
            Just interested in hiring me? Click{" "}
            <PageTransitionLink
              href="/resume"
              className=" text-[#9333ea] font-bold text-2xl uppercase hover:underline cursor-pointer"
            >
              here
            </PageTransitionLink>{" "}
            to avoid the biz talk.
          </div>

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
