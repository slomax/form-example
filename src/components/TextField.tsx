import React from "react";
import FieldWrapper from "./FieldWrapper";
import { TextField as MuiTextField } from "@material-ui/core/";
import { FormField } from "../types/FormField";

interface TextFieldProps {
  onChange?: Function;
  formField: FormField<any>;
  shouldValidate: boolean;
  onValidationStateUpdate: Function;
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return (
    <FieldWrapper
      onValidationStateUpdate={props.onValidationStateUpdate}
      shouldValidate={props.shouldValidate}
      formField={props.formField}
      Input={MuiTextField}
      onChange={props.onChange ? props.onChange : () => {}}
    />
  );
};

TextField.defaultProps = {
  shouldValidate: false
};

export default TextField;
