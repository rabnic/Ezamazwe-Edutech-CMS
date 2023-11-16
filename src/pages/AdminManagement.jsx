import React, { useState } from 'react'
import Button from '../Components/Buttons';
import { Box } from '@mui/material';
import TextFields from '../Components/TextFields';

function AdminManagement() {
    const [isShowForm, setIsShowForm] = useState(false)
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    const warningMessages = ["* Input is required", "* Incorrect email or password", "* Invalid email"]

    const handleAdmin = () => {
        validateInput()

    }
    const validateInput = () => {
        if (fullName === "") {
            setValidations(prev => {
                return { ...prev, fullName: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        } else {
            setValidations(prev => {
                return { ...prev, fullName: { errorStatus: "", errorMessage: "" } }
            })
        }  if (email === "") {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        }else if (!emailRegex.test(email)) {
            setValidations(prev => {
              return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[2] } };
            });
          }
        else{
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "", errorMessage: "" } }
            }) 
        }
        if (phoneNumber === "") {
            setValidations(prev => {
                return { ...prev, phoneNumber: { errorStatus: "yes", errorMessage: warningMessages[0] } }
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
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100vh" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: { lg: "50%", xs: "100%" }, height: "50vh", marginLeft: "auto", marginRight: "auto" }}>
                <Box sx={{ maxWidth: "240px", alignSelf: "flex-start" }}>
                    <Button text={"Add New Admin"} buttonFunction={handleToggleForm} isIconButton={true} toggle={isShowForm ? "up" : "down"} />
                </Box>
                {
                    isShowForm &&
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", border: 2, borderColor: "greys.main", width: "fit-content", padding: "60px", borderRadius: "5px", alignItems: { xs: "center", md: "flex-start" } }}>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "10px", }}>
                            <TextFields label={"Full Name"} errorStatus={validations.fullName.errorStatus} errorMessage={validations.fullName.errorMessage} setState={setFullName}  state={fullName}/>
                            <TextFields label={"Email"} errorStatus={validations.email.errorStatus} errorMessage={validations.email.errorMessage} setState={setEmail} state={email}/>
                            <TextFields label={"Phone Number"} errorStatus={validations.phoneNumber.errorStatus}errorMessage={validations.phoneNumber.errorMessage}setState={setPhoneNumber} state={phoneNumber}/>
                        </Box>
                        <Button text={"Save"} buttonFunction={() => {handleAdmin()}} />
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default AdminManagement