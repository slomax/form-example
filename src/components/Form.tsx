import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FormField } from "../types/FormField";

export interface FormProps {
  formName?: string;
  showButtons?: boolean;
  children?: JSX.Element | JSX.Element[];
  onSave?: Function;
  onCancel?: Function;
}

export interface FormImplementorProps extends FormProps {
  formFields: { [s: string]: FormField<any> };
  onSave: Function;
}

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const Form: React.FC<FormProps> = (props: FormProps) => {
  const classes = useStyles();

  const onSave: Function = props.onSave ? props.onSave : () => {};
  const onCancel: Function = props.onCancel ? props.onCancel : () => {};

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {props.formName ? props.formName : <hr />}
      </Typography>
      <br />
      {props.children}
      <br />
      {props.showButtons && (
        <>
          <button onClick={() => onSave()}>Save</button>
          <button onClick={() => onCancel()}>Cancel</button>
        </>
      )}
    </Paper>
  );
};

Form.defaultProps = {
  showButtons: true,
  children: []
};

export default Form;
