import React, {Reducer, ReducerAction, ReducerState, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Form from "./components/Form";
import {FormField} from "./FormField";

const useStyles = makeStyles({
  root: {
    padding: '30px'
  },
});

interface State {
    formFields: {[s:string] : FormField<any>;}
}

const FIELD_KEYS = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName'
}

const initialState:State = {
    formFields: {
        [FIELD_KEYS.FIRST_NAME] : new FormField<string>('Sean', 'First Name'),
        [FIELD_KEYS.LAST_NAME] : new FormField<string>('Lomax', 'Last Name')
    }
}

const App: React.FC = () => {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth='sm'>
            <Form formName={`${state.formFields[FIELD_KEYS.FIRST_NAME].value}'s Details`}>

            </Form>
        </Container>
    );
}

export default App;
