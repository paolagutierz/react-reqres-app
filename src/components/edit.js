import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "./form";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const { id } = useParams();
  const [user, SetUser] = React.useState;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(`https://reqres.in/api/users/id`);
    const toEdit = response.data.data.map((user, i) => {
      return { id: i + 1, ...user };
    });
    SetUser(toEdit);
    console.log(user.data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modificar Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Form />
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Aceptar</Button>
          <Button onClick={handleClose}>Eliminar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
