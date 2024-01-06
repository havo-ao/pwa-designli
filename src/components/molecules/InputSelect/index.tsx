import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

type Option = {
  value: string;
  name: string;
};

type InputSelectProps = {
  value: any;
  onChange: any;
  className?: string;
  label: string;
  options: Option[];
};

const InputSelect: React.FC<InputSelectProps> = ({
  value,
  onChange,
  className,
  label,
  options,
}) => (
  <FormControl fullWidth className={className}>
    <InputLabel id={`${className}-label`}>{label}</InputLabel>
    <Select
      labelId={`${className}-label`}
      id={className}
      value={value}
      onChange={onChange}
      label={label}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default InputSelect;
