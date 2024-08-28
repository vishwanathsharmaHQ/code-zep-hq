import ProjectsRow from "@/components/auth/projects/ProjectsRow";
import { TableBody } from "@/components/ui/table";
import { getAllProjects } from "@/utils/server/utility-functions";

type Props = {};

const Page = async (props: Props) => {
  const projects = await getAllProjects();

  return (
    <TableBody className="border-0 ">
      {projects?.map((project) => (
        <ProjectsRow key={project.id} project={project} />
      ))}
    </TableBody>
  );
};

export default Page;
