import { auth, signOut } from "@/auth";
import DashboardCard from "@/components/auth/dashboard/DashboardCard";
import DashboardCardDetail from "@/components/auth/dashboard/DashboardCardDetail";
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, FileCode2, StickyNote, Users2 } from "lucide-react";
import React from "react";
type Props = {};

const Page = async (props: Props) => {
  const session = await auth();

  return (
    <>
      <div className="w-full h-full">
        <div className="h-full w-full">
          <div className="flex flex-col justify-start p-5 h-full gap-5">
            <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <DashboardCard icon={<FileCode2 />} stat="0" title="Projects" />
              <DashboardCard icon={<Users2 />} stat="0" title="Clients" />
              <DashboardCard icon={<StickyNote />} stat="0" title="Blogs" />
              <DashboardCard icon={<BadgeDollarSign />} stat="0" title="Revenue" />

            </div>
            <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <DashboardCardDetail  />
              <DashboardCardDetail  />
              <DashboardCardDetail  />

            </div>
          </div>
        </div>
      </div>

      <form
        className="fixed bottom-0 right-0 p-8"
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button
          type="submit"
          className="px-10 py-6 rounded-full bg-transparent border-2 hover:bg-white hover:text-black duration-300 transition-color "
        >
          Sign out
        </Button>
      </form>
    </>
  );
};

export default Page;
