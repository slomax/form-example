import React, { Props, ReactNode } from "react";
import { Container, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface InputWrapperProps {
  Input: React.ElementType;
  onChange: Function;
}

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const InputWrapper: React.FC<InputWrapperProps> = (
  props: InputWrapperProps
) => {
  const classes = useStyles();
  const Input: React.ElementType = props.Input;
  return (
    <>
      <Input onChange={props.onChange}></Input>
    </>
  );
};

export default InputWrapper;
