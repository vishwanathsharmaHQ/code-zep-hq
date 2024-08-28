import Sidebar from "@/components/auth/dashboard/Sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden pt-[10vh]">
      <div className="w-full flex-none md:w-64 border-t border-r border-gray-200/10">
        <Sidebar />
      </div>
      <div className="flex-grow md:overflow-y-auto  border-t border-gray-200/10 border-l-0">
        {children}
      </div>
    </div>
  );
}
