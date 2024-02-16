import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import GradesCard from "../Components/GradesCard";
import { useParams, useLocation } from "react-router-dom";
import { getCategoryData } from "../services/firebase";
import Breadcrumb from "../Components/navigation/Breadcrumb";

function CourseGrades() {
  const params = useParams();
  const location = useLocation();

  const [categories, setCategories] = useState([])


  useEffect(() => {
    const category = async () => {
      await getCategoryData().then(data => {
        setCategories(data)
      })
    }
    category()
  }, [])



  const grades = (key) => {
    return categories[key]?.grades || [];
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
        marginBottom: { xs: "50vh", sm: "-20vh", md: "-20vh", lg: "-20vh", xl: "-30vh" }
      }}
    >
      <PageHeadingContainer
        heading="Grades"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Breadcrumb />

      <Box
        sx={{
          width: { xs: "100%" },
          marginTop: "5px",
          height: "100vh",
        }}
      >
      
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>

            {
              grades(params.subCategory).length > 0 &&

              grades(params.subCategory).map((grade, index) => {
                return (
                  <Grid item xs={12} md={6} key={index} >
                    <GradesCard path={`${location.pathname}/${grade.trim().replace(" ", "-")}`} Grade={grade} />

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

export default CourseGrades;
