import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CategoryCard({ children, uri, category, path }) {
  const navigate = useNavigate();

  return (
    <Box onClick={() => { navigate(path) }}
      sx={{
        maxHeight: "500px",
        height: "300px",
        borderRadius: "15px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${uri})`,
        objectFit: "cover",
        gap: "50px",
        margin: "20px",
        cursor: "pointer",
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
