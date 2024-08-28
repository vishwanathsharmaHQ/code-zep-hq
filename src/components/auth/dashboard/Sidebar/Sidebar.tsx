import { LayoutGridIcon } from "lucide-react";
import SidebarItem from "./SidebarItem/SidebarItem";

type Props = {};

const SIDEBAR_ITEMS = [
  {
    title: "Dashboard",
    href: "/admin/",
  },

  {
    title: "Projects",
    href: "/admin/projects",
    links: [
      {
        title: "Active Projects",
        href: "/admin/projects/active-projects",
      },
      {
        title: "Completed Projects",
        href: "/admin/projects/completed-projects",
      },
      {
        title: "Archived Projects",
        href: "/admin/projects/archived-projects",
      },
    ],
  },

  {
    title: "Clients",
    href: "/admin/clients",
    links: [
      {
        title: "Active Clients",
        href: "/admin/active-clients",
      },
      {
        title: "Completed Clients",
        href: "/admin/completed-clients",
      },
      {
        title: "Archived Clients",
        href: "/admin/archived-clients",
      },
    ],
  },

  {
    title: "Case Studies",
    href: "/admin/case-studies",
    links: [
      {
        title: "Active Case Studies",
        href: "/admin/active-case-studies",
      },
      {
        title: "Completed Case Studies",
        href: "/admin/completed-case-studies",
      },
      {
        title: "Archived Case Studies",
        href: "/admin/archived-case-studies",
      },
    ],
  },
];

const Sidebar = (props: Props) => {
  return (
    <aside className="w-full h-full ">
      <nav className="mt-6 space-y-2 px-4">
        {SIDEBAR_ITEMS.map((item, index) => (
          <SidebarItem
            key={index}
            href={item.href}
            links={item.links}
            title={item.title}
            icon={<LayoutGridIcon className="h-5 w-5" />}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
