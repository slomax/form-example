import React from 'react';
import {Container, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

interface FormProps {
  children: JSX.Element[] | JSX.Element,
  formName?: string
}

const useStyles = makeStyles({
  root: {
    padding: '30px'
  },
});

const Form: React.FC<FormProps> = (props:FormProps) => {
  const classes = useStyles();
  return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.formName ?
            props.formName
            : <hr/>
          }
        </Typography>
        <br/>
        {props.children}
      </Paper>
  );
}

Form.defaultProps = {
  children: []
}

export default Form;
