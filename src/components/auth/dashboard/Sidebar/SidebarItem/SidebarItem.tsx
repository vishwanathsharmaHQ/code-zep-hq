import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { LinkType } from "@/types/util.types";
import { ChevronRight, ChevronRightCircle } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  href: string;
  links?: LinkType[];
  icon: ReactNode;
};

const SidebarItem = (props: Props) => {
  return (
    <Collapsible className="grid gap-1">
      {props.links && (
        <CollapsibleTrigger className="flex items-center gap-3 rounded-md  px-3 py-6 text-sm font-medium text-gray-200/70 transition-colors  hover:text-gray-900 text-gray-400 hover:bg-gray-800/30 hover:text-white">
          {props.icon}
          {props.title}
          <ChevronRight className="ml-auto h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
        </CollapsibleTrigger>
      )}
      {props.links ? (
        <CollapsibleContent className="pl-9 text-sm ">
          {props.links.map((link: LinkType, index: number) => (
            <Link
            key={index}
              className="flex  items-center gap-3 py-2 text-gray-200/30"
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </CollapsibleContent>
      ) : (
        <Link
          href={props.href}
          className="flex items-center gap-3 rounded-md  px-3 py-6 text-sm font-medium text-gray-200/70 transition-colors  hover:text-gray-900 text-gray-400 hover:bg-gray-800/30 hover:text-white"
        >
          {props.icon}
          {props.title}
        </Link>
      )}
    </Collapsible>
  );
};

export default SidebarItem;
