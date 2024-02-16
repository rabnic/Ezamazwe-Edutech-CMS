import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import SubjectCategory from "../Components/SubjectsCategory";
import { useLocation, useParams } from "react-router-dom";
import { getCategoryData } from "../services/firebase";
import Breadcrumb from "../Components/navigation/Breadcrumb";

function CourseSubjects() {

  const params = useParams();
  const location = useLocation();

  let { subCategory, subject } = params;
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

                return (
                  <Grid key={index} item xs={12} md={6}  >
                    <SubjectCategory path={`${location.pathname}/${subject.trim().replaceAll(" ", "-")}`} Subject={subject} Desc={"Pure"} />

                  </Grid>
                )
              })
            }
          
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default CourseSubjects;

