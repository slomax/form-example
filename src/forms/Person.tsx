import React, { SyntheticEvent, useState } from "react";
import Form, { FormImplementorProps, FormProps } from "../components/Form";
import TextField from "../components/TextField";
import { FormField } from "../types/FormField";

export enum PERSON_FIELD_KEY {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName"
}

const Person: React.FC<FormImplementorProps> = (
  props: FormImplementorProps
) => {
  const [formFields, setFormFields] = useState(props.formFields);

  const buildFieldsWithNewValue: any = (fieldKey: string, value: any) => {
    const oldFormField = props.formFields[fieldKey];
    const updatedFormField = { ...oldFormField, ...{ value: value } };
    return { ...formFields, [fieldKey]: updatedFormField };
  };

  const onFieldChange = (fieldKey: string, value: any) => {
    const newFields: { [s: string]: FormField<any> } = buildFieldsWithNewValue(
      fieldKey,
      value
    );
    setFormFields(newFields);
    if (props.onFieldChange) {
      props.onFieldChange(newFields);
    }
  };

  const onSave: Function = props.onSave ? props.onSave : () => {};
  const onCancel = () => {
    setFormFields({ ...props.formFields });
  };

  return (
    <Form
      onSave={() => {
        onSave(formFields);
      }}
      onCancel={onCancel}
      showButtons={props.showButtons}
      formName={
        props.showFormName
          ? "This form will update data after you click save."
          : ""
      }
    >
      <TextField
        formField={formFields[PERSON_FIELD_KEY.FIRST_NAME]}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(PERSON_FIELD_KEY.FIRST_NAME, event.currentTarget.value);
        }}
      />
      <br />
      <TextField
        formField={formFields[PERSON_FIELD_KEY.LAST_NAME]}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(PERSON_FIELD_KEY.LAST_NAME, event.currentTarget.value);
        }}
      />
    </Form>
  );
};

export default Person;
