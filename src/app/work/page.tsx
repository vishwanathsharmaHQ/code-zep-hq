// Import copy and types
import { workPageCopy } from "@/utils/temp-data/copy"; 
import { WorkPageCopy } from "@/types/copy/copy.types";
import {MainHeading} from "@/components/common/animated/MainHeadings/MainHeadings";
import CommonButton from "@/components/common/buttons/CommonButton";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import Footer from "@/components/footer/Footer";
import Work from "@/components/sections/work/Work";
import { getActiveProjects } from "@/utils/server/utility-functions";

interface WorkPageProps {
  searchParams: {
    nature: string;
  };
}

const Page = async ({ searchParams }: WorkPageProps) => {
  const data = await getActiveProjects();

  return (
    <div className="page-padding w-full ">
      <div className="pt-24 lg:pt-48">
        <div className="common-pageheading font-black font-fancy leading-tight lg:block hidden">
          <MainHeading>
            {workPageCopy.mainHeading.desktop.map((line, index) => (
              <div key={index} className="overflow-hidden leading-tight">
                {line}
              </div>
            ))}
          </MainHeading>
        </div>

        <div className="common-pageheading font-black font-fancy leading-tight lg:hidden block">
          <MainHeading>
            {workPageCopy.mainHeading.mobile.map((line, index) => (
              <div key={index} className="overflow-hidden leading-tight">
                {line}
              </div>
            ))}
          </MainHeading>
        </div>
      </div>

      <Work projects={data} />

      <div className="w-full flex items-center justify-center">
        <PageTransitionLink href={workPageCopy.archiveButton.link}>
          <CommonButton>{workPageCopy.archiveButton.text}</CommonButton>
        </PageTransitionLink>
      </div>

      <Footer />
    </div>
  );
};

export default Page;