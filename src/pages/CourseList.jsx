import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import SubjectCard from "../Components/SubjectCard";
import { fetchFilteredCourseDocuments } from "../services/firebase";
import Breadcrumb from "../Components/navigation/Breadcrumb";
import { useParams, useLocation } from "react-router-dom";


function CourseList() {
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  // console.log("********************************")
  const params = useParams();
  const location = useLocation();
  // console.log("params", params);
  // console.log("location", location.pathname);
console.log('Inside CourseList')
fetchFilteredCourseDocuments()


  useEffect(() => {
    const tester = async () => {
      console.log("trying to fetch")
      await fetchFilteredCourseDocuments()
    }
    tester()
  }, []);

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
        heading={`${params.course}`}
        subHeading="Filtered course list."
      />
      <Breadcrumb />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          marginTop: "5px",
        }}
      >
        <Box
          sx={{
            gap: "10px",
          }}
        >
          <SubjectCard
            Topic={"Geometry"}
            Duration={"Duration: 1 h 30 m"}
            Description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamgestas metus nulla, et tincidunt sapien faucibus quis."
            }
            category={"Free"}
          />
        </Box>
        <Box
          sx={{
            gap: "10px",
          }}
        >
          <SubjectCard
            Topic={"Calculus"}
            Duration={"Duration: 1 h 30 m"}
            Description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamgestas metus nulla, et tincidunt sapien faucibus quis."
            }
            category={"Paid"}
          />
        </Box>
        <Box
          sx={{
            gap: "10px",
          }}
        >
          <SubjectCard
            Topic={"Geometry"}
            Duration={"Duration: 1 h 30 m"}
            Description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamgestas metus nulla, et tincidunt sapien faucibus quis."
            }
            category={"Free"}
          />
        </Box>
      </Box>

    </Box>
  );
}

export default CourseList;
