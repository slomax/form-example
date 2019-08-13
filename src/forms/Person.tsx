import React, { SyntheticEvent, useState } from "react";
import Form, { FormImplementorProps, FormProps } from "../components/Form";
import TextField from "../components/TextField";

export enum PERSON_FIELD_KEY {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName"
}

const Person: React.FC<FormImplementorProps> = (
  props: FormImplementorProps
) => {
  const [formFields, setFormFields] = useState(props.formFields);

  const onFieldChange = (fieldKey: string, value: any) => {
    formFields[fieldKey].value = value;
  };

  const onSave: Function = props.onSave ? props.onSave : () => {};

  return (
    <Form
      onSave={() => {
        onSave(formFields);
      }}
      showButtons={true}
      formName="This form will update data after you click save."
    >
      <TextField
        formField={props.formFields[PERSON_FIELD_KEY.FIRST_NAME]}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(PERSON_FIELD_KEY.FIRST_NAME, event.currentTarget.value);
        }}
      />
      <br />
      <TextField
        formField={props.formFields[PERSON_FIELD_KEY.LAST_NAME]}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(PERSON_FIELD_KEY.LAST_NAME, event.currentTarget.value);
        }}
      />
    </Form>
  );
};

export default Person;
