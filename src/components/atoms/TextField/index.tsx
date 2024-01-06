import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

const SimpleTextField: React.FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export default SimpleTextField;
