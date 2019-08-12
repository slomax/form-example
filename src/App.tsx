import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Person, { FIELD_KEY } from "./forms/Person";
import { FormField, ValidationRule } from "./types/FormField";
import * as Validators from "./validators/Common";
import FormFieldValueDisplay from "./components/FormFieldValueDisplay";

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const formFields = {
  [FIELD_KEY.FIRST_NAME]: new FormField<string>("First Name", "Sean", [
    new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)
  ]),
  [FIELD_KEY.LAST_NAME]: new FormField<string>("Last Name", "Lomax", [
    new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)
  ])
};

const App: React.FC = () => {
  const classes = useStyles();

  const onSave = () => {};

  const formFieldValues = Object.values(formFields).map(
    formField => `${formField.label} : ${formField.value}`
  );

  return (
    <Container className={classes.root} maxWidth="sm">
      <FormFieldValueDisplay jsonObject={formFieldValues} />
      <Person formFields={formFields} onSave={onSave} />
    </Container>
  );
};

export default App;
