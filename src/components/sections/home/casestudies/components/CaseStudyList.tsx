import React from "react";
import CaseStudyListItem from "./CaseStudyListItem";
import { AllProjectsProps, ProjectType } from "@/types/util.types";

const CaseStudyList = (props: AllProjectsProps) => {
  const { projects } = props;

  if (!projects) return;

  return (
    <div className="pt-4 lg:pt-16">
      <div className="w-full case-study-list flex justify-between my-4">
        <div className="flex-[0.4] py-10 ">Project</div>
        <div className="flex-[0.1] py-10 hidden lg:block">Location</div>
        <div className="flex-[0.4] py-10 hidden lg:block">Services</div>
        <div className="flex-[0.1] py-10 hidden lg:block">Year</div>
      </div>

      {projects.map((project: ProjectType) => (
        <CaseStudyListItem
          key={project.id}
          service={project.services[0]}
          title={project.title}
          location="Pune, India"
        />
      ))}

      {/* <CaseStudyListItem service={'Web Interactive'} title="creativeapes.design" location="Pune, India"/>
      <CaseStudyListItem service={'Web Interactive + 3D'} title="loudmob.media" location="Pune, India"/>
      <CaseStudyListItem service={'Web Interactive'} title="gnoo.club" location="Pune, India"/>
      <CaseStudyListItem service={'Business Website'} title="atcpl.co.in" location="Nagpur, India"/>
      <CaseStudyListItem service={'Online E-commerce Store'} title="merakiartgallery.com" location="Delhi, India"/> */}
    </div>
  );
};

export default CaseStudyList;
