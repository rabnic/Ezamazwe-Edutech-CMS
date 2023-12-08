import React from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


function GradesCard({ children, Grade, path }) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(path)}
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #B3B3B3",
        color: "#FFFFFF",
        gap: "49px",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          width: { xs: "250px", sm: "250px", md: "300px", lg: "500px", xl: "700px" },
          height: "Hug 70px",
          alignItems: "center",
        }}
      >
        <img
          src={require("../assets/RoundIcon.png")}
          alt="RoundIcon"
          style={{ width: "50px", height: "50px" }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "#396781",
            fontWeight: "700",
            fontFamily: "Roboto",
            fontSize: "30px",
            lineHeight: "32px",
            marginLeft: "50px",
          }}
        >
          {Grade}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}

export default GradesCard;
