import { RegisterForm } from "@/components/auth/register-form";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="w-full h-screen">
      <div className="mx-auto h-full w-full">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Login;
