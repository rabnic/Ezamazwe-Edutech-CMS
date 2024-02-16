import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import CategoryCard from "../Components/CategoryCard";
import CourseHeading from "../Components/CourseHeading";
import { useLocation } from "react-router-dom";
import { getCategoryData } from "../services/firebase";
import Breadcrumb from "../Components/navigation/Breadcrumb";

function Courses() {
  const location = useLocation();
  const paths = location.pathname.split("/").slice(1);
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const category = async () => {
      await getCategoryData().then(data => {
        setCategories(data)
      })
    }
    category()
  }, [])

  const categoryNames = () => {
    return Object.keys(categories).map(key => {
      return [[key], categories[key].name, categories[key].imageUrl]

    })
  }

  if (true) {
  }

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
        heading="Courses Category"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Breadcrumb />
      <Box
        sx={{
          width: "100%",
          marginTop: "5px",
          marginLeft: "auto",
          marginRight: "auto"
         
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container  spacing={2}>

            {
              categoryNames().map((category, index) => {
                const key = category[0];
                return (
                  <Grid item xs={12} md={index <= 1 ? 6 : 12} key={index} >
                    <CategoryCard path={`${category[0]}`} uri={category[2]} category={"Caps.png"}>
                      <CourseHeading>{category[1]}.</CourseHeading>
                    </CategoryCard>
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

export default Courses;
