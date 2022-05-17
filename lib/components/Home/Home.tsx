import { useRouter } from "next/router";
import React from "react";
import { en } from "@lib/translations/en/en";
import { es } from "@lib/translations/es/es";
import MContainer from "@lib/components/utils/container/MContainer";
import Header from "@lib/components/Home/Header/Header";
import { useSession } from "next-auth/react";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en : es;
  const { data, status } = useSession();

  const styles = {
    container: {
      background: "#F1F1F1",
      height: "80vh",
      width: "80vw",
      maxWidth: "false",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };

  return (
    <>
      {data && (
        <>
          <Header />
          <MContainer styles={styles.container}></MContainer>
        </>
      )}
    </>
  );
};

export default Home;
