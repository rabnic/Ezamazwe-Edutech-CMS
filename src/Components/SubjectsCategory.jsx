import React from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SubjectCategory({ children, Subject, Desc, path }) {
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
        bgcolor: "#FFFFFF",
        gap: "49px",
        cursor: "pointer"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          width: {
            xs: "250px",
            sm: "250px",
            md: "300px",
            lg: "500px",
            xl: "700px",
          },
          height: "Hug 70px",
          alignItems: "center",
        }}
      >
        <img
          src={require("../assets/SubIcon.png")}
          alt="SubIcon"
          style={{ width: "50px", height: "50px" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#396781",
              fontWeight: { xs: "700", sm: "700", md: "700", lg: "700", xl: "700" },
              fontFamily: "Roboto",
              fontSize: "30px",
              lineHeight: "32px",
              marginLeft: { xs: "10px", sm: "10px", md: "30px", lg: "50px", xl: "50px" },
            }}
          >
            {Subject}
          </Typography>
          <Typography
            variant="body"
            sx={{
              color: "black",
              bgcolor: "black",
              fontWeight: "400",
              fontFamily: "Roboto",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.17px",
              marginLeft: { xs: "10px", sm: "10px", md: "30px", lg: "50px", xl: "50px" },
              marginTop: "5px"
            }}
          >
            {Desc}
          </Typography>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default SubjectCategory;
