import React, { useState } from "react";
import { PERSON_FIELD_KEY } from "../forms/Person";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import KidModal from "./KidModal";
import { FormField } from "../types/FormField";

export class Kid {
  constructor(public firstName: string, public lastName: string) {}
}

interface KidsProps {
  kids: Array<Kid>;
  onEdit?: Function;
  onDelete?: Function;
  onAdd: Function;
  onUpdate: Function;
}

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const Kids: React.FC<KidsProps> = (props: KidsProps) => {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedKid, setSelectedKid] = useState(new Kid("", ""));
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Kids (add with modal)
          <button
            onClick={() => {
              setSelectedKid(new Kid("", ""));
              setIsEditing(false);
              setModalOpen(true);
            }}
          >
            add kid
          </button>
        </Typography>
        <br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.kids.map((row: Kid, index: number) => (
              <TableRow key={`${row.firstName}-${index}`}>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>
                  <button
                    onClick={() => {
                      if (props.onDelete) {
                        props.onDelete(index);
                      }
                    }}
                  >
                    delete
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setSelectedKid(row);
                      setModalOpen(true);
                    }}
                  >
                    edit
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <KidModal
        isEditing={isEditing}
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        onAdd={(formFields: { [s: string]: FormField<any> }) => {
          if (isEditing) {
            props.onUpdate(selectedKid, formFields);
          } else {
            props.onAdd(formFields);
          }
          setModalOpen(false);
        }}
        selectedKid={selectedKid}
      ></KidModal>
    </>
  );
};

Kids.defaultProps = {
  kids: []
};

export default Kids;
