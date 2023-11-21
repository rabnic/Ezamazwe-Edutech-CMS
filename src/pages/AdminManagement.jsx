import React, { useState } from 'react'
import Button from '../Components/Buttons';
import { Alert, Box } from '@mui/material';
import TextFields from '../Components/TextFields';
import PageHeading from '../Components/PageHeading';
import PageSubHeading from '../Components/PageSubHeading';
import PageHeadingContainer from '../Components/PageHeadingContainer';
import PhoneNumber, { parsePhoneNumberFromString } from 'libphonenumber-js';
import { createNewAdmin } from '../services/firebase';


function AdminManagement() {
    const [isShowForm, setIsShowForm] = useState(false)
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [isLoading, setIsloading] = useState(false);
    const [statusAlert, setStatusAlert] = useState({ show: false, message: "", severity: "" });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^(\+27|0)[1-9]\d{8}$/;



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

    const handleCreateAdmin = async () => {
        // validateInput()
        try {
            setIsloading(true)
            await createNewAdmin(email, fullName, phoneNumber)
            setStatusAlert(
                {
                    show: true,
                    message: "You have successfully create a new admin and default password sent to email address",
                    severity: "success"
                }
            )
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
        if (fullName === "") {
            setValidations(prev => {
                return { ...prev, fullName: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        } else {
            setValidations(prev => {
                return { ...prev, fullName: { errorStatus: "", errorMessage: "" } }
            })
        }

        if (email === "") {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        } else if (!emailRegex.test(email)) {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[2] } };
            });
        } else {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "", errorMessage: "" } }
            })
        }

        if (phoneNumber === "") {
            setValidations(prev => {
                return { ...prev, phoneNumber: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        } else if (!validatePhoneNumber(phoneNumber, countryCode)) {
            setValidations(prev => {
                return { ...prev, phoneNumber: { errorStatus: "yes", errorMessage: <span className="error-message">{warningMessages[3]}</span> } }
            })
        } else {
            setValidations(prev => {
                return { ...prev, phoneNumber: { errorStatus: "", errorMessage: "" } }
            })
        }
    }


    const handleToggleForm = () => {
        console.log(isShowForm)
        setIsShowForm(!isShowForm)
    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px" }}>

            <PageHeadingContainer
                heading="Admin Management"
                subHeading="Some sub heading for this page"
            />


            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "50px", width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto" }}>
                <Box sx={{ maxWidth: "240px", alignSelf: "flex-start" }}>
                    <Button text={"Add New Admin"} buttonFunction={handleToggleForm} isIconButton={true} iconType={isShowForm ? "up" : "down"} />
                </Box>
                {
                    isShowForm &&
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", border: 2, borderColor: "greys.main", width: "fit-content", margin: "0", padding: "60px", borderRadius: "5px", alignItems: { xs: "center", md: "flex-start" } }}>
                        {
                            statusAlert.show &&
                            <Alert severity={statusAlert.severity} >
                                {statusAlert.message}
                            </Alert>
                        }
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" }, gap: "10px", }}>
                            <TextFields label={"Full Name"} errorStatus={validations.fullName.errorStatus} errorMessage={validations.fullName.errorMessage} setState={setFullName} state={fullName} />
                            <TextFields label={"Email"} errorStatus={validations.email.errorStatus} errorMessage={validations.email.errorMessage} setState={setEmail} state={email} />
                            <TextFields label={"Phone Number"} errorStatus={validations.phoneNumber.errorStatus} errorMessage={validations.phoneNumber.errorMessage} setState={setPhoneNumber} state={phoneNumber} />
                        </Box>
                        <Button text={"Save"} buttonFunction={() => { handleCreateAdmin() }} isIconButton={isLoading} iconType='loader' />
                    </Box>
                }
            </Box>

        </Box>
    )
}

export default AdminManagement