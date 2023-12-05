import React, { useEffect, useState } from 'react'
import Button from '../Components/Buttons';
import { Alert, Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses, } from '@mui/material';
// import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import TextFields from '../Components/TextFields';
import PageHeading from '../Components/PageHeading';
import PageSubHeading from '../Components/PageSubHeading';
import PageHeadingContainer from '../Components/PageHeadingContainer';
import PhoneNumber, { parsePhoneNumberFromString } from 'libphonenumber-js';
import { createNewAdmin, database } from '../services/firebase';
import TableLayout from '../Components/TableLayout';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import AlertDialog from '../Components/AlertDialog';


function AdminManagement() {
    const [isShowForm, setIsShowForm] = useState(false)
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isLoading, setIsloading] = useState(false);
    const [statusAlert, setStatusAlert] = useState({ show: false, message: "", severity: "" });
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false)
    const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false)
    const [isUnderEdit, setIsUnderEdit] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^(\+27|0)[1-9]\d{8}$/;

    const [adminList, setAdminList] = useState([]);
    const [id, setID] = useState('')

    const adminCollection = collection(database, "admins")

    useEffect(() => {
        getAdminList()
    }, [])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#1C3F53",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];


    const [validations, setValidations] = useState({
        fullName: {
            errorStatus: "",
            errorMessage: ""
        },

        email: {
            errorStatus: "",
            errorMessage: ""
        },

        phoneNumber: {
            errorStatus: "",
            errorMessage: ""
        },

    })

    const warningMessages = ["* Input is required", "* Incorrect email or password", "* Invalid email", "* Please enter a 10-digit number starting with +27."]

    // Invalid phone number. Please enter a 10-digit number starting with +27.

    //creates new admin
    const newUsers = async (e,) => {

        e.preventDefault();

        alert("User has been registered successfully")

        // CreateNewUser(email, firstName, lastName, phoneNumber, role, image)
        const newAdmin = { fullName: fullName, phoneNumber: phoneNumber, email: email, }
        await addDoc(adminCollection, { fullName: fullName, phoneNumber: phoneNumber, email: email, })
        // const docRef = await setDoc(doc(database, "admins", email), newAdmin)
        // console.log("Doc Reff ===== ",docRef);

    };

    //deletes admin
    const deleteAdmin = async (id) => {

        const admin = doc(database, "admins", id);
        await deleteDoc(admin);
        alert("This item was deleted")
        getAdminList()

    }

    //edit admin
    const editAdmin = async (id, fullName, phoneNumber, email,) => {
        setFullName(fullName)
        setEmail(email)
        setPhoneNumber(phoneNumber)
        setID(id)

        handleToggleForm()

    };


    //udates admin with new information
    const handleUpdateAdmin = async () => {

        const allFieldsValid = validateInput()
        if (!allFieldsValid) return;

        try {
            setIsloading(true)
            // const responseData = await createNewAdmin(email, fullName, phoneNumber)
            // console.log("response", responseData)

            // if (responseData === null) {
            //     setStatusAlert(
            //         {
            //             show: true,
            //             message: "Could not create admin",
            //             severity: "error"
            //         }
            //     )
            // } else if (responseData.error) {

            //     setStatusAlert(
            //         {
            //             show: true,
            //             message: responseData.error,
            //             severity: "error"
            //         }
            //     )
            // } else if (responseData.message) {


            //     setStatusAlert(
            //         {
            //             show: true,
            //             message: "You have successfully created a new admin and default password has been sent to email address",
            //             severity: "success"
            //         }
            //     )
            // }
        } catch (error) {
            console.log('Error creating admin', error)
            setStatusAlert(
                {
                    show: true,
                    message: "Could not create admin",
                    severity: "error"
                }
            )
        } finally {
            setIsloading(false)
        }
        alert("Item was updated")
        // setShow(false)


    };


    //gets information from firestore
    const getAdminList = async () => {

        //get data from database 
        try {
            const data = await getDocs(adminCollection);

            const filtereddata = data.docs.map((doc) => ({

                //this fucntion  returns the values in the collection
                ...doc.data(),
                id: doc.id,

            }));

            setAdminList(filtereddata);
            // setShoppingList(data);

            console.log(filtereddata);
        } catch (error) {
            console.error("Error fetching collection", error);
        }
    };




    const handleCreateAdmin = async () => {
        const allFieldsValid = validateInput()
        if (!allFieldsValid) return;

        try {
            setIsloading(true)
            const responseData = await createNewAdmin(email, fullName, phoneNumber)
            console.log("response", responseData)

            if (responseData === null) {
                setStatusAlert(
                    {
                        show: true,
                        message: "Could not create admin",
                        severity: "error"
                    }
                )
            } else if (responseData.error) {

                setStatusAlert(
                    {
                        show: true,
                        message: responseData.error,
                        severity: "error"
                    }
                )
            } else if (responseData.message) {


                setStatusAlert(
                    {
                        show: true,
                        message: "You have successfully created a new admin and default password has been sent to email address",
                        severity: "success"
                    }
                )
            }
        } catch (error) {
            console.log('Error creating admin', error)
            setStatusAlert(
                {
                    show: true,
                    message: "Could not create admin",
                    severity: "error"
                }
            )
        } finally {
            setIsloading(false)
        }

    }


    const countryCode = "+27"
    const validatePhoneNumber = (phoneNumber, countryCode) => {
        const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode);
        return parsedNumber ? parsedNumber.isValid() : false;
    };



    const validateInput = () => {
        let allFieldsValid = true;

        if (fullName === "") {
            setValidations(prev => {
                return { ...prev, fullName: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
            allFieldsValid = false;

        } else {
            setValidations(prev => {
                return { ...prev, fullName: { errorStatus: "", errorMessage: "" } }
            })
        }

        if (email === "") {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
            allFieldsValid = false;

        } else if (!emailRegex.test(email)) {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[2] } };
            });
            allFieldsValid = false;

        } else {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "", errorMessage: "" } }
            })
        }

        if (phoneNumber === "") {
            setValidations(prev => {
                return { ...prev, phoneNumber: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
            allFieldsValid = false;

        } else if (!validatePhoneNumber(phoneNumber, countryCode)) {
            setValidations(prev => {
                return { ...prev, phoneNumber: { errorStatus: "yes", errorMessage: <span className="error-message">{warningMessages[3]}</span> } }
            })
            allFieldsValid = false;

        } else {
            setValidations(prev => {
                return { ...prev, phoneNumber: { errorStatus: "", errorMessage: "" } }
            })
        }
        return allFieldsValid;

    }


    const handleToggleForm = () => {
        // console.log(isShowForm)
        setIsShowForm(!isShowForm)
    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: { xs: "90%", sm: "95%", lg: "100%" }, height: "auto", paddingTop: "10px", marginLeft: "auto", marginRight: "auto" }}>

            <PageHeadingContainer
                heading="Admin Management"
                subHeading="Some sub heading for this page"
            />


            <Box sx={{ display: "flex", flexDirection: "column", gap: "25px", marginTop: "50px", width: { lg: "100%", sm: "100%", xs: "100%" }, height: "100vh" }}>
                <Box sx={{ maxWidth: "240px", width: "50%", alignSelf: "flex-start" }}>
                    <Button text={"Add New Admin"} buttonFunction={handleToggleForm} isIconButton={true} iconType={isShowForm ? "up" : "down"} />
                </Box>
                {
                    isShowForm &&
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", border: 2, borderColor: "greys.main", width: "100%", margin: "0", padding: { xs: "40px", sm: "60px", md: "60px", lg: "60px" }, borderRadius: "5px", alignItems: { xs: "center", sm: "flex-start", md: "flex-start", lg: "flex-start" } }}>
                        {
                            statusAlert.show &&
                            <Alert severity={statusAlert.severity} >
                                {statusAlert.message}
                            </Alert>
                        }
                        <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" }, alignItems: "center", gap: "10px", }}>
                            <TextFields label={"Full Name"} placeholder='E.g Joe Zulu' isOutComes={false} errorStatus={validations.fullName.errorStatus} errorMessage={validations.fullName.errorMessage} setState={setFullName} state={fullName} />
                            <TextFields label={"Email"} placeholder='E.g zuluj@gmail.com' isOutComes={false} errorStatus={validations.email.errorStatus} errorMessage={validations.email.errorMessage} setState={setEmail} state={email} />
                            <TextFields label={"Phone Number"} placeholder='E.g +27812345678' isOutComes={false} errorStatus={validations.phoneNumber.errorStatus} errorMessage={validations.phoneNumber.errorMessage} setState={setPhoneNumber} state={phoneNumber} />
                        </Box>
                        {
                            isUnderEdit ?
                                (
                                    <Button text={"Save"} buttonFunction={() => { handleCreateAdmin() }} isIconButton={isLoading} iconType='loader' />

                                )
                                :
                                (
                                    <Button text={"Update"} buttonFunction={() => { handleUpdateAdmin() }} isIconButton={isLoading} iconType='loader' />

                                )
                        }
                    </Box>
                }
                {
                    setIsAlertDialogOpen &&
                    <AlertDialog message={"Are you really sure you want to delete this admin?"} setIsDeleteConfirmed={setIsDeleteConfirmed} isAlertDialogOpen={isAlertDialogOpen} setIsAlertDialogOpen={setIsAlertDialogOpen} deleteAdmin={deleteAdmin} adminId={id} />
                }

                <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell >FullName</StyledTableCell>
                                <StyledTableCell >Phone Number</StyledTableCell>
                                <StyledTableCell >Email Address</StyledTableCell>
                                {/* <StyledTableCell >Role</StyledTableCell> */}
                                <StyledTableCell >Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminList.map((data) => (
                                <StyledTableRow key={data.email}>
                                    {/* <StyledTableCell >{data.firstName}</StyledTableCell> */}
                                    <StyledTableCell >{data.fullName || data.firstName}</StyledTableCell>
                                    <StyledTableCell >{data.phoneNumber}</StyledTableCell>
                                    <StyledTableCell >{data.email}</StyledTableCell>
                                    {/* <StyledTableCell >{data.protein}</StyledTableCell> */}
                                    <StyledTableCell sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                                        <IconButton onClick={() => editAdmin(data.id, data.fullName, data.phoneNumber, data.email)}>
                                            <EditIcon />
                                        </IconButton>

                                        <IconButton onClick={() => { setID(data.id); setIsAlertDialogOpen(true) }}>
                                            <DeleteForeverIcon />
                                        </IconButton>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}

                        </TableBody>

                    </Table>
                </TableContainer>
            </Box>

        </Box>
    )
}

export default AdminManagement