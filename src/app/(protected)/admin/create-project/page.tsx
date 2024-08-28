import { CreateProjectForm } from "@/components/auth/create-project-form";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full mx-auto p-6 md:p-10 bg-transparent overflow-scroll ">
      <CreateProjectForm />
    </div>
  );
};

export default Page;
