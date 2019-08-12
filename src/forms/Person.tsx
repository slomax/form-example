import React from "react";
import Form from "../components/Form";
import { FormField, ValidationRule } from "../types/FormField";
import * as Validators from "../validators/Common";
import TextField from "../components/TextField";

enum FIELD_KEY {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName"
}

const formFields = {
  [FIELD_KEY.FIRST_NAME]: new FormField<string>("First Name", "Sean", [
    new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)
  ]),
  [FIELD_KEY.LAST_NAME]: new FormField<string>("Last Name", "Lomax", [
    new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)
  ])
};

interface FormProps {
  onSave: Function;
}

const Person: React.FC<FormProps> = (props: FormProps) => {
  const onFieldChange = () => {};

  return (
    <Form showButtons={true}>
      <TextField
        formField={formFields[FIELD_KEY.FIRST_NAME]}
        onChange={onFieldChange}
      />
      <br />
      <TextField
        formField={formFields[FIELD_KEY.LAST_NAME]}
        onChange={onFieldChange}
      />
    </Form>
  );
};

export default Person;
