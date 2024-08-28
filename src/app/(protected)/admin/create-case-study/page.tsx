import CreateCaseStudyForm from "@/components/auth/create-case-study-form";
import { getAllProjectsWithoutCaseStudies } from "@/utils/server/utility-functions";

type Props = {};

const Page = async (props: Props) => {
  const projects = await getAllProjectsWithoutCaseStudies();

  return (
    <div className="w-full mx-auto p-6 md:p-10 bg-transparent overflow-scroll ">
      <CreateCaseStudyForm projects={projects} />
    </div>
  );
};

export default Page;
