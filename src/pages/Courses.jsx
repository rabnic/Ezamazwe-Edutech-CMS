import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import CategoryCard from "../Components/CategoryCard";
import CourseHeading from "../Components/CourseHeading";
import CourseGrades from "./CourseGrades";
import CourseSubjects from "./CourseSubjects";
import CourseList from "./CourseList"
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
      return [ [key], categories[key].name ]

    })
  }

  if (true) {
    console.log("Categories", categoryNames())
    console.log("Categories", categories)
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
        marginBottom: {xs:"50vh", sm: "-20vh", md: "-20vh", lg: "-20vh", xl: "-30vh"}
      }}
    >
      <PageHeadingContainer
        heading="Courses Category"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Breadcrumb />
      <Box
        sx={{
          width: { xs: "80%", sm: "100%", md: "100%", lg: "100%" },
          marginTop: "50px",
          marginLeft: { xs: "-85px", sm: "0px", md: "0px", lg: "0px" },
        }}
      >
        {
          categoryNames().map((category) => {
            console.log('---------------------',category)
            return(
              <CategoryCard  path={`${category[0]}`} category={"Caps.png"}>
            <CourseHeading>{category[1]}.</CourseHeading>
          </CategoryCard>
            )
          })
        }
        {/* <Box
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
        </Box> */}

        {/* <Box
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
        </Box> */}

      </Box>

    </Box>
  );
}

export default Courses;
