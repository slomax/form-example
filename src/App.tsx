import React, { Reducer, ReducerAction, ReducerState, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Form from "./components/Form";
import FormField, { FormFieldProps } from "./FormField";
import * as Util from "./components/Util";
import TextField from "./components/TextField";

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

interface State {
  formFields: { [s: string]: FormFieldProps<any> };
}

enum FIELD_KEY {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName"
}

const initialState: State = {
  formFields: {
    // [FIELD_KEY.FIRST_NAME] : new FormFieldProps<string>('Sean', 'First Name', <input/>),
    // [FIELD_KEY.LAST_NAME] : new FormField<string>('Lomax', 'Last Name', <input/>)
  }
};

const App: React.FC = () => {
  const [state, setState] = useState(initialState);
  const classes = useStyles();

  // const getFieldValueFromFormFields = (fieldKey: string) => Util.getFieldValueFromFormFields(state.formFields, fieldKey);

  const validateForm = () => {
    Object.values(state.formFields).forEach(formField => {
      // formField.validate();
    });
  };

  // const firstName:string = getFieldValueFromFormFields(FIELD_KEY.FIRST_NAME);
  // const formName = firstName.length === 0 ? firstName : `${firstName}'s Details`

  return (
    <Container className={classes.root} maxWidth="sm">
      <Form formName="hey" formFields={{}}>
        <TextField></TextField>
      </Form>
    </Container>
  );
};

export default App;
