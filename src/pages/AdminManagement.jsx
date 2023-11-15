import React, { useState } from 'react'
import Button from '../Components/Buttons';
import { Box } from '@mui/material';
import TextFields from '../Components/TextFields';

function AdminManagement() {
    const [isShowForm, setIsShowForm] = useState(false)


    const handleToggleForm = () => {
        console.log(isShowForm)
        setIsShowForm(!isShowForm)
    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100vh"}}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "50px", width: "100%", height:"50vh", marginLeft: "auto", marginRight: "auto"}}>
                <Box sx={{ maxWidth: "240px", alignSelf: "flex-start" }}>
                    <Button text={"Add New Admin"} buttonFunction={handleToggleForm} isIconButton={true} toggle={isShowForm ? "up" : "down"} />
                </Box>
                {
                    isShowForm &&
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "50px", border: 2, borderColor: "greys.main", width: "fit-content", padding: "60px", borderRadius: "5px", alignItems: { xs: "center", md: "flex-start" } }}>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "10px", }}>
                            <TextFields label={"Full Name"} errorStatus={"yes"} errorMessage={"* Input is required"} setState={() => { }} />
                            <TextFields label={"Email"} errorStatus={"yes"} errorMessage={"* Input is required"} setState={() => { }} />
                            <TextFields label={"Phone Number"} errorStatus={"yes"} errorMessage={"* Input is required"} setState={() => { }} />
                        </Box>
                        <Button text={"Save"} buttonFunction={() => { }} />
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default AdminManagement