import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Person from "./forms/Person";

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const App: React.FC = () => {
  const classes = useStyles();

  const onSave = () => {};

  return (
    <Container className={classes.root} maxWidth="sm">
      <Person onSave={onSave} />
    </Container>
  );
};

export default App;
