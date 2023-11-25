import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeading from '../Components/PageHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import TextFields, { SelectField, TextAreas } from '../Components/TextFields'
import Button from '../Components/Buttons';
import AddCourseContent from './AddCourseContent'
import MediaFields from '../Components/AddMedia'


function AddNewCourse() {
  const [courseName, setCourseName] = useState("")
  const [courseType, setCourseType] = useState("")
  const [courseShortDescription, setCourseShortDescription] = useState("")
  const [courseFullDescription, setCourseFullDescription] = useState("")
  const [courseCategory, setCourseCategory] = useState("")
  const [grade, setGrade] = useState("")
  const [subject, setSubject] = useState("")
  const [learningOutComes, setLearningOutComes] = useState("")

  const [openModal, setOpenModal] = useState(false)




  const [validations, setValidations] = useState({
    courseName: {
      errorStatus: "",
      errorMessage: ""
    },

    courseType: {
      errorStatus: "",
      errorMessage: ""
    },

    courseShortDescription: {
      errorStatus: "",
      errorMessage: ""
    },
    courseFullDescription: {
      errorStatus: "",
      errorMessage: ""
    },
    courseCategory: {
      errorStatus: "",
      errorMessage: ""
    },
    grade: {
      errorStatus: "",
      errorMessage: ""
    },
    subject: {
      errorStatus: "",
      errorMessage: ""
    },
    learningOutComes: {
      errorStatus: "",
      errorMessage: ""
    },

  })

  const validateInput = () => {
    let allFieldsValid = true;

    if (courseName === "") {
      setValidations(prev => {
        return { ...prev, courseName: { errorStatus: "yes", errorMessage: "Invalid input" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, courseName: { errorStatus: "", errorMessage: "" } }
      })
    }

    if (courseType === "") {
      setValidations(prev => {
        return { ...prev, courseType: { errorStatus: "yes", errorMessage: "Invalid input" } }
      })

      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, courseType: { errorStatus: "", errorMessage: "" } }
      })
    }

    if (courseShortDescription === "") {
      setValidations(prev => {
        return { ...prev, courseShortDescription: { errorStatus: "yes", errorMessage: "Invalid input" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, courseShortDescription: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }

    if (courseFullDescription === "") {
      setValidations(prev => {
        return { ...prev, courseFullDescription: { errorStatus: "yes", errorMessage: "Invalid input" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, courseFullDescription: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
    if (courseCategory === "") {
      setValidations(prev => {
        return { ...prev, courseCategory: { errorStatus: "yes", errorMessage: "Invalid input" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, courseCategory: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
    if (grade === "") {
      setValidations(prev => {
        return { ...prev, grade: { errorStatus: "yes", errorMessage: "Invalid input" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, grade: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
    if (subject === "") {
      setValidations(prev => {
        return { ...prev, subject: { errorStatus: "yes", errorMessage: "Invalid input" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, subject: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
    if (learningOutComes === "") {
      setValidations(prev => {
        return { ...prev, learningOutComes: { errorStatus: "yes", errorMessage: "Invalid input" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, learningOutComes: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
  }

  const handleAddNewCourse = () => {
    // validateInput()
    setOpenModal(true)
  }



  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100vh", paddingTop: "10px" }}>

      <PageHeadingContainer
        heading="Add New Course"
        subHeading="Some sub heading for this page"
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "50px", maxWidth: { sm: "600px", lg: "1000px" }, width: "100%", height: "100vh", marginLeft: "auto", marginRight: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", lg: "row" }, gap: "20px" }}>
          <TextFields isOutComes={false} label={"Course Name:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />
          <TextFields isOutComes={false} label={"Type of Course:"} errorStatus={validations.courseType.errorStatus} errorMessage={validations.courseType.errorMessage} setState={setCourseType} state={courseType} />
        </Box>
        <TextAreas isOutComes={false} label={"Course Short Description:"} errorStatus={validations.courseShortDescription.errorStatus} errorMessage={validations.courseShortDescription.errorMessage} setState={setCourseShortDescription} state={courseShortDescription} />
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", lg: "row" }, gap: "10px" }}>
          <SelectField inputLabel={"Select Category"} label={"Course Category:"} errorStatus={validations.courseCategory.errorStatus} errorMessage={validations.courseCategory.errorMessage} setState={setCourseCategory} state={courseCategory} />
          <SelectField inputLabel={"Select Grade"} label={"Grade:"} errorStatus={validations.grade.errorStatus} errorMessage={validations.grade.errorMessage} setState={setGrade} state={grade} />
          <SelectField inputLabel={"Select Subject"} label={"Subject:"} errorStatus={validations.subject.errorStatus} errorMessage={validations.subject.errorMessage} setState={setSubject} state={setSubject} />
        </Box>
        <Box>
          <TextFields label={"Learning Outcomes:"} errorStatus={validations.learningOutComes.errorStatus} errorMessage={validations.learningOutComes.errorMessage} setState={setLearningOutComes} state={learningOutComes} />
          <Typography variant='h6' sx={{ color: "primary.light", fontSize: "18px", fontWeight: "500" }}>Outcomes</Typography>
        </Box>
        <TextAreas label={"Course Full Description:"} errorStatus={validations.courseFullDescription.errorStatus} errorMessage={validations.courseFullDescription.errorMessage} setState={setCourseFullDescription} state={courseFullDescription} />
        <MediaFields type='file' label={"Add Video Content:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />
        <Box sx={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px" }}>
          <Button text={"Add Content"} buttonFunction={() => { handleAddNewCourse() }} />
        </Box>
      </Box>
      {openModal && <AddCourseContent setOpenModal={setOpenModal} />}
    </Box>
  )
}

export default AddNewCourse