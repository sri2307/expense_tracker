import React from "react";
import MNavbar from "@lib/components/utils/navbar/MNavbar";
import MTypography from "@lib/components/utils/typography/MTypography";
import { en } from "@lib/translations/en/en";
import { es } from "@lib/translations/es/es";
import { useRouter } from "next/router";
import MButton from "@lib/components/utils/button/MButton";
import { signIn } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en.content.header : es.content.header;
  const styles = {
    navbar: {
      background: "#1976D2",
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      color: "#fff",
      fontSize: "1.5rem",

      textAlign: "center",
    },
    button: {
      background: "#1976D2",
      color: "#fff",
    },
  };

  const signInHandler = () => {
    signIn("okta", { callbackUrl: "http://localhost:3000/welcome" });
  };

  return (
    <MNavbar styles={styles.navbar}>
      <MTypography styles={styles.title} content={t.app_title} />
      <MButton
        styles={styles.button}
        buttonName='Sign In'
        click={signInHandler}
      />
    </MNavbar>
  );
};

export default Header;
