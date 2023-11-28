import { Box } from "@mui/material";
import React from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import CategoryCard from "../Components/CategoryCard";
import CourseHeading from "../Components/CourseHeading";
import CourseGrades from "./CourseGrades";
import CourseSubjects from "./CourseSubjects";
import Subject from "./Subject"

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
      }}
    >
      <PageHeadingContainer
        heading="Courses Category"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Box
        sx={{
          width: { xs: "80%", sm: "100%", md: "100%", lg: "100%" },
          marginTop: "50px",
          marginLeft: { xs: "-85px", sm: "0px", md: "0px", lg: "0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <CategoryCard category={"Caps.png"}>
            <CourseHeading>CAPS.</CourseHeading>
          </CategoryCard>
          <CategoryCard category={"IEB.png"}>
            <CourseHeading>IEB.</CourseHeading>
          </CategoryCard>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginLeft: { xs: "15px", sm: "0px", md: "0px", lg: "0px" },
          }}
        >
          <CategoryCard category={"Entrepreneur.png"}>
            <CourseHeading>Entrepreneur.</CourseHeading>
          </CategoryCard>
        </Box>
      </Box>
      {/* <br></br>
      <Box>
        <CourseGrades />
      </Box>
      <Box>
      <CourseSubjects />
      </Box>
      <Box>
        <Subject />
      </Box> */}
    </Box>
  );
}

export default Courses;
