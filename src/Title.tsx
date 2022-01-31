import { ReactNode } from "react";
import { Typography } from "@mui/material";

export interface TitleProps {
  children: ReactNode;
}

/**
 * Generic h1 title component.
 */
export function Title({ children }: TitleProps) {
  return (
    <Typography component="h1" sx={{ textTransform: "uppercase" }}>
      {children}
    </Typography>
  );
}
