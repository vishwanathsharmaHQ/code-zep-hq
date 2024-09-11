import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import { getAllProjects } from "@/utils/server/utility-functions";
import CaseStudyClientWrapper from "./components/CaseStudyClientWrapper";
import { homePageCopy } from "@/utils/temp-data/copy";

type Props = {};

const CaseStudies = async (props: Props) => {
  const projects = await getAllProjects();

  return (
    <div className="case-studies-section w-full  ">
      <div className="section-padding">
        <AnimatedSubheading className="overflown-subheading cz-h2 font-normal font-fancy text-balance leading-tight text-center pb-24 lg:block hidden">
          {homePageCopy.projects?.heading}
        </AnimatedSubheading>

        <AnimatedSubheading className="overflown-subheading cz-h2 font-normal font-fancy leading-tight text-center pb-12 lg:pb-24 lg:hidden block">
          <div className="overflow-hidden text-center">Building the web</div>
          <div className="overflow-hidden text-center ">for the future</div>
          <div className="overflow-hidden text-center ">with cutting-edge</div>
          <div className="overflow-hidden text-center ">interactive</div>
          <div className="overflow-hidden text-center ">experiences</div>
        </AnimatedSubheading>
      </div>

      <CaseStudyClientWrapper projects={projects} />
    </div>
  );
};

export default CaseStudies;
