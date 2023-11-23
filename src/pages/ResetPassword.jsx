import React, { useState } from 'react'
import { Box, Paper, Typography, useMediaQuery } from '@mui/material'
import SectionHeading from '../Components/SectionHeading'
import SectionSubHeading from '../Components/SectionSubHeading'
import TextFields from '../Components/TextFields'
import Button from '../Components/Buttons';
import { ForgotPasswordFunction } from '../services/firebase'


const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [validations, setValidations] = useState({
    email: {
      errorStatus: "",
      errorMessage: ""
    },

  })

  const warningMessages = ["* Input is required", "* Incorrect email", "* Invalid email"]

  const handleReset = async () => {
    const isFieldValid = validateInput();
    if (!isFieldValid) return;

    try {
      setIsloading(true);
      const response = await ForgotPasswordFunction(email);
      console.log("reset password email response", response);
      setIsEmailSent(true)
    } catch (error) {
      console.log("Unable to update password:", error);
    } finally {
      setIsloading(false)

    }
  }

  const validateInput = () => {
    let isFieldValid = true;
    if (email === "") {
      setValidations(prev => {
        return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[0] } }
      })
      isFieldValid = false;
    } else if (!emailRegex.test(email)) {
      setValidations(prev => {
        return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[2] } };
      });
      isFieldValid = false;
    }
    else {
      setValidations(prev => {
        return { ...prev, email: { errorStatus: "", errorMessage: "" } }
      })
    }
    return isFieldValid;
  }



  const isMobile = useMediaQuery('(max-width:1000px)')

  return (
    <Box width={"100%"} height={"100vh"} sx={{ display: "flex" }}>
      {!isMobile && (
        <Box bgcolor={"#fff"} sx={{ width: "35%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={require("../assets/Logo.jpg")} width={"80%"} alt="Ezamazwe Logo" />
        </Box>
      )}

      <Box bgcolor={"#1C3F53"} sx={{ width: { sm: "100%", lg: "65%" }, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Paper sx={{ maxWidth: "500px", width: "60%", height: "fit-content", display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", borderRadius: "10px", paddingX: "60px", paddingY: "60px" }}>
          <Box sx={{ width: "100%", height: "fit-content", display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <SectionHeading>
                EZAMAZWE EDUTECH
              </SectionHeading>
              <SectionSubHeading>
                Reset your password
              </SectionSubHeading>
            </Box>
            <TextFields label={"Email"} errorStatus={validations.email.errorStatus} errorMessage={validations.email.errorMessage} setState={setEmail} state={email} />

            {
              isEmailSent &&
              <Typography sx={{ color: "primary.main", lineHeight: "24px", textAlign: "center" }}>
                A reset link has been sent to {email} provided that the email is recognized.
              </Typography>
            }
            <Box sx={{ marginTop: "30px" }}>
              <Button text={"Reset"} buttonFunction={() => { handleReset() }}   isIconButton={isLoading} iconType='loader'/>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default ResetPassword