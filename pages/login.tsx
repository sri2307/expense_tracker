import type { NextPage } from "next";
import React from "react";
import Login from "components/auth/Login";

console.log(process.env.NEXT_PUBLIC_TEST_VAR);

const Welcome: NextPage = () => {
  return <Login />;
};

export default Welcome;
