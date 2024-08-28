import Footer from "@/components/footer/Footer";
import CaseStudy from "@/components/sections/casestudy/CaseStudy";
import { ProjectType } from "@/types/util.types";
import {
  getCaseStudy,
  getProjectBySlug,
} from "@/utils/server/utility-functions";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [project.coverImage, ...previousImages],
    },
  };
}

const CaseStudyPage = async ({ params }: Props) => {
  const project = await getProjectBySlug(params.slug);
  return (
    <main className="flex flex-col items-center justify-between page-padding">
      <CaseStudy project={project} caseStudy={project.caseStudy} />
      <Footer />
    </main>
  );
};

export default CaseStudyPage;
