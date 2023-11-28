import React from "react";
import { Box } from "@mui/material";

function CategoryCard({ children, category }) {

  return (
    <Box
      sx={{
        maxWidth: "100%",
        maxHeight: "500px",
        height: "300px",
        width: "100%",
        borderRadius: "15px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${require(`../assets/${category}`)})`,
        objectFit: "cover",
        gap: "50px",
        margin: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          padding: "20px",
          backgroundColor: "#3967814D",
          width: "100%",
          height: "100%",
          borderRadius: "15px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default CategoryCard;
