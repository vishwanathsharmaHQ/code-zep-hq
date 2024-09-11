// Import copy and types
import { archivePageCopy } from "@/utils/temp-data/copy";
import { ArchivePageCopy } from "@/types/copy/copy.types";
import { MainHeading } from "@/components/common/animated/MainHeadings/MainHeadings";
import Footer from "@/components/footer/Footer";
import Work from "@/components/sections/work/Work";
import { getProjectsByStatus } from "@/utils/server/utility-functions";
import { Suspense } from "react";

interface WorkPageProps {
  searchParams: {
    nature: string;
  };
}

export const metadata = {
  title: archivePageCopy.seo.title,
  description: archivePageCopy.seo.description,
  openGraph: {
    images: archivePageCopy.seo.openGraph.images,
  },
  twitter: {
    card: archivePageCopy.seo.twitter.card,
    title: archivePageCopy.seo.twitter.title,
    description: archivePageCopy.seo.twitter.description,
    images: archivePageCopy.seo.twitter.images, // Must be an absolute URL
  },
};

const Archive = async ({ searchParams }: WorkPageProps) => {
  const data = await getProjectsByStatus("Archived");
  return (
    <div className="page-padding w-full ">
      <div className="pt-24 lg:pt-48">
        <div className="common-pageheading font-black font-fancy leading-tight lg:block hidden">
          <MainHeading>
            {archivePageCopy.mainHeading.desktop.map((line, index) => (
              <div key={index} className="overflow-hidden leading-tight">
                {line}
              </div>
            ))}
          </MainHeading>
        </div>

        <div className="common-pageheading font-black font-fancy leading-tight lg:hidden block">
          <MainHeading>
            {archivePageCopy.mainHeading.mobile.map((line, index) => (
              <div key={index} className="overflow-hidden leading-tight">
                {line}
              </div>
            ))}
          </MainHeading>
        </div>
      </div>
      <Suspense fallback={null}>{data && <Work projects={data} />}</Suspense>
      <Footer />
    </div>
  );
};

export default Archive;