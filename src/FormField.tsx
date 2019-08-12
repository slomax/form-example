import React, { useState } from "react";

interface ValidationRule<E> {
  errorMessage: string;
  validationFunction: (value: E) => Boolean;
}

export enum FieldType {
  Text,
  Number,
  Select
}

export interface FormFieldProps<E> {
  value: E;
  label: string;
  input: JSX.Element;
  validationRules: Array<ValidationRule<E>>;
  type: FieldType;
}

interface FormFieldState {
  isValid: boolean;
  errorMessages: Array<string>;
}

const FormField: React.FC<FormFieldProps<any>> = (
  props: FormFieldProps<any>
) => {
  const initialState: FormFieldState = {
    isValid: true,
    errorMessages: []
  };

  const [state, setState] = useState(initialState);

  const validate = () => {
    //utility methods not to be used outside this method
    const clearErrorMessages = () => (state.errorMessages = []);
    const errorMessagesIsEmpty = () => state.errorMessages.length === 0;

    //now perform validation
    clearErrorMessages();
    props.validationRules.forEach((validationRule: ValidationRule<any>) => {
      const valueIsValid = validationRule.validationFunction(props.value);
      if (!valueIsValid) {
        const errorMessage = validationRule.errorMessage;
        state.errorMessages.push(errorMessage);
      }
      return valueIsValid;
    });
    const allValidationRulesPassed = errorMessagesIsEmpty();
    state.isValid = allValidationRulesPassed;
  };

  return <input></input>;
};

export default FormField;
