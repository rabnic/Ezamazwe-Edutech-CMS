import { Box, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import TextFields, { TextAreas } from '../Components/TextFields'
import Button from '../Components/Buttons';
import AddCourseContent from './AddCourseContent'
import { getCategoryData, saveCourseToFirestore } from '../services/firebase'
import SelectField from '../Components/SelectField'
import { Delete, Edit } from '@mui/icons-material'
import SnackBar from '../Components/SnackBar';
import AddNewGradeDialog from '../Components/AddGradeDialog';
import AddNewSubjectDialog from '../Components/AddSubjectDialog';


function AddNewCourse() {
  const [courseName, setCourseName] = useState("")
  const [courseType, setCourseType] = useState("")
  const [courseShortDescription, setCourseShortDescription] = useState("")
  const [courseFullDescription, setCourseFullDescription] = useState("")


  const [supportingLink, setSupportingLink] = useState("")
  const [savedLearningOutcomes, setSavedLearningOutcomes] = useState([])
  const [id, setID] = useState('')
  const [show, setShow] = useState(false)

  const [courseDocumentId, setCourseDocumentId] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsloading] = useState(false);

  const [categories, setCategories] = useState([])

  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [snackBarStatus, setSnackBarStatus] = useState({ isOpen: false })

  const [isShowGradeDialog, setIsShowGradeDialog] = useState(false);
  const [isShowSubjectDialog, setIsShowSubjectDialog] = useState(false);

  useEffect(() => {
    fetchCategoryData()
  }, [])

  useEffect(() => {
    setSelectedSubject("")
  }, [selectedGrade])

  useEffect(() => {
    setSelectedSubject("")
    setSelectedGrade("")
  }, [selectedCategory])



  const fetchCategoryData = async () => {
    await getCategoryData().then(data => {
      setCategories(data)
    })
  }

  const categoryNames = () => {
    return Object.keys(categories).map(key => {
      return { [key]: categories[key].name }

    })
  }

  const grades = (key) => {
    return categories[key]?.grades || [];
  };

  const subjects = (key, grade) => {
    if (categories[key] && categories[key].subjects && categories[key].subjects[grade]) {
      return categories[key].subjects[grade];
    }
    return [];
  };


  const learningOutcomesDelete = (index) => {

    console.log(index);

    if (index >= 0 && index < savedLearningOutcomes.length) {
      let updatedOutcomes = [...savedLearningOutcomes];
      updatedOutcomes.splice(index, 1);
      console.log('Outcome deleted successfully!');
      setSavedLearningOutcomes(updatedOutcomes);
    } else {
      console.log('Invalid index!');
    }
  };

  const editOutcome = (index, learningOutcome) => {
    console.log(index, learningOutcome);


    setSupportingLink(learningOutcome)
    setID(index)

    setShow(true)
  };

  const UpdateOutcomes = (newlearningOutcome) => {
    console.log(id, newlearningOutcome);
    let updatedOutcomes = [...savedLearningOutcomes];

    if (id >= 0 && id < savedLearningOutcomes.length) {


      updatedOutcomes[id] = newlearningOutcome;
      console.log('Outcome edited successfully!');

      setSavedLearningOutcomes(updatedOutcomes);
      setShow(false)

    } else {
      console.log('Invalid index!');
    }
  };

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
        return { ...prev, courseName: { errorStatus: "yes", errorMessage: "Input required" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, courseName: { errorStatus: "", errorMessage: "" } }
      })
    }

    if (courseType === "") {
      setValidations(prev => {
        return { ...prev, courseType: { errorStatus: "yes", errorMessage: "Input required" } }
      })

      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, courseType: { errorStatus: "", errorMessage: "" } }
      })
    }

    if (courseShortDescription === "") {
      setValidations(prev => {
        return { ...prev, courseShortDescription: { errorStatus: "yes", errorMessage: "Input required" } }
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
        return { ...prev, courseFullDescription: { errorStatus: "yes", errorMessage: "Input required" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, courseFullDescription: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
    if (selectedCategory === "") {
      setValidations(prev => {
        return { ...prev, courseCategory: { errorStatus: "yes", errorMessage: "Input required" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, courseCategory: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
    if (selectedGrade === "") {
      setValidations(prev => {
        return { ...prev, grade: { errorStatus: "yes", errorMessage: "Input required" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, grade: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
    if (selectedSubject === "") {
      setValidations(prev => {
        return { ...prev, subject: { errorStatus: "yes", errorMessage: "Input required" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, subject: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
    if (savedLearningOutcomes.length < 1) {
      setValidations(prev => {
        return { ...prev, learningOutComes: { errorStatus: "yes", errorMessage: "Input required" } }
      })
      allFieldsValid = false;

    } else {
      setValidations(prev => {
        return { ...prev, learningOutComes: { errorStatus: "", errorMessage: "" } }
      })
      return allFieldsValid;
    }
  }

  const handleAddNewCourse = async () => {
    const isAllFieldsValid = validateInput()
    if (!isAllFieldsValid) return
    try {
      setIsloading(true)
      const courseObject = {
        courseName: courseName,
        courseType: courseType,
        courseShortDescription: courseShortDescription,
        courseFullDescription: courseFullDescription,
        courseCategory: selectedCategory,
        grade: selectedGrade,
        subject: selectedSubject,
        learningOutcomes: savedLearningOutcomes,
        createDate: new Date()
      }

      const courseId = await saveCourseToFirestore(courseObject);
      setCourseDocumentId(courseId);
      setCourseName("")
      setCourseType("")
      setCourseShortDescription("")
      setCourseFullDescription("")
      setSupportingLink("")
      setSavedLearningOutcomes([])
      setID("")
      setShow(false)
      setSelectedCategory("")
      setSelectedGrade("")
      setSelectedSubject("")
      setSnackBarStatus({ isOpen: true, message: "Course initialised successfully!" })
      setOpenModal(true)
    } catch (error) {

    } finally {
      setSnackBarStatus({ isOpen: false })

      setIsloading(false)
    }

  }


  return (
    <>
      <SnackBar status={snackBarStatus} />

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100vh", paddingTop: "10px", marginLeft: "auto", marginRight: "auto" }}>

        <PageHeadingContainer
          heading="Add New Course"
          subHeading="Some sub heading for this page"
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "50px", maxWidth: { sm: "600px", lg: "1000px" }, width: "100%", height: "100vh", marginLeft: "auto", marginRight: "auto" }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", lg: "row" }, gap: { xs: "30px", sm: "2px", md: "8px", lg: "20px" } }}>
            <TextFields isOutComes={false} placeholder='E.g Calculus' label={"Course Name:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />

            <SelectField inputLabel={"Select Type"} label={"Select Type:"} errorStatus={validations.courseType.errorStatus} errorMessage={validations.courseType.errorMessage} setState={setCourseType} state={courseType}>
              <MenuItem value="Free">Free</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
            </SelectField>
          </Box>
          <TextAreas isOutComes={false} label={"Course Short Description:"} errorStatus={validations.courseShortDescription.errorStatus} errorMessage={validations.courseShortDescription.errorMessage} setState={setCourseShortDescription} state={courseShortDescription} />
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", lg: "row" }, gap: "30px" }}>
            <SelectField inputLabel={"Select Category"} label={"Course Category:"} errorStatus={validations.courseCategory.errorStatus} errorMessage={validations.courseCategory.errorMessage} setState={setSelectedCategory} state={selectedCategory}>
              {categories &&
                Object.entries(categories).map(([key, object]) => {
                  return (
                    <MenuItem key={key} value={object.id}>
                      {object.name}
                    </MenuItem>
                  );
                })}
            </SelectField>
            <SelectField inputLabel={"Select Grade"} label={"Course Grade:"} errorStatus={validations.courseCategory.errorStatus} errorMessage={validations.courseCategory.errorMessage} setState={setSelectedGrade} setIsShowGradeDialog={setIsShowGradeDialog} state={selectedGrade} isDisabled={selectedCategory === ""}>
              {selectedCategory && grades(selectedCategory).map((value, index) => {
                console.log(value, index)
                return (
                  <MenuItem key={index} value={value.replace(" ", "_")}>
                    {value}
                  </MenuItem>
                );
              })}
              <MenuItem key={grades(selectedCategory).length} value={"addNewGrade"}>
                * Add New Item
              </MenuItem>
            </SelectField>
            <SelectField inputLabel={"Select Subject"} label={"Course Subject:"} errorStatus={validations.courseCategory.errorStatus} errorMessage={validations.courseCategory.errorMessage} setState={setSelectedSubject} setIsShowSubjectDialog={setIsShowSubjectDialog} state={selectedSubject} isDisabled={selectedCategory === "" || selectedGrade === "" || selectedGrade === "addNewGrade"}>
              {selectedCategory &&
                selectedGrade &&
                subjects(selectedCategory, selectedGrade).map((value, index) => {
                  return (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
              <MenuItem key={subjects(selectedCategory, selectedGrade).length} value={"addNewSubject"}>
                * Add New Item
              </MenuItem>
            </SelectField>
          </Box>
          {
            isShowGradeDialog &&
            <AddNewGradeDialog isShowGradeDialog={isShowGradeDialog} setIsShowGradeDialog={setIsShowGradeDialog} categoryID={selectedCategory} refreshData={fetchCategoryData} />
          }
          {
            isShowSubjectDialog &&
            <AddNewSubjectDialog isShowSubjectDialog={isShowSubjectDialog} setIsShowSubjectDialog={setIsShowSubjectDialog} gradeKey={selectedGrade} categoryID={selectedCategory} refreshData={fetchCategoryData} />
          }
          <Box>
            <TextFields isOutComes={true} show={show} label={"Learning Outcomes:"} errorStatus={validations.learningOutComes.errorStatus} errorMessage={validations.learningOutComes.errorMessage} setState={setSupportingLink} state={supportingLink} addOutcomes={setSavedLearningOutcomes} editOutcome={() => { UpdateOutcomes(supportingLink) }} />
            {
              savedLearningOutcomes.length > 0 &&
              (
                <Typography variant='h6' sx={{ color: "primary.light", fontSize: "18px", fontWeight: "500" }}>Outcomes</Typography>

              )
            }
            {
              savedLearningOutcomes.map((value, index) => {
                return (
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <li key={index}>
                      </li>
                      <span style={{ color: "#000", fontSize: "20px", position: "relative", marginLeft: "0px" }}>
                        {value}
                      </span>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                      <Edit sx={{ color: "primary.main" }} onClick={(e) => { editOutcome(index, value) }} />
                      <Delete sx={{ color: "primary.main" }} onClick={(e) => { learningOutcomesDelete(index) }} />
                    </Box>
                  </Box>
                )
              })
            }
          </Box>
          <TextAreas label={"Course Full Description:"} errorStatus={validations.courseFullDescription.errorStatus} errorMessage={validations.courseFullDescription.errorMessage} setState={setCourseFullDescription} state={courseFullDescription} />
          <Box sx={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px" }}>
            <Button text={"Add Content"} buttonFunction={() => { handleAddNewCourse() }} isIconButton={isLoading} iconType='loader' />

          </Box>
        </Box>
        {openModal && <AddCourseContent setOpenModal={setOpenModal} courseDocumentId={courseDocumentId} setCourseDocumentId={setCourseDocumentId} />}
      </Box >
    </>
  )
}

export default AddNewCourse