import { Box, Paper, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '../Components/SectionHeading'
import SectionSubHeading from '../Components/SectionSubHeading'
import TextFields, { TextFieldPassword } from '../Components/TextFields';
import Button from '../Components/Buttons';

import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import { useAdminContext } from '../context/adminContext';
import { AdminLogin, auth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function SignIn() {
  const navigate = useNavigate();
  const { signIn, isAuthenticated } = useAuthContext();
  const { loadAdmin } = useAdminContext();
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const allFieldsValid = validateInput()
    if (!allFieldsValid) return;

    signInWithEmailAndPassword(auth, email, password).then((data) => {
      console.log(data);
    signIn()

    }).catch((error) => {
      if (error.code === "auth/invalid-email") {
        console.log("Invalid email");
      } else if (error.code === "auth/invalid-password") {
        console.log("Invalid password");
      } else {
        console.log(error);
      }
    })
    // const response = await AdminLogin(email, password)
    // console.log("response", response)
    // if (response.message === "Invalid credentials") {

    // } else if (response.message === "Password has not been changed") {
    //   // This is just to test sdk login
    //   signInWithEmailAndPassword(auth, email, password).then((data) => {
    //     console.log(data);
    //   })
    //   loadAdmin(
    //     {
    //       email: email,
    //       passwordChanged: false
    //     }
    //   )
    //   signIn() // sets authorization state in authContext
    // } else {
    //   alert("Invalid credentials")
    // }
    // signIn();
  }
  const validateInput = () => {
    let allFieldsValid = true;
    if (email === "") {
      setValidations(prev => {
        return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[0] } };
      });
      allFieldsValid = false;
    } else if (!emailRegex.test(email)) {
      setValidations(prev => {
        return { ...prev, email: { errorStatus: "yes", errorMessage: warningMessages[2] } };
      });
      allFieldsValid = false;
    } else {
      setValidations(prev => {
        return { ...prev, email: { errorStatus: "", errorMessage: "" } };
      });
    }

    if (password === "") {
      setValidations(prev => {
        return { ...prev, password: { errorStatus: "yes", errorMessage: warningMessages[0] } };
      });
      allFieldsValid = false;
    } else {
      setValidations(prev => {
        return { ...prev, password: { errorStatus: "", errorMessage: "" } };
      });
    }
    return allFieldsValid;
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
              <Button text={"Sign In"} buttonFunction={() => { handleSignIn() }} isIconButton={true} iconType='loader'/>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>


  )
}
