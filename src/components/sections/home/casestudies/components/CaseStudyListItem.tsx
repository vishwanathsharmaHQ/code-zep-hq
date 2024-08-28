import React from "react";

type Props = {
  title: string | null;
  location: string | null;
  service: string | null;
};

const CaseStudyListItem = (props: Props) => {
  return (
    <div className="w-full hover flex justify-between my-4 case-study-list-item cursor-pointer   ">
      <div className="flex-[0.4]  py-10 ">
        <h3 className="font-extralight text-2xl lgtext-4xl">{props.title}</h3>
      </div>
      <div className="flex-[0.1] font-medium text-xl py-10 hidden lg:block">
        {props.location}
      </div>
      <div className="flex-[0.4] font-medium text-xl py-10 hidden lg:block">
        {props.service}
      </div>
      <div className="flex-[0.1] font-medium text-xl py-10 hidden lg:block">2024</div>
    </div>
  );
};

export default CaseStudyListItem;
