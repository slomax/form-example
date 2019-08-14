import React, { SyntheticEvent, useState } from "react";
import Form, { FormImplementorProps, FormProps } from "../components/Form";
import TextField from "../components/TextField";

export enum INSTANT_FIELD_KEY {
  FAVORITE_COLOR = "favoriteColor",
  AGE = "age"
}

const Instant: React.FC<FormImplementorProps> = (
  props: FormImplementorProps
) => {
  const [formFields, setFormFields] = useState(props.formFields);

  const onFieldChange = (fieldKey: string, value: any) => {
    formFields[fieldKey].value = value;
    //note that we only save the field that changed
    if (props.onSave) {
      props.onSave(formFields[fieldKey]);
    }
  };

  return (
    <Form showButtons={false} formName="This form will update data instantly.">
      <TextField
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(
            INSTANT_FIELD_KEY.FAVORITE_COLOR,
            event.currentTarget.value
          );
        }}
        formField={props.formFields[INSTANT_FIELD_KEY.FAVORITE_COLOR]}
      />
      <br />
      <TextField
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(INSTANT_FIELD_KEY.AGE, event.currentTarget.value);
        }}
        formField={props.formFields[INSTANT_FIELD_KEY.AGE]}
      />
    </Form>
  );
};

export default Instant;
