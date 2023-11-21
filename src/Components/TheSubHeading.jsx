import React from "react";
import { Typography } from "@mui/material";

const TheSubHeading = ({ children }) => {
  return (
    <Typography
      variant="h7"
      sx={{
        color: "black.main",
        fontWeight: "500",
        textAlign: "left",
        bgcolor: "#F5F5F5",
        width: "fill",
        height: "hug",
        borderTop: "2px solid black",
        borderBottom: "2px solid black",
        padding: "4px",
        gap: "5px",
      }}
    >
      {children}
    </Typography>
  );
};

export default TheSubHeading;
