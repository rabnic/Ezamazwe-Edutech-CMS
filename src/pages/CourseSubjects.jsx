import { Box } from "@mui/material";
import React from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import SubjectCategory from "../Components/SubjectsCategory";

function CourseSubjects() {
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
      }}
    >
      <PageHeadingContainer
        heading="Subjects"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Box
        sx={{
          width: {lg: "100%"},
          marginTop: "40px",
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
            padding: "20px",
            gap: "50px"
          }}
        >
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "row", md: "row",lg :"row", xl: "row"},
            width: {xs: "100%", sm:"100%" ,md: "100%",lg: "100%", xl: "100%"},
            height: "fill 680px",
            justifyContent: "space-between",
            padding: "20px",
            gap: "50px"
          }}
        >
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "row", md: "row",lg :"row", xl: "row"},
            width: {xs: "100%", sm:"100%" ,md: "100%",lg: "100%", xl: "100%"},
            height: "fill 680px",
            justifyContent: "space-between",
            padding: "20px",
            gap: "50px"
          }}
        >
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "row", md: "row",lg :"row", xl: "row"},
            width: {xs: "100%", sm:"100%" ,md: "100%",lg: "100%", xl: "100%"},
            height: "fill 680px",
            justifyContent: "space-between",
            padding: "20px",
            gap: "50px"
          }}
        >
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
        </Box>
      </Box>
    </Box>
  );
}

export default CourseSubjects;
