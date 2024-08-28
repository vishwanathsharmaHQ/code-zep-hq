import { MainHeading } from "@/components/common/animated/MainHeadings/MainHeadings";
import CommonButton from "@/components/common/buttons/CommonButton";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Showreel from "../templates/Showreel";

type Props = {
  project: any;
};

const CaseStudyHeader = (props: Props) => {
  const { project } = props;

  const { caseStudy } = project;

  return (
    <div className="lg:pt-24 pt-10 w-full h-full">
      <div className="lg:flex items-center justify-between py-10">
        <div className="text-left  common-pageheading font-fancy font-black leading-tight text-balance">
          <MainHeading>
            <div className="overflow-hidden leading-normal">
              {project.title}
            </div>
          </MainHeading>
        </div>
        <Link target="_blank" rel="noopener" href={project.url}>
          <CommonButton>visit site</CommonButton>
        </Link>
      </div>
      <div className="w-full">
        <Image
          src={project.coverImage || "/"}
          width={1600}
          height={900}
          alt="cover"
          className="object-contain w-full h-full rounded-lg"
        />
      </div>

      <div className="w-full flex items-center py-10">
        <Badge className="py-2 px-5 lowercase bg-[black] text-white border-2 border-white hover:bg-white hover:text-black hover:border-black basic-color-transition ">
          {project.category.replace("_", " ")}
        </Badge>
      </div>
      {caseStudy && (
        <>
          <div className="text-center flex justify-center items-center flex-col">
            <div className="lg:text-8xl text-3xl md:text-6xl font-normal pt-24 font-fancy text-balance leading-normal lg:leading-tight">
              {caseStudy.tagline}
            </div>

            <h4 className="font-fancy common-subheading w-full lg:w-4/6 pt-10 leading-relaxed">
              {caseStudy.mainDescription}
            </h4>
          </div>

          <div className="mx-auto py-24 px-16">
            {caseStudy.showreel ? (
              <Showreel
                showreel={caseStudy.showreel}
                thumbnail={project.coverImage || ""}
              />
            ) : (
              <Image
                src={project.coverImage || "/"}
                width={1600}
                height={900}
                alt="cover"
                className="object-contain w-full h-full rounded-lg"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CaseStudyHeader;
