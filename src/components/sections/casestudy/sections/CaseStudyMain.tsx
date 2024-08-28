import AnimatedSubheading from "@/components/common/animated/Subheadings/Subheadings";
import { ProjectCaseStudy } from "@/types/util.types";
import Image from "next/image";
import React from "react";

type Props = {
  project: any;
};

const CaseStudyMain = (props: Props) => {
  const { project } = props;

  const { caseStudy } = project;

  return (
    <div>
      <div className="">
        {caseStudy && (
          <>
            <AnimatedSubheading className="overflown-subheading text-8xl font-normal font-fancy text-balance leading-tight text-center pb-24 lg:block hidden">
              <div className="overflow-hidden text-center">Color Palette</div>
            </AnimatedSubheading>
            <div className="flex items-center gap-5 justify-between">
              {caseStudy.colorPalette?.map((item: string, index: number) => {
                return (
                  <div
                    key={index}
                    className={`w-full aspect-video border border-white/30`}
                    style={{
                      backgroundColor: item,
                    }}
                  ></div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <AnimatedSubheading className="overflown-subheading text-8xl font-normal font-fancy text-balance leading-tight text-center py-24 lg:block hidden">
        <div className="overflow-hidden text-center">Gallery</div>
      </AnimatedSubheading>
      <div className="w-full mx-auto pb-24">
        {project.imageGallery.map((item: string, index: number) => {
          if (index === 0)
            return (
              <div key={index} className="mx-auto">
                {item?.endsWith(".mp4") || item?.endsWith(".webm") ? (
                  <video
                    autoPlay
                    playsInline
                    loop
                    muted
                    src={item}
                    className="w-full h-full object-cover"
                  ></video>
                ) : (
                  <Image
                    src={item || "src/"}
                    alt="galleryImage"
                    width={1600}
                    height={900}
                    className="w-full h-full "
                  />
                )}
              </div>
            );
        })}
      </div>

      <div className="pb-24 grid grid-cols-3 gap-5">
        {project.imageGallery.map((item: string, index: number) => {
          if (index < 1) return;
          return (
            <div key={index}>
              {item?.endsWith(".mp4") || item?.endsWith(".webm") ? (
                <video autoPlay playsInline loop muted src={item}></video>
              ) : (
                <Image
                  src={item || "src/"}
                  alt="galleryImage"
                  width={1600}
                  height={900}
                  className="w-full h-full"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudyMain;
