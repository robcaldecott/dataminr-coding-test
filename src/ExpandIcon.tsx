import { ExpandMore, ExpandLess } from "@mui/icons-material";

export interface ExpandIconProps {
  checked: boolean;
}

/**
 * Icon pointing up/down based on the value of `checked`.
 */
export function ExpandIcon({ checked }: ExpandIconProps) {
  return checked ? (
    <ExpandLess color="action" />
  ) : (
    <ExpandMore color="action" />
  );
}
