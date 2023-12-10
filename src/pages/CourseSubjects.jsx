import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import SubjectCategory from "../Components/SubjectsCategory";
import { useLocation, useParams } from "react-router-dom";
import { getCategoryData } from "../services/firebase";
import Breadcrumb from "../Components/navigation/Breadcrumb";

function CourseSubjects() {

  const params = useParams();
  const location = useLocation();
  // console.log("location", location.pathname);

  let { subCategory, subject } = params;
  // console.log(params);
  const [categories, setCategories] = useState([])


  useEffect(() => {
    const category = async () => {
      await getCategoryData().then(data => {
        setCategories(data)
      })
    }
    category()
  }, [])

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  subject = capitalizeFirstLetter(subject)

  const subjects = (key, grade) => {
    if (categories[key] && categories[key].subjects && categories[key].subjects[grade]) {
      return categories[key].subjects[grade];
    }
    return [];
  };

  // console.log("grades", subjects(subCategory, subject.replace("-", "_")));

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
      <Breadcrumb />

      <Box
        sx={{
          width: { lg: "100%" },
          marginTop: "5px",
          height: "100vh",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>

            {
              subjects(subCategory, subject.replace("-", "_")).length > 0 &&

              subjects(subCategory, subject.replace("-", "_")).map((subject, index) => {

                // console.log(subject);
                return (
                  <Grid key={index} item xs={12} md={6}  >
                    {/* <GradesCard path={`${location.pathname}/${grade.toLowerCase().replace(" ", "-")}`} Grade={grade} /> */}
                    <SubjectCategory path={`${location.pathname}/${subject.trim().replaceAll(" ", "-")}`} Subject={subject} Desc={"Pure"} />

                  </Grid>
                )
              })
            }
            {
              // subjects(subCategory, subject.replace("-", "_")).length < 1 &&
              // <Typography
              //   align="center"
              //   color="text.secondary"
              //   variant="body1"
              //   sx={{ width: { xs: "100%", md: "80%" }, textAlign: "center" }}
              // >
              //   Sorry, no content for your selection as yet.
              // </Typography>
            }
          </Grid>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" },
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
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
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" },
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
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
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" },
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
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
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" },
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
            height: "fill 680px",
            justifyContent: "space-between",
            padding: "20px",
            gap: "50px"
          }}
        >
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
          <SubjectCategory Subject={"Mathematics"} Desc={"Pure"} />
        </Box> */}
      </Box>
    </Box>
  );
}

export default CourseSubjects;

