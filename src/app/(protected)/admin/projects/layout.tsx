import PageTransitionLink from "@/components/common/links/PageTransitionLink";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="flex flex-col h-full">
      <header className=" border-b border-gray-200/10 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent text-white rounded-full border-2"
          >
            <PageTransitionLink
              href="/admin/create-project"
              className="flex items-center"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              New Project
            </PageTransitionLink>
          </Button>
        </div>
      </header>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-gray-200/10 ">
              <TableHead className="text-white/30">Title</TableHead>
              <TableHead className="text-white/30">Client</TableHead>
              <TableHead className="text-white/30">Status</TableHead>
              <TableHead className="text-white/30">Budget</TableHead>
              <TableHead className="text-white/30">Categories</TableHead>
              <TableHead className="text-white/30">Services</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          {props.children}
        </Table>
      </div>
    </div>
  );
};

export default Layout;
