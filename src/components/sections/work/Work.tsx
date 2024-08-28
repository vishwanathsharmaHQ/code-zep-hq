"use client";

import CommonButton from "@/components/common/buttons/CommonButton";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import { ProjectType } from "@/types/util.types";
import { Suspense, useState } from "react";
import CaseStudyGrid from "../home/casestudies/components/CaseStudyGrid";
import CaseStudyList from "../home/casestudies/components/CaseStudyList";
import WorkCategoryMenu from "./WorkCategoryMenu";

type Props = {
  projects: ProjectType[];
};

const Work = (props: Props) => {
  const [activeViewMode, setActiveViewMode] = useState("Block");
  const { projects } = props;

  return (
    <div>
      <Suspense fallback={<>Loading..</>}>
        <WorkCategoryMenu activeViewMode={activeViewMode} setActiveViewMode={setActiveViewMode} projectNature=""/>
        {projects.length > 0 ? (
          <>
            {activeViewMode === "Block" ? (
              <CaseStudyGrid projects={projects} />
            ) : (
              <CaseStudyList projects={projects} />
            )}
          </>
        ) : (
          <>
            <p className="py-10">Nothing yet? Let me fix that in a jiffy!</p>
          </>
        )}
      </Suspense>
    </div>
  );
};

export default Work;
