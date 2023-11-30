import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeadingContainer from "../Components/PageHeadingContainer";
import SubjectCard from "../Components/SubjectCard";
import { fetchFilteredCourseDocuments } from "../services/firebase";

function CourseList() {
  const [filteredDocuments, setFilteredDocuments] = useState([]);

  useEffect(() => {
    // Assuming you have already initialized Firebase app and authenticated the user
    // const firestore = firebase.firestore();

    // Fetch the collection documents
    // const fetchDocuments = async () => {
    //   try {
    //     const querySnapshot = await firestore
    //       .collection("yourCollectionName")
    //       .where("courseCategory", "==", "cap")
    //       .where("grade", "==", "grade 1")
    //       .where("subject", "==", "maths")
    //       .get();

    //     // Extract the filtered documents
    //     const documents = querySnapshot.docs.map((doc) => doc.data());
    //     setFilteredDocuments(documents);
    //   } catch (error) {
    //     console.error("Error fetching documents: ", error);
    //   }
    // };

    // fetchDocuments();

    const tester = async () => {

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
        paddingTop: "5px",
      }}
    >
      <PageHeadingContainer
        heading="Courses List"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
   
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 10px 10px 10px",
          marginTop: "30px",
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
