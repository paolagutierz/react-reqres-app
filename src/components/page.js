import * as React from "react";
import Box from "@mui/material/Box";

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
