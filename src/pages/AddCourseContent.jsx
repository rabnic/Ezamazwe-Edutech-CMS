import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PageHeading from '../Components/PageHeading'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import TextFields, { DocumentField, SelectField, TextFieldPassword } from '../Components/TextFields'
import { Add, ArrowBack, ArrowBackRounded, BackHand, CloseRounded, PlayArrow, PlayArrowRounded, PlayCircleFilledWhiteRounded } from '@mui/icons-material'
import backgroundImage from '../assets/placeholderImg.png'
import MediaFields from '../Components/AddMedia'


function AddCourseContent({ setOpenModal }) {
    const [courseName, setCourseName] = useState("")
    const [courseType, setCourseType] = useState("")
    const [courseShortDescription, setCourseShortDescription] = useState("")
    const [courseFullDescription, setCourseFullDescription] = useState("")
    const [courseCategory, setCourseCategory] = useState("")
    const [grade, setGrade] = useState("")
    const [subject, setSubject] = useState("")
    const [learningOutComes, setLearningOutComes] = useState("")






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


    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", position: "fixed", zIndex: 100, top: 0, left: 0, backgroundColor: "#fff" }}>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
                <Box sx={{ width: "15%", height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "primary.light" }}>
                    <Button sx={{ marginRight: "auto", marginTop: "20px" }}>
                        <ArrowBackRounded sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100, }} />
                    </Button>
                    <Box sx={{ marginTop: "150px", marginBottom: "auto", }}>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "15px", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
                            <PlayArrowRounded sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100 }} />
                            <Typography sx={{ color: "#fff", fontWeight: "semi-bold", fontSize: "1.5rem" }}>Videos</Typography>
                        </Box>
                        <Box variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", marginTop: "20px", justifyContent: "center", color: "#fff", textTransform: 'none', }} >
                            <PlayArrow sx={{ color: "#fff", }} />
                            <Typography>Video Name</Typography>
                        </Box>
                        <Box variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", marginTop: "20px", justifyContent: "center", color: "#fff", textTransform: 'none', }} >
                            <PlayArrow sx={{ color: "#fff", }} />
                            <Typography>Video Name</Typography>
                        </Box>
                        <Box variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", marginTop: "20px", justifyContent: "center", color: "#fff", textTransform: 'none', }} >
                            <PlayArrow sx={{ color: "#fff", }} />
                            <Typography>Video Name</Typography>
                        </Box>
                        <Box variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", marginTop: "20px", justifyContent: "center", color: "#fff", textTransform: 'none', }} >
                            <PlayArrow sx={{ color: "#fff", }} />
                            <Typography>Video Name</Typography>
                        </Box>
                        <Box variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", marginTop: "20px", justifyContent: "center", color: "#fff", textTransform: 'none', }} >
                            <PlayArrow sx={{ color: "#fff", }} />
                            <Typography>Video Name</Typography>
                        </Box>
                        <Box variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", marginTop: "20px", justifyContent: "center", color: "#fff", textTransform: 'none', }} >
                            <PlayArrow sx={{ color: "#fff", }} />
                            <Typography>Video Name</Typography>
                        </Box>
                    </Box>
                    <Button variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", justifyContent: "center", color: "#fff", textTransform: 'none', }} >
                        <Add sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100 }} />
                        Add More
                    </Button>
                </Box>
                <Box sx={{ width: "85%", height: "100vh", display: "flex", flexDirection: "column", paddingTop: "50px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "auto", textAlign: "right", paddingRight: "30px", }}>
                        <Typography variant='h6' sx={{ color: "primary.main" }}>Course Content</Typography>
                        <Typography variant='h6' sx={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetur </Typography>
                    </Box>
                    <Box sx={{ width: "100%", height: "90vh", marginTop: "60px", padding: "30px", overflow: "scroll" }}>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: { lg: "row", md: "column" }, maxWidth: "1500px", alignItems: "center", marginLeft: "auto", marginRight: "auto", justifyContent: { md: "center", lg: "space-between", gap: "30px" } }}>
                            <Box sx={{ width: { lg: "40%", md: "70%" }, height: "50vh" }}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${backgroundImage})`,
                                        backgroundRepeat: "no-repeat",
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundSize: "cover"


                                    }}
                                >
                                    <PlayArrowRounded sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100, fontSize: "100px" }} />

                                </Box>
                            </Box>
                            <Box sx={{ maxWidth: "700px", width: { lg: "60%", md: "70%" }, marginRight: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
                                <Box sx={{ display: "flex", flexDirection: { lg: "row", md: "column" }, gap: "30px" }}>

                                    <TextFields isOutComes={false} label={"Video Name:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />
                                    <SelectField label={"Lessons:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />

                                </Box>
                                <TextFields isOutComes={false} label={"Lesson Number:"} errorStatus={validations.courseType.errorStatus} errorMessage={validations.courseType.errorMessage} setState={setCourseType} state={courseType} />
                                <TextFields label={"Supporting Links:"} errorStatus={validations.learningOutComes.errorStatus} errorMessage={validations.learningOutComes.errorMessage} setState={setLearningOutComes} state={learningOutComes} />
                                <MediaFields type='file' label={"Add Supporting Documents:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />
                            </Box>

                        </Box>
                        <Button variant='contained' sx={{
                            backgroundColor: "primary.light",
                            color: "#fff",
                            width: "30%",
                            borderRadius: 20,
                            height: "50px",
                            fontSize: "18px",
                            fontWeight: "500",
                            marginTop: "30px",

                            marginLeft: { lg: "30px", md: "10px" }
                        }}>Save
                        </Button>
                    </Box>
                    {/* <Box sx={{ width: "100%",  display: "flex", flexDirection: "row", justifyContent: "center", gap: "50px", marginTop: "60px" }}>
                        <Box sx={{ width: "40%", height: "50vh", marginLeft: "30px", }}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${backgroundImage})`,
                                    backgroundRepeat: "no-repeat",
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundSize: "cover"


                                }}
                            >
                                <PlayArrowRounded sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100, fontSize: "100px" }} />

                            </Box>
                        </Box>

                        <Box sx={{ maxWidth: "700px", width: "60%", marginRight: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
                            <Box sx={{ display: "flex", flexDirection: { lg: "row", md: "column" }, gap: "30px" }}>

                                <TextFields isOutComes={false} label={"Video Name:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />
                                <SelectField label={"Lessons:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />

                            </Box>
                            <TextFields isOutComes={false} label={"Lesson Number:"} errorStatus={validations.courseType.errorStatus} errorMessage={validations.courseType.errorMessage} setState={setCourseType} state={courseType} />
                            <TextFields label={"Supporting Links:"} errorStatus={validations.learningOutComes.errorStatus} errorMessage={validations.learningOutComes.errorMessage} setState={setLearningOutComes} state={learningOutComes} />
                            <MediaFields type='file' label={"Add Supporting Documents:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setCourseName} state={courseName} />
                        </Box>

                    </Box>

                    <Button variant='contained' sx={{
                        backgroundColor: "primary.light",
                        color: "#fff",
                        width: "30%",
                        borderRadius: 20, minWidth: "150px",
                        height: "50px",
                        // marginTop: "50px",
                        // marginLeft: "auto",
                        // marginRight: "auto",
                        left: "30px",
                        marginBottom: "3000px",
                        fontSize: "18px",
                        fontWeight: "500"
                    }}>Save</Button> */}

                    <Box sx={{ width: "100%", height: "10vh", display: "flex", backgroundColor: "primary.light", marginTop: "auto" }}>
                        <Button variant='contained' sx={{
                            backgroundColor: "#fff",
                            color: "primary.main",
                            width: { sm: "150px", md: "200px", lg: "230px" },
                            borderRadius: 20, minWidth: "150px",
                            height: "36.5px",
                            marginLeft: "auto",
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginRight: "20px",
                            fontSize: "18px",
                            fontWeight: "500"
                        }}
                        >
                            Save All
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AddCourseContent