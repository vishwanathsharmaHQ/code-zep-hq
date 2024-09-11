
import { ProjectType } from "@/types/util.types";
import CaseStudyHeader from "./sections/CaseStudyHeader";
import { InProgressAlert } from "@/components/common/alerts/InProgressAlert";
import { CaseStudy as CaseStudyType } from "@/types/casestudy.types";
import CaseStudyMain from "./sections/CaseStudyMain";

type Props = {
  project: ProjectType;
  caseStudy: CaseStudyType;
};

const CaseStudy = (props: Props) => {
  const { project, caseStudy } = props;

  const caseStudyData = {
    ...project,
    caseStudy,
  };

  return (
    <div className="py-10 w-full h-full">
      <header>
        <CaseStudyHeader project={caseStudyData} />
      </header>
      <InProgressAlert />

      <main>
        <CaseStudyMain project={caseStudyData} />
      </main>
    </div>
  );
};

export default CaseStudy;
