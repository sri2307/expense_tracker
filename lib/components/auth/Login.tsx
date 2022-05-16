import React, { useEffect } from "react";
import { signIn } from "next-auth/react";

type Props = {};

const Login = (props: Props) => {
  useEffect(() => {
    signIn("okta", { callbackUrl: "http://localhost:3000" });
  }, []);
  return <></>;
};

export default Login;
