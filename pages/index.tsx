import type { NextPage } from "next";
import React from "react";
import Home from "components/Home/Home";

console.log(process.env.NEXT_PUBLIC_TEST_VAR);

const Welcome: NextPage = () => {
  return <Home />;
};

export default Welcome;
