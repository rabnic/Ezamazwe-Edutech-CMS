import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import PageHeading from '../Components/PageHeading'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import TextFields, { TextFieldPassword } from '../Components/TextFields'

function Courses() {
  const [courseName, setCourseName] = useState("")
  const [courseType, setCourseType] = useState("")
  const [courseDescription, setCourseDescription] = useState("")


  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px" }}>

      <PageHeadingContainer
        heading="Courses"
        subHeading="Some sub heading for this page"
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", lg: "row" }, gap: "20px" }}>
          <TextFields label={"Course Name:"} errorStatus={"yes"} type="email" errorMessage={"Input is required"} setState={setCourseName} state={courseName} />
          <TextFields label={"Type of Course:"} errorStatus={"yes"} type="email" errorMessage={"Input is required"} setState={setCourseType} state={courseType} />
        </Box>
        <TextFields label={"Course Short Description:"} errorStatus={"yes"} type="textArea" errorMessage={"Input is required"} isMultiline={true} numberOfRows={3} setState={setCourseDescription} state={courseDescription} />
      </Box>

    </Box>
  )
}

export default Courses