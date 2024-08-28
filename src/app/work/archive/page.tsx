import { MainHeading } from "@/components/common/animated/MainHeadings/MainHeadings";
import Footer from "@/components/footer/Footer";
import Work from "@/components/sections/work/Work";
import { GLOBAL_SEO_DATA } from "@/utils/data/seo/seo";
import { getProjectsByStatus } from "@/utils/server/utility-functions";
import { Suspense } from "react";

interface WorkPageProps {
  searchParams: {
    nature: string;
  };
}

const { title, description, thumbnail } = GLOBAL_SEO_DATA.work;

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    images: [thumbnail],
  },
  twitter: {
    card: thumbnail,
    title: title,
    description: description,
    images: [thumbnail], // Must be an absolute URL
  },
};

const Archive = async ({ searchParams }: WorkPageProps) => {
  const data = await getProjectsByStatus("Archived");
  return (
    <div className="page-padding w-full ">
      <div className="pt-24 lg:pt-48">
        <div className="common-pageheading font-black font-fancy leading-tight lg:block hidden">
          <MainHeading>
            <div className="overflow-hidden leading-tight">
              Preserving moments
            </div>
            <div className="overflow-hidden leading-tight">
              of digital innovation
            </div>
            <div className="overflow-hidden leading-tight">for the curious</div>
          </MainHeading>
        </div>

        <div className="common-pageheading font-black font-fancy leading-tight lg:hidden block">
          <MainHeading>
            <div className="overflow-hidden leading-tight">Preserving</div>
            <div className="overflow-hidden leading-tight">moments of</div>
            <div className="overflow-hidden leading-tight">
              digital innovation
            </div>
            <div className="overflow-hidden leading-tight">for the curious</div>
          </MainHeading>
        </div>
      </div>
      <Suspense fallback={null}>{data && <Work projects={data} />}</Suspense>
      <Footer />
    </div>
  );
};

export default Archive;
