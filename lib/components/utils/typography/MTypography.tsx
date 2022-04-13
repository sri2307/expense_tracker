import React from "react";
import "@fontsource/roboto/500.css";
import { Typography } from "@mui/material";

type Props = {
    styles?: any;
    content?: string;
};

const MTypography = (props: Props) => {
    const {styles,content} = props;
  return (
    <Typography sx={styles}>
      {content}
    </Typography>
  );
};

export default MTypography;
