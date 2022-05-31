import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const ListTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get("https://reqres.in/api/users/");
    const users = response.data.data.map((user, i) => {
      return { id: i + 1, ...user };
    });
    setRows(users);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    {
      field: "first_name",
      headerName: "First Name",
      width: 110,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      width: 110,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "avatar",
      sortable: false,
      headerName: false,
      width: 100,
      renderCell: (params) => <Avatar src={params.value} />,
    },
    {
      renderCell: () => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}>
          editar
        </Button>
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: 500,
        width: 700,
        mt: 5,
      }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[20]}
        pagination
      />
    </Box>
  );
};
export default ListTable;
