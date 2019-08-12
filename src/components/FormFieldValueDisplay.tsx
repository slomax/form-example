import React from "react";
import { FormField } from "../types/FormField";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface JsonDisplayProps {
  jsonObject: object;
}

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const JsonDisplay: React.FC<JsonDisplayProps> = (props: JsonDisplayProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Data
      </Typography>
      <br />
      <pre>{JSON.stringify(props.jsonObject, null, 2)}</pre>
      <br />
    </Paper>
  );
};

JsonDisplay.defaultProps = {
  jsonObject: {}
};

export default JsonDisplay;
