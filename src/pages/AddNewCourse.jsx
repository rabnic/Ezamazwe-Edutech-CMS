import { Box, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeading from '../Components/PageHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import TextFields, { OutcomesFields, SelectFieldGrade, TextAreas } from '../Components/TextFields'
import Button from '../Components/Buttons';
import AddCourseContent from './AddCourseContent'
import MediaFields from '../Components/AddMedia'
import { getCategoryData, saveCourseToFirestore } from '../services/firebase'
import SelectField from '../Components/SelectField'
import { Delete, Edit } from '@mui/icons-material'


function AddNewCourse() {
  const [courseName, setCourseName] = useState("")
  const [courseType, setCourseType] = useState("")
  const [courseShortDescription, setCourseShortDescription] = useState("")
  const [courseFullDescription, setCourseFullDescription] = useState("")
  const [courseCategory, setCourseCategory] = useState("")
  const [grade, setGrade] = useState("")
  const [subject, setSubject] = useState("")

  const [learningOutCome, setLearningOutCome] = useState("")
  const [savedLearningOutcomes, setSavedLearningOutcomes] = useState([])
  const [id, setID] = useState('')
  const [show, setShow] = useState(false)

  const [courseDocumentId, setCourseDocumentId] = useState("")
  const [openModal, setOpenModal] = useState(false)

  const [categories, setCategories] = useState()

  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")


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


  // const handleBlur = (id, newlearningOutcome) => {
  //   learningOutcomesUpdate(id, newlearningOutcome);
  // };


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


    setLearningOutCome(learningOutcome)
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
    if (learningOutCome === "") {
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

  const handleAddNewCourse = async () => {
    const isAllFieldsValid = validateInput()
    if (!isAllFieldsValid) return

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

    if (courseDocumentId === "") {
      const courseId = await saveCourseToFirestore(courseObject);
      setCourseDocumentId(courseId);
    }


    setOpenModal(true)
  }

  const handleFileChange = (event) => {
    const fileInput = event.target;
    const files = fileInput.files;

    if (files.length > 0) {
      const newVideos = Array.from(files).map((file) => {
        return {
          topicNumber: '', // Set your desired default values
          topicName: '',
          supportingLinks: [],
          videoName: file.name,
          video: URL.createObjectURL(file),
        };
      });

    }
  };

  console.log("Outcomes", savedLearningOutcomes)

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100vh", paddingTop: "10px", marginLeft: "auto", marginRight: "auto" }}>

      <PageHeadingContainer
        heading="Add New Course"
        subHeading="Some sub heading for this page"
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", marginTop: "50px", maxWidth: { sm: "600px", lg: "1000px" }, width: "100%", height: "100vh", marginLeft: "auto", marginRight: "auto" }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", lg: "row" }, gap: { xs: "30px", sm: "2px", md: "8px", lg: "20px" } }}>
          <TextFields isOutComes={false} label={"Course Name:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />
          <TextFields isOutComes={false} label={"Type of Course:"} errorStatus={validations.courseType.errorStatus} errorMessage={validations.courseType.errorMessage} setState={setCourseType} state={courseType} />
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
          <SelectField inputLabel={"Select Grade"} label={"Course Grade:"} errorStatus={validations.courseCategory.errorStatus} errorMessage={validations.courseCategory.errorMessage} setState={setSelectedGrade} state={selectedGrade} isDisabled={selectedCategory === ""}>
            {selectedCategory && grades(selectedCategory).map((value, index) => {
              console.log(value, index)
              return (
                <MenuItem key={index} value={value.replace(" ", "_")}>
                  {value}
                </MenuItem>
              );
            })}
          </SelectField>
          <SelectField inputLabel={"Select Subject"} label={"Course Subject:"} errorStatus={validations.courseCategory.errorStatus} errorMessage={validations.courseCategory.errorMessage} setState={setSelectedSubject} state={selectedSubject} isDisabled={selectedCategory === "" || selectedGrade === ""}>
            {selectedCategory &&
              selectedGrade &&
              subjects(selectedCategory, selectedGrade).map((value, index) => {
                return (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
          </SelectField>
        </Box>
        <Box>
          <TextFields isOutComes={true} show={show} label={"Learning Outcomes:"} errorStatus={validations.learningOutComes.errorStatus} errorMessage={validations.learningOutComes.errorMessage} setState={setLearningOutCome} state={learningOutCome} addOutcomes={setSavedLearningOutcomes} editOutcome={() => { UpdateOutcomes(learningOutCome) }} />
          <Typography variant='h6' sx={{ color: "primary.light", fontSize: "18px", fontWeight: "500" }}>Outcomes</Typography>
          {
            savedLearningOutcomes.map((value, index) => {
              return (
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <li key={index}>
                    </li>
                    <span style={{ color: "#000", fontSize: "20px", position: "relative", marginLeft: "-30px" }}>
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
        {/* <InputFileUpload handleFileChange={handleFileChange} label={"Add Video Content"} /> */}
        <Box sx={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px" }}>
          <Button text={"Add Content"} buttonFunction={() => { handleAddNewCourse() }} />
        </Box>
      </Box>
      {openModal && <AddCourseContent setOpenModal={setOpenModal} courseDocumentId={courseDocumentId} />}
    </Box >
  )
}

export default AddNewCourse