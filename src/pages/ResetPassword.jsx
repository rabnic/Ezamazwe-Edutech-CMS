import React, { useState } from 'react'
import { Box, Paper, Typography, useMediaQuery } from '@mui/material'
import SectionHeading from '../Components/SectionHeading'
import SectionSubHeading from '../Components/SectionSubHeading'
import TextFields from '../Components/TextFields'
import Button from '../Components/Buttons';


const ResetPassword = () => {
    const [email, setEmail] = useState("")
    const [validations, setValidations] = useState({
        email: {
            errorStatus: "",
            errorMessage: ""
        },

    })

    const warningMessages = ["* Input is required", "* Incorrect email or password", "* Invalid email"]

    const handleReset = () => {
        validateInput()

    }
    const validateInput = () => {
        if (email === "") {
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[0] } }
            })
        }else{
            setValidations(prev => {
                return { ...prev, email: { errorStatus: "", errorMessage: "" } }
            }) 
        }
    }



  const isMobile = useMediaQuery('(max-width:768px)')

  return (
    <Box width={"100%"} height={"100vh"} sx={{ display: "flex" }}>
      {!isMobile && (
        <Box bgcolor={"#fff"} sx={{ width: "35%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={require("../assets/Logo.jpg")} width={"80%"} />
        </Box>
      )}

      <Box bgcolor={"#1C3F53"} sx={{ width: { sm: "100%", lg: "65%" }, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Paper sx={{ maxWidth: "460px", width: "60%", height: "fit-content", display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", borderRadius: "10px", paddingX: "60px", paddingY: "60px" }}>
          <Box sx={{ width: "100%", height: "fit-content", display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <SectionHeading>
                EZAMAZWE EDUTECH
              </SectionHeading>
              <SectionSubHeading>
                Login to your account
              </SectionSubHeading>
            </Box>
            <TextFields label={"Email"} errorStatus={validations.email.errorStatus} errorMessage={validations.email.errorMessage} setState={setEmail} state={email}/>

            <Typography sx={{color:"primary.main", lineHeight:"24px"}}>
            You will receive a reset password link in your email  if provided email is recognized
            </Typography>
            <Box sx={{ marginTop: "30px" }}>
              <Button text={"Reset"} buttonFunction={() => {handleReset()}} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>

  )
}

export default ResetPassword