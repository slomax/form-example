import React, { useState } from "react";
import Person, { PERSON_FIELD_KEY } from "../forms/Person";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FormField, ValidationRule } from "../types/FormField";
import * as Validators from "../validators/Common";

export class Kid {
  constructor(public firstName: string, public lastName: string) {}
}

interface KidsProps {
  open: boolean;
  onClose: Function;
  onAdd: Function;
}

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const initialPersonFormFields: { [s: string]: FormField<any> } = {
  [PERSON_FIELD_KEY.FIRST_NAME]: new FormField<string>("First Name", "", [
    new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)
  ]),
  [PERSON_FIELD_KEY.LAST_NAME]: new FormField<string>("Last Name", "", [
    new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)
  ])
};

const KidModal: React.FC<KidsProps> = (props: KidsProps) => {
  const classes = useStyles();

  const [formFields, setFormFields] = useState(initialPersonFormFields);

  const handleClose = () => {
    // setOpen(false);
  };

  const onFieldChange = (formFields: { [s: string]: FormField<any> }) => {
    setFormFields(formFields);
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Kid</DialogTitle>
      <DialogContent>
        <Person
          showButtons={false}
          onSave={handleClose}
          formFields={formFields}
          showFormName={false}
          onFieldChange={onFieldChange}
        ></Person>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.onClose();
            setFormFields(initialPersonFormFields);
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            props.onAdd(formFields);
            setFormFields(initialPersonFormFields);
          }}
          color="primary"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

KidModal.defaultProps = {};

export default KidModal;
