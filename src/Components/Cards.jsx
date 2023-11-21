import React from "react";
import { Box } from "@mui/material";

function Cards({ children }) {
  return (
    <Box
      sx={{
        width: "fixed 900px",
        height: "fixed 600px",
        marginTop: "30px",
        top: "36px",
        marginLeft: "50px",
        borderRadius: "15px",
        padding: "20px",
        gap: "10px",
      }}
    >
      {children}
    </Box>
  );
}

export default Cards
