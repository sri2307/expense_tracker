import { Button } from "@mui/material";
import React from "react";

type Props = {
  styles?: any;
  buttonName: string;
  click?: Function;
};

const MButton = (props: Props) => {
  const { styles, buttonName, click } = props;
  return (
    <Button sx={styles} onClick={click}>
      {buttonName}
    </Button>
  );
};

export default MButton;
