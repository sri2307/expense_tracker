import React from "react";
import Container from "@mui/material/Container";

type Props = {
  children: any;
  styles: {
    background?: string;
    height?: string;
    width?: string;
    maxWidth?: any;
    position?: string;
    top?: string;
    left?: string;
    transform?: string;
    borderRadius?: string;
  };
};

const MContainer = (props: Props) => {
  const { children, styles } = props;
  return (
    <Container sx={styles} maxWidth={styles.maxWidth}>
      {children}
    </Container>
  );
};

export default MContainer;
