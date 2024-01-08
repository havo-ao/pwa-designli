import {
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { ReactNode } from "react";

type Option = {
  value: string;
  name: string;
};

type InputSelectProps = {
  value: string[];
  onChange: (event: SelectChangeEvent<string[]>, child: ReactNode) => void;
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
}) => {
  const selectedNames = value
    .map(
      (selectedValue) =>
        options.find((option) => option.value === selectedValue)?.name
    )
    .filter((name) => name !== undefined) as string[];

  return (
    <FormControl fullWidth className={className}>
      <InputLabel id={`${className}-label`}>{label}</InputLabel>
      <Select
        labelId={`${className}-label`}
        id={className}
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={() => (
          <div>
            {selectedNames.map((name, index) => (
              <Chip key={index} label={name} variant="outlined" />
            ))}
          </div>
        )}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={value.indexOf(option.value) > -1} />
            <ListItemText primary={option.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
