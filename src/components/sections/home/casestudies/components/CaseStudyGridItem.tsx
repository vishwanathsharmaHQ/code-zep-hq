"use client";

import { ProjectGridHeading } from "@/components/common/animated/MainHeadings/MainHeadings";
import AnimatedParagraphScroll, {
  GridParagraphScroll,
} from "@/components/common/animated/Paragraphs/ParagraphScroll";
import CommonButton from "@/components/common/buttons/CommonButton";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import { ProjectType } from "@/types/util.types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  project: ProjectType;
};

const CaseStudyGridItem = (props: Props) => {
  const borderAnimationRef = useRef<HTMLDivElement>(null);

  const {
    coverImageBg,
    coverImage,
    description,
    url,
    caseStudy,
    title,
    technologies,
    slug,
  } = props.project;

  useGSAP(() => {
    gsap.to(borderAnimationRef.current, {
      scrollTrigger: {
        trigger: borderAnimationRef.current,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none none",
      },
      width: "100%",
      duration: 1,
    });
  }, []);

  return (
    <div className="w-full case-study-grid-item py-10 cursor-pointer">
      <PageTransitionLink
        href={`/work/${slug}?caseStudyId=${caseStudy?.id}`}
        className="w-full aspect-square flex justify-center items-center"
      >
        <div
          className="w-full h-full  flex justify-center items-center  px-10 "
          style={{
            backgroundColor: coverImageBg || "black",
            overflow: "hidden",
          }}
        >
          <Image
            src={coverImage || ""}
            alt="grid-item-image"
            width={840}
            height={630}
            className=" rounded-xl object-cover w-full"
          />
        </div>
      </PageTransitionLink>

      <div>
        <div className="w-full flex items-center justify-between">
          <div className=" py-5 ">
            <ProjectGridHeading className=" w-full h-full font-light text-3xl lg:text-5xl pb-0">
              <div className="leading-normal  w-full h-full overflow-hidden">
                {title}
              </div>
            </ProjectGridHeading>
          </div>

          <Link href={url} target="_blank" className="">
            <ArrowUpRight
              className="h-16 w-16 hover:rotate-45 transition-all duration-300 ease-in-out lg:block hidden"
              strokeWidth={1}
            />
          </Link>
        </div>

        <div
          className="bg-white/30 h-[1px] w-0 animatedGridBorder"
          ref={borderAnimationRef}
        />

        <div className="w-full flex justify-between items-start py-5">
          <GridParagraphScroll className=" w-2/3">
            <p className="">{description}</p>
          </GridParagraphScroll>

          <div className=" w-1/3 flex justify-end">
            {technologies && (
              <CommonButton variant={"badge"}>{technologies[0]}</CommonButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyGridItem;
