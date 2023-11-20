import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import { TextFieldPassword } from '../Components/TextFields'
import SectionSubHeading from '../Components/SectionSubHeading'
import Button from '../Components/Buttons';
import PageHeading from '../Components/PageHeading';
import PageSubHeading from '../Components/PageSubHeading';
import PageHeadingContainer from '../Components/PageHeadingContainer';
import { ResetPasswordFunction, updatePasswordReset } from '../services/firebase';
import { useAdminContext } from '../context/adminContext';


function AdminProfile() {
    const { admin, loadAdmin } = useAdminContext();

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
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
    const passwordWarningMessages = [
        " At least one lowercase letter",
        "At least one uppercase letter",
        "At least one digit",
        "At least one special character",
        "Minimum length of 8 characters"
    ]

    const handleChangePassword = async () => {
        // const allFieldsValid = validateInput();
        // if (!allFieldsValid) return;
        

        try {
            await ResetPasswordFunction(oldPassword, newPassword);
            await updatePasswordReset(admin.email)
            loadAdmin(
                prev => {
                    return {...prev, passwordChanged:true}
                }
            )
        } catch (error) {
            console.log("Error occured at reset password function:", error);
        }
    }



    const validateInput = () => {
        let allFieldsValid = true;
        if (oldPassword === "") {
            setValidations(prev => {
                return { ...prev, password: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        } else {
            setValidations(prev => {
                return { ...prev, password: { errorStatus: "", errorMessage: "" } }
            })
        }

        if (newPassword === "") {
            setValidations(prev => {
                return { ...prev, password: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        }
        // else if (!passwordRegex.test(newPassword)) {
        //     setValidations(prev => {
        //         return { ...prev, password: { errorStatus: "yes", errorMessage: <ul>{passwordWarningMessages.map((item, index) => (<li key={index}>{item}</li>))}</ul> } };
        //     });
        // }
        else {
            setValidations(prev => {
                return { ...prev, password: { errorStatus: "", errorMessage: "" } }
            })
        }

        if (confirmPassword === "") {
            setValidations(prev => {
                return { ...prev, confirmPassword: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        } else if (confirmPassword !== oldPassword) {
            setValidations(prev => {
                return { ...prev, confirmPassword: { errorStatus: "yes", errorMessage: passwordWarningMessages[2] } };
            });
        }
        else {
            setValidations(prev => {
                return { ...prev, confirmPassword: { errorStatus: "", errorMessage: "" } }
            })
        }
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px" }}>
            <PageHeadingContainer
                heading="Admin Profile"
                subHeading="Some sub heading for this page"
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto" }}>
                {/* */}
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                    <Paper sx={{ boxShadow: 3, maxWidth: "460px", width: "60%", height: "fit-content", display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", borderRadius: "10px", paddingX: "60px", paddingY: "60px" }}>
                        <Box sx={{ width: "100%", height: "fit-content", display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <SectionSubHeading>
                                    Change Your Password
                                </SectionSubHeading>
                            </Box>
                            <TextFieldPassword isForgot={false} label={"Old Password"} errorStatus={validations.password.errorMessage} errorMessage={validations.password.errorMessage} setState={setOldPassword} state={oldPassword} />
                            <TextFieldPassword isForgot={false} label={"New Password"} errorStatus={validations.password.errorMessage} errorMessage={validations.password.errorMessage} setState={setNewPassword} state={newPassword} />
                            <TextFieldPassword isForgot={false} label={"Confirm Password"} errorStatus={validations.confirmPassword.errorMessage} errorMessage={validations.confirmPassword.errorMessage} setState={setConfirmPassWord} state={confirmPassword} />
                            <Box sx={{ marginTop: "30px" }}>
                                <Button text={"Save"} buttonFunction={() => handleChangePassword()} />
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>

        </Box>

    )
}

export default AdminProfile