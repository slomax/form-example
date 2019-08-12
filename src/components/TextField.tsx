import React from "react";
import FieldWrapper from "./FieldWrapper";
import { TextField as MuiTextField } from "@material-ui/core/";
import { FormField } from "../types/FormField";
interface TextFieldProps {
  onChange: Function;
  formField: FormField<any>;
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return (
    <FieldWrapper
      formField={props.formField}
      Input={MuiTextField}
      onChange={props.onChange}
    />
  );
};

export default TextField;
