import { Typography, FormControlLabel, Switch, Box } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

export interface ToggleProps {
  /** The component name used for identification. */
  name: string;
  /** The label to display. */
  label: string;
  /** The checked state of the switch. */
  checked: boolean;
  /** Called when the switch state changes. */
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /** An option icon to render to the right of the switch. */
  icon?: ReactNode;
  /** An optional input component to render between the label and the switch. */
  input?: ReactNode;
  /** Apply additional indenting. Used for nested toggles. */
  indent?: boolean;
}

/**
 * Toggle component based on a MUI Switch.
 * Can render an optional icon and input component.
 */
export function Toggle({
  name,
  label,
  checked,
  onChange,
  input,
  icon,
  indent,
}: ToggleProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        paddingLeft: indent ? 8 : 6,
      }}
    >
      <FormControlLabel
        name={name}
        control={<Switch checked={checked} onChange={onChange} />}
        disableTypography
        label={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "space-between",
              marginRight: 1,
            }}
          >
            {/* Switch label */}
            <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
              {label}
            </Typography>
            {/* Optional input */}
            {input}
          </Box>
        }
        labelPlacement="start"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 0,
          marginRight: icon ? 2 : indent ? 4 : 0,
        }}
      />
      {/* Optional icon */}
      {icon}
    </Box>
  );
}
