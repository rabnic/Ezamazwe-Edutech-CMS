import React from "react";
import { Typography } from "@mui/material";

function CourseHeading({ children }) {
  return (
    <Typography
      variant="h3"
      sx={{
        color: "#fff",
        fontWeight: "700",
        textAlign: "left",
        fontSize: {xs: "1.5rem",sm: "2rem",lg:"2.5rem"}
      }}
    >
      {children}
    </Typography>
  );
}

export default CourseHeading;
