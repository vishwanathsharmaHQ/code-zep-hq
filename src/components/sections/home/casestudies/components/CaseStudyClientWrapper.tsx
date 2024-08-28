"use client";

import { AllProjectsProps } from "@/types/util.types";
import { useState } from "react";
import CaseStudyGrid from "./CaseStudyGrid";
import CaseStudyList from "./CaseStudyList";
import CategoryMenu from "./CategoryMenu";

const CaseStudyClientWrapper = (props: AllProjectsProps) => {
  const [activeViewMode, setActiveViewMode] = useState("Block");
  const { projects } = props;

  if (!projects) return null;

  const homeProjects = projects
    .filter((project) => {
      return project.homeProject === true;
    })
    .sort((a, b) => b.rating - a.rating);

  return (
    <>
      <div className="">
        <CategoryMenu
          activeViewMode={activeViewMode}
          setActiveViewMode={setActiveViewMode}
        />
      </div>
      <div className=" mx-auto">
        {activeViewMode === "Block" ? (
          <CaseStudyGrid projects={homeProjects} />
        ) : (
          <CaseStudyList projects={homeProjects} />
        )}
      </div>
    </>
  );
};

export default CaseStudyClientWrapper;
