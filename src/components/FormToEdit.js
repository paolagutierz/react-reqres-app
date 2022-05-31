import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const FormToEdit = ({ user }) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          defaultValue={user.email}
        />
        <TextField
          required
          id="outlined-required"
          label="Firstname"
          defaultValue={user.first_name}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Lastname"
          defaultValue={user.last_name}
        />
      </div>
    </Box>
  );
};

export default FormToEdit;
