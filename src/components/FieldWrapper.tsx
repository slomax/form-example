import React, { useState } from "react";
import { FormField, ValidationRule } from "../types/FormField";

export interface FormFieldProps {
  Input: React.ElementType;
  onChange?: Function;
  label?: string;
  formField: FormField<any>;
  onValidationStateUpdate: Function;
  shouldValidate: boolean;
}

const FieldWrapper: React.FC<FormFieldProps> = (props: FormFieldProps) => {
  const Input: React.ElementType = props.Input;

  const [isValid, setIsValid] = useState(true);
  const [errorMessages, setErrorMessages] = useState(new Array<string>());

  const clearErrorMessages = () => setErrorMessages([]);

  const validate = (value: any) => {
    const errorMessagesIsEmpty = () => errorMessages.length === 0;
    const formField = props.formField;
    formField.validationRules.forEach((validationRule: ValidationRule<any>) => {
      const valueIsValid = validationRule.validationFunction(value);
      if (!valueIsValid) {
        const errorMessage = validationRule.errorMessage;
        errorMessages.push(errorMessage);
      }
    });
    const fieldValueIsValid = errorMessagesIsEmpty();
    setIsValid(fieldValueIsValid);
    props.onValidationStateUpdate(props.formField.key, fieldValueIsValid);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    validate(event.currentTarget.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div>
      {props.formField.label}
      {props.shouldValidate && !isValid && (
        <div>{errorMessages.toString()}</div>
      )}
      <br />
      <Input value={props.formField.value} onChange={onChange}></Input>
    </div>
  );
};

FieldWrapper.defaultProps = {
  label: ""
};

export default FieldWrapper;
