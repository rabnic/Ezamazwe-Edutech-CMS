import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import GradesCard from "../Components/GradesCard";
import { useParams, useLocation } from "react-router-dom";
import { getCategoryData } from "../services/firebase";
import Breadcrumb from "../Components/navigation/Breadcrumb";

function CourseGrades() {
  const params = useParams();
  const location = useLocation();
  // console.log("params", params);
  // console.log("location", location.pathname);

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

  // console.log("grades", grades(params.subCategory));

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
        {/* {
          grades(params.subCategory).map(grade => {
            console.log(grade);
            return (

              <GradesCard path={`${location.pathname}/${grade.toLowerCase().replace(" ", "-")}`} Grade={grade} />

            )
          })
        } */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>

            {
              grades(params.subCategory).length > 0 &&

              grades(params.subCategory).map((grade, index) => {
                // console.log(grade);
                return (
                  <Grid item xs={12} md={6} key={index} >
                    <GradesCard path={`${location.pathname}/${grade.trim().replace(" ", "-")}`} Grade={grade} />

                  </Grid>
                )
              })
            }
            {
              // grades(params.subCategory).length < 1 &&
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
        </Box> */}
      </Box>
    </Box>
  );
}

export default CourseGrades;
