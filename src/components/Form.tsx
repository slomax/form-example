import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface FormProps<E> {
  formName?: string;
  showButtons?: boolean;
  children?: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const Form: React.FC<FormProps<any>> = (props: FormProps<any>) => {
  const classes = useStyles();

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
          <button>Save</button>
          <button>Cancel</button>
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
