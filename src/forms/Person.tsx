import React from "react";
import Form from "../components/Form";
import TextField from "../components/TextField";
import { FormField } from "../types/FormField";

export enum FIELD_KEY {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName"
}

interface FormProps {
  onSave: Function;
  formFields: { [s: string]: FormField<any> };
}

const Person: React.FC<FormProps> = (props: FormProps) => {
  const onFieldChange = () => {};

  return (
    <Form showButtons={true}>
      <TextField
        formField={props.formFields[FIELD_KEY.FIRST_NAME]}
        onChange={onFieldChange}
      />
      <br />
      <TextField
        formField={props.formFields[FIELD_KEY.LAST_NAME]}
        onChange={onFieldChange}
      />
    </Form>
  );
};

export default Person;
