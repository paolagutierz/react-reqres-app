import * as React from "react";
import Form from "./FormToEdit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormDialog = ({ isOpen, closeModal, user }) => {
  return (
    <div>
      <Dialog open={isOpen} onClose={closeModal}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <Form user={user} />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Save</Button>
          <Button onClick={closeModal}>Eliminar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
