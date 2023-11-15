import { Box, Paper } from '@mui/material'
import React from 'react'
import { TextFieldPassword } from '../Components/TextFields'
import SectionSubHeading from '../Components/SectionSubHeading'
import Button from '../Components/Buttons';


function AdminProfile() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
            <Paper sx={{ boxShadow: 3, maxWidth: "460px", width: "60%", height: "fit-content", display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", borderRadius: "10px", paddingX: "60px", paddingY: "60px" }}>
                <Box sx={{ width: "100%", height: "fit-content", display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <SectionSubHeading>
                            Change Your Password
                        </SectionSubHeading>
                    </Box>
                    <TextFieldPassword isForgot={false} label={"Old Password"} errorStatus={"yes"} errorMessage={"* Input is required"} setState={() => { }} />
                    <TextFieldPassword isForgot={false} label={"New Password"} errorStatus={"yes"} errorMessage={"* Input is required"} setState={() => { }} />
                    <TextFieldPassword isForgot={false} label={"Confirm Password"} errorStatus={"yes"} errorMessage={"* Input is required"} setState={() => { }} />
                    <Box sx={{ marginTop: "30px" }}>
                        <Button text={"Save"} buttonFunction={() => { }} />
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default AdminProfile