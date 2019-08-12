import React from "react";
import { Container, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FormField from "../FormField";
import InputWrapper from "./InputWrapper";
import Select from "@material-ui/core/Select";

interface FormProps {
  formName?: string;
  formFields: { [s: string]: typeof FormField };
  showButtons?: boolean;
}

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const Form: React.FC<FormProps> = (props: FormProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {props.formName ? props.formName : <hr />}
      </Typography>
      <br />
      {}
      {props.showButtons && (
        <>
          <button>Save</button>
          <button>Cancel</button>
        </>
      )}
    </Paper>
  );
};

Form.defaultProps = {
  showButtons: true
};

export default Form;
