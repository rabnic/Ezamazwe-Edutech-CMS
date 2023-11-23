import { Alert, Box, Paper } from '@mui/material'
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
    const [isLoading, setIsloading] = useState(false);
    const [statusAlert, setStatusAlert] = useState({ show: false, message: "", severity: "" });
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\[\]{}()<>^~\\|/`'"#;:,._+=\-])[\w@$!%*?&\[\]{}()<>^~\\|/`'"#;:,._+=\-]{8,}$/;


    const [validations, setValidations] = useState({
        oldPassword: {
            errorStatus: "",
            errorMessage: ""
        },

        newPassword: {
            errorStatus: "",
            errorMessage: ""
        },

        confirmPassword: {
            errorStatus: "",
            errorMessage: ""
        },

    })

    const warningMessages = ["* Input is required", "* Incorrect email or password", "* Password doesn't match", "* New and old password match"]

    const passwordWarningMessages = [
        "* At least one lowercase letter",
        "* At least one uppercase letter",
        "* At least one digit",
        "* At least one special character",
        "* Minimum length of 8 characters"
    ]

    const handleChangePassword = async () => {
        const allFieldsValid = validateInput();
        console.log("allFieldsValid", allFieldsValid)
        if (!allFieldsValid) return;

        try {
            setIsloading(true)
            await ResetPasswordFunction(oldPassword, newPassword);
            await updatePasswordReset(admin.email)
            loadAdmin(
                prev => {
                    return { ...prev, passwordChanged: true }
                }
            )
            setStatusAlert(
                {
                    show: true,
                    message: "Password successfully changed. Access to other pages opened",
                    severity: "success"
                }
            )

        } catch (error) {
            console.log("Error occured at reset password function:", error);
            setStatusAlert(
                {
                    show: true,
                    message: "Could not change password",
                    severity: "error"
                }
            )
        } finally {
            setIsloading(false)
        }
    }



    const validateInput = () => {
        let allFieldsValid = true;
        if (oldPassword === "") {
            setValidations(prev => {
                return { ...prev, oldPassword: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
            allFieldsValid = false;
        } else {
            setValidations(prev => {
                return { ...prev, oldPassword: { errorStatus: "", errorMessage: "" } }
            })
        }

        if (newPassword === "") {
            setValidations(prev => {
                return { ...prev, newPassword: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
            allFieldsValid = false;
        } else if (oldPassword === newPassword) {

            setValidations(prev => {
                return { ...prev, newPassword: { errorStatus: "yes", errorMessage: warningMessages[3] } };
            });
            allFieldsValid = false;
        }
        else if (!passwordRegex.test(newPassword)) {
            setValidations(prev => {
                return { ...prev, newPassword: { errorStatus: "yes", errorMessage: <ul>{passwordWarningMessages.map((item, index) => (<li key={index}>{item}</li>))}</ul> } };
            });
            allFieldsValid = false;
        }
        else {
            setValidations(prev => {
                return { ...prev, newPassword: { errorStatus: "", errorMessage: "" } }
            })
        }

        if (confirmPassword === "") {
            setValidations(prev => {
                return { ...prev, confirmPassword: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
            allFieldsValid = false;
        } else if (confirmPassword !== newPassword) {

            setValidations(prev => {
                return { ...prev, confirmPassword: { errorStatus: "yes", errorMessage: warningMessages[2] } };
            });
            allFieldsValid = false;
        }
        else {
            setValidations(prev => {
                return { ...prev, confirmPassword: { errorStatus: "", errorMessage: "" } }
            })
        }
        return allFieldsValid;
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%", paddingTop: "10px", marginLeft: { xs: "-20px" } }}>
            <PageHeadingContainer
                heading="Admin Profile"
                subHeading="Some sub heading for this page"
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto", marginLeft: { xs: "10px" } }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                    <Paper sx={{ boxShadow: 5, maxWidth: { xs: "460px", md: "460px", lg: "550px" }, width: { xs: "90%", md: "80%", lg: "100%" }, height: "fit-content", display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", borderRadius: "10px", paddingX: "60px", paddingY: "60px" }}>
                        <Box sx={{ width: "100%", height: "fit-content", display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <SectionSubHeading>
                                    Change Your Password
                                </SectionSubHeading>
                            </Box>
                            {
                                statusAlert.show &&
                                <Alert severity={statusAlert.severity} >
                                    {statusAlert.message}
                                </Alert>
                            }
                            <TextFieldPassword isForgot={false} label={"Old Password"} errorStatus={validations.oldPassword.errorMessage} errorMessage={validations.oldPassword.errorMessage} setState={setOldPassword} state={oldPassword} />
                            <TextFieldPassword isForgot={false} label={"New Password"} errorStatus={validations.newPassword.errorMessage} errorMessage={validations.newPassword.errorMessage} setState={setNewPassword} state={newPassword} />
                            <TextFieldPassword isForgot={false} label={"Confirm Password"} errorStatus={validations.confirmPassword.errorMessage} errorMessage={validations.confirmPassword.errorMessage} setState={setConfirmPassWord} state={confirmPassword} />
                            <Box sx={{ marginTop: "30px" }}>
                                <Button text={"Save"} buttonFunction={() => handleChangePassword()} isIconButton={isLoading} iconType='loader' />
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>

        </Box>

    )
}

export default AdminProfile