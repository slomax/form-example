import React, { useState } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Person, { PERSON_FIELD_KEY } from "./forms/Person";
import { FormField, ValidationRule } from "./types/FormField";
import * as Validators from "./validators/Common";
import FormFieldValueDisplay from "./components/FormFieldValueDisplay";
import Instant, { INSTANT_FIELD_KEY } from "./forms/Instant";

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const initialPersonFormFields: { [s: string]: FormField<any> } = {
  [PERSON_FIELD_KEY.FIRST_NAME]: new FormField<string>("First Name", "Sean", [
    new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)
  ]),
  [PERSON_FIELD_KEY.LAST_NAME]: new FormField<string>("Last Name", "Lomax", [
    new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)
  ])
};

const initialInstantFormFields: { [s: string]: FormField<any> } = {
  [INSTANT_FIELD_KEY.AGE]: new FormField<string>("Age", "34", [
    new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)
  ]),
  [INSTANT_FIELD_KEY.FAVORITE_COLOR]: new FormField<string>(
    "Favorite Color",
    "Blue",
    [new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)]
  )
};

const App: React.FC = () => {
  const classes = useStyles();

  const [personFormFields, setPersonFormFields] = useState(
    initialPersonFormFields
  );

  const [instantFormFields, setInstantFormFields] = useState(
    initialInstantFormFields
  );

  const onSavePerson = (newFieldValues: { [s: string]: FormField<any> }) => {
    setPersonFormFields({ ...newFieldValues });
  };

  const onSaveInstant = (newFieldValues: { [s: string]: FormField<any> }) => {
    setInstantFormFields({ ...newFieldValues, ...instantFormFields });
  };

  const formFieldValues = Object.values(personFormFields)
    .concat(Object.values(initialInstantFormFields))
    .map(formField => `${formField.label} : ${formField.value}`);

  return (
    <Container className={classes.root} maxWidth="sm">
      <FormFieldValueDisplay jsonObject={formFieldValues} />
      <Person formFields={personFormFields} onSave={onSavePerson} />
      <Instant formFields={instantFormFields} onSave={onSaveInstant} />
    </Container>
  );
};

export default App;
