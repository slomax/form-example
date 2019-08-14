import React, { SyntheticEvent, useState } from "react";
import Form, { FormImplementorProps, FormProps } from "../components/Form";
import TextField from "../components/TextField";
import { FormField } from "../types/FormField";

export enum PERSON_FIELD_KEY {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName"
}

const initialValidityStateLookup: { [s: string]: boolean } = {
  [PERSON_FIELD_KEY.FIRST_NAME]: true,
  [PERSON_FIELD_KEY.LAST_NAME]: true
};

const Person: React.FC<FormImplementorProps> = (
  props: FormImplementorProps
) => {
  const [formFields, setFormFields] = useState(props.formFields);
  const [formIsValid, setFormIsValid] = useState(true);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [validityStateLookup, setValidityStateLookup] = useState(
    initialValidityStateLookup
  );

  const updateValidityState = (fieldKey: string, isValid: boolean) => {
    validityStateLookup[fieldKey] = isValid;
  };

  const buildFieldsWithNewValue: any = (fieldKey: string, value: any) => {
    const formField = props.formFields[fieldKey];
    formField.value = value;
    return { ...formFields, [fieldKey]: formField };
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

  let onSave;
  if (props.onSave) {
    onSave = () => {
      const allFieldsAreValid =
        Object.values(validityStateLookup).indexOf(false) < 0;
      if (allFieldsAreValid) {
        setShouldValidate(false);
        if (props.onSave) {
          props.onSave(formFields);
        }
      } else {
        setShouldValidate(true);
      }
    };
  } else {
    onSave = () => {};
  }

  const onCancel = () => {
    setFormFields({ ...props.formFields });
  };

  return (
    <Form
      onSave={onSave}
      onCancel={onCancel}
      showButtons={props.showButtons}
      formName={
        props.showFormName
          ? "This form will update data after you click save."
          : ""
      }
      formFields={formFields}
    >
      <TextField
        shouldValidate={shouldValidate}
        formField={formFields[PERSON_FIELD_KEY.FIRST_NAME]}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(PERSON_FIELD_KEY.FIRST_NAME, event.currentTarget.value);
        }}
        onValidationStateUpdate={updateValidityState}
      />
      <br />
      <TextField
        shouldValidate={shouldValidate}
        formField={formFields[PERSON_FIELD_KEY.LAST_NAME]}
        onChange={(event: React.FormEvent<HTMLInputElement>) => {
          onFieldChange(PERSON_FIELD_KEY.LAST_NAME, event.currentTarget.value);
        }}
        onValidationStateUpdate={updateValidityState}
      />
    </Form>
  );
};

export default Person;
