import { MainHeading } from "@/components/common/animated/MainHeadings/MainHeadings";
import CommonButton from "@/components/common/buttons/CommonButton";
import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import Footer from "@/components/footer/Footer";
import Work from "@/components/sections/work/Work";
import { GLOBAL_SEO_DATA } from "@/utils/data/seo/seo";
import {
  getActiveProjects
} from "@/utils/server/utility-functions";

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

const Page = async ({ searchParams }: WorkPageProps) => {
  const data = await getActiveProjects();

  return (
    <div className="page-padding w-full ">
      <div className="pt-24 lg:pt-48">
        <div className="common-pageheading font-black font-fancy leading-tight lg:block hidden">
          <MainHeading>
            <div className="overflow-hidden leading-tight">
              Transforming ideas
            </div>
            <div className="overflow-hidden leading-tight">
              into groundbreaking
            </div>
            <div className="overflow-hidden leading-tight">
              digital realities
            </div>
          </MainHeading>
        </div>

        <div className="common-pageheading font-black font-fancy leading-tight lg:hidden block">
          <MainHeading>
            <div className="overflow-hidden leading-tight">Transforming</div>
            <div className="overflow-hidden leading-tight">ideas into</div>
            <div className="overflow-hidden leading-tight">groundbreaking </div>
            <div className="overflow-hidden leading-tight">
              digital realities
            </div>
          </MainHeading>
        </div>
      </div>
      <Work projects={data}  />

      <div className="w-full flex items-center justify-center">
        <PageTransitionLink href="/work/archive">
          <CommonButton>Archive</CommonButton>
        </PageTransitionLink>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
