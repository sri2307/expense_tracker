import { Button } from "@mui/material";
import React from "react";

type Props = {
  styles?: any;
  buttonName: string;
};

const MButton = (props: Props) => {
  const { styles, buttonName } = props;
  return <Button sx={styles}>{buttonName}</Button>;
};

export default MButton;
