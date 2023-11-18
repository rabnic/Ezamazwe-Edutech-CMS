import { Box, Paper, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '../Components/SectionHeading'
import SectionSubHeading from '../Components/SectionSubHeading'
import TextFields, { TextFieldPassword } from '../Components/TextFields';
import Button from '../Components/Buttons';

import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import { AdminLogin } from '../services/firebase';


export default function SignIn() {
  const navigate = useNavigate();
  const { signIn, isAuthenticated } = useAuthContext();
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

  })

  const warningMessages = ["* Input is required", "* Incorrect email or password", "* Invalid email", "* Password is not strong"]

  const handleSignIn = async () => {
    const response = await AdminLogin(email, password)
    if (response.message === 'Authorized') {

    } else {

    }


    // validateInput()
    signIn();
  }
  const validateInput = () => {
    if (email === "") {
      setValidations(prev => {
        return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[0] } };
      });
    } else if (!emailRegex.test(email)) {
      setValidations(prev => {
        return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[2] } };
      });
    } else {
      setValidations(prev => {
        return { ...prev, email: { errorStatus: "", errorMessage: "" } };
      });
    }

    if (password === "") {
      setValidations(prev => {
        return { ...prev, password: { errorStatus: "yes", errorMessage: warningMessages[0] } };
      });
    } else if (!passwordRegex.test(password)) {
      setValidations(prev => {
        return { ...prev, password: { errorStatus: "yes", errorMessage: warningMessages[3] } };
      });
    }

    else {
      setValidations(prev => {
        return { ...prev, password: { errorStatus: "", errorMessage: "" } };
      });
    }
  };

  const isMobile = useMediaQuery('(max-width:1000px)')

  return (
    <Box width={"100%"} height={"100vh"} sx={{ display: "flex" }}>
      {!isMobile && (
        <Box bgcolor={"#fff"} sx={{ width: "35%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={require("../assets/Logo.jpg")} width={"80%"} alt="Ezamazwe Logo" />
        </Box>
      )}

      <Box bgcolor={"#1C3F53"} sx={{ width: { sm: "100%", lg: "65%" }, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Paper sx={{ maxWidth: "500px", width: "80%", height: "fit-content", display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", borderRadius: "10px", paddingX: "60px", paddingY: "60px" }}>
          <Box sx={{ width: "100%", height: "fit-content", display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
              <SectionHeading>
                EZAMAZWE EDUTECH
              </SectionHeading>
              <SectionSubHeading>
                Login to your account
              </SectionSubHeading>
            </Box>
            <TextFields label={"Email"} errorStatus={validations.email.errorStatus} type="email" errorMessage={validations.email.errorMessage} setState={setEmail} state={email} />
            <TextFieldPassword label={"Password"} errorStatus={validations.password.errorStatus} errorMessage={validations.password.errorMessage} setState={setPassWord} state={password} />
            <Box sx={{ marginTop: "30px" }}>
              <Button text={"Sign In"} buttonFunction={() => { handleSignIn() }} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>


  )
}
