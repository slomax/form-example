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
}

const useStyles = makeStyles({
  root: {
    padding: "30px"
  }
});

const Kids: React.FC<KidsProps> = (props: KidsProps) => {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Kids (add with modal)
          <button
            onClick={() => {
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
                      if (props.onEdit) {
                        props.onEdit(index);
                      }
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
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        onAdd={(formFields: { [s: string]: FormField<any> }) => {
          props.onAdd(formFields);
          setModalOpen(false);
        }}
      ></KidModal>
    </>
  );
};

Kids.defaultProps = {
  kids: []
};

export default Kids;
