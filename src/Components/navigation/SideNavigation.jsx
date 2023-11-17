import { Box } from '@mui/material'
import React, { useState } from 'react'
import SideNavTab from './SideNavTab'
import SideNavLogoutTab from './SideNavLogoutTab'
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AddBoxIcon from '@mui/icons-material/AddBox';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

function SideNavigation() {

    const [activeTab, setActiveTab] = useState("Home");
    const navigate = useNavigate()

  const handleNavigation = (tabName) => {
    setActiveTab(tabName);
    navigate(`/${tabName}`)
  }
 
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center",gap:"40px" ,bgcolor:"primary.main" ,width: "100%", height: "100%"}}>
      <Box
        component="img"
        sx={{
          width: "80%",
          marginTop: "10px",
        //   maxHeight: { xs: 233, md: 167 },
        //   maxWidth: { xs: 350, md: 250 },
        }}
        alt="Ezamazwe Logo"
        src={require('../../assets/LogoTransparent.png')}
      />

      <Box sx={{ display: "flex", width: "100%", flexDirection: "column", gap: 2, alignItems: "center", justifyContent: "flex-start", paddingLeft: "15px" }}>
        <SideNavTab Icon={HomeIcon} text={"Home"} navigateFunction={() => { handleNavigation("Home") }} active={activeTab === "Home"} />
        <SideNavTab Icon={AutoStoriesIcon} text={"Courses"} navigateFunction={() => { handleNavigation("Courses") }} active={activeTab === "Courses"} />
        <SideNavTab Icon={AddBoxIcon} text={"Add  New Course"} navigateFunction={() => { handleNavigation("AddNewCourse") }} active={activeTab === "AddNewCourse"} />
        <SideNavTab Icon={GroupsIcon} text={"Tutors"} navigateFunction={() => { handleNavigation("Tutors") }} active={activeTab === "Tutors"} />
        <SideNavTab Icon={AddBoxIcon} text={"Tutor Applications"} navigateFunction={() => { handleNavigation("TutorApplications") }} active={activeTab === "TutorApplications"} />
        <SideNavTab Icon={SchoolIcon} text={"Subscribers"} navigateFunction={() => { handleNavigation("Subscribers") }} active={activeTab === "Subscribers"} />
        <SideNavTab Icon={PersonIcon} text={"Admin Profile"} navigateFunction={() => { handleNavigation("AdminProfile") }} active={activeTab === "AdminProfile"} />
        <SideNavTab Icon={SupervisorAccountIcon} text={"Admins"} navigateFunction={() => { handleNavigation("AdminManagement") }} active={activeTab === "AdminManagement"} />
      </Box>
      <Box sx={{marginTop:"auto", width:"calc(100% - 15px)", display:"flex" ,justifyContent:"center", height:"80px" ,paddingRight:"15px"}}>
        <SideNavLogoutTab Icon={LogoutIcon} text={"Sign Out"} navigateFunction={() => {  }} />
      </Box>
    </Box>
  )
}

export default SideNavigation