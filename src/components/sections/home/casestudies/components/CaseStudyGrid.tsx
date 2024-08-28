"use client";
import { AllProjectsProps } from "@/types/util.types";
import { Suspense } from "react";
import CaseStudyGridItem from "./CaseStudyGridItem";

const CaseStudyGrid = (props: AllProjectsProps) => {
  const { projects } = props;

  return (
    <div className="w-full grid lg:grid-cols-2 gap-12 pt-4 lg:pt-16">
      <Suspense fallback={<></>}>
        {projects?.map((project) => (
          <CaseStudyGridItem key={project.id} project={project} />
        ))}
      </Suspense>
    </div>
  );
};

export default CaseStudyGrid;
