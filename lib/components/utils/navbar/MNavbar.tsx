import React from "react";
import Toolbar from "@mui/material/Toolbar";

type Props = {
  children?: any;
  styles: {
    background?: string;
    height?: string;
  };
};

const MNavbar = (props: Props) => {
  const { children, styles } = props;
  return <Toolbar sx={styles}>{children}</Toolbar>;
};

export default MNavbar;
