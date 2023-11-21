import { Box } from "@mui/material";
import React from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import TheSubHeading from "../Components/TheSubHeading";
import Cards from "../Components/Cards";
import CourseHeading from "../Components/CourseHeading";

function Courses() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingTop: "5px",
        height: "100vh",
      }}
    >
      <PageHeadingContainer
        heading="Courses Categories"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          marginTop: "50px",
          width: "100%",
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TheSubHeading>Categories /</TheSubHeading>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Cards sx={{ width: "50%" }} style={{ position: "relative" }}>
          <img
            src={require("../assets/Caps.png")}
            alt="Caps"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <CourseHeading
            heading="CAPS."
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              textAlign: "center",
              color: "white",
            }}
          />
        </Cards>
        <Cards sx={{ width: "50%" }}>
          <img
            src={require("../assets/IBM.png")}
            alt="IBM"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Cards>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Cards>
          <img
            src={require("../assets/Entrepreneur.png")}
            alt="Entrepreneur"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Cards>
      </Box>
    </Box>
  );
}

export default Courses;
