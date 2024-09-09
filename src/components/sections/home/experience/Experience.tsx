import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import AboutExperiencesAccordion from "./AboutExperiencesAccordion";
import AnimatedParagraphScroll from "@/components/common/animated/Paragraphs/ParagraphScroll";
import { experienceCopy } from "@/utils/temp-data/copy"; // Import copy

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="w-full flex py-12 md:py-24 lg:py-32  ">
      <section className="w-full ">
        <div className="">
          <div className="">
            <div className="">
              <AnimatedSubheading>
                <h2 className="common-pagesubheading text-left font-fancy overflow-hidden leading-normal">
                  {experienceCopy.heading} {/* Use copy from the file */}
                </h2>
              </AnimatedSubheading>
              <AnimatedParagraphScroll>
                <p className="font-fancy common-subheading w-full lg:w-4/6 pt-10 leading-relaxed">
                  {experienceCopy.description} {/* Use copy from the file */}
                </p>
              </AnimatedParagraphScroll>
            </div>
            <div className="py-10">
              {experienceCopy.tiers.map((item, index) => {
                return (
                  <div key={index}>
                    <AboutExperiencesAccordion
                      fromTo={item.fromTo}
                      achievements={item.achievements}
                      company={item.company}
                      isCurrent={item.isCurrent}
                      mainDescription={item.mainDescription}
                      position={item.position}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;