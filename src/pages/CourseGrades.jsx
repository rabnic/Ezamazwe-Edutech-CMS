import { Box } from "@mui/material";
import React from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import GradesCard from "../Components/GradesCard";

function CourseGrades() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingTop: "20px",
        gap: "50px",
        marginBottom: {xs:"50vh", sm: "-20vh", md: "-20vh", lg: "-20vh", xl: "-30vh"}
      }}
    >
      <PageHeadingContainer
        heading="Grades"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Box
        sx={{
          width: {lg: "100%"},
          marginTop: "50px",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "row", md: "row",lg :"row", xl: "row"},
            width: {xs: "100%", sm:"100%" ,md: "100%",lg: "100%", xl: "100%"},
            height: "fill 680px",
            justifyContent: "space-between",
            padding: "20px 15px 10px 15px",
            gap: "50px"
          }}
        >
          <GradesCard Grade={"Grade 1"} />
          <GradesCard Grade={"Grade 1"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "row", md: "row",lg :"row", xl: "row"},
            width: {xs: "100%", sm:"100%" ,md: "100%",lg: "100%", xl: "100%"},
            height: "fill 680px",
            justifyContent: "space-between",
            padding: "20px 15px 10px 15px",
            gap: "50px"
          }}
        >
          <GradesCard Grade={"Grade 1"} />
          <GradesCard Grade={"Grade 1"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "row", md: "row",lg :"row", xl: "row"},
            width: {xs: "100%", sm:"100%" ,md: "100%",lg: "100%", xl: "100%"},
            height: "fill 680px",
            justifyContent: "space-between",
            padding: "20px 15px 10px 15px",
            gap: "50px"
          }}
        >
          <GradesCard Grade={"Grade 1"} />
          <GradesCard Grade={"Grade 1"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "row", md: "row",lg :"row", xl: "row"},
            width: {xs: "100%", sm:"100%" ,md: "100%",lg: "100%", xl: "100%"},
            height: "fill 680px",
            justifyContent: "space-between",
            padding: "20px 15px 10px 15px",
            gap: "50px"
          }}
        >
          <GradesCard Grade={"Grade 1"} />
          <GradesCard Grade={"Grade 1"} />
        </Box>
      </Box>
    </Box>
  );
}

export default CourseGrades;
