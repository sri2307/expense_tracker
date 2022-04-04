import { useRouter } from "next/router";
import React from "react";
import { en } from "../../translations/en/en";
import { es } from "../../translations/es/es";
import Button from "@mui/material/Button";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en : es;

  return (
    <>
      <div>{t.app_title}</div>
    </>
  );
};

export default Home;
