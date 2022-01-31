import { ChangeEvent } from "react";
import { TextField, MenuItem } from "@mui/material";

export interface ToggleSelectProps {
  disabled: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  values: string[];
}

/**
 * Drop-down (select) component for use inside a Toggle.
 */
export function ToggleSelect({
  disabled,
  value,
  onChange,
  values,
}: ToggleSelectProps) {
  return (
    <TextField
      size="small"
      select
      disabled={disabled}
      value={value}
      onChange={onChange}
      SelectProps={{
        sx: { fontSize: "body2.fontSize" },
      }}
    >
      {values.map((value) => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </TextField>
  );
}
