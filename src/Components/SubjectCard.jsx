import React from "react";
import { Box, Typography } from "@mui/material";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

function SubjectCard({ children, Topic, category, Duration, Description }) {
  return (
   
    <Box
      sx={{
        display: "flex",
        width: "100%",
        maxHeight: "680px",
        height: "hug 205px",
        borderRadius: "10px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "30%",
        }}
      >
        <Box
          sx={{
            backgroundPosition: "center",
            backgroundImage: `url(${require("../assets/Math.png")})`,
          }}
          style={{
            width: "100%",
            height: "205px",
            objectFit: "cover",
            borderBottomLeftRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <PlayArrowSharpIcon
              sx={{
                bgcolor: "#fff",
                color: "#396781",
                width: "70px",
                height: "70px",
                borderRadius: "100%",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "70%",
          height: "205px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          padding: "15px",
          gap: "20px",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid #B3B3B3",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            height: "32px",
            color: "#396781",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "32px",
          }}
        >
          {Topic}
        </Typography>
        <br></br>
        <Typography
          variant="body2"
          sx={{
            height: "40px",
            width: "100%",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.17px",
            marginTop: { xs: "-10px", sm: "0px", md: "0px", lg: "5px", xl: "10px" },
          }}
        >
          {Description}
        </Typography>
        <br></br>
        <Typography
          variant="body2"
          sx={{
            color: "#396781",
            height: "20px",
            fontWeight: "400",
            fontFamily: "Roboto",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.17px",
            alignItems: "center",
            marginTop: { xs: "30px", sm: "10px", md: "0px", lg: "0px", xl: "10px" },
          }}
        >
          {Duration}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#396781",
            height: "28px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "28px",
            letterSpacing: "0.15px",
            textAlign: "right",
          }}
        >
          {category}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}

export default SubjectCard;
