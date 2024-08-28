import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { ProjectType } from "@/types/util.types";
import {
  BriefcaseIcon,
  DeleteIcon,
  EyeIcon,
  MoveHorizontalIcon,
  TabletSmartphone,
  TrashIcon,
} from "lucide-react";

type Props = {
  project: any;
};

const ProjectsRow = (props: Props) => {
  const { project } = props;
  return (
    <TableRow
      key={project.id}
      className="hover:bg-gray-200/10 border-gray-200/10"
    >
      <TableCell>
        <div className="flex items-center gap-3">
          <div
            className={`${
              project.status === "In Progress"
                ? "bg-emerald-200 text-black"
                : project.status === "Completed"
                ? "bg-[#9333ea]"
                : "bg-gray-200/10"
            } rounded-md flex items-center justify-center aspect-square w-10 h-10`}
          >
            {project.category === "WEBSITE_DESIGN" ? (
              <TabletSmartphone className="w-5 h-5" />
            ) : (
              <BriefcaseIcon className="w-5 h-5" />
            )}
          </div>
          <div>
            <div className="font-medium">{project.title}</div>
            <div className="text-sm text-gray-500">{project.description}</div>
          </div>
        </div>
      </TableCell>
      <TableCell>{project.client}</TableCell>
      <TableCell>{project.status}</TableCell>
      <TableCell>{project.budget}0</TableCell>
      <TableCell>
        <div className="flex flex-wrap gap-2"></div>
      </TableCell>
      <TableCell>
        <div className="flex flex-wrap gap-2">
          {project.services.map((service: string, index: number) => (
            <div key={index}>{service}</div>
          ))}
        </div>
      </TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <MoveHorizontalIcon className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <DeleteIcon className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EyeIcon className="w-4 h-4 mr-2" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <TrashIcon className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default ProjectsRow;
