import React from "react";
import InputWrapper from "./InputWrapper";

interface TextFieldProps {
  onChange: Function;
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return <InputWrapper Input={TextField} onChange={props.onChange} />;
};

export default TextField;
