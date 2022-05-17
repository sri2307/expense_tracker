import React from "react";
import MNavbar from "@lib/components/utils/navbar/MNavbar";
import MTypography from "@lib/components/utils/typography/MTypography";
import { en } from "@lib/translations/en/en";
import { es } from "@lib/translations/es/es";
import { useRouter } from "next/router";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en.content.header : es.content.header;
  const styles = {
    navbar: {
      background: "#1976D2",
    },
    title: {
      color: "#fff",
      fontSize: "1.5rem",

      textAlign: "center",
    },
  };

  return (
    <MNavbar styles={styles.navbar}>
      <MTypography styles={styles.title} content={t.app_title} />
    </MNavbar>
  );
};

export default Header;
