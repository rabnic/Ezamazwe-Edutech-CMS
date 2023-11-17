import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import { TextFieldPassword } from '../Components/TextFields'
import SectionSubHeading from '../Components/SectionSubHeading'
import Button from '../Components/Buttons';


function AdminProfile() {
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [confirmPassword, setConfirmPassWord] = useState("")
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [validations, setValidations] = useState({
        email: {
            errorStatus: "",
            errorMessage: ""
        },

        password: {
            errorStatus: "",
            errorMessage: ""
        },

        confirmPassword: {
            errorStatus: "",
            errorMessage: ""
        },

    })

    const warningMessages = ["* Input is required", "* Incorrect email or password", "* Password doesn't match"]
    const Passwordwarning = [
        " At least one lowercase letter",
        "At least one uppercase letter",
        "At least one digit",
        "At least one special character",
        "Minimum length of 8 characters"
    ]

    const handleProfile = () => {
        validateInput()

    }
    const validateInput = () => {
        if (email === "") {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        } else {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "", errorMessage: "" } }
            })
        }
        if (password === "") {
            setValidations(prev => {
                return { ...prev, password: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        } else if (!passwordRegex.test(password)) {
            setValidations(prev => {
                return { ...prev, password: { errorStatus: "yes", errorMessage: <ul>{Passwordwarning.map((item, index) => (<li key={index}>{item}</li>))}</ul> } };
            });
        }
        else {
            setValidations(prev => {
                return { ...prev, password: { errorStatus: "", errorMessage: "" } }
            })
        }

        if (confirmPassword === "") {
            setValidations(prev => {
                return { ...prev, confirmPassword: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        } else if (confirmPassword !== password) {
            setValidations(prev => {
                return { ...prev, confirmPassword: { errorStatus: "yes", errorMessage: Passwordwarning[2] } };
            });
        }
        else {
            setValidations(prev => {
                return { ...prev, confirmPassword: { errorStatus: "", errorMessage: "" } }
            })
        }
    }
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <Paper sx={{ boxShadow: 3, maxWidth: "460px", width: "60%", height: "fit-content", display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", borderRadius: "10px", paddingX: "60px", paddingY: "60px" }}>
                <Box sx={{ width: "100%", height: "fit-content", display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <SectionSubHeading>
                            Change Your Password
                        </SectionSubHeading>
                    </Box>
                    <TextFieldPassword isForgot={false} label={"Old Password"} errorStatus={validations.email.errorMessage} errorMessage={validations.email.errorMessage} setState={setEmail} state={email} />
                    <TextFieldPassword isForgot={false} label={"New Password"} errorStatus={validations.password.errorMessage} errorMessage={validations.password.errorMessage} setState={setPassWord} state={password} />
                    <TextFieldPassword isForgot={false} label={"Confirm Password"} errorStatus={validations.confirmPassword.errorMessage} errorMessage={validations.confirmPassword.errorMessage} setState={setConfirmPassWord} state={confirmPassword} />
                    <Box sx={{ marginTop: "30px" }}>
                        <Button text={"Save"} buttonFunction={() => handleProfile()} />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default AdminProfile