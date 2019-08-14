import React, { SyntheticEvent, useState } from "react";
import Form, { FormImplementorProps, FormProps } from "../components/Form";
import TextField from "../components/TextField";
import { PERSON_FIELD_KEY } from "./Person";

export enum INSTANT_FIELD_KEY {
  FAVORITE_COLOR = "favoriteColor",
  AGE = "age"
}

const initialValidityStateLookup: { [s: string]: boolean } = {
  [INSTANT_FIELD_KEY.FAVORITE_COLOR]: true,
  [INSTANT_FIELD_KEY.AGE]: true
};

const Instant: React.FC<FormImplementorProps> = (
  props: FormImplementorProps
) => {
  const [formFields, setFormFields] = useState(props.formFields);
  const [validityStateLookup, setValidityStateLookup] = useState(
    initialValidityStateLookup
  );

  const updateValidityState = (fieldKey: string, isValid: boolean) =>
    (validityStateLookup[fieldKey] = isValid);

  const onFieldChange = (fieldKey: string, value: any) => {
    formFields[fieldKey].value = value;
    //note that we only save the field that changed
    if (props.onSave) {
      props.onSave(formFields[fieldKey]);
    }
  };

  return (
    <Form
      formFields={formFields}
      formName="This form will update data instantly."
      showButtons={false}
    >
      <TextField
        shouldValidate={true}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(
            INSTANT_FIELD_KEY.FAVORITE_COLOR,
            event.currentTarget.value
          );
        }}
        formField={props.formFields[INSTANT_FIELD_KEY.FAVORITE_COLOR]}
        onValidationStateUpdate={updateValidityState}
      />
      <br />
      <TextField
        shouldValidate={true}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(INSTANT_FIELD_KEY.AGE, event.currentTarget.value);
        }}
        formField={props.formFields[INSTANT_FIELD_KEY.AGE]}
        onValidationStateUpdate={updateValidityState}
      />
    </Form>
  );
};

export default Instant;
