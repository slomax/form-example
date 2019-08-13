import React from "react";
import { FormField } from "../types/FormField";

export interface FormFieldProps {
  Input: React.ElementType;
  onChange?: Function;
  label?: string;
  formField: FormField<any>;
}

const FieldWrapper: React.FC<FormFieldProps> = (props: FormFieldProps) => {
  const Input: React.ElementType = props.Input;
  return (
    <div>
      {props.formField.label}
      <br />
      {!props.formField.isValid && <div>{props.formField.errorMessages}</div>}
      <Input
        defaultValue={props.formField.value}
        onChange={props.onChange}
      ></Input>
    </div>
  );
};

FieldWrapper.defaultProps = {
  label: ""
};

export default FieldWrapper;