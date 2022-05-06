import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Page = ({ children }) => {
  return (
    <Box sx={{ width: 1, mx: 10 }}>
      <Box display="grid" gridTemplateColumns="repeat(3, 2fr)" gap={1}>
        <Box gridColumn="span 2">{children}</Box>
      </Box>
    </Box>
  );
};

export default Page;
