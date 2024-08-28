import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpenIcon,
  GitBranchIcon,
  Github,
  GithubIcon,
  HomeIcon,
  LayoutPanelLeftIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const DashboardCardDetail = (props: Props) => {
  return (
    <Card className="bg-transparent text-white  border-gray-200/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2 ">
        <CardTitle className="text-sm font-medium">Recent Projects</CardTitle>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          View All
        </Link>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
              <HomeIcon className="w-5 h-5" />
            </div>
            <div className="grid gap-1">
              <div className="font-medium">www</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                example.com
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <GitBranchIcon className="w-4 h-4" />

                <span>3h ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
              <BookOpenIcon className="w-5 h-5" />
            </div>
            <div className="grid gap-1">
              <div className="font-medium">docs</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                docs.example.com
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <GitBranchIcon className="w-4 h-4" />
                <span>1 day ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
              <LayoutPanelLeftIcon className="w-5 h-5" />
            </div>
            <div className="grid gap-1">
              <div className="font-medium">app</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                app.example.com
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <GitBranchIcon className="w-4 h-4" />
                <span>2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCardDetail;
