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
import { Kid } from "./Kids";

interface KidsProps {
  open: boolean;
  onClose: Function;
  onAdd: Function;
  selectedKid: Kid;
  isEditing: boolean;
}

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const emptyKidFields: { [s: string]: FormField<any> } = {
  [PERSON_FIELD_KEY.FIRST_NAME]: new FormField<string>(
    "First Name",
    "",
    [new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)],
    PERSON_FIELD_KEY.FIRST_NAME
  ),
  [PERSON_FIELD_KEY.LAST_NAME]: new FormField<string>(
    "Last Name",
    "",
    [new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)],
    PERSON_FIELD_KEY.LAST_NAME
  )
};

const KidModal: React.FC<KidsProps> = (props: KidsProps) => {
  const selectedKidFields: { [s: string]: FormField<any> } = {
    [PERSON_FIELD_KEY.FIRST_NAME]: new FormField<string>(
      "First Name",
      props.selectedKid.firstName,
      [new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)],
      PERSON_FIELD_KEY.FIRST_NAME
    ),
    [PERSON_FIELD_KEY.LAST_NAME]: new FormField<string>(
      "Last Name",
      props.selectedKid.lastName,
      [new ValidationRule(Validators.REQUIRED_ERROR, Validators.required)],
      PERSON_FIELD_KEY.LAST_NAME
    )
  };

  const [formFields, setFormFields] = useState(selectedKidFields);

  const onFieldChange = (formFields: { [s: string]: FormField<any> }) => {
    setFormFields(formFields);
  };

  const saveButtonText: string = props.isEditing ? "Save" : "Add";
  const titleText: string = props.isEditing ? "Edit" : "Add";
  return (
    <Dialog open={props.open} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{titleText} Kid</DialogTitle>
      <DialogContent>
        <Person
          showButtons={false}
          formFields={selectedKidFields}
          showFormName={false}
          onFieldChange={onFieldChange}
        ></Person>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.onClose();
            setFormFields(emptyKidFields);
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            props.onAdd(formFields);
            setFormFields(emptyKidFields);
          }}
          color="primary"
        >
          {saveButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

KidModal.defaultProps = {
  selectedKid: undefined,
  isEditing: false
};

export default KidModal;
