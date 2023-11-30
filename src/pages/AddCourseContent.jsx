import { Box, Button as ButtonMUI, Drawer, Paper, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import PageHeading from '../Components/PageHeading'
import PageSubHeading from '../Components/PageSubHeading'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import TextFields, { DocumentField, SelectField, TextFieldPassword } from '../Components/TextFields'
import { Add, ArrowBack, ArrowBackRounded, BackHand, Cancel, CloseRounded, Delete, Done, Edit, PlayArrow, PlayArrowRounded, PlayCircleFilledWhiteRounded } from '@mui/icons-material'
import backgroundImage from '../assets/placeholderImg.png'
import MediaFields from '../Components/AddMedia'
import InputFileUpload from '../Components/InputFileUpload'
import Button from '../Components/Buttons';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DoneIcon from '@mui/icons-material/Done';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { saveCourseToFirestore, saveLessonToFirestore, saveTopicToFirestore, updateVideosWithFirebaseURLs, uploadAllVideos, uploadCourseVideos, uploadLessonSupportingDocs } from '../services/firebase'


function AddCourseContent({ setOpenModal, courseDocumentId }) {
    const [lessonName, setLessonName] = useState("")
    const [courseType, setCourseType] = useState("")
    const [courseShortDescription, setCourseShortDescription] = useState("")
    const [courseFullDescription, setCourseFullDescription] = useState("")
    const [courseCategory, setCourseCategory] = useState("")
    const [grade, setGrade] = useState("")
    const [subject, setSubject] = useState("")
    // const [supportingLinks, setSupportingLinks] = useState("")
    const [supportingDocuments, setSupportingDocuments] = useState([])
    const [showBox, setShowBox] = useState(false);
    const [HideBox, setHideBox] = useState(true)
    const [videos, setVideos] = useState([]);
    const [topicName, setTopicName] = useState("")
    const [topicNumber, setTopicNumber] = useState("")
    const [newLesson, setNewLesson] = useState({})
    const [selectedVideoIndex, setSelectedVideoIndex] = useState()
    const [lessonDocumentID, setLessonDocumentID] = useState("")
    const [isLoading, setIsloading] = useState(false);
    const [isLoadingSaveTopic, setIsloadingSaveTopic] = useState(false);
    const [currentVideoPlaying, setCurrentVideoPlaying] = useState("")
    const [editDocumentName, setEditDocumentName] = useState("")
    const [selectedDocumentIndex, setSelectedDocumentIndex] = useState(-1)
    const [supportingLinkText, setSupportingLinkText] = useState("")
    const [supportingLinks, setSupportingLinks] = useState([])
    const [id, setID] = useState('')
    const [show, setShow] = useState(false)



    const handleAddButtonClick = async () => {
        if (lessonName?.trim() === "") {
            alert("Lesson name required!");
            return;
        }

        if (videos.length === 0) {
            alert("Please select videos for this lesson");
            return;
        }
        setNewLesson({
            lessonName: lessonName,
        })
        const lessonDocumentID = await saveLessonToFirestore(courseDocumentId, { lessonName: lessonName, createDate: new Date(), })
        console.log("DOC ID", lessonDocumentID)
        setLessonDocumentID(lessonDocumentID)
        setShowBox(true);
        setHideBox(false)
    };

    const learningOutcomesDelete = (index) => {

        console.log(index);

        if (index >= 0 && index < supportingLinks.length) {
            let updatedOutcomes = [...supportingLinks];
            updatedOutcomes.splice(index, 1);
            console.log('Outcome deleted successfully!');
            setSupportingLinks(updatedOutcomes);
        } else {
            console.log('Invalid index!');
        }
    };

    const editOutcome = (index, learningOutcome) => {
        console.log(index, learningOutcome);


        setSupportingLinkText(learningOutcome)
        setID(index)

        setShow(true)
    };

    const UpdateOutcomes = (newlearningOutcome) => {
        console.log(id, newlearningOutcome);
        let updatedOutcomes = [...supportingLinks];

        if (id >= 0 && id < supportingLinks.length) {


            updatedOutcomes[id] = newlearningOutcome;
            console.log('Outcome edited successfully!');

            setSupportingLinks(updatedOutcomes);
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

        if (lessonName === "") {
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
        if (courseCategory === "") {
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
        if (grade === "") {
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
        if (subject === "") {
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
        if (supportingLinks === "") {
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

    const closeModal = () => {
        setOpenModal(false)
    }

    const handleCurrentSelectedVideo = (index) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const videoURL = reader.result;
            console.log("videoURL", videoURL)
            setCurrentVideoPlaying(videoURL)
        });
        reader.readAsDataURL(videos[index].video);
        setSelectedVideoIndex(index)
    }

    const handleFileChange = (event) => {
        const fileInput = event.target;
        const files = fileInput.files;

        if (files.length > 0) {
            const newVideos = Array.from(files).map((file) => {
                return {
                    topicNumber: '',
                    topicName: '',
                    supportingLinks: [],
                    videoName: file.name,
                    createDate: new Date(),
                    video: file,
                };
            });
            console.log('Videos', newVideos)

            setVideos((prevVideos) => [...prevVideos, ...newVideos]);
        }
    };

    const handleDocumentsChange = (event) => {
        const fileInput = event.target;
        const files = fileInput.files;

        if (files.length > 0) {
            const newSupportingDocs = Array.from(files).map((file) => {
                return {
                    documentName: file.name,
                    document: file,
                    isDefaultNameChanged: false
                };
            });
            console.log('Supporting', newSupportingDocs)

            setSupportingDocuments((prevDocs) => [...prevDocs, ...newSupportingDocs]);
        }
    };



    const handleSaveTopic = async () => {
        if (selectedVideoIndex === undefined) {
            alert('Please select a video to be linked to this topic');
            return;
        }

        try {
            setIsloadingSaveTopic(true)
            console.log("supportinnnnnnnnnn", supportingDocuments);
            let tempVideos = [...videos];
            tempVideos[selectedVideoIndex].topicName = topicName;
            tempVideos[selectedVideoIndex].topicNumber = topicNumber;
            tempVideos[selectedVideoIndex].supportingLinks = [...supportingLinks];
            tempVideos[selectedVideoIndex].supportingDocuments = await uploadLessonSupportingDocs(courseDocumentId, supportingDocuments);
            const fileExt = tempVideos[selectedVideoIndex].videoName.substr(tempVideos[selectedVideoIndex].videoName.lastIndexOf("."))
            tempVideos[selectedVideoIndex].videoName = `${topicName}${fileExt}`;
            setVideos(tempVideos)
            setTopicNumber("")
            setTopicName("")
            setSupportingDocuments([])
            setSupportingLinks([])
        } catch (error) {

        } finally {
            setIsloadingSaveTopic(false)
        }


    }

    const handleSaveAllToCourse = async () => {
        try {
            setIsloading(true);
            const updatedVideos = await uploadCourseVideos(courseDocumentId, videos);

            for (let topicObject of updatedVideos) {

                await saveTopicToFirestore(courseDocumentId, lessonDocumentID, topicObject)
            }
            console.log(updatedVideos)
            setSelectedVideoIndex("")
            setVideos([])
            setTopicName("")
            setTopicNumber("")
            setLessonName("")
            setSupportingLinks([])
            alert("Successfully saved lesson and its topics")
        } catch (error) {
            console.log(error)
        } finally {
            setIsloading(false);
        }
    }

    const handleEditDocumentName = (index) => {
        if (editDocumentName === "") return;

        const tempDocs = [...supportingDocuments];
        console.log('tempDocs', tempDocs)
        const fileExt = tempDocs[index].documentName.substr(tempDocs[index].documentName.lastIndexOf("."))
        tempDocs[index].documentName = `${editDocumentName}${fileExt}`;
        tempDocs[index].isDefaultNameChanged = true;
        console.log(`EditDocument`, tempDocs)
        setSupportingDocuments(tempDocs);
        setSelectedDocumentIndex(-1)
        setEditDocumentName("")
    }

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const isMediumScreen = useMediaQuery('(max-width:900px)')
    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100vh", position: "fixed", zIndex: 100, top: 0, left: 0, backgroundColor: "#fff" }}>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
                {isMediumScreen ? (
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' }, position: "relative", left: "15px", top: "15px", }}
                            style={{ position: "absolute", top: 0, left: 0, zIndex: 100 }}
                        >
                            <MenuIcon color='primary' sx={{ fontSize: "30px", marginBottom: "auto", marginTop: "50px", marginLeft: "30px" }} />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={isDrawerOpen}
                            onClose={handleDrawerToggle}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <Box sx={{ width: { xs: "300px", sm: "500px" }, height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "primary.light" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <ButtonMUI sx={{ marginRight: "auto", marginTop: "20px" }} onClick={closeModal}>
                                        <ArrowBackRounded sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100, }} />
                                    </ButtonMUI>
                                    <ButtonMUI sx={{ marginLeft: "auto", marginTop: "20px" }} onClick={closeDrawer}>
                                        <Cancel sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100, }} />
                                    </ButtonMUI>
                                </Box>
                                <Box sx={{ marginTop: "100px", marginBottom: "auto", height: "73%", border: "1px dashed red" }}>
                                    <Box sx={{ display: "flex", flexDirection: "row", gap: "15px", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
                                        <PlayArrowRounded sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100 }} />
                                        <Typography sx={{ color: "#fff", fontWeight: "semi-bold", fontSize: "1.5rem" }}>Videos</Typography>
                                    </Box>
                                    {
                                        videos &&
                                        videos.map((videoObj, index) => {
                                            return (
                                                <Box key={index} onClick={() => handleCurrentSelectedVideo(index)} variant="text" sx={{ cursor: "pointer", display: "flex", flexDirection: "row", border: selectedVideoIndex === index ? "1px dashed orange" : "none", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", marginTop: "20px", color: videoObj.topicName !== "" ? "#0f0" : "#fff", textTransform: 'none', }} >
                                                    <PlayArrow sx={{ color: "#fff", }} />
                                                    <Typography>{videoObj.videoName}</Typography>
                                                </Box>
                                            )
                                        })
                                    }

                                </Box>
                                <ButtonMUI variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", justifyContent: "center", color: "#fff", textTransform: 'none', }} >
                                    <Add sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100 }} />
                                    Add More
                                </ButtonMUI>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ width: "15%", height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "primary.light" }}>
                        <ButtonMUI sx={{ marginRight: "auto", marginTop: "20px" }} onClick={closeModal}>
                            <ArrowBackRounded sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100, }} />
                        </ButtonMUI>
                        <Box sx={{ marginTop: "100px", marginBottom: "auto", height: "73%", border: "1px dashed red" }}>
                            <Box sx={{ display: "flex", flexDirection: "row", gap: "15px", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
                                <PlayArrowRounded sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100 }} />
                                <Typography sx={{ color: "#fff", fontWeight: "semi-bold", fontSize: "1.5rem" }}>Videos</Typography>
                            </Box>
                            {
                                videos &&
                                videos.map((videoObj, index) => {
                                    return (
                                        <Box key={index} onClick={() => handleCurrentSelectedVideo(index)} variant="text" sx={{ cursor: "pointer", display: "flex", flexDirection: "row", border: selectedVideoIndex === index ? "1px dashed orange" : "none", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", marginTop: "20px", color: videoObj.topicName !== "" ? "#0f0" : "#fff", textTransform: 'none', }} >
                                            <PlayArrow sx={{ color: "#fff", }} />
                                            <Typography>{videoObj.videoName}</Typography>
                                        </Box>
                                    )
                                })
                            }

                        </Box>
                        <ButtonMUI variant="text" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", width: "100%", marginBottom: "20px", justifyContent: "center", color: "#fff", textTransform: 'none', }} >
                            <Add sx={{ backgroundColor: "#fff", color: "primary.light", borderRadius: 100 }} />
                            Add More
                        </ButtonMUI>
                    </Box>
                )}

                <Box sx={{ width: { xs: "100%", sm: "100%", md: "85%", lg: "85%" }, height: "100vh", display: "flex", flexDirection: "column", paddingTop: "50px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "auto", textAlign: "right", paddingRight: "30px", }}>
                        <Typography variant='h6' sx={{ color: "primary.main" }}>Course Content</Typography>
                        <Typography variant='h6' sx={{ fontSize: "16px", width: { xs: "60%", sm: "100%", md: "100%", lg: "100%" }, textAlign: { xs: "right" }, marginLeft: "auto" }}>Lorem ipsum dolor sit amet, consectetur </Typography>
                    </Box>
                    {HideBox && (
                        <Box sx={{ padding: "30px" }}>
                            <Box sx={{ display: "flex", flexDirection: { lg: "row", md: "column", xs: "column" }, gap: "30px", alignItems: "center" }}>

                                <TextFields isOutComes={false} label={"Lesson Name:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setLessonName} state={lessonName} />
                                <InputFileUpload handleFileChange={handleFileChange} label={"Select Lesson Content"} />
                            </Box>

                            <Box sx={{
                                width: "fit-content",
                                height: "fit-content",
                                marginTop: "30px",
                                marginBottom: "40px",
                            }}>
                                <Button text={"Add Topics"} buttonFunction={() => { handleAddButtonClick() }} iconType='loader' />
                            </Box>
                        </Box>
                    )}
                    {showBox && (
                        <Box sx={{ width: "100%", height: "90vh", marginTop: "30px", padding: "30px", overflow: "scroll" }}>
                            <Box sx={{ width: "100%", display: "flex", flexDirection: { sm: "column", lg: "row", md: "column", xs: "column" }, maxWidth: "1500px", alignItems: "center", justifyContent: { md: "center", lg: "space-between", gap: "30px" } }}>

                                <Box sx={{ width: { lg: "40%", md: "70%", sm: "90%", xs: "90%" }, height: "40vh" }}>
                                    {
                                        currentVideoPlaying ?
                                            (
                                                <video controls src={currentVideoPlaying} width="100%" height="85%" />
                                            )
                                            :
                                            (
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
                                            )
                                    }


                                </Box>
                                <Box sx={{ maxWidth: "700px", width: { lg: "60%", md: "70%", sm: "90%", xs: "90%" }, display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <Box sx={{ display: "flex", flexDirection: { lg: "row", md: "column", xs: "column" }, gap: "30px" }}>

                                        <TextFields isOutComes={false} label={"Topic Number:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setTopicNumber} state={topicNumber} />
                                        <TextFields isOutComes={false} label={"Topic Name:"} errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setTopicName} state={topicName} />

                                    </Box>
                                    {/* <TextFields label={"Supporting Links:"} errorStatus={validations.learningOutComes.errorStatus} errorMessage={validations.learningOutComes.errorMessage} setState={setSupportingLinks} state={supportingLinks} /> */}
                                    <Box>
                                        <TextFields isOutComes={true} show={show} label={"SupportingLinks:"} errorStatus={validations.learningOutComes.errorStatus} errorMessage={validations.learningOutComes.errorMessage} setState={setSupportingLinkText} state={supportingLinkText} addOutcomes={setSupportingLinks} editOutcome={() => { UpdateOutcomes(supportingLinkText) }} />
                                        <Typography variant='h6' sx={{ color: "primary.light", fontSize: "18px", fontWeight: "500" }}>Supporting Links</Typography>
                                        {
                                            supportingLinks.map((value, index) => {
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

                                    <InputFileUpload handleFileChange={handleDocumentsChange} label={"Add Supporting Documents"} />
                                    {
                                        supportingDocuments &&
                                        supportingDocuments.map((document, index) => {
                                            return (
                                                <Box key={index} variant="text" sx={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1px", width: "100%", marginBottom: "0px", marginTop: "5px", color: "primary.main", textTransform: 'none', }} >
                                                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: "5px" }} onClick={() => setSelectedDocumentIndex(index)}>
                                                        {
                                                            document.isDefaultNameChanged ?
                                                                <CircleIcon fontSize='small' sx={{ color: "primary.main" }} />
                                                                :
                                                                <CircleOutlinedIcon fontSize='small' sx={{ color: "primary.main" }} />
                                                        }
                                                        <Typography variant='body'>{document.documentName}</Typography>
                                                    </Box>
                                                    {
                                                        selectedDocumentIndex === index &&
                                                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px", marginTop: "5px" }}>
                                                            <TextFields isOutComes={false} label="" errorStatus={validations.courseName.errorStatus} errorMessage={validations.courseName.errorMessage} setState={setEditDocumentName} state={editDocumentName} />
                                                            <IconButton onClick={() => { handleEditDocumentName(index) }}>
                                                                <SaveIcon fontSize='large' sx={{ color: "primary.main" }} />
                                                            </IconButton>
                                                        </Box>
                                                    }

                                                </Box>
                                            )
                                        })
                                    }
                                </Box>

                            </Box>
                            <Box sx={{ width: "100%", display: "flex", alignItems: { lg: "start", md: "center", }, justifyContent: { lg: "start", md: "center" } }}>
                                <Box sx={{
                                    color: "#fff",
                                    width: "fit-content",
                                    borderRadius: 20,
                                    height: "fitcontent",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    marginTop: "30px",

                                    marginLeft: { lg: "175px", md: "170px", sm: "auto", xs: "auto" },
                                    marginRight: { lg: "0", md: "0", sm: "auto", xs: "auto" }

                                }}>
                                    <Button text={"Save Topic"} buttonFunction={() => { handleSaveTopic() }} isIconButton={isLoadingSaveTopic} iconType='loader' />
                                </Box>
                            </Box>
                        </Box>
                    )}
                    <Box sx={{ width: "100%", height: "10vh", display: "flex", backgroundColor: "primary.light", marginTop: "auto" }}>
                        <Box sx={{ marginTop: "30px", marginLeft: "auto", marginRight: "20px", }}>
                            <Button text={"Save All"} buttonFunction={() => { handleSaveAllToCourse() }} isIconButton={isLoading} iconType='loader' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AddCourseContent